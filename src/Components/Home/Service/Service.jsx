import Box from '../../Box';
import Text from '../../Text';
import { servicearray } from './Servicearray';
import { motion } from 'framer-motion';

function Service() {
  return (
    // Outer container for the service section
    <Box className='w-full mt-5 py-3'>
      
      {/* Section Heading */}
      <Text className='text-3xl font-bold text-green-500 text-center'>
        Our Service
      </Text>

      {/* Responsive Grid Layout: 1 column on mobile, 3 on medium screens, 5 on large screens */}
      <Box className='w-full grid mt-5 gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>

        {/* Loop through each service item from the array */}
        {servicearray.map((a) => (
          <motion.Box
            key={a.icon}
            // Animate each box using AOS (Animate On Scroll) and Framer Motion
            data-aos="fade-right"
            data-aos-delay={a.delay}
            className='space-y-2 py-2 text-center border-2 border-green-500 
                       text-green-500 place-items-center justify-center cursor-pointer'
          >
            {/* Icon */}
            <Text className='text-green-500 mx-auto'>{a.icon}</Text>

            {/* Title */}
            <Text className='font-bold'>{a.title}</Text>

            {/* Description */}
            <Text>{a.des}</Text>
          </motion.Box>
        ))}
      </Box>
    </Box>
  );
}

export default Service;
