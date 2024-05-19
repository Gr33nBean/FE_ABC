export const routes = {
  home: "/",
  search: "/search",
  notification: "/notification",
  message: "/message",
  approve: "/approve",
  resource: "/resource",
  document: "/document",
  profile: "/profile",
};

export const IconList: { [key: (typeof routes)[keyof typeof routes]]: string } =
  {
    home: "M23.3334 20.3335V13.8609C23.3334 13.2375 23.3328 12.9257 23.257 12.6356C23.1898 12.3785 23.0796 12.1352 22.9303 11.9154C22.762 11.6673 22.5278 11.4616 22.0587 11.0511L16.4587 6.15113C15.5876 5.38896 15.1521 5.00807 14.662 4.86313C14.2301 4.7354 13.7697 4.7354 13.3378 4.86313C12.8481 5.00796 12.4132 5.38849 11.5434 6.14951L5.94159 11.0511C5.47243 11.4616 5.2384 11.6673 5.07001 11.9154C4.92078 12.1352 4.80966 12.3785 4.74249 12.6356C4.66669 12.9257 4.66669 13.2375 4.66669 13.8609V20.3335C4.66669 21.4207 4.66669 21.9641 4.8443 22.3929C5.08112 22.9646 5.53506 23.4194 6.10679 23.6563C6.53559 23.8339 7.07919 23.8339 8.16639 23.8339C9.25358 23.8339 9.79778 23.8339 10.2266 23.6563C10.7983 23.4194 11.2521 22.9647 11.489 22.393C11.6666 21.9642 11.6667 21.4206 11.6667 20.3334V19.1668C11.6667 17.8781 12.7114 16.8334 14 16.8334C15.2887 16.8334 16.3334 17.8781 16.3334 19.1668V20.3334C16.3334 21.4206 16.3334 21.9642 16.511 22.393C16.7478 22.9647 17.2017 23.4194 17.7735 23.6563C18.2023 23.8339 18.7459 23.8339 19.8331 23.8339C20.9202 23.8339 21.4645 23.8339 21.8933 23.6563C22.465 23.4194 22.9188 22.9646 23.1556 22.3929C23.3332 21.9641 23.3334 21.4207 23.3334 20.3335Z",
    search:
      "M17.5 18L24.5 25M11.6667 20.3333C7.15634 20.3333 3.5 16.677 3.5 12.1667C3.5 7.65634 7.15634 4 11.6667 4C16.177 4 19.8333 7.65634 19.8333 12.1667C19.8333 16.677 16.177 20.3333 11.6667 20.3333Z",
    notification:
      "M17.5 20.3333V21.5C17.5 23.433 15.933 25 14 25C12.067 25 10.5 23.433 10.5 21.5V20.3333M17.5 20.3333H10.5M17.5 20.3333H21.6889C22.1352 20.3333 22.3594 20.3333 22.5401 20.2724C22.8853 20.1559 23.1554 19.8849 23.2718 19.5397C23.333 19.3583 23.333 19.1334 23.333 18.6836C23.333 18.4868 23.3328 18.3884 23.3174 18.2945C23.2883 18.1172 23.2195 17.9491 23.1147 17.8031C23.0593 17.726 22.9889 17.6556 22.8501 17.5168L22.3957 17.0623C22.2491 16.9157 22.1667 16.7168 22.1667 16.5095V12.1667C22.1667 7.65633 18.5104 3.99999 14 4C9.4897 4.00001 5.83335 7.65635 5.83335 12.1667V16.5095C5.83335 16.7169 5.7508 16.9157 5.60418 17.0623L5.14976 17.5168C5.01057 17.6559 4.9409 17.7259 4.88544 17.8031C4.78062 17.9491 4.71119 18.1172 4.68209 18.2945C4.66669 18.3884 4.66669 18.4868 4.66669 18.6836C4.66669 19.1334 4.66669 19.3583 4.72788 19.5397C4.84431 19.8849 5.11562 20.1559 5.4608 20.2724C5.64151 20.3333 5.86487 20.3333 6.31117 20.3333H10.5",
    message:
      "M4.66667 7.49999L11.7922 12.881L11.7946 12.8829C12.5858 13.4632 12.9817 13.7534 13.4152 13.8656C13.7984 13.9647 14.2013 13.9647 14.5845 13.8656C15.0184 13.7533 15.4154 13.4622 16.208 12.881C16.208 12.881 20.7784 9.37359 23.3333 7.49999M3.5 18.9336V10.0669C3.5 8.7601 3.5 8.10622 3.75432 7.60709C3.97802 7.16805 4.33472 6.81135 4.77376 6.58765C5.27289 6.33333 5.92677 6.33333 7.23356 6.33333H20.7669C22.0737 6.33333 22.7262 6.33333 23.2253 6.58765C23.6643 6.81135 24.0222 7.16805 24.2459 7.60709C24.5 8.10573 24.5 8.75882 24.5 10.0631V18.9375C24.5 20.2417 24.5 20.8939 24.2459 21.3925C24.0222 21.8316 23.6643 22.1889 23.2253 22.4126C22.7267 22.6667 22.0745 22.6667 20.7703 22.6667H7.22973C5.92549 22.6667 5.2724 22.6667 4.77376 22.4126C4.33472 22.1889 3.97802 21.8316 3.75432 21.3925C3.5 20.8934 3.5 20.2403 3.5 18.9336Z",
    approve:
      "M12.0257 16.4744L17.6796 10.8206M23.4632 7.37011L18.6907 22.8805C18.2631 24.2705 18.049 24.9658 17.6802 25.1963C17.3602 25.3962 16.9641 25.4296 16.6156 25.285C16.2138 25.1183 15.8876 24.4672 15.237 23.166L12.2143 17.1204C12.111 16.914 12.0593 16.8111 11.9904 16.7217C11.9292 16.6423 11.8586 16.5708 11.7792 16.5096C11.6917 16.4422 11.5907 16.3916 11.3934 16.293L5.33389 13.2633C4.0327 12.6127 3.38205 12.2871 3.21532 11.8853C3.07072 11.5368 3.1037 11.1403 3.30362 10.8203C3.53414 10.4514 4.22942 10.237 5.61986 9.8092L21.1302 5.03678C22.2233 4.70044 22.7701 4.5324 23.1393 4.66795C23.4609 4.78601 23.7145 5.03931 23.8325 5.36092C23.968 5.72996 23.7999 6.27647 23.4639 7.3685L23.4632 7.37011Z",
    resource:
      "M7 9.25023V8.90023C7 7.59344 7 6.93955 7.25432 6.44043C7.47802 6.00138 7.83472 5.64469 8.27376 5.42098C8.77289 5.16666 9.42677 5.16666 10.7336 5.16666H20.7669C22.0737 5.16666 22.7262 5.16666 23.2253 5.42098C23.6643 5.64469 24.0222 6.00138 24.2459 6.44043C24.5 6.93907 24.5 7.59216 24.5 8.89639V16.6036C24.5 17.9078 24.5 18.56 24.2459 19.0586C24.0222 19.4977 23.6646 19.8556 23.2255 20.0793C22.7269 20.3333 22.0745 20.3333 20.7703 20.3333H12.25M3.5 20.1002V13.5669C3.5 12.2601 3.5 11.6062 3.75432 11.1071C3.97802 10.668 4.33472 10.3114 4.77376 10.0876C5.27289 9.83333 5.92677 9.83333 7.23356 9.83333H7.93356C9.24035 9.83333 9.89283 9.83333 10.392 10.0876C10.831 10.3114 11.1889 10.668 11.4126 11.1071C11.6667 11.6057 11.6667 12.2588 11.6667 13.5631V20.1036C11.6667 21.4078 11.6667 22.06 11.4126 22.5586C11.1889 22.9977 10.831 23.3556 10.392 23.5793C9.89332 23.8333 9.24117 23.8333 7.93694 23.8333H7.22973C5.92549 23.8333 5.2724 23.8333 4.77376 23.5793C4.33472 23.3556 3.97802 22.9977 3.75432 22.5586C3.5 22.0595 3.5 21.407 3.5 20.1002Z",
    document:
      "M10.5 7.5H10.893C11.1784 7.5 11.3212 7.5 11.4554 7.53223C11.5745 7.56081 11.6887 7.60807 11.7931 7.67204C11.9108 7.74416 12.0119 7.84523 12.2135 8.04687L15.7867 11.6201C15.9885 11.8218 16.0888 11.9222 16.161 12.0399C16.225 12.1443 16.2729 12.2584 16.3014 12.3774C16.3333 12.5103 16.3333 12.6514 16.3333 12.931V21.5M10.5 7.5H5.36621C4.71282 7.5 4.38645 7.5 4.13688 7.62716C3.91736 7.73901 3.73901 7.91736 3.62716 8.13688C3.5 8.38645 3.5 8.71339 3.5 9.36678V23.1334C3.5 23.7868 3.5 24.1131 3.62716 24.3626C3.73901 24.5822 3.91736 24.7611 4.13688 24.873C4.38621 25 4.71219 25 5.36433 25L14.4679 25C15.12 25 15.4472 25 15.6965 24.873C15.9161 24.7611 16.0939 24.5824 16.2057 24.3629C16.3329 24.1134 16.3333 23.7866 16.3333 23.1332V21.5M10.5 7.5V11.4667C10.5 12.1201 10.5 12.4465 10.6272 12.6961C10.739 12.9156 10.9174 13.0944 11.1369 13.2063C11.3862 13.3333 11.7122 13.3333 12.3643 13.3333H16.3329M11.6667 7.50011V5.86678C11.6667 5.21339 11.6667 4.88645 11.7938 4.63688C11.9057 4.41736 12.084 4.23901 12.3035 4.12716C12.5531 4 12.8795 4 13.5329 4H18.6667M18.6667 4H19.0597C19.345 4 19.4878 4 19.6221 4.03224C19.7411 4.06081 19.8554 4.10807 19.9598 4.17204C20.0775 4.24416 20.1786 4.34523 20.3802 4.54687L23.9534 8.12007C24.1552 8.32185 24.2555 8.42217 24.3277 8.53991C24.3916 8.6443 24.4395 8.7584 24.4681 8.87744C24.5 9.01034 24.5 9.15144 24.5 9.43101V19.6332C24.5 20.2866 24.4996 20.6134 24.3724 20.8629C24.2605 21.0825 24.0834 21.2611 23.8639 21.373C23.6146 21.5 23.2878 21.5 22.6357 21.5H16.3333M18.6667 4V7.96667C18.6667 8.62006 18.6667 8.94653 18.7938 9.19609C18.9057 9.41562 19.084 9.59445 19.3035 9.7063C19.5529 9.83333 19.8788 9.83333 20.531 9.83333H24.4995",
    profile:
      "M19.8333 25C19.8333 21.7783 17.2217 19.1667 14 19.1667C10.7783 19.1667 8.16667 21.7783 8.16667 25M19.8333 25H20.7703C22.0745 25 22.7267 25 23.2253 24.7459C23.6643 24.5222 24.0222 24.1643 24.2459 23.7253C24.5 23.2267 24.5 22.5745 24.5 21.2703V7.72973C24.5 6.42549 24.5 5.7724 24.2459 5.27376C24.0222 4.83472 23.6643 4.47802 23.2253 4.25432C22.7262 4 22.0737 4 20.7669 4H7.23356C5.92677 4 5.27289 4 4.77376 4.25432C4.33472 4.47802 3.97802 4.83472 3.75432 5.27376C3.5 5.77289 3.5 6.42677 3.5 7.73356V21.2669C3.5 22.5737 3.5 23.2262 3.75432 23.7253C3.97802 24.1643 4.33472 24.5222 4.77376 24.7459C5.2724 25 5.92549 25 7.22973 25H8.16667M19.8333 25H8.16667M14 15.6667C12.067 15.6667 10.5 14.0997 10.5 12.1667C10.5 10.2337 12.067 8.66667 14 8.66667C15.933 8.66667 17.5 10.2337 17.5 12.1667C17.5 14.0997 15.933 15.6667 14 15.6667Z",
  };

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
