
import { servicearray } from './Servicearray'
function Service() {
  return (
    <div className='w-full mt-5 '>
    <p className='text-3xl font-bold text-green-500 text-center'>Our Service</p>
    <div className='w-full grid mt-5 gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
      {servicearray.map((a)=>(
      <div className='space-y-2  py-2 text-center border-2 place-items-center
       border-green-500 justify-center cursor-pointer text-green-500' data-aos="fade-right" data-aos-delay={a.delay} key={a.icon}>
    <p className='text-green-500'>{a.icon}</p>
    <p className='font-bold'>{a.title}</p>
    <p>{a.des}</p>    
      </div>
      ))}
    </div>
   
    </div>
  )
}

export default Service
