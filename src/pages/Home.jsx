import FirstPage from "../components/FirstPage";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className=" flex flex-col  min-h-screen ">
      <div className="  sticky top-0 z-10 ">
        <Navbar />
      </div>
      <div className="flex-1 px-10 overflow-auto">
        <FirstPage />
        <About />
        <Skills />
        <Projects />
        <ContactMe />
      </div>
    </div>
  );
};

export default Home;
