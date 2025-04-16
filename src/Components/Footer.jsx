import { FaFacebook, FaGithubAlt, FaInstagram, FaTwitter } from 'react-icons/fa6'

function Footer() {
  return (
  <footer className='w-full mt-5 py-2 px-1 bg-slate-900 text-white grid gap-x-2 gap-y-2 md:gap-10 grid-cols-2 md:grid-cols-3'>
    <div className='h-[200px] text-sm pt-2 font-bold space-y-2 text-start md:text-center'>
      <p className='text-2xl  font-bold'>Foodies Hub</p> 
      <p>Foodies hub is aplace where you can where you can please  your soul and tummy with delicious food
        reciepes of all cusine and our service is absolutely free</p>   
    </div> 
    <div className='h-[200px] pt-2 text-sm font-bold space-y-2 text-start md:text-center'>
        <p className='text-2xl font-bold'>Contact us</p> 
        <p>Foodieshub@gmail.com</p>
        <p>+9656213935</p>
        <p>Idukki street 685553</p>
    </div> 
    <div className='h-[200px] pt-2  space-y-4 text-center font-bold '>
        <p className='text-2xl font-bold'>Social links</p> 
        <div className='w-full flex text-3xl items-center justify-center gap-3'>
          <FaFacebook/>
          <FaInstagram/>
          <FaTwitter/>
          <FaGithubAlt/>
        </div>
        <div className='flex w-full gap-2 justify-center'>
          <input className='w-[100%] md:w-[40%] h-7' placeholder='write your feedback'></input>
          <button className='w-[50%] md:w-[30%] h-7 bg-green-500'>Subscribe</button>
        </div>
      </div> 
   </footer>
    
  )
}

export default Footer
