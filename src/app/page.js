import HeroSection from "@/components/HeroSection/HeroSection";
import About from "@/components/Sections/About/About";
import Jobs from "@/components/Sections/Jobs/Jobs";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
const socialIcons = [
  {
    name: "github",
    url: "",
    icon: FiGithub,
  },
  {
    name: "linkedin",
    url: "",
    icon: FiLinkedin,
  },
  {
    name: "facebook",
    url: "",
    icon: FaFacebookF,
  },
  {
    name: "instagram",
    url: "",
    icon: FiInstagram,
  },
];
export default function Home() {
  return (
    <main className="container mx-auto px-[7%] relative w-full">
      <HeroSection />
      <About />
      <Jobs />
      {/* <div className="flex flex-col items-center text-slate-light fixed right-10 bottom-0">
        <p
          className="flex flex-col items-center text-sm"
          style={{ transform: "rotate(-90deg)" }}
        >
          <span>m</span>
          <span>a</span>
          <span>h</span>
          <span>@</span>
          <span>g</span>
          <span>m</span>
          <span>a</span>
          <span>i</span>
          <span>l</span>
        </p>

        <div className="h-24 w-[1px] bg-slate-light"></div>
      </div> */}
      <div className="flex flex-col items-center text-slate-light fixed left-10 bottom-0 space-y-8">
        <div className="space-y-7 text-xl flex flex-col items-center">
          {socialIcons.map((item) => (
            <p
              key={item.name}
              className="hover:text-green group transition-all hobby:w-10 h-5  rounded-full flex items-center justify-center"
            >
              <Link href={item.url} className="hover:mb-1.5 transition-all">
                {<item.icon />}
              </Link>
            </p>
          ))}
        </div>
        <span className="h-24 w-[1px] bg-slate-light"></span>
      </div>
    </main>
  );
}
