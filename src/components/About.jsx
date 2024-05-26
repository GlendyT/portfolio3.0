import GT from "../assets/GT.jpg";

const About = () => {
  return (
    <div
      className="flex justify-center gap-16 h-96 w-full mb-8 mt-20 border-2 border-gray-500 rounded-3xl backdrop-blur-sm bg-black/70 max-sm:flex max-sm:flex-col max-sm:gap-2 max-md:mx-2 max-2xl:gap-1 font-quatt"
      id="about"
    >
      <div className="flex flex-col m-auto text-center ml-10 text-white max-sm:mx-4 max-md:mx-4 max-2xl:mx-4">
        <p className="text-sm">get to know</p>
        <h1 className="text-6xl py-2 font-bold max-sm:text-2xl max-2xl:text-lg">About Me</h1>
        <div className="flex flex-col gap-2 justify-center pt-2 pb-2">
          <div className=" grid grid-cols-2 gap-2  max-sm:text-xs ">
            <div className="border-2 border-solid border-slate-600 rounded-2xl py-4">
              <h1 className="font-bold">Experience </h1>
              <p className=" font-normal ">
                {" "}
                1+ Year of experience as Web Developer Freelancer{" "}
              </p>
            </div>
            <div className="border-2 border-solid border-slate-600 rounded-2xl">
              <h1 className="font-bold">Education</h1>
              <p>2023-Udemy Courses</p>
              <p>2023-June - University </p>
              <p>2018-2019 Associate´s Degree </p>
            </div>
          </div>
          <p className=" max-sm:text-xs max-2xl:text-xs">
            I am a student of Systems Engineering and starting to be a Web
            developer, which is where I can find my self doing one of the things
            that I love. Coding, searching and solving errors is enjoyable to
            me. I am a positive, curious and hard working person, trying always
            to help and share my acknowladge and at the same time improving my
            soft and technical skills.
          </p>
        </div>
      </div>
      <div className="m-auto flex items-center justify-center relative max-md:hidden">
        <img src={GT} alt="GT" className=" w-7/12 rounded-xl max-sm:hidden  max-2xl:hidden" />
      </div>
    </div>
  );
};

export default About;
