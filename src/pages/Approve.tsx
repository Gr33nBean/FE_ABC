import Loading from "@/components/common/Layout/Loading";
import Request from "@/components/common/Request";
import ResourceUsing from "@/components/common/ResourceUsing";
import Tabs from "@/components/common/Tabs";
import { TABS } from "@/constants";
import { selectIsLoading } from "@/redux/features/dialogSlice";
import { useAppSelector } from "@/redux/hooks";
import { requestService } from "@/services/request.service";
import { resourceUsingService } from "@/services/resourceUsing.service";
import {
  Request as RequestDataType,
  ResourceUsing as ResourceUsingDataType,
} from "@/services/type";
import {
  mapRequestToUIObject,
  mapResourceUsingToUIObject,
  sortByTimestamp,
} from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const tabs = [
  // { label: "Tất cả", value: TABS.ALL },
  { label: "Mượn thiết bị", value: TABS.RESOURCE },
  { label: "Yêu cầu", value: TABS.REQUEST },
];

const Approve = () => {
  const [selectedTab, setSelectedTab] = useState<string>(TABS.RESOURCE);
  const isJustCreate = useAppSelector(selectIsLoading);

  const onChangeTab = (value: string) => {
    setSelectedTab(value);
  };

  const { data: resourceUsingData } = useQuery<ResourceUsingDataType[]>({
    queryKey: ["resourceUsing_all", !isJustCreate],
    queryFn: async () => {
      const res = await resourceUsingService.getAll();
      return res;
    },
    enabled: selectedTab === TABS.RESOURCE,
  });

  const { data: requestData } = useQuery<RequestDataType[]>({
    queryKey: [`request_all`, !isJustCreate],
    queryFn: async () => {
      const res = await requestService.getAll();
      return res;
    },
    enabled: selectedTab === TABS.REQUEST,
  });

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
                            isNeedApproval={item.approvalStatus == "pending"}
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
                          <Request
                            {...mapRequestToUIObject(item)}
                            isNeedApproval={item.approvalStatus == "pending"}
                          />
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

export default Approve;
