import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Cart from './components/layout/Cart'
import Home from './components/pages/Home'
import Product from './components/pages/Product'
import Products from './components/pages/Products'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Shipping from './components/pages/Shipping'
import Order from './components/pages/Order'
import PurchaseCompleted from './components/pages/PurchaseCompleted'
import Orders from './components/pages/Orders'

function App() {

  const [showCart, setShowCart] = useState(false)
  const [cartProducts, setCartProducts] = useState([])
  const [currentProduct, setCurrentProduct] = useState({})
  const [shipping, setShipping] = useState({})

  const addToCart = (product) => {
    if (!showCart) setShowCart(true)

    const itemIndex = cartProducts.findIndex((item) => item._id === product._id)

    if (itemIndex > -1) {
      const newCartProducts = cartProducts.slice()
      newCartProducts[itemIndex].quantity++
      return setCartProducts(newCartProducts)
    }

    product.quantity = 1
    return setCartProducts([...cartProducts, product])
  }

  const removeFromCart = (product) => {
    const itemIndex = cartProducts.findIndex((item) => item._id === product._id)

    const newCart = cartProducts.slice()

    cartProducts[itemIndex].quantity === 1
      ? newCart.splice(itemIndex, 1)
      : newCart[itemIndex].quantity--

    setCartProducts(newCart)
  }


  return (
    <BrowserRouter>
      <Cart
        closeCart={() => setShowCart(false)}
        isOpen={showCart}
        cartProducts={cartProducts}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
      <Navbar openCart={() => setShowCart(true)} />
      <Routes>
        <Route exact path="/" element={<Home openProductPage={(product) => setCurrentProduct(product)} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/category/:category" element={<Products openProductPage={(product) => setCurrentProduct(product)} />} />
        <Route
          path="/:id"
          element={
            <Product
              addToCart={(product) => addToCart(product)}
              product={currentProduct}
            />
          }
        />
        <Route path="/checkout/shipping" element={<Shipping setShipping={(address) => setShipping(address)} />} />
        <Route path="/checkout/order" element={<Order cartProducts={cartProducts} shipping={shipping} />} />
        <Route path="/checkout/completed" element={<PurchaseCompleted />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
