"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const ActiveLink = ({ href, children }) => {
  const path = usePathname();
  const isActive = path.includes(href);
  return (
    <Link
      href={href}
      className={`${
        isActive ? "text-green" : "text-slate-lightest"
      } transition-all hover:text-green`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
