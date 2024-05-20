import Button from './Button';
import ImageIcon from '@/assets/icons/image.svg';
import FileIcon from '@/assets/icons/file.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import SendIcon from '@/assets/icons/send.svg';

const NewPost = () => {
  return (
    <div
      className={`w-full py-1 px-5 border-b-[0.5px] border-extra-light-gray`}
    >
      <div
        className={`w-full flex flex-row  gap-1 h-[144px] border-b-[0.5px] border-extra-light-gray`}
      >
        <img
          src='https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'
          className={`w-11 h-11 rounded-full object-cover`}
        />
        <textarea
          placeholder='Có gì mới?!'
          className={`text-xl font-normal !outline-none text-left flex-1 resize-none`}
        />
      </div>

      <div className={`h-[67px] w-full pl-[52px] py-3 gap-3 flex flex-row`}>
        <div className={`flex flex-1`}>
          <button>
            <img src={ImageIcon} alt='cc' />
          </button>
          <button>
            <img src={FileIcon} alt='cc' />
          </button>
          <button>
            <img src={PhoneIcon} alt='cc' />
          </button>
          <button>
            <img src={SendIcon} alt='cc' />
          </button>
        </div>
        <Button text='Đăng bài' onClick={() => {}} className={`w-[154px]`} />
      </div>
    </div>
  );
};

export default NewPost;
