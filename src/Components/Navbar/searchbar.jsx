import useSearch from "../customhooks/useSearch"
import Form from "../Form"

function Searchbar() {
  const{handlesearch,search,submit}=useSearch()
  return (
  <Form className="flex w-full" >
      <input className='w-full h-8' onChange={handlesearch}  value={search} placeholder='search product here' type="text"  />
      <button type="submit" onClick={submit} className='bg-green-500 '>search</button>
  </Form>   
  )
}

export default Searchbar
