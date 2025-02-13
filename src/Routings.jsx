
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Reciepes from './Components/Recipes/Reciepes'
import Cart from './Components/Cart/Cart'
import Searchfilter from './Components/Search/Searchfilter'
import Footer from './Components/Footer'
import Login from './Components/Loginorregister/Login'
import Register from './Components/Loginorregister/Register'
import Productdetail from './Components/Productdetail/Productdetail'
function Routings() {
  return (
    <>
    <Router>
    <Navbar/>

    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Foodietech" element={<Home/>}/>
    <Route path="/reciepe" element={<Reciepes/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/search" element={<Searchfilter/>}/>
    <Route path="/details" element={<Productdetail/>}/>
    </Routes>
    <Footer/>
    </Router>
    </>
      
    
  )
}

export default Routings
