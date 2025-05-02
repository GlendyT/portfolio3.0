const Projectlist = ({ name, image, description, demo, repo }) => {
  return (
    <div className="w-full h-60 bg-transparent group perspective max-sm:h-28 font-quatt">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className="absolute flex flex-col justify-end bg-gradient-to-t from-gray-900 via-gray-900/40 w-full h-full rounded-xl overflow-hidden inset-0 backface-hidden px-8 pb-8 max-sm:pb-2 max-sm:px-4 ">
          <img
            src={image}
            alt=""
            className=" absolute inset-0 object-cover backface-hidden w-full h-full rounded-sm"
          />
          <div className="backface-hidden absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <h3 className="z-10 mt-3 text-base font-bold text-white max-sm:text-[0.4rem]">
            {name}
          </h3>
        </div>

        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 overflow-hidden rounded-xl text-white ">
          <div className="text-center flex flex-col items-center justify-center h-full px-2 pb-18 ">
            <p className="my-2 text-xs max-sm:hidden ">{description}</p>
            <div className="flex flex-row  gap-2 max-sm:text-[0.4rem] max-sm:flex-col">
              <button className="bg-black px-2 py-2 font-semibold text-white rounded-xl">
                <a href={repo} target="_blank" rel="noreferrer">
                  Repository
                </a>
              </button>
              <button className="bg-black px-2 py-2 font-semibold text-white rounded-xl">
                <a href={demo} target="_blank" rel="noreferrer">
                  Demo Live
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectlist;
