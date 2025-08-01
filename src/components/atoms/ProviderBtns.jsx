"use client";

import { FcGoogle } from "react-icons/fc";
import { IoLogoFacebook } from "react-icons/io5";
import { login } from "@/lib/actions/auth";
import Button from "./Button";

const ProviderBtns = ({ className = "" }) => {
  return (
    <div className={`w-full mx-auto gap-3 flex mt-8 ${className}`}>
      <Button
        secondBtn
        className="flex items-center w-full gap-3 rounded-sm sm:py-3 mix-blend-difference  text-white"
        onClick={() => login("google")}
      >
        <FcGoogle />
        Google
      </Button>
      <Button
        className="flex items-center w-full gap-3 rounded-sm"
        onClick={() => login("facebook")}
      >
        <IoLogoFacebook />
        Facebook
      </Button>
    </div>
  );
};

export default ProviderBtns;
