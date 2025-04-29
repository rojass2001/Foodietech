import Box from "../Box"
import Text from "../Text"

function Cartempty() {
  return (
    <Box className='w-full pt-[70px] text-center min-h-screen'>
      <Text className='text-4xl text-green-500 font-bold'>Your cart is empty</Text>
    </Box>
  )
}

export default Cartempty
