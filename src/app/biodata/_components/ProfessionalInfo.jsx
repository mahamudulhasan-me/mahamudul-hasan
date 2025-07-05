import SectionContainer from "./SectionContainer";

const professionalInfo = [
  {
    title: "পেশা",
    value: "ইঞ্জিনিয়ার",
  },
  {
    title: "পেশার বিস্তারিত",
    value:
      "আলহামদুলিল্লাহ্ সম্পূর্ণ হালাল ইনকাম করি। বর্তমানে, ঢাকায় আমি একটা সফটওয়্যার ফার্মে সফটওয়্যার ডেভেলপার হিসেবে জব করছি এবং পাশাপাশি কন্ট্রাকচুয়াল রিমোট জব করি।",
  },
  {
    title: "মাসিক আয়",
    value: "প্রায় ৩৫,০০০ টাকা",
  },
];

const ProfessionalInfo = () => {
  return (
    <SectionContainer title="পেশাগত তথ্য">
      {professionalInfo?.map((info, index) => (
        <h6
          key={index}
          className={`bio-element ${index % 2 !== 0 ? "bg-navy-light/20" : ""}`}
        >
          <span className="bio-label">{info.title}</span>
          <span className="bio-value">{info.value}</span>
        </h6>
      ))}
    </SectionContainer>
  );
};

export default ProfessionalInfo;
