import { category } from './categoryarray'
import { Link } from 'react-router-dom'
import Box from '../Box'
import Text from '../Text'
import useSearch from '../customhooks/useSearch'
const img = "https://sandinmysuitcase.com/wp-content/uploads/2020/04/Popular-Indian-Cuisine.jpg"

function Categories() {
  const{categorysearch}=useSearch()
 return (
  <Box className='w-full mt-[130px] lg:mt-[80px] md:justify-center   overflow-x-auto flex gap-[70px]' >
      <Box className='text-center text-green-500'>
        <Link to="/reciepe"> 
        <Box className='bg-black w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full p-1  md:p-3 border-2 border-green-500 '>
          <img  className='w-full h-full rounded-full' src={img}/>
        </Box>
        </Link>
        <Text>All</Text>
      </Box>
    {category.map((a)=>(
      <Box className=' text-center text-green-500' key={a.name} >
        <Box  onClick={()=>categorysearch(a.name)}className='bg-black w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full p-1 md:p-3 border-2 border-green-500 ' >
         <img  className='w-full h-full rounded-full' src={a.image}/>
        </Box>
        <Text>{a.name}</Text>
      </Box>
    ))}
  </Box>
  )
}

export default Categories
