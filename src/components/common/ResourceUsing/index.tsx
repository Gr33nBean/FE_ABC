import { ApprovalStatus } from "@/services/type";
import PostBase, { PostBaseType } from "../PostBase";
import { getFormatDateString } from "@/utils";
import { getColorFromType, getWording } from "@/constants/type";
import Tag from "../Tag";

export type ResourceUsingProps = PostBaseType & {
  resource: {
    name: string;
    description: string;
    images: string[];
    resourceType: string;
  };
  startAt: Date;
  endAt: Date;
  decidedAt?: Date;
  decisionDetail?: string;
  approvalStatus: ApprovalStatus;
  reporter?: string;
};

const ResourceUsing = ({
  userName,
  createdAt,
  tag,
  name,
  resource,
  startAt,
  endAt,
  decidedAt,
  decisionDetail,
  approvalStatus,
  reporter,
}: ResourceUsingProps) => {
  const color = getColorFromType("resource");
  return (
    <PostBase
      userName={userName}
      createdAt={createdAt}
      tag={tag}
      name={name}
      typeTag={"resource"}
    >
      <div className="w-full flex flex-col gap-1 text-base font-normal text-black">
        <p>Bắt đầu: {getFormatDateString(startAt)}</p>
        <p>Kết thúc: {getFormatDateString(endAt)}</p>
        <p>
          Trạng thái: {getWording(approvalStatus)}
          {decidedAt ? " lúc " + getFormatDateString(decidedAt) : ""}
          {decisionDetail ? ". Mô tả: " + decisionDetail : ""}
        </p>

        {reporter && (
          <p>
            Người báo cáo:
            <span className="font-bold text-blue"> @{reporter}</span>
          </p>
        )}

        <div
          className="w-full rounded-lg overflow-hidden py-2 px-4 flex items-center gap-2"
          style={{
            backgroundColor: color + "20",
          }}
        >
          <div className="size-[48px] rounded-full overflow-hidden border border-extra-extra-light-gray">
            <img
              src={resource.images[0]}
              alt=""
              className="size-fill object-cover"
            />
          </div>

          <div className="flex-1 text-base font-normal text-black">
            <p className="font-bold">{resource.name}</p>
            <Tag text={resource.resourceType} color={color} />
          </div>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#657786"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </button>
        </div>
      </div>
    </PostBase>
  );
};

export default ResourceUsing;
