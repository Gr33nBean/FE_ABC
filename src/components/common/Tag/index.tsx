import { cn } from "@/utils";

type TagProps = {
  text: string;
  color?: string;
};
const Tag = ({ text, color }: TagProps) => {
  return (
    <p
      className={cn(
        `text-[14px] leading-[14px] font-semibold py-1 px-2 bg-opacity-10 w-fit rounded-[4px] flex items-center justify-center`,
        color ? `text-${color} bg-${color}` : `text-blue bg-blue`
      )}
    >
      {text}
    </p>
  );
};

export default Tag;
