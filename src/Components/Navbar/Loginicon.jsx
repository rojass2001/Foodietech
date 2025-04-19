import { Link } from 'react-router-dom'
import { CiLogin } from 'react-icons/ci'

function Loginicon() {
  return (
    <>
  <Link to="/login">
    <div className='flex h-full  items-center place-content-center  '>
          <p className={`text-green-500 mb-1`}>Login</p>
      <button className='h-6 w-6 mr-1'><CiLogin className='text-2xl  text-green-500 ' /></button>
    </div>
  </Link>      
    </>
  )
}

export default Loginicon
