import { useGSAP } from "@gsap/react";
import { skills } from "../data/data";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Skills = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".skilltitle", { type: "chars, words" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      rotationX: -100,
      transformOrigin: "50% 50% -160px",
      opacity: 0,
      duration: 0.8,
      ease: "power3",
      stagger: 0.25,
      repeat: -1,
      yoyo: true,
      repeatDelay: 2,
    });
  }, []);

  return (
    <div className="flex items-center flex-col justify-center">
      <div
        className="flex flex-col h-96 py-4 mx-44 max-sm:mx-8 items-center justify-center gap-2 code"
        id="skills"
      >
        <div className="text-center  dark:text-black text-white  transition-all duration-500 py-4 px-2 rounded-xl">
          <h1 className=" text-6xl font-extrabold max-sm:text-md skilltitle code">
            Skills
          </h1>
        </div>
      </div>
      <div className="w-full max-sm:w-96">
        {/* <hr className=" h-0 max-sm:my-1 border-8 border-dashed border-purple-400" /> */}
        <div className="backdrop-blur-sm   overflow-hidden whitespace-nowrap relative">
          <div className="animate-slide inline-block">
            {skills.concat(skills).map((item, index) => {
              return (
                <div
                  className="inline-block px-4 border-white max-sm:px-2"
                  key={index}
                >
                  <img
                    src={item.img}
                    alt=""
                    className="h-44 backdrop-blur-xl  max-sm:h-24 drop-shadow-[0_15px_15px_#5324a3] rounded-md "
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* <hr className=" h-0 max-sm:my-1 border-8 border-dashed border-purple-400 " /> */}
      </div>
    </div>
  );
};

export default Skills;

/*               */
