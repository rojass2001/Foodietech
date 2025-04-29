import { useDispatch, useSelector } from 'react-redux'
import { increaseproduct,decreaseproduct } from '../redux/Productslice'
import { addtocart } from '../redux/Cartslice'
import Box from '../Components/Box'
import Text from '../Components/Text'
import Button from '../Components/Button'
const button = "w-[100px]  h-[40px] border-2 border-green-500"

function Productdetail() {
  const dispatch=useDispatch()
  const {productcontain}=useSelector(state=>state.product)
 return (
  <Box className='w-full place-items-center px-2  min-h-screen mt-[120px]'>
   <Box className='w-full border-2 p-3 text-center justify-center md:justify-start md:text-first flex flex-col
    bg-black  md:flex-row gap-4 border-green-500 h-[570px] lg:h-[380px] lg:w-[60%]'>
      <img className=' h-[150px] md:h-full w-full md:w-[40%]' src={productcontain?.image}/>
      <Box className='space-y-2 text-green-500 font-bold place-items-center text-center md:text-first md:place-items-start w-full  md:w-[50%]'>
          <Text className='text-2xl'>{productcontain?.name}</Text>
          <Text className='text-xl'>₹{productcontain?.price}</Text>
          <Text className='md:text-start'>{productcontain.des}</Text>
          <Button onClick={()=>dispatch(decreaseproduct(productcontain?.price))} className="border-2 rounded-l-full
         border-green-400 w-14 h-7  mr-2">-</Button>
          {productcontain?.quantity}
          <Button onClick={()=>dispatch(increaseproduct(productcontain?.price))}className="border-2 rounded-r-full
          border-green-400 w-14 h-7 ml-2">+</Button>
          <Text>Subtotal :₹{productcontain?.subtotal}</Text>
          <Button onClick={()=>dispatch(addtocart(productcontain))}  className={`${button} mr-5`}>add to cart</Button>
          <Button className={button} >Buy now</Button>
        </Box>
    </Box>
  </Box>
  )
}

export default Productdetail
