import ActiveLink from "./ActiveLink";

const Header = () => {
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = (
    <>
      <li>
        <ActiveLink to={"/"} name="_home" />
      </li>
      <li>
        <ActiveLink to={"/about/professional-info"} name="_about-me" />
      </li>
      <li>
        <ActiveLink to={"/projects"} name="_projects" />
      </li>
    </>
  );
  return (
    <>
      <div className="container fixed inset-0 mx-auto bg-p2 w-full text-s1  h-14 border border-p4  rounded-t-lg">
        hello
      </div>
    </>
  );
};

export default Header;
