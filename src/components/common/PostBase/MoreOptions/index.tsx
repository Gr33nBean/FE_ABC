import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import ThreeDotsIcon from "@/assets/images/Home/three-dots.svg";
import { useCallback, useState } from "react";
import CustomDialog from "../../Dialog";
import { useAppDispatch } from "@/redux/hooks";
import { postService } from "@/services/post.service";
import { setIsLoading } from "@/redux/features/dialogSlice";
import { eventService } from "@/services/event.service";
import { commentService } from "@/services/comment.service";
import { requestService } from "@/services/request.service";
import { resourceUsingService } from "@/services/resourceUsing.service";

export type MoreOptionsType =
  | "comment"
  | "event"
  | "post"
  | "request"
  | "resourcePost"
  | "resourceUsing";

const MoreOptions = ({ type, id }: { type?: MoreOptionsType; id?: number }) => {
  const dispatch = useAppDispatch();

  // const HandleEdit = useCallback(() => {
  //   alert(type + "-" + id);
  // }, [id, type]);

  const HandleDelete = useCallback(async () => {
    if (!id || !type) {
      return;
    }
    dispatch(setIsLoading(true));

    if (type == "comment") {
      await commentService.deleteComment([id]);
    }
    if (type == "post") {
      await postService.deletePost([id]);
    }
    if (type == "event") {
      await eventService.deleteEvent([id]);
    }

    if (type == "request") {
      await requestService.deleteRequest([id]);
    }

    // thiếu resourcePost

    if (type == "resourceUsing") {
      await resourceUsingService.deleteResourceUsing([id]);
    }

    dispatch(setIsLoading(false));
    setIsOpenDelete(false);
  }, [id, type, dispatch]);

  const [isOpenDelete, setIsOpenDelete] = useState(false);

  return (
    <Menu>
      <MenuButton>
        <img src={ThreeDotsIcon} alt="three-dots" />
      </MenuButton>

      <MenuItems
        anchor="bottom end"
        className="bg-white rounded-xl shadow-2xl z-[999]"
      >
        {[
          // { text: "Chỉnh sửa", onClick: HandleEdit },
          {
            text: "Xóa",
            onClick: () => {
              setIsOpenDelete(true);
            },
          },
        ].map((item, index) => (
          <MenuItem key={index}>
            <p
              className="py-2 hover:bg-extra-light-gray px-5 cursor-pointer"
              onClick={item.onClick}
            >
              {item.text}
            </p>
          </MenuItem>
        ))}
      </MenuItems>

      <CustomDialog
        open={isOpenDelete}
        onClose={() => setIsOpenDelete(false)}
        className="px-0 py-0 relative overflow-y-auto h-fit !w-fit "
      >
        <div className="w-full min-h-full h-fit flex flex-col px-8 py-6 gap-4">
          <p className="w-full text-center text-xl font-bold">Xác nhận xóa?</p>

          <div className="flex items-center gap-2 justify-center">
            <button
              className="px-8 py-1 text-lg rounded-full border border-dark-gray bg-dark-gray bg-opacity-5 text-dark-gray"
              onClick={() => setIsOpenDelete(false)}
            >
              Hủy
            </button>
            <button
              className="px-8 py-1 text-lg rounded-full border text-blue border-blue bg-blue bg-opacity-5"
              onClick={HandleDelete}
            >
              Xóa
            </button>
          </div>
        </div>
      </CustomDialog>
    </Menu>
  );
};

export default MoreOptions;
