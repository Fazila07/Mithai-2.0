'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useCartStore } from '@/store/cartStore'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { itemCount } = useCartStore()
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-white/95 backdrop-blur-[14px] border-b border-[rgba(107,31,31,0.10)] transition-all duration-300">
        <div className="relative h-full flex items-center justify-between px-[14px]">

          {/* ── Left: hamburger (mobile) / nav links (desktop) ── */}
          <div className="flex items-center gap-6">
            <button
              className="hamburger flex flex-col gap-[5px] p-1 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <span className="block w-[22px] h-[2px] bg-mithai-maroon rounded transition-all duration-200" />
              <span className="block w-[22px] h-[2px] bg-mithai-maroon rounded transition-all duration-200" />
              <span className="block w-[22px] h-[2px] bg-mithai-maroon rounded transition-all duration-200" />
            </button>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-mithai-warmGray">
              <Link href="/" className="hover:text-mithai-maroon transition-colors">Home</Link>
              <Link href="/shop" className="hover:text-mithai-maroon transition-colors">Shop</Link>
              <Link href="/track-order" className="hover:text-mithai-maroon transition-colors">Track Order</Link>
            </div>
          </div>

          {/* ── Centre: logo ── */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center transition-opacity duration-200 hover:opacity-90"
          >
            <div className="brand-logo font-medino text-[#6B1F1A] text-center">
              <span className="brand-name">Mithai</span>
              <span className="brand-suffix">2.0</span>
            </div>
          </Link>

          {/* ── Right: search + cart ── */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <button className="nav-icon-btn" aria-label="Search">
              <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Cart */}
            <Link href="/cart" className="nav-icon-btn nav-icon-btn--cart" aria-label="Cart">
              <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {mounted && (
                <span className="cart-badge">{itemCount > 9 ? '9+' : itemCount}</span>
              )}
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Mobile full-screen menu ── */}
      <div
        className={`fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center gap-0 transition-all duration-300 ${
          mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        }`}
      >
        <button
          className="absolute top-[18px] right-[18px] text-2xl text-mithai-maroon leading-none bg-transparent border-none"
          onClick={() => setMobileMenuOpen(false)}
        >
          ✕
        </button>
        <div className="brand-logo text-[#6B1F1A] text-center mb-8">
          <span className="brand-name">Mithai</span>
          <span className="brand-suffix">2.0</span>
        </div>
        {[
          { href: '/', label: 'Home' },
          { href: '/shop', label: 'Shop' },
          { href: '/#bestsellers', label: 'Best Sellers' },
          { href: '/#categories', label: 'Categories' },
          { href: '/#why-us', label: 'Why Us?' },
          { href: '/track-order', label: '🚚 Track Order' },
          { href: '/login', label: 'My Account' },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-[17px] text-lg font-semibold text-mithai-charcoal border-b border-[rgba(107,31,31,0.08)] hover:text-mithai-maroon transition-colors"
          >
            {label}
          </Link>
        ))}
      </div>

      <style>{`
        /* Icon buttons — match the image circles */
        .nav-icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(107,31,31,0.18);
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4A1515;
          cursor: pointer;
          position: relative;
          transition: background 0.16s, border-color 0.16s, transform 0.15s;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nav-icon-btn:hover {
          background: #F9F0F0;
          border-color: rgba(107,31,31,0.35);
          transform: translateY(-1px);
        }
        .nav-icon-btn:active {
          transform: translateY(0);
          background: #F0E0E0;
        }

        /* Cart badge */
        .cart-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background: #6B1F1F;
          color: #FDF8EC;
          font-size: 9px;
          font-weight: 700;
          min-width: 17px;
          height: 17px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 3px;
          border: 1.5px solid #fff;
          line-height: 1;
        }

        /* Brand logo */
        .brand-logo { white-space: nowrap; }
        .brand-logo .brand-name,
        .brand-logo .brand-suffix {
          display: inline-block;
          vertical-align: middle;
          line-height: 1;
          font-weight: 400;
        }
        .brand-logo .brand-name  { font-size: 2.15rem; }
        .brand-logo .brand-suffix {
          font-size: 2.15rem;
          font-style: italic;
          letter-spacing: 0.18em;
          margin-left: 0.1em;
          color: #E3B448;
        }

        @media (min-width: 960px) {
          .hamburger { display: none !important; }
        }
      `}</style>
    </>
  )
}
