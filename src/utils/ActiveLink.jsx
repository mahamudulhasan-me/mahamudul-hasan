import Link from "next/link";
const ActiveLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="text-slate-lightest transition-all hover:text-green"
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
