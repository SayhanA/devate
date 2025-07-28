import LogoSvg from "@/assets/svgs/LogoSvg";
import { links } from "@/datas/navLinks";
import ActiveLink from "../atoms/ActiveLink";
import CustomLink from "../atoms/CustomLink";

const Header = () => {
  return (
    <header className="px-5 absolute top-0 w-full z-50">
      <div className="flex items-center justify-between h-fit py-4 container mx-auto">
        <CustomLink
          id="logo"
          href="/"
          className="text-2xl font-bold flex gap-2 items-center border-0 py-0"
        >
          <LogoSvg />{" "}
          <div className="logo text-white mix-blend-difference">
            <span>Devate</span>
          </div>
        </CustomLink>
        <div className="flex gap-7 items-center">
          <nav className="flex gap-5 mix-blend-difference">
            {links.map(({ id, page, href }) => (
              <ActiveLink key={id} href={href} className="text-white">
                {page}
              </ActiveLink>
            ))}
          </nav>
          <div id="btns" className="flex items-center gap-3">
            <div className="mix-blend-difference h-full w-fit">
              <CustomLink href="/login" className="text-white">
                Login
              </CustomLink>
            </div>
            <div>
              <CustomLink href="/signup" secondBtn>
                Sign Up
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
