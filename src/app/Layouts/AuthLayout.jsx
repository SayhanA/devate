"use client";

import { usePathname } from "next/navigation";

export default function AuthLayout({ children }) {
  const pathname = usePathname();

  const hiddenRoutes = [
    "/login",
    "/signup",
    "/forgot-password",
    "/reset-password",
    "/verify-email",
  ];

  const shouldHideChildren = hiddenRoutes.includes(pathname);

  return <>{!shouldHideChildren && children}</>;
}
