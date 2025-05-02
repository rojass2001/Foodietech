import { useDispatch, useSelector } from 'react-redux';  // Importing hooks for dispatching actions and selecting state from Redux
import { increaseproduct, decreaseproduct } from '../redux/Productslice'; // Importing action creators for increasing/decreasing product quantity
import { addtocart } from '../redux/Cartslice';  // Importing action creator for adding product to cart
import Box from '../Components/Box';  // Importing Box component for layout structure
import Text from '../Components/Text';  // Importing Text component for displaying text content
import Button from '../Components/Button';  // Importing Button component for clickable actions

// Defining common button style
const buttonStyle = "w-[100px] h-[40px] border-2 border-green-500";

function Productdetail() {
  const dispatch = useDispatch();  // Initialize dispatch to send actions to Redux store
  const { productcontain } = useSelector((state) => state.product);  // Extract product data from Redux store

  return (
    <Box className="w-full place-items-center px-2 min-h-screen mt-[120px]">
      <Box className="w-full border-2 p-3 text-center justify-center md:justify-start md:text-left flex flex-col bg-black md:flex-row gap-4 border-green-500 h-[570px] lg:h-[380px] lg:w-[60%]">
        {/* Product image */}
        <img className="h-[150px] md:h-full w-full md:w-[40%]" src={productcontain?.image} alt={productcontain?.name} />
        
        <Box className="space-y-2 text-green-500 font-bold place-items-center text-center md:text-left md:place-items-start w-full md:w-[50%]">
          {/* Product name */}
          <Text className="text-2xl">{productcontain?.name}</Text>
          
          {/* Product price */}
          <Text className="text-xl">₹{productcontain?.price}</Text>
          
          {/* Product description */}
          <Text className="md:text-left">{productcontain?.des}</Text>
          
          {/* Quantity control */}
          <Box className="flex items-center gap-2">
            <Button
              onClick={() => dispatch(decreaseproduct(productcontain?.price))}  // Decrease quantity
              className="border-2 rounded-l-full border-green-400 w-14 h-7"
            >
              -
            </Button>
            {/* Display current quantity */}
            {productcontain?.quantity}
            <Button
              onClick={() => dispatch(increaseproduct(productcontain?.price))}  // Increase quantity
              className="border-2 rounded-r-full border-green-400 w-14 h-7"
            >
              +
            </Button>
          </Box>

          {/* Display subtotal */}
          <Text>Subtotal: ₹{productcontain?.subtotal}</Text>

          {/* Action buttons */}
          <Box className="flex gap-4">
            {/* Add to Cart button */}
            <Button onClick={() => dispatch(addtocart(productcontain))} className={buttonStyle}>
              Add to Cart
            </Button>
            {/* Buy Now button */}
            <Button className={buttonStyle}>Buy Now</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Productdetail;
