import { Outlet, useLoaderData } from "react-router-dom";
import Menu from "./Menu";
import { useAppSelector } from "@/redux/hooks";
import { selectIsLogin } from "@/redux/features/accountSlice";
import toast from "react-hot-toast";

export async function LayoutLoader() {
  const contacts = { huy: "huy" };
  return { contacts };
}

const Layout = () => {
  const a = useLoaderData();
  console.log(a);
  const isLogin = useAppSelector(selectIsLogin);
  console.log(isLogin);

  return (
    <div className="w-full flex items-start justify-center">
      <div className="w-[275px] border-r border-extra-light-gray px-2 h-[100svh] overflow-x-hidden overflow-y-auto flex flex-col justify-between">
        <div className="w-full">
          <Menu />
          <button
            className="w-[90%] mt-1 text-center py-3 bg-blue hover:bg-opacity-90 text-white text-[24px] font-bold rounded-full transition-all duration-150"
            onClick={() => {
              toast((t) => (
                <div
                  onClick={() => toast.dismiss(t.id)}
                  className="cursor-pointer"
                >
                  Comming soon
                </div>
              ));
            }}
          >
            Đăng bài
          </button>
        </div>
      </div>
      <div className="w-[1050px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
