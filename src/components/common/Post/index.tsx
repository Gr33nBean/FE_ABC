import { useState } from "react";
import PostImages from "./PostImages/index.tsx";

import CommentIcon from "@/assets/images/Common/Chat_Circle.svg";
import AttachmentIcon from "@/assets/images/Common/Label.svg";
import { HeartIcon } from "./SVG/index.tsx";

import SaveIcon from "@/assets/images/Common/Bookmark.svg";
import ShareIcon from "@/assets/images/Common/Share_iOS_Export.svg";
import { routes } from "@/constants/layout.ts";
import { useNavigate } from "react-router-dom";
import LongContent from "../PostBase/LongContent/index.tsx";
import PostBase, { PostBaseType } from "../PostBase/index.tsx";
import PostFiles from "./PostFiles/index.tsx";
import PostMention from "./PostMention/index.tsx";
import { useAppSelector } from "@/redux/hooks.ts";
import { selectSignedUser } from "@/redux/features/accountSlice.ts";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/services/type.ts";
import { userService } from "@/services/user.service.ts";

export type PostProps = PostBaseType & {
  id: number;
  content: string;
  imageUrls: string[];
  tags: string[];
  attachedFiles?: string[];
  isDetail?: boolean;
  eventId?: string;
};

const Post = ({
  id,
  userName,
  createdAt,
  tag,
  name,
  content,
  imageUrls,
  tags,
  attachedFiles,
  isDetail,
  avatar,
}: PostProps) => {
  const [isDetailAttachedFiles, setIsDetailAttachedFiles] =
    useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const navigate = useNavigate();

  const signedUser = useAppSelector(selectSignedUser);

  const { data: users } = useQuery<User[]>({
    queryKey: ["all_users"],
    queryFn: async () => {
      const res = await userService.getAll();
      if (signedUser && signedUser.uid) {
        return res.filter(
          (user: User) => user?.uid !== (signedUser?.uid ?? "")
        );
      } else {
        return res;
      }
    },
  });

  return (
    <div>
      <PostBase
        userName={userName}
        createdAt={createdAt}
        tag={tag}
        name={name}
        typeTag={"post"}
        avatar={avatar}
        onClick={
          isDetail
            ? undefined
            : () => {
                navigate(routes.post + "/" + id);
              }
        }
      >
        <div className="w-full flex flex-col gap-1">
          {/* Content */}
          <LongContent content={content} />

          <PostImages imageUrls={imageUrls} />

          <PostMention
            mentionData={tags.map((item) => {
              const email = users?.find((user) => user?.uid === item)?.email;
              return email ?? "";
            })}
          />

          {attachedFiles &&
            (isDetailAttachedFiles || isDetail ? (
              <div className={`gap-2 flex flex-col`}>
                <PostFiles attachedFiles={attachedFiles} />

                {!isDetail && (
                  <button
                    className="text-sm w-fit font-medium text-dark-gray"
                    onClick={() => setIsDetailAttachedFiles(false)}
                  >
                    Thu gọn
                  </button>
                )}
              </div>
            ) : (
              <button
                onClick={() => {
                  setIsDetailAttachedFiles(true);
                }}
                className={`flex items-center gap-2 text-base font-semibold text-blue cursor-pointer `}
                style={{
                  display: attachedFiles.length > 0 ? "flex" : "none",
                }}
              >
                <img src={AttachmentIcon} />
                <span>{`${attachedFiles.length} file đính kèm`}</span>
              </button>
            ))}

          {/* Bottom */}
          <div className={`flex items-center`}>
            <div className={`flex items-center gap-4 flex-1`}>
              <div className={`flex items-center gap-2`}>
                <button onClick={() => setIsLiked(!isLiked)}>
                  <HeartIcon isFilled={isLiked} />
                </button>
                <span className={`text-sm font-normal text-black`}>340k</span>
              </div>
              <div className={`flex items-center gap-2`}>
                <button>
                  <img src={CommentIcon} />
                </button>
                <span className={` text-sm font-normal text-black`}>340k</span>
              </div>
            </div>

            <div className={`flex items-center gap-2`}>
              <button>
                <img src={SaveIcon} />
              </button>
              <button>
                <img src={ShareIcon} />
              </button>
            </div>
          </div>
        </div>
      </PostBase>
    </div>
  );
};

export default Post;
