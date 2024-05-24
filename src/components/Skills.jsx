import { skills } from "../data/data";

const Skills = ({ category, setCategory }) => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center gap-2 pt-8"
        id="skills"
      >
        <h1 className="text-black text-2xl font-bold max-sm:text-md">
          Explore My Skills
        </h1>
        <h1 className="w-90 text-slate-600 max-sm:text-xs">
          Programming languages, frameworks and libraries
        </h1>
      </div>
      <div className="bg-white overflow-hidden whitespace-nowrap relative py-6">
        <div className="animate-slide inline-block">
          {skills.concat(skills).map((item, index) => {
            return (
              <div className="inline-block" key={index}>
                <img src={item.img} alt="" className="h-36" />
              </div>
            );
          })}
        </div>
      </div>

      <hr className="my-2 h-0 bg-slate-200 max-sm:my-1" />
    </>
  );
};

export default Skills;



/*              */
