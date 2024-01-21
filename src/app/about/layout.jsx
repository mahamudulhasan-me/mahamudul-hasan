import Link from "next/link";
import { HiTerminal } from "react-icons/hi";
const AboutLayout = ({ children }) => {
  return (
    <section className="mt-12 pt-1 flex justify-between items-start h-screen">
      <aside className="w-3/5  h-full flex items-start ">
        <nav className="w-1/4  h-full border-r border-p4">
          <Link href="/about">
            <HiTerminal />
          </Link>
        </nav>
        {children}
      </aside>
      <aside className="w-2/5">code snippet</aside>
    </section>
  );
};

export default AboutLayout;
