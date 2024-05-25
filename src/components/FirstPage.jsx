import GT from "../assets/GT.jpg";
import git from "../assets/github.png";
import ld from "../assets/linkedin.png";

const FirstPage = () => {
  return (
    <div className=" flex justify-center gap-36 h-96 w-full py-8 mb-32 text-white border-2 border-gray-500 rounded-3xl backdrop-blur-sm bg-black/70">
      <div className="m-auto">
        <img src={GT} alt="GT" className="w-44 rounded-full" />
      </div>
      <div className="flex flex-col m-auto text-center">
        <p className="text-xl">Hello, I´m</p>
        <h1 className="text-6xl py-2">Glendy Tuyuc</h1>
        <p className="text-xl">Web Developer</p>
        <div className="flex flex-row gap-2 justify-center pt-2 pb-2">
          <button className="py-2 bg-black text-white px-2 w-24 text-xs rounded-3xl border-2 border-gray-500">
            {" "}
            Download CV in Spanish
          </button>
          <button className="py-2 bg-black px-2 w-24 text-xs rounded-3xl border-2 border-gray-500">
            {" "}
            Download CV in English
          </button>
          <button className="py-2 bg-black px-2 w-24 text-xs rounded-3xl border-2 border-gray-500">
           <a href="#contact">Contact Me</a>
          </button>
        </div>
        <div className=" flex flex-row gap-2 m-auto ">
          <img src={git} className="w-10 bg-white rounded-full border-2 border-gray-500" />
          <img src={ld} className="w-10 bg-white rounded-full border-2 border-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
