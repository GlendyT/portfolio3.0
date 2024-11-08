import { useState } from "react";
import NavTitle from "./navtitle/NavTitle";

const Navbar = () => {
  const [home, setHome] = useState("home");

  return (
    <div className="py-2 flex px-28 justify-between items-center text-white backdrop-blur-sm bg-black/70 max-sm:flex max-sm:justify-center max-sm:px-10 font-quatt ">
      <h1 className="text-5xl w-44 font-bold max-sm:hidden">
        {" "}
        <a href="/">
          <NavTitle />{" "}
        </a>
      </h1>
      <ul className="flex gap-5 list-none text-sm uppercase font-medium max-sm:justify-between max-sm:gap-2 max-sm:text-xs">
        <a
          href="/"
          onClick={() => setHome("home")}
          className={
            home === "home"
              ? "pb-px border-solid border-b-2 border-white cursor-pointer"
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
              ? "pb-px border-solid border-b-2 border-white cursor-pointer"
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
              ? "pb-px border-solid border-b-2 border-white cursor-pointer"
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
              ? "pb-px border-solid border-b-2 border-white cursor-pointer"
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
              ? "pb-px border-solid border-b-2 border-white cursor-pointer"
              : "cursor-pointer"
          }
        >
          Contact Me
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
