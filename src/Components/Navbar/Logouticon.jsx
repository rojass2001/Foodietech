import { IoSettingsOutline } from "react-icons/io5";
import Box from "../Box";
import Button from "../Button";
import useAuthentication from "../../customhooks/useAuth";
import { Link } from "react-router-dom";
import { HiOutlineUser } from 'react-icons/hi'

function Logouticon() {
 const{logout}=useAuthentication()
  return (
  <Box className="hidden md:block group relative">       
     <HiOutlineUser  className='text-green-500 text-xl'/>
      <Link to="/login"   >
    <Button onClick={logout} className="hidden group-hover:flex absolute top-[19px] left-[-26px] cursor-pointer  rounded-xl bg-green-500 text-white p-2 items-center gap-1">
        <IoSettingsOutline />Logout
    </Button> 
      </Link>                
  </Box>
  )
}

export default Logouticon
