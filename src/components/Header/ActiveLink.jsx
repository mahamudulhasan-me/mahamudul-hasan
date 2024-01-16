"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const ActiveLink = (to, name) => {
  const pathName = usePathname();
  const isActive = pathName === to;
  return (
    <Link
      href={to}
      className={({ isActive }) =>
        isActive
          ? "border-b-4 border-a1 w-full h-full flex justify-center items-center text-white"
          : ""
      }
    >
      {name}
    </Link>
  );
};

export default ActiveLink;
