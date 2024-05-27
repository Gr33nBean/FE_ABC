import { forwardRef } from "react";
import PostImages from "../../Post/PostImages";
import PostFiles from "../../Post/PostFiles";

/* eslint-disable  @typescript-eslint/no-explicit-any */
const FileInput = forwardRef(function FileInput(
  {
    label,
    type = "image",
    files,
    handleChange,
  }: {
    label?: string;
    type: "image" | "file";
    files: File[];
    handleChange: (files: File[]) => void;
  },
  ref: any
) {
  return (
    <div className="w-full">
      {label && (
        <p className="text-sm font-normal text-dark-gray w-full ">{label}</p>
      )}
      {type === "image" ? (
        <PostImages
          imageUrls={[...files.map((file) => URL.createObjectURL(file))]}
          onClick={() => {}}
        />
      ) : (
        <PostFiles attachedFiles={[...files.map((file) => file.name)]} />
      )}
      <label className="w-full relative" ref={ref}>
        <input
          type="file"
          className="hidden"
          multiple
          onChange={(e) => {
            handleChange(Array.from(e.target.files!));
            e.target.value = "";
          }}
        />
      </label>
    </div>
  );
});

export default FileInput;
