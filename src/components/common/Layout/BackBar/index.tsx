import { cn } from "@/utils";

const BackBar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-full h-[64px] flex items-center px-5 gap-2 sticky top-0",
        className
      )}
    >
      <button
        className="hover:bg-extra-extra-light-gray rounded-full p-2"
        onClick={() => window.history.back()}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.6666 16.0003H9.33331M9.33331 16.0003L14.6666 21.3337M9.33331 16.0003L14.6666 10.667"
            stroke="#657786"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <p className="text-[20px] font-semibold text-black">phtrhuy</p>
    </div>
  );
};

export default BackBar;
