import NavBar from "./NavBar";

function Hero() {
  return (
    <header className="relative h-dvh flex flex-col bg-[#222831] text-[#EEEEEE] overflow-clip ">
      <NavBar />
      <div className="w-screen relative self-center max-w-[2000px] flex-auto grid grid-cols-2 place-items-center">
        <div className="w-full">
          <div className="border absolute border-[#EEEEEE1A] left-[436px] h-screen bottom-0" />
          <div className="relative pl-32 pb-24 flex flex-col gap-12">
            <img
              src="arrow-doodle.svg"
              alt="Arrow"
              className="absolute left-10 top-10"
            />
            <h1 className="text-8xl font-bold max-w-[600px]">
              CREATIVE UI <span className="text-[#00ADB5]">DESIGNER</span>
            </h1>
            <div className="flex gap-6">
              <button className="bg-[#00ADB5] py-2.5 px-8 rounded-3xl font-bold">
                Hire Me
              </button>
              <button className="flex gap-2.5 bg-[#393E46BF]/75 py-2.5 px-8 rounded-3xl font-bold">
                Download CV <img src="download.svg" alt="Download icon" />
              </button>
            </div>
          </div>
          <div className="w-24 h-24 bg-[#393E46BF] grid place-items-center absolute bottom-16 left-[388px]">
            <img src="down-arrow.svg" alt="Arrow pointing down" />
          </div>
        </div>
        <div className="relative">
          <img src="hero-doodles.svg" alt="Doodles" />
          <img src="shadow.svg" alt="Shadow" className="absolute -bottom-2" />
          <img src="dude.svg" alt="Man" className="absolute -bottom-24" />
        </div>
      </div>
    </header>
  );
}

export default Hero;
