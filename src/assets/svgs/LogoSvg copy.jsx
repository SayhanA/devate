import React from "react";
import { twMerge } from "tailwind-merge";

const LogoSvg = ({className=''}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={twMerge(`lucide lucide-swords h-8 w-8 text-primary ${className}`)}
    >
      <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" stroke="blue"></polyline>
      <line x1="13" x2="19" y1="19" y2="13" stroke="blue"></line>
      <line x1="16" x2="20" y1="16" y2="20" stroke="blue"></line>
      <line x1="19" x2="21" y1="21" y2="19" stroke="blue"></line>
      <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"></polyline>
      <line x1="5" x2="9" y1="14" y2="18" stroke="currentColor"></line>
      <line x1="7" x2="4" y1="17" y2="20" stroke="currentColor"></line>
      <line x1="3" x2="5" y1="19" y2="21" stroke="currentColor"></line>
    </svg>
  );
};

export default LogoSvg;
