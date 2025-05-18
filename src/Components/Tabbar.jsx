import { FaHome } from "react-icons/fa"; // Importing Home icon
import { FaShop } from "react-icons/fa6"; // Importing Shop icon
import { HiOutlineUser } from 'react-icons/hi'; // Importing User icon
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom for navigation
import { IoIosContact } from "react-icons/io"; // Importing Contact icon
import useAuthentication from "../customhooks/useAuth"; // Custom hook to manage authentication
import useKeyboardStatus from "../customhooks/useKeyboard"; // Custom hook to check keyboard status
import Box from "./Box"; // Box component for layout and styling
import Button from "./Button"; // Button component for clickable buttons
import { useDispatch, useSelector } from "react-redux";
import { Settabstatus } from "../redux/Tabbarslice";

function Tabbar() {
  const { activeTab}=useSelector((state) => state.tab); 
  const { isKeyboardOpen } = useKeyboardStatus(); // Checking if the keyboard is open
  const { logout } = useAuthentication(); // Destructuring logout function from authentication hook
  const dispatch=useDispatch()
  
 
  return (
    <>
      {!isKeyboardOpen && // Only display the Tabbar if the keyboard is not open
        <Box className={`md:hidden w-full pt-2 flex items-center place-content-center text-green-600 h-[70px] fixed z-50 bottom-0 right-0 left-0`}>
          <Box className='w-[97%] flex justify-around py-1 rounded-3xl items-center place-content-center bg-black'>
            {/* Home Button */}
            <Link to="/">
              <Button onClick={() => dispatch(Settabstatus(0))} className={`flex items-center text-sm place-content-center flex-col ${activeTab === 0 ? "font-bold" : ""}`}>
                <FaHome className='text-2xl' />Home
              </Button>
            </Link>

            {/* Shop Button */}
            <Link to="/reciepe">
              <Button onClick={() => dispatch(Settabstatus(1))} className={`flex items-center text-sm place-content-center flex-col ${activeTab === 1 ? "font-bold" : ""}`}>
                <FaShop className='text-2xl' />Shop
              </Button>
            </Link>

            {/* Contact Button */}
            <Link to="/contact">
              <Button onClick={() => dispatch(Settabstatus(2))} className={`flex items-center text-sm place-content-center flex-col ${activeTab === 2 ? "font-bold" : ""}`}>
                <IoIosContact className='text-2xl' />Contact
              </Button>
            </Link>

            {/* Logout Button */}
            <Link to="/login" onClick={logout}>
              <Button onClick={() => dispatch(Settabstatus(3))}  className={`flex items-center text-sm place-content-center flex-col `}>
                <HiOutlineUser className='text-2xl' />Logout
              </Button>
            </Link>
          </Box>
        </Box>
      }
    </>
  )
}

export default Tabbar;
