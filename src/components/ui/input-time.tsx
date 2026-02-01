import { ComponentProps, FocusEvent } from "react";

const InputTime = ({ className = "", ...props }: ComponentProps<"input">) => {
  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    event.target.type = "time";
  };
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    event.target.type = "text";
  };
  return (
    <input
      type="text"
      className={`w-60 border border-gray-300 bg-gray-50 p-2 focus:outline-0  ${className}`}
      {...props}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default InputTime;
