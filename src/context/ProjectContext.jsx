import { createContext } from "react";
import { projects } from "../data/data";

export const ProjectContext = createContext(null);

const ProjectContextProvider = ({ children }) => {
  const contextValue = {
    projects,
  };
  return (
    <ProjectContext.Provider value={contextValue}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
