export default function Icon({ img, alt }) {
  return (
    <a
      href="#"
      className="bg-[#e0e0e0] dark:bg-[#393E46] size-12 rounded-full flex justify-center items-center"
    >
      <img src={img} alt={`${alt} Icon`} className="invert dark:invert-0" />
    </a>
  );
}
