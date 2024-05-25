import { routes } from "@/constants/layout";
import { cn } from "@/utils";
import { NavLink } from "react-router-dom";
import MenuIcon from "./MenuIcon";
import MoreButton from "./MoreButton";

const Menu = () => {
  return (
    <nav className="w-full flex flex-col items-center lg:items-start">
      {/* Logo */}
      <NavLink
        to={""}
        className={`rounded-full w-fit p-3  transition-all duration-150`}
        children={() => (
          <div className={`flex items-center w-full`}>
            <div className="size-[60px] bg-blue rounded-full "></div>
          </div>
        )}
      />

      {/* Menu */}
      {[
        {
          icon: <MenuIcon type="home" />,
          activeIcon: <MenuIcon isActive={true} type="home" />,
          name: "Trang chủ",
          to: routes.home,
        },
        {
          icon: <MenuIcon type="search" />,
          activeIcon: <MenuIcon isActive={true} type="search" />,
          name: "Tìm kiếm",
          to: routes.search,
        },
        {
          icon: <MenuIcon type="notification" />,
          activeIcon: <MenuIcon isActive={true} type="notification" />,
          name: "Thông báo",
          to: routes.notification,
        },
        // {
        //   icon: <MenuIcon type="message" />,
        //   activeIcon: <MenuIcon isActive={true} type="message" />,
        //   name: "Tin nhắn",
        //   to: routes.message,
        // },
        {
          icon: <MenuIcon type="approve" />,
          activeIcon: <MenuIcon isActive={true} type="approve" />,
          name: "Phê duyệt",
          to: routes.approve,
          canBeHiden: true,
        },
        {
          icon: <MenuIcon type="resource" />,
          activeIcon: <MenuIcon isActive={true} type="resource" />,
          name: "Tài nguyên",
          to: routes.resource,
          canBeHiden: true,
        },
        // {
        //   icon: <MenuIcon type="document" />,
        //   activeIcon: <MenuIcon isActive={true} type="document" />,
        //   name: "Tài liệu",
        //   to: routes.document,
        //   canBeHiden: true,
        // },
        {
          icon: <MenuIcon type="profile" />,
          activeIcon: <MenuIcon isActive={true} type="profile" />,
          name: "Hồ sơ",
          to: routes.profile,
        },
      ].map((item, index) => (
        <NavLink
          key={index}
          to={item.to}
          className={cn(
            "rounded-full w-fit hover:bg-extra-extra-light-gray pl-3 py-3 transition-all duration-150 pr-3 lg:pr-6",
            item.canBeHiden && "[@media(min-height:500px)]:!block hidden "
          )}
          children={({ isActive }) => (
            <div className={`flex items-center transition-all duration-150`}>
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
      ))}

      <div className="[@media(min-height:500px)]:hidden ">
        <MoreButton />
      </div>
    </nav>
  );
};

export default Menu;
