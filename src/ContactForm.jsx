import Button from "./Button";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-6 text-[#EEEEEE]">
      <div className="flex max-[625px]:flex-col gap-6">
        <div className="flex flex-col gap-2.5 text-lg font-bold">
          <label htmlFor="name" className="text-white">
            Your name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="bg-[#393E4680] text-[#EEEEEE80] py-4 px-6 rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-2.5 text-lg font-bold">
          <label htmlFor="email" className="text-white">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="bg-[#393E4680] text-[#EEEEEE80] py-4 px-6 rounded-2xl"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2.5 text-lg font-bold">
        <label htmlFor="message" className="text-white">
          Your message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          className="bg-[#393E4680] text-[#EEEEEE80] py-4 px-6 rounded-2xl h-[280px] resize-none"
        />
      </div>
      <Button hasImg={true} styles="w-fit max-[625px]:self-center">
        Send Message <img src="message.svg" alt="Send Message Icon" />
      </Button>
    </form>
  );
}
