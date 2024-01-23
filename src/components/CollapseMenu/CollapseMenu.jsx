"use client";
import { useState } from "react";
import { RiArrowDownSFill, RiArrowRightSFill } from "react-icons/ri";

const CollapseMenu = ({ pl, bt, collapse, children }) => {
  const [show, setShow] = useState(collapse);
  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className={`${show ? "text-white" : "md:text-s1"} ${
          bt && "border - t"
        } border-b border-p4 w-full h-10 flex gap-1 items-center px-3 cursor-pointer lg:bg-transparent bg-p4 transition-colors duration-150 mb-5`}
      >
        {show ? (
          <RiArrowDownSFill size={24} />
        ) : (
          <RiArrowRightSFill size={24} />
        )}
        <span>professional-info</span>
      </div>
      <div className={`${pl && "pl-5"} mb-7`}>
        {show && <div className="space-y-3">{children}</div>}
      </div>
    </>
  );
};

export default CollapseMenu;
