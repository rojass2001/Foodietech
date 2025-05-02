import { Link } from 'react-router-dom'
import { CiLogin } from 'react-icons/ci' // Importing the login icon from react-icons
import Box from '../Box' // Box component for styling and layout
import Button from '../Button' // Button component for styling the button

function Loginicon() {
  return (
    <>
      {/* Link to the login page */}
      <Link to="/login">
        <Box className='flex h-full items-center place-content-center'>
          {/* Text for 'Login' */}
          <p className={`text-green-500 mb-1`}>Login</p>
          
          {/* Button containing the login icon */}
          <Button className='h-6 w-6 mr-1'>
            {/* Login icon from react-icons */}
            <CiLogin className='text-2xl text-green-500' />
          </Button>
        </Box>
      </Link>
    </>
  )
}

export default Loginicon
