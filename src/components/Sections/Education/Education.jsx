import MobileSectionHead from "@/components/SectionHead/MobileSectionHead";
import SectionHead from "@/components/SectionHead/SectionHead";
import { FaGraduationCap } from "react-icons/fa";
const educations = [
  {
    degree: "B.Sc. in Engineering",
    duration: "2021—Present",
    institute: "Dhaka International University-DIU",
    department: "Computer Science & Engineering",
    description: "if have description",
  },
  {
    degree: "Diploma in Engineering",
    duration: "2015—2019",
    institute: "Institute of Information Technology Bogura",
    department: "Computer Technology",
    description: "if have description",
  },
  {
    degree: "Secondary School Certificate",
    duration: "2013—2015",
    institute: "Patillakura Chakdaria B.L High School",
    department: "Science",
  },
];

const Education = () => {
  return (
    <div id="education" className="md:pt-20 md:pb-0 pb-10">
      <SectionHead icon={FaGraduationCap} title="Education" />{" "}
      <MobileSectionHead icon={FaGraduationCap} title="Education" />
      {educations.map((edu) => (
        <div
          key={edu.institute}
          className="flex md:flex-row flex-col items-start justify-start md:gap-10 text-slate-300 group hover:ease-in-out ease-linear hover:bg-navy-light p-4 rounded-md transition-all   lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg cursor-pointer"
        >
          <p className="w-[32%] uppercase text-sm">{edu?.duration}</p>
          <aside className="w-full">
            <h1 className="text-xl text-slate-200  transition-all group-hover:text-green ">
              <span className="hovered-text2">{edu?.degree}</span>
            </h1>
            <h2>{edu?.institute}</h2>
            <p className="text-sm">{edu?.department}</p>

            <div className="text-slate-400 w-full text-justify text-sm my-3 space-y-1">
              <p>{edu?.description}</p>
            </div>
          </aside>
        </div>
      ))}
    </div>
  );
};

export default Education;
