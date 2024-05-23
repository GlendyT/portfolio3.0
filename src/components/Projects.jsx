import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import Projectlist from "./Projectlist";

const Projects = ({ category }) => {
  const { projects } = useContext(ProjectContext);

  return (
    <div className="mt-2 pb-4" id="projects">
      <h1 className="font-bold text-2xl text-black mb-4 max-sm:text-md">
        {" "}
        Projects{" "}
      </h1>
      <div className=" mt-2 grid grid-cols-4 gap-2 max-sm:grid-cols-2">
        {projects.map((item, index) => {
          return (
            <Projectlist
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
