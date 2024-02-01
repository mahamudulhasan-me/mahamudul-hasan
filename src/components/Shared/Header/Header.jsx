import Nav from "./Nav";

const Header = () => {
  return (
    <header className="container mx-auto px-[3%]  flex justify-between items-center py-5">
      <aside>logo</aside>
      <Nav />
    </header>
  );
};

export default Header;
