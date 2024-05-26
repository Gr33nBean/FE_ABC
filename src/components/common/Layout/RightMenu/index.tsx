import TodayEvent from "../../Event/TodayEvent";
import Calendar from "../../Calendar";

const RightMenu = () => {
  return (
    <div className="hidden lg:!flex min-w-[350px] pt-6 pb-[200px] flex-col gap-6 sticky top-0 h-[100svh] overflow-auto">
      <TodayEvent />
      <Calendar />
    </div>
  );
};

export default RightMenu;
