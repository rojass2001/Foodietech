
import Categories from '../categories/Categories'
import { useDispatch, useSelector } from 'react-redux'
import { setproductdetails } from '../../redux/Productslice'
import { addtocart } from '../../redux/Cartslice'
import { FaCartShopping, FaIndianRupeeSign } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Searchfilter() {
    const {filterproducts}=useSelector(state=>state.product)
    const dispatch=useDispatch()
    const singleproduct=(a)=>{
        dispatch((setproductdetails(a)))
       
        
      }
  return (
    <>
    <div className='w-full mt-[80px]' >
    <Categories/>
    {filterproducts.length<1&&
    <div className='w-full min-h-screen pt-10 text-center text-3xl font-bold text-green-500'>No search Found</div>

    }
       <div className='w-full mt-5 px-6 md:px-6 min-h-screen  gap-10  grid md:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
          {/* card reciepes*/}
          { filterproducts?.map((a)=>(
            // eslint-disable-next-line react/jsx-key
            <Link to="/details">
            <div onClick={()=>singleproduct(a)}  className='h-[250px]  text-green-500 border-2
             bg-black rounded-lg space-y-2 text-center border-green-500 
             transform transition-all duration-300 hover:scale-110  '  key={a.id}>
              <img className='h-[50%] rounded-lg w-full' src={a.image} alt="hcncn"/>
              <p className='font-bold'>{a.name}</p>
              <div className='w-full justify-center flex items-center'>
              <FaIndianRupeeSign/>
              <p className='font-bold'>{a.price}</p>
              
              </div>
              <div className='w-full justify-center place-items-center'>
                  <div onClick={()=>dispatch(addtocart(a))}className=' w-[100px] py-3 h-[40px] place-content-center place-items-center text-center border-2 border-green-500 mx-auto  rounded-lg'>
                    <FaCartShopping className='text-2xl mx-auto '/>
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

export default Searchfilter
