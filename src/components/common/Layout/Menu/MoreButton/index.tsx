import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import MenuIcon from "../MenuIcon";
import { routes } from "@/constants/layout";
import { NavLink } from "react-router-dom";
import { cn } from "@/utils";

const MoreButton = () => {
  return (
    <Popover>
      <PopoverButton className="rounded-full w-fit hover:bg-extra-extra-light-gray  pl-3 py-3 transition-all duration-150 pr-3 lg:pr-6 flex items-center ">
        <span className="size-fit transition-all duration-150">
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.8333 21.5C19.8333 22.1444 20.3556 22.6667 21 22.6667C21.6443 22.6667 22.1666 22.1444 22.1666 21.5C22.1666 20.8557 21.6443 20.3334 21 20.3334C20.3556 20.3334 19.8333 20.8557 19.8333 21.5Z"
              stroke="#14171A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.8333 21.5C12.8333 22.1444 13.3556 22.6667 14 22.6667C14.6443 22.6667 15.1666 22.1444 15.1666 21.5C15.1666 20.8557 14.6443 20.3334 14 20.3334C13.3556 20.3334 12.8333 20.8557 12.8333 21.5Z"
              stroke="#14171A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.83331 21.5C5.83331 22.1444 6.35565 22.6667 6.99998 22.6667C7.64431 22.6667 8.16665 22.1444 8.16665 21.5C8.16665 20.8557 7.64431 20.3334 6.99998 20.3334C6.35565 20.3334 5.83331 20.8557 5.83331 21.5Z"
              stroke="#14171A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.8333 14.5C19.8333 15.1444 20.3556 15.6667 21 15.6667C21.6443 15.6667 22.1666 15.1444 22.1666 14.5C22.1666 13.8557 21.6443 13.3334 21 13.3334C20.3556 13.3334 19.8333 13.8557 19.8333 14.5Z"
              stroke="#14171A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.8333 14.5C12.8333 15.1444 13.3556 15.6667 14 15.6667C14.6443 15.6667 15.1666 15.1444 15.1666 14.5C15.1666 13.8557 14.6443 13.3334 14 13.3334C13.3556 13.3334 12.8333 13.8557 12.8333 14.5Z"
              stroke="#14171A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.83331 14.5C5.83331 15.1444 6.35565 15.6667 6.99998 15.6667C7.64431 15.6667 8.16665 15.1444 8.16665 14.5C8.16665 13.8557 7.64431 13.3334 6.99998 13.3334C6.35565 13.3334 5.83331 13.8557 5.83331 14.5Z"
              stroke="#14171A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.8333 7.50004C19.8333 8.14437 20.3556 8.66671 21 8.66671C21.6443 8.66671 22.1666 8.14437 22.1666 7.50004C22.1666 6.85571 21.6443 6.33337 21 6.33337C20.3556 6.33337 19.8333 6.85571 19.8333 7.50004Z"
              stroke="#14171A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.8333 7.50004C12.8333 8.14437 13.3556 8.66671 14 8.66671C14.6443 8.66671 15.1666 8.14437 15.1666 7.50004C15.1666 6.85571 14.6443 6.33337 14 6.33337C13.3556 6.33337 12.8333 6.85571 12.8333 7.50004Z"
              stroke="#14171A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.83331 7.50004C5.83331 8.14437 6.35565 8.66671 6.99998 8.66671C7.64431 8.66671 8.16665 8.14437 8.16665 7.50004C8.16665 6.85571 7.64431 6.33337 6.99998 6.33337C6.35565 6.33337 5.83331 6.85571 5.83331 7.50004Z"
              stroke="#14171A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="pl-6 text-[24px] transition-all duration-150 font-normal hidden lg:!block">
          Thêm
        </p>
      </PopoverButton>

      <PopoverPanel
        anchor="top start"
        className="bg-white rounded-xl shadow-2xl translate-y-[66px] "
      >
        {[
          {
            icon: <MenuIcon type="approve" />,
            activeIcon: <MenuIcon isActive={true} type="approve" />,
            name: "Phê duyệt",
            to: routes.approve,
          },
          {
            icon: <MenuIcon type="resource" />,
            activeIcon: <MenuIcon isActive={true} type="resource" />,
            name: "Tài nguyên",
            to: routes.resource,
          },
          // {
          //   icon: <MenuIcon type="document" />,
          //   activeIcon: <MenuIcon isActive={true} type="document" />,
          //   name: "Tài liệu",
          //   to: routes.document,
          // },
        ].map((item, index) => (
          <div key={index}>
            <NavLink
              to={item.to}
              className="w-full flex hover:bg-extra-extra-light-gray pl-3 py-3 transition-all duration-150 pr-3 lg:pr-6"
              children={({ isActive }) => (
                <div
                  className={`flex items-center transition-all duration-150`}
                >
                  <div className="size-fit transition-all duration-150">
                    {isActive ? item.activeIcon : item.icon}
                  </div>
                  <p
                    className={cn(
                      "pl-6 text-[24px] transition-all duration-150 hidden lg:!block",
                      isActive ? "font-bold" : "font-normal"
                    )}
                  >
                    {item.name}
                  </p>
                </div>
              )}
            />
          </div>
        ))}
      </PopoverPanel>
    </Popover>
  );
};

export default MoreButton;
