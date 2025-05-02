import { IoSettingsOutline } from "react-icons/io5"; // Importing settings icon from react-icons
import Box from "../Box"; // Box component for layout and styling
import Button from "../Button"; // Button component for styling the button
import useAuthentication from "../../customhooks/useAuth"; // Custom hook to handle authentication-related actions like logout
import { Link } from "react-router-dom"; // Link component for navigation
import { HiOutlineUser } from 'react-icons/hi'; // Importing user icon from react-icons

function Logouticon() {
  // Destructuring the logout function from the custom useAuthentication hook
  const { logout } = useAuthentication();
  
  return (
    <Box className="hidden md:block group relative">       
      {/* Display the user icon */}
      <HiOutlineUser className='text-green-500 text-xl' />
      
        {/* Button that shows up when the group is hovered */}
        <Button 
          onClick={logout} // Call the logout function when the button is clicked
          className="hidden group-hover:flex absolute top-[19px] left-[-26px] cursor-pointer rounded-xl bg-green-500 text-white p-2 items-center gap-1"
        >
          <IoSettingsOutline /> {/* Settings icon */}
          Logout {/* Logout text */}
        </Button>                
    </Box>
  );
}

export default Logouticon;
