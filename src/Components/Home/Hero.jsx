import Box from "../Box"
import Button from "../Button"
import Text from "../Text"
import { hero } from "./Heroarray"
import { motion } from "framer-motion"
function Hero() {
  return (
  <Box className='w-full mt-5 flex  flex-col  md:flex-row '>
    <Box className='w-full h-[200px] text-green-500 md:w-[50%] md:text-center '>
      <Text className='text-2xl font-bold'>What are We about</Text>
      <Text>Foodies hub is a place where you can please your 
      <Text>soul and turnary with delicious food reciepes</Text>
      <Text> of all our service is absolutly free so start </Text>
      <Text>explore now</Text>
      <Button className='w-[100px] h-9 mt-2 text-white font-bold ' style={{backgroundColor:"#7FFF00"}}>explore now</Button>
      </Text>
    </Box>
    <Box className='grid w-full justify-center place-items-center gap-3 grid-cols-3 md:w-[30%]'>
          { hero.map((a)=>(
        <motion.Box className='h-[100px]'  key={a.image} data-aos-delay={a.delay} data-aos="fade-right">
          <img className="h-full w-full"src={a.image}/>
        </motion.Box> 
        )) }
    </Box>
  </Box>
  )
}

export default Hero
