import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products.js'

function CartPage({ items }) {
  const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <main className="cart-page">
      <div className="catalog-heading cart-heading"><p className="detail-eyebrow">YOUR SELECTION</p><h1>Shopping Bag</h1></div>
      {items.length === 0 ? (
        <div className="empty-state"><p>Your bag is waiting for something special.</p><Link className="outline-button" to="/category/women">EXPLORE THE COLLECTION</Link></div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">{items.map((item) => <article className="cart-item" key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-copy"><h2>{item.name}</h2>{item.selectedSize && <p>Size: {item.selectedSize}</p>}<p>Quantity: {item.quantity}</p><strong>{formatPrice(item.price * item.quantity)}</strong></div>
          </article>)}</div>
          <aside className="cart-summary"><p>Subtotal <strong>{formatPrice(subtotal)}</strong></p><small>Shipping and taxes calculated at checkout.</small><button type="button" className="detail-add-button">Continue to Checkout</button><Link to="/category/men">Continue shopping</Link></aside>
        </div>
      )}
    </main>
  )
}

export default CartPage