import FirstPage from "../components/FirstPage";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";


const Home = () => {

  return (

    <div className="w-4/5 m-auto pt-2 ">
      <FirstPage/>
      <About/>
      <Skills />
      <Projects  />
      <ContactMe/>
    </div>


  );
};

export default Home;
