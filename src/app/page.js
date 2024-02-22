import BackToTop from "@/components/BackToTop/BackToTop";
import Nav from "@/components/Nav/Nav";
import SocialLink from "@/components/Nav/SocialLink";
import About from "@/components/Sections/About/About";
<<<<<<< HEAD
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
    <main className="container mx-auto px-[7%] relative w-full z-30">
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
=======
import Contact from "@/components/Sections/Contact/Contact";
import Education from "@/components/Sections/Education/Education";
import Experience from "@/components/Sections/Experience/Experience";
import Footer from "@/components/Sections/Footer/Footer";
import Projects from "@/components/Sections/Projects/Projects";
>>>>>>> d0506a927acb85616ba23d0e20f7130a275bae44

const MainPage = () => {
  return (
    <main className="w-full relative container mx-auto md:px-[8%] px-4 md:grid grid-cols-12 justify-between items-start">
      <div className="col-span-6 md:px-0 px-4 md:h-[calc(100vh-160px)] relative ">
        <div className="md:fixed flex flex-col md:justify-between pt-20 pb-14  h-full  md:space-y-4 ">
          <header>
            <p className="text-green">Hi, my name is</p>
            <h1 className="md:text-5xl text-4xl text-slate-100 font-semibold font-sans">
              Mahamudul Hasan
            </h1>
            <h3 className="text-2xl text-slate-100 mt-2 mb-3">
              Web Application Developer
            </h3>
            <p className="text-slate-400">
              I build pixel-perfect, engaging, and <br /> accessible digital
              experiences.
            </p>
            <Nav />
          </header>
          <div className="mb-5 md:mt-0 mt-5 flex items-center space-x-6">
            <SocialLink />
          </div>
        </div>
      </div>
      <div className="col-span-6">
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
      <BackToTop />
    </main>
  );
};

export default MainPage;
