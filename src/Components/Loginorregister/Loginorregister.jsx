
import { Link } from 'react-router-dom'

function Loginorregister({logdetails,buttonname,link}) {
  return (
    <div className=' w-full min-h-screen px-2 place-content-center place-items-center '>
    <div className='w-full md:w-[45%] lg:w-[23%] space-y-3 bg-black text-green-500 min-h-[250px]   border-green-500 border-[4px]  p-5'>
    <label className='font-bold '>Enter Email</label>
    <input  placeholder='enter your usename'  className='w-full h-9'/>
    <label className='font-bold mt-1'>Enter password</label>
    <input   placeholder='enter your password'  className='w-full h-9'/>
   <Link to={link}> <p className='text-sm underline text-center mt-2'>{logdetails}</p></Link>
   <div className='w-full text-center'>
    <button className='border-2 px-4 py-1 font-bold border-green-500 '>{buttonname}</button>
    </div>
    </div>
      
    </div>
  )
}

export default Loginorregister
