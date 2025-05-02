import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { topchef } from './Topchefarray';
import Box from '../Box';
import Text from '../Text';
import { motion } from 'framer-motion';

function Ourtopchef() {
  return (
    // Main container for the top chefs section, using a grid layout with responsive columns
    <Box className='w-full text-green-500 grid gap-5 grid-cols-1 md:grid-cols-3'>
      
      {/* Iterate through the topchef array and display each chef's information */}
      {topchef.map((a) => (
        <motion.Box 
          className='flex border-2 border-green-500 h-[100px]' 
          key={a.name} 
          data-aos-delay={a.delay} // Delay animation for each chef's box
          data-aos="fade-right"  // Animation effect on scroll
        >   
          {/* Chef's Image */}
          <img className='w-[30%] h-full' src={a.image} alt={`${a.name} profile`} />
          
          <Box>
            {/* Chef's Name */}
            <Text className='font-bold text-xl'>{a.name}</Text>

            {/* Chef's Recipe and Cuisine */}
            <Text>{a.reciepe}</Text>
            <Text>{a.cusions}</Text>

            {/* Social Media Links: Facebook and Instagram icons */}
            <Box className='w-full flex gap-1'>
              <FaFacebook />
              <FaInstagram />
            </Box>
          </Box>
        </motion.Box>
      ))}
    </Box>
  );
}

export default Ourtopchef;
