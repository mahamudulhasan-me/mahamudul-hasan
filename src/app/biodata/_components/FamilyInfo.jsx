import SectionContainer from "./SectionContainer";
const familyInfo = [
  {
    title: "পিতা",
    value: "জীবিত, বাংলাদেশ আনসার বাহিনীতে পিসি (প্লাটুন কমান্ডার) পদে কর্মরত।",
  },
  {
    title: "মাতা",
    value:
      "জীবিত, ক্যারিয়ারের শুরুতে জব করতেন, বর্তমানে পূর্ণকালীন রাব্বাতুল বাইত হিসেবে সংসার পরিচালনা করছেন।",
  },
  {
    title: "ভাই-বোন",
    value: "একজন ছোট ভাই (২০২৫ সালে এসএসসি দিয়েছে)। বোন নেই।",
  },
  {
    title: "চাচা ও মামা",
    value:
      "একজন চাচা আছেন উনি ঢাকায় জব করে, ঢাকাতেই ফ্যামিলি সহ থাকেন। মামা একজন ব্যবসা করেন আর একজন হাই স্কুলের শিক্ষক।",
  },
  {
    title: "অর্থনৈতিক অবস্থা",
    value:
      "মধ্যবিত্ত, স্বচ্ছলভাবে চলছি। গ্রামে ৩৬ শতাংশ জমিতে বসতবাড়ি, কিছু জমি বন্ধক নেয়া আছে, গরু-ছাগল পালন হয়। আমি ও আব্বু দুজনেই জব করি।",
  },
  {
    title: "দ্বীনি পরিবেশ",
    value:
      "সকলেই নামাজ পড়ি। আম্মুকে কখনো নামাজ কাজা করতে দেখিনি। গ্রামীণ পরিবেশে মাহরাম-নন মাহরাম মেইনটেইন কঠিন হলেও চেষ্টা করি, ঘরে ইসলামিক পরিবেশ বজায় রাখি।",
  },
];

const FamilyInfo = () => {
  return (
    <SectionContainer title="পারিবারিক তথ্য">
      {familyInfo?.map((info, index) => (
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

export default FamilyInfo;
