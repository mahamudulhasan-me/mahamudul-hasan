import { InView } from "../motion-ui/InView";

const SectionHead = ({ icon: Icon, title }) => {
  return (
    <InView
      variants={{
        hidden: {
          opacity: 0,
          x: 100,
        },
        visible: {
          opacity: 1,
          x: 0,
        },
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      viewOptions={{ margin: "0px 0px -50px 0px" }}
    >
      {" "}
      <div className="hidden md:flex text-slate-200  items-center gap-2 mb-8 pl-4 text-2xl">
        <Icon className="text-teal-400" />
        <h2 className="text-2xl">{title}</h2>
        <span className="w-[36%] h-[1px] bg-navy-lightest"></span>
      </div>
    </InView>
  );
};

export default SectionHead;
