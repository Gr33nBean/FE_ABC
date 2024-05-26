import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFormatDateString(date: Date | number, hideHours = false) {
  // format: hh:mm, dd Tháng mm, yyyy
  const temp: Date = new Date(
    typeof date == "number" ? date * 1000 : date.getTime()
  );
  let res: string = "";
  if (!hideHours) {
    res = `${temp.getHours().toString().padStart(2, "0")}:${temp
      .getMinutes()
      .toString()
      .padStart(2, "0")},`;
  }
  res += ` ${temp.getDate()} Tháng ${
    temp.getMonth() + 1
  }, ${temp.getFullYear()}`;

  return res;
}
