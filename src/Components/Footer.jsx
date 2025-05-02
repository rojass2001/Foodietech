import { FaFacebook, FaGithubAlt, FaInstagram, FaTwitter } from 'react-icons/fa6'; // Importing social media icons
import Box from './Box'; // Box component for layout and styling
import Text from './Text'; // Text component for text elements
import Button from './Button'; // Button component for actions

function Footer() {
  return (
    // Footer container with styling, grid layout for different screen sizes
    <footer className='w-full py-2 px-1 bg-slate-900 text-white grid gap-x-2 gap-y-2 md:gap-10 grid-cols-2 md:grid-cols-3'>
      
      {/* First section - Company Information */}
      <Box className='h-[200px] text-sm pt-2 font-bold space-y-2 text-start md:text-center'>
        <Text className='text-2xl font-bold'>Foodies Hub</Text> 
        <Text>
          Foodies hub is a place where you can please your soul and tummy with delicious food
          recipes of all cuisine, and our service is absolutely free.
        </Text>   
      </Box> 

      {/* Second section - Contact Information */}
      <Box className='h-[200px] pt-2 text-sm font-bold space-y-2 text-start md:text-center'>
        <Text className='text-2xl font-bold'>Contact Us</Text> 
        <Text>Foodieshub@gmail.com</Text>
        <Text>+9656213935</Text>
        <Text>Idukki street 685553</Text>
      </Box> 

      {/* Third section - Social Media Links & Feedback Form */}
      <Box className='h-[200px] pt-2 space-y-4 text-center font-bold'>
        <Text className='text-2xl font-bold'>Social Links</Text> 
        {/* Social Media Icons */}
        <Box className='w-full flex text-3xl items-center justify-center gap-3'>
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaGithubAlt />
        </Box>

        {/* Feedback Form */}
        <Box className='flex w-full gap-2 justify-center'>
          <input className='w-[100%] md:w-[40%] h-7' placeholder='Write your feedback'></input>
          <Button className='w-[50%] md:w-[30%] h-7 bg-green-500'>Subscribe</Button>
        </Box>
      </Box> 

    </footer>
  );
}

export default Footer;
