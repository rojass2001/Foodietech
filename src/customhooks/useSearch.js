import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { productfilter, searchproducts } from "../redux/Productslice"

function useSearch() {
  const [search, setsearch] = useState()
  const navigate=useNavigate()
  const dispatch = useDispatch()
    
   const submit=useCallback((event)=>{
     event.preventDefault()
     dispatch(searchproducts(search)) 
     navigate("/search")
    },[search,dispatch,navigate])
    
      const categorysearch=useCallback((name)=>{
        dispatch(productfilter(name))
        navigate('/search')
      },[dispatch,navigate])
  const handlesearch = useCallback((e) => {
    setsearch(e.target.value);
  }, []);
  return{submit,handlesearch,search,categorysearch}
}
export default useSearch


