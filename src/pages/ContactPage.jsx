import { Link } from 'react-router-dom'

function ContactPage() {
  return (
    <main className="contact-page">
      <div className="catalog-heading">
        <p className="detail-eyebrow">GET IN TOUCH</p>
        <h1>Contact SPY FASHIONS</h1>
        <p>
          Have a question about a product, order, size, or delivery?
          We’re happy to help.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-card">
          <h2>Contact Us</h2>

          <div className="contact-item">
            <strong>WhatsApp</strong>
            <p>Chat with us for quick assistance.</p>
            <a
              href="https://wa.me/919380830383"
              target="_blank"
              rel="noreferrer"
            >
              CHAT ON WHATSAPP
            </a>
          </div>

          <div className="contact-item">
            <strong>Email</strong>
            <p>Send us your questions anytime.</p>
            <a href="mailto:sudee032@gmail.com">
               sudee032@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <strong>Store</strong>
            <p>Online Fashion Store — India</p>
          </div>
        </div>

        <div className="contact-card">
          <h2>Need Help?</h2>
          <p>
            You can contact us regarding product availability, sizes,
            orders, payments, and delivery.
          </p>

          <Link className="outline-button" to="/category/all">
            SHOP PRODUCTS
          </Link>
        </div>
      </div>
    </main>
  )
}

export default ContactPage