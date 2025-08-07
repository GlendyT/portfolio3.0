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



  return (
    <ProjectContext.Provider
      value={{
        contextValue,
        activeTab,
        setActiveTab,
        levels,
        filteredProjects,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
