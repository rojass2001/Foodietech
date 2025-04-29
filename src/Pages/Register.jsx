import { Link } from 'react-router-dom'
import useAuthentication from '../customhooks/useAuth'
import useInput from '../customhooks/useInput'
import Form from '../Components/Form'
import Box from '../Components/Box'
import Button from '../Components/Button'

function Register() {
   const [values, handlechange] = useInput({
      email: "",
      password:""
    })
  const { registersubmit } = useAuthentication(values.email, values.password) 
  return (
    <Box className='w-full pt-10 bg-black md:bg-gray-900 min-h-screen  flex items-center place-content-center' >
      <Form className='w-full md:w-[50%] flex flex-col gap-12 px-10 py-20 items-center place-content-center rounded-2xl bg-black min-h-[500px]' onsubmit={registersubmit}>
        <input required onChange={handlechange} className='w-full bg-black border-[1px] pl-5 border-green-400 outline-none rounded-full md:w-[70%] h-11 text-green-400' name="email" value={values.email} placeholder='enter your email' type="email" />
        <input required onChange={handlechange} name="password" className='w-full bg-black border-[1px] pl-5 border-green-400 outline-none rounded-full md:w-[70%] text-green-400 h-11' value={values.password}  placeholder='enter your password' type="password" />
        <Button type='submit' className='w-[70%] md:w-[50%] text-white rounded-full bg-green-500 p-2'>Register</Button>
        <Link to="/login"><p className='text-green-400 underline'>already have account please login</p></Link> 
      </Form>
    </Box>
  )
}

export default Register

