import { Outlet, useNavigate, useNavigation } from "react-router-dom";
import Menu from "./Menu";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectSignedUser, setSignedUser } from "@/redux/features/accountSlice";
import toast from "react-hot-toast";
import AvatarButton from "./AvatarButton";
import RightMenu from "./RightMenu";
import Loading from "./Loading";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { userService } from "@/services/user.service";
export async function LayoutLoader() {
  const contacts = { huy: "huy" };
  return { contacts };
}

const Layout = () => {
  const { state } = useNavigation();
  const signedUser = useAppSelector(selectSignedUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      if (signedUser === undefined) {
        const data = await userService.getUser([user.uid]);
        dispatch(setSignedUser(data[0]));
        console.log(data[0]);
      }
    } else {
      navigate("/login");
    }
  });

  //
  // const a = useLoaderData();
  // console.log(a);
  return (
    <div className="w-full flex items-start justify-center relative">
      {signedUser ? (
        <>
          {/*  */}
          <div className="sticky top-0 w-fit">
            <div className="w-fit lg:w-[275px] border-r border-extra-light-gray px-2  h-[100svh] overflow-x-hidden overflow-y-auto flex flex-col justify-between relative ">
              <div className="w-full">
                <Menu />
                <button
                  className="w-[90%] mt-1 text-center py-3 bg-blue hover:bg-opacity-90 text-white text-[24px] font-bold rounded-full transition-all duration-150 hidden lg:!block"
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

              <div className=" sticky bottom-0 w-full bg-white py-3">
                <AvatarButton />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-full lg:w-[1050px] flex items-start gap-6 relative">
            <div className="min-h-[100vh] border-r w-full flex-1 border-extra-light-gray">
              {state === "loading" ? <Loading /> : <Outlet />}
            </div>

            {/*  */}
            <RightMenu />
          </div>
        </>
      ) : (
        <div className="w-full min-h-[100vh] flex items-center justify-center">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Layout;
