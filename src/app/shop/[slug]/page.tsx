'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import { useParams } from 'next/navigation'
import { useCartStore } from '@/store/cartStore'

interface Product {
  _id: string
  name: string
  price: number
  slug: string
  images: string[]
  category: string
  description?: string
  shortDescription?: string
  ingredients?: string[]
}

const PRODUCT_CATALOG: Record<string, Product[]> = {
  cookies: [
    {
      _id: 'cookie-1',
      name: 'Almond Date Cookies',
      price: 249,
      slug: 'almond-date-cookies',
      category: 'cookies',
      images: ['https://images.unsplash.com/photo-1505253217931-9a6de0f388b2?auto=format&fit=crop&w=800&q=80'],
      description: 'Delicious and nutritious almond date cookies made with premium ingredients.',
      shortDescription: 'Soft and chewy cookies with almond and date goodness',
      ingredients: ['Almonds', 'Dates', 'Whole Wheat Flour', 'Coconut Oil', 'Honey'],
    },
    {
      _id: 'cookie-2',
      name: 'Cocoa Oat Crunch',
      price: 279,
      slug: 'cocoa-oat-crunch',
      category: 'cookies',
      images: ['https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80'],
      description: 'Crunchy cocoa oat cookies with a delightful chocolate flavor.',
      shortDescription: 'Crispy oat cookies with rich cocoa taste',
      ingredients: ['Rolled Oats', 'Cocoa Powder', 'Dark Chocolate', 'Butter', 'Brown Sugar'],
    },
  ],
  brownies: [
    {
      _id: 'brownie-1',
      name: 'Fudgy Walnut Brownie',
      price: 299,
      slug: 'fudgy-walnut-brownie',
      category: 'brownies',
      images: ['https://images.unsplash.com/photo-1603046891527-f76c99d2e5be?auto=format&fit=crop&w=800&q=80'],
      description: 'Rich and fudgy brownies loaded with walnuts and premium chocolate.',
      shortDescription: 'Dense and decadent brownie with walnut pieces',
      ingredients: ['Dark Chocolate', 'Walnuts', 'Flour', 'Eggs', 'Butter', 'Sugar'],
    },
  ],
  mithai: [
    {
      _id: 'mithai-1',
      name: 'Pistachio Besan Barfi',
      price: 349,
      slug: 'pistachio-besan-barfi',
      category: 'mithai',
      images: ['https://images.unsplash.com/photo-1522176388036-7d5663432bee?auto=format&fit=crop&w=800&q=80'],
      description: 'Traditional Indian sweet made with besan and pistachios.',
      shortDescription: 'Creamy besan barfi with pistachio topping',
      ingredients: ['Besan (Chickpea Flour)', 'Pistachios', 'Ghee', 'Sugar', 'Cardamom'],
    },
  ],
  'healthy-snacks': [
    {
      _id: 'snack-1',
      name: 'Seed & Nut Energy Bites',
      price: 199,
      slug: 'seed-nut-energy-bites',
      category: 'healthy-snacks',
      images: ['https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&w=800&q=80'],
      description: 'Packed with nutrients, these energy bites are perfect for a quick snack.',
      shortDescription: 'Nutritious bites with seeds and nuts',
      ingredients: ['Mixed Seeds', 'Dry Fruits', 'Honey', 'Coconut Oil', 'Dark Chocolate'],
    },
  ],
  granola: [
    {
      _id: 'granola-1',
      name: 'Honey Almond Granola',
      price: 229,
      slug: 'honey-almond-granola',
      category: 'granola',
      images: ['https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80'],
      description: 'Crunchy granola with honey and almonds, perfect for breakfast.',
      shortDescription: 'Crispy granola clusters with almonds',
      ingredients: ['Rolled Oats', 'Almonds', 'Honey', 'Coconut Oil', 'Cinnamon'],
    },
  ],
  'gift-boxes': [
    {
      _id: 'gift-1',
      name: 'Luxury Dessert Gift Box',
      price: 799,
      slug: 'luxury-dessert-gift-box',
      category: 'gift-boxes',
      images: ['https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80'],
      description: 'An elegant collection of our finest desserts in a beautiful gift box.',
      shortDescription: 'Premium assortment of gourmet desserts',
      ingredients: [],
    },
  ],
  spreads: [
    {
      _id: 'spread-1',
      name: 'Almond Cocoa Spread',
      price: 249,
      slug: 'almond-cocoa-spread',
      category: 'spreads',
      images: ['https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80'],
      description: 'Smooth and creamy almond cocoa spread for your morning toast.',
      shortDescription: 'Rich chocolate almond butter',
      ingredients: ['Almonds', 'Cocoa Powder', 'Honey', 'Coconut Oil'],
    },
  ],
  'instant-mixes': [
    {
      _id: 'mix-1',
      name: 'Instant Millet Pancake Mix',
      price: 189,
      slug: 'instant-millet-pancake-mix',
      category: 'instant-mixes',
      images: ['https://images.unsplash.com/photo-1604908177529-471eebec86ce?auto=format&fit=crop&w=800&q=80'],
      description: 'Quick and easy pancake mix made with nutritious millet flour.',
      shortDescription: 'Ready-to-make pancake mix with millet',
      ingredients: ['Millet Flour', 'Whole Wheat Flour', 'Baking Powder', 'Sugar'],
    },
  ],
}

function getAllProducts(): Product[] {
  return Object.values(PRODUCT_CATALOG).flat()
}

export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string
  const addItem = useCartStore((state) => state.addItem)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const product = useMemo(() => {
    const allProducts = getAllProducts()
    return allProducts.find((p) => p.slug === slug)
  }, [slug])

  if (!product) {
    return (
      <main className="min-h-screen bg-mithai-off px-4 py-10 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-[1160px] text-center">
          <h1 className="text-4xl font-bold text-mithai-maroonD mb-4">Product Not Found</h1>
          <p className="text-mithai-taupe mb-8">The product you're looking for doesn't exist.</p>
          <Link
            href="/shop"
            className="inline-block bg-mithai-maroon text-white px-8 py-4 rounded-full font-semibold transition hover:bg-mithai-maroonL"
          >
            Back to Shop
          </Link>
        </div>
      </main>
    )
  }

  const handleAddToCart = () => {
    addItem(
      {
        _id: product._id,
        name: product.name,
        slug: product.slug,
        description: product.description || product.name,
        shortDescription: product.shortDescription || product.name,
        price: product.price,
        images: product.images,
        category: product.category,
        ingredients: product.ingredients || [],
        stock: 20,
        tags: [],
        featured: false,
        bestSeller: false,
        rating: 4.8,
        reviewCount: 12,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      quantity
    )
  }

  return (
    <main className="min-h-screen bg-mithai-off px-4 py-10 sm:px-7 lg:px-10">
      <div className="mx-auto max-w-[1160px]">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm">
          <Link href="/shop" className="text-mithai-maroon hover:underline">
            Shop
          </Link>
          <span className="text-mithai-taupe">/</span>
          <span className="text-mithai-taupe">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div>
            <div className="rounded-[28px] bg-white border border-[rgba(107,31,31,0.1)] overflow-hidden mb-4 h-96">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                      selectedImage === idx
                        ? 'border-mithai-maroon'
                        : 'border-mithai-off hover:border-mithai-cream'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-6">
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-mithai-gold mb-2">
                {product.category}
              </div>
              <h1 className="font-medino text-4xl font-normal text-mithai-maroonD mb-3 tracking-[-0.01em] leading-[0.95]">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-mithai-maroon">₹{product.price}</span>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-semibold text-mithai-maroon">4.8</span>
                  <span>⭐</span>
                  <span className="text-sm text-mithai-taupe">(12 reviews)</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="font-runiga text-lg font-semibold text-mithai-maroonD mb-2">About this product</h2>
              <p className="text-mithai-taupe leading-relaxed">{product.description}</p>
            </div>

            {/* Ingredients */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div className="mb-6">
                <h2 className="font-runiga text-lg font-semibold text-mithai-maroonD mb-3">Key Ingredients</h2>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-mithai-off text-mithai-maroon px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="border-t border-mithai-off pt-6">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-semibold text-mithai-maroonD">Quantity:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full bg-mithai-off text-mithai-maroon text-lg font-bold hover:bg-mithai-cream transition flex items-center justify-center"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold text-mithai-maroon w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full bg-mithai-off text-mithai-maroon text-lg font-bold hover:bg-mithai-cream transition flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-mithai-maroon text-white px-6 py-4 rounded-full font-semibold text-lg transition hover:bg-mithai-maroonL mb-3"
              >
                Add to Cart
              </button>

              <Link
                href="/shop"
                className="w-full block text-center bg-mithai-off text-mithai-maroon px-6 py-4 rounded-full font-semibold text-lg transition hover:bg-mithai-cream"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
