import { useState } from "react";
import Dates from "./Dates";

const Calendar = () => {
  const [monthAndYear, setMonthAndYear] = useState<{
    month: number;
    year: number;
  }>({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const handleChange = (increase: boolean) => {
    let newDate = new Date(monthAndYear.year, monthAndYear.month - 1, 1);

    if (increase) {
      newDate.setMonth(newDate.getMonth() + 1);
    } else {
      newDate.setMonth(newDate.getMonth() - 1);
    }
    setMonthAndYear({
      month: newDate.getMonth() + 1,
      year: newDate.getFullYear(),
    });
  };

  return (
    <div className="w-full p-5 rounded-2xl flex flex-col border border-extra-light-gray gap-3">
      <p className="text-[24px] font-bold w-full text-start text-black">
        Lịch trình
      </p>

      <div className="w-full flex items-center">
        <button onClick={() => handleChange(false)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 15L10 12L13 9M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
              stroke="#657786"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          className="flex-1 text-center textLg font-semibold text-dark-gray"
          onClick={() =>
            setMonthAndYear({
              month: new Date().getMonth() + 1,
              year: new Date().getFullYear(),
            })
          }
        >
          Tháng {monthAndYear.month} {monthAndYear.year}
        </button>
        <button onClick={() => handleChange(true)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 9L14 12L11 15M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
              stroke="#657786"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="w-full">
        <Dates monthAndYear={monthAndYear} />
      </div>
    </div>
  );
};

export default Calendar;
