import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productpopup } from '../../redux/Popup'
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
    <div className='w-full  h-screen z-30 place-content-center place-items-center absolute top-1 '>
        {/*productdetailcard */}
    <div className='w-full flex text-green-500 relative bg-black py-5 px-2 flex-col  md:w-[70%] lg:w-[50%] md:flex-row '>
    
    <p onClick={()=>dispatch(productpopup())} className=' cursor-pointer absolute text-2xl  top-0 right-2'>x</p>
    <img className=' h-[300px] md:h-[250px] w-full  md:w-[45%]' src={prodetail?.image}/>
    <div className=' w-full md:w-[60%] pl-2 space-y-2 text-center place-items-center md:place-items-start md:text-start'>
    <p className='font-bold text-xl'>{prodetail.name}</p>
    <p className='flex  font-bold items-center text-xl'>
    <span><FaIndianRupeeSign /></span>{prodetail.price}</p>
    <p>{prodetail.des?.slice(0,120)}</p>
    <div className='flex items-center gap-1 '>
    <button onClick={()=>dispatch(decreaseproduct(prodetail.price))} className={quantitybutton}>-</button>
    {prodetail.quantity}<button onClick={()=>dispatch(increaseproduct(prodetail.price))} className={quantitybutton}>+</button>
    </div>
    <div className='flex items-center gap-3'>
    <button className={button}>pay now</button>
    <button onClick={()=>dispatch(addtocart(prodetail))} className={button}>addtocart</button>
    </div>
    </div>
    </div>
    </div>

    </>
  )
}

export default Productdetail
