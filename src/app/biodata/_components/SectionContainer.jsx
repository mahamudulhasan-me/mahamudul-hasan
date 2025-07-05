const SectionContainer = ({ title, children }) => {
  return (
    <div className=" text-slate-300 border overflow-hidden bg-[#0a192f] border-navy-lightest rounded-lg  transition-all shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg border-t-2 border-t-teal-400">
      <h2 className="text-center text-xl text-slate-100 font-medium p-3 border-b border-navy-lightest bg-navy-light">
        {title}
      </h2>
      <div className="divide-y divide-navy-lightest">{children}</div>
    </div>
  );
};

export default SectionContainer;
