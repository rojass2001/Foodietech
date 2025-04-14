import { Link } from 'react-router-dom'
import useAuth from '../Components/customhooks/useAuth'
import useInput from '../Components/customhooks/useInput'

function Register() {
   
   const [values, handlechange] = useInput({
      email: "",
      password:""
    })
  const { registersubmit } = useAuth(values.email, values.password)
  
  return (
    <div className='w-full pt-10 bg-black md:bg-gray-900 min-h-screen  flex items-center place-content-center'>
      <div className='w-full md:w-[50%] flex flex-col gap-12 px-10 py-20 items-center place-content-center
        rounded-2xl bg-black min-h-[500px]'>
        <input onChange={handlechange} className='w-full bg-black border-[1px] pl-5 border-green-400 outline-none rounded-full
        md:w-[70%] h-11 text-green-400' name="email" value={values.email} placeholder='enter your email' type="email" />
        
        <input onChange={handlechange} name="password" className='w-full bg-black border-[1px] pl-5 border-green-400 outline-none rounded-full
        md:w-[70%] text-green-400 h-11' value={values.password}  placeholder='enter your password' type="password" />
        <button onClick={registersubmit} className='w-[70%] md:w-[50%] text-white rounded-full bg-green-500 p-2'>Register</button>

         <Link to="/login"><p className='text-green-400 underline'>already have account please login</p></Link> 
      </div>
    </div>
  )
}

export default Register

