'use client'

const TESTIMONIALS = [
  {
    name: 'Priya M.',
    role: 'PCOS Warrior',
    text: 'Finally a dessert that doesn\'t make me feel guilty! The brownies are amazing and my blood sugar is stable.',
    rating: 5,
  },
  {
    name: 'Rahul K.',
    role: 'Fitness Enthusiast',
    text: 'No refined sugar but tastes so good. Been buying for 6 months now. Great quality!',
    rating: 5,
  },
  {
    name: 'Anjali S.',
    role: 'Mother of Two',
    text: 'My kids love these snacks and I love knowing exactly what goes into them. Best purchase ever!',
    rating: 5,
  },
  {
    name: 'Vikram P.',
    role: 'Health Coach',
    text: 'Recommend Mithai 2.0 to all my clients. The cookies are nutritious and delicious!',
    rating: 5,
  },
  {
    name: 'Deepa R.',
    role: 'Dietician',
    text: 'Clean ingredients, no hidden sugars. This is what mindful desserts should look like.',
    rating: 5,
  },
  {
    name: 'Arjun N.',
    role: 'Sweet Tooth',
    text: 'Didn\'t think healthy desserts could taste this good. Mind blown!',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testi-head">
          <span className="sec-label">Community Love</span>
          <h2 className="sec-title">What Our Customers Say</h2>
        </div>

        <div className="testi-scroll">
          <div className="testi-track">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testi, idx) => (
              <div key={idx} className="testi-card">
                <div className="tstar">{'★'.repeat(testi.rating)}</div>
                <p className="ttext">"{testi.text}"</p>
                <div className="tauth">{testi.name}</div>
                <div className="trole">{testi.role}</div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .testimonials {
            background: white;
            padding: 56px 0;
            overflow: hidden;
          }
          .testi-head {
            padding: 0 var(--px);
            margin-bottom: 28px;
          }
          .sec-label {
            font-size: 10px;
            font-weight: 700;
            letter-spacing: 0.16em;
            text-transform: uppercase;
            color: #e3b448;
            margin-bottom: 8px;
            display: block;
          }
          .sec-title {
            font-family: 'Playfair Display', serif;
            font-size: clamp(24px, 6vw, 42px);
            font-weight: 700;
            color: #4a1515;
            line-height: 1.18;
            margin-bottom: 10px;
          }
          .testi-scroll {
            overflow: hidden;
          }
          .testi-track {
            display: flex;
            gap: 16px;
            animation: marquee 32s linear infinite;
            width: max-content;
          }
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .testi-card {
            flex: 0 0 270px;
            background: #f7f3ee;
            border-radius: 18px;
            padding: 20px;
            border: 1px solid rgba(107, 31, 31, 0.1);
          }
          .tstar {
            color: #e3b448;
            font-size: 13px;
            margin-bottom: 8px;
            letter-spacing: 2px;
          }
          .ttext {
            font-size: 13px;
            color: #4A1515;
            line-height: 1.6;
            font-style: italic;
            margin-bottom: 12px;
          }
          .tauth {
            font-size: 11px;
            font-weight: 700;
            color: #6b1f1f;
            margin-bottom: 2px;
          }
          .trole {
            font-size: 10px;
            color: #6B1F1F;
          }
          :root {
            --px: 18px;
          }
          @media (min-width: 640px) {
            :root {
              --px: 28px;
            }
          }
          @media (min-width: 960px) {
            :root {
              --px: 40px;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
