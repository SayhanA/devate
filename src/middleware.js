// middleware.ts
import { auth } from "@/auth";

const protectedRoutes = ["/dashboard", "/profile", "/settings"];

export default auth((req) => {
  const { nextUrl } = req;
  const isProtected = protectedRoutes.some((route) =>
    nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !req.auth?.user) {
    return Response.redirect(new URL("/login", req.url));
  }
});

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*"],
};
