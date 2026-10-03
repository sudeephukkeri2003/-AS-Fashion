import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products.js'

function CartPage({ items, setCartItems }) {
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
            <div className="cart-item-copy"><h2>{item.name}</h2>{item.selectedSize && <p>Size: {item.selectedSize}</p>}<div className="cart-quantity">
  <button
    type="button"
    onClick={() => setCartItems((currentItems) =>
  currentItems
    .map((cartItem) =>
      cartItem.id === item.id &&
      cartItem.selectedSize === item.selectedSize &&
      cartItem.selectedColor === item.selectedColor
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
    .filter((cartItem) => cartItem.quantity > 0)
)}
  >
    −
  </button>

  <span>{item.quantity}</span>

  <button
    type="button"
    onClick={() => setCartItems((currentItems) =>
  currentItems.map((cartItem) =>
    cartItem.id === item.id &&
    cartItem.selectedSize === item.selectedSize &&
    cartItem.selectedColor === item.selectedColor
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  )
)}
  >
    +
  </button>
</div><strong>{formatPrice(item.price * item.quantity)}</strong></div>
<button
  type="button"
  onClick={() =>
    setCartItems((currentItems) =>
  currentItems.filter(
    (cartItem) =>
      !(
        cartItem.id === item.id &&
        cartItem.selectedSize === item.selectedSize &&
        cartItem.selectedColor === item.selectedColor
      )
  )
)
  }
>
  Remove
</button>
          </article>)}</div>
          <aside className="cart-summary"><p>Subtotal <strong>{formatPrice(subtotal)}</strong></p><small>Shipping and taxes calculated at checkout.</small><Link to="/checkout" className="detail-add-button">
  Continue to Checkout
</Link><Link to="/category/men">Continue shopping</Link></aside>
        </div>
      )}
    </main>
  )
}

export default CartPage