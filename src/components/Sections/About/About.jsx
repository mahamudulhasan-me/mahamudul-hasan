import { TextEffect } from "@/components/motion-ui/TextEffect";
import MobileSectionHead from "@/components/SectionHead/MobileSectionHead";
import { FcAbout } from "react-icons/fc";
import { MdArrowRight } from "react-icons/md";

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

const About = () => {
  return (
    <section
      id="about"
      className="text-slate-400 space-y-5 leading-6 md:pt-20 md:pb-0 pb-10  md:p-4 p-0"
    >
      <MobileSectionHead icon={FcAbout} title="About" />
      <div className="px-4 md:px-0 space-y-4">
        <p>
          I&apos;m a developer passionate about creating seamless, user-friendly
          web experiences that combine thoughtful design with robust
          engineering. My favorite work lives at the crossroads of creativity
          and functionality, where every pixel and line of code serves to make
          digital interactions intuitive and impactful.
        </p>
        <p>
          Currently,{" "}
          <span className="hovered-text">I&apos;m a MERN stack developer</span>,
          specializing in building modern, scalable applications with a{" "}
          <span className="hovered-text">
            strong focus on front-end development
          </span>
          . At <span className="hovered-text">Sundarban Courier Service</span>,{" "}
          <span className="hovered-text">
            {" "}
            I contribute to crafting user interfaces
          </span>{" "}
          that align with business goals while ensuring exceptional performance
          and usability.
        </p>
        <p>
          Beyond professional work, I thrive on tackling challenges that push
          boundaries. I&apos;m continuously learning and experimenting with new
          technologies to deliver innovative solutions. When I&apos;m not
          coding, you&apos;ll find me writing, reading, or tending to my
          garden—drawing inspiration from nature to fuel my creativity.
        </p>

        <p>
          Here are a few of the technologies I&apos;ve been honing my skills in
          recently:
        </p>

        <div className="w-3/4 grid grid-cols-2 gap-x-4 justify-between space-y-1">
          {skills.map((skill) => (
            <div key={skill} className="flex items-center space-x-2">
              <MdArrowRight className="text-green text-xl" />
              <TextEffect
                per="line"
                as="p"
                segmentWrapperClassName="overflow-hidden block"
                variants={{
                  container: {
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.2 },
                    },
                  },
                  item: {
                    hidden: {
                      opacity: 0,
                      y: 40,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                      },
                    },
                  },
                }}
              >
                {skill}
              </TextEffect>
            </div>
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
