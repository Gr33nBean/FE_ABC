import CreatePost from "@/components/common/CreatePost";
import Event, { EventProps } from "@/components/common/Event";
import Tabs from "@/components/common/Tabs";

import Post, { PostProps } from "@/components/common/Post";

import { TABS } from "@/constants";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PostType } from "@/services/type";
import { postTypeService } from "@/services/postType.service";

const Home = () => {
  const { data } = useQuery<PostType[]>({
    queryKey: ["home_tabs"],
    queryFn: async () => {
      const res = await postTypeService.getAll();
      return res;
    },
  });

  const tabs = useMemo(() => {
    return [
      { label: "Tất cả", value: TABS.ALL },
      ...(data
        ?.map((item) => ({
          label: item.name,
          value: item.id,
        }))
        .filter((item) => item.value !== TABS.OTHER) ?? []),
      { label: "Khác", value: TABS.OTHER },
    ];
  }, [data]);

  const [selectedTab, setSelectedTab] = useState<string>(TABS.ALL);

  const onChangeTab = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className="w-full max-w-full">
      <div className="h-[64px] w-full max-w-full flex items-end sticky top-0 z-10 bg-white">
        <Tabs
          selectedTab={selectedTab}
          onChangeTab={onChangeTab}
          listTabs={tabs}
        />
      </div>
      <CreatePost />

      <div
        className={`w-full h-16 py-[21px] justify-center items-center flex border-b-[0.5px] border-extra-light-gray`}
      >
        <button>
          <p className={`text-blue text-lg text-center`}>
            Hiện 35 bài đăng mới
          </p>
        </button>
      </div>

      {[
        ...Array.from({ length: 3 }).fill({
          id: "123",
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
        }),
      ].map((item, index) => (
        <div key={index}>
          <Event {...(item as EventProps)} />
        </div>
      ))}

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

export default Home;
