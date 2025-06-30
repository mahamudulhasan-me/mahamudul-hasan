import SectionContainer from "./SectionContainer";
const educationInfo = [
  {
    label: "Medium of Education",
    value: "General (National Curriculum)",
  },
  {
    label: "Highest Qualification",
    value: "Bachelor of Science (B.Sc.)",
  },
  {
    label: "Field of Study (Bachelor)",
    value: "Computer Science and Engineering (CSE)",
  },
  {
    label: "University",
    value: "Dhaka International University (DIU)",
  },
  {
    label: "Graduation Year",
    value: "2025",
  },
  {
    label: "SSC Passing Year",
    value: "2015",
  },
  {
    label: "SSC Group",
    value: "Science",
  },
  {
    label: "SSC Result",
    value: "A-",
  },
  {
    label: "Post-SSC Education",
    value: "Diploma in Computer Technology",
  },
  {
    label: "Diploma Institute",
    value: "Institute of Information Technology Bogura (IITB)",
  },
  {
    label: "Diploma Passing Year",
    value: "2019",
  },
  {
    label: "Other Qualifications",
    value:
      "I attempted to pursue a Diploma in Arabic Language at the International Open University (IOU), but due to my current job and academic commitments, I couldn't continue.",
  },
];

const EducationalInfo = () => {
  return (
    <SectionContainer title="শিক্ষাগত যোগ্যতা">
      {educationInfo?.map((info, index) => (
        <h6
          key={index}
          className={`bio-element ${index % 2 !== 0 ? "bg-navy-light/20" : ""}`}
        >
          <span className="bio-label">{info.label}</span>
          <span className="bio-value">{info.value}</span>
        </h6>
      ))}
    </SectionContainer>
  );
};

export default EducationalInfo;
