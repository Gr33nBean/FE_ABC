import { TABS } from "@/constants";
import {
  selectIsOpenCreate,
  setIsOpenCreate,
} from "@/redux/features/dialogSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useState } from "react";
import CustomDialog from "..";
import Tabs from "../../Tabs";
import Post from "./Post";
import Event from "./Event";
import Request from "./Request";

const tabs = [
  { label: "Bài đăng", value: TABS.POST },
  { label: "Sự kiện", value: TABS.EVENT },
  { label: "Yêu cầu", value: TABS.REQUEST },
];

const Create = () => {
  const open = useAppSelector(selectIsOpenCreate);
  const dispatch = useAppDispatch();

  const [selectedTab, setSelectedTab] = useState<string>(TABS.POST);

  const onChangeTab = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <CustomDialog
      open={open}
      onClose={() => dispatch(setIsOpenCreate(false))}
      className="px-0 py-0 relative overflow-y-auto h-[90%]"
    >
      <div className="w-full min-h-full h-fit flex flex-col ">
        {/* Header */}
        <div className="w-full sticky top-0 z-20 bg-white shadow-sm">
          <p className="w-full  text-center font-bold text-md text-black py-3 px-5 border-b border-extra-light-gray">
            Thêm mới
          </p>
          <Tabs
            selectedTab={selectedTab}
            onChangeTab={onChangeTab}
            listTabs={tabs}
          />
        </div>

        {/* Content */}
        <div className="w-full">
          <div
            style={{
              display: selectedTab === TABS.POST ? "block" : "none",
            }}
          >
            <Post />
          </div>
          <div
            style={{
              display: selectedTab === TABS.EVENT ? "block" : "none",
            }}
          >
            <Event />
          </div>
          <div
            style={{
              display: selectedTab === TABS.REQUEST ? "block" : "none",
            }}
          >
            <Request />
          </div>
        </div>
      </div>
    </CustomDialog>
  );
};

export default Create;
