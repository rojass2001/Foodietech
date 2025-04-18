import { Link } from 'react-router-dom'
import useAuth from '../Components/customhooks/useAuth'
import useInput from '../Components/customhooks/useInput'
import Form from '../Components/Form'

function Login() {
   const [values, handlechanges] = useInput({
    email: "",
    password:""
  })
  const{loginsubmit}=useAuth(values.email,values.password)
  return (
    <Form className='w-full pt-10 bg-black md:bg-gray-900 min-h-screen  flex items-center place-content-center' onsubmit={loginsubmit}>
       <div className='w-full md:w-[50%] flex flex-col gap-12 px-10 py-20 items-center place-content-center
           rounded-2xl bg-black min-h-[500px]'>
           <input required onChange={handlechanges} className='w-full bg-black border-[1px] pl-5 border-green-400 outline-none rounded-full
           md:w-[70%] h-11 text-green-400' name="email" value={values.email} placeholder='enter your email' type="email" /> 
           <input required onChange={handlechanges} className='w-full bg-black border-[1px] pl-5 border-green-400 outline-none rounded-full
           md:w-[70%] text-green-400 h-11' name="password" placeholder='enter your password' type="password" />
           <button type="submit" className='w-[70%] md:w-[50%] text-white rounded-full bg-green-500 p-2'>Login</button>
           <Link to="/forgotpassword"><li className='text-green-400 list-none underline'>forgot password?</li></Link>
            <Link to="/register"><li className='text-green-400 list-none underline'>don't have account please Register</li></Link> 
        </div>
    </Form>
  )
}

export default Login
