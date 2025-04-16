import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { searchproducts } from "../../redux/Productslice"

function useSearch() {
  const [search, setsearch] = useState()
  const navigate=useNavigate()
  const dispatch = useDispatch()
    
   const submit=(event)=>{
     event.preventDefault()
     dispatch(searchproducts(search)) 
     navigate("/search")
    }
    
    const handlesearch = (e) => {
      setsearch(e.target.value)
   }
  return{submit,handlesearch,search}
}
export default useSearch


