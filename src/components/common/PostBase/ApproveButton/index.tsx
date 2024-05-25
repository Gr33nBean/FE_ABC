const ApproveButton = ({ color }: { color: string }) => {
  return (
    <div className="w-full flex flex-col text-sm font-semibold gap-1 ">
      <button
        className="w-full rounded-md border text-center py-1 hover:opacity-70 "
        style={{
          color: color,
          borderColor: color,
          backgroundColor: color + "20",
        }}
      >
        Phê duyệt
      </button>
      <button className="w-full rounded-md border border-dark-gray text-dark-gray text-center py-1 bg-dark-gray bg-opacity-5 hover:opacity-70">
        Từ chối
      </button>
    </div>
  );
};

export default ApproveButton;
