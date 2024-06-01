import { routes } from "@/constants/layout";
import { Type, getColorFromType } from "@/constants/type";
import { selectSignedUser } from "@/redux/features/accountSlice";
import { useAppSelector } from "@/redux/hooks";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../Avatar";
import Tag from "../Tag";
import MoreOptions, { MoreOptionsType } from "./MoreOptions";

export type PostBaseType = {
  uid?: string;
  userName: string;
  createdAt?: string;
  typeTag?: Type;
  tag?: string;
  name?: string;
  joinAmount?: number;
  avatar?: string;
  type?: MoreOptionsType;
  id: number;
  isResource?: boolean;
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
  avatar,
  uid,
  type,
  id,
  isResource,
}: PostBaseType & { children: React.ReactNode; onClick?: () => void }) => {
  const [color, setColor] = React.useState<string>("");
  useEffect(() => {
    setColor(getColorFromType(typeTag ?? "post"));
  }, [typeTag]);

  const signedUser = useAppSelector(selectSignedUser);
  const navigate = useNavigate();
  return (
    <div
      className={`relative w-full flex flex-row items-start px-5 py-3 gap-2 border-b-[0.5px] transition-all duration-150 ${
        onClick ? "hover:bg-extra-extra-light-gray cursor-pointer" : ""
      }  border-extra-light-gray`}
    >
      <div className="absolute inset-0 size-full " onClick={onClick}></div>
      <button
        className="z-[5] h-fit"
        onClick={() => {
          navigate(routes.user + `/${uid}`);
        }}
        disabled={isResource}
      >
        <Avatar src={avatar} />
      </button>

      <div className={`flex-1 flex flex-col gap-1 z-[5]`}>
        {/* Name and tag */}
        <div>
          <div className={`w-full flex items-center gap-3`}>
            <p
              className={`text-base font-bold flex-1 cursor-pointer`}
              onClick={() => {
                if (isResource) {
                  return;
                }
                navigate(routes.user + `/${uid}`);
              }}
            >
              {userName}
            </p>

            <div className={`flex items-center gap-3`}>
              {createdAt && (
                <p className={`text-base font-normal text-dark-gray`}>
                  {createdAt}
                </p>
              )}

              {uid === signedUser?.uid && <MoreOptions type={type} id={id} />}
            </div>
          </div>

          <div className={`flex flex-1  items-center gap-3`}>
            {tag && <Tag text={tag} color={color} />}
            {name && (
              <p
                className={`text-lg font-semibold text-black flex-1 paragraph-overflow-ellipsis paragraph-overflow-ellipsis-1`}
                onClick={onClick}
              >
                {name}
              </p>
            )}
            {/* {joinAmount && joinAmount > 0 && (
              <p className={` text-sm font-normal text-dark-gray`}>
                {joinAmount} người tham gia
              </p>
            )} */}

            <p
              className={` text-sm font-normal text-dark-gray`}
              style={{
                display: joinAmount && joinAmount > 0 ? "block" : "none",
              }}
            >
              {joinAmount} người tham gia
            </p>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default PostBase;
