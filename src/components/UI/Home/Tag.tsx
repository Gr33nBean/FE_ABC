import React from 'react';

type TagProps = {
  text: string;
};
const Tag = ({ text }: TagProps) => {
  return (
    <div
      className={` text-sm font-semibold text-orange px-1 py-[6px] bg-orange bg-opacity-10 w-fit rounded-[4px]`}
    >
      {text}
    </div>
  );
};

export default Tag;
