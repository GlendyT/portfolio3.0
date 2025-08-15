import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Projectlist = () => {
  const { filteredProjects, getRandomHeight, levels } =
    useContext(ProjectContext);
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#album",
          start: "-40% center",
          end: "bottom 20%",
          toggleActions: "play pause resume reset",
        },
      }
    );
  }, [levels]);

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 mt-4 space-y-4 py-4  cocktail">
      {filteredProjects.map((project) => (
        <div
          key={project._id}
          className="relative group break-inside-avoid mb-6 tech-card"
          style={{ height: `${getRandomHeight(project._id)}px` }}
        >
          <div className="overflow-hidden rounded-xl bg-gray-100 h-full">
            <img
              src={project.image}
              alt={`${project.name} - ${project.description}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 "
            />
            <div className="absolute inset-0 backdrop-blur-sm bg-black/50 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl flex flex-col items-center justify-between opacity-0 group-hover:opacity-100 px-2 py-4">
              <div className="flex-grow"></div>
              <p className="text-sm line-clamp-2 break-words break-all text-center my-auto">
                {project.description}
              </p>
              <div className="flex-grow"></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/100 to-transparent pb-4 px-4 pt-2 rounded-b-xl "></div>
          </div>

          <div className="flex flex-row gap-2 justify-between items-center w-full mt-auto">
            <div className="bg-white  rounded-md px-4 py-1 transition-transform duration-200 cursor-pointer">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-semibold text-sm"
              >
                Repo
              </a>
            </div>{" "}
            <h3 className="text-white font-bold text-xs break-words  ">
              {project.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projectlist;
