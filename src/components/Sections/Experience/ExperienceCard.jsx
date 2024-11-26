import { InView } from "@/components/motion-ui/InView";
import Tag from "@/components/Tag/Tag";
import { calculateExperience } from "@/lib/calculateExperience";
import { formatDateRange } from "@/lib/formatDate";
import Link from "next/link";
import { MdOutlineArrowRight } from "react-icons/md";
const ExperienceCard = ({ industriesDetails }) => {
  const { role, name, link, jobType, address, duties, skills, start, end } =
    industriesDetails;
  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      viewOptions={{ margin: "0px 0px -30px 0px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {" "}
      <div className="flex md:flex-row flex-col items-start justify-between  md:gap-2 text-slate-300 group   hover:ease-in-out ease-linear hover:bg-navy-light p-4 rounded-md transition-all   hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg">
        <aside className="md:w-[40%] w-full flex md:flex-col flex-row items-center justify-between">
          {" "}
          <p className="uppercase text-sm mt-1">
            {formatDateRange(start, end)}
          </p>
          <p className="text-sm ">{calculateExperience(start, end)}</p>
        </aside>
        <aside className="w-full">
          <h1 className="text-xl text-slate-200 flex items-center gap-2  transition-all group-hover:text-green ">
            <span className="hovered-text2"> {role} </span>

            {/* <span className=" group-hover:translate-x-1 group-hover:mb-2 transition-all">
              <RxArrowTopRight />
            </span> */}
          </h1>
          <Link href={link} target="_blank" rel="noopener noreferrer">
            {name}
          </Link>
          <p className="text-sm">{jobType}</p>
          <p className="text-sm">{address}</p>
          <div className="text-slate-400 w-full text-sm my-3 space-y-2">
            {duties.map((duty, index) => (
              <p key={index} className="flex items-start  gap-1">
                <span className="w-5 text-teal-400 text-2xl">
                  <MdOutlineArrowRight />
                </span>
                {duty}
              </p>
            ))}
          </div>
          <Tag tags={skills} />
        </aside>
      </div>
    </InView>
  );
};

export default ExperienceCard;
