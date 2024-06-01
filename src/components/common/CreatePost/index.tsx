import ImageIcon from "@/assets/images/Home/image.svg";
import FileIcon from "@/assets/images/Home/file.svg";
import PhoneIcon from "@/assets/images/Home/phone.svg";
import SendIcon from "@/assets/images/Home/send.svg";
import Button from "@/components/ui/Home/Button";
import Avatar from "../Avatar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setIsCreatePostInEvent,
  setIsOpenCreate,
} from "@/redux/features/dialogSlice";
import { selectSignedUser } from "@/redux/features/accountSlice";
const CreatePost = ({
  placeholder,
  buttonText,
  isComment,
  isCreatePostInEvent,
}: {
  placeholder?: string;
  buttonText?: string;
  isComment?: boolean;
  isCreatePostInEvent?: number;
}) => {
  const dispatch = useAppDispatch();
  const signedUser = useAppSelector(selectSignedUser);
  return (
    <div
      className={`w-full py-1 px-5 border-b-[0.5px] border-extra-light-gray cursor-pointer`}
      onClick={() => {
        dispatch(setIsOpenCreate(true));
        isCreatePostInEvent &&
          dispatch(setIsCreatePostInEvent(isCreatePostInEvent));
      }}
      style={{
        pointerEvents: isComment ? "none" : "all",
      }}
    >
      <div
        className={`w-full flex items-center gap-2 pb-14 pt-2 border-b-[0.5px] border-extra-light-gray pointer-events-none`}
      >
        <Avatar src={signedUser?.avatar} />
        <p
          className={`text-xl font-normal text-dark-gray !outline-none text-left flex-1 resize-none `}
        >
          {placeholder ? placeholder : " Có gì mới?!"}
        </p>
      </div>

      <div className={`w-full pl-[48px] py-2 gap-2 flex pointer-events-none`}>
        <div className={`flex flex-1`}>
          <button>
            <img src={ImageIcon} alt="" />
          </button>
          <button
            style={{
              display: "none",
            }}
          >
            <img src={FileIcon} alt="" />
          </button>
          {!isComment && (
            <>
              <button>
                <img src={PhoneIcon} alt="" />
              </button>
              <button>
                <img src={SendIcon} alt="" />
              </button>
            </>
          )}
        </div>
        <Button
          text={buttonText ? buttonText : "Đăng bài"}
          onClick={() => {}}
          className={`w-[154px]`}
        />
      </div>
    </div>
  );
};

export default CreatePost;
