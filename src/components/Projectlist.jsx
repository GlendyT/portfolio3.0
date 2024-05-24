const Projectlist = ({ name, image, description }) => {
  return (
    <div className="w-full rounded-xl shadow-2xl ">
      <div className="relative ">
        <img src={image} alt="" className=" rounded-t-2xl" />
        <div className="text-center mb-2 pt-4">
          <p className="text-sm font-bold">{name}</p>
        </div>
      </div>
      <div className="p-2">
        <p className="text-slate-600 text-xs hidden">{description}</p>
      </div>
    </div>
  );
};

export default Projectlist;
