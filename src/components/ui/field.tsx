import { ComponentProps } from "react";

export const FieldGroup = ({
  className = "",
  ...props
}: ComponentProps<"div">) => {
  return <div className={`flex flex-col gap-4 ${className}`} {...props} />;
};

export const Field = ({ className = "", ...props }: ComponentProps<"div">) => {
  return <div className={`flex flex-col ${className}`} {...props} />;
};

export const FieldLabel = ({
  className = "",
  ...props
}: ComponentProps<"label">) => {
  return (
    <label
      className={`text-sm font-medium text-gray-700 ${className}`}
      {...props}
    />
  );
};
