import React from "react";

type FormCheckboxContainerProps = {
  children: React.ReactNode;
  label: string;
};

const FormCheckboxContainer = ({
  children,
  label,
}: FormCheckboxContainerProps) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm">{label}</p>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};

export default FormCheckboxContainer;
