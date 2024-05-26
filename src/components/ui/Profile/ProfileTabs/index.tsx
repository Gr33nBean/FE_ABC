import Request, { RequestProps } from "@/components/common/Request";
import ResourceUsing, {
  ResourceUsingProps,
} from "@/components/common/ResourceUsing";
import Tabs from "@/components/common/Tabs";
import { TABS } from "@/constants";
import { useState } from "react";
const listTabs = [
  {
    label: "Tất cả",
    value: TABS.ALL,
  },
  {
    label: "Bài đăng",
    value: TABS.POST,
  },
  {
    label: "Sự kiện",
    value: TABS.EVENT,
  },
  {
    label: "Mượn thiết bị",
    value: TABS.RESOURCE,
  },
  {
    label: "Yêu cầu",
    value: TABS.REQUEST,
  },
];
const ProfileTabs = () => {
  const [selectedTab, setSelectedTab] = useState<string>(TABS.ALL);
  return (
    <div className="w-full mt-3">
      <Tabs
        listTabs={listTabs}
        selectedTab={selectedTab}
        onChangeTab={(value) => {
          setSelectedTab(value);
        }}
      />

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
    </div>
  );
};

export default ProfileTabs;
