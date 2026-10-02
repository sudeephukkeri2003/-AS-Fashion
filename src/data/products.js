export const categories = [
  { slug: 'men', name: 'Men', number: '01' },
  { slug: 'women', name: 'Women', number: '02' },
  { slug: 'kids', name: 'Kids', number: '03' },
  { slug: 'watches', name: 'Watches', number: '04' },
  { slug: 'bags', name: 'Bags', number: '05' },
  { slug: 'footwear', name: 'Footwear', number: '06' },
]

export const products = [
  { id: 'essential-oxford-shirt', category: 'men', name: 'Essential Oxford Shirt', price: 1299, originalPrice: 1899, rating: 4.8, image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=900&q=85', colors: ['#d9d4ca', '#1d2529', '#f2f0ea'], sizes: ['S', 'M', 'L', 'XL'] },
  { id: 'relaxed-linen-trouser', category: 'men', name: 'Relaxed Linen Trousers', price: 1599, originalPrice: 2199, rating: 4.6, image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=900&q=85', colors: ['#b7aa94', '#343434'], sizes: ['S', 'M', 'L', 'XL'] },
  { id: 'everyday-overshirt', category: 'men', name: 'Everyday Cotton Overshirt', price: 1899, originalPrice: 2499, rating: 4.7, image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=85', colors: ['#77756d', '#d6d1c6'], sizes: ['S', 'M', 'L', 'XL'] },
  { id: 'sculpted-midi-dress', category: 'women', name: 'Sculpted Midi Dress', price: 2199, originalPrice: 2999, rating: 4.9, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85', colors: ['#222222', '#ded4c7'], sizes: ['XS', 'S', 'M', 'L'] },
  { id: 'soft-knit-cardigan', category: 'women', name: 'Soft Knit Cardigan', price: 1799, originalPrice: 2399, rating: 4.7, image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=900&q=85', colors: ['#e6e1d8', '#62574f'], sizes: ['XS', 'S', 'M', 'L'] },
  { id: 'wide-leg-tailored-pant', category: 'women', name: 'Wide Leg Tailored Pants', price: 1999, originalPrice: 2799, rating: 4.6, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=85', colors: ['#292929', '#b4a58f'], sizes: ['XS', 'S', 'M', 'L'] },
  { id: 'mini-utility-jacket', category: 'kids', name: 'Mini Utility Jacket', price: 1199, originalPrice: 1699, rating: 4.8, image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85', colors: ['#c2b9a8', '#434c41'], sizes: ['2Y', '4Y', '6Y', '8Y'] },
  { id: 'weekend-stripe-tee', category: 'kids', name: 'Weekend Stripe Tee', price: 599, originalPrice: 899, rating: 4.7, image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=85', colors: ['#f1eee6', '#2b3b4a'], sizes: ['2Y', '4Y', '6Y', '8Y'] },
  { id: 'soft-cotton-dungaree', category: 'kids', name: 'Soft Cotton Dungaree', price: 999, originalPrice: 1399, rating: 4.6, image: 'https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=85', colors: ['#8b9aa1', '#b9a78c'], sizes: ['2Y', '4Y', '6Y', '8Y'] },
  { id: 'atelier-steel-watch', category: 'watches', name: 'Atelier Steel Watch', price: 2499, originalPrice: 3499, rating: 4.9, image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85', colors: ['#b2a078', '#aeb3b5'], sizes: [] },
  { id: 'minimal-leather-watch', category: 'watches', name: 'Minimal Leather Watch', price: 1999, originalPrice: 2799, rating: 4.7, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=900&q=85', colors: ['#282421', '#8e6549'], sizes: [] },
  { id: 'monochrome-dial-watch', category: 'watches', name: 'Monochrome Dial Watch', price: 2899, originalPrice: 3899, rating: 4.8, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85', colors: ['#222222', '#c0b7a7'], sizes: [] },
  { id: 'structured-weekender', category: 'bags', name: 'Structured Weekender', price: 2299, originalPrice: 3199, rating: 4.8, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85', colors: ['#38332e', '#9e8c75'], sizes: [] },
  { id: 'everyday-crossbody', category: 'bags', name: 'Everyday Crossbody', price: 1499, originalPrice: 2199, rating: 4.7, image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85', colors: ['#262421', '#a48a73'], sizes: [] },
  { id: 'canvas-market-tote', category: 'bags', name: 'Canvas Market Tote', price: 899, originalPrice: 1299, rating: 4.6, image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=85', colors: ['#ddd6c7', '#252525'], sizes: [] },
  { id: 'court-low-sneaker', category: 'footwear', name: 'Court Low Sneaker', price: 1999, originalPrice: 2799, rating: 4.8, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85', colors: ['#ecebe8', '#292929'], sizes: ['6', '7', '8', '9', '10'] },
  { id: 'everyday-leather-loafer', category: 'footwear', name: 'Everyday Leather Loafer', price: 2499, originalPrice: 3499, rating: 4.7, image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=900&q=85', colors: ['#252321', '#795b43'], sizes: ['6', '7', '8', '9', '10'] },
  { id: 'city-walk-runner', category: 'footwear', name: 'City Walk Runner', price: 2199, originalPrice: 2999, rating: 4.6, image: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=900&q=85', colors: ['#d8d8d4', '#525b62'], sizes: ['6', '7', '8', '9', '10'] },
]

export function formatPrice(price) {
  return `₹${price.toLocaleString('en-IN')}`
}