import { FaTrash } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { cartincrease, cartdecrease, removecart } from '../redux/Cartslice'
import Carttotal from '../Components/Cart/Carttotal'
import Cartempty from '../Components/Cart/Cartempty'
import Cartheading from '../Components/Cart/Cartheading'
import { useEffect } from 'react'
import useAuthentication from '../customhooks/useAuth'
import Box from '../Components/Box'
import Text from '../Components/Text'
import Button from '../Components/Button'

// Style for quantity adjustment buttons
const quantityButtonStyle = "border-2 border-green-500 px-5"

function Cart() {
  const { cartAuthentication } = useAuthentication()  // Custom hook for user authentication
  const dispatch = useDispatch()
  const { cartproducts } = useSelector((state) => state.cart) // Fetch cart products from Redux store

  // Perform authentication check on component mount
  useEffect(() => {
    cartAuthentication()
  }, [])

  return (
    <Box className='w-full mt-[85px] min-h-screen'>
      <Cartheading />

      {/* Display empty cart message if no products are in the cart */}
      {cartproducts.length < 1 ? (
        <Cartempty />
      ) : (
        // Display cart items if there are products
        <Box className='w-full flex flex-col-reverse gap-4 md:flex-row p-2 md:justify-around'>
          <Box className='w-full md:w-[60%] transform transition-all duration-300 hover:scale-105'>
            {/* Map through cart products and display each item */}
            {cartproducts.map((product) => (
              <Box
                className='w-full flex border-2 border-green-500 mb-3 p-1 md:p-5 bg-black'
                key={product.id}
              >
                {/* Product Image */}
                <img className="w-[45%] h-[180px]" src={product.image} alt={product.name} />

                <Box className='w-[70%] pl-3 space-y-3 text-green-500 font-bold'>
                  {/* Product Name */}
                  <Text className='text-xl'>{product.name}</Text>
                  {/* Product Price */}
                  <Text className='flex text-[19px]'>₹{product.price}</Text>

                  <Box className='flex items-center gap-1'>
                    {/* Decrease Quantity Button */}
                    <Button onClick={() => dispatch(cartdecrease(product.id))} className={quantityButtonStyle}>
                      -
                    </Button>
                    {/* Display Quantity */}
                    {product.quantity}
                    {/* Increase Quantity Button */}
                    <Button onClick={() => dispatch(cartincrease(product.id))} className={quantityButtonStyle}>
                      +
                    </Button>
                  </Box>

                  {/* Subtotal for the product */}
                  <Text className='flex items-center text-[15px]'>Subtotal: ₹{product.subtotal}</Text>

                  {/* Remove product from cart */}
                  <Box className='w-16 h-9 p-1 flex justify-center items-center border-2 border-green-500'>
                    <FaTrash
                      className='mx-auto text-xl'
                      onClick={() => dispatch(removecart(product))}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Cart Total */}
          <Carttotal />
        </Box>
      )}
    </Box>
  )
}

export default Cart
