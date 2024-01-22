import AboutActiveLink from "@/components/ActiveLink/AboutActiveLink";
import CollapseMenu from "@/components/CollapseMenu/CollapseMenu";
import ContactsNav from "@/components/CollapseMenu/Contacts/ContactsNav";
import { RiFolder3Fill } from "react-icons/ri";
const ProfessionalInfoLayout = ({ children }) => {
  return (
    <section className="flex w-full h-full">
      <nav className="w-[31%] h-full border-r border-p4">
        <CollapseMenu pl={true} collapse={true}>
          <AboutActiveLink href="/about/professional-info/skills">
            <RiFolder3Fill size={24} color="#E99287" /> <span>Skills</span>
          </AboutActiveLink>
          <AboutActiveLink href="/about/professional-info/experience">
            <RiFolder3Fill size={24} color="#43D9AD" /> <span>experience</span>
          </AboutActiveLink>
        </CollapseMenu>
        <ContactsNav />
      </nav>
      <aside className="w-[69%] h-full">{children}</aside>
    </section>
  );
};

export default ProfessionalInfoLayout;
