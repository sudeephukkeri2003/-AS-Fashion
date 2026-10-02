import { Link, useParams } from 'react-router-dom'
import ProductDetails from '../components/ProductDetails.jsx'
import { products } from '../data/products.js'

function ProductPage({ onAddToCart, wishlist, onToggleWishlist }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)

  if (!product) return <main className="empty-state"><h1>Product not found</h1><Link to="/">Back to home</Link></main>

  return <ProductDetails product={product} onAddToCart={onAddToCart} isWishlisted={wishlist.includes(product.id)} onToggleWishlist={onToggleWishlist} />
}

export default ProductPage