import SocialLink from "@/components/Nav/SocialLink";
import Hibiscus from "@/utils/icons/Hibiscus";
import ManIcon from "../../../utils/icons/ManIcon";

const PersonalInfoOverview = () => {
  const personalInfo = [
    { label: "Marital Status", value: "Never Married" },
    { label: "Birth Year", value: "July, 1998" },
    { label: "Height", value: "5′ 6″" },
    { label: "Complexion", value: "Light Brown (উজ্জ্বল শ্যামলা)" },
    { label: "Weight", value: "64 kg" },
    { label: "Blood Group", value: "O+" },
    { label: "Nationality", value: "Bangladeshi" },
  ];

  return (
    <div className="lg:col-span-4 col-span-12 h-fit lg:sticky lg:top-2">
      <aside className=" text-slate-300 group bg-navy-light p-4 rounded-md transition-all shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg h-fit ">
        <figure className="size-28 mx-auto flex items-center justify-center rounded-full ring ring-slate-dark mb-4">
          <ManIcon />
        </figure>
        <h1 className="text-center text-2xl text-slate-100 font-medium">
          Mahamudul Hasan
        </h1>
        <h1 className="text-center  font-bangla text-2xl text-slate-100 font-medium">
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
              <span className="px-4 py-2.5 text-center text-slate-300 font-bangla">
                {info.value}
              </span>
            </p>
          ))}
        </div>
      </aside>
      <div className="mb-5 md:mt-0 pt-5 flex items-center justify-center space-x-6">
        <SocialLink />
      </div>
      <div className="flex items-center justify-center">
        {/* <div className="flex items-center">
          <SmallFlowerTree />
          <SmallFlowerTree />
        </div> */}
        <Hibiscus />
      </div>
    </div>
  );
};

export default PersonalInfoOverview;
