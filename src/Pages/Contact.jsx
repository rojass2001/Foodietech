import Form from '../Components/Form'

function Contact() {
return (
  <div className='w-full pt-[110px] md:pt-[60px]'> 
  <div className='w-full p-3 flex items-center font-bold bg-gray-950 place-content-center text-3xl text-green-500 text-center'>Contact</div>   
  <div className='w-full  bg-black py-5  px-2 md:px-12 '>
     <Form className='w-full space-y-3  md:border-2  md:border-green-500 md:py-3 px-1 md:px-[100px]'>
        <p className='font-bold mb-5 text-center md:text-start  text-[24px]'>Fill Up The Form</p>
        <div className='w-full gap-8  flex flex-col md:flex-row md:gap-12   '>
          <input className='md:w-[60%] font-bold h-10 border-[1px] placeholder-green-500 bg-black text-green-500 border-green-600 outline-none  w-full' required placeholder='Name' type="text" />
          <input required className='md:w-[60%] h-10 text-green-500 placeholder-green-500 bg-black font-bold border-[1px] border-green-600 outline-none w-full' type="email" placeholder='Email' />
        </div>
        <input required className="w-full h-10 text-green-500 placeholder-green-500 font-bold bg-black mt-5 border-[1px] border-green-600 outline-none" type="text" placeholder='Subject' />
        <textarea required className='w-full h-32 text-green-500 placeholder-green-500 border-[1px] bg-black  mt-10 border-green-600 outline-none' placeholder='write message here' />
        <button type="button" className='font-bold h-14 text-center px-3 rounded-lg mt-4 text-white bg-green-600'>Submit Request</button>
     </Form>
   </div>
 </div>    
 )   
}
export default Contact