import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { SyncLoader } from "react-spinners";

type ButtonProps = {
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  isLoading?: boolean;
  mediaPosition?: "right" | "left";
} & ButtonHTMLAttributes<HTMLButtonElement> &
  (
    | {
        media?: string;
        mediaOnly?: false;
      }
    | {
        mediaOnly: true;
        media: string;
      }
  );

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  isLoading,
  media,
  mediaPosition = "left",
  mediaOnly,
  ...props
}) => {
  const baseStyles =
    " rounded-md font-medium transition-colors duration-200 text-center cursor-pointer hover:opacity-90";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-primary text-btn-primary-text",
    secondary: "bg-secondary text-btn-secondary-text ",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        mediaOnly ? "p-1" : "px-4 py-2",
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
        {!mediaOnly && <span>{children}</span>}
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
