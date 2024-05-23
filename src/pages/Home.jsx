import FirstPage from "../components/FirstPage";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { useState } from "react";

const Home = () => {

  return (
    <div >
      <FirstPage/>
      <About/>
      <Skills />
      <Projects  />
      <ContactMe/>
      
    </div>

  );
};

export default Home;
