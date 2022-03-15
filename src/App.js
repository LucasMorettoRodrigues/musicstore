import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Cart from './components/layout/Cart'
import Home from './components/pages/Home'
import Product from './components/pages/Product'
import ProductList from './components/pages/ProductList'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Order from './components/pages/Order'
import Orders from './components/pages/Orders'
import Success from './components/pages/Success'
import NotFound from './components/pages/NotFound'
import { getUser } from './services/auth.service'

function App() {

  const [showCart, setShowCart] = useState(false)

  const PrivateRoute = ({ children }) => {
    if (!getUser()) return <Navigate to="/login" />
    return children
  }

  return (
    <BrowserRouter>
      <Cart closeCart={() => setShowCart(false)} isOpen={showCart} />
      <Navbar openCart={() => setShowCart(true)} />
      <Routes>
        <Route path="/musicstore" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/category/:category" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/:id" element={<Product openCart={() => setShowCart(true)} />} />
        <Route path="/checkout/order" element={<PrivateRoute><Order /></PrivateRoute>} />
        <Route path="/checkout/success" element={<PrivateRoute><Success /></PrivateRoute>} />
        <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
