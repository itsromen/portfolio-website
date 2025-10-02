import { useState, useRef, useEffect } from "react";

function About() {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const textRef = useRef(null);

  const checkClamp = () => {
    if (textRef.current) {
      const el = textRef.current;
      setIsClamped(el.scrollHeight > el.clientHeight);
    }
  };

  useEffect(() => {
    checkClamp();

    window.addEventListener("resize", checkClamp);
    return () => window.removeEventListener("resize", checkClamp);
  }, []);

  return (
    <div className="bg-[#222831] py-36 min-[1130px]:py-0 grid place-content-center overflow-clip relative">
      <section className="snap-start relative min-h-screen grid min-[1130px]:grid-cols-5 place-items-center max-w-[1800px]">
        <div className="hidden min-[1130px]:block border absolute border-[#EEEEEE1A] left-[406px] min-[1384px]:left-[484px] inset-y-0" />

        <div className="col-span-2 max-[472px]:px-12 px-28 max-[472px]:mb-12 mb-24 relative">
          <img
            src="note.svg"
            alt="Music Note"
            className="absolute -top-24 max-[580px]:hidden"
          />
          <img
            src="bulb.svg"
            alt="Light Bulb"
            className="absolute -top-6 right-24 max-[580px]:hidden min-[1180px]:max-[1400px]:hidden"
          />
          <img
            src="arrow-doodle2.svg"
            alt="Arrow Doodle"
            className="absolute -bottom-64 right-24 hidden min-[1130px]:inline"
          />

          <h2 className="max-[580px]:text-center text-[#EEEEEE] max-[472px]:text-4xl text-6xl font-bold mb-6">
            About <span className="text-[#00ADB5]">me</span>
          </h2>

          <p
            ref={textRef}
            className={`max-[580px]:text-center max-[472px]:text-sm text-lg text-[#EEEEEEBF] ${
              expanded ? "" : "line-clamp-7"
            }`}
          >
            Hi, I'm <span className="text-[#00ADB5]">Romen</span>, a frontend
            enthusiast who thrives on crafting clean, responsive interfaces. I
            love turning ideas into interactive experiences using HTML, CSS, and
            JavaScript. Lately, I've been diving into the world of React and
            Tailwind CSS, exploring how modern tools can streamline development
            and elevate design. Whether it's debugging layout quirks or building
            scalable UI components, I'm all about learning, iterating, and
            pushing pixels with purpose.
          </p>

          {(isClamped || expanded) && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="mt-2 text-[#00ADB5] hover:underline"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>

        <div className="relative col-span-3 max-md:scale-80 min-md:mb-20">
          <img src="about-image.svg" alt="Cool doodles" />
        </div>
      </section>
      <div className="absolute inset-x-0 bottom-20 border-t border-[#EEEEEE1A]" />
    </div>
  );
}

export default About;
