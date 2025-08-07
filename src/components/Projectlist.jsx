import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

const Projectlist = () => {
  const { filteredProjects, getRandomHeight } = useContext(ProjectContext);

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 mt-4 space-y-4">
      {filteredProjects.map((project) => (
        <div
          key={project._id}
          className="relative group break-inside-avoid mb-4 tech-card"
          style={{ height: `${getRandomHeight(project._id)}px` }}
        >
          <div className="overflow-hidden rounded-xl bg-gray-100 h-full">
            <img
              src={project.image}
              alt={`${project.name} - ${project.description}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 backdrop-blur-sm bg-black/50 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl flex flex-col items-center justify-start opacity-0 group-hover:opacity-100 px-2 py-2">
              <p className=" text-sm mt-1 line-clamp-2 break-words break-all text-center">
                {project.description}
              </p>
              <div className="bg-white bg-opacity-90 rounded-full px-2 py-1 transform scale-0 group-hover:scale-100 transition-transform duration-200 cursor-pointer">
                <a
                  href={project.demo || project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black font-semibold text-sm "
                >
                  Check it
                </a>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/100 to-transparent pb-4 px-4 pt-20 rounded-b-xl ">
              <h3 className="text-white font-bold text-lg break-words  ">
                {project.name}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projectlist;
