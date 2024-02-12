import Nav from "@/components/Nav/Nav";
import About from "@/components/Sections/About/About";
import Contact from "@/components/Sections/Contact/Contact";
import Education from "@/components/Sections/Education/Education";
import Experience from "@/components/Sections/Experience/Experience";
import Projects from "@/components/Sections/Projects/Projects";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialIcons = [
  {
    name: "github",
    url: "", // Add your GitHub URL
    icon: FaGithub,
  },
  {
    name: "linkedin",
    url: "", // Add your LinkedIn URL
    icon: FaLinkedin,
  },
  {
    name: "facebook",
    url: "", // Add your Facebook URL
    icon: FaFacebook,
  },
  {
    name: "instagram",
    url: "", // Add your Instagram URL
    icon: FaInstagram,
  },
];

const MainPage = () => {
  //   const durationFn = function (deltaTop) {
  //     return deltaTop;
  //   };

  //   const scrollToTop = () => {
  //     animateScroll.scrollToTop();
  //   };
  //   const scrollTo = (offset) => {
  //     scroller.scrollTo("scroll-to-element", {
  //       duration: 800,
  //       delay: 0,
  //       smooth: "easeInOutQuart",
  //       offset: offset,
  //     });
  //   };
  //   const scrollToWithContainer = () => {
  //     let goToContainer = new Promise((resolve, reject) => {
  //       Events.scrollEvent.register("end", () => {
  //         resolve(true);
  //         Events.scrollEvent.remove("end");
  //       });

  //       scroller.scrollTo("scroll-container", {
  //         duration: 800,
  //         delay: 0,
  //         smooth: "easeInOutQuart",
  //       });
  //     });

  //     goToContainer.then(() =>
  //       scroller.scrollTo("scroll-container-second-element", {
  //         duration: 800,
  //         delay: 0,
  //         smooth: "easeInOutQuart",
  //         containerId: "scroll-container",
  //         offset: 50,
  //       })
  //     );
  //   };

  return (
    <main className="w-full relative container mx-auto px-[8%] grid grid-cols-12 justify-between items-start">
      <div className="col-span-6 h-[calc(100vh-160px)] relative">
        <div className="fixed flex flex-col justify-between pt-20 pb-14  h-full  space-y-4 ">
          <header className="">
            <p className="text-green">Hi, my name is</p>
            <h1 className="text-5xl text-slate-100 font-semibold font-sans">
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
          <div className="mb-5 flex items-center space-x-6">
            {socialIcons.map((item) => (
              <a
                href={item.url}
                key={item.name}
                className="text-2xl text-slate-light hover:text-slate-lightest transition-all"
              >
                <item.icon />
              </a>
            ))}
            <button className="btn-getResume2  relative px-3 py-1.5">
              Resume
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-6">
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </div>
    </main>
  );
};

export default MainPage;
