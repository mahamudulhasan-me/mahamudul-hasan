"use client";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Smooth scrolling behavior
    });
  };

  return (
    <div
      className={`fixed  right-10  cursor-pointer transition-all duration-500 w-10 h-10 rounded-full  flex justify-center items-center  text-teal-400 ${
        isVisible ? "bottom-10" : "-bottom-10"
      }`}
      onClick={scrollToTop}
    >
      <MdOutlineKeyboardDoubleArrowUp size={36} className="animate-bounce" />
    </div>
  );
};

export default BackToTop;
