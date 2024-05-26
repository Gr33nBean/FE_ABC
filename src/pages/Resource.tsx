import ResourcePost, { ResourceProps } from "@/components/common/Resource";
import Tabs from "@/components/common/Tabs";
import { TABS } from "@/constants";
import { useState } from "react";
const tabs = [
  { label: "Tất cả", value: TABS.ALL },
  { label: "Phòng", value: TABS.ROOM },
  { label: "Thiết bị", value: TABS.DEVICE },
  { label: "Vật dụng", value: TABS.FURNITURE },
  { label: "Khác", value: TABS.OTHER },
];
const Resource = () => {
  const [selectedTab, setSelectedTab] = useState<string>(TABS.ALL);

  const onChangeTab = (value: string) => {
    setSelectedTab(value);
  };
  return (
    <div className="w-full">
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

      {[
        ...Array.from({ length: 3 }).fill({
          name: "Macbook Pro M1 2021",
          createdAt: "12 giờ",
          type: "device",
          content:
            "Macbook Pro M1 là dòng sản phẩm có thiết kế mỏng nhẹ, sang trọng và tinh tế. Nhân viên sử dụng cần bảo quản tốt thiết bị, tài sản của công ty.",
          imageUrls: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-GGuUBa9frqFf_fN74hERS96U60Kc3tRmCSJevvFQg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-GGuUBa9frqFf_fN74hERS96U60Kc3tRmCSJevvFQg&s",
          ],
          isFree: true,
        }),
      ].map((item, index) => (
        <div key={index}>
          <ResourcePost {...(item as ResourceProps)} />
        </div>
      ))}
    </div>
  );
};

export default Resource;
