import NewPost from '@/components/UI/Home/NewPost';
import Post from '@/components/UI/Home/Post';
import Tabs, { TABS } from '@/components/UI/Home/Tabs';

import { useState } from 'react';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState<TABS>(TABS.ALL);

  const onChangeTab = (tab: TABS) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <Tabs selectedTab={selectedTab} onChangeTab={onChangeTab} />
      <NewPost />

      <div
        className={`w-full h-16 py-[21px] justify-center items-center flex border-b-[0.5px] border-extra-light-gray`}
      >
        <button>
          <p className={`text-blue text-lg text-center`}>
            Hiện 35 bài đăng mới
          </p>
        </button>
      </div>

      {Array.from({ length: 10 }).map((_, index) => (
        <Post
          key={index}
          name='phtrhuy'
          time='12 giờ'
          tag='Welcome'
          title='Chào đón thực tập sinh'
          noOfPeople={200}
          content='Chào đón các bạn thực tập sinh đợt 2. Vị trí Front-end Developer Intern. Mọi người tham gia cho vui nhé!'
          room='A1.03'
          from='08:00 10/05/2024'
          to='09:00 10/05/2024'
        />
      ))}
    </div>
  );
};

export default Home;
