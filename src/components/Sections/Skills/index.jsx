import { InView } from "@/components/motion-ui/InView";
import { TextEffect } from "@/components/motion-ui/TextEffect";
import MobileSectionHead from "@/components/SectionHead/MobileSectionHead";
import SectionHead from "@/components/SectionHead/SectionHead";
import { skillSet } from "@/utils/skillSet";
import { FaLaptopCode } from "react-icons/fa";
import SkillCard from "./SkillCard";

const SkillSection = () => {
  return (
    <section id="skill" className="md:pt-20 md:pb-0 pb-10">
      <SectionHead icon={FaLaptopCode} title="Tech I Work With" />{" "}
      <MobileSectionHead icon={FaLaptopCode} title="Tech I Work With" />
      <div>
        {skillSet?.map((skills, index) => (
          <SkillCard key={index} skills={skills} />
        ))}
      </div>
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -30px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <TextEffect className="px-4 text-slate-300">
          I&apos;m excited to leverage my expertise and passion to deliver
          impactful solutions that resonate with users and push the boundaries
          of what&apos;s possible in the digital space.
        </TextEffect>
      </InView>
    </section>
  );
};

export default SkillSection;
