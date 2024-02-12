import Link from "next/link";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-slate-400 text-sm pb-20">
      Design inspired by <span className="hovered-text">Brittany Chiang</span>,
      developed by{" "}
      <Link href="#" className="hovered-text">
        me
      </Link>{" "}
      and built with <span className="hovered-text">Next.js</span> and{" "}
      <span className="hovered-text">Tailwind CSS</span>, deployed with{" "}
      <span className="hovered-text">Vercel</span>.
      <p className="border-t border-navy-lightest pt-1 mt-1">
        {currentYear} &copy; Mahamudul Hasan
      </p>
    </footer>
  );
};

export default Footer;
