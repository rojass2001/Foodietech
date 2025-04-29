import Categories from '../Components/categories/Categories'
import { useSelector } from 'react-redux'
import Card from '../Components/Card'
import Box from '../Components/Box'

function Searchfilter() {
    const {filterproducts}=useSelector(state=>state.product)
  return (
 <>
    <Box className='w-full mt-[80px]' >
      <Categories/>
      {filterproducts.length<1&&
        <Box className='w-full min-h-screen pt-10 text-center text-3xl font-boldtext-green-500'>No search Found</Box>
        }
        <Box className='w-full mt-5 px-6 md:px-6 min-h-screen  gap-10  grid md:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
              {/* card reciepes*/}
              { filterproducts?.map((product)=>(
              <Card product={product} key={product.id}/>
              ))}
        </Box>
    </Box>
 </>
  )
}

export default Searchfilter
