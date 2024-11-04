import GT from "../assets/GT.jpg";

const About = () => {
  return (
    <div
      className="flex min-h-screen font-quatt items-center justify-center"
      id="about"
    >
      <div className="flex flex-row h-96 w-full px-4 gap-8 items-center justify-center border-2 border-gray-500 rounded-3xl backdrop-blur-sm bg-black/70 max-sm:flex max-sm:flex-col max-sm:gap-2 max-2xl:gap-1 max-sm:h-full ">
        <div className="flex flex-col m-auto text-center text-white max-sm:mx-4 max-md:mx-4 max-2xl:mx-4  ">
          <p className="text-sm">get to know</p>
          <h1 className="text-4xl py-1 font-bold max-sm:text-xl max-2xl:text-base">
            About Me
          </h1>
          <div className="flex flex-col gap-2 justify-center pt-2 pb-2">
            <div className=" grid grid-cols-2 gap-2  max-sm:text-xs max-sm:flex-col max-sm:flex ">
              <div className="border-2 border-solid border-slate-600 rounded-2xl p-2">
                <h1 className="font-bold">Experience </h1>
                <p className=" font-normal ">
                  {" "}
                  Experience as Web Developer Freelancer{" "}
                </p>
                <a
                  href="https://themagicshop.vercel.app/"
                  target="_blanck"
                  className="hover:text-purple-500"
                >
                  Check my Freelancer Work 👈{" "}
                </a>
              </div>
              <div className="border-2 border-solid border-slate-600 rounded-2xl p-2">
                <h1 className="font-bold">Education</h1>
                <p>2024-Typescript Developer Bootcamp Laserants</p>
                <p>2023-Udemy Courses</p>
                <p>2023-June - University </p>
                <p>2018-2019 Associate´s Degree </p>
              </div>
            </div>
            <p className=" max-sm:text-xs max-2xl:text-xs">
              I am a student of Systems Engineering, Web developer and starting
              in the world of Mobile Application Development, which is where I
              can find my self doing one of the things that I love. Coding,
              searching and solving errors is enjoyable to me. I am a positive,
              curious and hard working person, trying always to help and share
              my acknowladge and at the same time improving my soft and
              technical skills.
            </p>
          </div>
        </div>

        <img
          src={GT}
          alt="GT"
          className=" object-center w-100 h-44 rounded-xl max-sm:hidden  max-2xl:hidden"
        />
      </div>
    </div>
  );
};

export default About;
