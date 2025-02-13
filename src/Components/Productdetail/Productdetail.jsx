import { useDispatch, useSelector } from 'react-redux'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { increaseproduct,decreaseproduct } from '../../redux/Productslice'
import { addtocart } from '../../redux/Cartslice'
function Productdetail() {
const prodetail=useSelector(state=>state.product.productcontain)
 const quantitybutton="border-2 border-green-500 px-5";
 const button="w-[100px]  h-[40px] border-2 border-green-500"
const dispatch=useDispatch()
  return (
    <>
  <div className='w-full place-items-center px-2  min-h-screen mt-[120px]'>
  <div className='w-full border-2 p-3  flex flex-col bg-black  md:flex-row gap-3
   border-green-500 h-[570px] lg:h-[380px] lg:w-[60%]'>
   <img className=' h-[150px] md:h-full w-full md:w-[40%]' src={prodetail.image}/>
     <div className='space-y-2 text-green-500 font-bold justify-center place-items-center text-center w-full  md:w-[50%]'>
      <p className='text-2xl'>{prodetail.name}</p>
      <p className='text-xl flex items-center'><FaIndianRupeeSign/>{prodetail.price}</p>
      <p>{prodetail.des}</p>
    <button onClick={()=>dispatch(decreaseproduct(prodetail.price))} 
    className={`rounded-l-full mr-2 ${quantitybutton }`}>-</button>
     {prodetail.quantity}
    <button onClick={()=>dispatch(increaseproduct(prodetail.price))}
    className={`rounded-r-full ml-2 ${quantitybutton }`}>+</button>
    <p className='flex items-center'>Subtotal :<FaIndianRupeeSign className='mt-1'/> {prodetail.subtotal}</p>
      <div className='flex items-center gap-2'>
     <button onClick={()=>dispatch(addtocart(prodetail))} className={button}>add to cart</button>
     <button className={button}>Buy now</button>
      </div>
      </div>
      </div>
  </div>
 

    </>
  )
}

export default Productdetail
