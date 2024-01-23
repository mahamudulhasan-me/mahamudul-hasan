import SectionHead from "@/components/SectionHead/SectionHead";
import CommentSyntaxHighlighter from "@/components/SyntaxHighlighter/CommentSyntax";

const code = ` /**
  * About me
  * I'm a passionate MERN stack developer
  * with 1 year of experience. I specialize
  * in crafting top-notch web applications
  * that blend cutting-edge technology with
  * seamless user experiences. From front-end
  * magic with React to robust server-side
  * solutions with Node.js and Express.js,
 * 
 * I bring your ideas to life with pixel-
 * perfect precision. I thrive on challenges,
 * possess a meticulous eye for detail,
 * and constantly stay ahead of the curve
 * in the ever-evolving tech landscape.
 * Let's collaborate and create something
 * extraordinary together!"
 */`;
const ProfessionalInfoPage = () => {
  return (
    <section>
      <SectionHead>about-me</SectionHead>
      <div className="w-full mx-auto pl-5 py-2">
        <CommentSyntaxHighlighter>{code}</CommentSyntaxHighlighter>
      </div>
    </section>
  );
};

export default ProfessionalInfoPage;
