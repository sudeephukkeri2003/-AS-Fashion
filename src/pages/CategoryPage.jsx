import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid.jsx'
import { categories, products } from '../data/products.js'

function CategoryPage({ onAddToCart, wishlist, onToggleWishlist }) {
  const { category: slug } = useParams()
  const [search, setSearch] = useState('')
  const [ratingFilter, setRatingFilter] = useState('all')
  const [sortOrder, setSortOrder] = useState('featured')
  const category = categories.find((item) => item.slug === slug)
  const categoryProducts = products.filter((product) => product.category === slug)
  const visibleProducts = useMemo(() => {
    const query = search.trim().toLowerCase()
    const filtered = categoryProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(query)
      const matchesRating = ratingFilter === 'all' || product.rating >= 4.7
      return matchesSearch && matchesRating
    })

    if (sortOrder === 'price-ascending') return filtered.sort((a, b) => a.price - b.price)
    if (sortOrder === 'price-descending') return filtered.sort((a, b) => b.price - a.price)
    return filtered
  }, [categoryProducts, ratingFilter, search, sortOrder])

  if (!category) return <main className="empty-state"><h1>Collection not found</h1><Link to="/">Back to home</Link></main>

  return (
    <main className="catalog-page">
      <div className="catalog-heading">
        <p className="detail-eyebrow">AS FASHION / COLLECTIONS</p>
        <h1>{category.name}</h1>
        <p>Considered pieces for everyday expression.</p>
      </div>
      <div className="catalog-toolbar">
        <span>{visibleProducts.length} {visibleProducts.length === 1 ? 'piece' : 'pieces'}</span>
        <div className="catalog-controls">
          <label className="catalog-search">
            <span className="visually-hidden">Search {category.name} products</span>
            <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search this collection" />
          </label>
          <label className="catalog-filter">
            <span className="visually-hidden">Filter by rating</span>
            <select value={ratingFilter} onChange={(event) => setRatingFilter(event.target.value)}>
              <option value="all">All ratings</option>
              <option value="4.7">4.7 stars & up</option>
            </select>
          </label>
          <label className="catalog-sort">
            <span className="visually-hidden">Sort products by price</span>
            <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
              <option value="featured">Featured</option>
              <option value="price-ascending">Price: low to high</option>
              <option value="price-descending">Price: high to low</option>
            </select>
          </label>
        </div>
      </div>
      {visibleProducts.length > 0
        ? <ProductGrid products={visibleProducts} onAddToCart={onAddToCart} wishlist={wishlist} onToggleWishlist={onToggleWishlist} />
        : <p className="catalog-empty">No pieces match your search. Try another name or filter.</p>}
    </main>
  )
}

export default CategoryPage