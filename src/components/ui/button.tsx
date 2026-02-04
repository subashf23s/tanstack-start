import { ComponentProps } from "react";

const Button = ({ className, ...props }: ComponentProps<"button">) => {
  return (
    <button
      className={`bg-gray-900 h-9 text-white cursor-pointer ${className}`}
      {...props}
    />
  );
};

export default Button;
