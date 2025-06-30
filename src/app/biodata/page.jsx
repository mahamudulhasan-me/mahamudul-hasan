import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import { personalInfo } from "./_const/personalInfo";
const BioData = () => {
  return (
    <div className="container mx-auto md:px-[8%] px-4 pt-20">
      <div>
        <Link
          href="/"
          className="flex w-fit items-center gap-2 text-teal-400 group"
        >
          <GoArrowLeft className="group-hover:-translate-x-1 transition-all text-xl" />{" "}
          Mahamudul Hasan
        </Link>
        <h1 className="text-5xl text-slate-100 font-semibold font-sans">
          Bio-Data
        </h1>
      </div>
      <main className="grid grid-cols-12 mt-6">
        <aside className="col-span-4 text-slate-300 group bg-navy-light p-4 rounded-md transition-all shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg">
          <div className=""></div>
          <h1 className="text-center text-2xl text-slate-100 font-medium">
            Mahamudul Hasan
          </h1>
          <h1 className="text-center  text-2xl text-slate-100 font-medium">
            মাহমুদুল হাসান
          </h1>
          <div className="border border-navy-lightest mt-4 rounded-lg divide-y divide-navy-lightest">
            {personalInfo?.map((info, index) => (
              <p
                key={index}
                className="grid grid-cols-2 items-center   divide-x divide-navy-lightest justify-center"
              >
                <span className="font-semibold px-4 py-2.5 text-center text-slate-200">
                  {info.label}
                </span>
                <span className="px-4 py-2.5 text-center text-slate-300">
                  {info.value}
                </span>
              </p>
            ))}
          </div>
        </aside>
        <aside className="col-span-8"></aside>
      </main>
    </div>
  );
};

export default BioData;
