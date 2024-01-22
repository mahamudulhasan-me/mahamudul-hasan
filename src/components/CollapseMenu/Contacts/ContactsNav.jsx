import { RiMailFill, RiPhoneFill } from "react-icons/ri";
import CollapseMenu from "../CollapseMenu";
import SendMail from "./SendMail";

const ContactsNav = () => {
  return (
    <CollapseMenu pl={false} collapse={false}>
      <div className={`px-3  md:pb-0 pb-2 space-y-4 text-s1`}>
        <p className="flex items-center gap-2 ">
          <RiMailFill size={20} />
          <SendMail />
        </p>
        <span className="text-xs">mahamudulhasan.org@gmail.com</span>
        <p className="flex items-center gap-2 ">
          <RiPhoneFill size={20} />
          <span className="hover:text-white transition-colors duration-150 ">
            +8801710142370 <br />
            +8801511242370
          </span>
        </p>
      </div>
    </CollapseMenu>
  );
};

export default ContactsNav;
