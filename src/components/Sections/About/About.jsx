import { FcAbout } from "react-icons/fc";
import { MdArrowRight } from "react-icons/md";
import AboutPhoto from "./AboutPhoto";

const skills = [
  "JavaScript(ES6+)",
  "TypeScript",
  "Next.js",
  "React",
  "TailwindCSS",
  "Express.js",
  "MongoDB",
];
const About = () => {
  return (
    <section className="py-20 w-full  items-start justify-start">
      <div className="flex justify-center items-start w-full gap-8">
        <aside className="w-[50%]">
          <div className="flex items-center justify-start space-x-1">
            <FcAbout size={30} />
            <h2 className="text-slate-lightest font-semibold text-3xl w-[30%]">
              About Me
            </h2>
            <div className="w-[60%] h-[1px] rounded-md bg-navy-lightest "></div>
          </div>
          <article className="text-slate-dark  mt-4 space-y-4 text-justify">
            <p>
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
            <p>
              <span className="hovered-text">Fast-forward to today,</span> and
              I’ve had the privilege of working at an advertising agency, a
              start-up, a huge corporation, and a student-led design studio. My
              main focus these days is building accessible, inclusive products
              and digital experiences at Upstatement for a variety of clients.
            </p>
            <p>
              I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node & React.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <div className="w-3/4 grid grid-cols-2 space-y-1">
              {skills.map((skill) => (
                <p key={skill} className="flex items-center space-x-2">
                  <MdArrowRight className="text-green text-xl" />
                  {skill}
                </p>
              ))}
            </div>
          </article>
        </aside>
        <aside className="w-[40%] mt-10">
          <AboutPhoto />
        </aside>
      </div>
    </section>
  );
};

export default About;
