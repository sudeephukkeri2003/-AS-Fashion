import ProductCard from './ProductCard.jsx'

function ProductGrid({ products, onAddToCart, wishlist, onToggleWishlist }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          isWishlisted={wishlist.includes(product.id)}
          onToggleWishlist={onToggleWishlist}
        />
      ))}
    </div>
  )
}

export default ProductGrid