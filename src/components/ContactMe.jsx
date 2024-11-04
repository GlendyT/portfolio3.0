import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";

const ContactMe = () => {
  return (
    <div
      className="flex justify-center flex-col h-96 w-full py-8 mb-24 max-sm:mb-8 text-white font-quatt"
      id="contact"
    >
      <div className="flex flex-col m-auto text-center ">
        <p className="text-2xl font-bold max-sm:text-sm ">Get In Touch</p>
        <h1 className="text-5xl font-extrabold max-sm:text-3xl">Contact Me</h1>
        <div className="flex justify-center border-2 border-gray-500 rounded-3xl backdrop-blur-sm bg-black/70 mx-2 my-4 max-sm:flex max-sm:flex-col ">
          <div className="flex items-center justify-center gap-2 m-8 max-sm:m-4">
            <img
              src={email}
              className="w-16 bg-white rounded-full max-sm:w-8"
            />
            <p className="text-xl max-sm:text-sm">
              <a href="mailto:exampleemail@gmail.com">Example@gmail.com</a>
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 m-8 max-sm:m-4">
            <img
              src={linkedin}
              className="w-16 bg-white rounded-full border-8 border-white  max-sm:w-8 max-sm:border-4"
            />
            <p className="text-xl max-sm:text-sm ">
              <a href="https://www.linkedin.com/in/glendy-tuyuc-864954275/">
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
