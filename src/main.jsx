import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProjectContextProvider from "./context/ProjectContext.jsx";
import DarkModeProvider from "./context/DarkModeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <BrowserRouter>
        <ProjectContextProvider>
          <App />
        </ProjectContextProvider>
      </BrowserRouter>
    </DarkModeProvider>
  </React.StrictMode>
);
