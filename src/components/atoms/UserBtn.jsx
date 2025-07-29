"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { logout } from "@/lib/actions/auth";
import Button from "./Button";
import CustomLink from "./CustomLink";

const UserBtn = ({ session }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <Image
        src={session.user.image}
        width={35}
        height={35}
        alt={session?.user?.name}
        className="rounded-full border-2 cursor-pointer border-border"
        onClick={handleToggle}
      />

      <div
        className={` absolute bg-background rounded-lg end-0 top-12 z-50 shadow-xl transition-all ${isOpen ? "h-fit w-38 opacity-100 scale-100" : "h-0 w-0 opacity-0 scale-0"}`}
      >
        <div className="w-0 h-0 border-l-10 rounded-sm border-r-8 border-b-14 border-transparent border-b-white absolute -top-3 end-2"></div>

        <div className="py-2">
          <CustomLink
            href="/profile"
            className="block p-1 border-0 px-5 py-[5px] hover:text-tp font-normal hover:font-bold transition-all"
          >
            Profile
          </CustomLink>
          <CustomLink
            href="/deshboard"
            className="block p-1 border-0 px-5 py-[5px] hover:text-tp font-normal hover:font-bold transition-all"
          >
            Deshboard
          </CustomLink>
          <CustomLink
            href="/settings"
            className="block p-1 border-0 px-5 py-[5px] hover:text-tp font-normal hover:font-bold transition-all"
          >
            Settings
          </CustomLink>
        </div>
        <Button
          onClick={() => {
            logout();
            setIsOpen(false); // close on logout too
          }}
          className="bg-gray-200 text-black border-0 py-2 text-center w-full hover:text-white rounded-b-lg"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default UserBtn;
