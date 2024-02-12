import MobileSectionHead from "@/components/SectionHead/MobileSectionHead";
import { FcAbout } from "react-icons/fc";
import { MdArrowRight } from "react-icons/md";
const skills = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "TailwindCSS",
  "Express.js",
  "MongoDB",
];
const About = () => {
  return (
    <section
      id="about"
      className="text-slate-400 space-y-5 leading-6 md:pt-20 md:pb-0 pb-10 text-justify md:p-4 p-0"
    >
      <MobileSectionHead icon={FcAbout} title="About" />
      <div className="px-4 md:px0">
        <p>
          Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and I’ve had the privilege of
          building software for an advertising agency, a start-up, a student-led
          design studio, and a huge{" "}
          <span className="hovered-text">corporation</span>.
        </p>
        <p>
          My main focus these days is building products and leading projects for
          our clients at Upstatement. I most enjoy building software in the
          sweet spot where design and engineering meet — things that look good
          but are also built well under the hood. In my free time, Ive also
          released an online video course that covers everything you need to
          know to build a web app with the Spotify API.
        </p>
        <p>
          When I’m not at the computer, I’m usually rock climbing, reading,
          hanging out with my wife and two cats, or running around Hyrule
          searching for Korok seeds K o r o k s e e d s .
        </p>
      </div>
      <div className="w-3/4 pl-2  grid grid-cols-2 gap-x-4 justify-between space-y-1">
        {skills.map((skill) => (
          <p key={skill} className="flex items-center space-x-2 ">
            <MdArrowRight className="text-green text-xl" />
            <span className="hovered-text2">{skill}</span>
          </p>
        ))}
      </div>
    </section>
  );
};

export default About;
