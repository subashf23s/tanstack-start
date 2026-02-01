import { ComponentProps } from "react";

export const Card = ({ className = "", ...props }: ComponentProps<"div">) => {
  return (
    <div
      data-slot="card"
      className={`flex flex-col gap-4 border border-gray-200 p-6 shadow-sm ${className} `}
      {...props}
    />
  );
};
export const CardTitle = ({
  className = "",
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      data-slot="card-title"
      className={`text-xl font-semibold ${className} `}
      {...props}
    />
  );
};
export const CardContent = ({
  className = "",
  ...props
}: ComponentProps<"div">) => {
  return (
    <div data-slot="card-content" className={`${className} `} {...props} />
  );
};
