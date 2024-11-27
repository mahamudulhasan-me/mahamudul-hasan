"use client";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const navItems = [
  {
    name: "About",
    to: "about",
  },
  {
    name: "Skill",
    to: "skill",
  },
  {
    name: "Experience",
    to: "experience",
  },
  {
    name: "Projects",
    to: "projects",
  },
  {
    name: "Education",
    to: "education",
  },
];

const Nav = () => {
  const [active, setActive] = useState("about");

  const handleSetActive = (to) => {
    setActive(to);
  };

  return (
    <nav className="md:block hidden mt-20 text-slate-light space-y-4 ">
      {navItems.map((item) => (
        <ScrollLink
          className={`${
            active === item.to ? "text-slate-50 " : "text-slate-400"
          } flex items-center group  hover:text-slate-50 transition-all uppercase text-sm font-semibold gap-3 w-fit cursor-pointer`}
          to={item.to}
          key={item.name}
          spy={true}
          smooth={true}
          duration={500}
          onClick={() => setActive(item.to)}
          onSetActive={() => handleSetActive(item.to)}
        >
          <span
            className={`${
              active === item.to ? "bg-slate-50 w-16 " : "bg-slate-500 w-8 "
            }  group-hover:w-16 h-[1px] transition-all  group-hover:bg-slate-50 `}
          ></span>
          {item.name}
        </ScrollLink>
      ))}
    </nav>
  );
};

export default Nav;
