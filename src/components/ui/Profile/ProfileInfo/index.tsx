import cupcake from "@assets/images/Common/Cupcake.svg";
import calendar from "@assets/images/Common/Calendar_Days.svg";
import ProfileTabs from "../ProfileTabs";

const ProfileInfo = ({ uid }: { uid?: string }) => {
  console.log(uid);

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
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            className={`size-full object-cover rounded-full`}
          />
        </div>

        {/*  */}
        <div
          className={`z-10 flex-1  flex justify-end items-center gap-2 h-[calc(140px/2)]`}
        >
          {[
            { label: "Admin" },
            {
              label: "Phòng hành chính",
            },
          ].map((item, index) => (
            <button
              key={index}
              className="rounded-full bg-blue bg-opacity-10 text-blue text-center px-4 h-fit py-2 text-[16px] leading-4 font-semibold hover:opacity-90"
            >
              {item.label}
            </button>
          ))}

          <button className="rounded-full border border-dark-gray bg-opacity-10 text-dark-gray text-center px-4 h-fit py-2 text-[16px] leading-4 font-semibold hover:opacity-90">
            Chỉnh sửa
          </button>
        </div>
      </div>

      {/*  */}
      <div className="w-full text-dark-gray text-lg px-5">
        <p className="text-black font-bold text-2xl">phtrhuy</p>
        <p>@phantruonghuy0701</p>
        <p className="text-black my-3">Dad, husband, President, citizen.</p>
        <p className="flex items-center gap-2">
          <img src={cupcake} alt="birth" className="size-[18px] object-cover" />
          <span>Sinh nhật 07 Tháng 1, 2002</span>
        </p>
        <p className="flex items-center gap-2">
          <img
            src={calendar}
            alt="birth"
            className="size-[18px] object-cover"
          />
          <span>Tham gia 19 Tháng 5, 2024</span>
        </p>
      </div>

      {/*  */}
      <ProfileTabs />
    </div>
  );
};

export default ProfileInfo;
