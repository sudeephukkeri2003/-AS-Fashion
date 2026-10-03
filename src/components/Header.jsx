import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { categories } from '../data/products.js'

function Header({ cartCount, wishlistCount }) {
  const [search, setSearch] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  function handleSearch(event) {
    event.preventDefault()

    const query = search.trim()

    if (!query) return

    setMenuOpen(false)
    navigate(`/category/all?search=${encodeURIComponent(query)}`)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <Link className="logo" to="/" aria-label="AS Fashion home">
        AS<span>FASHION</span>
      </Link>

      <button
        className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`nav${menuOpen ? ' is-open' : ''}`}
        aria-label="Main navigation"
      >
        {categories.map((category) => (
          <Link
            key={category.slug}
            to={`/category/${category.slug}`}
            onClick={closeMenu}
          >
            {category.name}
          </Link>
        ))}
      </nav>

      <div className="header-icons">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search products"
          />

          <button type="submit" aria-label="Search">
            🔍
          </button>
        </form>

        <Link
          className="header-wishlist"
          to="/wishlist"
          aria-label={`${wishlistCount} wishlist items`}
        >
          ♡ <small>{wishlistCount}</small>
        </Link>

        <Link
          className="cart-link"
          to="/cart"
          aria-label={`Shopping bag with ${cartCount} items`}
        >
          <span aria-hidden="true">♧</span>
          <small>{cartCount}</small>
        </Link>
      </div>
    </header>
  )
}

export default Header