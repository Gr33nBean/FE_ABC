import {
  selectIsOpenViewImage,
  setIsOpenViewImage,
} from "@/redux/features/dialogSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Dialog, DialogPanel } from "@headlessui/react";

const ViewImage = () => {
  const { index, images } = useAppSelector(selectIsOpenViewImage);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(setIsOpenViewImage({ index: -1, images: [] }));
  };
  const handleChange = (increase: boolean) => {
    if (increase) {
      if (index < images.length - 1) {
        dispatch(setIsOpenViewImage({ index: index + 1, images }));
      }
    } else {
      if (index > 0) {
        dispatch(setIsOpenViewImage({ index: index - 1, images }));
      }
    }
  };
  return (
    <Dialog open={index != -1} onClose={handleClose} className="relative z-50">
      <div
        className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black bg-opacity-70 transition-all duration-300"
        style={{
          backdropFilter: "blur(2px)",
        }}
      >
        <DialogPanel className="max-w-lg relative h-[95vh] flex items-center">
          <img
            src={images[index]}
            alt="image"
            className="w-full h-auto max-h-[80vh]"
          />

          <div className="w-full absolute bottom-0 left-0 flex items-center justify-center gap-4">
            <button
              className="rounded-full bg-white size-fit p-1 aspect-square"
              onClick={() => handleChange(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <p className="px-4 py-1 rounded-full bg-white">
              {index + 1}/{images.length}
            </p>
            <button
              className="rounded-full bg-white size-fit p-1"
              onClick={() => handleChange(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ViewImage;
