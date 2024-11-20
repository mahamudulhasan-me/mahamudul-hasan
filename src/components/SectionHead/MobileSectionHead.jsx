import { InView } from "../motion-ui/InView";

const MobileSectionHead = ({ icon: Icon, title }) => {
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
      viewOptions={{ margin: "0px 0px -350px 0px" }}
    >
      {" "}
      <div
        className="sticky top-0  md:hidden  py-5 bg-navy-dark text-slate-200 
 bg-opacity-80 text-xl font-semibold z-40 mobileSectionHead flex items-center gap-2 px-4"
      >
        <Icon color="#64ffda" />
        {title}
      </div>
    </InView>
  );
};

export default MobileSectionHead;
