import { FaHome } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import useAuth from "./customhooks/useAuth";

function Tabbar() {
 const{logout}=useAuth()
  return (
    
  <div className="w-full p-1 flex items-center place-content-center text-green-600 h-[70px] pt-2 sticky z-1000 bottom-0 right-0 left-0  md:hidden">
    <div className='w-[97%]  flex justify-around py-1 rounded-3xl  items-center place-content-center bg-black  ' >
      <Link to="/">
        <button className='flex items-center text-sm place-content-center flex-col'><FaHome className='text-2xl ' />Home</button>
     </Link>
      <Link to="/reciepe">
        <button className='flex items-center text-sm place-content-center flex-col'>< FaShop className='text-2xl' />shop</button>
      </Link>
      <Link to="/contact">
        <button  className='flex items-center text-sm place-content-center flex-col'><IoIosContact className='text-2xl' />contact</button>
      </Link>
      <Link to="/login" >
        <button onClick={logout} className='flex items-center text-sm place-content-center flex-col'><IoSettingsOutline className='text-2xl' />logout</button>
      </Link>
    </div>
  </div>
  
  )
}

export default Tabbar
