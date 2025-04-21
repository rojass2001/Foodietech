import { FaHome } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoIosContact } from "react-icons/io";
import useAuth from "./customhooks/useAuth";
import useKeyboardStatus from "./customhooks/useKeyboard";
import { useState } from "react";

function Tabbar() {
  const[click,setclick]=useState(0)
  const{isKeyboardOpen}=useKeyboardStatus()
  const { logout } = useAuth()
  const changestatus=(index)=>{setclick(index)}
  return (
    <>
      {!isKeyboardOpen&&
        <div className={`md:hidden w-full pt-2  flex items-center place-content-center text-green-600 h-[70px] fixed z-50 bottom-0 right-0 left-0`}>
       
          <div className='w-[97%]  flex justify-around py-1 rounded-3xl  items-center place-content-center bg-black  ' >
            <Link to="/"><button onClick={()=>changestatus(0) } className={`flex items-center text-sm place-content-center flex-col ${click===0?"font-bold":""}`}><FaHome className='text-2xl ' />Home</button></Link>
            <Link to="/reciepe">
              <button onClick={()=>changestatus(1) } className={`flex items-center text-sm place-content-center flex-col ${click===1?"font-bold":""}`}>< FaShop className='text-2xl' />Shop</button>
            </Link>
            <Link to="/contact">
              <button onClick={()=>changestatus(2) } className={`flex items-center text-sm place-content-center flex-col ${click===2?"font-bold":""}`}><IoIosContact className='text-2xl' />Contact</button>
            </Link>
            <Link to="/login" onClick={logout} >
              <button onClick={()=>changestatus(3) } className={`flex items-center text-sm place-content-center flex-col ${click===3?"font-bold":""}`}><IoSettingsOutline className='text-2xl' />Logout</button>
            </Link>
          </div>
        </div>
      }
     </>
  )
}

export default Tabbar
