
import { useEffect, useState,  } from 'react'
import Categories from '../Components/categories/Categories'
import { useDispatch, useSelector } from 'react-redux'
import { products } from '../Reciepelist'
import { setproducts} from '../redux/Productslice'
import Card from '../Components/Card'
function Reciepes() {
 const {allproducts}=useSelector(state=>state.product)
 const dispatch=useDispatch()
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
              { allproducts?.map((product)=>(
                <Card product={product} key={product.id} />
              ))}
        </div>

  </div>
    </>
  )
}

export default Reciepes
