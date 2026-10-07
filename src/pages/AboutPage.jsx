import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <main className="about-page">
      <div className="catalog-heading">
        <p className="detail-eyebrow">OUR STORY</p>
        <h1>About SPY FASHIONS</h1>
        <p>
          Modern fashion made simple, stylish, and accessible for everyone.
        </p>
      </div>

      <section className="about-content">
        <div className="about-card">
          <h2>Who We Are</h2>
          <p>
            SPY FASHIONS is an online fashion store created for people who
            love modern style and everyday comfort.
          </p>
          <p>
            We bring together fashion for men, women, and kids, along with
            watches, bags, and footwear.
          </p>
        </div>

        <div className="about-card">
          <h2>What We Offer</h2>
          <ul>
            <li>Men's fashion</li>
            <li>Women's fashion</li>
            <li>Kids' fashion</li>
            <li>Watches</li>
            <li>Bags</li>
            <li>Footwear</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Our Goal</h2>
          <p>
            Our goal is to make online fashion shopping easy, convenient,
            and enjoyable while giving customers a wide range of styles to
            choose from.
          </p>
        </div>

        <div className="about-card">
          <h2>Shop With Us</h2>
          <p>
            Explore our latest collections and find something that matches
            your style.
          </p>

          <Link className="outline-button" to="/">
            START SHOPPING
          </Link>
        </div>
      </section>
    </main>
  )
}

export default AboutPage