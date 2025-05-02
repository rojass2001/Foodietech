import { Link } from 'react-router-dom'; // Importing Link component for navigation
import { motion } from 'framer-motion'; // For animating the navbar on mount
import Searchbar from './searchbar'; // Searchbar component to include search functionality
import Loginicon from './Loginicon'; // Login icon component
import Box from '../Box'; // Box component for layout and styling
import Text from '../Text'; // Text component for styling text
import Logouticon from './Logouticon'; // Logout icon component
import Carticon from './Carticon'; // Cart icon component to show cart items

function Navbar() {
  return (
    // Motion component for animated navbar appearance
    <motion.nav
      initial={{ opacity: 0, y: -100 }} // Initial animation state (invisible, above screen)
      animate={{ opacity: 1, y: 0 }} // Final animation state (fully visible, in place)
      transition={{ duration: 0.8, delay: 0.5 }} // Transition speed and delay
      className='w-full fixed top-0 right-0 left-0 z-50' 
      style={{ backgroundColor: "#282A35" }} // Dark background color for the navbar
    >
      <Box className='w-full px-3 h-[60px] items-center flex justify-between md:shadow-md md:shadow-gray-500 '>
        {/* App name and logo */}
        <Text className='font-bold text-green-500 text-3xl '>FoodieTech</Text>
        
        {/* Navigation links (only visible on medium or larger screens) */}
        <ul className='hidden text-md font-bold gap-6 items-center text-green-500 md:flex'>
          <Link to="/"><li>Home</li></Link>
          <Link to="/reciepe"><li>Recipes</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
        
        {/* Searchbar (only visible on medium or larger screens) */}
        <Box className={'hidden md:flex w-[200px]'}>
          <Searchbar />
        </Box>
        
        {/* User icons (Login, Logout, Cart) */}
        <Box className={'flex gap-3 items-center'}>
          <Loginicon /> 
          <Logouticon /> 
          <Carticon />
        </Box>
      </Box>

      {/* Searchbar (visible on smaller screens only) */}
      <Box className='md:hidden w-full shadow-md p-2 shadow-gray-500 flex items-center place-content-center'>
        <Searchbar /> {/* Searchbar component */}
      </Box>
    </motion.nav>
  );
}

export default Navbar;
