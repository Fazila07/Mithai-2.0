'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-mithai-parchment text-mithai-charcoal px-[18px] py-12 md:px-7 md:py-12 lg:px-10 lg:py-7">
      <div className="max-w-[1160px] mx-auto">

        {/* Brand Section */}
        <div className="text-center mb-9 pb-7 border-b border-[rgba(144,12,0,0.12)]">
          <h2 className="brand-logo text-center mb-1">
            <span className="brand-name" style={{ color: '#900c00' }}>Mithai</span>
            <span className="brand-suffix" style={{ color: '#ffa520' }}>2.0</span>
          </h2>

          <p className="text-sm text-mithai-warmGray leading-[1.7] mb-5">
            Guilt-free desserts &amp; snacks made with love. No refined sugar, no maida, no compromises.
          </p>
          <div className="flex gap-2.5 justify-center">
            <a
              href="https://www.instagram.com/mithai2.0guiltfreetreats?igsh=ZDRxbGRzNGYwYW9i"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[rgba(144,12,0,0.20)] flex items-center justify-center text-mithai-maroon transition-all hover:bg-mithai-gold hover:border-mithai-gold hover:text-white"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
              </svg>
            </a>
            <a
              href="https://wa.me/919032538773"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-[rgba(144,12,0,0.20)] flex items-center justify-center text-mithai-maroon transition-all hover:bg-green-500 hover:border-green-500 hover:text-white"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.53.946-2.645 2.291-2.953 3.785a9.9 9.9 0 001.396 5.395 9.86 9.86 0 002.752 3.14c1.554 1.094 3.29 1.684 5.159 1.707h.004c1.086 0 2.147-.203 3.172-.63a9.877 9.877 0 003.488-2.081 9.87 9.87 0 002.081-3.488c.427-1.025.63-2.086.63-3.172 0-1.869-.613-3.606-1.708-5.16a9.865 9.865 0 00-3.14-2.752 9.877 9.877 0 00-5.395-1.396M2.534 22h-.01c-.819 0-1.625-.134-2.413-.4 1.552 1.016 3.382 1.597 5.328 1.6 6.063 0 10.988-4.925 10.988-10.988 0-2.034-.58-3.995-1.678-5.67A10.998 10.998 0 0012.012 2c-6.063 0-10.988 4.925-10.988 10.988 0 1.974.48 3.838 1.327 5.476l-.817 2.536z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-7 mb-8 md:grid-cols-4">
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-mithai-maroon mb-3.5">Shop</h4>
            <ul className="space-y-2.5">
              <li><Link href="/shop" className="text-sm text-mithai-warmGray transition-colors hover:text-mithai-maroon">All Products</Link></li>
              <li><Link href="/shop?category=cookies" className="text-sm text-mithai-warmGray transition-colors hover:text-mithai-maroon">Cookies</Link></li>
              <li><Link href="/shop?category=brownies" className="text-sm text-mithai-warmGray transition-colors hover:text-mithai-maroon">Brownies</Link></li>
              <li><Link href="/shop?category=gift-boxes" className="text-sm text-mithai-warmGray transition-colors hover:text-mithai-maroon">Gift Boxes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-mithai-maroon mb-3.5">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm text-mithai-warmGray transition-colors hover:text-mithai-maroon">About Us</Link></li>
              <li><Link href="/" className="text-sm text-mithai-warmGray transition-colors hover:text-mithai-maroon">Blog</Link></li>
              <li><Link href="/" className="text-sm text-mithai-warmGray transition-colors hover:text-mithai-maroon">Contact</Link></li>
              <li><Link href="/" className="text-sm text-mithai-warmGray transition-colors hover:text-mithai-maroon">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-mithai-maroon mb-3.5">Policies</h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm text-mithai-warmGray transition-colors hover:text-mithai-maroon">Shipping Policy</Link></li>
              <li><Link href="/" className="text-sm text-mithai-warmGray transition-colors hover:text-mithai-maroon">Refund Policy</Link></li>
              <li><Link href="/" className="text-sm text-mithai-warmGray transition-colors hover:text-mithai-maroon">Privacy Policy</Link></li>
              <li><Link href="/" className="text-sm text-mithai-warmGray transition-colors hover:text-mithai-maroon">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-mithai-maroon mb-3.5">Contact</h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-mithai-warmGray">📍 Hyderabad, India</li>
              <li className="text-sm text-mithai-warmGray">📧 [EMAIL_ADDRESS]</li>
              <li className="text-sm text-mithai-warmGray">📱 +91 9032538773</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[rgba(144,12,0,0.12)] pt-5 text-center">
          <p className="text-xs text-mithai-taupe leading-[1.7]">
            © {currentYear} Mithai 2.0. All rights reserved. Made with ❤️ in India.
          </p>
        </div>

      </div>
    </footer>
  )
}
