import { InView } from "@/components/motion-ui/InView";

const SkillCard = ({ skills }) => {
  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
      }}
      viewOptions={{ margin: "0px 0px -20px 0px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex md:flex-row flex-col items-start justify-between md:gap-2 text-slate-300 group hover:ease-in-out ease-linear hover:bg-navy-light p-4 rounded-md transition-all hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg ">
        <aside className="md:w-[30%] mb-2">
          <h1 className="uppercase">{skills?.title}</h1>
        </aside>
        <aside className="md:w-[70%] flex flex-wrap gap-2">
          {skills?.tech?.map(({ name, icon: Icon }) => {
            return (
              <p
                key={name}
                className="text-sm border border-navy-lightest hover:bg-navy-lightest transition-all px-2 py-1 rounded-md flex items-center gap-1"
              >
                <Icon className="text-green size-5" /> {name}
              </p>
            );
          })}
        </aside>
      </div>
    </InView>
  );
};

export default SkillCard;
