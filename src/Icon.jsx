export default function Icon({ img, alt }) {
  return (
    <a
      href="#"
      className="bg-[#393E46] size-12 rounded-full flex justify-center items-center"
    >
      <img src={img} alt={`${alt} Icon`} />
    </a>
  );
}
