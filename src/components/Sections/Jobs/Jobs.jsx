"use client";
import { useState } from "react";
import { FcWorkflow } from "react-icons/fc";
import { MdArrowRight } from "react-icons/md";
import "./JobTabs.css";

const jobTabs = [
  {
    name: "Sundarban IT",
    content: "Sundarban IT",
    tabIndex: 1,
  },
  {
    name: "Sundarban IT",
    content: "Sundarban IT",
    tabIndex: 2,
  },
  {
    name: "Robato System ",
    content: "Sundarban IT",
    tabIndex: 3,
  },
];

const Jobs = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const handleTabClick = (tabIndex) => {
    setTabIndex(tabIndex);
  };

  return (
    <section className="py-20 flex flex-col justify-center items-center">
      <div className="w-full flex items-center space-x-1">
        <FcWorkflow size={30} />
        <h2 className="text-slate-lightest font-semibold text-3xl ">
          Where I’ve Worked
        </h2>
        <div className="w-80 h-[1px] rounded-md bg-navy-lightest "></div>
      </div>
      <div className="w-full">
        <div className="flex text-slate-dark gap-8 mt-10 ">
          <nav>
            <ul className="">
              {jobTabs.map((tab) => (
                <li
                  onClick={() => handleTabClick(tab?.tabIndex)}
                  key={tab.name}
                  className={`${
                    tabIndex === tab?.tabIndex
                      ? "bg-navy-light text-green border-l-green active-tab"
                      : "bg-transparent"
                  } hover:bg-navy-light px-4 py-2 hover:text-green border-l-2 border-navy-lightest hover:border-l-green transition-all cursor-pointer`}
                >
                  {tab.name}
                </li>
              ))}
            </ul>
          </nav>
          <div>
            {tabIndex === 1 && (
              <div>
                <h3 className="text-slate-lightest  text-xl ">
                  Developer <span className="hovered-text">@Sundarban IT</span>
                </h3>
                <p>Spring 2016 & 2017</p>
                <div>
                  <p className="flex items-center space-x-2">
                    <MdArrowRight className="text-green text-xl" />
                    Collaborated with other student designers and engineers on
                    pro-bono projects to create new brands, design systems, and
                    websites for organizations in the community
                  </p>
                </div>
              </div>
            )}
            {tabIndex === 2 && <p>job details 2</p>}
            {tabIndex === 3 && <p>job details 3</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
