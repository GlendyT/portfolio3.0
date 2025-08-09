import { createContext, useState } from "react";
import { projects } from "../data/data";

export const ProjectContext = createContext(null);

const ProjectContextProvider = ({ children }) => {
  const contextValue = {
    projects,
  };

  const [activeTab, setActiveTab] = useState("all");

  const levels = ["all", ...new Set(projects.map((project) => project.level))];

  const filteredProjects =
    activeTab === "all"
      ? (() => {
          const basicProjects = projects
            .filter((project) => project.level === "basic")
            .slice(0, 2);
          const advancedProjects = projects
            .filter((project) => project.level === "advanced")
            .slice(0, 2);
          return [...basicProjects, ...advancedProjects];
        })()
      : projects.filter((project) => project.level === activeTab);

  const getRandomHeight = (id) => {
    const seed = parseInt(id) * 31;
    const normalized = (seed % 100) / 100;

    const heights = [
      Math.floor(200 + normalized * 100), // 200-300px
      Math.floor(250 + normalized * 150), // 250-400px
      Math.floor(180 + normalized * 80), // 180-260px
      Math.floor(300 + normalized * 100), // 300-400px
      Math.floor(220 + normalized * 120), // 220-340px
    ];

    return heights[seed % heights.length];
  };

  return (
    <ProjectContext.Provider
      value={{
        contextValue,
        activeTab,
        setActiveTab,
        levels,
        filteredProjects,
        getRandomHeight
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
