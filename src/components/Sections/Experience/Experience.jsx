import SectionHead from "@/components/SectionHead/SectionHead";
import Tag from "@/components/Tag/Tag";
import Link from "next/link";
import { MdOutlineArrowRight } from "react-icons/md";
import { RxArrowTopRight } from "react-icons/rx";
const tags = ["React", "Next.js", "Tailwind", "JavaScript", "HTML", "CSS"];
const Experience = () => {
  return (
    <div id="experience" className="pt-20 space-y-2">
      <SectionHead />
      <Link
        href="#"
        className="flex items-start  gap-10 text-slate-300 group 0   hover:ease-in-out ease-linear hover:bg-navy-light p-4 rounded-md transition-all   lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg"
      >
        <p className="w-[32%] uppercase text-sm">2021—Present</p>
        <aside className="w-full">
          <h1 className="text-xl text-slate-200 flex items-center gap-2  transition-all group-hover:text-green ">
            <span className="hovered-text2"> Front end developer </span>

            <span className=" group-hover:translate-x-1 group-hover:mb-2 transition-all">
              <RxArrowTopRight />
            </span>
          </h1>
          <h2>Sundarban Courier Service (Pvt.) Ltd.</h2>
          <p className="text-sm">On-Site</p>
          <p className="text-sm">Uttara, Dhaka-1230</p>
          <div className="text-slate-400 w-full text-justify text-sm my-3 space-y-1">
            <p className="flex items-start  gap-2">
              <span className="w-5 text-teal-400 text-2xl">
                <MdOutlineArrowRight />
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              quas?
            </p>
            <p className="flex items-start  gap-2">
              <span className="w-5 text-teal-400 text-2xl">
                <MdOutlineArrowRight />
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              quas?
            </p>
          </div>
          <Tag tags={tags} />
        </aside>
      </Link>
      <Link
        href="#"
        className="flex items-start  gap-10 text-slate-300 group 0   hover:ease-in-out ease-linear hover:bg-navy-light p-4 rounded-md transition-all   lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg"
      >
        <p className="w-[32%] uppercase text-sm">2021—Present</p>
        <aside className="w-full">
          <h1 className="text-xl text-slate-200 flex items-center gap-2  transition-all group-hover:text-green">
            Front end developer{" "}
            <span className="group-hover:translate-x-1 group-hover:mb-2 transition-all">
              <RxArrowTopRight />
            </span>
          </h1>
          <h2>Sundarban Courier Service (Pvt.) Ltd.</h2>
          <p className="text-sm">On-Site</p>
          <p className="text-sm">Uttara, Dhaka-1230</p>
          <div className="text-slate-400 w-full text-justify text-sm my-3 space-y-1">
            <p className="flex items-start  gap-2">
              <span className="w-5 text-teal-400 text-2xl">
                <MdOutlineArrowRight />
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              quas?
            </p>
            <p className="flex items-start  gap-2">
              <span className="w-5 text-teal-400 text-2xl">
                <MdOutlineArrowRight />
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              quas?
            </p>
          </div>
          <Tag tags={tags} />
        </aside>
      </Link>
      <Link
        href="#"
        className="ml-4 text-slate-100 hover:text-teal-400 transition-all flex items-center gap-2 group font-semibold"
      >
        <p>View Full Resume</p>
        <span className=" group-hover:translate-x-1 group-hover:mb-2 transition-all">
          <RxArrowTopRight />
        </span>
      </Link>
    </div>
  );
};

export default Experience;
