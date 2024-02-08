import SnakeGame from "./SnakeGame/SnakeGame";

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full py-10 gap-10 flex justify-between items-center">
      <aside className="w-1/2">
        <h4 className="text-green">Hi, my name is</h4>
        <h1 className="text-5xl text-slate-lightest font-semibold mb-3 mt-4">
          Mahamudul Hasan
        </h1>
        <h1 className="text-4xl text-slate-light font-semibold">
          I build things for the web.
        </h1>
        <p className="text-slate-light text-justify my-8">
          I&apos;m a software engineer specializing in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I&apos;m focused on building accessible, human-centered products at
          Upstatement.
        </p>
        <button className="btn-getResume2 mt-8 relative px-10 py-3">
          Get Resume
        </button>
      </aside>
      <aside>
        <SnakeGame />
      </aside>
    </section>
  );
};

export default HeroSection;
