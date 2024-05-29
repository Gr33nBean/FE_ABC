import CustomDialog from "@/components/common/Dialog";
import Input from "@/components/common/Input";
import Textarea from "@/components/common/Input/Textarea";
import { selectSignedUser, setSignedUser } from "@/redux/features/accountSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { GGThumbnail, uploadService } from "@/services/upload.service";
import { userService } from "@/services/user.service";

import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

type EditFormType = {
  userName: string;
  birthday: string;
  description: string;
};

const EditProfile = () => {
  const signedUser = useAppSelector(selectSignedUser);
  console.log(signedUser);
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [avatar, setAvatar] = useState<File | undefined>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EditFormType>({
    defaultValues: {
      userName: signedUser?.username,
      birthday: new Date(signedUser ? signedUser.birthday * 1000 : 0)
        .toISOString()
        .split("T")[0],
      description: signedUser?.description,
    },
  });

  const onSubmit: SubmitHandler<EditFormType> = async (data) => {
    if (!signedUser) {
      return;
    }
    let payload: {
      uid: string;
      departmentId: string;
      grade: string;
      username: string;
      birthday: number;
      email: string;
      avatar: string;
      description: string;
      permissionIdToCRUD: string[];
      status: string;
    } = {
      uid: signedUser.uid,
      departmentId: signedUser.departmentId,
      grade: signedUser.grade,
      username: data.userName,
      birthday: new Date(data.birthday).getTime() / 1000,
      email: signedUser.email,
      avatar: signedUser.avatar,
      description: data.description,
      permissionIdToCRUD: signedUser.permissionIdToCRUD,
      status: signedUser.status,
    };
    if (avatar) {
      const res = await uploadService.uploadFiles([avatar]);
      payload.avatar = GGThumbnail + res[0].id;
    }
    const res = await userService.updateUser([payload]);
    if (res) {
      toast.success("Cập nhật thành công");
      setIsOpen(false);
      dispatch(
        setSignedUser({
          ...signedUser,
          username: payload.username,
          birthday: payload.birthday,
          description: payload.description,
          avatar: payload.avatar,
        })
      );
    }
  };

  useEffect(() => {
    if (isOpen) {
      reset({
        userName: signedUser?.username,
        birthday: new Date(signedUser ? signedUser.birthday * 1000 : 0)
          .toISOString()
          .split("T")[0],
        description: signedUser?.description,
      });
      setAvatar(undefined);
    }
  }, [signedUser, isOpen, reset]);

  // ava, password
  return (
    <>
      <button
        className="rounded-full border border-dark-gray bg-opacity-10 text-dark-gray text-center px-4 h-fit py-2 text-[16px] leading-4 font-semibold hover:opacity-90"
        onClick={() => setIsOpen(true)}
      >
        Chỉnh sửa
      </button>

      <CustomDialog open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="w-full">
          <p className="w-full text-center font-bold text-lg mb-4">Chỉnh sửa</p>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
            <div className="w-full flex items-start gap-3">
              <label className="size-[164px] rounded-xl overflow-hidden cursor-pointer relative">
                <img
                  className="size-full object-cover"
                  src={
                    avatar ? URL.createObjectURL(avatar) : signedUser?.avatar
                  }
                  alt=""
                />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setAvatar(e.target.files?.[0])}
                />
                <div className="absolute inset-0 size-full z-10 opacity-0 hover:opacity-100 bg-black bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                    <circle cx="12" cy="13" r="3" />
                  </svg>
                </div>
              </label>

              <div className="flex flex-col flex-1 gap-3">
                <Input
                  label="Tên người dùng"
                  {...register("userName", { required: true })}
                  placeholder="Tên người dùng"
                />
                {errors.userName && (
                  <span className="text-pink text-sm">
                    Tên người dùng không được trống
                  </span>
                )}

                <Input
                  label="Ngày sinh"
                  {...register("birthday", {
                    required: true,
                  })}
                  placeholder="Ngày sinh"
                  type="date"
                />
                {errors.birthday && (
                  <span className="text-pink text-sm">
                    Ngày sinh không được trống
                  </span>
                )}

                <Textarea
                  label="Mô tả"
                  rows={4}
                  {...register("description")}
                  placeholder="Mô tả"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 text-center bg-blue rounded-lg py-2 text-white font-semibold"
            >
              Lưu
            </button>
          </form>
        </div>
      </CustomDialog>
    </>
  );
};

export default EditProfile;
