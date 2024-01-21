import Link from "next/link";
import ActiveLink from "./ActiveLink";
const navItems = [
  { href: "/", name: "_home" },
  { href: "/about", name: "_about-me" },
  { href: "/projects", name: "_projects" },
];
const Header = () => {
  return (
    <>
      <div className="fixed inset-0 container mx-auto border rounded-t-md text-s1  h-14 bg-p2  flex justify-between items-center  border-p4">
        {/* responsive menu  */}
        <div className="lg:w-[24%] z-50 w-full lg:pl-6 lg:px-0 px-10 flex justify-between items-center ">
          <span>_mahamudul-hasan</span>
        </div>

        {/* large device menu  */}
        <nav className="w-[calc(100vw-24%)] mx-auto border-l border-p4 h-full hidden lg:flex justify-between items-center">
          <ul className="menu_nav-items">
            {navItems.map((item) => (
              <li key={item.name}>
                <ActiveLink to={item.href}>{item.name}</ActiveLink>
              </li>
            ))}
          </ul>

          <ul className="h-full">
            <li className="w-[153px] border-l border-p4 h-full flex justify-center items-center hover:text-white transition-all">
              <Link href={"/contact"}>_contact-me</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
