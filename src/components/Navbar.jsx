import { useState } from "react";
import NavTitle from "./navtitle/NavTitle";
import Switcher from "../utils/Switcher";

const Navbar = () => {
  const [home, setHome] = useState("home");

  return (
    <div className="py-0 flex px-28 mx-8 my-4 rounded-full justify-between items-center  dark:text-black text-white bg-black/70 dark:bg-white/80 transition-all duration-500 backdrop-blur-sm  max-sm:flex max-sm:justify-center max-sm:px-2 max-sm:py-4 font-quatt ">
      <a href="/">
        <NavTitle />{" "}
      </a>

      <ul className="flex items-center justify-center gap-5 list-none text-sm uppercase font-medium max-sm:justify-between max-sm:gap-2 max-sm:text-[0.5rem]">
        <a
          href="/"
          onClick={() => setHome("home")}
          className={
            home === "home"
              ? "pb-px border-solid border-b-2 dark:border-black border-white font-extrabold cursor-pointer"
              : "cursor-pointer"
          }
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setHome("about")}
          className={
            home === "about"
              ? "pb-px border-solid border-b-2 dark:border-black border-white font-extrabold cursor-pointer"
              : "cursor-pointer"
          }
        >
          About
        </a>
        <a
          href="#skills"
          onClick={() => setHome("skills")}
          className={
            home === "skills"
              ? "pb-px border-solid border-b-2 dark:border-black border-white font-extrabold cursor-pointer"
              : "cursor-pointer"
          }
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={() => setHome("projects")}
          className={
            home === "projects"
              ? "pb-px border-solid border-b-2 dark:border-black border-white font-extrabold cursor-pointer"
              : "cursor-pointer"
          }
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setHome("contact")}
          className={
            home === "contact"
              ? "pb-px border-solid border-b-2 dark:border-black border-white cursor-pointer"
              : "cursor-pointer"
          }
        >
          Contact Me
        </a>
        <Switcher />
      </ul>
    </div>
  );
};

export default Navbar;
