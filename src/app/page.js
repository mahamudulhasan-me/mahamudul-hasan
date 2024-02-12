import BackToTop from "@/components/BackToTop/BackToTop";
import Nav from "@/components/Nav/Nav";
import About from "@/components/Sections/About/About";
import Contact from "@/components/Sections/Contact/Contact";
import Education from "@/components/Sections/Education/Education";
import Experience from "@/components/Sections/Experience/Experience";
import Footer from "@/components/Sections/Footer/Footer";
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
        <Footer />
      </div>
      <BackToTop />
    </main>
  );
};

export default MainPage;
