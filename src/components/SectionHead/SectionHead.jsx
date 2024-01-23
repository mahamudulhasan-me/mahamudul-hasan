import { RiCloseFill } from "react-icons/ri";

const SectionHead = ({ children }) => {
  return (
    <div
      className={`lg:border-b border lg:border-0   border-p4 w-full h-10 hidden md:block`}
    >
      <span className="border-r text-s1 border-p4  h-full w-fit flex gap-1 items-center px-3 cursor-pointer">
        {children} <RiCloseFill size={20} />
      </span>
    </div>
  );
};

export default SectionHead;
