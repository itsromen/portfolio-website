import RecentButtons from "./RecentButtons";
import RecentWorks from "./RecentWorks";
import { useState } from "react";

function Recent() {
  const [isSelected, setIsSelected] = useState("all");

  return (
    <section className="snap-start min-h-screen bg-[#222831] bg-[url('/works-bg.png')] bg-cover flex items-center py-12 sm:py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col max-xl:items-center gap-8 sm:gap-10 lg:gap-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            My recent <span className="text-[#00ADB5]">works</span>
          </h2>
          <RecentButtons isSelected={isSelected} onSelect={setIsSelected} />
          <RecentWorks isSelected={isSelected} />
        </div>
      </div>
    </section>
  );
}

export default Recent;
