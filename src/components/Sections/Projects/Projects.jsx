import MobileSectionHead from "@/components/SectionHead/MobileSectionHead";
import SectionHead from "@/components/SectionHead/SectionHead";
import { projects } from "@/utils/projects";
import Link from "next/link";
import { FaProjectDiagram } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <section id="projects" className="md:pt-20 md:pb-0 pb-10 space-y-3">
      <SectionHead icon={FaProjectDiagram} title="Projects I've Completed" />
      <MobileSectionHead
        icon={FaProjectDiagram}
        title="Projects I've Completed"
      />

      {projects.map((project) => (
        <ProjectCard key={project.id} projectDetails={project} />
      ))}

      <Link
        href="/projectsArchive"
        className="ml-4 w-fit text-slate-100 hover:text-teal-400 transition-all flex items-center gap-2 group font-semibold"
      >
        <p className="hovered-text2">View Full Project Archive</p>
        <span className="text-xl group-hover:translate-x-1  transition-all">
          <GoArrowRight />
        </span>
      </Link>
    </section>
  );
};

export default Projects;
