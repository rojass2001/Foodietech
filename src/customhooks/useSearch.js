import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { productfilter, searchproducts } from "../redux/Productslice"

function useSearch() {
  const [search, setsearch] = useState()
  const navigate=useNavigate()
  const dispatch = useDispatch()
    
  // Submit search for a product
  const submit = useCallback(
    (e) => {
      e.preventDefault();
        dispatch(searchproducts(search.trim()));
        navigate("/search");
    },
    [dispatch, navigate, search]
  );

      // Filter products by selected category and navigate to search results
      const categorysearch = useCallback(
        (name) => {
          dispatch(productfilter(name))
          navigate('/search')
        },
        [dispatch, navigate]
      )

      // Update search state on input change
      const handlesearch = useCallback((e) => {
        setsearch(e.target.value)
      }, [])

  return{submit, handlesearch, search, categorysearch}
}
export default useSearch