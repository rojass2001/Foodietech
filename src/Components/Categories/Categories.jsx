// Importing required components and hooks
import { category } from './categoryarray';  // Importing categories data
import { Link } from 'react-router-dom';      // Importing Link for navigation
import Box from '../Box';                    // Importing Box component for layout
import Text from '../Text';                  // Importing Text component for text display
import useSearch from '../../customhooks/useSearch';  // Custom hook for search functionality

// Image URL for 'All' category
const img = "https://sandinmysuitcase.com/wp-content/uploads/2020/04/Popular-Indian-Cuisine.jpg";

function Categories() {
  // Destructuring categorysearch function from custom hook
  const { categorysearch } = useSearch();

  return (
    // Main container for categories
    <Box className='w-full mt-[130px] lg:mt-[80px] md:justify-center overflow-x-auto flex gap-[70px]'>
      
      {/* 'All' category link */}
      <Box className='text-center text-green-500'>
        <Link to="/reciepe">  {/* Link to the recipes page */}
          <Box className='bg-black w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full p-1 md:p-3 border-2 border-green-500'>
            <img className='w-full h-full rounded-full' src={img} alt="All" />
          </Box>
        </Link>
        <Text>All</Text>  {/* Text for the 'All' category */}
      </Box>

      {/* Looping through the categories array to display each category */}
      {category.map((a) => (
        <Box className='text-center text-green-500' key={a.name}>  {/* Each category box */}
          {/* Clicking on a category triggers categorysearch function */}
          <Box onClick={() => categorysearch(a.name)} className='bg-black w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full p-1 md:p-3 border-2 border-green-500'>
            <img className='w-full h-full rounded-full' src={a.image} alt={a.name} />  {/* Category image */}
          </Box>
          <Text>{a.name}</Text>  {/* Category name */}
        </Box>
      ))}
    </Box>
  );
}

export default Categories;
