import MobileSectionHead from "@/components/SectionHead/MobileSectionHead";
import SectionHead from "@/components/SectionHead/SectionHead";
import { industries } from "@/utils/industries";
import Link from "next/link";
import { FaCode } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div id="experience" className="md:pt-20 md:pb-0 pb-10  space-y-3">
      <SectionHead icon={FaCode} title="Where I’ve Worked" />
      <MobileSectionHead icon={FaCode} title="Where I’ve Worked" />
      {industries.map((ind) => (
        <ExperienceCard key={ind.name} industriesDetails={ind} />
      ))}
      <Link
        href={"Mahmudul's_Resume.pdf"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume Link"
        className="ml-4 w-fit text-slate-100 hover:text-teal-400 transition-all flex items-center gap-2 group font-semibold"
      >
        <p className="hovered-text2">View Full Resume</p>
        <span className="text-xl group-hover:translate-x-1  transition-all">
          <GoArrowRight />
        </span>
      </Link>
    </div>
  );
};

export default Experience;
