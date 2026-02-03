import { ComponentProps } from "react";

export const Field = ({
  className = "",
  ...props
}: ComponentProps<"fieldset">) => {
  return <fieldset className={`flex flex-col ${className}`} {...props} />;
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
