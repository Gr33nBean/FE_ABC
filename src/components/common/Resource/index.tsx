import { getColorFromType, getVNLabel } from "@/constants/type.ts";
import PostImages from "../Post/PostImages/index.tsx";
import PostBase from "../PostBase/index.tsx";

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
    <PostBase userName={name} createdAt={createdAt}>
      <div className={`flex-1 flex flex-col gap-1`}>
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
    </PostBase>
  );
};

export default ResourcePost;
