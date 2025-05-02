import Box from "../Box";
import Button from "../Button";
import Text from "../Text";
import { hero } from "./Heroarray";
import { motion } from "framer-motion";

function Hero() {
  return (
    // Main container with vertical layout on small screens and horizontal on medium and up
    <Box className='w-full mt-5 flex flex-col md:flex-row'>

      {/* Left Section: Text content */}
      <Box className='w-full h-[200px] text-green-500 md:w-[50%] md:text-center'>
        {/* Heading */}
        <Text className='text-2xl font-bold'>What are We about</Text>

        {/* Description with nested Text for structure */}
        <Text>
          Foodies hub is a place where you can please your 
          <Text>soul and tummy with delicious food recipes.</Text>
          <Text>All our services are absolutely free, so start</Text>
          <Text>exploring now.</Text>

          {/* Call to Action Button */}
          <Button 
            className='w-[100px] h-9 mt-2 text-white font-bold'
            style={{ backgroundColor: "#7FFF00" }}
          >
            explore now
          </Button>
        </Text>
      </Box>

      {/* Right Section: Grid of hero images */}
      <Box className='grid w-full justify-center place-items-center gap-3 grid-cols-3 md:w-[30%]'>
        {hero.map((a) => (
          <motion.Box
            className='h-[100px]'
            key={a.image}
            data-aos-delay={a.delay}
            data-aos="fade-right"
          >
            <img className="h-full w-full" src={a.image} alt="hero visual" />
          </motion.Box>
        ))}
      </Box>

    </Box>
  );
}

export default Hero;
