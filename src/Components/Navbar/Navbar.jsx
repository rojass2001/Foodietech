import { Link, } from 'react-router-dom'
import { motion } from 'framer-motion'
import Searchbar from './searchbar'
import Loginicon from './Loginicon'
import Box from '../Box'
import Text from '../Text'
import Logouticon from './Logouticon'
import Carticon from './Carticon'

function Navbar() {
 return (
 <motion.nav
      initial={{opacity:0,y:-100}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.8,delay:0.5}}
      className='w-full fixed top-0 right-0 left-0 z-50' style={{backgroundColor:"#282A35"}}>
   <Box  className='w-full px-3 h-[60px] items-center flex justify-between md:shadow-md  md:shadow-gray-500 '>
      <Text className=' font-bold  text-green-500 text-3xl '>FoodieTech</Text>
      <ul className='hidden text-md font-bold gap-6 items-center text-green-500 md:flex'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/reciepe"><li>Recipes</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </ul>
      <Box className='hidden md:flex w-[200px] '> <Searchbar/> </Box>
      <Box className='flex gap-3 items-center'>
        <Loginicon />
        <Logouticon/>
        <Carticon/> 
      </Box>
    </Box>
        {/*searchbar*/}
    <Box className=' md:hidden w-full shadow-md p-2 shadow-gray-500  flex items-center place-content-center'>
      <Searchbar />
    </Box> 
 </motion.nav>
    
  
  )
}

export default Navbar
