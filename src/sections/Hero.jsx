import GT from "../assets/GT.jpg";
import { contact, social } from "../data/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".hero-content", { type: "chars, words" });
    const paragraphSplit = new SplitText(".hero-title", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.04,
      repeat: -1,
      yoyo: true,
      repeatDelay: 2,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
      repeat: -1,
      yoyo: true,
      repeatDelay: 2,
    });
  }, []);

  return (
    <section
      className=" min-h-screen flex font-quatt justify-center items-center"
      id="home"
    >
      <div className="flex flex-row  w-full items-center gap-4 mx-44 max-sm:mx-8 justify-center rounded-3xl backdrop-blur-md  dark:text-black text-white bg-black/70 dark:bg-white/30 transition-all duration-500 max-sm:flex-col max-sm:gap-2  max-2xl:gap-2 h-[70vh]">
        <div className="flex w-full items-center justify-center">
          <img src={GT} alt="GT" className="w-44 rounded-full max-sm:w-32 " />
        </div>
        <div className="flex text-center w-full items-center justify-center">
          <div className="flex flex-col gap-4 max-sm:gap-0 ">
            <span className="text-xl max-sm:text-lg ">Hello, I´m</span>

            <span className="hero-title font-extrabold text-6xl py-8 max-sm:text-4xl text-white dark:text-black inline-block font-sans hero-content">
              Glendy Tuyuc
            </span>

            <span className="text-xl max-sm:text-base">Web Developer</span>

            <div className="flex flex-row gap-2 justify-center pt-2 pb-2 max-sm:gap-1">
              {contact.map((contacts) => (
                <button
                  key={contacts.id}
                  className="py-2 bg-black text-white px-2 w-auto text-base rounded-lg border-2  border-gray-500 max-sm:w-full hover:scale-105 transition-all duration-300"
                >
                  <a href={contacts.cv} target="_blank" rel="noreferrer">
                    {contacts.name}
                  </a>
                </button>
              ))}
            </div>
            <div className=" flex flex-row gap-2 m-auto ">
              {social.map((socialmedia) => (
                <a
                  key={socialmedia.id}
                  href={socialmedia.sociallink}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={socialmedia.img}
                    className="w-10 bg-white rounded-full border-2 border-gray-500"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
