/* eslint-disable react/prop-types */
import { FaCartShopping } from 'react-icons/fa6'
import { addtocart } from '../redux/Cartslice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setproductdetails } from '../redux/Productslice'
import Box from './Box'
import Text from './Text'
import Button from './Button'

function Card({ product }) {
  const dispatch = useDispatch()

  return (
    <Box className="h-[250px] bg-black text-green-500 border-2 text-center rounded-lg
      border-green-500  transform transition-all duration-300 hover:scale-110">
      {/* Link to product details page */}
      <Link to="/details">
        <Box
          onClick={() => dispatch(setproductdetails(product))}
          className="  h-[80%] w-full  space-y-2 "
        >
          {/* Product Image */}
          <img className="h-[60%] rounded-lg w-full" src={product.image} alt={product.name} />
          
          {/* Product Name and Price */}
          <Text className="font-bold">{product.name}</Text>
          <Text className="font-bold">₹{product.price}</Text>
        </Box>
      </Link>
       {/* Add to Cart Button */}
          <Box className="w-full justify-center text-green-500 flex items-center place-content-center text-center">
            <Button
              onClick={() => {
                dispatch(addtocart(product))
              }}
              className="w-[100px] py-2 h-[40px] border-2 border-green-500 mx-auto rounded-lg"
            >
              <FaCartShopping className="text-2xl mx-auto" />
            </Button>
          </Box>
    </Box>
  )
}

export default Card
