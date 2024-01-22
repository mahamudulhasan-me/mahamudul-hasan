"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AboutActiveLink = ({ href, children }) => {
  const pathName = usePathname();
  const styles = "flex items-center gap-2";
  return (
    <Link
      href={href}
      className={
        pathName === href ? `${styles} text-white` : `${styles} text-s1`
      }
    >
      {children}
    </Link>
  );
};

export default AboutActiveLink;
