import BackBar from "@/components/common/Layout/BackBar";
import RightMenu from "@/components/common/Layout/RightMenu";
import ProfileInfo from "@/components/ui/Profile/ProfileInfo";

const Profile = () => {
  return (
    <div className="w-full flex items-start gap-6 relative">
      {/*  */}
      <div className="border-r flex-1 border-extra-light-gray">
        <BackBar />

        <ProfileInfo />
      </div>

      {/*  */}
      <RightMenu />
    </div>
  );
};

export default Profile;
