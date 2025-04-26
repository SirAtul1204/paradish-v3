import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { SyncLoader } from "react-spinners";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  isLoading,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium transition-colors duration-200 text-center cursor-pointer hover:opacity-90";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-primary text-btn-primary-text",
    secondary: "bg-secondary text-btn-secondary-text ",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        props.disabled
          ? "bg-btn-disabled-bg text-btn-disabled-text"
          : variants[variant],
        className,
      )}
      {...props}
    >
      <div className="relative">
        <span className="">{children}</span>
        {isLoading && (
          <div className="absolute top-1/2 right-0 -translate-y-1/2">
            <SyncLoader
              size={5}
              color={
                variant === "primary"
                  ? "var(--color-primary)"
                  : "var(--color-secondary)"
              }
            />
          </div>
        )}
      </div>
    </button>
  );
};

export default Button;
