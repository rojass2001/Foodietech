import { Link } from 'react-router-dom'
import Button from '../Button'
import { FaCartShopping } from 'react-icons/fa6'
import Box from '../Box'
import { useSelector } from 'react-redux'

function Carticon() {
  // Get cart products from the Redux store
  const { cartproducts } = useSelector(state => state.cart)

  return (
    <>
      {/* Link to the cart page */}
      <Link to="/cart">
        <Button className='relative'>
          {/* Cart icon from react-icons */}
          <FaCartShopping className='text-green-500 text-2xl mt-1' />
          
          {/* Show item count in the cart if there are products */}
          {cartproducts.length > 0 && (
            // A small badge showing the number of items in the cart
            <Box className='absolute bg-white flex p-1 items-center rounded-full w-4 top-[-6px] right-[-5px] h-4 animate-bounce'>
              {cartproducts.length} {/* Display the count */}
            </Box>
          )}
        </Button>
      </Link>
    </>
  )
}

export default Carticon
