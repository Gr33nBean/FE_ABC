import CreatePost from "@/components/common/CreatePost";
import Tabs from "@/components/common/Tabs";
import Event from "@/components/common/Event";

import { useState } from "react";
import TodayEvent from "@/components/common/Event/TodayEvent";
import Calendar from "@/components/common/Calendar";

export enum TABS {
  ALL = "ALL",
  EVENT = "EVENT",
  NEWS = "NEWS",
  SHARING = "SHARING",
  NOTIFICATION = "NOTIFICATION",
  RECRUITMENT = "RECRUITMENT",
}

const tabs = [
  { label: "Tất cả", value: TABS.ALL },
  { label: "Sự kiện", value: TABS.EVENT },
  { label: "Tin tức", value: TABS.NEWS },
  { label: "Chia sẻ", value: TABS.SHARING },
  { label: "Thông báo", value: TABS.NOTIFICATION },
  { label: "Tuyển dụng", value: TABS.RECRUITMENT },
];

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
      <div className="hidden lg:!flex w-[350px] pt-6 pb-[200px] flex-col gap-6 sticky top-0 h-[100svh] overflow-auto">
        <TodayEvent />
        <Calendar />
      </div>
    </div>
  );
};

export default Home;
