import ThreeDotsIcon from "@/assets/images/Home/three-dots.svg";
import ArrowRightIcon from "@/assets/images/Home/arrow-right.svg";
import Tag from "../Tag";
import { getColorFromType } from "@/constants/type";
import Avatar from "../Avatar";

type EventProps = {
  name: string;
  time: string;
  tag: string;
  title: string;
  noOfPeople: number;
  content: string;
  room: string;
  from: string;
  to: string;
};

const Event = ({
  name,
  time,
  tag,
  title,
  noOfPeople,
  content,
  room,
  from,
  to,
}: EventProps) => {
  return (
    <div
      className={`w-full flex flex-row px-5 py-3 gap-2 border-b-[0.5px] border-extra-light-gray`}
    >
      <Avatar />

      <div className={`gap-3 w-full`}>
        <div className={`w-full flex flex-row justify-between items-center`}>
          <p className={` text-lg font-bold`}>{name}</p>
          <div className={`flex flex-row items-center gap-3`}>
            <p className={`text-base font-normal text-dark-gray`}>{time}</p>
            <button>
              <img src={ThreeDotsIcon} alt="three-dots" />
            </button>
          </div>
        </div>

        <div className={`gap-1`}>
          <div className={`flex flex-row  items-center justify-between`}>
            <div className={`flex flex-row gap-3`}>
              <Tag text={tag} color={getColorFromType(tag)} />
              <p className={`text-lg font-semibold text-black`}>{title}</p>
            </div>
            <p className={` text-sm font-normal text-dark-gray`}>
              {noOfPeople} người tham gia
            </p>
          </div>

          <p className="text-ellipsis overflow-hidden h-[38px]">{content}</p>

          <button className={` text-sm font-medium text-dark-gray`}>
            Xem thêm
          </button>
        </div>

        <div
          className={`flex flex-row bg-orange bg-opacity-10 h-[60px] w-full rounded-sm`}
        >
          <div
            className={`w-[159px] h-full border-r-2 border-white flex justify-content: center items-center `}
          >
            <span
              className={`text-center w-full text-base font-extrabold text-orange`}
            >
              Room {room}
            </span>
          </div>

          <div
            className={`flex flex-row flex-1 h-full  justify-center items-center gap-2 `}
          >
            <span
              className={`text-center text-base font-extrabold text-orange`}
            >
              {from}
            </span>
            <img src={ArrowRightIcon} alt="arrow" />
            <span
              className={`text-center text-base font-extrabold text-orange`}
            >
              {to}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
