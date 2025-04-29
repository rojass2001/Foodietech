/* eslint-disable react/prop-types */
import { FaCartShopping } from 'react-icons/fa6'
import { addtocart } from '../redux/Cartslice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setproductdetails } from '../redux/Productslice'
import Box from './Box'
import Text from './Text'

function Card({product}) {
    const dispatch=useDispatch()
  return (
    <Box>
     <Link to="/details">
      <Box onClick={()=>dispatch(setproductdetails(product))}  className='h-[250px]  text-green-500 border-2
             bg-black rounded-lg space-y-2 text-center border-green-500 
             transform transition-all duration-300 hover:scale-110  ' >
              <img className='h-[50%] rounded-lg w-full' src={product.image} alt="hcncn"/>
              <Text className='font-bold'>{product.name}</Text>
              <Text className='font-bold'>₹{product.price}</Text>
          <Box className='w-full justify-center '>
             <Box onClick={()=>dispatch(addtocart(product))}className=' w-[100px] py-2 h-[40px] 
                place-content-center place-items-center text-center border-2 border-green-500 mx-auto rounded-lg'>
                <FaCartShopping className='text-2xl mx-auto '/>
              </Box>
          </Box>    
      </Box>
     </Link>
    </Box>
  )
}

export default Card
