import { getColorFromType } from "@/constants/type";
import Tag from "../../Tag";

const ShortEvent = () => {
  return (
    <div className="w-full flex flex-col gap-1">
      <Tag text="Welcome" color={getColorFromType("event")} />
      <p className="w-full font-semibold text-[18px] text-black text-ellipsis overflow-hidden whitespace-nowrap">
        Chào đón thực tập sinh
      </p>
      <p className="w-full font-normal text-[16px] text-dark-gray text-ellipsis overflow-hidden whitespace-nowrap">
        Tại A1.03 lúc 08:00{" "}
      </p>
    </div>
  );
};

export default ShortEvent;
