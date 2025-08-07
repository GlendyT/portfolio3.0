import { useState } from "react";

import Switcher from "../utils/Switcher";
import { navbar } from "../data/data";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Navbar = () => {
  const [home, setHome] = useState("home");

  useGSAP(() => {
    const heroSplit = new SplitText(".title-inside", { type: "chars, words" });
    const paragraphSplit = new SplitText(".title", { type: "lines" });

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
    <div
      className={` flex px-8 mx-8 rounded-full justify-between items-center   transition-all duration-500 backdrop-blur-sm  max-sm:flex max-sm:justify-center max-sm:px-2 max-sm:py-4 font-quatt dark:text-black text-white bg-black/70 dark:bg-white/80  `}
    >
      <div className="flex flex-row justify-between w-full">
        <a href="/" className=" max-sm:hidden w-96">
          <div className="title ">Glendy-T</div>
          <div className="title-inside">
            <span className="text-xl font-extrabold ">Web Developer</span>
          </div>
        </a>

        <ul className="flex items-center justify-end gap-2 list-none text-sm uppercase font-medium max-sm:justify-between max-sm:text-[0.7rem] w-full">
          {navbar.map((navs) => (
            <a
              key={navs.id}
              href={navs.link}
              onClick={() => setHome(navs.name)}
              className={
                home === navs.name
                  ? "pb-px border-solid border-b-2 dark:border-black border-white font-extrabold cursor-pointer"
                  : "cursor-pointer"
              }
            >
              {navs.name}
            </a>
          ))}

          <Switcher />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
