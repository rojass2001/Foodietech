import React from 'react'

function Logins() {
  return (
    <div className='w-full min-h-screen  flex items-center place-content-center'>
      <div className='w-full md:w-[50%] place-items-center place-content-center flex flex-col  bg-black py-20 px-10  min-h-[500px]'>
      <div className='w-full h-9 text-sm flex mb-8 gap-3 items-center justify-center bg-white  rounded-full md:w-[60%]'>
        <img className='h-6 w-6' src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png"/>
       <p className='font-bold'>sign in with google</p>
      </div>

      <div className='w-full h-9 text-sm mb-8 flex gap-3 items-center justify-center bg-white  rounded-full md:w-[60%]'>
        <img className='h-10 w-10' src="https://download.logo.wine/logo/Apple_Inc./Apple_Inc.-Logo.wine.png"/>
       <p className='font-bold'>sign in with google</p>
      </div>
      <button className='w-full md:w-[60%] mb-8 font-bold h-9  rounded-full text-sm text-white bg-green-500  '>Next</button>
      
      <div className='w-full h-9 border-[1px] border-green-500 text-white
        rounded-full text-center place-content-center md:w-[60%]'>forget password</div>
      </div>
    </div>
  )
}

export default Logins
