import { FaCartShopping } from 'react-icons/fa6'
import { Link, } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import Searchbar from './searchbar'
import { setlogout } from '../../redux/loginslice'
import Loginicon from './Loginicon'

function Navbar() {
  const{cartproducts}=useSelector(state=>state.cart)
  const dispatch=useDispatch()
return (
 <motion.nav
      initial={{opacity:0,y:-100}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.8,delay:0.5}}
      className='w-full fixed top-0 right-0 left-0 z-50' style={{backgroundColor:"#282A35"}}>
   <div  className='w-full px-3 h-[60px] items-center flex justify-between md:shadow-md  md:shadow-gray-500 '>
      <h1 className=' font-bold  text-green-500 text-3xl '>FoodieTech</h1>
      <ul className='hidden text-md font-bold gap-6 items-center text-green-500 md:flex'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/reciepe"><li>Recipes</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        <Link to="/login"><li onClick={()=>dispatch(setlogout())} className='cursor-pointer'>Logout</li></Link>
      </ul>
      <div className='hidden md:flex w-[200px] '><Searchbar/></div>
        <div className='flex gap-3 items-center'>
          <Loginicon/>
          <Link to="/cart"className='relative'>
              <FaCartShopping  className='text-green-500 text-2xl mt-1'/>
              {
              cartproducts.length>0&&
              <div className='absolute bg-white flex p-1 items-center rounded-full w-4 top-[-6px]  right-[-5px] h-4
              animate-bounce'>{cartproducts.length}</div>
             }
          </Link>
          
        </div>
    </div>
        {/*searchbar*/}
    <div className=' md:hidden w-full shadow-md p-2 shadow-gray-500  flex items-center
     place-content-center'><Searchbar/></div> 
 </motion.nav>
    
  
  )
}

export default Navbar
