import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <main className="container mx-auto px-[7%] relative">
      <HeroSection />
      <div className="flex flex-col items-center text-slate-light fixed right-10 bottom-0">
        <p
          className="flex flex-col items-center text-sm"
          style={{ transform: "rotate(-90deg)" }}
        >
          <span>m</span>
          <span>a</span>
          <span>h</span>
          <span>@</span>
          <span>g</span>
          <span>m</span>
          <span>a</span>
          <span>i</span>
          <span>l</span>
        </p>
        <div className="h-24 w-[1px] bg-slate-light"></div>
      </div>
    </main>
  );
}
