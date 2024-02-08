"use client";
import { useState } from "react";
import { FcWorkflow } from "react-icons/fc";
import "./JobTabs.css";
const Jobs = () => {
  const [sliderStyle, setSliderStyle] = useState({});

  const handleTabClick = (event) => {
    const position = event.target.parentElement.offsetTop;
    const height = event.target.parentElement.clientHeight;
    setSliderStyle({ top: position, height: height });
  };

  return (
    <section className="w-full py-20">
      <div className="flex justify-center items-center space-x-1">
        <FcWorkflow size={30} />
        <h2 className="text-slate-lightest font-semibold text-3xl ">
          Where I’ve Worked
        </h2>
        <div className="w-80 h-[1px] rounded-md bg-navy-lightest "></div>
      </div>
      <div className="tabs">
        <input type="radio" id="r1" name="t" checked />
        <label htmlFor="r1">Tab</label>
        <div className="content">Content</div>

        <input type="radio" id="r2" name="t" />
        <label htmlFor="r2">Tib</label>
        <div className="content">Article</div>

        <input type="radio" id="r3" name="t" />
        <label htmlFor="r3">Tub</label>
        <div className="content">Stuff</div>

        <div id="slider"></div>
      </div>
    </section>
  );
};

export default Jobs;
