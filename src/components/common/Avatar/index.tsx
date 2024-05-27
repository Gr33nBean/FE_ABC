const Avatar = ({ className }: { className?: string }) => {
  return (
    <div
      className={`size-[48px] aspect-square rounded-full overflow-hidden ${className}`}
    >
      <img
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        className={`size-full object-cover`}
      />
    </div>
  );
};

export default Avatar;
