import LogoSvg from "@/assets/svgs/LogoSvg copy";
import { FaSearch } from "react-icons/fa";
import ActiveLink from "./ActiveLink";
import CustomLink from "./CustomLink";
import Text from "./Test";

export default function SidebarToggler({ className = "" }) {
  const links = [
    { id: "home", page: "Home", to: "/" },
    { id: "devate", page: "Devate", to: "/debates" },
    { id: "create", page: "Create Devate", to: "/create" },
    { id: "leaderboard", page: "Leaderboard", to: "/leaderboard" },
    { id: "blog", page: "Blog", to: "/blog" },
  ];

  return (
    <div className={`w-fit h-fit relative ${className}`}>
      {/* Hidden checkbox trigger */}
      <input type="checkbox" id="menu" className="peer" hidden />

      {/* Label to toggle checkbox */}
      <label
        htmlFor="menu"
        className="cursor-pointer w-6 h-6 z-10 absolute -top-2 start-0"
      ></label>
      <div
        className="w-6 h-[2px] bg-white relative transition-all
          before:content-[''] before:w-6 before:h-[2px] before:bg-white before:absolute before:-top-2 before:left-0 before:transition-all
          after:content-[''] after:w-6 after:h-[2px] after:bg-white after:absolute after:top-2 after:left-0 after:transition-all
          peer-checked:rotate-45
          peer-checked:before:rotate-90
          peer-checked:before:top-0
          peer-checked:after:hidden
        "
      />

      {/* Sidebar menu (optional) */}
      <div className="fixed z-50 top-0 flex flex-col justify-between left-0 h-screen w-64 bg-white -translate-x-full peer-checked:translate-x-0 transition-transform duration-300">
        <div>
          <div className="p-4 flex gap-2 pb-0">
            <LogoSvg className="w-10 rounded-lg h-10 p-1 bg-secondary-bg text-white" />
            <div>
              <Text className="leading-[23px] text-xl font-bold">
                Devate Arena
              </Text>
              <Text className="text-sm">Join devate with us.</Text>
            </div>
          </div>
          <div className="p-4 relative">
            <input
              type="text"
              name="search"
              id="search"
              className="border ps-3 py-2 border-border rounded-lg pr-10 w-full"
              placeholder="Search devate ..."
            />
            <FaSearch className="text-border absolute end-8 top-1/2 -translate-y-1/2" />
          </div>
          <div className="p-4 flex gap-3 flex-col">
            {links.map(({ id, page, to }) => (
              <ActiveLink key={id} href={to} className="block border-0">
                {page}
              </ActiveLink>
            ))}
          </div>
        </div>
        <div className="p-4">
          <CustomLink
            href="/signup"
            secondBtn
            className="w-full block text-center"
          >
            Sign Up
          </CustomLink>
          <CustomLink href="/login" className="mt-2 w-full block text-center">
            Login
          </CustomLink>
        </div>
      </div>
    </div>
  );
}
