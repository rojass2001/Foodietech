import { FaIndianRupeeSign } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Carttotal() {
    const cartclass="'w-full font-bold  text-green-500  flex justify-between"
    const{cartproducts,totalprice}=useSelector(state=>state.cart)
    const dispatch=useDispatch() 
  return (
  <div className='w-full md:w-[30%] lg:w-[20%] h-[250px] border-2 place-content-center
      border-green-500 space-y-5 py-3  px-2 bg-black'>
    <div className={cartclass}>Total items:<span>{cartproducts.length}</span></div>
      <div className={cartclass}>Subtotal:<span className='flex items-center'><FaIndianRupeeSign/>
        {totalprice}</span>
      </div>
      <div className={cartclass}>Total:<span className='flex items-center'><FaIndianRupeeSign/>
        {totalprice}</span>
      </div>
      <div className='w-full justify-center text-center flex text-sm text-green-500 gap-3'>
        <button  className='border-2 font-bold  border-green-500 w-[120px] h-11'>paynow{totalprice}</button>
        <Link className='no-underline' to="/reciepe">
        <button className='border-2 font-bold  w-[120px] border-green-500 h-11'>continue to shop</button>
        </Link> 
      </div> 
    </div>
  )
}

export default Carttotal
