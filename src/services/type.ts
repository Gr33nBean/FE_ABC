export enum StatusType {
  Create = "create",
  Active = "active",
  InActive = "inActive",
  // create > active > inActive
}

export enum ApprovalStatus {
  Pending = "pending",
  Approve = "approve",
  Cancel = "cancel",
}

export enum Action {
  Create = "create",
  Read = "read",
  Update = "update",
  Delete = "delete",
}

export enum Grade {
  Employee = "employee",
  Manager = "manager",
  Director = "director",
  Admin = "admin",
  // admin > director > manager > employee
}

export enum MetricType {
  Like = "like",
  View = "view",
  Comment = "comment",
}

export interface Permission {
  id: number;
  minGrade: Grade; // minimum grade to get this permission
  action: Action;
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
  isProtected: boolean;
  status: StatusType;
  // isProtected == true -> cannot be changed via UI by all Grade, except admin
}

export interface User {
  uid: string;
  departmentId: number; // reference to Department.id
  grade: Grade;
  username: string;
  birthday: string; // date
  email: string;
  avatar: string;
  description: string; // text
  permissionIdToCRUD: Grade[];
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
  status: StatusType;
}

export interface Department {
  id: number;
  directorUid: string; // reference to User.uid
  name: string;
  permissionIdToCRUD: Grade[];
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
  status: StatusType;
}

export interface PostType {
  id: number;
  name: string;
  description: string; // text
  permissionIdToCRUDPost: Grade[];
  permissionIdToCRUD: Grade[];
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
  status: StatusType;
}

export interface Post {
  id: number;
  postTypeId: number; // reference to PostType.id
  creatorUid: string; // reference to User.uid
  eventId?: number; // reference to Event.id, can be null
  mentionUid: string[]; // reference to User.uid
  title: string;
  content: string; // text
  images: FileType[];
  files: FileType[];
  likes: number;
  comments: number;
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
  status: StatusType;
  // if eventId is valid
  // -> event.permissionIdToCRUDPost > postType.permissionIdToCRUDPost
}

export interface PostLike {
  id: number;
  userId: string; // reference to User.uid
  postId: number; // reference to Post.id
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
  status: StatusType;
}

export interface PostComment {
  id: number;
  userId: string; // reference to User.uid
  postId: number; // reference to Post.id
  content?: string; // text | null
  images: FileType[];
  files: FileType[];
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
  status: StatusType;
}

export interface FileType {
  url: string; // text
  name: string;
  type: string; // png | mp4 | pdf | ...
  size: number;
}

export interface ResourceType {
  id: number;
  name: string;
  description: string; // text
  permissionIdToCRUDResourceUsing: Grade[];
  permissionIdToCRUDResource: Grade[];
  permissionIdToCRUD: Grade[];
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
  status: StatusType;
}

export interface Resource {
  id: number;
  resourceTypeId: number; // reference to ResourceType.id
  images: string[];
  name: string;
  description: string; // text
  isFree: boolean; // sync with ResourceUsing
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
  status: StatusType;
}

export interface ResourceUsing {
  id: number;
  resourceId: number; // reference to Resource.id
  reporterUid: string; // reference to User.uid
  borrowerUid: string; // reference to User.uid
  startAt: string; // timestamp
  endAt: string; // timestamp
  approvalStatus: ApprovalStatus;
  decidedAt: string; // timestamp
  decisionDetail?: string; // text | null
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
  status: StatusType;
}

export interface EventType {
  id: number;
  name: string;
  description: string; // text
  permissionIdToCRUDEvent: Grade[];
  permissionIdToCRUD: Grade[];
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
  status: StatusType;
}

export interface Event {
  id: number;
  eventTypeId: number; // reference to EventType.id
  reporterUid: string; // reference to User.uid
  resourceUsingId: number[]; // reference to ResourceUsing.id
  postsId: number[]; // mới thêm
  participantsUid: string[]; // reference to User.uid
  permissionIdToCRUDPost: Grade[];
  name: string;
  description: string; // text
  startAt: string; // timestamp
  endAt: string; // timestamp
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
  status: StatusType;
}

// export interface DocumentType {
//   id: number;
//   name: string;
//   description: string; // text
//   permissionIdToCRUDDocument: Grade[];
//   permissionIdToCRUD: Grade[];
//   createdAt: string; // timestamp
//   updatedAt: string; // timestamp
//   status: StatusType;
// }

// export interface Document {
//   id: number;
//   documentTypeId: number; // reference to DocumentType.id
//   creatorUid: string; // reference to User.uid
//   name: string;
//   file: FileType;
//   createdAt: string; // timestamp
//   updatedAt: string; // timestamp
//   status: StatusType;
// }

export interface RequestType {
  id: number;
  name: string;
  description: string; // text
  approvalDepartmentId: number; // reference to Department.id
  minApprovalGrade: Grade;
  permissionIdToCRUD: Grade[];
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
  status: StatusType;
}

export interface Request {
  id: number;
  requesterUid: string; // reference to User.uid
  requestType: number; // reference to RequestType.id
  reporterUid: string; // reference to User.uid
  name: string;
  description: string; // text
  startAt: string; // timestamp
  endAt: string; // timestamp
  approvalStatus: ApprovalStatus;
  decidedAt: string; // timestamp
  decisionDetail?: string; // text | null
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
  status: StatusType;
}
