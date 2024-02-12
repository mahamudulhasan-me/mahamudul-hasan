import SectionHead from "@/components/SectionHead/SectionHead";
import { MdPhone } from "react-icons/md";
import { RiContactsBookFill, RiHomeOfficeLine } from "react-icons/ri";
import Email from "./Email";
const Contact = () => {
  return (
    <div id="contact" className="py-20">
      <SectionHead icon={RiContactsBookFill} title="Contact Info" />
      <div className="p-4 space-y-4">
        <p className="flex items-center gap-2 text-slate-300">
          <RiHomeOfficeLine size={24} /> Uttara, Dhaka-1230, Bangladesh
        </p>
        <aside className="flex items-center  gap-2">
          <p className="text-slate-300 text-2xl">
            <MdPhone />
          </p>
          <p className="text-slate-300">
            <span className="hovered-text2">+8801710142370</span> <br />
            <span className="hovered-text2">+8801511242370</span>
          </p>
        </aside>
        <Email />
      </div>
    </div>
  );
};

export default Contact;
