import GT from "../assets/GT.jpg";
import { contact, social } from "../data/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".hero-content", { type: "words, chars" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      y: 50,
      duration: 2,
      opacity: 0,
      ease: "back",
      stagger: 0.02,
      rotation: "random(-80, 80)",
      repeat: -1,
      yoyo: true,
      repeatDelay: 2,
    });
  }, []);

  return (
    <section
      className=" min-h-screen flex code justify-center items-center code"
      id="home"
    >
      <div className="flex flex-row  w-full items-center gap-4 mx-8 max-sm:mx-8 justify-center rounded-3xl backdrop-blur-md  dark:text-black text-white bg-black/70 dark:bg-white/30 transition-all duration-500 max-sm:flex-col max-sm:gap-2  max-2xl:gap-2 h-[70vh]">
        <div className="flex w-full items-center justify-center">
          <img src={GT} alt="GT" className="w-44 rounded-full max-sm:w-32 " />
        </div>
        <div className="flex text-center w-full items-center justify-center">
          <div className="flex flex-col gap-4 max-sm:gap-2 ">
            <span className="text-xl max-sm:text-lg ">Hello, I´m</span>

            <span className="hero-title font-extrabold text-6xl py-8 max-sm:text-4xl text-white dark:text-black inline-block hero-content">
              Glendy Tuyuc
            </span>

            <span className="text-xl max-sm:text-base">Web Developer</span>

            <div className=" cursor-pointer flex flex-row w-full items-center justify-center px-2 max-sm:px-0 gap-2">
              {contact.map((contacts) => (
                <a
                  key={contacts.id}
                  href={contacts.cv}
                  target="_blank"
                  rel="noreferrer"
                  className=" px-4 py-4 rounded-lg bg-black flex  justify-center items-center relative cursor-pointer overflow-hidden  group w-full"
                >
                  <div
                    className="   absolute -right-10 origin-center top-1/2 -translate-y-1/2 
        w-[140%] h-[120%] group-hover:size-10 group-hover:right-1.5
        rounded-full bg-white/80 transition-all duration-500 max-sm:group-hover:right-0 max-sm:group-hover:size-7"
                  />
                  <p
                    className="uppercase text-xs text-black transition-all duration-500
        group-hover:text-white group-hover:-translate-x-5 xl:translate-x-0 -translate-x-5 max-sm:-translate-x-3"
                  >
                    {contacts.name}
                  </p>
                  <div
                    className=" size-5 rounded-full absolute right-4 max-sm:right-1 top-1/2 
        -translate-y-1/2 flex justify-center items-center overflow-hidden"
                  >
                    <img
                      src="/arrow-down.svg"
                      alt="arrow"
                      className=" size-5 max-sm:size-3 xl:-translate-y-32 translate-y-0 animate-bounce group-hover:translate-y-0 transition-all duration-500"
                    />
                  </div>
                </a>
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
