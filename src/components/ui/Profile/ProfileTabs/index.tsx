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
    </div>
  );
};

export default ProfileTabs;
