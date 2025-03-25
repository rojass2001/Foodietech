import React from 'react'
import Hero from '../Components/Home/Hero'
import Culniraryskill from '../Components/Home/Culniraryskill'
import Foodquote from '../Components/Home/Foodquote'
import Ourtopchef from '../Components/Home/Ourtopchef'
import Service from '../Components/Home/Service/Service'

function Home() {
  return (
   <>
   
   <div className='w-full mt-[100px] md:[80px] px-2'>
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
