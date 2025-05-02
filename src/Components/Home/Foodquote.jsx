import Box from "../Box";
import Text from "../Text";

function Foodquote() {
  return (
    // Wrapper Box for the quote section, with vertical spacing and centered green text
    <Box className='w-full mb-5 text-center mt-[80px] text-green-500'>

      {/* First line of the quote */}
      <Text>
        <span className='text-3xl'></span>
        Food is everything we are. It's an extension of nationalist feelings, ethnic feeling.
      </Text>

      {/* Second line of the quote */}
      <Text>
        Your personal history, your province, your region, your tribe, your grandma. It's inseparable from those from the
      </Text>

      {/* Third line of the quote */}
      <Text>
        get go<span className='text-2xl'></span>
      </Text>
    </Box>
  );
}

export default Foodquote;
