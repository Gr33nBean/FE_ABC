import ArrowRightIcon from "@/assets/images/Home/arrow-right.svg";
import PostBase, { PostBaseType } from "../PostBase";
import LongContent from "../PostBase/LongContent";

export type EventProps = PostBaseType & {
  content: string;
  room: string;
  from: string;
  to: string;
};

const Event = ({
  userName,
  createdAt,
  tag,
  name,
  joinAmount,
  content,
  room,
  from,
  to,
}: EventProps) => {
  return (
    <PostBase
      userName={userName}
      createdAt={createdAt}
      tag={tag}
      name={name}
      joinAmount={joinAmount}
      typeTag="event"
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
      </div>
    </PostBase>
  );
};

export default Event;
