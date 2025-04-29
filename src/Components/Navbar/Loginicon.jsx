import { Link } from 'react-router-dom'
import { CiLogin } from 'react-icons/ci'
import Box from '../Box'
import Button from '../Button'

function Loginicon() {
  
  return (
  <>
    <Link to="/login">
      <Box className='flex h-full  items-center place-content-center  '>
            <p className={`text-green-500 mb-1`}>Login</p>
        <Button className='h-6 w-6 mr-1'><CiLogin className='text-2xl  text-green-500 ' /></Button>
      </Box>
    </Link> 
  </>
  )
}

export default Loginicon
