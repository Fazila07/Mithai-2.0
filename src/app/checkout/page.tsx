'use client'

import Link from 'next/link'
import { useCartStore } from '@/store/cartStore'
import { useEffect, useState } from 'react'

export default function CheckoutPage() {
  const { items, total, itemCount } = useCartStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-mithai-off px-4 py-10 sm:px-7 lg:px-10">
        <div className="mx-auto max-w-[1160px]">
          <div className="mb-10">
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-mithai-gold mb-3">Checkout</div>
            <h1 className="font-medino text-4xl font-normal text-mithai-maroonD mb-2 tracking-[-0.01em] leading-[0.95]">
              Checkout
            </h1>
            <p className="text-sm text-mithai-taupe max-w-2xl">
              Your cart is empty. Add some items to proceed to checkout.
            </p>
          </div>
          <div className="rounded-[28px] bg-white border border-[rgba(107,31,31,0.1)] p-16 text-center">
            <div className="text-6xl mb-6">🛒</div>
            <h2 className="font-runiga text-2xl font-semibold text-mithai-maroonD mb-4">Your cart is empty</h2>
            <p className="text-mithai-taupe mb-8 max-w-md mx-auto">
              Looks like you haven't added any delicious treats yet. Start exploring our collection!
            </p>
            <Link
              href="/shop"
              className="inline-block bg-mithai-maroon text-white px-8 py-4 rounded-full font-semibold text-sm transition hover:bg-mithai-maroonL"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-mithai-off px-4 py-10 sm:px-7 lg:px-10">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-10">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-mithai-gold mb-3">Checkout</div>
          <h1 className="font-medino text-4xl font-normal text-mithai-maroonD mb-2 tracking-[-0.01em] leading-[0.95]">
            Checkout
          </h1>
          <p className="text-sm text-mithai-taupe max-w-2xl">
            Complete your order for {itemCount} item{itemCount > 1 ? 's' : ''}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shipping Form */}
          <div className="bg-white rounded-[28px] border border-[rgba(107,31,31,0.1)] p-8">
            <h2 className="font-runiga text-2xl font-semibold text-mithai-maroonD mb-6">Shipping Information</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-mithai-maroonD mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-mithai-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-mithai-gold"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-mithai-maroonD mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-mithai-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-mithai-gold"
                    placeholder="Enter last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-mithai-maroonD mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-mithai-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-mithai-gold"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-mithai-maroonD mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-mithai-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-mithai-gold"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-mithai-maroonD mb-2">Address</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 border border-mithai-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-mithai-gold"
                  placeholder="Enter full address"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-mithai-maroonD mb-2">City</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-mithai-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-mithai-gold"
                    placeholder="Enter city"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-mithai-maroonD mb-2">PIN Code</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-mithai-taupe/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-mithai-gold"
                    placeholder="Enter PIN code"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white rounded-[28px] border border-[rgba(107,31,31,0.1)] p-8">
              <h2 className="font-runiga text-2xl font-semibold text-mithai-maroonD mb-6">Order Summary</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product._id} className="flex items-center gap-4">
                    <img
                      src={item.product.images?.[0] ?? ''}
                      alt={item.product.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-mithai-maroonD">{item.product.name}</h3>
                      <p className="text-sm text-mithai-taupe">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-mithai-maroonD">₹{item.product.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-mithai-taupe/20 mt-6 pt-6">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total</span>
                  <span className="text-mithai-maroonD">₹{total}</span>
                </div>
              </div>
            </div>

            <button
              className="w-full bg-mithai-maroon text-white py-4 rounded-full font-semibold text-sm transition hover:bg-mithai-maroonL"
              onClick={() => alert('Payment integration coming soon!')}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}