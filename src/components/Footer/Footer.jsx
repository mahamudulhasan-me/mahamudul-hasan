import Link from "next/link";
import {
  RiCopyrightLine,
  RiFacebookFill,
  RiGithubFill,
  RiLinkedinFill,
} from "react-icons/ri";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="fixed container mx-auto flex lg:justify-between items-center h-12 text-s1  bottom-0 left-0 right-0  border-y bg-p2 border-p4 ">
      <>
        <div className="border-x rounded-bl-lg border-p4 h-full flex justify-start items-center transition-all">
          <span className="pl-6">find me in:</span>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/mahamudulhasan-me/"}
            className="ml-5 w-14 transition duration-300 hover:text-white border-x h-full border-p4 flex justify-center items-center"
          >
            <RiLinkedinFill size={24} />
          </Link>
          <Link
            target="_blank"
            href={"https://www.facebook.com/mahamudulhasan.me"}
            className="w-14  h-full transition duration-300 hover:text-white border-p4 flex justify-center items-center"
          >
            <RiFacebookFill size={24} />
          </Link>
        </div>
        <p className="text-xs hidden lg:flex flex-col items-center">
          <span>design-inspired by Yanka</span>

          <span className="flex items-center">
            <RiCopyrightLine /> {year}_mahamudulHasan{" "}
          </span>
        </p>
        <div
          className="min-w-2/12 lg:border-x lg:pr-0  h-full flex  border-p4 rounded-br-md pl-6
      "
        >
          <Link
            href={"https://github.com/mahamudulhasan-me"}
            className="flex justify-end items-center gap-2 transition-all"
          >
            <span className="hover:text-s3 hidden lg:block transition duration-300">
              @mahamudulhasan-me
            </span>
            <RiGithubFill
              size={24}
              className="hover:text-white transition duration-300 mr-6"
            />
          </Link>
        </div>
      </>
    </footer>
  );
};

export default Footer;
