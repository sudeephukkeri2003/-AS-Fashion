import { Link } from 'react-router-dom'
import { categories } from '../data/products.js'

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-brand">
          <Link className="logo" to="/">SPY<span>FASHION</span></Link>
          <p>Modern essentials, considered details. Find your next favourite at SPY FASHIONS.</p>
        </div>
        <div className="footer-column">
          <h4>SHOP</h4>
          {categories.map((category) => <Link key={category.slug} to={`/category/${category.slug}`}>{category.name}</Link>)}
        </div>
        <div className="footer-column">
          <h4>HELP</h4>
          <a href="mailto:hello@SPY FASHIONS.example">Contact Us</a>
          <a href="mailto:hello@SPY FASHIONS.example">Shipping & Returns</a>
          <a href="mailto:hello@SPY FASHIONS.example">FAQs</a>
        </div>
        <div className="footer-column">
          <h4>FOLLOW</h4>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://pinterest.com">Pinterest</a>
        </div>
      </footer>
      <div className="copyright">© 2026 SPY FASHIONS. All rights reserved.</div>
    </>
  )
}

export default Footer