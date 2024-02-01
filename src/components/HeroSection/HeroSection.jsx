const HeroSection = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex justify-between items-center">
      <aside className="w-1/2">
        <h4 className="text-green">Hi, my name is</h4>
        <h1 className="text-6xl text-slate-lightest font-semibold">
          Mahamudul Hasan
        </h1>
        <h1 className="text-5xl text-slate-light font-semibold">
          I build things for the web.
        </h1>
        <p className="text-slate-light text-justify">
          I&apos;m a software engineer specializing in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I&apos;m focused on building accessible, human-centered products at
          Upstatement.
        </p>
      </aside>
      <aside className="w-1/2"></aside>
    </section>
  );
};

export default HeroSection;
