import { NavLink , useNavigate} from "react-router-dom"

function Navbar() {
let navigate = useNavigate(null)
 const handleLogout = () => {
     // Clear cookies
     fetch('http://localhost:3000/logout', {
      method: 'GET',
      credentials: 'include'
    })
    .then(res => res.json())
    .then(data => {
      alert(data.message)
      navigate('/')
    })
   };

  return (
    <nav className="bg-gray-950  py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-3xl font-bold text-white hover:text-gray-300">
            <a href="#">MyApp</a>
          </div>
          
          <div className="space-x-8 navbar">
            <NavLink to="/home" className="text-white hover:text-gray-300">Home  </NavLink>
            <NavLink to="/products" className="text-white hover:text-gray-300">Products</NavLink>
            <NavLink to="/admin" className="text-white hover:text-gray-300">Admin</NavLink>
            <NavLink to="/contact" className="text-white hover:text-gray-300">Contact</NavLink>

            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-all duration-300">
              Logout
            </button>
          </div>
        </div>
      </nav>
  )
}

export default Navbar