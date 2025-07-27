"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import AuthLayout from "./AuthLayout";

const BaseLayout = ({ children = null, className = "", ...props }) => {
  const isAuthPage = [
    "/login",
    "/signup",
    "/forgot-password",
    "/verify-email",
    "/reset-password",
  ].includes(usePathname());

  return (
    <div className={className} {...props}>
      {isAuthPage ? (
        <AuthLayout>{children}</AuthLayout>
      ) : (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default BaseLayout;
