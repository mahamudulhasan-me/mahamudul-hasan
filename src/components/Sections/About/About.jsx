import MobileSectionHead from "@/components/SectionHead/MobileSectionHead";
import Link from "next/link";
import { FcAbout } from "react-icons/fc";

// const skills = [
//   "TypeScript",
//   "Next.js",
//   "React",
//   "Redux",
//   "Tailwind CSS",
//   "Express.js",
//   "GraphQL",
//   "MongoDB",
// ];

// const othersSkills = [
//   "Git",
//   "RESTful APIs",
//   "JWT",
//   "Ant Design",
//   "Radix UI",
//   "Framer Motion",
//   "PostgreSQL",
// ];

const About = () => {
  return (
    <section
      id="about"
      className="text-slate-400 space-y-5 leading-7 md:pt-20 md:pb-0 pb-10 md:p-4 p-0"
    >
      <MobileSectionHead icon={FcAbout} title="About" />
      <div className="px-4 md:px-0 space-y-4">
        <p>
          I&apos;m a developer who loves creating smooth and easy-to-use
          websites. I especially enjoy designing{" "}
          <span className="hovered-text">Front-End Architecture</span> that
          makes apps reliable and fast. Mixing creative ideas with solid coding,
          I build experiences that people find simple and enjoyable to use.
        </p>

        <p>
          Currently, I work at{" "}
          <Link
            href="https://qzency.com/"
            className="hovered-text"
            target="_blank"
          >
            Qzency
          </Link>
          , where I contribute to large-scale SaaS platforms{" "}
          <Link
            href="https://ecommerce.zoyeq.com/"
            target="_blank"
            className="hovered-text"
          >
            ZOYEQ
          </Link>
          , like Shopify, and Wix. My role includes managing complex codebases,
          designing front-end architecture, and implementing features like SSO
          (Single Sign-On) for better user experience and security. I focus on
          delivering clean, scalable, and intuitive UI across multi-tenant
          systems.
        </p>
        <p>
          When I’m not working, I love trying out new technologies and solving
          challenging problems that help me grow. I also enjoy writing, reading,
          and spending time in my garden, where I find inspiration in nature’s
          beauty.
        </p>
      </div>
    </section>
  );
};

export default About;
