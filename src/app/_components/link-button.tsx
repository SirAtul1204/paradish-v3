import type { AnchorHTMLAttributes } from "react";
import clsx from "clsx";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "secondary";
}

const LinkButton: React.FC<LinkButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium transition-colors duration-200 text-center";

  const variants: Record<NonNullable<LinkButtonProps["variant"]>, string> = {
    primary: "bg-primary text-btn-primary-text hover:opacity-90",
    secondary: "bg-secondary text-btn-secondary-text hover:opacity-90",
  };

  return (
    <a className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </a>
  );
};

export default LinkButton;
