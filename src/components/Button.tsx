import { PuffLoader } from "react-spinners";

type ButtonProps = {
  children: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  disabled?: boolean;
};

const Button = ({
  children,
  variant = "primary",
  type = "button",
  onClick,
  isLoading = false,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${
        variant === "primary"
          ? "bg-primary"
          : "bg-secondary text-secondaryForeground"
      }  px-4 py-2 rounded cursor-pointer hover:opacity-75 transition-all flex items-center justify-center gap-2 disabled:bg-disabled disabled:hover:opacity-100 disabled:hover:cursor-wait`}
      onClick={onClick}
      disabled={isLoading || disabled}
    >
      {children}
      <PuffLoader loading={isLoading} color="#ffffff" size={20} />
    </button>
  );
};

export default Button;
