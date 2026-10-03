import { Link } from 'react-router-dom'
import CategorySection from '../components/CategorySection.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import { products } from '../data/products.js'

function HomePage({ onAddToCart, wishlist, onToggleWishlist }) {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-small">NEW SEASON 2026</p>
          <h1>YOUR STYLE.<br />YOUR STORY.</h1>
          <p className="hero-description">Discover modern fashion made for every moment. Explore the latest styles for men, women and kids.</p>
          <Link className="shop-button" to="/category/women">SHOP NOW <span aria-hidden="true">→</span></Link>
        </div>
      </section>
      <CategorySection />
      <section className="section products-section">
        <div className="section-heading">
          <p>DISCOVER</p>
          <h2>Trending Now</h2>
        </div>
        <ProductGrid products={products.slice(0, 4)} onAddToCart={onAddToCart} wishlist={wishlist} onToggleWishlist={onToggleWishlist} />
        <div className="center-button"><Link className="outline-button" to="/category/men">VIEW ALL PRODUCTS</Link></div>
      </section>
      <section className="promo">
        <div>
          <p>SPY FASHIONS COLLECTION</p>
          <h2>Fashion that feels like you.</h2>
          <Link className="light-button" to="/category/women">EXPLORE NOW <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
  )
}

export default HomePage