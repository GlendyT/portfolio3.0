import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

const Projectlist = () => {
  const { filteredProjects } = useContext(ProjectContext);
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 mt-4 space-y-4 ">
      {filteredProjects.map((project) => (
        <div
          key={project._id}
          className="relative group cursor-pointer break-inside-avoid mb-4 tech-card "
        >
          <div className="overflow-hidden rounded-xl bg-gray-100">
            <a
              href={project.demo || project.repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={project.image}
                alt={`${project.name} - ${project.description}`}
                className={` object-cover transition-transform duration-300 group-hover:scale-105 `}
              />
              <div className="absolute inset-0 backdrop-blur-sm bg-black/20 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="bg-white bg-opacity-90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-200">
                  <span className="text-black font-semibold text-sm">
                    Check it
                  </span>
                </div>
              </div>
            </a>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-xl">
              <h3 className="text-black font-bold text-lg">{project.name}</h3>
              <p className="text-gray-200 text-sm mt-1 line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projectlist;
