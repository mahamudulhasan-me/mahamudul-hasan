import MobileSectionHead from "@/components/SectionHead/MobileSectionHead";
import SectionHead from "@/components/SectionHead/SectionHead";
import { FaLaptopCode } from "react-icons/fa";

const SkillSection = () => {
  return (
    <div id="skill" className="md:pt-20 md:pb-0 pb-10">
      <SectionHead icon={FaLaptopCode} title="Tech I Work With" />{" "}
      <MobileSectionHead icon={FaLaptopCode} title="Tech I Work With" />
    </div>
  );
};

export default SkillSection;
