import React from 'react'
import { Link } from 'react-router-dom'

function Loginorregister({logdetails,buttonname,link}) {
  return (
    <div className=' w-full h-screen place-content-center p-5 place-items-center '>
    <div className='w-full md:w-[45%] lg:w-[23%] space-y-2 bg-black text-green-500 min-h-[250px]   border-green-500 border-[4px]  p-5'>
    <label className='font-bold ' for="emails">Enter Email</label>
    <input placeholder='enter your usename' name="emails" className='w-full h-7'/>
    <label className='font-bold' for="pass">Enter password</label>
    <input  placeholder='enter your password' name="pass" className='w-full h-7'/>
   <Link to={link}> <p className='text-sm underline text-center'>{logdetails}</p></Link>
   <div className='w-full text-center'>
    <button className='border-2 px-4 py-1 font-bold border-green-500 '>{buttonname}</button>
    </div>
    </div>
      
    </div>
  )
}

export default Loginorregister
