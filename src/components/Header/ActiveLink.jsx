"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const ActiveLink = ({ to, children }) => {
  const pathName = usePathname();
  console.log(pathName);

  const isActive = pathName == to;

  return (
    <Link
      href={to}
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

export default ActiveLink;
