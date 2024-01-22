"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink2 = ({ href, children }) => {
  const pathName = usePathname();

  const isActive = pathName === href || pathName.includes("about");

  return (
    <Link
      href={href}
      className={
        isActive
          ? "border-b-4 border-a1 w-full h-full flex justify-center items-center text-white"
          : ""
      }
    >
      {children}
    </Link>
  );
};

export default ActiveLink2;
