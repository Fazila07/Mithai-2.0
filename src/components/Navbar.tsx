'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-white/94 backdrop-blur-[14px] border-b border-[rgba(107,31,31,0.1)] transition-all duration-300">
        <div className="relative h-full flex items-center justify-between px-[18px]">
          <button
            className="hamburger flex flex-col gap-1 bg-none border-none p-1 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className="block w-5 h-0.5 bg-mithai-maroon rounded transition-all duration-200"></span>
            <span className="block w-5 h-0.5 bg-mithai-maroon rounded transition-all duration-200"></span>
            <span className="block w-5 h-0.5 bg-mithai-maroon rounded transition-all duration-200"></span>
          </button>

          <Link
            href="/"
            className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center transition-opacity duration-200 hover:opacity-90"
          >
            <div className="brand-logo font-medino text-[#6B1F1A] text-center">
              <span className="brand-name">Mithai</span>
              <span className="brand-suffix">2.0</span>
            </div>
          </Link>

          <div className="nav-right ml-auto flex justify-end items-center gap-3">
            <button className="icon-btn" aria-label="Search">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
            <Link href="/cart" className="icon-btn" aria-label="Cart">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-0 transition-all duration-300 ${
          mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <button
          className="absolute top-[18px] right-[18px] bg-none border-none text-2xl text-mithai-maroon leading-none"
          onClick={() => setMobileMenuOpen(false)}
        >
          ✕
        </button>
        <div className="brand-logo text-[#6B1F1A] text-center mb-8">
          <span className="brand-name">Mithai</span>
          <span className="brand-suffix">2.0</span>
        </div>
        <Link
          href="/#why-us"
          onClick={() => setMobileMenuOpen(false)}
          className="w-full text-center py-[18px] text-lg font-semibold text-mithai-dark border-b border-[rgba(107,31,31,0.1)]"
        >

          Why Us
        </Link>
        <Link
          href="/#categories"
          onClick={() => setMobileMenuOpen(false)}
          className="w-full text-center py-[18px] text-lg font-semibold text-mithai-dark border-b border-[rgba(107,31,31,0.1)]"
        >
          Categories
        </Link>
        <Link
          href="/shop"
          onClick={() => setMobileMenuOpen(false)}
          className="w-full text-center py-[18px] text-lg font-semibold text-mithai-dark border-b border-[rgba(107,31,31,0.1)]"
        >
          Shop
        </Link>
        <Link
          href="/#bestsellers"
          onClick={() => setMobileMenuOpen(false)}
          className="w-full text-center py-[18px] text-lg font-semibold text-mithai-dark border-b border-[rgba(107,31,31,0.1)]"
        >
          Best Sellers
        </Link>
        <Link
          href="/#why-us"
          onClick={() => setMobileMenuOpen(false)}
          className="w-full text-center py-[18px] text-lg font-semibold text-mithai-dark border-b border-[rgba(107,31,31,0.1)]"
        >
          Why Us?
        </Link>
      </div>

      <style jsx>{`
        .icon-btn {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          border: 1px solid rgba(107, 31, 31, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #4A1515;
          background: none;
          position: relative;
          transition: background 0.18s, transform 0.18s;
        }
        .icon-btn:hover {
          transform: translateY(-1px);
        }
        .icon-btn:active {
          background: #f9f0f0;
        }
        .brand-logo {
          white-space: nowrap;
        }
        .brand-logo .brand-name,
        .brand-logo .brand-suffix {
          display: inline-block;
          vertical-align: middle;
          line-height: 1;
          font-weight: 400;
        }
        .brand-logo .brand-name {
          font-size: 2.15rem;
        }
        .brand-logo .brand-suffix {
          font-size: 2.15rem;
          font-style: italic;
          letter-spacing: 0.18em;
          margin-left: 0.1em;
          color: #E3B448;
        }
        @media (min-width: 960px) {
          .hamburger {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}
