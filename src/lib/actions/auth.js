"use server";

import { signIn, signOut } from "@/auth";

export const login = async (provider) => {
  const SignIn = await signIn(provider, { redirectTo: "/" });
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
};
