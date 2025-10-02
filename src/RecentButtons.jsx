function RecentButtons({ isSelected, onSelect }) {
  return (
    <div className="text-white flex flex-wrap gap-3 sm:gap-4">
      <button
        className={`${
          isSelected == "all"
            ? "bg-[#00ADB5]"
            : "bg-[#393E4680] backdrop-blur-sm"
        } py-2 sm:py-2.5 px-5 sm:px-8 rounded-3xl font-bold hover:cursor-pointer text-sm sm:text-base whitespace-nowrap transition-colors`}
        onClick={(e) => onSelect(e.target.textContent.toLowerCase())}
      >
        <span className="drop-shadow-lg/50">All</span>
      </button>
      <button
        className={`${
          isSelected == "ui"
            ? "bg-[#00ADB5]"
            : "bg-[#393E4680] backdrop-blur-sm"
        } py-2 sm:py-2.5 px-5 sm:px-8 rounded-3xl font-bold hover:cursor-pointer text-sm sm:text-base whitespace-nowrap transition-colors`}
        onClick={(e) => onSelect(e.target.textContent.toLowerCase())}
      >
        <span className="drop-shadow-lg/50">UI</span>
      </button>
      <button
        className={`${
          isSelected == "ux"
            ? "bg-[#00ADB5]"
            : "bg-[#393E4680] backdrop-blur-sm"
        } py-2 sm:py-2.5 px-5 sm:px-8 rounded-3xl font-bold hover:cursor-pointer text-sm sm:text-base whitespace-nowrap transition-colors`}
        onClick={(e) => onSelect(e.target.textContent.toLowerCase())}
      >
        <span className="drop-shadow-lg/50">UX</span>
      </button>
      <button
        className={`${
          isSelected == "web design"
            ? "bg-[#00ADB5]"
            : "bg-[#393E4680] backdrop-blur-sm"
        } py-2 sm:py-2.5 px-5 sm:px-8 rounded-3xl font-bold hover:cursor-pointer text-sm sm:text-base whitespace-nowrap transition-colors`}
        onClick={(e) => onSelect(e.target.textContent.toLowerCase())}
      >
        <span className="drop-shadow-lg/50">Web Design</span>
      </button>
    </div>
  );
}

export default RecentButtons;
