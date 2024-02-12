const SectionHead = ({ icon: Icon, title }) => {
  return (
    <div className="hidden md:flex text-slate-200  items-center gap-2 mb-8 pl-4 text-2xl">
      <Icon className="text-teal-400" />
      <h2 className="text-2xl">{title}</h2>
      <span className="w-[36%] h-[1px] bg-navy-lightest"></span>
    </div>
  );
};

export default SectionHead;
