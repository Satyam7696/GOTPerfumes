import Login from './auth/Login';
import Cart from './Pages/CartPage';
import { CartProvider } from './components/context/CartContext';
import CasualShoes from './components/mens/perfumes/Perfumes';
// import MensShoes from './components/mens/menshoes/MensShoes';
// import Sneakers from './components/mens/sneakers/Sneakers';
// import SportsShoes from './components/mens/sportsshoes/SportsShoes';
import Navbar from './components/Navbar';
import AirFlow from './components/product_details/ProductDetailsPage';
import Home from './Pages/Home';
import {Route, Routes} from 'react-router-dom';
import { Toaster } from "react-hot-toast"; // Import Toaster
import CheckoutPage from './Pages/CheckoutPage';
import Wishlist from './Pages/Wishlist';
import { WishlistProvider } from "./components/context/WishlistContext";

function App() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden">
      
    <Toaster position="top-right" reverseOrder={false} /> {/* Add Toaster */}
      <CartProvider>
      <WishlistProvider>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/auth" element={<Login/>} />
            <Route path="/mens-perfumes" element={<CasualShoes/>}/>
            <Route path="/womens-perfumes" element={<CasualShoes/>} />
            <Route path="/collections-perfumes" element={<CasualShoes/>} />
            <Route path="/unisex-perfumes" element={<CasualShoes/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<CheckoutPage/>} />
            <Route path="/wishlist" element={<Wishlist/>} />
            <Route path="/product-details-page/:id" element={<AirFlow/>} />
          </Routes>
      </WishlistProvider>
      </CartProvider>

    </div>
  );
}

export default App;
