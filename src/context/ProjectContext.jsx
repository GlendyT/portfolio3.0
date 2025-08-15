import { createContext, useState } from "react";
import { projects } from "../data/data";

export const ProjectContext = createContext(null);

const ProjectContextProvider = ({ children }) => {
  const contextValue = {
    projects,
  };
  const isTablet = ("(max-width: 1024px)");
  const isMobile = ("(max-width: 600px)");

  const [activeTab, setActiveTab] = useState("all");

  const levels = ["all", ...new Set(projects.map((project) => project.level))];

  const filteredProjects =
    activeTab === "all"
      ? (() => {
          const basicProjects = projects
            .filter((project) => project.level === "basic")
            .slice(0, 1);
          const advancedProjects = projects
            .filter((project) => project.level === "advanced")
            .slice(0, 1);
          const animationProjects = projects
            .filter((project) => project.level === "animations")
            .slice(0, 1);
          const appsProjects = projects
            .filter((project) => project.level === "apps")
            .slice(0, 1);
          return [
            ...basicProjects,
            ...advancedProjects,
            ...animationProjects,
            ...appsProjects,
          ];
        })()
      : projects.filter((project) => project.level === activeTab);

  const getRandomHeight = (id) => {
    const seed = parseInt(id) * 31;
    const normalized = (seed % 100) / 100;

    if (isMobile) {
      return Math.floor(150 + normalized * (300 - 150));
    } else if (isTablet) {
      return Math.floor(175 + normalized * (350 - 175));
    } else {
      return Math.floor(200 + normalized * (400 - 200));
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        contextValue,
        activeTab,
        setActiveTab,
        levels,
        filteredProjects,
        getRandomHeight,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
