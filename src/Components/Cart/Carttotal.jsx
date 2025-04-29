import {  useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Box from '../Box'
import Text from '../Text'
import Button from '../Button'

function Carttotal() {
    const cartclass="'w-full font-bold  text-green-500  flex justify-between"
    const{cartproducts,totalprice}=useSelector(state=>state.cart)
  return (
  <Box className='w-full md:w-[30%] lg:w-[20%] h-[250px] border-2 place-content-center border-green-500 space-y-5 px-2 bg-black'>
    <Box className={cartclass}>Total items:<span>{cartproducts.length}</span></Box>
      <Text className={cartclass}>Subtotal:<span>₹{totalprice}</span></Text>
      <Text className={cartclass}>Total:<span>₹{totalprice}</span></Text>
      <Box className='w-full justify-center text-center flex text-sm text-green-500 gap-3'>
        <Button  className='border-2 font-bold  border-green-500 w-[120px] h-11'>paynow ₹{totalprice}</Button>
        <Link className='no-underline' to="/reciepe">
          <Button className='border-2 font-bold  w-[120px] border-green-500 h-11'>continue to shop</Button>
        </Link> 
      </Box> 
    </Box>
    
  )
}

export default Carttotal
