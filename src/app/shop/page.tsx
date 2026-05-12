'use client'

import Link from 'next/link'
import { Suspense, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { useCartStore } from '@/store/cartStore'

interface Product {
  _id: string
  name: string
  price: number
  slug: string
  images: string[]
}

type ProductCatalog = Record<string, Product[]>

const PRODUCT_CATALOG: ProductCatalog = {
  cookies: [
    {
      _id: 'cookie-1',
      name: 'Almond Date Cookies',
      price: 249,
      slug: 'almond-date-cookies',
      images: ['https://images.unsplash.com/photo-1505253217931-9a6de0f388b2?auto=format&fit=crop&w=800&q=80'],
    },
    {
      _id: 'cookie-2',
      name: 'Cocoa Oat Crunch',
      price: 279,
      slug: 'cocoa-oat-crunch',
      images: ['https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80'],
    },
  ],
  brownies: [
    {
      _id: 'brownie-1',
      name: 'Fudgy Walnut Brownie',
      price: 299,
      slug: 'fudgy-walnut-brownie',
      images: ['https://images.unsplash.com/photo-1603046891527-f76c99d2e5be?auto=format&fit=crop&w=800&q=80'],
    },
  ],
  mithai: [
    {
      _id: 'mithai-1',
      name: 'Pistachio Besan Barfi',
      price: 349,
      slug: 'pistachio-besan-barfi',
      images: ['https://images.unsplash.com/photo-1522176388036-7d5663432bee?auto=format&fit=crop&w=800&q=80'],
    },
  ],
  'healthy-snacks': [
    {
      _id: 'snack-1',
      name: 'Seed & Nut Energy Bites',
      price: 199,
      slug: 'seed-nut-energy-bites',
      images: ['https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&w=800&q=80'],
    },
  ],
  granola: [
    {
      _id: 'granola-1',
      name: 'Honey Almond Granola',
      price: 229,
      slug: 'honey-almond-granola',
      images: ['https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80'],
    },
  ],
  'gift-boxes': [
    {
      _id: 'gift-1',
      name: 'Luxury Dessert Gift Box',
      price: 799,
      slug: 'luxury-dessert-gift-box',
      images: ['https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80'],
    },
  ],
  spreads: [
    {
      _id: 'spread-1',
      name: 'Almond Cocoa Spread',
      price: 249,
      slug: 'almond-cocoa-spread',
      images: ['https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'],
    },
  ],
  'instant-mixes': [
    {
      _id: 'mix-1',
      name: 'Instant Millet Pancake Mix',
      price: 189,
      slug: 'instant-millet-pancake-mix',
      images: ['https://images.unsplash.com/photo-1604908177529-471eebec86ce?auto=format&fit=crop&w=800&q=80'],
    },
  ],
}

const CATEGORY_LABELS: Record<string, string> = {
  cookies: 'Cookies',
  brownies: 'Brownies',
  mithai: 'Mithai',
  'healthy-snacks': 'Healthy Snacks',
  granola: 'Granola',
  'gift-boxes': 'Gift Boxes',
  spreads: 'Spreads',
  'instant-mixes': 'Instant Mixes',
}

function ShopBody() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category') || 'cookies'
  const products: Product[] = useMemo(() => PRODUCT_CATALOG[category] || [], [category])
  const addItem = useCartStore((state) => state.addItem)

  return (
    <main className="min-h-screen bg-mithai-off px-4 py-10 sm:px-7 lg:px-10">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-10">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-mithai-gold mb-3">Browse by Category</div>
          <h1 className="font-medino text-4xl font-normal text-mithai-maroonD mb-2 tracking-[-0.01em] leading-[0.95]">
            {CATEGORY_LABELS[category] || 'Shop'}
          </h1>
          <p className="text-sm text-mithai-taupe max-w-2xl">
            Discover products for {CATEGORY_LABELS[category] || 'this category'}. Tap any item to view details or add it directly to your cart.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.length === 0 ? (
            <div className="col-span-full rounded-[28px] bg-white border border-[rgba(107,31,31,0.1)] p-10 text-center text-mithai-taupe">
              No products found for this category yet.
            </div>
          ) : (
            products.map((product) => (
              <div key={product._id} className="rounded-[28px] bg-white border border-[rgba(107,31,31,0.1)] shadow-[0_14px_32px_rgba(107,31,31,0.06)] overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                <Link href={`/shop/${product.slug}`} className="group block relative h-56 overflow-hidden bg-[#f7f3ee]">
                  <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </Link>
                <div className="p-6">
                  <h2 className="font-runiga text-xl font-semibold text-mithai-maroonD mb-3">{product.name}</h2>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="text-lg font-bold text-mithai-maroon">₹{product.price}</span>
                    <button
                      onClick={() => addItem({
                        _id: product._id,
                        name: product.name,
                        slug: product.slug,
                        description: product.name,
                        shortDescription: product.name,
                        price: product.price,
                        images: product.images,
                        category,
                        ingredients: [],
                        stock: 20,
                        tags: [],
                        featured: false,
                        bestSeller: false,
                        rating: 4.8,
                        reviewCount: 12,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString(),
                      }, 1)}
                      className="rounded-full bg-mithai-maroon px-5 py-3 text-sm font-semibold text-white transition hover:bg-mithai-maroonL"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <p className="text-sm text-mithai-taupe">Clean ingredients, thoughtful recipes, and premium flavour in every bite.</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  )
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-mithai-off" />}>
      <ShopBody />
    </Suspense>
  )
}
