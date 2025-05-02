import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '../Box';
import Text from '../Text';
import Button from '../Button';

function Carttotal() {
  // Access cart state from Redux store
  const { cartproducts, totalprice } = useSelector(state => state.cart);

  // Reusable class for rows
  const cartTextClass = 'w-full font-bold text-green-500 flex justify-between';

  return (
    <Box className="w-full md:w-[30%] lg:w-[20%] h-[250px] border-2 place-content-center border-green-500 space-y-5 px-2 bg-black">
      
      {/* Display total items in cart */}
      <Box className={cartTextClass}>
        Total items: <span>{cartproducts.length}</span>
      </Box>

      {/* Display subtotal price */}
      <Text className={cartTextClass}>
        Subtotal: <span>₹{totalprice}</span>
      </Text>

      {/* Display total price (same as subtotal here) */}
      <Text className={cartTextClass}>
        Total: <span>₹{totalprice}</span>
      </Text>

      {/* Action buttons: Pay Now and Continue Shopping */}
      <Box className="w-full justify-center text-center flex text-sm text-green-500 gap-3">
        <Button className="border-2 font-bold border-green-500 w-[120px] h-11">
          Pay Now ₹{totalprice}
        </Button>

        <Link className="no-underline" to="/reciepe">
          <Button className="border-2 font-bold w-[120px] border-green-500 h-11">
            Continue to Shop
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Carttotal;
