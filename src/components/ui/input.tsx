import { ComponentProps } from "react";

const Input = ({ className, type, ...props }: ComponentProps<"input">) => {
  return (
    <input
      type={type}
      data-slot="input"
      className={`h-9 w-full min-w-0 border bg-transparent px-3 py-1 text-base shadow-xs focus-visible:ring focus-visible:ring-blue-300 focus-visible:outline-0 border-gray-300  ${className}`}
      {...props}
    />
  );
};

export default Input;
