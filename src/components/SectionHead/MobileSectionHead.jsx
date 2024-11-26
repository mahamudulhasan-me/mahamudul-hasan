const MobileSectionHead = ({ icon: Icon, title }) => {
  return (
    <div
      className="sticky top-0 left-0 md:hidden  py-5 bg-navy-dark text-slate-200 
 bg-opacity-80 text-xl font-semibold z-40 mobileSectionHead flex items-center gap-2 px-4"
    >
      <Icon color="#64ffda" />
      {title}
    </div>
  );
};

export default MobileSectionHead;
