/* eslint-disable react-hooks/exhaustive-deps */

import SnakeGame from "@/components/SnakeGame/SnakeGame";
import Link from "next/link";
const HomePage = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${"./images/grid.svg"})` }}
        className="bg-auto bg-top w-full"
      >
        <div className="flex justify-center items-center h-screen gap-10 bg-p2 bg-opacity-70">
          <div className="md:space-y-20 space-y-36 md:mx-0 mx-10">
            <div className="text-[#E5E9F0] ">
              <p className="text-lg ">Hi all. I am</p>
              <h1 className="text-6xl">Mahamudul Hasan</h1>
              <h3 className="text-s3 text-3xl">
                {"<Web Application Developer/>"}
              </h3>
            </div>
            <div>
              <p className="text-s1 hidden lg:block">
                {"// complete the game to continue"}
              </p>
              <p className="text-s1 hidden lg:block">
                {"// you can also see it on my Github page"}
              </p>
              <p className="hidden lg:block">
                <span className="text-s3">const</span>{" "}
                <span className="text-a2">githubLink</span>{" "}
                <span className="text-white"> = </span>
                <span className="text-a3">
                  “
                  <Link
                    className="underline"
                    target="_blank"
                    href={
                      "https://github.com/mahamudulhasan-me/mahamudulhasan.me/blob/main/src/components/SnakeGame/SnakeGame.jsx"
                    }
                  >
                    github/mahamudulhasan-me/snake-game
                  </Link>
                  ”
                </span>
              </p>
              <p className="text-s1 mt-5">{"// download my resume"}</p>
              <p>
                <span className="text-s3">const</span>{" "}
                <span className="text-a2">downloadResume</span>{" "}
                <span className="text-white"> = </span>
                <span className="text-a3">
                  “
                  <Link
                    className="underline"
                    download
                    href="https://drive.google.com/u/0/uc?id=1OPGLMz8maCpbI8Hum51L7HfGQ5Y12QQo&export=download"
                  >
                    https://docs.google.com/resume/
                  </Link>
                  ”
                </span>
              </p>
            </div>
          </div>
          {/* game section  */}
          <SnakeGame />
        </div>
      </div>
    </>
  );
};

export default HomePage;
