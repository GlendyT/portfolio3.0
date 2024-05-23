import { createContext } from "react";
import { projects } from "../data/data";

export const ProjectContext = createContext(null)

const ProjectContextProvider = (props) => {

    const contextValue = {
        projects
    }
    return (
        <ProjectContext.Provider
         value={contextValue}
        >
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectContextProvider;