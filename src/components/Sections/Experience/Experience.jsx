import MobileSectionHead from "@/components/SectionHead/MobileSectionHead";
import SectionHead from "@/components/SectionHead/SectionHead";
import Link from "next/link";
import { FaCode } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import ExperienceCard from "./ExperienceCard";

const industries = [
  {
    name: "Sundarban Courier Service (Pvt.) Ltd.",
    link: "https://sundarban.com.bd/",
    role: "Frontend Developer",
    jobType: "On-Site",
    duration: "Sep, 23 — Present",
    address: "Uttara, Dhaka-1230",
    duties: [
      "Develop responsive and visually engaging web interfaces using React and NextJs.",
      "Collaborated with back-end developers to integrate front-end and server-side components.",
      "Convert Figma, PSD to pixel perfect web pages.",
    ],
    skills: [
      "TailwindCSS",
      "TypeScript",
      "Next.js",
      "React",
      "MUI",
      "GraphQL",
      "Apollo",
    ],
  },
  {
    name: "Robato Systems (Pvt.) Ltd.",
    link: "https://robatosystems.com/",
    role: "MERN Stack Developer",
    jobType: "Remote",
    duration: "July, 23 — Sep, 23",
    address: "Nodia, India",
    duties: [
      "Building user interfaces and implementing designs using React, and Next.js",
      "Developing server-side logic and APIs using  Express.js, and working with MongoDB",
      "Integrating front-end and back-end components to create full-stack applications that meet project requirements",
      "Working closely with senior developers, designers, and project managers to understand requirements and contribute to project development",
    ],
    skills: [
      "TailwindCSS",
      "JavaScript",
      "Next.js",
      "React",
      "RESTful APIs",
      "JWT",
      "Express.js",
      "MongoDB",
      "MySQL",
    ],
  },
];

const Experience = () => {
  return (
    <div id="experience" className="md:pt-20 md:pb-0 pb-10  space-y-3">
      <SectionHead icon={FaCode} title="Where I’ve Worked" />
      <MobileSectionHead icon={FaCode} title="Where I’ve Worked" />
      {industries.map((ind) => (
        <ExperienceCard key={ind.name} industriesDetails={ind} />
      ))}

      <Link
        href="https://drive.google.com/file/d/13oHAeC0c8ZZ3mnhuhP2LTwCx2PZuciFi/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume Link"
        download
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
