import React, { useEffect } from "react";
import Avatar from "../Avatar";
import ThreeDotsIcon from "@/assets/images/Home/three-dots.svg";
import Tag from "../Tag";
import { Type, getColorFromType } from "@/constants/type";

export type PostBaseType = {
  userName: string;
  createdAt?: string;
  typeTag?: Type;
  tag?: string;
  name?: string;
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
  onClick,
}: PostBaseType & { children: React.ReactNode; onClick?: () => void }) => {
  const [color, setColor] = React.useState<string>("");
  useEffect(() => {
    setColor(getColorFromType(typeTag ?? "post"));
  }, [typeTag]);

  return (
    <div
      className={`relative w-full flex flex-row items-start px-5 py-3 gap-2 border-b-[0.5px] transition-all duration-150 ${
        onClick ? "hover:bg-extra-extra-light-gray cursor-pointer" : ""
      }  border-extra-light-gray`}
    >
      <div className="absolute inset-0 size-full " onClick={onClick}></div>
      <div className="z-[5] h-fit">
        <Avatar />
      </div>

      <div className={`flex-1 flex flex-col gap-1 z-[5]`}>
        {/* Name and tag */}
        <div>
          <div className={`w-full flex items-center gap-3`}>
            <p className={`text-lg font-bold flex-1`}>{userName}</p>

            <div className={`flex items-center gap-3`}>
              {createdAt && (
                <p className={`text-base font-normal text-dark-gray`}>
                  {createdAt}
                </p>
              )}
              <button>
                <img src={ThreeDotsIcon} alt="three-dots" />
              </button>
            </div>
          </div>

          <div className={`flex items-center gap-3`}>
            {tag && <Tag text={tag} color={color} />}
            {name && (
              <p
                className={`text-lg font-semibold text-black flex-1 `}
                onClick={onClick}
              >
                {name}
              </p>
            )}

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
