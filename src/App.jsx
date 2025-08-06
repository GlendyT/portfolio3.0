import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-black/95 via-purple-950/100 to-pink-950/90 dark:from-gray-900 dark:via-blue-900 dark:to-green-900 ">
      <div className=" w-full sticky top-5 z-10 ">
        <Navbar />
      </div>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default App;
