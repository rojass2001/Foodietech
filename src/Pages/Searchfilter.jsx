import Categories from '../Components/categories/Categories';
import { useSelector } from 'react-redux';
import Card from '../Components/Card';
import Box from '../Components/Box';

function Searchfilter() {
  const { filterproducts } = useSelector(state => state.product);

  return (
    <>
      <Box className="w-full mt-[80px]">
        <Categories />
        
        {/* No search result message */}
        {filterproducts.length < 1 && (
          <Box className="w-full min-h-screen pt-10 text-center text-green-500 text-3xl font-bold">
            No search results found
          </Box>
        )}

        {/* Product Grid */}
        <Box className="w-full mt-5 px-6 md:px-6 min-h-screen gap-10 grid md:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {filterproducts?.map(product => (
            <Card product={product} key={product.id} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Searchfilter;
