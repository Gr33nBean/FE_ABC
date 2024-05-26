import React from "react";

const Input = ({
  startIcon,
  endIcon,
  ...props
}: {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="w-full">
      <label
        className="flex items-stretch w-full relative overflow-hidden rounded-lg  border border-light-gray"
        style={{
          backgroundColor: startIcon ? "#1da1f210" : "white",
        }}
      >
        {startIcon && (
          <div className="flex items-center px-4 bg-white shadow-lg  border-r border-extra-light-gray">
            {startIcon}
          </div>
        )}
        <input
          type="text"
          className="outline-none flex-1 z-10  px-4 py-2 text-base bg-transparent font-medium text-black "
          {...props}
        />
        {endIcon && (
          <div className="flex items-center px-4   border-l border-extra-light-gray">
            {endIcon}
          </div>
        )}
      </label>
    </div>
  );
};

export default Input;
