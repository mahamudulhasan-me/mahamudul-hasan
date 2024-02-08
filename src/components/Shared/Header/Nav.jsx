import ActiveLink from "@/utils/ActiveLink";
const navItems = [
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];
const Nav = () => {
  return (
    <nav className=" space-x-8 ">
      {navItems.map((item) => (
        <ActiveLink
          key={item.name}
          href={item.href}
          className="hover:text-green transition-all"
        >
          {item.name}
        </ActiveLink>
      ))}
      <button className="btn-getResume">Resume</button>
    </nav>
  );
};

export default Nav;
