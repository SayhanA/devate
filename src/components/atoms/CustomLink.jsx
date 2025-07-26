import { cn } from "@/utils/twMergeUtil";
import Link from "next/link";

const CustomLink = ({
  children = null,
  className = "",
  href = "",
  secondBtn = false,
  ...props
}) => {
  const variants =
    secondBtn !== false
      ? "bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
      : "hover:border-blue-500 border-border-border blue-300";

  return (
    <Link
      href={href}
      className={cn(
        `px-4 py-2 border text-ts cursor-pointer font-semibold ${variants} ${className}`
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
