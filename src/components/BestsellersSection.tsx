'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'

interface Product {
  _id: string
  name: string
  price: number
  comparePrice?: number
  images?: string[]
  bestSeller?: boolean
  rating?: number
  slug: string
  description?: string
}

const FALLBACK_PRODUCTS: Product[] = [
  {
    _id: 'ragi-laddu',
    name: 'Ragi Laddu',
    description: 'Ancient grain wisdom in every bite. Gluten-free, PCOS-friendly.',
    price: 420,
    comparePrice: 0,
    images: [],
    bestSeller: true,
    rating: 4.9,
    slug: 'ragi-laddu',
  },
  {
    _id: 'walnut-brownie',
    name: 'Walnut Brownie',
    description: 'Rich cocoa indulgence with omega-3 goodness. No refined sugar.',
    price: 300,
    comparePrice: 0,
    images: [],
    bestSeller: true,
    rating: 4.9,
    slug: 'walnut-brownie',
  },
  {
    _id: 'millet-cookies',
    name: 'Millet Cookies',
    description: 'Crunchy, wholesome, and guilt-free. Pure grain perfection.',
    price: 380,
    comparePrice: 0,
    images: [],
    bestSeller: true,
    rating: 4.9,
    slug: 'millet-cookies',
  },
]

export default function BestsellersSection() {
  const [products, setProducts] = useState<Product[]>(FALLBACK_PRODUCTS)
  const [loading, setLoading] = useState(true)
  const addItem = useCartStore((state) => state.addItem)

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const res = await fetch('/api/products?bestSeller=true&limit=4')
        const data = await res.json()
        const fetched = data.data || []
        const existingSlugs = new Set(FALLBACK_PRODUCTS.map((item) => item.slug))
        const merged = [
          ...FALLBACK_PRODUCTS,
          ...fetched.filter((item: Product) => !existingSlugs.has(item.slug)),
        ]
        setProducts(merged)
      } catch (error) {
        console.error('Failed to fetch bestsellers:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchBestsellers()
  }, [])

  const handleAddToCart = (product: Product) => {
    addItem(
      {
        _id: product._id,
        name: product.name,
        slug: product.slug,
        description: '',
        shortDescription: '',
        price: product.price,
        images: product.images || [],
        category: '',
        ingredients: [],
        stock: 10,
        tags: [],
        featured: false,
        bestSeller: true,
        rating: product.rating || 0,
        reviewCount: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      1
    )
  }

  return (
    <section id="bestsellers" className="sec bg-mithai-goldP">
      <div className="container">
        <div className="sec-head">
          <span className="sec-label">Customer Favorites</span>
          <h2 className="sec-title">Best Sellers</h2>
          <p className="sec-sub">Loved by hundreds. Join the happy customers.</p>
        </div>

        {!loading && products.length > 0 && (
          <div className="products-grid">
            {products.map((product) => (
              <div key={product._id} className="product-card">
                <div className="product-img">
                  <span className="ptag">Best Seller</span>
                  {product.images?.[0] ? (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl">🍪</span>
                  )}
                </div>
                <div className="pinfo">
                  <Link href={`/shop/${product.slug}`}>
                    <h3 className="pname hover:text-mithai-maroon transition-colors">{product.name}</h3>
                  </Link>
                  {product.description && <p className="pdesc">{product.description}</p>}
                  <div className="pfooter">
                    <div className="pprice">
                      ₹{Math.floor(product.price)}
                      {product.comparePrice && (
                        <span className="line-through text-xs ml-1">₹{Math.floor(product.comparePrice)}</span>
                      )}
                    </div>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="add-btn hover:bg-mithai-maroonL transition-colors"
                      aria-label="Add to cart"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <Link href="/shop" className="btn-primary">
            View All Products
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <style jsx>{`
          .products-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .product-card {
            border-radius: 18px;
            background: var(--cream);
            border: 1px solid rgba(107, 31, 31, 0.1);
            overflow: hidden;
            transition: transform 0.22s, box-shadow 0.22s;
          }
          .product-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 32px rgba(107, 31, 31, 0.15);
          }
          .product-img {
            width: 100%;
            aspect-ratio: 1;
            background: linear-gradient(135deg, #f7f3ee, #ede3d5);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 52px;
            position: relative;
          }
          .ptag {
            position: absolute;
            top: 10px;
            left: 10px;
            background: #e3b448;
            color: #6b1f1f;
            font-size: 9px;
            font-weight: 800;
            letter-spacing: 0.06em;
            padding: 4px 9px;
            border-radius: 100px;
            text-transform: uppercase;
          }
          .pinfo {
            padding: 13px;
          }
          .pname {
            font-size: 13px;
            font-weight: 700;
            color: #2a1810;
            margin-bottom: 8px;
            display: block;
          }
          .pdesc {
            font-size: 12px;
            color: #4A1515;
            line-height: 1.5;
            margin-bottom: 10px;
            margin: 0 0 10px 0;
          }
          .pfooter {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .pprice {
            font-family: 'Libre Baskerville', serif;
            font-size: 17px;
            font-weight: 700;
            color: #6b1f1f;
          }
          .add-btn {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: #6b1f1f;
            color: white;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            line-height: 1;
            box-shadow: 0 3px 10px rgba(107, 31, 31, 0.28);
            transition: transform 0.18s, background 0.18s;
            cursor: pointer;
            flex-shrink: 0;
          }
          .add-btn:active {
            transform: scale(0.9);
          }
          .btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: #6b1f1f;
            color: #fff;
            padding: 13px 28px;
            border-radius: 100px;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.03em;
            border: none;
            box-shadow: 0 4px 18px rgba(107, 31, 31, 0.32);
            transition: all 0.22s;
            text-decoration: none;
            cursor: pointer;
          }
          .btn-primary:hover {
            background: #8b2f2f;
            box-shadow: 0 10px 32px rgba(107, 31, 31, 0.45);
            transform: translateY(-2px);
          }
          @media (min-width: 640px) {
            .products-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          @media (min-width: 960px) {
            .products-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
        `}</style>
      </div>
    </section>
  )
}
