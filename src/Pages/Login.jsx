import { Link } from 'react-router-dom';  // Importing Link component for navigation in React Router
import useAuthentication from '../customhooks/useAuth';  // Custom hook for handling authentication logic
import useInput from '../customhooks/useInput';  // Custom hook for handling form input
import Form from '../Components/Form';  // Custom Form component for rendering a form
import Box from '../Components/Box';  // Custom Box component for layout and styling
import Button from '../Components/Button';  // Custom Button component for form submission

function Login() {
  // Initialize form values and handle input changes using custom hook useInput
  const [values, handlechanges] = useInput({
    email: "",
    password: "",
  });

  // Get the loginSubmit function from the useAuthentication hook that handles form submission
  const { loginSubmit } = useAuthentication(values.email, values.password);

  return (
    <Box className="w-full pt-10 bg-black md:bg-gray-900 min-h-screen flex items-center justify-center">
      {/* Main form container with styling */}
      <Form
        className="w-full md:w-[50%] flex flex-col gap-12 px-10 py-20 items-center justify-center rounded-2xl bg-black min-h-[500px]"
        onsubmit={loginSubmit}  // Handling form submit through loginSubmit function
      >
        {/* Email input field */}
        <input
          required
          onChange={handlechanges}  // Handle input change
          className="w-full bg-black border-[1px] pl-5 border-green-400 outline-none rounded-full md:w-[70%] h-11 text-green-400"
          name="email"
          value={values.email}  // Bind email input value to state
          placeholder="Enter your email"
          type="email"
        />
        
        {/* Password input field */}
        <input
          required
          onChange={handlechanges}  // Handle input change
          className="w-full bg-black border-[1px] pl-5 border-green-400 outline-none rounded-full md:w-[70%] h-11 text-green-400"
          name="password"
          value={values.password}  // Bind password input value to state
          placeholder="Enter your password"
          type="password"
        />
        
        {/* Submit button */}
        <Button type="submit" className="w-[70%] md:w-[50%] text-white rounded-full bg-green-500 p-2">
          Login
        </Button>

        {/* Forgot password link */}
        <Link to="/forgotpassword" className="text-green-400 underline">
          Forgot password?
        </Link>

        {/* Register link */}
        <Link to="/register" className="text-green-400 underline">
          Don't have an account? Please Register
        </Link>
      </Form>
    </Box>
  );
}

export default Login;
