import BackBar from "@/components/common/Layout/BackBar";
import ProfileInfo from "@/components/ui/Profile/ProfileInfo";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { uid } = useParams();

  return (
    <div className="w-full">
      <BackBar>
        <p className="text-[20px] font-semibold text-black">phtrhuy</p>
      </BackBar>

      <ProfileInfo uid={uid} />
    </div>
  );
};

export default Profile;
