import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import Address from "./_components/Address";
import EducationalInfo from "./_components/EducationalInfo";
import FamilyInfo from "./_components/FamilyInfo";
import PersonalInfo from "./_components/PersonalInfo";
import PersonalInfoOverview from "./_components/PersonalInfoOverview";
import ProfessionalInfo from "./_components/ProfessionalInfo";
const BioData = () => {
  return (
    <div className="container mx-auto md:px-[8%] px-4 pt-20 font-bangla mb-5">
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
      <main className="grid grid-cols-12 mt-6 gap-8">
        <PersonalInfoOverview />
        <aside className="lg:col-span-8 col-span-12 flex flex-col gap-8">
          <Address />
          <EducationalInfo />
          <FamilyInfo />
          <PersonalInfo />
          <ProfessionalInfo />
        </aside>
      </main>
    </div>
  );
};

export default BioData;
