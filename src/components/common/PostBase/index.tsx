import React, { useEffect } from "react";
import Avatar from "../Avatar";
import ThreeDotsIcon from "@/assets/images/Home/three-dots.svg";
import Tag from "../Tag";
import { Type, getColorFromType } from "@/constants/type";

export type PostBaseType = {
  userName: string;
  createdAt: string;
  typeTag?: Type;
  tag: string;
  name: string;
  joinAmount?: number;
};

const PostBase = ({
  userName,
  createdAt,
  tag,
  typeTag,
  name,
  children,
  joinAmount,
}: PostBaseType & { children: React.ReactNode }) => {
  const [color, setColor] = React.useState<string>("");
  useEffect(() => {
    setColor(getColorFromType(typeTag ?? "post"));
  }, [typeTag]);

  return (
    <div
      className={`w-full flex flex-row px-5 py-3 gap-2 border-b-[0.5px] border-extra-light-gray`}
    >
      <Avatar />

      <div className={`flex-1 flex flex-col gap-1`}>
        {/* Name and tag */}
        <div>
          <div className={`w-full flex items-center gap-3`}>
            <p className={`text-lg font-bold flex-1`}>{userName}</p>

            <div className={`flex items-center gap-3`}>
              <p className={`text-base font-normal text-dark-gray`}>
                {createdAt}
              </p>
              <button>
                <img src={ThreeDotsIcon} alt="three-dots" />
              </button>
            </div>
          </div>

          <div className={`flex items-center gap-3`}>
            <Tag text={tag} color={color} />
            <p className={`text-lg font-semibold text-black flex-1 `}>{name}</p>

            {joinAmount && (
              <p className={` text-sm font-normal text-dark-gray`}>
                {joinAmount} người tham gia
              </p>
            )}
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default PostBase;
