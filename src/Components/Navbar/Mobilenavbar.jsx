/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Mobilenavbar({setopen}) {
  return (
    <>
    
    <motion.div
     initial={{ opacity: 0, x: -100 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 0.5 }}
     className="absolute pl-5 text-white bg-green-500 top-0 h-screen 
     font-bold text-xl pt-16  left-0 w-[86%]  md:hidden"
   >
   <Link to="/"> <p onClick={()=>setopen()} className="mb-4"data-aos="fade-right" data-aos-delay="100">Home</p></Link>
   <Link to="/reciepe"> <p onClick={()=>setopen()} className="mb-4" data-aos="fade-right"  data-aos-delay="300">Reciepes</p></Link>
   <Link to="/login"> <p onClick={()=>setopen()} className="mb-4" data-aos="fade-right"  data-aos-delay="500">Login</p></Link>
   <Link to="/login"><p data-aos="fade-right"  data-aos-delay="500">Logout</p></Link> 
    </motion.div>

    </>
  )
}

export default Mobilenavbar
