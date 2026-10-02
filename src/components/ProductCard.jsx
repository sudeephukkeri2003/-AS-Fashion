import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products.js'

function ProductCard({ product, onAddToCart, isWishlisted, onToggleWishlist }) {
  const discount = Math.round((1 - product.price / product.originalPrice) * 100)

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <Link className="product-image-link" to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
          <img className="product-image" src={product.image} alt={product.name} loading="lazy" />
        </Link>
        <span className="discount-label">-{discount}%</span>
        <button className={`wishlist-button${isWishlisted ? ' is-active' : ''}`} type="button" onClick={() => onToggleWishlist(product)} aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}>
          {isWishlisted ? '♥' : '♡'}
        </button>
      </div>
      <div className="product-info">
        <div className="product-name-row">
          <h3>{product.name}</h3>
          <span className="product-rating">★ {product.rating.toFixed(1)}</span>
        </div>
        <p className="product-prices"><strong>{formatPrice(product.price)}</strong><del>{formatPrice(product.originalPrice)}</del></p>
        <div className="product-actions">
          <button className="small-add-button" type="button" onClick={() => onAddToCart(product)}>Add to Cart</button>
          <Link className="view-product-link" to={`/product/${product.id}`}>View Details</Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard