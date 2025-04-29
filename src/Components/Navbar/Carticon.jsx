import { Link } from 'react-router-dom'
import Button from '../Button'
import { FaCartShopping } from 'react-icons/fa6'
import Box from '../Box'
import { useSelector } from 'react-redux'

function Carticon() {
     const{cartproducts}=useSelector(state=>state.cart)
  return (
    <>
  <Link to="/cart">
    <Button className='relative'>
      <FaCartShopping  className='text-green-500 text-2xl mt-1'/>
        {cartproducts.length>0&&
          <Box className='absolute bg-white flex p-1 items-center rounded-full w-4 top-[-6px]  right-[-5px] h-4 animate-bounce'>
            {cartproducts.length}
          </Box>
         }
    </Button>
   </Link>
    </>
  )
}

export default Carticon
