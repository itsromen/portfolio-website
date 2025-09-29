import NavBar from "./NavBar";

function Hero() {
  return (
    <header className="relative lg:h-dvh flex flex-col bg-[#222831] text-[#EEEEEE] overflow-clip ">
      <NavBar />
      <div className="py-12 lg:py-0 w-screen relative self-center max-w-[2000px] flex-auto grid lg:grid-cols-2 place-items-center">
        <div className="lg:w-full">
          <div className="hidden lg:block border absolute border-[#EEEEEE1A] left-[358px] min-[1130px]:left-[436px] h-screen bottom-0" />
          <div className="relative text-center sm:text-start sm:pl-32 pb-24 flex flex-col gap-12">
            <img
              src="arrow-doodle.svg"
              alt="Arrow"
              className="hidden sm:inline absolute left-10 top-12"
            />
            <h1 className="text-5xl sm:text-7xl min-[1384px]:text-8xl font-bold max-w-[600px]">
              CREATIVE UI <span className="text-[#00ADB5]">DESIGNER</span>
            </h1>
            <div className="justify-center sm:justify-start flex gap-6">
              <button className="bg-[#00ADB5] py-2.5 px-8 rounded-3xl font-bold">
                Hire Me
              </button>
              <button className="flex gap-2.5 bg-[#393E46BF]/75 py-2.5 px-8 rounded-3xl font-bold">
                Download CV <img src="download.svg" alt="Download icon" />
              </button>
            </div>
          </div>
          <div className="hidden w-18 h-18 min-[1384px]:w-24 min-[1384px]:h-24 bg-[#393E46BF] md:grid place-items-center absolute right-24 max-lg:top-55 lg:bottom-8 min-lg:max-[1130px]:left-[322px] min-[1130px]:left-[400px] min-[1384px]:bottom-16 min-[1384px]:left-[388px]">
            <img src="down-arrow.svg" alt="Arrow pointing down" />
          </div>
        </div>
        <div className="relative max-sm:scale-80">
          <img src="hero-doodles.svg" alt="Doodles" />
          <img src="shadow.svg" alt="Shadow" className="absolute -bottom-2" />
          <img src="dude.svg" alt="Man" className="absolute -bottom-24" />
        </div>
      </div>
    </header>
  );
}

export default Hero;
