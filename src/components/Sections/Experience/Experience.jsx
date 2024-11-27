import { TextShimmer } from "@/components/motion-ui/TextShimmer";
import MobileSectionHead from "@/components/SectionHead/MobileSectionHead";
import SectionHead from "@/components/SectionHead/SectionHead";
import { industries } from "@/utils/industries";
import Link from "next/link";
import { FaUserTie } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div id="experience" className="md:pt-20 md:pb-0 pb-10  space-y-3">
      <SectionHead icon={FaUserTie} title="Professional Journey" />
      <MobileSectionHead icon={FaUserTie} title="Professional Journey" />
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
        <TextShimmer
          duration={1.2}
          className="hovered-text2 [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.teal.400)]"
        >
          View Full Resume
        </TextShimmer>

        <span className="text-xl group-hover:translate-x-1  transition-all">
          <GoArrowRight />
        </span>
      </Link>
    </div>
  );
};

export default Experience;
