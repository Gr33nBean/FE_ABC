import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { useMemo } from "react";

const Dates = ({
  monthAndYear,
}: {
  monthAndYear: {
    month: number;
    year: number;
  };
}) => {
  const allDays = useMemo(() => {
    const { startDate, endDate } = getDateRange(
      monthAndYear.year,
      monthAndYear.month
    );
    return getAllDatesInRange(startDate, endDate);
  }, [monthAndYear]);

  return (
    <PopoverGroup>
      <div className="w-full grid grid-cols-7 gap-2 transition-all duration-150">
        {["T2", "T3", "T4", "T5", "T6", "T7", "CN"].map((item, index) => (
          <p
            key={index}
            className="text-[18px] font-semibold text-black w-full text-center"
          >
            {item}
          </p>
        ))}

        {allDays.map((item, index) => {
          const isToday =
            item.getDate() === new Date().getDate() &&
            item.getMonth() + 1 === new Date().getMonth() + 1 &&
            item.getFullYear() === new Date().getFullYear();

          const isThisMonth = item.getMonth() + 1 === monthAndYear.month;
          return (
            <Popover key={index}>
              <PopoverButton
                className={`w-full rounded-md aspect-square flex items-center justify-center relative hover:bg-blue hover:text-white transition-all duration-150 cursor-pointer ${
                  isToday ? "bg-orange text-white" : ""
                }`}
              >
                {/*  */}
                <p
                  className={`${
                    isThisMonth ? "text-black text-inherit" : "text-light-gray"
                  } w-full text-[14px] font-normal text-center `}
                >
                  {item.getDate()}
                </p>

                {/*  */}
                {isThisMonth && (
                  <div
                    className={`absolute w-full left-0 bottom-0 flex items-center justify-evenly py-[2px]`}
                  >
                    {Array.from({ length: 3 }).map((_, index) => (
                      <div
                        key={index}
                        className={`aspect-square size-[6px] rounded-full ${
                          isToday ? "bg-white" : "bg-orange"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </PopoverButton>
              <PopoverPanel
                anchor="top start"
                className="flex  bg-white rounded-xl shadow-2xl flex-col p-5"
              >
                <p>Comming soon</p>
                <p>Comming soon</p>
                <p>Comming soon</p>
              </PopoverPanel>
            </Popover>
          );
        })}
      </div>
    </PopoverGroup>
  );
};

export default Dates;

function getDateRange(
  year: number,
  month: number
): { startDate: Date; endDate: Date } {
  // Ngày đầu tiên của tháng
  const firstDayOfMonth = new Date(year, month - 1, 1);

  // Tính toán ngày đầu tiên là thứ Hai của tuần đầu tiên chứa ngày đầu tiên của tháng
  const firstDayWeekday = firstDayOfMonth.getDay();
  const startDate = new Date(firstDayOfMonth);
  startDate.setDate(firstDayOfMonth.getDate() - ((firstDayWeekday + 6) % 7));

  // Ngày cuối cùng của tháng
  const lastDayOfMonth = new Date(year, month, 0);

  // Tính toán ngày Chủ nhật cuối cùng của tuần chứa ngày cuối cùng của tháng
  const lastDayWeekday = lastDayOfMonth.getDay();
  const endDate = new Date(lastDayOfMonth);
  if (lastDayWeekday === 0) {
    endDate.setDate(lastDayOfMonth.getDate());
  } else endDate.setDate(lastDayOfMonth.getDate() + (7 - lastDayWeekday));

  return { startDate, endDate };
}

function getAllDatesInRange(startDate: Date, endDate: Date): Date[] {
  const dates: Date[] = [];
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
}
