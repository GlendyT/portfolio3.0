import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import Projectlist from "./Projectlist";

const Projects = ({ category }) => {
  const { projects } = useContext(ProjectContext);

  return (
    <div className="mt-10 pb-56 text-white " id="projects">
      <h1 className="font-bold text-4xl mb-4 max-sm:text-md text-center ">
        {" "}
        Projects{" "}
      </h1>
      <div className=" grid grid-cols-4 gap-14 max-sm:grid-cols-2 max-sm:gap-4 max-2xl:grid-cols-2">
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
  );
};

export default Projects;
