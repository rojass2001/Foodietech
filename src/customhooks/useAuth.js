import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../Backend/Firebase/Firebase"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Cookies from "js-cookie"

export default function useAuthentication(email, password) {
  const navigate = useNavigate()

  // Register a new user with email and password
  const registerSubmit = async (e) => {
    e.preventDefault()
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user
      toast.success("User created successfully", user.email)
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error("This email is already registered. Try logging in instead.")
      } else {
        toast.error("password must atleast 6 characters");
      }
    
      }
    }
  

  // Log in an existing user with email and password
  const loginSubmit = async (e) => {
    e.preventDefault()
    try {
        await signInWithEmailAndPassword(auth, email, password);
        Cookies.set('login', JSON.stringify(true), { expires: 7 });
      toast.success("Login successful")
      navigate('/reciepe')
    } catch  {
      toast.error("Invalid username or password")
    }
  }

  // Send a password reset email to the user
  const resetEmail = (e) => {
    e.preventDefault()
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Reset link sent successfully. Please check your email.")
      })
      .catch(() => {
        toast.error("Please enter a valid email address")
      })
  }

  // Check if the user is logged in, redirect to login if not
  const cartAuthentication = async () => {
    const login = Cookies.get('login') ? JSON.parse(Cookies.get('login')) : null
    if (!login) {
      toast.warning("Please log in")
      navigate('/login')
    } else {
      navigate("/cart")
    }
  }

  // Log out the user and clear login cookies
  const logout = async () => {
    const login = Cookies.get('login') ? JSON.parse(Cookies.get('login')) : null
    if (login === true) {
      Cookies.set('login', JSON.stringify(false), { expires: 7 })
      toast.success("Successfully logged out");
      navigate('/login');
    } else {
      toast.warning("Please log in first");
      navigate('/login');
    }
  }

  // Handle contact form submission
  const contactSubmit = (e) => {
    e.preventDefault()
    toast.success("Message submitted successfully")
  }

  // Return authentication functions
  return { registerSubmit, loginSubmit, resetEmail, contactSubmit, cartAuthentication, logout }
}
