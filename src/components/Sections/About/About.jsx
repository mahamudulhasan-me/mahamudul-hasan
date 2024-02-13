import MobileSectionHead from "@/components/SectionHead/MobileSectionHead";
import { FcAbout } from "react-icons/fc";
import { MdArrowRight } from "react-icons/md";

const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "TailwindCSS",
  "Express.js",
  "GraphQL",
  "MongoDB",
];
const About = () => {
  return (
    <section
      id="about"
      className="text-slate-400 space-y-5 leading-6 md:pt-20 md:pb-0 pb-10 text-justify md:p-4 p-0"
    >
      <MobileSectionHead icon={FcAbout} title="About" />
      <div className="px-4 md:px-0 space-y-4">
        <p>
          As a final-year{" "}
          <span className="hovered-text">Computer Science and Engineering</span>{" "}
          student, my journey into the world of coding began from a place of{" "}
          <span className="hovered-text"> passion</span>, and it has since
          blossomed into a dedicated focus on web application development. With
          a strong work ethic and a flair for creativity, I continually strive
          to push the boundaries of what&apos;s possible in the digital realm.
        </p>
        <p>
          Currently employed as a{" "}
          <span className="hovered-text">Frontend Developer</span> at{" "}
          <span className="hovered-text">Sundarban Courier Service</span>,
          I&apos;ve accumulated over a year of invaluable{" "}
          <span className="hovered-text">industry experience</span> in this
          field. While my primary focus lies in frontend development, I&apos;m
          also actively exploring backend technologies to deepen my
          understanding of the web ecosystem.
        </p>
        <p>
          Beyond coding, I find solace in the pages of books and occasionally
          pen down my thoughts. Outside the realm of technology, I revel in the
          simplicity of nature and nurturing my garden, which serves as a source
          of balance and inspiration in my life.
        </p>
        <p>
          Here are a few of the technologies I&apos;ve been honing my skills in
          recently:
        </p>
        <div className="w-3/4   grid grid-cols-2 gap-x-4 justify-between space-y-1">
          {skills.map((skill) => (
            <p key={skill} className="flex items-center space-x-2 ">
              <MdArrowRight className="text-green text-xl" />
              <span className="hovered-text2">{skill}</span>
            </p>
          ))}
        </div>
        {/* <p>
          Continuously seeking growth and embracing new challenges, I&apos;m
          excited to leverage my passion and expertise to create impactful
          solutions that resonate with users and push the boundaries of
          what&apos;s possible in the digital landscape.
        </p> */}
      </div>
    </section>
  );
};

export default About;
