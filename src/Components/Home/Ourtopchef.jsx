import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { topchef } from './Topchefarray'
import Box from '../Box'
import Text from '../Text'
import { motion } from 'framer-motion'
function Ourtopchef() {
  return (
    <Box className='w-full text-green-500 grid gap-5 grid-cols-1 md:grid-cols-3'>
      {topchef.map((a)=>(
        <motion.Box className='flex  border-2 border-green-500 h-[100px] ' key={a.name} data-aos-delay={a.delay} data-aos="fade-right" >   
          <img className='w-[30%] h-full' src={a.image}/>
          <Box>
            <Text className='font-bold text-xl'>{a.name}</Text>
            <Text>{a.reciepe}</Text>
            <Text>{a.cusions}</Text>
            <Box className='w-full flex gap-1'><FaFacebook/><FaInstagram/></Box>
          </Box>
        </motion.Box>
      )) }
    </Box>
   
  )
}

export default Ourtopchef
