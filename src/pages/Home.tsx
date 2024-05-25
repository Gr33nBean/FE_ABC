import CreatePost from "@/components/common/CreatePost";
import Tabs from "@/components/common/Tabs";
import Event, { EventProps } from "@/components/common/Event";

import { useState } from "react";
import { TABS, tabs } from "@/constants/home";
import RightMenu from "@/components/common/Layout/RightMenu";
import Post, { PostProps } from "@/components/common/Post";
import Request, { RequestProps } from "@/components/common/Request";
import ResourceUsing, {
  ResourceUsingProps,
} from "@/components/common/ResourceUsing";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState<string>(TABS.ALL);

  const onChangeTab = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className="w-full flex items-start gap-6 relative">
      {/*  */}
      <div className="border-r flex-1 border-extra-light-gray ">
        <div className="h-[64px] flex items-end sticky top-0 bg-white">
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
            userName: "phtrhuy",
            createdAt: "12 giờ",
            tag: "Device",
            name: "Mượn thiết bị",
            resource: {
              name: "Macbook Pro M1 2021",
              description: "",
              images: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-GGuUBa9frqFf_fN74hERS96U60Kc3tRmCSJevvFQg&s",
              ],
              resourceType: "Device",
            },
            startAt: new Date(),
            endAt: new Date(),
            decidedAt: new Date(),
            decisionDetail: "Thực hiện đồ án ở Trường Đại học",
            approvalStatus: "approve",
            reporter: "phtrhuy",
          }),
        ].map((item, index) => (
          <div key={index}>
            <ResourceUsing {...(item as ResourceUsingProps)} />
          </div>
        ))}

        {[
          ...Array.from({ length: 3 }).fill({
            userName: "phtrhuy",
            createdAt: "12 giờ",
            tag: "Off",
            name: "Xin nghỉ",
            description: "Thực hiện đồ án ở Trường Đại học",
            startAt: new Date(),
            endAt: new Date(),
            decidedAt: new Date(),
            decisionDetail: "Thực hiện đồ án ở Trường Đại học",
            approvalStatus: "approve",
            reporter: "phtrhuy",
          }),
        ].map((item, index) => (
          <div key={index}>
            <Request {...(item as RequestProps)} />
          </div>
        ))}

        {[
          ...Array.from({ length: 3 }).fill({
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

        {[
          ...Array.from({ length: 3 }).fill({
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
      </div>

      {/*  */}
      <RightMenu />
    </div>
  );
};

export default Home;
