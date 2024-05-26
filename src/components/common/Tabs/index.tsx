type TabsProps = {
  selectedTab: string;
  onChangeTab: (value: string) => void;
  listTabs: { label: string; value: string }[];
};

const Tabs = ({ selectedTab, onChangeTab, listTabs }: TabsProps) => {
  return (
    <div
      className="w-full max-w-full overflow-y-hidden overflow-x-auto border-b border-extra-light-gray"
      onPointerMoveCapture={(e) => e.preventDefault()}
    >
      <div className="flex items-center max-w-[500px] overflow-visible">
        {listTabs.map((tab, index) => (
          <p
            key={index}
            aria-value={tab.value}
            onClick={() => onChangeTab(tab.value)}
            className={`min-h-8 py-2 px-4 text-lg text-nowrap transition-all duration-150 font-semibold cursor-pointer border-b-4  ${
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
