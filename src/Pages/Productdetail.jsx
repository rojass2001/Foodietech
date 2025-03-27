import { useDispatch, useSelector } from 'react-redux'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { increaseproduct,decreaseproduct } from '../redux/Productslice'
import { addtocart } from '../redux/Cartslice'

function Productdetail() {
  const dispatch=useDispatch()
  const {productcontain}=useSelector(state=>state.product)
  const quantitybutton="border-2 border-green-500 px-5";
  const button="w-[100px]  h-[40px] border-2 border-green-500"

  return (
    <>
<div className='w-full place-items-center px-2  min-h-screen mt-[120px]'>
   <div className='w-full border-2 p-3 text-center justify-center md:justify-start md:text-first flex flex-col
    bg-black  md:flex-row gap-4 border-green-500 h-[570px] lg:h-[380px] lg:w-[60%]'>
      <img className=' h-[150px] md:h-full w-full md:w-[40%]' src={productcontain?.image}/>
      <div className='space-y-2 text-green-500 font-bold 
            place-items-center text-center md:text-first md:place-items-start w-full  md:w-[50%]'>
            <p className='text-2xl'>{productcontain?.name}</p>
            <p className='text-xl'>₹{productcontain?.price}</p>
            <p className='md:text-start'>{productcontain.des}</p>
          <button onClick={()=>dispatch(decreaseproduct(productcontain?.price))} className="border-2 rounded-l-full
       border-green-400 w-14 h-7  mr-2">-</button>
          {productcontain?.quantity}
          <button onClick={()=>dispatch(increaseproduct(productcontain?.price))}className="border-2 rounded-r-full
          border-green-400 w-14 h-7 ml-2">+</button>
          <p>Subtotal :₹{productcontain?.subtotal}</p>
          <button onClick={()=>dispatch(addtocart(productcontain))}  className={`${button} mr-5`}>add to cart</button>
          <button className={button} >Buy now</button>
         
        </div>
  </div>
</div>
 

    </>
  )
}

export default Productdetail
