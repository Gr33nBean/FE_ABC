import { useEffect, useRef } from "react";

type TabsProps = {
  selectedTab: string;
  onChangeTab: (value: string) => void;
  listTabs: { label: string; value: string }[];
};

const Tabs = ({ selectedTab, onChangeTab, listTabs }: TabsProps) => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      const pTags = divRef.current.querySelectorAll("p");
      let index = 0;

      pTags.forEach((p, i) => {
        if (p.getAttribute("aria-value") === selectedTab) {
          index = i;
        }
      });
      if (index <= 2) {
        index = 0;
      } else if (index + 2 >= pTags.length - 1) {
        index = pTags.length - 1;
      }

      pTags[index].scrollIntoView({
        block: "nearest",
      });
    }
  }, [selectedTab, divRef]);

  return (
    <div
      ref={divRef}
      className="w-full overflow-y-hidden overflow-x-auto border-b border-extra-light-gray"
    >
      <div className="flex items-center ">
        {listTabs.map((tab) => (
          <p
            key={tab.value}
            aria-value={tab.value}
            onClick={() => onChangeTab(tab.value)}
            className={`min-h-8 py-2 px-4 min-w-fit text-lg transition-all duration-150 font-semibold cursor-pointer border-b-4  ${
              selectedTab === tab.value
                ? "border-blue text-black"
                : "border-transparent text-dark-gray"
            }`}
          >
            {tab.label}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
