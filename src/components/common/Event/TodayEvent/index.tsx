import ShortEvent from "../ShortEvent";

const TodayEvent = () => {
  return (
    <div className="w-full pt-5 rounded-2xl flex flex-col border border-extra-light-gray">
      <p className="text-[24px] font-bold w-full text-start px-5 pb-3 text-black">
        Sự kiện hôm nay
      </p>

      {Array.from({ length: 2 }).map((_, index) => (
        <div
          className="w-full px-5 py-3 hover:bg-extra-extra-light-gray cursor-pointer"
          key={index}
        >
          <ShortEvent />
        </div>
      ))}

      <p className="w-full text-center py-3 cursor-pointer text-blue hover:underline text-[18px] font-normal">
        Xem tất cả
      </p>
    </div>
  );
};

export default TodayEvent;
