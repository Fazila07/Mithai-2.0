'use client'

import Link from 'next/link'

const CATEGORIES = [
  { name: 'Cookies', slug: 'cookies', image: '🍪', description: 'Crunchy baked treats' },
  { name: 'Brownies', slug: 'brownies', image: '🍫', description: 'Rich chocolate bites' },
  { name: 'Laddoos', slug: 'laddoos', image: '🎉', description: 'Traditional sweets' },
]

export default function CategorySection() {
  return (
    <section id="categories" className="sec bg-mithai-off">
      <div className="container">
        <div className="sec-head text-center">
          <h2 className="sec-title">Dive In</h2>

        </div>

        <div className="cat-grid">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/categories/${cat.slug}`}
              className="cat-card group"
            >
              <div className="cat-image">
                <div className="cat-image-inner">{cat.image}</div>
              </div>
              <div className="cat-copy">
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
                <span>Shop</span>
              </div>
            </Link>
          ))}
        </div>

        <style jsx>{`
          .cat-grid {
            display: grid;
            gap: 18px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .cat-card {
            display: block;
            border-radius: 28px;
            overflow: hidden;
            background: white;
            border: 1px solid rgba(107, 31, 31, 0.12);
            box-shadow: 0 12px 32px rgba(107, 31, 31, 0.08);
            transition: transform 0.28s ease, border-color 0.28s ease, box-shadow 0.28s ease;
            text-decoration: none;
            color: inherit;
          }
          .cat-card:hover {
            transform: translateY(-4px);
            border-color: rgba(107, 31, 31, 0.2);
            box-shadow: 0 18px 38px rgba(107, 31, 31, 0.14);
          }
          .cat-image {
            position: relative;
            min-height: 180px;
            display: grid;
            place-items: center;
            background: radial-gradient(circle at top left, rgba(227, 180, 72, 0.18), transparent 40%),
              linear-gradient(135deg, #f7f3ee 0%, #fbf5ec 100%);
          }
          .cat-image::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(255,255,255,0.1), transparent 70%);
          }
          .cat-image-inner {
            position: relative;
            width: 96px;
            height: 96px;
            border-radius: 24px;
            display: grid;
            place-items: center;
            background: rgba(107, 31, 31, 0.08);
            color: #6b1f1f;
            font-size: 2.5rem;
          }
          .cat-copy {
            padding: 22px;
          }
          .cat-copy h3 {
            font-size: 1.15rem;
            font-weight: 700;
            margin-bottom: 8px;
            color: #4a1515;
          }
          .cat-copy p {
            margin-bottom: 14px;
            font-size: 0.95rem;
            color: #7c5b45;
            line-height: 1.7;
          }
          .cat-copy span {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.85rem;
            font-weight: 700;
            color: #a36b4a;
            text-transform: uppercase;
            letter-spacing: 0.14em;
          }
          @media (min-width: 640px) {
            .cat-grid {
              grid-template-columns: repeat(4, minmax(0, 1fr));
            }
          }
        `}</style>
      </div>
    </section>
  )
}
