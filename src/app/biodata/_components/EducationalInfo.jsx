import MobileViewRow from "./MobileViewCol";
import SectionContainer from "./SectionContainer";
const educationInfo = [
  {
    label: "Medium of Education",
    value: "General",
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
    value: "2025 ",
  },
  {
    label: "SSC Passing Year",
    value: "2015 (Science)",
  },
  // {
  //   label: "SSC Group",
  //   value: "Science",
  // },
  // {
  //   label: "SSC Result",
  //   value: "A-",
  // },
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
      <MobileViewRow
        bg={"bg-navy-light/20"}
        label="Other Qualifications"
        value={
          <p>
            I completed a 4-year Diploma in Engineering before starting my BSc
            degree. The duration of the Diploma and a 1-year delay caused by the
            COVID-19 pandemic slightly delayed my graduation. <br />I also began
            a Diploma in Arabic Language at the Islamic Open University (IOU),
            but I couldn&apos;t continue due to my job and academic commitments.
          </p>
        }
      />
    </SectionContainer>
  );
};

export default EducationalInfo;
