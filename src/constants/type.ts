type TypeItem = {
  color: string;
  items: { label: string; label_vn: string; value?: string }[];
};

export const PostType: TypeItem = {
  color: "blue",
  items: [
    { label: "News", label_vn: "Tin tức" },
    { label: "Announce", label_vn: "Thông báo" },
    { label: "Sharing", label_vn: "Chia sẻ" },
    { label: "Event", label_vn: "Sự kiện" },
    { label: "Recruit", label_vn: "Tuyển dụng" },
    { label: "Survey", label_vn: "Khảo sát" },
    { label: "Khác", label_vn: "Khác" },
  ],
};

export const ResourceType: TypeItem = {
  color: "purple",
  items: [
    { label: "Room", label_vn: "Phòng" },
    { label: "Device", label_vn: "Thiết bị" },
    { label: "Furniture", label_vn: "Đồ đạc" },
    { label: "Khác", label_vn: "Khác" },
  ],
};

export const EventType: TypeItem = {
  color: "orange",
  items: [
    { label: "Sharing", label_vn: "Chia sẻ" },
    { label: "Playing", label_vn: "Đi chơi" },
    { label: "Meeting", label_vn: "Cuộc họp" },
    { label: "Internal", label_vn: "Nội bộ" },
    { label: "Release", label_vn: "Ra mắt" },
    { label: "Welcome", label_vn: "Chào mừng" },
    { label: "Khác", label_vn: "Khác" },
  ],
};

export const RequestType: TypeItem = {
  color: "pink",
  items: [
    { label: "Off", label_vn: "Nghỉ" },
    { label: "Pregnant", label_vn: "Thai sản" },
    { label: "Allowance", label_vn: "Cấp phép" },
    { label: "Overtime", label_vn: "Tăng ca" },
    { label: "Payment", label_vn: "Hoàn tiền" },
    { label: "Exchange", label_vn: "Trao đổi" },
    { label: "Khác", label_vn: "Khác" },
  ],
};

export const DocumentType: TypeItem = {
  color: "yellow",
  items: [
    { label: "Traning", label_vn: "Huấn luyện" },
    { label: "GuideLine", label_vn: "Hướng dẫn" },
    { label: "Regulation", label_vn: "Nội quy" },
    { label: "Khác", label_vn: "Khác" },
  ],
};

export const Department: TypeItem = {
  color: "green",
  items: [
    { label: "HumanResources", label_vn: "Nhân sự" },
    { label: "Communications", label_vn: "Truyền thông" },
    { label: "Finance", label_vn: "Tài chính" },
    { label: "Administration", label_vn: "Hành chính" },
  ],
};

export const AllType: TypeItem[] = [
  PostType,
  ResourceType,
  EventType,
  RequestType,
  DocumentType,
  Department,
];

export function getColorFromType(type: string) {
  const res = AllType.find((item) =>
    item.items.find(
      (i) =>
        i.label.trim().toLocaleLowerCase() === type.trim().toLocaleLowerCase()
    )
  )?.color;

  return res;
}
