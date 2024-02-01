"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GiSnake } from "react-icons/gi";
import { RiCloseCircleFill } from "react-icons/ri";
import { SiAmazongames } from "react-icons/si";
import ArrowKeyButtons from "./ArrowKeyButtons";
import GameEngine from "./GameEngine";

const SnakeGame = () => {
  const [playGame, setPlayGame] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [eatenApples, setEatenApples] = useState(10);
  const [wellDone, setWellDone] = useState(false);
  const router = useRouter();

  const playAudio = () => {
    const audio = new Audio("./audio/wellDone.wav");
    audio.play();
  };
  useEffect(() => {
    if (eatenApples === 0) {
      playAudio();
      setPlayGame(!playGame);
      // router.push("/about/professional-info");
      setWellDone(true);
    }
  }, [eatenApples]);
  const snakeFood = (
    <>
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
      </span>
    </>
  );
  const repeatedSnakeFood = Array(eatenApples).fill(snakeFood);
  return (
    <>
      <div className="z-50 relative  h-full lg:flex hidden justify-start items-center pt-0.5">
        <div
          className="z-50 rounded-lg border border-[#010e0e] px-8 py-7 flex justify-center items-center gap-2"
          style={{
            width: "500px",
            height: "475px",
            background:
              "linear-gradient(150.26deg, rgba(23, 85, 83, 0.7) 1.7%, rgba(67, 217, 173, 0.091) 81.82%)",
            boxShadow: "inset 1px 5px 11px rgba(2, 18, 27, 0.71)",
            backdropFilter: "blur(32px)",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(1, 22, 39, 0.84)",
              boxShadow: "inset 1px 5px 11px rgba(2, 18, 27, 0.71)",
            }}
            className="w-3/5 h-full rounded-md flex justify-center items-center "
          >
            {playGame ? (
              <GameEngine
                isGameOver={setIsGameOver}
                setPlayGame={setPlayGame}
                eatenApples={eatenApples}
                setEatenApples={setEatenApples}
              />
            ) : (
              <div
                data-aos="zoom-in"
                className="flex flex-col text-7xl text-green"
              >
                <GiSnake />
                {/* <RiGamepadFill /> */}
                <SiAmazongames />
              </div>
            )}
            {wellDone && (
              <div
                // data-aos="zoom-in"
                style={{ background: "rgba(1, 22, 39, 0.84)" }}
                className="absolute left-9 right-[13.2rem] bottom-36 text-center text-green text-2xl uppercase py-2"
              >
                well-done!
              </div>
            )}
            {/* play game button */}

            {isGameOver ? (
              <button
                onClick={() => {
                  setPlayGame(!playGame);
                  setEatenApples(10);
                  setWellDone(false);
                }}
                className="absolute   bottom-16 text-violet-500 font-semibold px-7 py-3 rounded-lg outline-none"
              >
                Play Again
              </button>
            ) : (
              <button
                // data-aos="zoom-in"
                disabled={playGame}
                onClick={() => {
                  setPlayGame(!playGame),
                    setWellDone(false),
                    setEatenApples(10);
                }}
                className="absolute btn-getResume2 bottom-16 bg-violet-700 text-slate-lightest font-semibold px-4 py-2 rounded-lg outline-none"
              >
                play-game
              </button>
            )}
          </div>
          {/* arrow key button  */}
          <div className="w-2/5 h-full rounded-lg">
            <ArrowKeyButtons />
            {/* snake food section  */}
            <div className="mt-8 p-2">
              <p className="text-slate-lightest text-sm">{`food left`}</p>
              <div className="mt-4 grid grid-cols-5 gap-4  justify-evenly items-center">
                {repeatedSnakeFood}
              </div>
            </div>
            <Link
              href={"/about/professional-info"}
              onClick={() => {
                setPlayGame(false), setEatenApples(10);
              }}
              className="outline-none absolute bottom-10 right-5 border border-white rounded-xl text-white  px-5 py-2"
            >
              skip
            </Link>
          </div>
          <span className="absolute top-2 left-2 border border-red border-[#114944] text-[#052130] rounded-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
            <RiCloseCircleFill />
          </span>
          <span className="absolute top-2 right-2 border border-red border-[#114944] text-[#052130] rounded-full">
            <RiCloseCircleFill />
          </span>
          <span className="absolute bottom-2 left-2 border border-red border-[#114944] text-[#052130] rounded-full">
            <RiCloseCircleFill />
          </span>
          <span className="absolute bottom-2 right-2 border border-red border-[#114944] text-[#052130] rounded-full">
            <RiCloseCircleFill />
          </span>
        </div>
        <div className="absolute w-96 h-80 bg-green top-[20%] left-[10%] opacity-40 rotate-[20deg] blur-[87px] "></div>
        <div className="absolute bg-green w-40 rounded-3xl h-64 top-5 -left-5 rotate-[-35deg] opacity-40 blur-[87px] "></div>
        <div className="absolute w-80 h-[450px] bg-[#4D5BCE] bottom-0 right-20 rotate-[75deg] blur-[85px]"></div>
      </div>
    </>
  );
};

export default SnakeGame;
