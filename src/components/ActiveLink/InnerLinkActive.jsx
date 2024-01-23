"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const InnerLinkActive = ({ href, skillIcon, children }) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link
      href={href}
      className={`${
        isActive ? "text-white" : "text-s1"
      } flex items-center gap-1`}
    >
      <span className={`${isActive && "text-a1"} text-2xl`}>{skillIcon}</span>
      <skillIcon />
      {children}
    </Link>
  );
};

export default InnerLinkActive;
