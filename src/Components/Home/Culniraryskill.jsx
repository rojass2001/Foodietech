import { Link } from "react-router-dom";
import { learnreciepe } from "./Learreciepearray";
import Box from "../Box";
import Text from "../Text";
import Button from "../Button";
import { motion } from "framer-motion";

function Culniraryskill() {
  return (
    // Outer container: vertical on small screens, horizontal on medium and up
    <Box className='w-full mt-5 flex gap-10 place-items-center justify-center flex-col md:flex-row'>

      {/* Left Section: Image */}
      <Box className='w-full h-[250px] md:w-[40%]'>
        <img
          className='h-full w-full'
          data-aos="zoom-in"
          src="https://static.fanpage.it/wp-content/uploads/sites/22/2020/05/iStock-1093661558.jpg"
          alt="culinary"
        />
      </Box>

      {/* Right Section: Text and Skills List */}
      <Box className='w-full text-green-500 font-bold h-[250px] md:w-[40%]'>

        {/* Headings */}
        <Text className='text-3xl'>Improve Your</Text>
        <Text className='text-3xl'>Culinary Skills</Text>

        {/* Skills List - Animated */}
        {learnreciepe.map((a) => (
          <motion.Box
            className='w-full flex gap-2 mb-2'
            key={a.name}
            data-aos="fade-right"
            data-aos-delay={a.delay}
          >
            {/* Bullet line */}
            <Box className='w-3' style={{ backgroundColor: "#7FFF00" }}></Box>
            
            {/* Skill name */}
            <Box className='w-[90%]'>{a.name}</Box>
          </motion.Box>
        ))}

        {/* Sign In Button */}
        <Link to="/login">
          <Button
            className='w-[80px] h-10 text-white mt-5'
            style={{ backgroundColor: "#7FFF00" }}
          >
            Sign in
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Culniraryskill;
