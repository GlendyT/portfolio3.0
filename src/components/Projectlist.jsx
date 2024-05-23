

const Projectlist = ({id, name, image, description}) => {
  return (
    <div className="w-full m-auto rounded-xl shadow-2xl animate-fadaIn">
    <div className="relative ">
      <img src={image} alt="" className=" rounded-t-2xl" />
    </div>
    <div className="p-2">
      <div className="flex justify-between items-center mb-2">
        <p className="text-xs font-bold">{name}</p>
      </div>
      <p className="text-slate-600 text-xs hidden">{description}</p>
    </div>
  </div>
  )
}

export default Projectlist