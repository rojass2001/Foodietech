import  { useState } from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import Mobilenavbar from './Mobilenavbar'
import { MdMenu } from 'react-icons/md'
import { Link, } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import Searchbar from './searchbar'
function Navbar() {
  const{cartproducts}=useSelector(state=>state.cart)
  const[open,setopen]=useState(false)

  return (
  <div>
    <motion.div 
      initial={{opacity:0,y:-100}}
      animate={{opacity:1,y:0}}
      transition={{duration:0.8,delay:0.5}}
      className='w-full fixed top-0 right-0 left-0 z-50' style={{backgroundColor:"#282A35"}}>
    <div  className='w-full px-3 h-[60px] items-center flex justify-between md:shadow-md  md:shadow-gray-500 '>
      <h1 className=' font-bold  text-green-500 text-3xl '>FoodieTech</h1>
      <ul className='hidden text-md font-bold gap-6 items-center text-green-500 md:flex'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/reciepe"><li>Recipes</li></Link>
        <Link to="/login"><li>Login</li></Link>
        <Link to="/login"><li className='cursor-pointer'>Logout</li></Link>
      </ul>

      <div className='hidden md:flex w-[200px] '><Searchbar/></div>
        <div className='flex gap-3 items-center'>
          <Link to="/cart">
          <div className='relative'>
          <FaCartShopping  className='text-green-500 text-2xl'/>
          {
          cartproducts.length>0&&
          <div className='absolute bg-white flex p-1 items-center rounded-full w-4 top-[-6px]  right-[-5px] h-4
          animate-bounce'>{cartproducts.length}</div>
            }
          </div> </Link>
          <MdMenu className='text-3xl text-green-500 md:hidden' onClick={()=>setopen(!open)}/>
        </div>
      </div>
        {/*searchbar*/}
    <div className=' md:hidden w-full shadow-md p-2 shadow-gray-500  flex items-center
     place-content-center'><Searchbar/></div> 
    {open&&
    <Mobilenavbar  setopen={setopen}/>
     }
    </motion.div>
    <div/>
    </div>
  )
}

export default Navbar
