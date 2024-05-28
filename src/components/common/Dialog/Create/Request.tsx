import { selectSignedUser } from "@/redux/features/accountSlice";
import { useAppSelector } from "@/redux/hooks";
import { eventTypeService } from "@/services/eventType.service";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Avatar from "../../Avatar";
import Input from "../../Input";
import Textarea from "../../Input/Textarea";
import Select from "../../Input/Select";
import { TABS } from "@/constants";
import { EventType } from "@/services/type";
import Button from "@/components/ui/Home/Button";
type requestEvent = {
  name: string;
  reporterUid: string;
  eventTypeId: string;
  description: string;
  startAt: string;
  endAt: string;
  status: string;
};
const Request = () => {
  const signedUser = useAppSelector(selectSignedUser);

  const { data } = useQuery<EventType[]>({
    queryKey: ["event_type"],
    queryFn: async () => {
      const res = await eventTypeService.getAll();
      return res;
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<requestEvent>({
    defaultValues: { reporterUid: signedUser?.uid, status: "create" },
  });

  const onSubmit: SubmitHandler<requestEvent> = (data) => {
    console.log(data);

    return;
    reset();
  };

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
                label="Tiêu đề"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="text-pink text-xs">Tiêu đề không được trống</p>
              )}
            </div>
            <Select
              label="Loại yêu cầu"
              {...register("eventTypeId", { required: true })}
            >
              {[
                { id: "", name: "" },
                ...(data?.filter((item) => item.id != TABS.EVENT) ?? []),
              ].map((item, index) => (
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

            <Input
              type="datetime-local"
              label="Bắt đầu"
              {...register("startAt", { required: true })}
            />

            {/* keep endat is always after startat */}
            <div>
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
                <p className="text-pink text-xs">Kết thúc phải sau bắt đầu</p>
              )}
            </div>
          </div>
        </div>

        {/*  */}
        <div className="flex items-center w-full gap-2">
          <div className="size-[48px] flex justify-center items-center">
            <Avatar src={signedUser?.avatar} className="size-[26px]" />
          </div>
          <div className="flex-1 flex items-center gap-3">
            <p className="flex-1 text- font-light text-dark-gray">
              Thêm yêu cầu
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="w-full  bg-white py-3 px-5 flex items-center gap-2 border-t border-extra-light-gray">
        <p className="flex-1 text-sm font-light text-dark-gray">
          Tất cả mọi người có thể xem và đăng bài
        </p>
        <Button type="submit" text="Tạo yêu cầus" className="px-4" />
      </div>
    </form>
  );
};

export default Request;
