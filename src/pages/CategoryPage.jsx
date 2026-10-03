import { useMemo, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid.jsx'
import { categories, products } from '../data/products.js'

function CategoryPage({ onAddToCart, wishlist, onToggleWishlist }) {
  const { category: slug } = useParams()
  const [searchParams] = useSearchParams()

  const globalSearch = searchParams.get('search') || ''

  const [search, setSearch] = useState(globalSearch)
  const [ratingFilter, setRatingFilter] = useState('all')
  const [sortOrder, setSortOrder] = useState('featured')

  const category = categories.find((item) => item.slug === slug)

  const categoryProducts =
    slug === 'all'
      ? products
      : products.filter((product) => product.category === slug)

  const visibleProducts = useMemo(() => {
    const query = (globalSearch || search).trim().toLowerCase()

    const filtered = categoryProducts.filter((product) => {
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)

      const matchesRating =
        ratingFilter === 'all' || product.rating >= 4.7

      return matchesSearch && matchesRating
    })

    if (sortOrder === 'price-ascending') {
      return [...filtered].sort((a, b) => a.price - b.price)
    }

    if (sortOrder === 'price-descending') {
      return [...filtered].sort((a, b) => b.price - a.price)
    }

    return filtered
  }, [categoryProducts, globalSearch, ratingFilter, search, sortOrder])

  if (!category && slug !== 'all') {
    return (
      <main className="empty-state">
        <h1>Collection not found</h1>
        <Link to="/">Back to home</Link>
      </main>
    )
  }

  const pageTitle =
    slug === 'all'
      ? globalSearch
        ? `Search results for "${globalSearch}"`
        : 'All Products'
      : category.name

  return (
    <main className="catalog-page">
      <div className="catalog-heading">
        <p className="detail-eyebrow">SPY FASHIONS / COLLECTIONS</p>
        <h1>{pageTitle}</h1>
        <p>Considered pieces for everyday expression.</p>
      </div>

      <div className="catalog-toolbar">
        <span>
          {visibleProducts.length}{' '}
          {visibleProducts.length === 1 ? 'piece' : 'pieces'}
        </span>

        <div className="catalog-controls">
          <label className="catalog-search">
            <span className="visually-hidden">
              Search products
            </span>

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search this collection"
            />
          </label>

          <label className="catalog-filter">
            <span className="visually-hidden">
              Filter by rating
            </span>

            <select
              value={ratingFilter}
              onChange={(event) =>
                setRatingFilter(event.target.value)
              }
            >
              <option value="all">All ratings</option>
              <option value="4.7">4.7 stars & up</option>
            </select>
          </label>

          <label className="catalog-sort">
            <span className="visually-hidden">
              Sort products by price
            </span>

            <select
              value={sortOrder}
              onChange={(event) =>
                setSortOrder(event.target.value)
              }
            >
              <option value="featured">Featured</option>
              <option value="price-ascending">
                Price: low to high
              </option>
              <option value="price-descending">
                Price: high to low
              </option>
            </select>
          </label>
        </div>
      </div>

      {visibleProducts.length > 0 ? (
        <ProductGrid
          products={visibleProducts}
          onAddToCart={onAddToCart}
          wishlist={wishlist}
          onToggleWishlist={onToggleWishlist}
        />
      ) : (
        <p className="catalog-empty">
          No products match your search. Try another name or category.
        </p>
      )}
    </main>
  )
}

export default CategoryPage