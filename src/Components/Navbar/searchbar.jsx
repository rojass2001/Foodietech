import Box from "../Box"
import useSearch from "../../customhooks/useSearch"
import Form from "../Form"
import Button from "../Button"

function Searchbar() {
  const{handlesearch,search,submit}=useSearch()
  return (
  <Box className="w-full">
    <Form className="flex w-full" >
      <input className='w-full h-8' onChange={handlesearch}  value={search} placeholder='search product here' type="text"  />
      <Button type="submit" onClick={submit} className='bg-green-500 '>search</Button>
    </Form>  
  </Box> 
  )
}

export default Searchbar
