import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";
import Address from "./_components/Address";
import ContactInfo from "./_components/ContactInfo";
import EducationalInfo from "./_components/EducationalInfo";
import ExpectedPartnerInfo from "./_components/expectedPartnerInfo";
import FamilyInfo from "./_components/FamilyInfo";
import MarriageInfo from "./_components/MarriageInfo";
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
        <h1 className="text-3xl text-slate-100 font-semibold font-sans">
          Marriage Biodata
        </h1>
      </div>
      <main className="grid grid-cols-12 mt-10 gap-8">
        <PersonalInfoOverview />
        <aside className="lg:col-span-8 col-span-12 flex flex-col gap-8">
          <Address />
          <EducationalInfo />
          <FamilyInfo />
          <PersonalInfo />
          <ProfessionalInfo />
          <MarriageInfo />
          <ExpectedPartnerInfo />
          <ContactInfo />
        </aside>
      </main>
    </div>
  );
};

export default BioData;
