'use client'

export default function GiftsSection() {
  return (
    <section id="gifts" className="sec bg-white">
      <div className="container">
        <div className="banner">
          <div className="banner-inner">
            <h2 className="banner-title">
              Thoughtful <em>Gifting</em>
            </h2>
            <p className="banner-subtitle">
              Premium hampers & festive gift boxes. Made with love, wrapped with intention.
            </p>
            <div className="banner-features">
              <div className="feature">
                <span className="feature-icon">🎁</span>
                <div className="feature-text">
                  <h4>Gift Boxes</h4>
                  <p>Curated hampers for every occasion</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">✍️</span>
                <div className="feature-text">
                  <h4>Custom Messages</h4>
                  <p>Personalized greeting cards</p>
                </div>
              </div>
              <div className="feature">
                <span className="feature-icon">🎀</span>
                <div className="feature-text">
                  <h4>Premium Wrapping</h4>
                  <p>Beautifulpackaging</p>
                </div>
              </div>
            </div>
            <a href="/shop?category=gift-boxes" className="banner-cta">
              Explore Gifts
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <style jsx>{`
          .banner {
            background: linear-gradient(135deg, #6b1f1f 0%, #8b2f2f 50%, #4a1515 100%);
            padding: 52px 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
            border-radius: 28px;
          }
          .banner::before {
            content: '';
            position: absolute;
            inset: 0;
            background-image: radial-gradient(
              circle,
              rgba(227, 180, 72, 0.13) 1px,
              transparent 1px
            );
            background-size: 24px 24px;
            pointer-events: none;
          }
          .banner-inner {
            position: relative;
            z-index: 1;
          }
          .banner-title {
            font-family: 'Libre Baskerville', serif;
            font-size: clamp(28px, 6vw, 42px);
            color: white;
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 12px;
          }
          .banner-title em {
            font-style: italic;
            color: #e3b448;
          }
          .banner-subtitle {
            color: rgba(255, 255, 255, 0.7);
            font-size: 15px;
            line-height: 1.65;
            margin-bottom: 32px;
          }
          .banner-features {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-bottom: 32px;
          }
          .feature {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }
          .feature-icon {
            font-size: 32px;
          }
          .feature-text h4 {
            font-size: 13px;
            font-weight: 700;
            color: white;
            margin-bottom: 4px;
          }
          .feature-text p {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.6);
          }
          .banner-cta {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: #e3b448;
            color: #6b1f1f;
            padding: 13px 28px;
            border-radius: 100px;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.03em;
            text-decoration: none;
            transition: all 0.22s;
          }
          .banner-cta:hover {
            background: #fdf8ec;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          }
          @media (max-width: 640px) {
            .banner-features {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
