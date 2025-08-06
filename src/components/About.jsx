import { about, experience, story } from "../data/data";

const About = () => {
  return (
    <div
      className="flex min-h-screen font-quatt items-center justify-center"
      id="about"
    >
      <div className="flex flex-col h-auto py-4 w-full items-center gap-4 mx-44 max-sm:mx-8 justify-center rounded-3xl backdrop-blur-sm  dark:text-black text-white bg-black/70 dark:bg-white/30 transition-all duration-500 max-sm:flex-col max-sm:gap-2 max-2xl:gap-2">
        <p className="text-sm">get to know</p>
        <h1 className="text-4xl py-1 font-bold max-sm:text-xl max-2xl:text-base">
          About Me
        </h1>
        <div className="flex flex-row">
          <div className="flex flex-col w-full text-center  mx-8 ">
            <div className="flex flex-col gap-8 justify-center pt-2 pb-2">
              <div className=" grid grid-cols-2 gap-20 max-sm:gap-2  max-sm:text-xs max-sm:flex-col max-sm:flex px-44 max-sm:px-0 ">
                <div className="border-2 border-solid border-slate-600  rounded-2xl p-2 flex flex-col items-center justify-center">
                  <h1 className="font-bold">Experience </h1>
                  {experience.map((freelance) => (
                    <a
                      key={freelance.id}
                      href={freelance.web}
                      target="_blanck"
                      rel="noreferrer"
                      className="hover:text-purple-500"
                    >
                      {freelance.name}
                    </a>
                  ))}
                </div>
                <div className="border-2 border-solid border-slate-600 rounded-2xl p-2">
                  <h1 className="font-bold">Education</h1>
                  {about.map((studies) => (
                    <span
                      key={studies.id}
                      className="flex flex-col items-center"
                    >
                      <ul className="flex flex-row gap-2 max-sm:gap-1 text-[0.7rem]">
                        {studies.year}
                        <li>{studies.study}</li>
                      </ul>
                    </span>
                  ))}
                </div>
              </div>
              <div className=" max-sm:text-xs max-2xl:text-xs px-44 max-sm:px-2">
                {story.map((storylife) => (
                  <span key={storylife.id}>{storylife.briefstory}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

/*max-sm:hidden  max-2xl:hidden*/
