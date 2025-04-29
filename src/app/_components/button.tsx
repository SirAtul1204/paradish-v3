import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { SyncLoader } from "react-spinners";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  isLoading?: boolean;
  media?: string;
  mediaPosition?: "right" | "left";
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  isLoading,
  media,
  mediaPosition = "left",
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
      <div className="relative flex items-center justify-center gap-1">
        {mediaPosition === "left" && media && (
          <img src={media} className="h-5 w-5" alt="media" />
        )}
        <span className="">{children}</span>
        {mediaPosition === "right" && media && (
          <img src={media} className="h-5 w-5" alt="media" />
        )}
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
