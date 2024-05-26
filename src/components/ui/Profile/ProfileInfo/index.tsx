import { getVNLabel, getWording } from "@/constants/type";
import { User } from "@/services/type";
import calendar from "@assets/images/Common/Calendar_Days.svg";
import cupcake from "@assets/images/Common/Cupcake.svg";
import ProfileTabs from "../ProfileTabs";
import { selectSignedUser } from "@/redux/features/accountSlice";
import { useAppSelector } from "@/redux/hooks";
import { getFormatDateString } from "@/utils";
import EditProfile from "../EditProfile";

const ProfileInfo = ({ data }: { data?: User }) => {
  const signedUser = useAppSelector(selectSignedUser);
  console.log(data);

  return (
    <div className="w-full">
      {/*  */}
      <div
        className={`w-full relative flex bg-extra-light-gray items-end px-5 h-[280px] gap-4`}
      >
        {/*  */}
        <div className="absolute z-0 left-0 bottom-0 w-full h-[70px] bg-white"></div>

        {/*  */}
        <div className={`z-10 size-[140px] rounded-full bg-white p-1`}>
          <img
            src={data?.avatar ?? ""}
            className={`size-full object-cover rounded-full`}
          />
        </div>

        {/*  */}
        <div
          className={`z-10 flex-1  flex justify-end items-center gap-2 h-[calc(140px/2)]`}
        >
          {[
            { label: getWording(data?.grade ?? "") },
            {
              label: getVNLabel(
                "department",
                data?.departmentId?.toString() ?? ""
              ),
            },
          ].map((item, index) => (
            <button
              key={index}
              className="rounded-full bg-blue bg-opacity-10 text-blue text-center px-4 h-fit py-2 text-[16px] leading-4 font-semibold hover:opacity-90"
            >
              {item.label}
            </button>
          ))}

          {signedUser?.uid === data?.uid && <EditProfile />}
        </div>
      </div>

      {/*  */}
      <div className="w-full text-dark-gray text-lg px-5">
        <p className="text-black font-bold text-2xl">{data?.username}</p>
        <p>@{data?.email}</p>
        <p className="text-black my-3">{data?.description}</p>
        <p className="flex items-center gap-2">
          <img src={cupcake} alt="birth" className="size-[18px] object-cover" />
          <span>
            Sinh nhật {getFormatDateString(data?.birthday ?? 0, true)}
          </span>
        </p>
        <p className="flex items-center gap-2">
          <img
            src={calendar}
            alt="birth"
            className="size-[18px] object-cover"
          />
          <span>Tham gia {getFormatDateString(data?.createAt ?? 0, true)}</span>
        </p>
      </div>

      {/*  */}
      <ProfileTabs />
    </div>
  );
};

export default ProfileInfo;
