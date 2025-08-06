import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import Projectlist from "./Projectlist";

const Projects = () => {
  const { projects } = useContext(ProjectContext);

  return (
    <div
      className="min-h-screen flex flex-col justify-center dark:text-black text-white  transition-all duration-500 font-quatt"
      id="projects"
    >
      <div className="flex flex-col gap-4 h-auto  dark:text-black text-white bg-black/70 dark:bg-white/30 mx-44 px-4 py-2  rounded-xl max-sm:mx-8">
        <h1 className=" text-4xl max-sm:text-md text-center font-extrabold">
          {" "}
          Projects{" "}
        </h1>
        <div className=" grid grid-cols-6 gap-8 max-sm:grid-cols-3 max-sm:gap-4 max-2xl:grid-cols-2 ">
          {projects.map((item, index) => {
            return (
              <Projectlist
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                image={item.image}
                demo={item.demo}
                repo={item.repo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
