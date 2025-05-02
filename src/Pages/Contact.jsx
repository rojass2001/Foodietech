import Box from '../Components/Box';
import Button from '../Components/Button';
import useAuthentication from '../customhooks/useAuth';
import Form from '../Components/Form';
import Text from '../Components/Text';

function Contact() {
 const{contactSubmit}=useAuthentication()

  return (
    <Box className="w-full pt-[110px] md:pt-[60px]">
      <Box className="w-full p-3 flex items-center justify-center font-bold bg-gray-950 text-3xl text-green-500 text-center">
        Contact
      </Box>
      
      <Form className="w-full bg-black py-5 px-2 md:px-12" onsubmit={contactSubmit}>
        <Box className="w-full space-y-3 md:border-2 md:border-green-500 md:py-3 px-1 md:px-[100px]">
          <Text className="font-bold mb-5 text-center md:text-start text-[24px]">
            Fill Up The Form
          </Text>
          
          <Box className="w-full gap-8 flex flex-col md:flex-row md:gap-12">
            <input
              className="md:w-[60%] font-bold h-10 border-[1px] placeholder-green-500 bg-black text-green-500 border-green-600 outline-none w-full"
              required
              placeholder="Name"
              type="text"
            />
            <input
              className="md:w-[60%] h-10 text-green-500 placeholder-green-500 bg-black font-bold border-[1px] border-green-600 outline-none w-full"
              required
              placeholder="Email"
              type="email"
            />
          </Box>

          <input
            className="w-full h-10 text-green-500 placeholder-green-500 font-bold bg-black mt-5 border-[1px] border-green-600 outline-none"
            required
            placeholder="Subject"
            type="text"
          />

          <textarea
            className="w-full h-32 text-green-500 placeholder-green-500 border-[1px] bg-black mt-10 border-green-600 outline-none"
            required
            placeholder="Write message here"
          />

          <Button
            type="submit"
            className="font-bold h-14 text-center px-3 rounded-lg mt-4 text-white bg-green-600"
          >
            Submit Request
          </Button>
        </Box>
      </Form>
    </Box>
  );
}

export default Contact;
