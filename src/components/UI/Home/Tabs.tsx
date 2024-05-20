export enum TABS {
  ALL = 'ALL',
  EVENT = 'EVENT',
  NEWS = 'NEWS',
  SHARING = 'SHARING',
  NOTIFICATION = 'NOTIFICATION',
  RECRUITMENT = 'RECRUITMENT',
}

type TabsProps = {
  selectedTab: TABS;
  onChangeTab: (tab: TABS) => void;
};

const Tabs = ({ selectedTab, onChangeTab }: TabsProps) => {
  const tabs = [
    { label: 'Tất cả', value: TABS.ALL },
    { label: 'Sự kiện', value: TABS.EVENT },
    { label: 'Tin tức', value: TABS.NEWS },
    { label: 'Chia sẻ', value: TABS.SHARING },
    { label: 'Thông báo', value: TABS.NOTIFICATION },
    { label: 'Tuyển dụng', value: TABS.RECRUITMENT },
  ];

  return (
    <div className='w-full'>
      <div className='flex border-b border-gray-200 justify-between'>
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => onChangeTab(tab.value)}
            className={`min-h-8 py-2 px-4 text-lg font-semibold focus:outline-none ${
              selectedTab === tab.value
                ? 'border-b-[3px] border-blue text-black'
                : 'border-b-[3px] border-transparent text-dark-gray'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* <div className='p-4'>{tabs[activeTab].content}</div> */}
    </div>
  );
};

export default Tabs;
