import { Link } from 'react-router-dom'
import { categories } from '../data/products.js'

function Header({ cartCount, wishlistCount }) {
  return (
    <header className="header">
      <Link className="logo" to="/" aria-label="AS Fashion home">AS<span>FASHION</span></Link>
      <nav className="nav" aria-label="Main navigation">
        {categories.map((category) => <Link key={category.slug} to={`/category/${category.slug}`}>{category.name}</Link>)}
      </nav>
      <div className="header-icons">
        <span className="header-wishlist" aria-label={`${wishlistCount} wishlist items`}>♡ <small>{wishlistCount}</small></span>
        <Link className="cart-link" to="/cart" aria-label={`Shopping bag with ${cartCount} items`}>
          <span aria-hidden="true">♧</span><small>{cartCount}</small>
        </Link>
      </div>
    </header>
  )
}

export default Header