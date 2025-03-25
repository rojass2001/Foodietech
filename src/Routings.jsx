
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar/Navbar'
import Reciepes from './Pages/Reciepes'
import Cart from './Pages/Cart'
import Searchfilter from './Pages/Searchfilter'
import Footer from './Components/Footer'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Productdetail from './Pages/Productdetail'

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
