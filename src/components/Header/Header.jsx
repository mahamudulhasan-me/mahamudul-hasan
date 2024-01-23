import Link from "next/link";
import ActiveLink from "../ActiveLink/ActiveLink";
import ActiveLink2 from "../ActiveLink/ActiveLink2";
const navItems = [
  { href: "/about/professional-info", name: "_about-me" },
  { href: "/projects", name: "_projects" },
];
const Header = () => {
  return (
    <>
      <div className="fixed inset-0 container mx-auto border rounded-t-md text-s1  h-14 bg-p2  flex justify-between items-center  border-p4">
        <div className="w-[19%] z-50  lg:pl-6 lg:px-0 px-10 flex items-center ">
          <span>_mahamudul-hasan</span>
        </div>

        {/* large device menu  */}
        <nav className="w-[80%] mx-auto border-l border-p4 h-full hidden lg:flex justify-between items-center">
          <ul className="menu_nav-items">
            <li>
              <ActiveLink href={"/"}>_home</ActiveLink>
            </li>
            <li>
              <ActiveLink2 href={"/about/professional-info"}>
                _about-me
              </ActiveLink2>
            </li>
            <li>
              <ActiveLink href={"/projects"}>_projects</ActiveLink>
            </li>
          </ul>

          <ul className="h-full">
            <li className="w-[153px] border-l border-p4 h-full flex justify-center items-center hover:text-white transition-all">
              <Link href={"/projects"}>_contact-me</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
