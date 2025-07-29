"use client";

import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { login } from "@/lib/actions/auth";
import Button from "./Button";

const ProviderBtns = () => {
  return (
    <div className="w-full mx-auto gap-3 flex mt-8">
      <Button
        secondBtn
        className="flex items-center w-full gap-3 rounded-sm text-white py-3"
        onClick={() => login("google")}
      >
        <FcGoogle />
        Google
      </Button>
      <Button
        className="flex items-center w-full gap-3 rounded-sm"
        onClick={() => login("github")}
      >
        <IoLogoFacebook />
        Facebook
      </Button>
    </div>
  );
};

export default ProviderBtns;
