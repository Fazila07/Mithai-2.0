'use client'

const HIGHLIGHTS = [
  { label: 'Almonds', emoji: '🌰' },
  { label: 'Jaggery', emoji: '🍯' },
  { label: 'Millets', emoji: '🌾' },
  { label: 'Pumpkin Seeds', emoji: '🎃' },
  { label: 'Oats', emoji: '🌾' },
  { label: 'Flax Seeds', emoji: '💪' },
  { label: 'Ragi', emoji: '🌿' },
]

export default function WhyUsSection() {
  return (
    <section id="why-us" className="sec bg-white">
      <div className="container">
        <div className="sec-head text-center">
         
          <h2 className="sec-title">Why Us?</h2>
          
        </div>

        <div className="ring-wrap">
          <div className="ring" />
          <div className="center-card">
            <strong>Ingredients</strong>
            
          </div>

          {HIGHLIGHTS.map((item, index) => (
            <div key={item.label} className={`point point-${index + 1}`}>
              <div className="point-badge">{item.emoji}</div>
              <div className="point-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ring-wrap {
          position: relative;
          width: min(760px, 100%);
          aspect-ratio: 1 / 1;
          margin: 0 auto;
          display: grid;
          place-items: center;
          padding: 28px 18px;
        }

        .ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px dashed rgba(107, 31, 31, 0.18);
          box-shadow: inset 0 0 0 1px rgba(227, 180, 72, 0.1);
          animation: spin 20s linear infinite;
        }

        .center-card {
          position: relative;
          z-index: 2;
          width: 240px;
          min-height: 240px;
          border-radius: 50%;
          background: radial-gradient(circle at top left, rgba(227, 180, 72, 0.24), rgba(255, 255, 255, 0.96));
          border: 1px solid rgba(107, 31, 31, 0.12);
          box-shadow: 0 24px 50px rgba(107, 31, 31, 0.12);
          display: grid;
          place-items: center;
          padding: 26px;
          text-align: center;
          color: #4a1515;
        }

        .center-card strong {
          display: block;
          font-family: 'Libre Baskerville', serif;
          font-size: 1.1rem;
          line-height: 1.5;
          font-weight: 700;
        }

        .point {
          position: absolute;
          width: 110px;
          min-height: 110px;
          padding: 16px;
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.94);
          border: 1px solid rgba(107, 31, 31, 0.12);
          box-shadow: 0 18px 40px rgba(107, 31, 31, 0.08);
          display: grid;
          place-items: center;
          text-align: center;
          gap: 10px;
          font-size: 0.9rem;
          color: #5c3d2e;
          animation: float 6s ease-in-out infinite;
        }

        .point-badge {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 1.35rem;
          background: linear-gradient(135deg, rgba(227,180,72,0.15), rgba(107,31,31,0.08));
          color: #6b1f1f;
        }

        .point-label {
          font-weight: 700;
          letter-spacing: 0.01em;
        }

        .point-1 { top: 6%; left: 50%; transform: translateX(-50%); }
        .point-2 { top: 24%; right: 6%; }
        .point-3 { top: 55%; right: 6%; }
        .point-4 { bottom: 8%; left: 58%; }
        .point-5 { bottom: 8%; left: 18%; }
        .point-6 { top: 55%; left: 6%; }
        .point-7 { top: 24%; left: 10%; }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @media (max-width: 720px) {
          .ring-wrap {
            padding: 18px;
          }
          .point {
            width: 96px;
            min-height: 96px;
            padding: 14px;
          }
          .point-2, .point-3, .point-6, .point-7 {
            left: auto;
            right: auto;
          }
          .point-2 { right: 6%; top: 20%; }
          .point-3 { right: 0; top: 53%; }
          .point-6 { left: 0; top: 53%; }
          .point-7 { left: 10%; top: 20%; }
        }
      `}</style>
    </section>
  )
}
