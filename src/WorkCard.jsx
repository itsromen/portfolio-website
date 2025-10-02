function WorkCard({ category, img, isSelected }) {
  return (
    (isSelected === category || isSelected === "all") && (
      <div className="bg-[#393E4680] rounded-2xl p-8 sm:p-12 lg:p-16 flex items-center justify-center w-full">
        <img
          src={img}
          alt="Recent work image"
          className="w-full h-full object-contain"
        />
      </div>
    )
  );
}

export default WorkCard;
