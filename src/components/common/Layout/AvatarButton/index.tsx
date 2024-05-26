import { auth } from "@/firebase";
import { cn } from "@/utils";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { signOut } from "firebase/auth";

const AvatarButton = () => {
  return (
    <Popover>
      <PopoverButton className="outline-none flex items-center justify-center hover:bg-extra-extra-light-gray w-full rounded-full p-3 gap-3">
        <p className="size-[48px] aspect-square rounded-full bg-blue"></p>

        <p className="text-lg text-start leading-5 text-black hidden lg:!block">
          <span className="font-bold block">Huy</span>
          <span className="font-normal block">@huyx3_14</span>
        </p>

        <span className="hidden lg:!block">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 12C17 12.5523 17.4477 13 18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12Z"
              stroke="#14171A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
              stroke="#14171A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 12C5 12.5523 5.44772 13 6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12Z"
              stroke="#14171A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </PopoverButton>

      <PopoverPanel
        anchor="top end"
        className="bg-white rounded-xl shadow-2xl  "
      >
        {[
          {
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" x2="9" y1="12" y2="12" />
              </svg>
            ),
            name: "Đăng xuất",
            onClick: () => {
              signOut(auth)
                .then(() => {
                  // Sign-out successful.
                })
                .catch(() => {
                  // An error happened.
                });
            },
          },
        ].map((item, index) => (
          <div key={index}>
            <button
              className="w-full flex items-center hover:bg-extra-extra-light-gray  py-3 transition-all duration-150 px-3 lg:px-6"
              onClick={item.onClick}
            >
              <p className="size-fit transition-all duration-150">
                {item.icon}
              </p>
              <p
                className={cn(
                  "pl-6 text-[24px] transition-all duration-150 hidden lg:!block"
                )}
              >
                {item.name}
              </p>
            </button>
          </div>
        ))}
      </PopoverPanel>
    </Popover>
  );
};

export default AvatarButton;
