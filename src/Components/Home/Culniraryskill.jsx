import { Link } from "react-router-dom"
import { learnreciepe } from "./Learreciepearray"
import Box from "../Box"
import Text from "../Text"
import Button from "../Button"
import { motion } from "framer-motion"
function Culniraryskill() {
  return (
  <Box className='w-full mt-5  flex gap-10 place-items-center justify-center  flex-col md:flex-row'>
     <Box className='w-full h-[250px] md:w-[40%]'>
        <img className='h-full w-full' data-aos="zoom-in" src="https://static.fanpage.it/wp-content/uploads/sites/22/2020/05/iStock-1093661558.jpg"/>
     </Box>
    <Box className='w-full text-green-500 font-bold h-[250px] md:w-[40%]'>
        <Text className='text-3xl'>Improve Your</Text>
        <Text className='text-3xl'>Culniary Skills</Text>
        {learnreciepe.map((a)=>(
        <motion.Box className='w-full flex gap-2  mb-2 ' data-aos="fade-right" key={a.name} data-aos-delay={a.delay}>
          <Box className='w-3' style={{backgroundColor:"#7FFF00"}}></Box>
          <Box className='w-[90%]'>{a.name}</Box>
       </motion.Box>
      ))}
     <Link to="/login"><Button className='w-[80px] h-10 text-white mt-5' style={{backgroundColor:"#7FFF00"}}>Sign in</Button></Link>
   </Box>
 </Box>

  )
}

export default Culniraryskill
