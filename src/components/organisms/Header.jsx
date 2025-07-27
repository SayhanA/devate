import LogoSvg from "@/assets/svgs/LogoSvg";
import { links } from "@/datas/navLinks";
import ActiveLink from "../atoms/ActiveLink";
import CustomLink from "../atoms/CustomLink";

const Header = () => {
  return (
    <header className="px-5 absolute top-0 w-full mix-blend-difference">
      <div className="flex items-center justify-between h-fit py-4 container mx-auto">
        <CustomLink
          id="logo"
          href="/"
          className="text-2xl font-bold flex gap-2 items-center border-0 py-0 text-white mix-blend-lighten"
        >
          <LogoSvg /> <span className="logo">Devate</span>
        </CustomLink>
        <div className="flex gap-7 items-center">
          <nav className="flex gap-5">
            {links.map(({ id, page, href }) => (
              <ActiveLink key={id} href={href} className="text-white">
                {page}
              </ActiveLink>
            ))}
          </nav>
          <div id="btns" className="flex gap-3">
            <CustomLink href="/login" className="text-white">
              Login
            </CustomLink>
            <CustomLink href="/signup" secondBtn>
              Sign Up
            </CustomLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
