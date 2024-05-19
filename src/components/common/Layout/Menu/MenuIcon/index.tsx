import { IconList, routes } from "@/constants/layout";

const MenuIcon = ({
  isActive,
  type,
}: {
  isActive?: boolean;
  type: keyof typeof routes;
}) => {
  return (
    <svg
      width="28"
      height="29"
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={IconList[type]}
        // fill={isActive ? "#14171A" : "none"}
        fill="none"
        stroke="#14171A"
        strokeWidth={isActive ? "3" : "2"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MenuIcon;
