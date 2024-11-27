import MobileSectionHead from "@/components/SectionHead/MobileSectionHead";
import SectionHead from "@/components/SectionHead/SectionHead";
import { institutes } from "@/utils/institutes";
import { FaGraduationCap } from "react-icons/fa";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div id="education" className="md:pt-20 md:pb-0 pb-10">
      <SectionHead icon={FaGraduationCap} title="Academic Background" />{" "}
      <MobileSectionHead icon={FaGraduationCap} title="Academic Background" />
      {institutes.map((edu) => (
        <EducationCard key={edu?.institute} educationDetails={edu} />
      ))}
    </div>
  );
};

export default Education;
