import { Link } from 'react-router-dom'
import { categories, products } from '../data/products.js'

function CategorySection() {
  return (
    <section className="section category-section">
      <div className="section-heading">
        <p>EXPLORE</p>
        <h2>Shop By Category</h2>
      </div>
      <div className="category-grid">
        {categories.map((category) => {
          const image = products.find((product) => product.category === category.slug)?.image
          return (
            <Link className={`category-card category-${category.slug}`} key={category.slug} to={`/category/${category.slug}`} style={{ '--category-image': `url("${image}")` }}>
              <div>
                <p>{category.number}</p>
                <h3>{category.name}</h3>
                <span>Explore Collection <b aria-hidden="true">→</b></span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default CategorySection