import SectionHead from "@/components/SectionHead/SectionHead";
import { MdPhone } from "react-icons/md";
import { RiContactsBookFill } from "react-icons/ri";
import { RxArrowTopRight } from "react-icons/rx";
import { TbMailShare } from "react-icons/tb";
const Contact = () => {
  return (
    <div id="contact" className="py-20">
      <SectionHead icon={RiContactsBookFill} title="Contact Info" />
      <div className="p-4 space-y-4">
        <aside className="flex items-center  gap-2">
          <p className="text-slate-300 text-2xl">
            <MdPhone />
          </p>
          <p className="text-slate-300">
            <span className="hovered-text2">+8801710142370</span> <br />
            <span className="hovered-text2">+8801511242370</span>
          </p>
        </aside>
        <aside className="flex items-start gap-3">
          <p className="text-slate-300 text-2xl">
            <TbMailShare />
          </p>

          <p className="text-slate-300 flex items-center gap-1 group">
            <span className="hovered-text2">mahamudulhasan.org@gmail.com</span>{" "}
            <span className=" group-hover:translate-x-1 group-hover:mb-2 transition-all">
              <RxArrowTopRight />
            </span>
            <br />
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
