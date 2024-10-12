import GT from "../assets/GT.jpg";
import git from "../assets/github.png";
import ld from "../assets/linkedin.png";
import Title from "./title/Title";


const FirstPage = () => {
  return (
    <div className=" flex justify-center gap-36 h-96 w-full mt-14 py-8 mb-32 text-white border-2 border-gray-500 rounded-3xl backdrop-blur-sm bg-black/70 max-sm:flex-col max-sm:gap-2 max-sm:mt-24 max-2xl:gap-2 font-quatt">
      <div className="m-auto">
        <img src={GT} alt="GT" className="w-44 rounded-full max-sm:w-24" />
      </div>
      <div className="flex flex-col m-auto text-center">
        <p className="text-xl max-sm:text-xs ">Hello, I´m</p>
        <h1 className="text-6xl py-8 max-sm:text-4xl animate-blur-text-0 font-extrabold"> <Title/> </h1>
        <p className="text-xl max-sm:text-sm">Web Developer</p>
        <div className="flex flex-row  gap-2 justify-center pt-2 pb-2 max-sm:gap-1">
          <button className="py-2 bg-black text-white px-2 w-24 text-xs rounded-3xl border-2 border-gray-500 max-sm:w-16 ">
            <a href="/src/assets/CV GLENDY TUYUC DESARROLLADORA WEB ESPAÑOL.pdf " target="_blank" rel="noreferrer"> 
            CV in Spanish</a>
          </button>
          <button className="py-2 bg-black px-2 w-24 text-xs rounded-3xl border-2 border-gray-500 max-sm:w-16"
          > <a href="/src/assets/CV GLENDY TUYUC WEB DEVELOPER ENGLISH.pdf" target="_blank" rel="noreferrer"> 
            CV in English</a>
          </button>
          <button className="py-2 bg-black px-2 w-24 text-xs rounded-3xl border-2 border-gray-500 max-sm:w-16"
          >
           <a href="#contact">Contact Me</a>
          </button>
        </div>
        <div className=" flex flex-row gap-2 m-auto ">
          <a href="https://github.com/GlendyT" target="_blank" rel="noreferrer"> 
          <img src={git} className="w-10 bg-white rounded-full border-2 border-gray-500" /></a>
          <a href="https://www.linkedin.com/in/glendy-tuyuc-864954275/" target="_blank" rel="noreferrer"> <img src={ld} className="w-10 bg-white rounded-full border-2 border-gray-500" /></a>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
