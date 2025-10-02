import WorkCard from "./WorkCard";

const images = [
  { category: "ui", img: "recent1.png" },
  { category: "ux", img: "recent2.png" },
  { category: "web design", img: "recent3.png" },
];

function RecentWorks({ isSelected }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 w-full">
      {images.map((i) => (
        <WorkCard img={i.img} category={i.category} isSelected={isSelected} />
      ))}
    </div>
  );
}

export default RecentWorks;
