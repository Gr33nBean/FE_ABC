import ImageIcon from "@/assets/images/Home/image.svg";
import FileIcon from "@/assets/images/Home/file.svg";
import PhoneIcon from "@/assets/images/Home/phone.svg";
import SendIcon from "@/assets/images/Home/send.svg";
import Button from "@/components/ui/Home/Button";
import Avatar from "../Avatar";
const CreatePost = () => {
  return (
    <div
      className={`w-full py-1 px-5 border-b-[0.5px] border-extra-light-gray`}
    >
      <div
        className={`w-full flex flex-row  gap-1 h-[144px] border-b-[0.5px] border-extra-light-gray`}
      >
        <Avatar />
        <textarea
          placeholder="Có gì mới?!"
          className={`text-xl font-normal !outline-none text-left flex-1 resize-none mt-3`}
        />
      </div>

      <div className={`h-[67px] w-full pl-[52px] py-3 gap-3 flex flex-row`}>
        <div className={`flex flex-1`}>
          <button>
            <img src={ImageIcon} alt="cc" />
          </button>
          <button>
            <img src={FileIcon} alt="cc" />
          </button>
          <button>
            <img src={PhoneIcon} alt="cc" />
          </button>
          <button>
            <img src={SendIcon} alt="cc" />
          </button>
        </div>
        <Button text="Đăng bài" onClick={() => {}} className={`w-[154px]`} />
      </div>
    </div>
  );
};

export default CreatePost;
