import Tag from "@/components/Tag/Tag";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { RxArrowTopRight } from "react-icons/rx";

const ProjectCardInner = ({ projectDetails, setShowModal }) => {
  const {
    name,
    isTranslate,
    title,
    description,
    cover,
    technologies,
    clientCode,
    liveLink,
  } = projectDetails;
  return (
    <div className="flex md:flex-row flex-col items-start  gap-6 text-slate-300 group hover:bg-navy-light p-4 rounded-md transition-all  hover:ease-in-out ease-linear  lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg">
      {isTranslate ? (
        <div className="md:w-[35%] w-full md:h-[6.5rem] h-40 duration-1000 hover:duration-[3000ms] group-hover:h-[17rem]  border-2 rounded-md border-slate-700 group-hover:border-slate-600 overflow-hidden">
          <figure className="w-full duration-[3000ms] transition-transform ease-linear transform translate-y-0 group-hover:-translate-y-[calc(100%-17rem)]">
            <Image
              src={cover}
              width={250}
              height={250}
              alt="image"
              className="w-full h-full object-cover rounded-md"
            />
          </figure>
        </div>
      ) : (
        <div className="md:w-[35%] w-full">
          <figure className="w-full h-full border-2 rounded-md border-slate-700 group-hover:border-slate-600">
            <Image
              src={cover} // Access the first image path from the images array
              width={250}
              height={250}
              alt="image"
              className="w-full h-full object-cover rounded-md"
            />
          </figure>
        </div>
      )}

      <div className="md:w-[60%]">
        <Link
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-slate-200 flex items-center gap-2  transition-all group-hover:text-green "
        >
          <span className="hovered-text2"> {name}</span>
          <span className=" group-hover:translate-x-1 group-hover:mb-2 transition-all">
            <RxArrowTopRight />
          </span>
        </Link>
        <p className="text-slate-300">{title}</p>
        <div className="text-slate-400 w-full text-justify text-sm my-3 space-y-2">
          <p>{description.slice(0, 124)}...</p>

          <Tag tags={technologies} />
        </div>
        <div className="flex items-center gap-4 mt-6">
          <button
            onClick={() => setShowModal(true)}
            className="btn-getResume2 relative p-1.5 text-xs"
          >
            View Details
          </button>
          <Link
            href={clientCode}
            aria-label="Client Code"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              size={22}
              className="hover:text-slate-200 transition-all"
            />
          </Link>
          <Link
            href={liveLink}
            aria-label="Live Link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuExternalLink
              size={22}
              className="hover:text-slate-200 transition-all"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardInner;
