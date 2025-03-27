import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='w-full pt-20  bg-black md:bg-gray-900 min-h-screen  flex items-center place-content-center'>
      <div className='w-full md:w-[50%] rounded-2xl items-center place-content-center flex flex-col  bg-black py-20 px-10  min-h-[500px]'>
      <div className='w-full h-9 text-sm flex mb-8 gap-3 items-center justify-center bg-white  rounded-full md:w-[60%]'>
        <img className='h-6 w-6' src="https://imagepng.org/wp-content/uploads/2019/08/google-icon.png"/>
       <p className='font-bold'>sign in with google</p>
      </div>

      <div className='w-full h-9 text-sm mb-8 flex gap-3 items-center justify-center bg-white  rounded-full md:w-[60%]'>
        <img className='h-10 w-10' src="https://download.logo.wine/logo/Apple_Inc./Apple_Inc.-Logo.wine.png"/>
       <p className='font-bold'>sign in with appleid</p>
      </div>
      <button className='w-full md:w-[60%] mb-8 font-bold h-9  rounded-full text-sm text-white bg-green-500  '>Next</button>
      
      <button className=' w-full text-green-400 mt-7 border-[1px] p-2 rounded-full border-green-500 md:w-[60%]'>forget password</button>
    <Link to="/register"> <p className='mt-7 cursor-pointer text-green-400'>Dont have account Please register</p></Link>
      </div>
    </div>
  )
}

export default Login
