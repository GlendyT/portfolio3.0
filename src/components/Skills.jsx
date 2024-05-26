import { skills } from "../data/data";

const Skills = ({ category, setCategory }) => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center gap-2 pt-8 text-white font-quatt"
        id="skills"
      >
        <h1 className=" text-2xl font-bold max-sm:text-md">
          Explore My Skills
        </h1>
        <h1 className="w-90  max-sm:text-xs pb-4">
          Programming languages, frameworks and libraries
        </h1>
      </div>
      <hr className=" h-0 max-sm:my-1 border-8 border-dashed border-purple-400" />
      <div className="backdrop-blur-sm bg-black/50 overflow-hidden whitespace-nowrap relative">
        <div className="animate-slide inline-block">
          {skills.concat(skills).map((item, index) => {
            return (
              <div className="inline-block px-4 border-white max-sm:px-2" key={index}>
                <img src={item.img} alt="" className="h-36 backdrop-blur-xl bg-white/90 rounded-3xl hover:shadow-[0px_0px_200px_0px_#702459] max-sm:h-16 max-sm:rounded-md" />
              </div>
            );
          })}
        </div>
      </div>
      <hr className=" h-0 max-sm:my-1 border-8 border-dashed border-purple-400 " />
    </>
  );
};

export default Skills;

/*               */

