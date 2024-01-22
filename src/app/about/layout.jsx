import AboutActiveLink from "@/components/ActiveLink/AboutActiveLink";
import { HiTerminal } from "react-icons/hi";
import { RiGamepadFill, RiInformationFill } from "react-icons/ri";
const AboutLayout = ({ children }) => {
  return (
    <section className="flex h-[calc(100vh-100px)]   mt-[3rem]">
      <div className="w-[60%] border-r border-p4 h-full flex">
        <div className="w-[5%] border-r border-p4 h-full pt-5  text-2xl flex flex-col  gap-5 items-center text-s1">
          <AboutActiveLink href="/about/professional-info">
            <HiTerminal />
          </AboutActiveLink>
          <AboutActiveLink href="/about/personal-info">
            <RiInformationFill />
          </AboutActiveLink>
          <AboutActiveLink href="/about">
            <RiGamepadFill />
          </AboutActiveLink>
        </div>
        <div className="w-[95%] h-full">{children}</div>
      </div>

      <div className="w-[40%] h-full border-l border-p4"> code snippet</div>
    </section>
  );
};

export default AboutLayout;
