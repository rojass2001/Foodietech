import Categories from '../Components/categories/Categories'
import {  useDispatch, useSelector } from 'react-redux'
import Card from '../Components/Card'
import { useEffect } from 'react'
import { setproducts } from '../redux/Productslice'
import { products } from '../Reciepelist'

function Reciepes() {
  const { allproducts } = useSelector(state => state.product)
  const dispatch=useDispatch()
  useEffect(()=> {
    dispatch(setproducts(products))
  },[dispatch])
 return (
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
 )
}

export default Reciepes
