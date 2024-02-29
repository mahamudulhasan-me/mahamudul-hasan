import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
const ProjectsArchive = () => {
  return (
    <div className="container mx-auto md:px-[8%] px-4 pt-20">
      <div>
        <Link
          href="/"
          className="flex w-fit items-center gap-2 text-teal-400 group"
        >
          <GoArrowLeft className="group-hover:-translate-x-1 transition-all text-xl" />{" "}
          Mahamudul Hasan
        </Link>
        <h1 className="text-5xl text-slate-100 font-semibold font-sans">
          All Projects
        </h1>
      </div>
    </div>
  );
};

export default ProjectsArchive;
