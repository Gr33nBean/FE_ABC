import Event from "@/components/common/Event";
import Loading from "@/components/common/Layout/Loading";
import Post from "@/components/common/Post";
import ResourceUsing from "@/components/common/ResourceUsing";
import Tabs from "@/components/common/Tabs";
import { TABS } from "@/constants";
import { selectSignedUser } from "@/redux/features/accountSlice";
import { selectIsLoading } from "@/redux/features/dialogSlice";
import { useAppSelector } from "@/redux/hooks";
import { eventService } from "@/services/event.service";
import { postService } from "@/services/post.service";
import { resourceUsingService } from "@/services/resourceUsing.service";
import {
  Event as EventDataType,
  Post as PostDataType,
  ResourceUsing as ResourceUsingDataType,
} from "@/services/type";
import {
  mapEventToUIObject,
  mapPostToUIObject,
  mapResourceUsingToUIObject,
  sortByTimestamp,
} from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
const listTabs = [
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
  const [selectedTab, setSelectedTab] = useState<string>(TABS.POST);
  const signedUser = useAppSelector(selectSignedUser);
  const isJustCreate = useAppSelector(selectIsLoading);

  const { data: postData } = useQuery<PostDataType[]>({
    queryKey: ["posts_profile", !isJustCreate],
    queryFn: async () => {
      if (signedUser?.uid && signedUser.uid != "") {
        const res = await postService.getAllByUid(signedUser.uid);
        return res;
      } else {
        return [];
      }
    },
    enabled: !!signedUser?.uid && selectedTab === TABS.POST,
  });

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
    enabled: !!signedUser?.uid && selectedTab === TABS.EVENT,
  });

  const { data: resourceUsingData } = useQuery<ResourceUsingDataType[]>({
    queryKey: ["resourceUsing_profile", !isJustCreate],
    queryFn: async () => {
      if (signedUser?.uid && signedUser.uid != "") {
        const res = await resourceUsingService.getAllByUid(signedUser.uid);
        return res;
      }
      return [];
    },
    enabled: !!signedUser?.uid && selectedTab === TABS.RESOURCE,
  });

  return (
    <div className="w-full mt-3">
      <Tabs
        listTabs={listTabs}
        selectedTab={selectedTab}
        onChangeTab={(value) => {
          setSelectedTab(value);
        }}
      />

      {selectedTab == TABS.POST && (
        <>
          {postData ? (
            <>
              {postData.length > 0 ? (
                <>
                  {postData
                    .sort((a, b) => sortByTimestamp(a.createAt, b.createAt))
                    .map((item, index) => {
                      return (
                        <div key={index}>
                          <Post {...mapPostToUIObject(item)} />
                        </div>
                      );
                    })}
                </>
              ) : (
                <p className="py-10 w-full text-center text-dark-gray">
                  Chưa có bài đăng
                </p>
              )}
            </>
          ) : (
            <Loading />
          )}
        </>
      )}

      {selectedTab == TABS.EVENT && (
        <>
          {eventData ? (
            <>
              {eventData.length > 0 ? (
                <>
                  {eventData
                    .sort((a, b) => sortByTimestamp(a.createAt, b.createAt))
                    .map((item, index) => {
                      return (
                        <div key={index}>
                          <Event {...mapEventToUIObject(item)} />
                        </div>
                      );
                    })}
                </>
              ) : (
                <p className="py-10 w-full text-center text-dark-gray">
                  Chưa có sự kiện
                </p>
              )}
            </>
          ) : (
            <>
              <Loading />
            </>
          )}
        </>
      )}

      {selectedTab == TABS.RESOURCE && (
        <>
          {resourceUsingData ? (
            <>
              {resourceUsingData.length > 0 ? (
                <>
                  {resourceUsingData
                    .sort((a, b) => sortByTimestamp(a.createAt, b.createAt))
                    .map((item, index) => {
                      return (
                        <div key={index}>
                          <ResourceUsing
                            {...mapResourceUsingToUIObject(item)}
                          />
                        </div>
                      );
                    })}
                </>
              ) : (
                <p className="py-10 w-full text-center text-dark-gray">
                  Chưa mượn tài nguyên
                </p>
              )}
            </>
          ) : (
            <>
              <Loading />
            </>
          )}
        </>
      )}

      {/* {[
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
      ))} */}
    </div>
  );
};

export default ProfileTabs;
