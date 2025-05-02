import { Link } from 'react-router-dom';  // Importing Link from React Router for navigation
import useAuthentication from '../customhooks/useAuth';  // Custom hook to handle authentication logic
import useInput from '../customhooks/useInput';  // Custom hook to manage form input states
import Form from '../Components/Form';  // Custom Form component for rendering a form
import Box from '../Components/Box';  // Custom Box component for layout and styling
import Button from '../Components/Button';  // Custom Button component for submitting the form
import Text from '../Components/Text';  // Custom Text component to display text

function Register() {
  // Initialize form values and handle input changes using the custom hook useInput
  const [values, handlechange] = useInput({
    email: "",
    password: "",
  });

  // Get the registerSubmit function from the useAuthentication hook that handles form submission
  const { registerSubmit } = useAuthentication(values.email, values.password);

  return (
    <Box className="w-full pt-10 bg-black md:bg-gray-900 min-h-screen flex items-center justify-center">
      {/* Main form container with styling */}
      <Form
        className="w-full md:w-[50%] flex flex-col gap-12 px-10 py-20 items-center rounded-2xl bg-black min-h-[500px]"
        onsubmit={registerSubmit}  // Handling form submit through registerSubmit function
      >
        {/* Email input field */}
        <input
          required
          onChange={handlechange}  // Handle input change
          name="email"
          value={values.email}  // Bind email input value to state
          className="w-full bg-black border-2 pl-5 border-green-400 outline-none rounded-full md:w-[70%] h-11 text-green-400"
          placeholder="Enter your email"
          type="email"
        />
        
        {/* Password input field */}
        <input
          required
          onChange={handlechange}  // Handle input change
          name="password"
          value={values.password}  // Bind password input value to state
          className="w-full bg-black border-2 pl-5 border-green-400 outline-none rounded-full md:w-[70%] h-11 text-green-400"
          placeholder="Enter your password"
          type="password"
        />
        
        {/* Submit button for the form */}
        <Button type="submit" className="w-[70%] md:w-[50%] text-white rounded-full bg-green-500 p-2">
          Register
        </Button>
        
        {/* Link to login page if user already has an account */}
        <Link to="/login">
          <Text className="text-green-400 underline">Already have an account? Please login</Text>
        </Link>
      </Form>
    </Box>
  );
}

export default Register;
