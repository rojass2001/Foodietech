
import { useEffect,  } from 'react'
import Categories from '../categories/Categories'
import { useDispatch, useSelector } from 'react-redux'
import { products } from '../../Reciepelist'
import { setproducts,setproductdetails } from '../../redux/Productslice'
import { addtocart } from '../../redux/Cartslice'
import { FaCartShopping, FaIndianRupeeSign } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
function Reciepes() {
 const {allproducts}=useSelector(state=>state.product)
     const dispatch=useDispatch()
     const singleproduct=(a)=>{
       dispatch((setproductdetails(a)))
     }
  useEffect(()=>{
    dispatch(setproducts(products))
    
    },[])


  return (
    <>
   <div className='w-full mt-[80px]'>
    <Categories/>
  <div className='w-full mt-5 px-6 md:px-6  gap-10  grid md:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    data-aos="fade-up" data-aos-delay="100">
        {/* card reciepes*/}
        { allproducts?.map((a)=>(
          // eslint-disable-next-line react/jsx-key
          <Link to="/details">
          <div onClick={()=>singleproduct(a)}  className='h-[250px] cursor-pointer  text-green-500 border-2
           bg-black rounded-lg space-y-2 text-center justify-center 
            place-items-center border-green-500  transform transition-all duration-300  hover:scale-110 '  key={a.id}>
            <img className='h-[50%] rounded-lg w-full' src={a.image} alt="hcncn"/>
            <p className='font-bold'>{a.name}</p>
            <div className='w-full justify-center flex items-center'>
            <FaIndianRupeeSign/>
            <p className='font-bold'>{a.price}</p>
            
            </div>
            <div className='w-full text-center py-1  justify-center place-items-center'>
            <div onClick={()=>dispatch(addtocart(a))}className='w-[100px] h-[40px] text-center
             place-items-center place-content-center  border-2 border-green-500 
            rounded-lg'><FaCartShopping className='text-2xl mx-auto '/>
            </div>
            </div>
            
          </div>
          </Link>
         
         
    ))}
        </div>

    </div>
    </>
  )
}

export default Reciepes
