import Tabs from "@/components/common/Tabs";
import { useState } from "react";

const ProfileTabs = () => {
  const listTabs = [
    {
      label: "Tất cả",
      value: "All",
    },
    {
      label: "Bài đăng",
      value: "post",
    },
    {
      label: "Sự kiện",
      value: "event",
    },
    {
      label: "Mượn thiết bị",
      value: "resource",
    },
    {
      label: "Yêu cầu",
      value: "request",
    },
  ];
  const [selectedTab, setSelectedTab] = useState("All");
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
