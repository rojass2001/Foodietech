import React from 'react'
import Hero from './Hero'
import Culniraryskill from './Culniraryskill'
import Foodquote from './Foodquote'
import Ourtopchef from './Ourtopchef'
import Service from './Service/Service'

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
