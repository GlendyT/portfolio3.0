import { useState } from "react"

const Navbar = () => {

  const [home, setHome] = useState("home")

  return (
    <div className="py-6 flex px-28 justify-between items-center text-white backdrop-blur-sm bg-black/70 max-sm:flex max-sm:justify-center max-sm:px-10">
      <h1 className="text-4xl w-60 font-bold max-sm:hidden "> <a href="/">Glendy´s Portfolio Web Developer </a></h1>
      <ul className="flex gap-5 list-none text-sm uppercase font-medium max-sm:justify-between max-sm:gap-2 max-sm:text-xs">
        <a href="#about" onClick={() => setHome("home")} className={home==="" ? "pb-px border-solid border-b-2 border-white cursor-pointer" : "cursor-pointer"}>About</a>
        <a href="#skills" onClick={() => setHome("skills")} className={home==="skills" ? "pb-px border-solid border-b-2 border-white cursor-pointer" : "cursor-pointer"}>Skills</a>
        <a href="#projects" onClick={() => setHome("projects")} className={home==="projects" ? "pb-px border-solid border-b-2 border-white cursor-pointer" : "cursor-pointer"}>Projects</a>
        <a href="#contact" onClick={() => setHome("contact")} className={home==="contact" ? "pb-px border-solid border-b-2 border-white cursor-pointer" : "cursor-pointer"}>Contact Me</a>
      </ul>
    </div>
  )
}

export default Navbar