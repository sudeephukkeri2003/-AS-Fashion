import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import CartPage from './pages/CartPage.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import WishlistPage from './pages/WishlistPage.jsx'

function AppContent() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('as-fashion-cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('as-fashion-wishlist')
    return savedWishlist ? JSON.parse(savedWishlist) : []
  })

  useEffect(() => {
    localStorage.setItem('as-fashion-cart', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem('as-fashion-wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  function addToCart(product, quantity = 1) {
  setCartItems((items) => {
    const existing = items.find(
      (item) =>
        item.id === product.id &&
        item.selectedSize === product.selectedSize &&
        item.selectedColor === product.selectedColor
    )

    if (existing) {
      return items.map((item) =>
        item.id === product.id &&
        item.selectedSize === product.selectedSize &&
        item.selectedColor === product.selectedColor
          ? { ...item, quantity: item.quantity + quantity }
          : item
      )
    }

    return [...items, { ...product, quantity }]
  })
}

  function toggleWishlist(product) {
    setWishlist((items) =>
      items.includes(product.id)
        ? items.filter((id) => id !== product.id)
        : [...items, product.id]
    )
  }

  return (
    <div className="app">
      <div className="announcement">
        Complimentary shipping on orders above ₹999
      </div>

      <Header
        cartCount={cartItems.reduce(
          (count, item) => count + item.quantity,
          0
        )}
        wishlistCount={wishlist.length}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onAddToCart={addToCart}
              wishlist={wishlist}
              onToggleWishlist={toggleWishlist}
            />
          }
        />

        <Route
          path="/category/:category"
          element={
            <CategoryPage
              onAddToCart={addToCart}
              wishlist={wishlist}
              onToggleWishlist={toggleWishlist}
            />
          }
        />

        <Route
          path="/product/:productId"
          element={
            <ProductPage
              onAddToCart={addToCart}
              wishlist={wishlist}
              onToggleWishlist={toggleWishlist}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              items={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route
  path="/wishlist"
  element={
    <WishlistPage
      wishlist={wishlist}
      onToggleWishlist={toggleWishlist}
      onAddToCart={addToCart}
    />
  }
/>

        <Route
          path="/checkout"
          element={
            <CheckoutPage
              items={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        <Route
          path="*"
          element={
            <HomePage
              onAddToCart={addToCart}
              wishlist={wishlist}
              onToggleWishlist={toggleWishlist}
            />
          }
        />
      </Routes>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App