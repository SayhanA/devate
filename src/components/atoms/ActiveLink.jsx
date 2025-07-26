"use client";

import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href = "/", children, className = "", ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={twMerge(
        "transition-colors duration-200 text-text-dark",
        isActive
          ? "font-semibold text-blue-600"
          : "text-ts hover:text-blue-500",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
