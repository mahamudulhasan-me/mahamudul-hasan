import Tag from "@/components/Tag/Tag";
import { MdOutlineArrowRight } from "react-icons/md";
import { RxArrowTopRight } from "react-icons/rx";

const ExperienceCard = ({ industriesDetails }) => {
  const { duration, role, name, jobType, address, duties, skills } =
    industriesDetails;
  return (
    <div className="flex md:flex-row flex-col items-start justify-between  md:gap-2 text-slate-300 group 0   hover:ease-in-out ease-linear hover:bg-navy-light p-4 rounded-md transition-all   lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg">
      <p className="w-[40%] uppercase text-sm mt-1">{duration}</p>
      <aside className="w-full">
        <h1 className="text-xl text-slate-200 flex items-center gap-2  transition-all group-hover:text-green ">
          <span className="hovered-text2"> {role} </span>

          <span className=" group-hover:translate-x-1 group-hover:mb-2 transition-all">
            <RxArrowTopRight />
          </span>
        </h1>
        <h2>{name}</h2>
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
  );
};

export default ExperienceCard;
