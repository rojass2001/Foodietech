import { useState } from "react"
import { searchproducts } from "../../redux/Productslice"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

function Searchbar() {
  const [search,setsearch]=useState()
const navigate=useNavigate()
const dispatch=useDispatch()
   const submit=(event)=>{
    event.preventDefault()
  dispatch(searchproducts(search)) 
  navigate("/search")
  } 
  return (
    
  <form className="flex w-full" onSubmit={submit}>
      <input className='w-full h-7' onChange={(e)=>setsearch(e.target.value)} 
      placeholder='search product here' type="text"  />
      <button type="submit" className='bg-green-500 '>search</button>
  </form>
    
  )
}

export default Searchbar
