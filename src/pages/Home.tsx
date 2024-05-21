import CreatePost from "@/components/common/CreatePost";
import Tabs from "@/components/common/Tabs";
import Event from "@/components/common/Event";

import { useState } from "react";
import { TABS, tabs } from "@/constants/home";
import RightMenu from "@/components/common/Layout/RightMenu";

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

        {Array.from({ length: 10 }).map((_, index) => (
          <Event
            key={index}
            name="phtrhuy"
            time="12 giờ"
            tag="Welcome"
            title="Chào đón thực tập sinh"
            noOfPeople={200}
            content="Chào đón các bạn thực tập sinh đợt 2. Vị trí Front-end Developer Intern. Mọi người tham gia cho vui nhé!"
            room="A1.03"
            from="08:00 10/05/2024"
            to="09:00 10/05/2024"
          />
        ))}
      </div>

      {/*  */}
      <RightMenu />
    </div>
  );
};

export default Home;
