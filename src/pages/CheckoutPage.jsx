import { useState } from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products.js'

function CheckoutPage({ items, setCartItems }) {
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [orderId, setOrderId] = useState('')

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  if (orderPlaced) {
    return (
      <main className="empty-state">
        <p className="detail-eyebrow">ORDER CONFIRMED</p>

        <h1>Thank You!</h1>

        <p>Your order has been placed successfully.</p>

        <p>
          <strong>Order ID: {orderId}</strong>
        </p>

        <p>
          Total: <strong>{formatPrice(subtotal)}</strong>
        </p>

        <Link className="outline-button" to="/">
          CONTINUE SHOPPING
        </Link>
      </main>
    )
  }

  if (items.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-state">
          <h1>Your bag is empty</h1>

          <p>Add something to your bag before checkout.</p>

          <Link className="outline-button" to="/category/men">
            START SHOPPING
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="checkout-page">
      <div className="catalog-heading">
        <p className="detail-eyebrow">SECURE CHECKOUT</p>

        <h1>Checkout</h1>
      </div>

      <div className="checkout-layout">
        <form
          className="checkout-form"
          onSubmit={(event) => {
            event.preventDefault()

            const newOrderId = `ASF-${Date.now()
              .toString()
              .slice(-6)}`

            setOrderId(newOrderId)
            setCartItems([])
            setOrderPlaced(true)
          }}
        >
          <h2>Delivery Details</h2>

          <label>
            Full Name
            <input
              type="text"
              placeholder="Enter your full name"
              required
            />
          </label>

          <label>
            Phone Number
            <input
              type="tel"
              placeholder="Enter your phone number"
              required
            />
          </label>

          <label>
            Address
            <textarea
              placeholder="House No., Street, Area"
              required
            />
          </label>

          <div className="checkout-row">
            <label>
              City
              <input type="text" placeholder="City" required />
            </label>

            <label>
              PIN Code
              <input type="text" placeholder="PIN Code" required />
            </label>
          </div>

          <button type="submit" className="detail-add-button">
            PLACE ORDER
          </button>
        </form>

        <aside className="checkout-summary">
          <h2>Order Summary</h2>

          {items.map((item) => (
            <div
              className="checkout-item"
              key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
            >
              <span>
                {item.name} × {item.quantity}
              </span>

              <strong>
                {formatPrice(item.price * item.quantity)}
              </strong>
            </div>
          ))}

          <div className="checkout-total">
            <span>Total</span>

            <strong>{formatPrice(subtotal)}</strong>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default CheckoutPage