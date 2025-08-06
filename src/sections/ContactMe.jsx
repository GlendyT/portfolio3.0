import { experience, social } from "../data/data";

const ContactMe = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="flex h-96 flex-col  " id="contact">
        <div className="flex flex-col m-auto text-center  dark:text-black text-white bg-black/80 dark:bg-white/40  rounded-3xl backdrop-blur-lg transition-all duration-500 max-sm:mx-8 max-sm:py-2 ">
          <p className="text-2xl font-bold max-sm:text-sm ">Get In Touch</p>
          <h1 className="text-5xl font-extrabold max-sm:text-3xl">
            Contact Me
          </h1>
          <div className="flex justify-center   mx-2 my-4 max-sm:flex max-sm:flex-col ">
            <div className="flex items-center justify-center gap-2 m-8 max-sm:m-4 max-sm:text-[0.8rem] max-sm:flex-wrap ">
              {social.map((socialmedia) => (
                <a
                  key={socialmedia.id}
                  href={socialmedia.sociallink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={socialmedia.img}
                    className="w-28 dark:bg-white/25 bg-white rounded-full border-2 border-gray-500"
                  />
                  <span>{socialmedia.name}</span>
                </a>
              ))}
              {experience.map((freelance) => (
                <a
                  key={freelance.id}
                  href={freelance.web}
                  target="_blanck"
                  rel="noreferrer"
                  className="flex flex-col items-center "
                >
                  <img
                    src={freelance.image}
                    className="w-28 dark:bg-white/25 bg-white rounded-full border-2 border-gray-500"
                  />
                  <span>{freelance.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
