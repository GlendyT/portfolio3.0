import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProjectContextProvider from "./context/ProjectContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectContextProvider>
        <App />
      </ProjectContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
