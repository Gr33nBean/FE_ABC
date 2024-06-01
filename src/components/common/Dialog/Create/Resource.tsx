import { selectSignedUser } from "@/redux/features/accountSlice";
import { setIsLoading, setIsOpenCreate } from "@/redux/features/dialogSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { resourceService } from "@/services/resource.service";
import { resourceTypeService } from "@/services/resourceType.service";
import { ResourceType } from "@/services/type";
import { uploadService } from "@/services/upload.service";
import { getFileFromId } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Avatar from "../../Avatar";
import Input from "../../Input";
import Select from "../../Input/Select";
import Textarea from "../../Input/Textarea";
import FileInput from "../../Input/File";
import Button from "@/components/ui/Home/Button";

type createResource = {
  resourceTypeId: string;
  name: string;
  description: string;
};

const Resource = () => {
  const signedUser = useAppSelector(selectSignedUser);
  const dispatch = useAppDispatch();
  const [images, setImages] = useState<File[]>([]);

  const { data } = useQuery<ResourceType[]>({
    queryKey: ["resourceType_tabs"],
    queryFn: async () => {
      const res = await resourceTypeService.getAll();
      return res;
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<createResource>({
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<createResource> = async (data) => {
    if (!signedUser?.uid) {
      return;
    }
    dispatch(setIsLoading(true));
    const payload: {
      resourceTypeId: string;
      name: string;
      images: string[];
      description: string;
      isFree: true;
      status: "create";
    } = {
      resourceTypeId: data.resourceTypeId,
      name: data.name,
      images: [],
      description: data.description,
      isFree: true,
      status: "create",
    };
    if (images && images.length > 0) {
      const res = await uploadService.uploadFiles(images);
      payload.images = getFileFromId(res, "image").map((item) => item.url);
    }

    const res = await resourceService.create([payload]);
    console.log(payload);
    if (res) {
      toast.success("Tạo tài nguyên thành công.");
    }
    reset();
    setImages([]);
    dispatch(setIsLoading(false));
    dispatch(setIsOpenCreate(false));
  };

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const imageRef = useRef<any>(null);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="p-5 flex flex-col">
        {/*  */}
        <div className=" flex items-stretch gap-2">
          {/*  */}
          <div className="flex flex-col items-center gap-2">
            <Avatar src={signedUser?.avatar} />
            <div className="bg-extra-light-gray w-[1px] flex-1" />
          </div>
          {/*  */}
          <div className="flex-1 flex flex-col gap-4">
            <p className={`text-lg font-bold flex-1`}>{signedUser?.username}</p>

            <div>
              <Input
                label="Tên tài nguyên"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="text-pink text-xs">Tên không được trống</p>
              )}
            </div>
            <Select
              label="Loại tài nguyên"
              {...register("resourceTypeId", { required: true })}
            >
              {[{ id: "", name: "" }, ...(data ?? [])].map((item, index) => (
                <option key={index} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Select>
            <Textarea
              rows={3}
              className="resize-none"
              label="Mô tả"
              {...register("description", { maxLength: 300 })}
            />

            <FileInput
              ref={imageRef}
              label={images.length > 0 ? "Hình ảnh" : ""}
              files={images}
              type="image"
              handleChange={setImages}
            />
          </div>
        </div>

        {/*  */}
        <div className="flex items-center w-full gap-2">
          <div className="size-[48px] flex justify-center items-center">
            <Avatar src={signedUser?.avatar} className="!size-[26px]" />
          </div>
          <div className="flex-1 flex items-center gap-3">
            <p className="flex-1 text- font-light text-dark-gray">
              Thêm tài nguyên
            </p>

            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1da1f2"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                    <circle cx="9" cy="9" r="2" />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                ),
                onclick: () => {
                  if (imageRef.current) {
                    // click
                    imageRef.current.click();
                  }
                },
              },
            ].map((item, index) => (
              <button key={index} onClick={item.onclick}>
                {item.icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      {isValid && (
        <div className="w-full  bg-white py-3 px-5 flex items-center gap-2 border-t border-extra-light-gray">
          <p className="flex-1 text-sm font-light text-dark-gray">
            Tất cả mọi người có thể xem
          </p>
          <Button type="submit" text="Tạo tài nguyên" className="px-4" />
        </div>
      )}
    </form>
  );
};

export default Resource;
