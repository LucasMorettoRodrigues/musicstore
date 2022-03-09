import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

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
import api from './services/api.service'
import Success from './components/pages/Success'
import NotFound from './components/pages/NotFound'
import { getUser } from './services/auth.service'

function App() {

  const [showCart, setShowCart] = useState(false)
  const [cartProducts, setCartProducts] = useState([])

  const PrivateRoute = ({ children }) => {
    if (!getUser()) return <Navigate to="/login" />
    return children
  }

  const getCartProducts = async () => {
    const cartStr = localStorage.getItem("cart")
    if (!cartStr) return
    let productsArray = []
    const cart = JSON.parse(cartStr)
    for (const item of cart) {
      try {
        const res = await api.get(`http://localhost:5000/api/v1/products/${item.productId}`)
        res.data.quantity = item.quantity
        productsArray = [...productsArray, res.data]
      } catch (error) { console.log(error) }
    }
    setCartProducts(productsArray)
  }

  useEffect(() => {
    getCartProducts()
  }, [])

  const handleCart = (product, action) => {
    const cartStr = localStorage.getItem("cart")
    let newCart

    // Create Cart
    if (!cartStr) {
      newCart = [{ productId: product._id, quantity: 1 }]
    } else {
      // Existing Cart
      const cart = JSON.parse(cartStr)
      const itemIndex = cart.findIndex((item) => item.productId === product._id)
      newCart = cart.slice()

      if (itemIndex < 0) newCart = [...cart, { productId: product._id, quantity: 1 }]
      if (itemIndex >= 0 && action === "remove" && newCart[itemIndex].quantity > 1) newCart[itemIndex].quantity -= 1
      if (itemIndex >= 0 && action === "add") newCart[itemIndex].quantity += 1
    }

    localStorage.setItem("cart", JSON.stringify(newCart))
    getCartProducts()
    !showCart && setShowCart(true)
  }

  return (
    <BrowserRouter>
      <Cart
        closeCart={() => setShowCart(false)}
        isOpen={showCart}
        cartProducts={cartProducts}
        handleCart={(product, action) => handleCart(product, action)}
      />
      <Navbar openCart={() => setShowCart(true)} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/category/:category" element={<ProductList />} />
        <Route path="/:id" element={<Product handleCart={(product, action) => handleCart(product, action)} />} />
        <Route path="/checkout/order" element={<PrivateRoute><Order cartProducts={cartProducts} /></PrivateRoute>} />
        <Route path="/checkout/success" element={<PrivateRoute><Success /></PrivateRoute>} />
        <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
