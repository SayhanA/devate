import NextAuth from "next-auth";
import Facebook from "next-auth/providers/facebook";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub, Google, Facebook],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
  },
});
