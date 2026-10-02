import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { categories, formatPrice } from '../data/products.js'

function ProductDetails({ product, onAddToCart, isWishlisted, onToggleWishlist }) {
  const [size, setSize] = useState(product.sizes[0] || '')
  const [color, setColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const navigate = useNavigate()
  const category = categories.find((item) => item.slug === product.category)
  const discount = Math.round((1 - product.price / product.originalPrice) * 100)

  function addItem() {
    onAddToCart({ ...product, selectedSize: size, selectedColor: color }, quantity)
    setAdded(true)
  }

  return (
    <main className="product-detail-page">
      <div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><Link to={`/category/${product.category}`}>{category.name}</Link><span>/</span><span>{product.name}</span></div>
      <section className="product-detail">
        <div className="detail-image-main"><img src={product.image} alt={product.name} /></div>
        <div className="detail-copy">
          <p className="detail-eyebrow">AS FASHION / {category.name.toUpperCase()}</p>
          <h1>{product.name}</h1>
          <p className="detail-rating">★ {product.rating.toFixed(1)} <span>· 18 reviews</span></p>
          <div className="detail-price"><strong>{formatPrice(product.price)}</strong><del>{formatPrice(product.originalPrice)}</del><span>{discount}% off</span></div>
          <p className="detail-description">Thoughtfully made for everyday wear, with a refined silhouette and considered details that make getting dressed feel effortless.</p>
          {product.sizes.length > 0 && <fieldset className="option-group"><legend>Size <span>{size ? `· ${size}` : ''}</span></legend><div className="size-options">{product.sizes.map((item) => <button className={size === item ? 'selected' : ''} key={item} type="button" onClick={() => setSize(item)}>{item}</button>)}</div></fieldset>}
          <fieldset className="option-group"><legend>Color</legend><div className="color-options">{product.colors.map((item) => <button className={color === item ? 'selected' : ''} key={item} type="button" style={{ '--swatch': item }} onClick={() => setColor(item)} aria-label={`Select color ${item}`} />)}</div></fieldset>
          <div className="quantity-row"><span>Quantity</span><div className="quantity-stepper"><button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button><span>{quantity}</span><button type="button" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)}>+</button></div></div>
          <div className="detail-actions"><button className="detail-add-button" type="button" onClick={addItem}>{added ? 'Added to Bag' : 'Add to Cart'}</button><button className="buy-button" type="button" onClick={() => { addItem(); navigate('/cart') }}>Buy Now</button><button className={`detail-wishlist${isWishlisted ? ' is-active' : ''}`} type="button" onClick={() => onToggleWishlist(product)} aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}>{isWishlisted ? '♥' : '♡'}</button></div>
          <p className="delivery-note">Complimentary shipping on orders above ₹999</p>
        </div>
      </section>
    </main>
  )
}

export default ProductDetails