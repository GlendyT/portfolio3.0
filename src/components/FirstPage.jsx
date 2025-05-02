import GT from "../assets/GT.jpg";
import { contact, social } from "../data/data";
import Title from "./title/Title";

const FirstPage = () => {
  return (
    <div className=" min-h-screen flex font-quatt justify-center items-center">
      <div className="flex flex-row h-auto py-10 w-full items-center gap-4 mx-44 max-sm:mx-8 justify-center rounded-3xl backdrop-blur-sm  dark:text-black text-white bg-black/70 dark:bg-white/80 transition-all duration-500 max-sm:flex-col max-sm:gap-2  max-2xl:gap-2">
        <div className="flex w-full items-center justify-center">
          <img src={GT} alt="GT" className="w-44 rounded-full max-sm:w-16" />
        </div>
        <div className="flex text-center w-full items-center justify-center">
          <div className="flex flex-col gap-4 max-sm:gap-0 ">
            <span className="text-xl max-sm:text-xs ">Hello, I´m</span>

            <Title />

            <span className="text-xl max-sm:text-sm">Web Developer</span>

            <div className="flex flex-row   gap-2 justify-center pt-2 pb-2 max-sm:gap-1">
              {contact.map((contacts) => (
                <button
                  key={contacts.id}
                  className="py-2 bg-black text-white px-2 w-24 text-xs rounded-lg border-2 border-gray-500 max-sm:w-24 "
                >
                  <a href={contacts.cv} target="_blank" rel="noreferrer">
                    {contacts.name}
                  </a>
                </button>
              ))}
            </div>
            <div className=" flex flex-row gap-2 m-auto ">
              {social.map((socialmedia) => (
                <a
                  key={socialmedia.id}
                  href={socialmedia.sociallink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={socialmedia.img}
                    className="w-10 bg-white rounded-full border-2 border-gray-500"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
