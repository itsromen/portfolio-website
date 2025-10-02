import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="bg-[#222831] py-36 min-[1130px]:py-0 grid place-content-center overflow-clip relative">
      <section className="snap-start relative min-h-screen grid min-[1130px]:grid-cols-5 place-items-center max-w-[1800px]">
        <div className="hidden min-[1130px]:block border absolute border-[#EEEEEE1A] left-[406px] min-[1384px]:left-[484px] inset-y-0" />

        <div className="col-span-2 max-[472px]:px-12 px-28 max-[472px]:mb-12 mb-24 relative">
          <h2 className="text-6xl font-bold text-white max-[1300px]:mb-12 max-[1130px]:text-center leading-18">
            Got a project in <span className="text-[#00ADB5]">mind?</span>
          </h2>
          <img src="contact-img.svg" alt="Contact image" />
        </div>

        <div className="relative col-span-3 min-md:mb-20">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

export default Contact;
