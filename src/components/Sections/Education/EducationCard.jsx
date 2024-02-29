const EducationCard = ({ educationDetails }) => {
  const { duration, degree, institute, department, description } =
    educationDetails;
  return (
    <div className="flex md:flex-row flex-col items-start justify-start md:gap-8 text-slate-300 group hover:ease-in-out ease-linear hover:bg-navy-light p-4 rounded-md transition-all   lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg ">
      <p className="w-[32%] uppercase text-sm mt-1">{duration}</p>
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
  );
};

export default EducationCard;
