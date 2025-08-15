"use client";
import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import Projectlist from "../components/Projectlist";

const Projects = () => {
  const { levels, activeTab, setActiveTab } =
    useContext(ProjectContext);


  return (
    <div
      className="min-h-screen flex flex-col justify-center dark:text-black text-white  transition-all duration-500 code w-full  pt-20"
      id="projects"
    >
      <div className="flex flex-col justify-center gap-2 h-auto dark:text-black text-white bg-black/70 dark:bg-white/30 py-2  rounded-xl max-sm:mx-8 px-8 mx-8">
        <div className="flex flex-row justify-between max-sm:flex-col">
          <h1 className=" text-2xl max-sm:text-md text-center font-extrabold">
            {" "}
            Projects{" "}
          </h1>
          <div className="flex flex-row flex-wrap justify-center gap-1 ">
            {levels.map((level) => (
              <button
                key={level}
                className={`px-2 py-1 font-semibold border-b-4 text-sm uppercase cursor-pointer transition-all duration-300 ${
                  activeTab === level
                    ? "text-white "
                    : "border-transparent text-white/50"
                } `}
                onClick={() => setActiveTab(level)}
              >
                {level === "all" ? "All" : level}
              </button>
            ))}
          </div>
        </div>
        <Projectlist />
      </div>
    </div>
  );
};

export default Projects;
