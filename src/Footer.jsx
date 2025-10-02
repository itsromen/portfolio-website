import Icon from "./Icon";

const icons = [
  { img: "facebook.svg", alt: "Facebook" },
  { img: "instagram.svg", alt: "Instagram" },
  { img: "twitter.svg", alt: "Twitter" },
  { img: "youtube.svg", alt: "Youtube" },
];

export default function Footer() {
  return (
    <footer className="snap-start relative bg-[#f5f5f5] dark:bg-[#222831] text-[#222831] dark:text-[#eeeeee] grid place-content-center border-t border-[#22283133] dark:border-[#eeeeee33]">
      <div className="h-full w-screen max-w-[1800px] grid place-content-center relative">
        <div className="grid place-content-center justify-items-center gap-12 max-w-[1800px] pt-[100px] pb-[215px]">
          <div className="hidden min-[1130px]:block border absolute border-[#22283133] dark:border-[#eeeeee33] left-[406px] min-[1384px]:left-[484px] inset-y-0" />
          <div className="flex flex-wrap justify-center px-10 gap-12 text-lg">
            <p className="flex gap-2.5 items-center">
              <img
                src="home.svg"
                alt="Home"
                className="w-5 h-5 invert dark:invert-0"
              />
              Home
            </p>
            <p className="flex gap-2.5 items-center">
              <img
                src="user.svg"
                alt="User"
                className="w-5 h-5 invert dark:invert-0"
              />
              About me
            </p>
            <p className="flex gap-2.5 items-center">
              <img
                src="phone.svg"
                alt="Phone"
                className="w-5 h-5 invert dark:invert-0"
              />
              Contact
            </p>
          </div>
          <div className="flex gap-6">
            {icons.map((i, idx) => (
              <Icon key={idx} img={i.img} alt={i.alt} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-[#22283199] dark:text-[#eeeeee99] absolute bottom-12 right-12">
        Terms of Service - Privacy Policy
      </p>
    </footer>
  );
}
