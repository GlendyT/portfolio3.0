import { skills } from "../data/data";

const Skills = ({ category, setCategory }) => {
  return (
    <div className="min-h-screen flex items-center flex-col justify-center">
      <div
        className="flex flex-col h-96 py-4 mx-44 max-sm:mx-8 items-center justify-center gap-2 font-quatt"
        id="skills"
      >
        <div className="text-center  dark:text-black text-white bg-black/70 dark:bg-white/30 transition-all duration-500 py-4 px-2 rounded-xl">
          <h1 className=" text-2xl font-bold max-sm:text-md">
            Explore My Skills
          </h1>
          <h1 className="w-90  max-sm:text-xs pb-4">
            Programming languages, frameworks and libraries
          </h1>
        </div>
      </div>
      <div className="w-full max-sm:w-96">
        {/* <hr className=" h-0 max-sm:my-1 border-8 border-dashed border-purple-400" /> */}
        <div className="backdrop-blur-sm   overflow-hidden whitespace-nowrap relative">
          <div className="animate-slide inline-block">
            {skills.concat(skills).map((item, index) => {
              return (
                <div
                  className="inline-block px-4 border-white max-sm:px-2"
                  key={index}
                >
                  <img
                    src={item.img}
                    alt=""
                    className="h-36 backdrop-blur-xl bg-white/90 max-sm:h-24 max-sm:rounded-md"
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* <hr className=" h-0 max-sm:my-1 border-8 border-dashed border-purple-400 " /> */}
      </div>
    </div>
  );
};

export default Skills;

/*               */
