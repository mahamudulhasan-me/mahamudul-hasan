"use client";
import { useState } from "react";
import {
  RiArrowDownSLine,
  RiArrowRightSLine,
  RiFolder3Fill,
} from "react-icons/ri";

const InnerCollapseMenu = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav
        onClick={() => setShow(!show)}
        className="flex items-center gap-1 cursor-pointer transition-all text-s1"
      >
        {show ? (
          <RiArrowDownSLine size={24} />
        ) : (
          <RiArrowRightSLine size={24} />
        )}{" "}
        <RiFolder3Fill size={24} color="#E99287" />
        <span className={`${show && "text-white"}`}>skills</span>
      </nav>
      {show && <div className="space-y-2 pl-6 mt-3 text-s1">{children}</div>}
    </>
  );
};

export default InnerCollapseMenu;
