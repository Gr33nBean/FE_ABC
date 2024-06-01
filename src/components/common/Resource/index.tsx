import Button from "@/components/ui/Home/Button.tsx";
import { getColorFromType, getVNLabel } from "@/constants/type.ts";
import { selectSignedUser } from "@/redux/features/accountSlice.ts";
import { setIsLoading } from "@/redux/features/dialogSlice.ts";
import { useAppDispatch, useAppSelector } from "@/redux/hooks.ts";
import { resourceUsingService } from "@/services/resourceUsing.service.ts";
import { convertDateToTimestamp } from "@/utils/index.tsx";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import CustomDialog from "../Dialog/index.tsx";
import Input from "../Input/index.tsx";
import PostImages from "../Post/PostImages/index.tsx";
import PostBase from "../PostBase/index.tsx";

export type ResourceProps = {
  id: number;
  createAt: string;
  name: string;
  description: string;
  images: string[];
  type: string;
  isFree: boolean;
};

type createResourceUsing = {
  startAt: string;
  endAt: string;
};

const ResourcePost = ({
  id,
  createAt,
  name,
  description,
  images,
  type,
  isFree,
}: ResourceProps) => {
  const color = getColorFromType("resource");
  const signedUser = useAppSelector(selectSignedUser);
  const dispatch = useAppDispatch();
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createResourceUsing>({
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<createResourceUsing> = async (data) => {
    if (!signedUser?.uid) {
      return;
    }
    dispatch(setIsLoading(true));

    const payLoad: {
      resourceId: number;
      reporterUid: string;
      borrowerUid: string;
      startAt: number;
      endAt: number;
      status: "create";
    } = {
      resourceId: id,
      reporterUid: "AMaTtLLZ3ge3eyJyUjkzgawblfe2",
      borrowerUid: signedUser?.uid,
      startAt: convertDateToTimestamp(new Date(data.startAt)),
      endAt: convertDateToTimestamp(new Date(data.endAt)),
      status: "create",
    };

    console.log(payLoad);

    const res = await resourceUsingService.createResourceUsing([payLoad]);
    if (res) {
      toast.success("Mượn tài nguyên thành công");
    }
    dispatch(setIsLoading(false));
    setIsOpenDialog(false);
    reset();
  };

  return (
    <PostBase
      id={id}
      type="resourcePost"
      userName={name}
      createdAt={createAt}
      isResource={true}
    >
      <div className={`flex-1 flex flex-col gap-1`}>
        {/* Content */}
        <div className="w-full flex flex-col gap-1 text-base font-normal text-black">
          <p>Mô tả: {description}</p>
          <p>Trạng thái: {isFree ? "Có sẵn" : "Không có sẵn"}</p>
        </div>

        <PostImages imageUrls={images} />

        <div
          className="w-full flex flex-col text-sm font-semibold "
          style={{
            display: !isFree ? "none" : "block",
          }}
        >
          <button
            className="w-full rounded-md border text-center py-1 hover:opacity-70"
            style={{
              color: color,
              borderColor: color,
              backgroundColor: color + "20",
            }}
            onClick={() => setIsOpenDialog(true)}
          >
            Mượn {getVNLabel("resource", type)?.toLowerCase()}
          </button>

          <CustomDialog
            open={isOpenDialog}
            onClose={() => setIsOpenDialog(false)}
            className=""
          >
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
              <div className="px-5 w-full flex flex-col gap-4 items-center justify-center">
                <p className="text-center w-full font-bold">Mượn tài nguyên</p>

                <Input
                  type="datetime-local"
                  label="Bắt đầu"
                  {...register("startAt", { required: true })}
                />
                <div className="w-full">
                  <Input
                    type="datetime-local"
                    label="Kết thúc"
                    {...register("endAt", {
                      required: true,
                      validate: (value, formValue) => {
                        const compare =
                          new Date(value).getTime() >
                          new Date(formValue.startAt).getTime();
                        return compare;
                      },
                    })}
                  />
                  {errors.endAt && (
                    <p className="text-pink text-xs">
                      Kết thúc phải sau bắt đầu
                    </p>
                  )}
                </div>

                <Button type="submit" text="Tạo" className="px-4" />
              </div>
            </form>
          </CustomDialog>
        </div>
      </div>
    </PostBase>
  );
};

export default ResourcePost;
