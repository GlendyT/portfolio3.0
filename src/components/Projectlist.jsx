const Projectlist = ({ name, image, description }) => {
  return (
    <div className="w-full h-80 bg-transparent cursor-pointer group perspective">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute flex flex-col justify-end bg-gradient-to-t from-gray-900 via-gray-900/40  border-4 border-gray-500 w-full h-full rounded-xl overflow-hidden inset-0 backface-hidden px-8 pb-8  ">
          <img
            src={image}
            alt=""
            className=" absolute inset-0 object-cover backface-hidden w-full h-full rounded-xl"
          />
          <div className="backface-hidden absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-xl font-bold text-white">{name}</h3>
        </div>

        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-purple-100 overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-18 ">
            <p className="my-2 text-sm">{description}</p>
            <button className="bg-teal-500 px-2 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectlist;
