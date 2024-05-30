import { useAppSelector } from "@/redux/hooks";
import Loading from ".";
import { selectIsLoading } from "@/redux/features/dialogSlice";

const ProcessLoading = () => {
  const isLoading = useAppSelector(selectIsLoading);
  return (
    <div
      style={{
        display: isLoading ? "flex" : "none",
        zIndex: 999,
      }}
      className="fixed inset-0 h-[100vh] w-[100vw] flex items-center justify-center bg-white bg-opacity-70"
    >
      <Loading />
    </div>
  );
};

export default ProcessLoading;
