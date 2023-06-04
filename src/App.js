import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/login/Login';
import Register from './component/register/Register';
import Navbar from './component/Navbar.js/Navbar';
import PrivateComponent from './component/PrivateComponent';
import ProductList from './component/productList/ProductList';
import Cart from './component/cart/Cart';
import PaymentConfirmation from './component/cart/PaymentConfirmation'

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<ProductList cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
            <Route path="/payment-confirmation" element={<PaymentConfirmation setCartItems={setCartItems} />} />
            <Route path="/logout" element={<h1>Logout</h1>} />
            <Route path="*" element={<h1>NO PAGE FOUND</h1>} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
