import { useState } from "react"

const Footer = () => {

  const [home, setHome] = useState("home")

  return (
    <div className="py-10 flex px-28 justify-between items-center">
      <h1 className="text-4xl w-60 font-bold">Glendy´s Portfolio Web Developer</h1>
      <ul className="flex gap-5 list-none text-slate-600 text-sm max-sm:justify-between max-sm:gap-2 max-sm:hidden">
        <a href="#about" onClick={() => setHome("home")} className={home==="home" ? "pb-px border-solid border-b-2 border-slate-600 cursor-pointer" : "cursor-pointer"}>About</a>
        <a href="#skills" onClick={() => setHome("skills")} className={home==="skills" ? "pb-px border-solid border-b-2 border-slate-600 cursor-pointer" : "cursor-pointer"}>Skills</a>
        <a href="#projects" onClick={() => setHome("projects")} className={home==="projects" ? "pb-px border-solid border-b-2 border-slate-600 cursor-pointer" : "cursor-pointer"}>Projects</a>
        <a href="#contact" onClick={() => setHome("contact")} className={home==="contact" ? "pb-px border-solid border-b-2 border-slate-600 cursor-pointer" : "cursor-pointer"}>Contact Me</a>
      </ul>
    </div>
  )
}

export default Footer