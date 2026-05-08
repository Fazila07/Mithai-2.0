'use client'

import { useEffect, useState, useRef } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="hero-wrapper pt-[60px] bg-[#EDE3D5] pb-0">
      <section className="hero m-3 md:m-[12px] rounded-t-[32px] min-h-[calc(100svh-var(--nav)-12px)] bg-gradient-to-br from-[#FBF5EC] via-[#F5E8D0] to-[#E8CFA8] relative overflow-hidden flex items-stretch" ref={heroRef}>
        {/* SVG Background */}
        <svg className="hero-svg-bg absolute inset-0 pointer-events-none w-full h-full" viewBox="0 0 800 700" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M0,350 C80,290 200,420 320,340 C440,260 520,400 640,330 C720,280 770,310 800,300 L800,700 L0,700 Z" fill="rgba(107,31,31,0.045)" />
          <path d="M0,480 C100,410 240,530 380,460 C520,390 620,510 740,450 C780,428 800,440 800,440 L800,700 L0,700 Z" fill="rgba(227,180,72,0.07)" />
          <path d="M0,580 C140,540 280,610 420,570 C560,530 680,600 800,560 L800,700 L0,700 Z" fill="rgba(107,31,31,0.03)" />
          <circle cx="70" cy="70" r="110" fill="none" stroke="rgba(227,180,72,0.13)" strokeWidth="1.5" />
          <circle cx="70" cy="70" r="70" fill="none" stroke="rgba(227,180,72,0.08)" strokeWidth="1" />
          <circle cx="730" cy="640" r="130" fill="none" stroke="rgba(106, 26, 26, 0.07)" strokeWidth="1.5" />
        </svg>

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
                className="hbtn-ghost inline-flex items-center gap-2.25 bg-transparent text-mithai-maroon px-6 py-[13px] rounded-full text-[13px] font-semibold tracking-[0.05em] border border-[rgba(107,31,31,0.3)] transition-all duration-[260ms] no-underline hover:bg-[rgba(107,31,31,0.07)] hover:border-[rgba(107,31,31,0.55)]"
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
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0% {
              transform: translate(0, 0) scale(1);
            }
            100% {
              transform: translate(18px, 14px) scale(1.07);
            }
          }
          @keyframes float {
            0%,
            100% {
              transform: translateY(0) rotate(-1.5deg);
            }
            50% {
              transform: translateY(-16px) rotate(1.5deg);
            }
          }
          .animate-float {
            animation: float 4.5s ease-in-out infinite;
          }
          .hb-y {
            animation: blob 9s ease-in-out infinite alternate;
          }
          .hb-m {
            animation: blob 11s ease-in-out infinite alternate-reverse;
          }
          .mithai-text {
            font-size: 1em;
            font-weight: 400;
          }
          .version-text {
            font-size: 0.75em;
            margin-left: 0.1em;
            align-self: baseline;
          }
          @media (max-width: 768px) {
            .mithai-text {
              font-size: 1em;
            }
            .version-text {
              font-size: 0.8em;
            }
          }
        `}</style>
      </section>
    </div>
  )
}
