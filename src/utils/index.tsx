import { EventProps } from "@/components/common/Event";
import { PostProps } from "@/components/common/Post";
import { ResourceUsingProps } from "@/components/common/ResourceUsing";
import { Event, Post, ResourceUsing } from "@/services/type";
import { GGFile, GGThumbnail } from "@/services/upload.service";
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFormatDateString(date: Date | number, hideHours = false) {
  // format: hh:mm, dd Tháng mm, yyyy
  const temp: Date = new Date(
    typeof date == "number" ? date * 1000 : date.getTime()
  );
  let res: string = "";
  if (!hideHours) {
    res = `${temp.getHours().toString().padStart(2, "0")}:${temp
      .getMinutes()
      .toString()
      .padStart(2, "0")},`;
  }
  res += ` ${temp.getDate()} Tháng ${
    temp.getMonth() + 1
  }, ${temp.getFullYear()}`;

  return res;
}

export function getDateFromTimeStamp(timeStamp: number) {
  const date = new Date(timeStamp * 1000);
  return date;
}

export function getDistanceFromNow(timeStamp: number) {
  const date = new Date(timeStamp * 1000);
  const now = new Date();
  // distance in minutes
  const distance = Math.floor((now.getTime() - date.getTime()) / 1000 / 60);
  if (distance < 60) {
    return `${distance} phút`;
  }
  if (distance < 60 * 24) {
    return `${Math.floor(distance / 60)} giờ`;
  }
  if (distance < 24 * 60 * 7) {
    return `${Math.floor(distance / (60 * 24))} ngày`;
  }
  if (distance < 24 * 60 * 7 * 4) {
    return `${Math.floor(distance / (60 * 24 * 7))} tuần`;
  }
  return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;
}

export function mapPostToUIObject(post: Post): PostProps {
  const data: PostProps = {
    id: post.id,
    userName: post.user?.username ?? "",
    createdAt: getDistanceFromNow(post.createAt), //post.createdAt,
    tag: post.postType?.id ?? "",
    name: post.title,
    content: post.content,
    imageUrls: post.images,
    tags: post.mentionUid,
    attachedFiles: post.files,
    avatar: post.user?.avatar ?? "",
  };
  return data;
}

export function mapEventToUIObject(event: Event): EventProps {
  const data: EventProps = {
    id: event.id,
    userName: event.user?.username ?? "",
    createdAt: getDistanceFromNow(event.createAt ?? 0) ?? "",
    tag: event.eventType?.id ?? "",
    name: event.name,
    content: event.description,
    joinAmount: event.participantsUid?.length ?? 0,
    room: event.resource?.name ?? "",
    from: getFormatDateString(event.startAt),
    to: getFormatDateString(event.endAt),
    avatar: event.user?.avatar ?? "",
  };
  return data;
}

export function mapResourceUsingToUIObject(
  resource: ResourceUsing
): ResourceUsingProps {
  const data: ResourceUsingProps = {
    id: resource.id,
    userName: resource.borrower?.username ?? "",
    createdAt: getDistanceFromNow(resource.createAt),
    tag: resource.resource?.resourceTypeId ?? "",
    name: "Mượn tài nguyên",
    resource: {
      name: resource.resource?.name ?? "",
      description: resource.resource?.description ?? "",
      images: resource.resource?.images ?? [],
      resourceType: resource.resource?.resourceTypeId ?? "",
    },
    startAt: getDateFromTimeStamp(resource.startAt),
    endAt: getDateFromTimeStamp(resource.endAt),
    decidedAt: getDateFromTimeStamp(resource.decidedAt ?? 0),
    decisionDetail: resource.decisionDetail ?? "",
    approvalStatus: resource.approvalStatus,
    reporter: resource.reporter?.username ?? "",
  };

  return data;
}

export function getFileFromId(
  data: {
    fileName: string;
    id: string;
  }[],
  type = "image"
): { fileName: string; url: string }[] {
  return data.map((item) => ({
    fileName: item.fileName,
    url: (type === "image" ? GGThumbnail : GGFile) + item.id,
  }));
}

export function sortByTimestamp(a: number, b: number) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}
