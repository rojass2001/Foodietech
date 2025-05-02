// Importing required components and hooks
import Box from "../Box";         // Box component for layout
import useSearch from "../../customhooks/useSearch";  // Custom hook for managing search logic
import Form from "../Form";        // Form component for handling form structure
import Button from "../Button";    // Button component for submitting the form

function Searchbar() {
  // Destructuring handle search function, search value, and submit function from custom hook
  const { handlesearch, search, submit } = useSearch();

  return (
    // Main container for the search bar
    <Box className="w-full">
      
      {/* Form element with submit handler */}
      <Form className="flex w-full" onsubmit={submit}>
        
        {/* Input field for search */}
        <input 
          className='w-full h-8'         // Full width, 8 height for input field
          onChange={handlesearch}        // Handler function for changes in input field
          value={search}                 // Controlled input, value is bound to search state
          placeholder='search product here'  // Placeholder text
          type="text"                    // Input type is text
        />
        
        {/* Search button for submitting the form */}
        <Button type="submit" className='bg-green-500'>
          search
        </Button>
      </Form>
    </Box>
  );
}

export default Searchbar;
