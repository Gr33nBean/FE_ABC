const Avatar = ({ className, src }: { className?: string; src?: string }) => {
  return (
    <p
      className={`size-[48px] aspect-square rounded-full overflow-hidden ${className}`}
    >
      <img
        src={
          src ??
          "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        }
        className={`size-full object-cover`}
      />
    </p>
  );
};

export default Avatar;
