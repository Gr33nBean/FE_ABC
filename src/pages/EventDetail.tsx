import CreatePost from "@/components/common/CreatePost";
import Event, { EventProps } from "@/components/common/Event";
import BackBar from "@/components/common/Layout/BackBar";
import Post, { PostProps } from "@/components/common/Post";
import { useParams } from "react-router-dom";

const EventDetail = () => {
  const { id } = useParams();
  console.log(id);

  const data: EventProps = {
    id: 123,
    userName: "phtrhuy",
    createdAt: "12 giờ",
    tag: "Welcome",
    name: "Chào đón thực tập sinh",
    content:
      "Chào đón các không thực tập sinh đầu. Mọi người thamgia cho vui nhé!",
    joinAmount: 200,
    room: "A1.03",
    from: "08:00 10/05/2024",
    to: "09:00 10/05/2024",
    isDetail: true,
  };

  return (
    <div className="w-full ">
      <BackBar>
        <p className="text-[20px] font-semibold text-dark-gray">Quay lại</p>
      </BackBar>

      <Event {...data} />

      <CreatePost />

      {[
        ...Array.from({ length: 3 }).fill({
          id: "123",
          userName: "phtrhuy",
          createdAt: "12 giờ",
          tag: "Sharing",
          name: "Chào đón thực tập sinh",
          content:
            "Chào đón các không thực tập sinh đầu. Mọi người thamgia cho vui nhé!",
          imageUrls: [
            "https://photo-zmp3.zadn.vn/avatars/5/5/b/7/55b787b8189794c412c305027d1f239d.jpg",
            "https://images2.thanhnien.vn/528068263637045248/2023/11/5/dieu-kien-3-16991575841451246800633.jpeg",
          ],
          tags: ["vhng", "trhph", "trtrith", "trtrith", "trtrith", "trtrith"],
          attachedFiles: ["test1.png", "test1.png", "test1.png"],
        }),
      ].map((item, index) => (
        <div key={index}>
          <Post {...(item as PostProps)} />
        </div>
      ))}
    </div>
  );
};

export default EventDetail;
