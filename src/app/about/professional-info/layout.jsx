import AboutActiveLink from "@/components/ActiveLink/AboutActiveLink";
import InnerLinkActive from "@/components/ActiveLink/InnerLinkActive";
import CollapseMenu from "@/components/CollapseMenu/CollapseMenu";
import ContactsNav from "@/components/CollapseMenu/ContactsNav/ContactsNav";
import InnerCollapseMenu from "@/components/CollapseMenu/InnerCollapseMenu";
import { FaNodeJs } from "react-icons/fa";
import {
  RiDatabase2Fill,
  RiFolder3Fill,
  RiHtml5Fill,
  RiStackFill,
} from "react-icons/ri";
const ProfessionalInfoLayout = ({ children }) => {
  return (
    <section className="flex w-full h-full">
      <nav className="w-[30%] h-full border-r border-p4">
        <CollapseMenu pl={true} collapse={true} name="professional-info">
          <InnerCollapseMenu>
            <InnerLinkActive
              href="/about/professional-info/skills/front-end"
              skillIcon={<RiHtml5Fill />}
            >
              front-end
            </InnerLinkActive>
            <InnerLinkActive
              href="/about/professional-info/skills/back-end"
              skillIcon={<FaNodeJs />}
            >
              back-end
            </InnerLinkActive>
            <InnerLinkActive
              href="/about/professional-info/skills/database"
              skillIcon={<RiDatabase2Fill />}
            >
              database
            </InnerLinkActive>
            <InnerLinkActive
              href="/about/professional-info/skills/others"
              skillIcon={<RiStackFill />}
            >
              others
            </InnerLinkActive>
          </InnerCollapseMenu>
          <AboutActiveLink href="/about/professional-info/experience">
            <RiFolder3Fill size={24} color="#43D9AD" /> <span>experience</span>
          </AboutActiveLink>
        </CollapseMenu>
        <ContactsNav />
      </nav>
      <aside className="w-[70%] h-full">{children}</aside>
    </section>
  );
};

export default ProfessionalInfoLayout;
