import CreatePost from "@/components/common/CreatePost";
import Event from "@/components/common/Event";
import Tabs from "@/components/common/Tabs";

import Post from "@/components/common/Post";

import { TABS } from "@/constants";
import { eventService } from "@/services/event.service";
import { postService } from "@/services/post.service";
import { postTypeService } from "@/services/postType.service";
import {
  Event as EventDataType,
  Post as PostDataType,
  PostType,
} from "@/services/type";
import {
  mapEventToUIObject,
  mapPostToUIObject,
  sortByTimestamp,
} from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { selectIsLoading } from "@/redux/features/dialogSlice";
import Loading from "@/components/common/Layout/Loading";

const Home = () => {
  const isJustCreate = useAppSelector(selectIsLoading);

  const { data } = useQuery<PostType[]>({
    queryKey: ["home_tabs"],
    queryFn: async () => {
      const res = await postTypeService.getAll();
      return res;
    },
  });

  const tabs = useMemo(() => {
    return [
      ...(data
        ?.map((item) => ({
          label: item.name,
          value: item.id,
        }))
        .filter((item) => item.value !== TABS.OTHER) ?? []),
      { label: "Khác", value: TABS.OTHER },
    ];
  }, [data]);

  console.log(tabs);

  const [selectedTab, setSelectedTab] = useState<string>("");
  useEffect(() => {
    setSelectedTab(tabs[0].value);
  }, [tabs]);

  const onChangeTab = (value: string) => {
    setSelectedTab(value);
  };

  const { data: eventData } = useQuery<EventDataType[]>({
    queryKey: ["all_events", !isJustCreate],
    queryFn: async () => {
      const res = await eventService.getAll();
      if (res) {
        return res;
      } else {
        return [];
      }
    },
    enabled: selectedTab === TABS.EVENT || !isJustCreate,
  });

  const { data: postData } = useQuery<PostDataType[]>({
    queryKey: ["all_posts", !isJustCreate],
    queryFn: async () => {
      const res = await postService.getAll();
      if (res) {
        return res;
      } else {
        return [];
      }
    },
    enabled: selectedTab !== TABS.EVENT,
  });

  return (
    <div className="w-full max-w-full">
      <div className="h-[64px] w-full max-w-full flex items-end sticky top-0 z-10 bg-white">
        <Tabs
          selectedTab={selectedTab}
          onChangeTab={onChangeTab}
          listTabs={tabs}
        />
      </div>
      <CreatePost />

      <div
        className={`hidden w-full h-16 py-[21px] justify-center items-center border-b-[0.5px] border-extra-light-gray`}
      >
        <button>
          <p className={`text-blue text-lg text-center`}>
            Hiện 35 bài đăng mới
          </p>
        </button>
      </div>

      {selectedTab == TABS.EVENT && (
        <>
          {eventData
            ?.sort((a, b) => sortByTimestamp(a.createAt, b.createAt))
            .map((item) => (
              <Event {...mapEventToUIObject(item)} />
            ))}

          {eventData?.length == 0 && (
            <p className="w-full text-center py-3 cursor-pointer text-dark-gray text-[18px] font-normal">
              Không có sự kiện
            </p>
          )}

          {!eventData && (
            <div className="w-full py-10">
              <Loading />
            </div>
          )}
        </>
      )}

      {selectedTab !== TABS.EVENT && (
        <>
          {postData
            ?.filter((item) => item.postTypeId === selectedTab)
            .sort((a, b) => sortByTimestamp(a.createAt, b.createAt))
            .map((item) => (
              <Post {...mapPostToUIObject(item)} />
            ))}

          {postData?.filter((item) => item.postTypeId === selectedTab).length ==
            0 && (
            <p className="w-full text-center py-3 cursor-pointer text-dark-gray text-[18px] font-normal">
              Không có bài đăng
            </p>
          )}
          {!postData && (
            <div className="w-full py-10">
              <Loading />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
