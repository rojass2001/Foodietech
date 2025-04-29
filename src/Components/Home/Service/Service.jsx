
import Box from '../../Box'
import Text from '../../Text'
import { servicearray } from './Servicearray'
import { motion } from 'framer-motion'
function Service() {
return (
  <Box className='w-full mt-5 py-3 '>
    <Text className='text-3xl font-bold text-green-500 text-center'>Our Service</Text>
    <Box className='w-full grid mt-5 gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
      {servicearray.map((a)=>(
      <motion.Box className='space-y-2  py-2 text-center border-2 place-items-center
        border-green-500 justify-center cursor-pointer text-green-500' data-aos="fade-right" data-aos-delay={a.delay} key={a.icon}>
        <Text className='text-green-500 mx-auto'>{a.icon}</Text>
        <Text className='font-bold'>{a.title}</Text>
        <Text>{a.des}</Text>    
      </motion.Box>
      ))}
    </Box>
   
  </Box>
 )
}

export default Service
