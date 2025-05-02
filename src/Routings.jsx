import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Importing necessary components from React Router for routing
import Home from './Pages/Home';  // Home page component
import Navbar from './Components/Navbar/Navbar';  // Navbar component
import Reciepes from './Pages/Reciepes';  // Recipes page component
import Cart from './Pages/Cart';  // Cart page component
import Searchfilter from './Pages/Searchfilter';  // Search filter page component
import Footer from './Components/Footer';  // Footer component
import Productdetail from './Pages/Productdetail';  // Product detail page component
import Login from './Pages/Login';  // Login page component
import Register from './Pages/Register';  // Register page component
import Forgotpassword from './Pages/Forgotpassword';  // Forgot password page component
import Tabbar from './Components/Tabbar';  // Tabbar component for navigation
import Contact from './Pages/Contact';  // Contact page component

function Routings() {
  return (
    <>
      <Router>  {/* Wrapping the entire routing structure inside Router */}
        <Navbar />  {/* Rendering the Navbar component at the top of the app */}
        <Routes>  {/* Defining all the routes for different pages */}
          {/* Defining various routes for pages */}
          <Route path="/" element={<Home />} />  {/* Default route rendering the Home page */}
          <Route path="/foodietech" element={<Home />} />  {/* Alias route to also render the Home page */}
          <Route path="/reciepe" element={<Reciepes />} />  {/* Recipe page */}
          <Route path="/contact" element={<Contact />} />  {/* Contact page */}
          <Route path="/cart" element={<Cart />} />  {/* Cart page */}
          <Route path="/login" element={<Login />} />  {/* Login page */}
          <Route path="/register" element={<Register />} />  {/* Register page */}
          <Route path="/forgotpassword" element={<Forgotpassword />} />  {/* Forgot password page */}
          <Route path="/search" element={<Searchfilter />} />  {/* Search filter page */}
          <Route path="/details" element={<Productdetail />} />  {/* Product detail page */}
        </Routes>
        <Footer />  {/* Rendering the Footer component at the bottom of the app */}
        <Tabbar />  {/* Rendering the Tabbar component at the bottom for easy navigation */}
      </Router>
    </>
  );
}

export default Routings;
