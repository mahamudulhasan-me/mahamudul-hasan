"use client";
import Tag from "@/components/Tag/Tag";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import { RxArrowTopRight } from "react-icons/rx";
import ProjectDetailsModal from "./ProjectDetailsModal";
const tags = ["React", "Next.js", "Tailwind", "JavaScript", "HTML", "CSS"];
const ProjectCard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="flex items-start  gap-6 text-slate-300 group hover:bg-navy-light p-4 rounded-md transition-all  hover:ease-in-out ease-linear  lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg">
        <div className="w-[35%]">
          <figure className="w-full h-full border-2 rounded-md border-slate-700 group-hover:border-slate-600">
            <Image
              src="/images/danceSchool.png"
              width={250}
              height={250}
              alt="image"
              fit
              className="w-full h-full object-cover rounded-md"
            />
          </figure>
        </div>
        <div className="w-[60%]">
          <Link
            href="#"
            className="text-xl text-slate-200 flex items-center gap-2  transition-all group-hover:text-green"
          >
            Dance School
            <span className=" group-hover:translate-x-1 group-hover:mb-2 transition-all">
              <RxArrowTopRight />
            </span>
          </Link>
          <p className="text-slate-300">Summer Camp School</p>
          <div className="text-slate-400 w-full text-justify text-sm my-3 space-y-2">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              odio. Lorem ipsum dolor sit amet.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              odio. Lorem ipsum dolor sit amet.
            </p>

            <Tag tags={tags} />
          </div>
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={() => setShowModal(true)}
              className="btn-getResume2 relative p-1.5 text-xs"
            >
              View Details
            </button>
            <Link href="">
              <FaGithub
                size={22}
                className="hover:text-slate-200 transition-all"
              />
            </Link>
            <Link href="">
              <LuExternalLink
                size={22}
                className="hover:text-slate-200 transition-all"
              />
            </Link>
          </div>
        </div>
      </div>
      {showModal && <ProjectDetailsModal setShowModal={setShowModal} />}
    </>
  );
};

export default ProjectCard;
