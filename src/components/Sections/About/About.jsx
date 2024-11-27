import MobileSectionHead from "@/components/SectionHead/MobileSectionHead";
import { FcAbout } from "react-icons/fc";

const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "Redux",
  "Tailwind CSS",
  "Express.js",
  "GraphQL",
  "MongoDB",
];

const othersSkills = [
  "Git",
  "RESTful APIs",
  "JWT",
  "Ant Design",
  "Radix UI",
  "Framer Motion",
  "PostgreSQL",
];

const About = () => {
  return (
    <section
      id="about"
      className="text-slate-400 space-y-5 leading-7 md:pt-20 md:pb-0 pb-10 md:p-4 p-0"
    >
      <MobileSectionHead icon={FcAbout} title="About" />
      <div className="px-4 md:px-0 space-y-4">
        <p>
          Hello! I&apos;m a passionate developer who enjoys crafting seamless,
          user-friendly web experiences. My work combines thoughtful design with
          robust engineering to create impactful solutions. I thrive on blending
          creativity with functionality, ensuring that every pixel and line of
          code contributes to an intuitive digital experience.
        </p>
        <p>
          Currently, I&apos;m a{" "}
          <span className="hovered-text">MERN stack developer</span> with a{" "}
          strong focus on front-end development . At{" "}
          <span className="hovered-text">Sundarban Courier Service</span>, I
          work on building user interfaces that align with business goals while
          delivering exceptional performance and usability.
        </p>
        <p>
          Beyond professional projects, I enjoy pushing boundaries and tackling
          challenges that encourage growth. I&apos;m constantly learning and
          experimenting with new technologies to stay ahead in the ever-evolving
          tech landscape. When I&apos;m not coding, I spend time writing,
          reading, or nurturing my garden, drawing creative inspiration from the
          beauty of nature.
        </p>
      </div>
    </section>
  );
};

export default About;
