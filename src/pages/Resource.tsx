import ResourcePost, { ResourceProps } from "@/components/common/Resource";
import Tabs from "@/components/common/Tabs";
import { TABS } from "@/constants";
import { resourceService } from "@/services/resource.service";
import { resourceTypeService } from "@/services/resourceType.service";
import { Resource as ResourceItemType, ResourceType } from "@/services/type";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

const Resource = () => {
  const { data: tabsData } = useQuery<ResourceType[]>({
    queryKey: ["resource_tabs"],
    queryFn: async () => {
      const res = await resourceTypeService.getAll();
      return res;
    },
  });

  console.log(tabsData);

  const tabs = useMemo(() => {
    return [
      { label: "Tất cả", value: TABS.ALL },
      ...(tabsData
        ?.map((item) => ({
          label: item.name,
          value: item.id,
        }))
        .filter((item) => item.value !== TABS.OTHER) ?? []),
      { label: "Khác", value: TABS.OTHER },
    ];
  }, [tabsData]);

  const [selectedTab, setSelectedTab] = useState<string>(TABS.ALL);

  const onChangeTab = (value: string) => {
    setSelectedTab(value);
  };

  const { data: resourceData } = useQuery<ResourceItemType[]>({
    queryKey: ["resource_data"],
    queryFn: async () => {
      const res = await resourceService.getAll();
      return res;
    },
  });

  console.log(resourceData);

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

      {resourceData
        ?.filter((item) => {
          if (selectedTab == TABS.ALL) {
            return true;
          } else if (selectedTab == TABS.OTHER) {
            if (!item?.resourceType?.id) {
              return true;
            }
            return false;
          } else {
            if (item?.resourceType?.id == selectedTab) {
              return true;
            }
            return false;
          }
        })
        .map((item, index) => {
          const itemData: ResourceProps = {
            id: item.id,
            createAt: "", //item.createAt,
            name: item.name,
            description: item.description,
            images: item?.images ?? [],
            type: item?.resourceType?.name ?? "",
            isFree: item.isFree,
          };
          return (
            <div key={index}>
              <ResourcePost {...itemData} />
            </div>
          );
        })}
    </div>
  );
};

export default Resource;
