import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  onClick?: () => void;
};

const Button = ({ text, onClick, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`h-[43px] text-center bg-blue hover:bg-opacity-90 text-white text-[18px] font-bold rounded-full ${className}`}
      {...props}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
