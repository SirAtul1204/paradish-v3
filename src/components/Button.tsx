import React from "react";

type ButtonProps = {
  children: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  variant = "primary",
  type = "button",
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${
        variant === "primary"
          ? "bg-primary"
          : "bg-secondary text-secondaryForeground"
      }  px-4 py-2 rounded cursor-pointer hover:opacity-75 transition-all flex items-center justify-center`}
    >
      {children}
    </button>
  );
};

export default Button;
