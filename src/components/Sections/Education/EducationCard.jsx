import { InView } from "@/components/motion-ui/InView";

const EducationCard = ({ educationDetails }) => {
  const { duration, degree, institute, department, description } =
    educationDetails;
  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      viewOptions={{ margin: "0px 0px -30px 0px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex md:flex-row flex-col items-start justify-start md:gap-8 text-slate-300 group hover:ease-in-out ease-linear hover:bg-navy-light p-4 rounded-md transition-all   lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg ">
        <p className="md:w-[32%] w-full uppercase text-sm mt-1">{duration}</p>
        <aside className="w-full">
          <h1 className="text-xl text-slate-200  transition-all group-hover:text-green ">
            <span className="hovered-text2 ">{degree}</span>
          </h1>
          <h2>{institute}</h2>
          <p className="text-sm">{department}</p>

          {description && (
            <div className="text-slate-400 w-full text-sm my-3 space-y-1">
              <p>{description}</p>
            </div>
          )}
        </aside>
      </div>
    </InView>
  );
};

export default EducationCard;
