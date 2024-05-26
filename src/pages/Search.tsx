import Avatar from "@/components/common/Avatar";
import Tabs from "@/components/common/Tabs";
import Tag from "@/components/common/Tag";
import { TABS } from "@/constants";
import { getVNLabel, getWording } from "@/constants/type";
import { useState } from "react";
const tabs = [
  { label: "Tất cả", value: TABS.ALL },
  { label: "Sự kiện", value: TABS.EVENT },
  { label: "Tin tức", value: TABS.NEWS },
  { label: "Chia sẻ", value: TABS.SHARING },
  { label: "Thông báo", value: TABS.NOTIFICATION },
  { label: "Tuyển dụng", value: TABS.RECRUITMENT },
];
const Search = () => {
  const [selectedTab, setSelectedTab] = useState<string>(TABS.ALL);

  const onChangeTab = (value: string) => {
    setSelectedTab(value);
  };
  return (
    <div className="w-full">
      {/*  */}
      <div className="min-h-[64px] flex flex-col justify-end sticky z-10 top-0 bg-white pt-2 gap-1">
        <div className="px-5">
          <div className="bg-extra-light-gray flex items-center rounded-full px-4 py-3 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#657786"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>

            <input
              placeholder="Tìm kiếm"
              className="flex-1 bg-transparent outline-none text-lg font-normal"
            />
          </div>
        </div>
        <Tabs
          selectedTab={selectedTab}
          onChangeTab={onChangeTab}
          listTabs={tabs}
        />
      </div>

      {/*  */}
      <div className="w-full px-5 pt-2">
        <p className="text-dark-gray text-lg font-semibold">Mọi người (5)</p>

        {[
          ...new Array(3).fill({
            name: "phtrhuy",
            description:
              "helllooo jahfjdshfks skjfhksjd hkjshk sdhfjkshd kfksdhfjkshdjf ksdhfshdj fhsjdk fhs fsd sf jksf hskdsh fkjsdhjk fhd",
            grade: "employee",
            department: "HumanResources",
            postCount: 20,
          }),
        ].map((item, index) => (
          <div key={index} className="w-full flex item-start gap-2 py-2">
            <Avatar />

            <div className="flex-1 pb-3 border-b border-b-extra-light-gray flex items-start">
              <div className="flex-1">
                <p className={`text-lg font-bold flex-1`}>{item.name}</p>
                <p className="text-base font-normal text-black  paragraph-overflow-ellipsis paragraph-overflow-ellipsis-2">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 pt-2">
                  <Tag text={getWording(item.grade)} />
                  <Tag text={getVNLabel("department", item.department)} />
                  <Tag text={`${item.postCount} bài đăng`} />
                </div>
              </div>

              <button className="rounded-xl h-fit py-2 text-dark-gray text-sm font-semibold px-5 bg-dark-gray bg-opacity-10 hover:opacity-70">
                Xem trang
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="w-full border-b border-b-extra-light-gray text-center pb-3 pt-1 hover:underline text-blue cursor-pointer ">
        Hiện tất cả
      </p>

      <div className="w-full px-5 pt-2">
        <p className="text-dark-gray text-lg font-semibold">Bài đăng (10)</p>
      </div>
    </div>
  );
};

export default Search;
