import { FaLock } from "react-icons/fa"
import { IoIosContact } from "react-icons/io"
import { Link } from "react-router-dom"

function Loginorregister({des,buttonname,link}) {
    return (
      <div className=' w-full min-h-screen pb-5 px-2 pt-[120px] place-content-center place-items-center '>
      <form className='w-full md:w-[50%] lg:w-[23%] bg-black space-y-4 border-[5px] border-green-500
      place-content-center rounded-lg text-green-500 min-h-[330px]   p-3'>
      <label className='font-bold '>Enter Email</label>
     <div className="w-full flex  items-center h-14 pr-1 place-content-center border-2 border-green-500">
      <IoIosContact className="mt-1 text-green-500"size={29}/>
       <input placeholder='enter your username @gmail.com'className='w-full bg-black outline-none mt-1 h-12 md:h-9'/></div>
      <label className='font-bold'>Enter password</label>
      <div className="w-full flex gap-1  items-center h-14 pr-1 place-content-center border-2 border-green-500">
      <FaLock className="mt-1 text-green-500"size={20}/>
      <input type="password"placeholder='enter your password'className='w-full bg-black outline-none mt-1 h-12 md:h-9'/>  
      </div>
    <Link to={link}> <p className='text-sm font-bold underline text-center mt-2'>{des}</p></Link>
     <div className='w-full mt-2 text-center'>
      <button className=' px-8 py-2 font-bold text-white bg-green-500 '>{buttonname}</button>
      </div>
      </form>
        
      </div>
    )
  }
  
  export default Loginorregister