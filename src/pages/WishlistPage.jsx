import { Link } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid.jsx'
import { products } from '../data/products.js'

function WishlistPage({ wishlist, onToggleWishlist, onAddToCart }) {
  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product.id)
  )

  return (
    <main className="catalog-page">
      <div className="catalog-heading">
        <p className="detail-eyebrow">SPY FASHIONS / SAVED ITEMS</p>
        <h1>My Wishlist</h1>
        <p>Your favourite pieces, saved for later.</p>
      </div>

      {wishlistProducts.length > 0 ? (
        <ProductGrid
          products={wishlistProducts}
          onAddToCart={onAddToCart}
          wishlist={wishlist}
          onToggleWishlist={onToggleWishlist}
        />
      ) : (
        <div className="empty-state">
          <h2>Your wishlist is empty</h2>
          <p>Save products you love and find them here later.</p>

          <Link className="outline-button" to="/category/women">
            EXPLORE PRODUCTS
          </Link>
        </div>
      )}
    </main>
  )
}

export default WishlistPage