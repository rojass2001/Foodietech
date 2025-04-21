import Hero from '../Components/Home/Hero'
import Culniraryskill from '../Components/Home/Culniraryskill'
import Foodquote from '../Components/Home/Foodquote'
import Ourtopchef from '../Components/Home/Ourtopchef'
import Service from '../Components/Home/Service/Service'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setproducts } from '../redux/Productslice'
import { products } from '../Reciepelist'

function Home() {
  const dispatch=useDispatch()
  useEffect(()=> {
    dispatch(setproducts(products))
  },[dispatch])
  return (
  <>
    <div className='w-full mt-[120px] md:[80px] px-2'>
      <Hero/>
      <Culniraryskill/>
      <Foodquote/>
      <Ourtopchef/>
      <Service/>   
    </div>
  </>
  )
}

export default Home
