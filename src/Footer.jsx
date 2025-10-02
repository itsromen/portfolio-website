import Icon from "./Icon";

const icons = [
  { img: "facebook.svg", alt: "Facebook" },
  { img: "instagram.svg", alt: "Instagram" },
  { img: "twitter.svg", alt: "Twitter" },
  { img: "youtube.svg", alt: "Youtube" },
];

export default function Footer() {
  return (
    <footer className="snap-start relative text-white bg-[#222831] grid place-content-center border-t border-[#EEEEEE1A]">
      <div className="h-full w-screen max-w-[1800px] grid place-content-center relative">
        <div className="grid place-content-center justify-items-center gap-12 max-w-[1800px] pt-[100px] pb-[215px]">
          <div className="hidden min-[1130px]:block border absolute border-[#EEEEEE1A] left-[406px] min-[1384px]:left-[484px] inset-y-0" />
          <div className="flex flex-wrap justify-center px-10 gap-12 text-lg">
            <p className="flex gap-2.5">
              <img src="home.svg" alt="Home" />
              Home
            </p>
            <p className="flex gap-2.5">
              <img src="user.svg" alt="User" />
              About me
            </p>
            <p className="flex gap-2.5">
              <img src="phone.svg" alt="Phone" />
              Contact
            </p>
          </div>
          <div className="flex gap-6">
            {icons.map((i) => (
              <Icon img={i.img} alt={i.alt} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-[#EEEEEEBF] absolute bottom-12 right-12">
        Terms of Service - Privacy Policy
      </p>
    </footer>
  );
}
