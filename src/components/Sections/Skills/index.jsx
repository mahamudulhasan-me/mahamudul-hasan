import MobileSectionHead from "@/components/SectionHead/MobileSectionHead";
import SectionHead from "@/components/SectionHead/SectionHead";
import { skillSet } from "@/utils/skillSet";
import { FaLaptopCode } from "react-icons/fa";
import SkillCard from "./SkillCard";

const SkillSection = () => {
  return (
    <section id="skill" className="md:pt-20 md:pb-0 pb-10">
      <SectionHead icon={FaLaptopCode} title="Tech I Work With" />{" "}
      <MobileSectionHead icon={FaLaptopCode} title="Tech I Work With" />
      <div>
        {skillSet?.map((skills, index) => (
          <SkillCard key={index} skills={skills} />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
