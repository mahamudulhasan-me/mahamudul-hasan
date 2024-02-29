import MobileSectionHead from "@/components/SectionHead/MobileSectionHead";
import SectionHead from "@/components/SectionHead/SectionHead";
import { industries } from "@/utils/industries";
import Link from "next/link";
import { FaCode } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const experience = industries;
  return (
    <div id="experience" className="md:pt-20 md:pb-0 pb-10  space-y-3">
      <SectionHead icon={FaCode} title="Where I’ve Worked" />
      <MobileSectionHead icon={FaCode} title="Where I’ve Worked" />
      {experience.map((ind) => (
        <ExperienceCard key={ind.name} industriesDetails={ind} />
      ))}

      <Link
        href={"Mahmudul's Resume [Front-End Developer] .pdf"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume Link"
        className="ml-4 w-fit text-slate-100 hover:text-teal-400 transition-all flex items-center gap-2 group font-semibold"
      >
        <p className="hovered-text2">View Full Resume</p>
        <span className=" group-hover:translate-x-1 group-hover:mb-2 transition-all">
          <FiExternalLink />
        </span>
      </Link>
    </div>
  );
};

export default Experience;
