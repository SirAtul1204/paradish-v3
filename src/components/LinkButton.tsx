import Link from "next/link";

type LinkButtonProps = {
  href: string;
  children: string;
  variant?: "primary" | "secondary";
};

const LinkButton = ({
  href,
  children,
  variant = "primary",
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className={`${
        variant === "primary"
          ? "bg-primary"
          : "bg-secondary text-secondaryForeground"
      }  px-4 py-2 rounded cursor-pointer hover:opacity-75 transition-all flex items-center justify-center`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
