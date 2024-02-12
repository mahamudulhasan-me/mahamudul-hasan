import SectionHead from "@/components/SectionHead/SectionHead";
import Link from "next/link";
import { FaProjectDiagram } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <section id="projects" className="pt-20">
      <SectionHead icon={FaProjectDiagram} title="Projects I've Completed" />
      <ProjectCard />
      <Link
        href="#"
        className="ml-4 text-slate-100 hover:text-teal-400 transition-all flex items-center gap-2 group font-semibold"
      >
        <p className="hovered-text2">View All Projects</p>
        <span className=" group-hover:translate-x-1 group-hover:mb-2 transition-all">
          <FiExternalLink />
        </span>
      </Link>
    </section>
  );
};

export default Projects;
