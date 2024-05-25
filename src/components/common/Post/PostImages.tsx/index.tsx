import { setIsOpenViewImage } from "@/redux/features/dialogSlice";
import { useAppDispatch } from "@/redux/hooks";

type PostImagesProps = {
  imageUrls: string[];
};

const PostImages = ({ imageUrls }: PostImagesProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className={`flex gap-2 max-w-full overflow-x-auto overflow-y-hidden`}>
      {imageUrls.map((item, index) => (
        <img
          key={index}
          src={item}
          alt="image"
          className={`h-[156px] w-[117px] rounded-[10px] object-cover cursor-pointer`}
          onClick={() =>
            dispatch(
              setIsOpenViewImage({
                index,
                images: imageUrls,
              })
            )
          }
        />
      ))}
    </div>
  );
};

export default PostImages;
