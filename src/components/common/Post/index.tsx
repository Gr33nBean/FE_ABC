import { useState } from "react";
import PostImages from "./PostImages.tsx";

import CommentIcon from "@/assets/images/Common/Chat_Circle.svg";
import DownloadFileIcon from "@/assets/images/Common/Download_Package.svg";
import FolderIcon from "@/assets/images/Common/Folder.svg";
import AttachmentIcon from "@/assets/images/Common/Label.svg";
import { HeartIcon } from "./SVG/index.tsx";

import SaveIcon from "@/assets/images/Common/Bookmark.svg";
import ShareIcon from "@/assets/images/Common/Share_iOS_Export.svg";
import LongContent from "../PostBase/LongContent/index.tsx";
import PostBase, { PostBaseType } from "../PostBase/index.tsx";

export type PostProps = PostBaseType & {
  content: string;
  imageUrls: string[];
  tags: string[];
  attachedFiles?: string[];
};

const Post = ({
  userName,
  createdAt,
  tag,
  name,
  content,
  imageUrls,
  tags,
  attachedFiles,
}: PostProps) => {
  const [isDetailAttachedFiles, setIsDetailAttachedFiles] =
    useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  return (
    <>
      <PostBase
        userName={userName}
        createdAt={createdAt}
        tag={tag}
        name={name}
        typeTag={"post"}
      >
        <div className="w-full flex flex-col gap-1">
          {/* Content */}
          <LongContent content={content} />

          <PostImages imageUrls={imageUrls} />

          <p className={`flex items-center gap-2 text-base text-dark-gray`}>
            {tags.slice(0, 3).map((item, index) => (
              <span
                key={index}
                className={`font-semibold text-blue cursor-pointer `}
              >{`@${item}`}</span>
            ))}
            {tags.length > 3 && (
              <span className={` font-normal`}>{`+${
                tags.length - 3
              } người khác`}</span>
            )}
          </p>

          {attachedFiles &&
            (isDetailAttachedFiles ? (
              <div className={`gap-2 flex flex-col`}>
                {attachedFiles.map((item, index) => (
                  <div
                    key={index}
                    className={` h-8 rounded bg-blue bg-opacity-5 p-[6px] flex flex-row justify-between items-center`}
                  >
                    <div className={`flex flex-row items-center gap-2`}>
                      <img src={FolderIcon} />
                      <span className={`text-sm font-semibold text-blue`}>
                        {item}
                      </span>
                    </div>

                    <button>
                      <img src={DownloadFileIcon} />
                    </button>
                  </div>
                ))}

                <button
                  className="text-sm w-fit font-medium text-dark-gray"
                  onClick={() => setIsDetailAttachedFiles(false)}
                >
                  Thu gọn
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setIsDetailAttachedFiles(true);
                }}
                className={`flex items-center gap-2 text-base font-semibold text-blue cursor-pointer `}
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
    </>
  );
};

export default Post;
