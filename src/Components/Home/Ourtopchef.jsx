import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { topchef } from './Topchefarray'

function Ourtopchef() {
  return (
    <>
    <div className='w-full text-green-500 grid gap-5 grid-cols-1 md:grid-cols-3'>
      {topchef.map((a)=>(
       <div className='flex  border-2 border-green-500 h-[100px] ' key={a.name} data-aos-delay={a.delay} data-aos="fade-right" >   
          <img className='w-[30%] h-full' src={a.image}/>
          <div>
            <p className='font-bold text-xl'>{a.name}</p>
            <p>{a.reciepe}</p>
            <p>{a.cusions}</p>
            <div className='w-full flex gap-1'><FaFacebook/><FaInstagram/></div>
          </div>
       </div>
        )) }
    </div>
    </>
  )
}

export default Ourtopchef
