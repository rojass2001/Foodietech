import  { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchproducts } from '../../redux/Productslice'
import { useNavigate } from 'react-router-dom'

function NavbarBanner() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [searchs,setsearch]=useState("")
  const submit=(e)=>{
    e.preventDefault()
  dispatch(searchproducts(searchs)) 
  navigate('/search')
  } 
  return (
    <>
    <form className='w-full justify-center px-3 shadow-md shadow-gray-500 flex h-[40px] md:hidden' onSubmit={submit}>
    <input className='h-7 w-full' type="text" onChange={(e)=>setsearch(e.target.value)}/>
    <button type='submit' className='bg-green-500 px-2 h-7 '>search</button>
    </form>
    </>
  )
}

export default NavbarBanner
