import { RiMailFill, RiPhoneFill } from "react-icons/ri";
import CollapseMenu from "../CollapseMenu";
import SendMail from "./SendMail";

const ContactsNav = ({bt}) => {
  return (
    <CollapseMenu bt={bt} pl={false} collapse={false} name="contacts">
      <div className={`px-3  md:pb-0 pb-2 space-y-4 text-s1`}>
        <p className="flex items-center gap-2 ">
          <RiMailFill size={20} />
          <SendMail />
        </p>
        <span className="text-xs">mahamudulhasan.org@gmail.com</span>
        <div className="flex items-center gap-2 ">
          <RiPhoneFill size={20} />
          <p className="flex flex-col">
            <span className="hover:text-white transition-colors duration-150 ">
              +8801710142370
            </span>
            <span className="hover:text-white transition-colors duration-150 ">
              +8801511242370
            </span>
          </p>
        </div>
      </div>
    </CollapseMenu>
  );
};

export default ContactsNav;
