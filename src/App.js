import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Cart from './components/layout/Cart'
import Home from './components/pages/Home'
import Product from './components/pages/Product'
import Products from './components/pages/Products'

import guitar1 from './assets/products/guitar1.webp'

function App() {

  const [showCart, setShowCart] = useState(false)
  const [cartProducts, setCartProducts] = useState([{ id: 1, name: "default", price: 999.99, img: guitar1, quantity: 1 }])

  const addToCart = (product) => {
    const itemIndex = cartProducts.findIndex((item) => item.id === product.id)

    if (itemIndex > -1) {
      const newCartProducts = cartProducts.slice()
      newCartProducts[itemIndex].quantity++
      return setCartProducts(newCartProducts)
    }

    product.quantity = 1
    return setCartProducts([...cartProducts, product])
  }

  const removeFromCart = (product) => {
    const itemIndex = cartProducts.findIndex((item) => item.id === product.id)

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
        <Route exact path="/" element={<Home />} />
        <Route path="/:category" element={<Products />} />
        <Route path="/:category/:id" element={<Product addToCart={addToCart} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
