import React from 'react'
import { servicearray } from './Servicearray'
function Service() {
  return (
    <div className='w-full mt-5 '>
    <p className='text-3xl font-bold text-white text-center'>Our Service</p>
    <div className='w-full grid mt-5 gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
      {servicearray.map((a)=>(
      <div className='space-y-2  py-2 text-center border-2 place-items-center
       border-white  cursor-pointer text-white' data-aos="fade-right" data-aos-delay={a.delay}>
    <p className=''>{a.icon}</p>
    <p className='font-bold'>{a.title}</p>
    <p>{a.des}</p>    
      </div>
      ))}
    </div>
   
    </div>
  )
}

export default Service
