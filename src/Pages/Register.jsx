import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='w-full pt-10 bg-black md:bg-gray-900 min-h-screen  flex items-center place-content-center'>
      <div className='w-full md:w-[50%] flex flex-col gap-12 px-10 py-20 items-center place-content-center
        rounded-2xl bg-black min-h-[500px]'>
        <input className='w-full bg-black border-[1px] pl-5 border-green-400 outline-none rounded-full
        md:w-[70%] h-11' placeholder='enter your email' type="email" />
        
        <input className='w-full bg-black border-[1px] pl-5 border-green-400 outline-none rounded-full
        md:w-[70%] h-11' placeholder='enter your password' type="password" />
        <button className='w-[70%] md:w-[50%] text-white rounded-full bg-green-500 p-2'>Register</button>

         <Link to="/login"><p className='text-green-400 underline'>already have account please login</p></Link> 
      </div>
    </div>
  )
}

export default Register

