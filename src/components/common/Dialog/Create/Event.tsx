import Button from "@/components/ui/Home/Button";
import { EventType as EventSample } from "@/constants/type";
import { selectSignedUser } from "@/redux/features/accountSlice";
import { setIsLoading, setIsOpenCreate } from "@/redux/features/dialogSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { eventService } from "@/services/event.service";
import { EventType, User } from "@/services/type";
import { convertDateToTimestamp } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Avatar from "../../Avatar";
import Input from "../../Input";
import Mention from "../../Input/Mention";
import Select from "../../Input/Select";
import Textarea from "../../Input/Textarea";
type createEvent = {
  name: string;
  reporterUid: string;
  eventTypeId: string;
  description: string;
  startAt: string;
  endAt: string;
  status: string;
};
const Event = () => {
  const signedUser = useAppSelector(selectSignedUser);
  const dispatch = useAppDispatch();

  const { data } = useQuery<EventType[]>({
    queryKey: ["event_type"],
    queryFn: async () => {
      // const res = await eventTypeService.getAll();
      // return res;
      return EventSample.items.map(
        (item) => ({ id: item.label, name: item.label_vn } as EventType)
      );
    },
  });
  const [participantsUid, setParticipantsUid] = useState<User[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<createEvent>({
    defaultValues: { reporterUid: signedUser?.uid, status: "create" },
  });

  const onSubmit: SubmitHandler<createEvent> = async (data) => {
    if (!signedUser?.uid) {
      return;
    }
    dispatch(setIsLoading(true));

    const payload: {
      eventTypeId: string;
      reporterUid: string;
      // resourceId: number;
      postsId: number[];
      paticipantsUid: string[];
      permissionIdToCRUDPost: ["employee", "employee", "employee", "employee"];
      name: string;
      description: string;
      startAt: number;
      endAt: number;
      status: "create";
    } = {
      eventTypeId: data.eventTypeId,
      reporterUid: data.reporterUid,
      postsId: [],
      paticipantsUid: participantsUid?.map((item) => item.uid) ?? [],
      permissionIdToCRUDPost: ["employee", "employee", "employee", "employee"],
      name: data.name,
      description: data.description,
      startAt: convertDateToTimestamp(new Date(data.startAt)),
      endAt: convertDateToTimestamp(new Date(data.endAt)),
      status: "create",
    };

    console.log(payload);

    const res = await eventService.createEvent([payload]);
    if (res) {
      toast.success("Tạo sự kiện thành công");
    }
    dispatch(setIsLoading(false));
    dispatch(setIsOpenCreate(false));
    reset();
    setParticipantsUid([]);
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
              label="Loại sự kiện"
              {...register("eventTypeId", { required: true })}
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

            <Mention
              label="Người tham gia"
              mentionData={participantsUid}
              onChangeMentionData={(value: User) => {
                const exist = participantsUid.find(
                  (item) => item.uid === value.uid
                );
                if (exist) {
                  setParticipantsUid(
                    participantsUid.filter((item) => item.uid !== value.uid)
                  );
                } else {
                  setParticipantsUid([...participantsUid, value]);
                }
              }}
              deleteMentionData={() => {
                setParticipantsUid([]);
              }}
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
              Thêm sự kiện
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="w-full  bg-white py-3 px-5 flex items-center gap-2 border-t border-extra-light-gray">
        <p className="flex-1 text-sm font-light text-dark-gray">
          Tất cả mọi người có thể xem và đăng bài
        </p>
        <Button type="submit" text="Tạo sự kiện" className="px-4" />
      </div>
    </form>
  );
};

export default Event;
