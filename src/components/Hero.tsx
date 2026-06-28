'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="hero-wrapper pt-[60px] bg-[#EDE3D5]">
      <section className="hero-banner relative w-full overflow-hidden">
        {/* Banner Image */}
        <div className="relative w-full">
          <Image
            src="/images/banner.jpg"
            alt="Mithai 2.0 - Guiltfree Goodies"
            width={1920}
            height={1280}
            priority
            unoptimized
            quality={100}
            className="w-full h-auto object-cover block"
            style={{ maxHeight: '80vh' }}
          />

<<<<<<< HEAD
        {/* Color blobs */}
        <div className="h-blob hb-y absolute w-[500px] h-[500px] rounded-full pointer-events-none z-0 bg-gradient-to-r from-[rgba(227,180,72,0.28)] to-transparent top-[-150px] right-[-100px] animate-blob" />
        <div className="h-blob hb-m absolute w-[380px] h-[380px] rounded-full pointer-events-none z-0 bg-gradient-to-r from-[rgba(107,31,31,0.14)] to-transparent bottom-[-100px] left-[-80px]" />

        {/* Inner layout */}
        <div className="hero-inner relative z-[2] w-full px-[18px] py-[52px] pb-[60px] flex flex-col gap-0 md:grid md:grid-cols-2 md:gap-6 md:py-14 md:px-7 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-16 lg:px-10">
          {/* LEFT: Text */}
          <div className={`hero-text-col flex flex-col items-start pb-9 md:pb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className={`hero-title-block mb-3.5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '150ms' }}>
              <div className="hero-h1 font-medino text-[clamp(42px,10vw,72px)] font-normal leading-[0.95] text-mithai-maroon tracking-[-0.02em] relative flex items-baseline gap-1 -webkit-font-smoothing-antialiased -moz-osx-font-smoothing-grayscale">
                <span className="mithai-text">Mithai</span><span className="version-text text-mithai-gold italic font-normal">2.0</span>
                <div className="h-[3px] w-[70%] bg-gradient-to-r from-mithai-gold to-transparent rounded mt-2.5 opacity-70 absolute bottom-0 left-0"></div>
              </div>
            </div>



            <div className={`hero-btns flex gap-3 flex-wrap transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{ transitionDelay: '420ms' }}>
              <a
                href="#categories"
                className="hbtn-primary inline-flex items-center gap-2.25 bg-mithai-maroon text-white px-[30px] py-3.5 rounded-full font-semibold text-[13px] tracking-[0.05em] shadow-[0_6px_24px_rgba(107,31,31,0.35),inset_0_1px_0_rgba(255,255,255,0.1)] transition-all duration-[260ms] relative overflow-hidden no-underline"
              >
                Shop Now
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#why-us"
                className="hbtn-ghost inline-6yyujhnflex items-center gap-2.25 bg-transparent text-mithai-maroon px-6 py-[13px] rounded-full text-[13px] font-semibold tracking-[0.05em] border border-[rgba(107,31,31,0.3)] transition-all duration-[260ms] no-underline hover:bg-[rgba(107,31,31,0.07)] hover:border-[rgba(107,31,31,0.55)]"
              >
                Learn More
              </a>
            </div>

            <div className={`hero-stats-row grid grid-cols-3 gap-2.5 mt-7 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '520ms' }}>
              <div className="stat-chip bg-white/75 backdrop-blur-[8px] rounded-[12px] px-2.5 py-3 text-center shadow-[0_4px_24px_rgba(107,31,31,0.08)] border border-white/60">
                <div className="sn font-serif text-xl font-bold text-mithai-maroon leading-none">500+</div>
                <div className="sl text-[9.5px] text-mithai-maroon mt-0.75 leading-[1.3]">Happy Customers</div>
              </div>
              <div className="stat-chip bg-white/75 backdrop-blur-[8px] rounded-[12px] px-2.5 py-3 text-center shadow-[0_4px_24px_rgba(107,31,31,0.08)] border border-white/60">
                <div className="sn font-serif text-xl font-bold text-mithai-maroon leading-none">0g</div>
                <div className="sl text-[9.5px] text-mithai-maroon mt-0.75 leading-[1.3]">Refined Sugar</div>
              </div>
              <div className="stat-chip bg-white/75 backdrop-blur-[8px] rounded-[12px] px-2.5 py-3 text-center shadow-[0_4px_24px_rgba(107,31,31,0.08)] border border-white/60">
                <div className="sn font-serif text-xl font-bold text-mithai-maroon leading-none">100%</div>
                <div className="sl text-[9.5px] text-mithai-maroon mt-0.75 leading-[1.3]">Clean Ingredients</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Product Visual */}
          <div className={`hero-img-col w-full flex items-end justify-center relative transition-all duration-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '250ms', minHeight: '300px' }}>
            <div className="hero-plate w-full max-w-[360px] rounded-t-[28px] bg-gradient-to-br from-mithai-maroon via-mithai-maroonL to-mithai-maroonD px-6 py-8 flex flex-col items-center shadow-[0_-8px_48px_rgba(107,31,31,0.3),inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_0_rgba(0,0,0,0.2)] relative overflow-hidden m-0 md:max-w-full md:rounded-t-[28px] md:min-h-[340px] lg:min-h-[460px] self-end">
              <div className="plate-eyebrow relative z-[2] font-serif text-[10px] tracking-[0.22em] uppercase text-white/50 mb-1.5 text-center">
                Artisan Selection
              </div>
              <div className="plate-name relative z-[2] font-runiga text-[clamp(24px,7vw,38px)] font-bold text-white text-center leading-[1.05] mb-5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.3)]">
                Signature <em className="text-mithai-gold italic">Brownies</em>
              </div>

              <div className="food-stack relative z-[2] flex flex-col items-center gap-1.5 pb-0">
                <div className="food-main text-[clamp(80px,20vw,110px)] drop-shadow-[0_14px_28px_rgba(0,0,0,0.45)] animate-float leading-none block">
                  🍫
                </div>
                <div className="food-row flex gap-5 items-end mt-[-10px]">
                  <div className="food-sm text-[clamp(30px,8vw,42px)] drop-shadow-[0_8px_14px_rgba(0,0,0,0.35)] leading-none block animate-float" style={{ animationDelay: '0.7s', animationDuration: '4.5s' }}>
                    🍒
                  </div>
                  <div className="food-sm text-[clamp(30px,8vw,42px)] drop-shadow-[0_8px_14px_rgba(0,0,0,0.35)] leading-none block animate-float" style={{ animationDelay: '1.4s', animationDuration: '3.8s' }}>
                    ✨
                  </div>
                </div>
              </div>

              <div className="plate-strip relative z-[3] w-[calc(100%+48px)] m-0 mx-[-24px] mt-5 bg-[rgba(0,0,0,0.25)] backdrop-blur-[6px] px-5 py-2.5 flex justify-center items-center gap-4 border-t border-white/10">
                <span className="text-[8.5px] font-bold tracking-[0.18em] text-white/55 uppercase whitespace-nowrap">Premium Quality</span>
                <span className="w-[3px] h-[3px] rounded-full bg-mithai-gold opacity-50"></span>
                <span className="text-[8.5px] font-bold tracking-[0.18em] text-white/55 uppercase whitespace-nowrap">Made Fresh</span>
              </div>
            </div>
=======
          {/* Buttons Overlay - positioned at bottom-right of the banner */}
          <div
            className={`hero-banner-buttons absolute transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <a
              href="/shop"
              className="hero-banner-btn"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="btn-icon">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              Shop
            </a>
            <a
              href="#why-us"
              className="hero-banner-btn"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="btn-icon">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              About
            </a>
>>>>>>> 6bdafe9 (Update Mithai-2.0 project)
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-banner-buttons {
          position: absolute;
          bottom: 8%;
          left: 4%;
          display: flex;
          gap: 14px;
          align-items: center;
          z-index: 10;
        }

        .hero-banner-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: #900c00;
          color: #ffa520;
          padding: 12px 32px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          border: 2px solid rgba(255, 165, 32, 0.3);
          box-shadow: 0 6px 28px rgba(144, 12, 0, 0.45),
                      inset 0 1px 0 rgba(255, 255, 255, 0.08);
          transition: all 280ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }

        .hero-banner-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 165, 32, 0.12),
            transparent
          );
          transition: left 0.5s ease;
        }

        .hero-banner-btn:hover::before {
          left: 100%;
        }

        .hero-banner-btn:hover {
          background-color: #b01600;
          transform: translateY(-2px);
          box-shadow: 0 10px 36px rgba(144, 12, 0, 0.55),
                      inset 0 1px 0 rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 165, 32, 0.55);
        }

        .hero-banner-btn:active {
          transform: translateY(0px);
          box-shadow: 0 4px 16px rgba(144, 12, 0, 0.4);
        }

        .btn-icon {
          flex-shrink: 0;
        }

        /* Responsive positioning */
        @media (max-width: 768px) {
          .hero-banner-buttons {
            bottom: 6%;
            left: 5%;
            gap: 10px;
          }

          .hero-banner-btn {
            padding: 10px 22px;
            font-size: 12px;
            gap: 6px;
          }

          .hero-banner-btn .btn-icon {
            width: 14px;
            height: 14px;
          }
        }

        @media (max-width: 480px) {
          .hero-banner-buttons {
            bottom: 5%;
            gap: 8px;
          }

          .hero-banner-btn {
            padding: 8px 18px;
            font-size: 11px;
          }
        }

        @media (min-width: 1200px) {
          .hero-banner-btn {
            padding: 14px 40px;
            font-size: 15px;
          }
        }
      `}</style>
    </div>
  )
}
