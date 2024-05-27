import {
  selectIsOpenCreate,
  setIsOpenCreate,
} from "@/redux/features/dialogSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import CustomDialog from "..";
import Tabs from "../../Tabs";
import { useRef, useState } from "react";
import { TABS } from "@/constants";
import Avatar from "../../Avatar";
import Input from "../../Input";
import Select from "../../Input/Select";
import Textarea from "../../Input/Textarea";
import FileInput from "../../Input/File";
import Button from "@/components/ui/Home/Button";

const tabs = [
  { label: "Bài đăng", value: TABS.POST },
  { label: "Sự kiện", value: TABS.EVENT },
  { label: "Yêu cầu", value: TABS.REQUEST },
];

const Create = () => {
  const open = useAppSelector(selectIsOpenCreate);
  const dispatch = useAppDispatch();

  const [selectedTab, setSelectedTab] = useState<string>(TABS.POST);

  const onChangeTab = (value: string) => {
    setSelectedTab(value);
  };

  const [images, setImages] = useState<File[]>([]);
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const imageRef = useRef<any>(null);

  const [files, setFiles] = useState<File[]>([]);
  const fileRef = useRef<any>(null);

  return (
    <CustomDialog
      open={open}
      onClose={() => dispatch(setIsOpenCreate(false))}
      className="px-0 py-0 relative overflow-y-auto h-[90%]"
    >
      <div className="w-full h-fit flex flex-col">
        {/* Header */}
        <div className="w-full sticky top-0 z-10 bg-white shadow-sm">
          <p className="w-full  text-center font-bold text-md text-black py-3 px-5 border-b border-extra-light-gray">
            Thêm mới
          </p>
          <Tabs
            selectedTab={selectedTab}
            onChangeTab={onChangeTab}
            listTabs={tabs}
          />
        </div>

        {/* Content */}

        <div className="p-5 flex flex-col">
          {/*  */}
          <div className=" flex items-stretch gap-2">
            {/*  */}
            <div className="flex flex-col items-center gap-2">
              <Avatar />
              <div className="bg-extra-light-gray w-[1px] flex-1" />
            </div>
            {/*  */}
            <div className="flex-1 flex flex-col gap-2">
              <p className={`text-lg font-bold flex-1`}>phtrhuy</p>

              <Input label="Tiêu đề" />
              <Select label="Loại bài đăng">
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="delayed">Delayed</option>
                <option value="canceled">Canceled</option>
              </Select>
              <Textarea rows={3} className="resize-none" label="Nội dung" />

              <FileInput
                ref={imageRef}
                label={images.length > 0 ? "Hình ảnh" : ""}
                files={images}
                type="image"
                handleChange={setImages}
              />

              <FileInput
                ref={fileRef}
                label={files.length > 0 ? "Đính kèm" : ""}
                files={files}
                type="file"
                handleChange={setFiles}
              />
            </div>
          </div>

          {/*  */}
          <div className="flex items-center w-full gap-2">
            <div className="size-[48px] flex justify-center items-center">
              <Avatar className="size-[28px]" />
            </div>
            <div className="flex-1 flex items-center gap-2">
              <p className="flex-1 text- font-light text-dark-gray">
                Thêm bài đăng
              </p>

              {[
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1da1f2"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                    </svg>
                  ),
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1da1f2"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                      <circle cx="9" cy="9" r="2" />
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                  ),
                  onclick: () => {
                    if (imageRef.current) {
                      // click
                      imageRef.current.click();
                    }
                  },
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1da1f2"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                      <path d="M10 9H8" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                    </svg>
                  ),
                  onclick: () => {
                    if (fileRef.current) {
                      // click
                      fileRef.current.click();
                    }
                  },
                },
              ].map((item, index) => (
                <button key={index} onClick={item.onclick}>
                  {item.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full z-10 sticky bottom-0 bg-white py-3 px-5 flex items-center gap-2 border-t border-extra-light-gray">
          <p className="flex-1 text-sm font-light text-dark-gray">
            Tất cả mọi người có thể xem và bình luận
          </p>
          <Button text="Đăng bài" className="px-4" />
        </div>
      </div>
    </CustomDialog>
  );
};

export default Create;
