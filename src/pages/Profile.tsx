import BackBar from "@/components/common/Layout/BackBar";
import ProfileInfo from "@/components/ui/Profile/ProfileInfo";
import { selectSignedUser } from "@/redux/features/accountSlice";
import { useAppSelector } from "@/redux/hooks";
import { User } from "@/services/type";
import { userService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { uid } = useParams();
  const signedUser = useAppSelector(selectSignedUser);

  const { data } = useQuery<User | undefined>({
    queryKey: ["profile"],
    queryFn: async () => {
      if (uid) {
        const res = await userService.getUser([uid]);
        return res[0];
      } else {
        return signedUser;
      }
    },
  });

  return (
    <div className="w-full">
      <BackBar>
        <p className="text-[20px] font-semibold text-black">{data?.username}</p>
      </BackBar>

      <ProfileInfo data={data} />
    </div>
  );
};

export default Profile;
