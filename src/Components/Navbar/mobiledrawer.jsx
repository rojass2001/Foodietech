/* eslint-disable react/prop-types */
import { motion,AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { setlogout } from '../../redux/loginslice'
import { useDispatch } from 'react-redux'
function MobileDrawer({ setopen, open }) {
  const dispatch=useDispatch()
  return (
    <>
  <AnimatePresence mode='wait'>
        {open && (
      <motion.header
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute pl-5 text-white bg-green-500 top-0 h-screen 
             font-bold text-xl pt-16  left-0 w-[86%]  md:hidden"
          >
            <ul className='list-none'>
            <Link to="/"> <li onClick={() => setopen()} className="mb-4 " data-aos="fade-right" data-aos-delay="100">Home</li></Link>
            <Link to="/reciepe"> <li onClick={() => setopen()} className="mb-4" data-aos="fade-right" data-aos-delay="300">Reciepes</li></Link>
            <Link to="/login"> <li onClick={() => setopen()} className="mb-4" data-aos="fade-right" data-aos-delay="500">Login</li></Link>
            <Link onClick={() => setopen()} to="/login"><li onClick={()=>dispatch(setlogout())}  data-aos="fade-right" data-aos-delay="500">Logout</li></Link>
           </ul>
          </motion.header>
        )}
  </AnimatePresence>
    </>
  )
}

export default MobileDrawer
