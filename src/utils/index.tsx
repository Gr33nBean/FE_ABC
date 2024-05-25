import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFormatDateString(date: Date | number) {
  // format: hh:mm, dd Tháng mm, yyyy
  const temp: Date = new Date(date);
  return `${temp.getHours().toString().padStart(2, "0")}:${temp
    .getMinutes()
    .toString()
    .padStart(2, "0")}, ${temp.getDate()} Tháng ${
    temp.getMonth() + 1
  }, ${temp.getFullYear()}`;
}
