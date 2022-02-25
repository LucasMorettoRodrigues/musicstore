import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Cart from './components/layout/Cart'
import Home from './components/pages/Home'
import Product from './components/pages/Product'
import Products from './components/pages/Products'

function App() {

  const [showCart, setShowCart] = useState(false)

  return (
    <BrowserRouter>
      <Cart closeCart={() => setShowCart(false)} open={showCart} />
      <Navbar openCart={() => setShowCart(true)} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:category" element={<Products />} />
        <Route path="/:category/:id" element={<Product />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
