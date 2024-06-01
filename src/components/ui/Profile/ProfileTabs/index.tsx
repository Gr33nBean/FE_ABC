import Event from "@/components/common/Event";
import Loading from "@/components/common/Layout/Loading";
import Post from "@/components/common/Post";
import ResourceUsing from "@/components/common/ResourceUsing";
import Tabs from "@/components/common/Tabs";
import { TABS } from "@/constants";

import { selectIsLoading } from "@/redux/features/dialogSlice";
import { useAppSelector } from "@/redux/hooks";
import { eventService } from "@/services/event.service";
import { postService } from "@/services/post.service";
import { requestService } from "@/services/request.service";
import { resourceUsingService } from "@/services/resourceUsing.service";
import {
  Event as EventDataType,
  Post as PostDataType,
  ResourceUsing as ResourceUsingDataType,
  Request as RequestDataType,
  User,
} from "@/services/type";
import {
  mapEventToUIObject,
  mapPostToUIObject,
  mapRequestToUIObject,
  mapResourceUsingToUIObject,
  sortByTimestamp,
} from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Request from "@/components/common/Request";
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
const ProfileTabs = ({ data }: { data?: User }) => {
  const [selectedTab, setSelectedTab] = useState<string>(TABS.POST);
  const isJustCreate = useAppSelector(selectIsLoading);

  const { data: postData } = useQuery<PostDataType[]>({
    queryKey: [`posts_profile_${data?.uid}`, !isJustCreate, data?.uid],
    queryFn: async () => {
      if (data?.uid && data.uid != "") {
        const res = await postService.getAllByUid(data.uid);
        return res;
      } else {
        return [];
      }
    },
    enabled: selectedTab === TABS.POST,
  });

  const { data: eventData } = useQuery<EventDataType[]>({
    queryKey: [`all_events_${data?.uid}`, !isJustCreate, data?.uid],
    queryFn: async () => {
      if (data?.uid && data.uid != "") {
        const res = await eventService.getAllByUid(data.uid);
        return res;
      } else {
        return [];
      }
    },
    enabled: selectedTab === TABS.EVENT,
  });

  const { data: resourceUsingData } = useQuery<ResourceUsingDataType[]>({
    queryKey: [`resourceUsing_profile_${data?.uid}`, !isJustCreate, data?.uid],
    queryFn: async () => {
      if (data?.uid && data.uid != "") {
        const res = await resourceUsingService.getAllByUid(data.uid);
        return res;
      }
      return [];
    },
    enabled: selectedTab === TABS.RESOURCE,
  });

  const { data: requestData } = useQuery<RequestDataType[]>({
    queryKey: [`request_profile_${data?.uid}`, !isJustCreate, data?.uid],
    queryFn: async () => {
      if (data?.uid && data.uid != "") {
        const res = await requestService.getAllByUid(data.uid);
        return res;
      }
      return [];
    },
    enabled: selectedTab === TABS.REQUEST,
  });

  console.log(requestData);

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
                    .filter((item) => item.postTypeId != TABS.EVENT)
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
            <div className="w-full py-10">
              <Loading />
            </div>
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
              <div className="w-full py-10">
                <Loading />
              </div>
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
              <div className="w-full py-10">
                <Loading />
              </div>
            </>
          )}
        </>
      )}

      {selectedTab == TABS.REQUEST && (
        <>
          {requestData ? (
            <>
              {requestData.length > 0 ? (
                <>
                  {requestData
                    .sort((a, b) => sortByTimestamp(a.createAt, b.createAt))
                    .map((item, index) => {
                      return (
                        <div key={index}>
                          <Request {...mapRequestToUIObject(item)} />
                        </div>
                      );
                    })}
                </>
              ) : (
                <p className="py-10 w-full text-center text-dark-gray">
                  Chưa có yêu cầu
                </p>
              )}
            </>
          ) : (
            <div className="w-full py-10">
              <Loading />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProfileTabs;
