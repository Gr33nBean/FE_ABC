import Request, { RequestProps } from "@/components/common/Request";
import ResourceUsing, {
  ResourceUsingProps,
} from "@/components/common/ResourceUsing";
import Tabs from "@/components/common/Tabs";
import { TABS } from "@/constants";
import { useState } from "react";

const tabs = [
  { label: "Tất cả", value: TABS.ALL },
  { label: "Mượn thiết bị", value: TABS.RESOURCE },
  { label: "Yêu cầu liên đơn vị", value: TABS.REQUEST },
];

const Approve = () => {
  const [selectedTab, setSelectedTab] = useState<string>(TABS.ALL);

  const onChangeTab = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className="w-full">
      <div className="min-h-[64px] flex flex-col justify-end z-10 sticky top-0 bg-white pt-2 gap-1">
        <div className="px-5">
          <div className="bg-extra-light-gray flex items-center rounded-full px-4 py-3 gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#657786"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
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
          approvalStatus: "pending",
          isNeedApproval: true,
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
          approvalStatus: "pending",
          isNeedApproval: true,
        }),
      ].map((item, index) => (
        <div key={index}>
          <Request {...(item as RequestProps)} />
        </div>
      ))}
    </div>
  );
};

export default Approve;
