import AuthLayout from "@/app/Layouts/AuthLayout";
import BellSvg from "@/assets/svgs/BellSvg";
import LogoSvg from "@/assets/svgs/LogoSvg";
import { auth } from "@/auth";
import { links } from "@/datas/navLinks";
import ActiveLink from "../atoms/ActiveLink";
import CustomLink from "../atoms/CustomLink";
import SidebarToggler from "../atoms/SidebarToggler";
import UserBtn from "../atoms/UserBtn";

const Header = async () => {
  const session = await auth();
  console.log({ session });

  return (
    <header className="px-5 absolute top-0 w-full z-40">
      <AuthLayout>
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

          <SidebarToggler className=" md:hidden" />

          <div className=" gap-7 items-center hidden md:flex">
            <nav className="flex gap-5 mix-blend-difference">
              {links.map(({ id, page, href }) => (
                <ActiveLink key={id} href={href} className="text-white">
                  {page}
                </ActiveLink>
              ))}
            </nav>

            {session?.user ? (
              <>
                <UserBtn session={session} />
                <BellSvg className="text-white cursor-pointer" />
              </>
            ) : (
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
            )}
          </div>
        </div>
      </AuthLayout>
    </header>
  );
};

export default Header;
