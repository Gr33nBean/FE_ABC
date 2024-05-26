import ArrowRightIcon from "@/assets/images/Home/arrow-right.svg";
import PostBase, { PostBaseType } from "../PostBase";
import LongContent from "../PostBase/LongContent";
import { useNavigate } from "react-router-dom";
import { routes } from "@/constants/layout";

export type EventProps = PostBaseType & {
  id: string;
  content: string;
  room: string;
  from: string;
  to: string;
  isDetail?: boolean;
};

const Event = ({
  id,
  userName,
  createdAt,
  tag,
  name,
  joinAmount,
  content,
  room,
  from,
  to,
  isDetail,
}: EventProps) => {
  const navigate = useNavigate();

  return (
    <PostBase
      userName={userName}
      createdAt={createdAt}
      tag={tag}
      name={name}
      joinAmount={joinAmount}
      typeTag="event"
      onClick={
        isDetail
          ? undefined
          : () => {
              navigate(routes.event + "/" + id);
            }
      }
    >
      <div className="w-full flex flex-col gap-1">
        <LongContent content={content} />

        <div
          className={`flex items-stretch bg-orange bg-opacity-10 w-full rounded-sm text-orange`}
        >
          <p
            className={`w-[30%] border-r-2 border-extra-extra-light-gray flex items-center justify-center text-center text-base font-extrabold py-3`}
          >
            Room {room}
          </p>

          <div
            className={`flex flex-1 justify-center items-center gap-2 text-center text-sm font-bold `}
          >
            <span>{from}</span>
            <img src={ArrowRightIcon} alt="arrow" />
            <span>{to}</span>
          </div>
        </div>

        {isDetail && (
          <button className="w-full mt-1 text-center py-2 border border-blue rounded-md text-blue text-sm font-semibold bg-blue bg-opacity-5 hover:opacity-70">
            Xác nhận tham gia
          </button>
        )}
      </div>
    </PostBase>
  );
};

export default Event;
