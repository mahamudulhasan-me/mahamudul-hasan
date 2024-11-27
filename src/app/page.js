import BackToTop from "@/components/BackToTop/BackToTop";
import FbMessenger from "@/components/FbMessenger/FbMessenger";
import { TextLoop } from "@/components/motion-ui/TextLoop";
import Nav from "@/components/Nav/Nav";
import SocialLink from "@/components/Nav/SocialLink";
import About from "@/components/Sections/About/About";

import Contact from "@/components/Sections/Contact/Contact";
import Education from "@/components/Sections/Education/Education";
import Experience from "@/components/Sections/Experience/Experience";
import Footer from "@/components/Sections/Footer/Footer";
import Projects from "@/components/Sections/Projects/Projects";
import SkillSection from "@/components/Sections/Skills";

const MainPage = () => {
  return (
    <main className="w-full relative container mx-auto md:px-10  md:grid grid-cols-12 justify-between items-start">
      <div className="col-span-5 md:px-0 px-4 md:h-[calc(100vh-160px)] relative ">
        <div className="md:fixed flex flex-col md:justify-between pt-20 pb-14  h-full  md:space-y-4 ">
          <header>
            <p className="text-green">Hi, my name is</p>
            <h1 className="md:text-5xl text-4xl text-slate-100 font-semibold font-sans">
              Mahamudul Hasan
            </h1>
            <h2 className="text-2xl text-slate-100 mt-2 mb-3">
              Web Application Developer
            </h2>
            <h6 className=" inline-block overflow-hidden text-slate-400">
              I build{" "}
              <TextLoop
                interval={4}
                className="overflow-y-clip"
                transition={{
                  type: "spring",
                  stiffness: 900,
                  damping: 80,
                  mass: 10,
                }}
                variants={{
                  initial: {
                    y: 20,
                    rotateX: 90,
                    opacity: 0,
                    filter: "blur(4px)",
                  },
                  animate: {
                    y: 0,
                    rotateX: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                  },
                  exit: {
                    y: -20,
                    rotateX: -90,
                    opacity: 0,
                    filter: "blur(4px)",
                  },
                }}
              >
                <span>pixel-perfect, engaging, and</span>
                <span>impactful front-end digital experiences.</span>
                <span>high-performance, scalable web applications.</span>
                <span>intuitive and interactive user interfaces.</span>
                <span>next-gen solutions with MERN stack expertise.</span>
                <span>cutting-edge tools and technologies for the web.</span>
                <span>seamless experiences that inspire users.</span>
                <span>clean, maintainable, and efficient codebases.</span>
                <span>robust back-end systems with GraphQL APIs.</span>
                <span>dynamic and responsive digital landscapes.</span>
              </TextLoop>
            </h6>
            <Nav />
          </header>
          <div className="mb-5 md:mt-0 mt-5 flex items-center space-x-6">
            <SocialLink />
          </div>
        </div>
      </div>
      <div className="md:ml-10 col-span-7">
        <About />
        <SkillSection />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
      <FbMessenger />
      <BackToTop />
    </main>
  );
};

export default MainPage;
