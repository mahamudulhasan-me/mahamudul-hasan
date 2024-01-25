import SectionHead from "@/components/SectionHead/SectionHead";
import Image from "next/image";

const FrontendPage = () => {
  return (
    <div className="md:px-10 w-full">
      <SectionHead>skills/front-end</SectionHead>
      <>
        <h2 className="text-2xl mb-5 text-s1 flex items-center">
          {`//_front-end skills`}
        </h2>
        <div className="flex justify-between text-s1  items-center flex-wrap">
          <figure className="text-center">
            <Image
              src={"/images/skills/html5.png"}
              width={60}
              height={60}
              alt="html5"
            />
            <p>HTML</p>
          </figure>
          <figure className="text-center">
            <Image
              src={"/images/skills/css3.png"}
              width={60}
              height={60}
              alt="css3"
            />
            <p>CSS</p>
          </figure>
          <figure>
            <Image
              src={"/images/skills/bootstrap.png"}
              width={60}
              height={60}
              alt="bootstrap"
            />
            <p>Bootstrap</p>
          </figure>
          <figure>
            <Image
              src={"/images/skills/tailwind.png"}
              width={60}
              height={60}
              alt="tailwind"
              className="w-16"n
            />
            <p>Tailwind</p>
          </figure>
        </div>
      </>

      <>
        <h2 className="text-2xl text-s1 mb-5 mt-10  flex items-center">
          {`//_language & libraries`}
        </h2>
        <div className="flex gap-10">
          {/* <figure>
            <img src={js} alt="javascript" />
            <p>JavaScript</p>
          </figure>
          <figure className="text-center">
            <img src={react} alt="react" />
            <p>React.js</p>
          </figure> */}
          {/* <figure>
        <img src={nextjs} alt="nextjs" className="w-16" />
        <p className="text-lg">Next.js</p>
      </figure> */}
        </div>
      </>
    </div>
  );
};

export default FrontendPage;
