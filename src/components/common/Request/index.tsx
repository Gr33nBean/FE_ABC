import { ApprovalStatus } from "@/services/type";
import PostBase, { PostBaseType } from "../PostBase";
import { getFormatDateString } from "@/utils";
import { getWording } from "@/constants/type";

export type RequestProps = PostBaseType & {
  description: string; // text
  startAt: Date; // timestamp
  endAt: Date; // timestamp
  decidedAt?: Date; // timestamp
  decisionDetail?: string;
  approvalStatus: ApprovalStatus;
  reporter?: string;
};

const Request = ({
  userName,
  createdAt,
  tag,
  name,
  description,
  startAt,
  endAt,
  decidedAt,
  decisionDetail,
  approvalStatus,
  reporter,
}: RequestProps) => {
  return (
    <PostBase
      userName={userName}
      createdAt={createdAt}
      tag={tag}
      name={name}
      typeTag={"request"}
    >
      <div className="w-full flex flex-col gap-1 text-base font-normal text-black">
        <p>Mô tả: {description}</p>
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
      </div>
    </PostBase>
  );
};

export default Request;
