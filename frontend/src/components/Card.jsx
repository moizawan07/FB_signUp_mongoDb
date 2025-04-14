
function Card(props) {

  let {imageUrl,name, title, description} = props
  
  return (
    <div  className="w-[370px] bg-white rounded-xl shadow-md overflow-hidden">
    <img
      src={`http://localhost:3000${imageUrl}`}
      alt="Sample Product"
      className="w-full h-59 object-cover"
    />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
      <h4 className="text-lg text-gray-600 mb-4">{title}</h4>
      <p className="text-gray-700">
        {description}
      </p>
    </div>
  </div>
  )
}

export default Card