import Avatar from "../Avatar/index.tsx";
import ThreeDotsIcon from "@/assets/images/Home/three-dots.svg";
import PostImages from "../Post/PostImages/index.tsx";
import { getColorFromType, getVNLabel } from "@/constants/type.ts";

export type ResourceProps = {
  createdAt: string;
  name: string;
  content: string;
  imageUrls: string[];
  type: string;
  isFree: boolean;
};
const ResourcePost = ({
  createdAt,
  name,
  content,
  imageUrls,
  type,
  isFree,
}: ResourceProps) => {
  const color = getColorFromType("resource");
  return (
    <div
      className={`w-full flex flex-row px-5 py-3 gap-2 border-b-[0.5px] border-extra-light-gray`}
    >
      <Avatar />
      <div className={`flex-1 flex flex-col gap-1`}>
        {/* Name and tag */}
        <div>
          <div className={`w-full flex items-center gap-3`}>
            <p className={`text-lg font-bold flex-1`}>{name}</p>

            <div className={`flex items-center gap-3`}>
              <p className={`text-base font-normal text-dark-gray`}>
                {createdAt}
              </p>
              <button>
                <img src={ThreeDotsIcon} alt="three-dots" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="w-full flex flex-col gap-1 text-base font-normal text-black">
          <p>Mô tả: {content}</p>
          <p>Trạng thái: {isFree ? "Có sẵn" : "Không có sẵn"}</p>
        </div>

        <PostImages imageUrls={imageUrls} />

        <div className="w-full flex flex-col text-sm font-semibold gap-1 ">
          <button
            className="w-full rounded-md border text-center py-1 hover:opacity-70"
            style={{
              color: color,
              borderColor: color,
              backgroundColor: color + "20",
            }}
          >
            Mượn {getVNLabel("resource", type)?.toLowerCase()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourcePost;
