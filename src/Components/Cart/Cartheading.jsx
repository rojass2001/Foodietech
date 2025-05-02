import Box from "../Box";
import Text from "../Text";

// Component to render the cart heading section
function Cartheading() {
  return (
    <Box className="w-full lg:border-2 lg:border-green-500 pt-5 text-center font-bold h-[100px]">
      {/* Heading text for the cart section */}
      <Text className="text-4xl text-green-500">Your Carts</Text>
    </Box>
  );
}

export default Cartheading;
