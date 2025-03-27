/* eslint-disable react/prop-types */
import { FaCartShopping, FaIndianRupeeSign } from 'react-icons/fa6'
import { addtocart } from '../redux/Cartslice'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setproductdetails } from '../redux/Productslice'

function Card({product}) {
    const dispatch=useDispatch()
  return (
    <div>
     <Link to="/details">
      <div onClick={()=>dispatch(setproductdetails(product))}  className='h-[250px]  text-green-500 border-2
             bg-black rounded-lg space-y-2 text-center border-green-500 
             transform transition-all duration-300 hover:scale-110  ' >
              <img className='h-[50%] rounded-lg w-full' src={product.image} alt="hcncn"/>
              <p className='font-bold'>{product.name}</p>
              <p className='font-bold'>₹{product.price}</p>
          <div className='w-full justify-center '>
             <div onClick={()=>dispatch(addtocart(product))}className=' w-[100px] py-2 h-[40px] 
              place-content-center place-items-center text-center border-2 border-green-500 mx-auto rounded-lg'>
                <FaCartShopping className='text-2xl mx-auto '/>
              </div>
          </div>    
      </div>
     </Link>
    </div>
  )
}

export default Card
