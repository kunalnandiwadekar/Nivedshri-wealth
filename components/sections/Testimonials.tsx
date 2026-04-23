'use client'

import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    name: 'Mr Vaibhav Devlekar',
    role: 'Head - Training & Quality, Reliable Spaces Private Limited',
    content: 'Nitesh is one of most approachable person, always ready to answer any queries related to financial planning in a simple way. A humble person with great knowledge of financial planning. I stay worry-free with his support in the investment part. I highly recommend him as a Financial advisor – a guide to create wealth.',
    rating: 5,
    image: '/testimonials/mr-vaibhav-devlekar.png'
  },
  {
    name: 'Mrs Priyanka Shetty',
    role: 'Head of Accounting, Nynas Naphthenics pvt ltd.',
    content: 'Nitesh is an exceptional investor and financial advisor who has consistently demonstrated a deep understanding of financial markets. His expertise and guidance have been invaluable to me, helping me make informed investment decisions and achieve my financial goals. Nitesh\'s professionalism, integrity, and commitment to his clients are truly commendable. I highly recommend him to anyone seeking trusted financial advice and investment expertise.',
    rating: 5,
    image: '/testimonials/mrs-priyanka-shetty.png'
  },
  {
    name: 'Mr Rigved Phadke',
    role: 'Actor, director, producer of Vedh Production',
    content: 'Nitesh Kandarkar has been an incredible guide in my investment journey. He\'s honest, transparent, and always puts long-term growth first. He never pushes unnecessary options and only recommends what truly benefits you. Thanks to his clear vision and consistent advice, I feel confident and well-prepared for future. One of the best in the field! Highly Recommended Financial Advisor !!',
    rating: 5,
    image: '/testimonials/mr-rigved-phadke.png'
  },
  {
    name: 'Shraddha Kadam Jain',
    role: 'Soul Coach & Grief support Guide - Healer',
    content: 'Nitesh is a game-changer for financial planning. For the last 7 years, he has been managing my funds. I can attest to his expertise, patience, and personalized approach. He multiplies wealth with smart investments and strategies. I Highly recommend Nitesh to anyone seeking a trusted financial advisor to create long term wealth & to achieve all your financial goals.',
    rating: 5,
    image: '/testimonials/shraddha-kadam-jain.png'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  // Detect mobile (show 1 card) vs desktop (show 2 cards)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const cardsPerView = isMobile ? 1 : 2
  const step = cardsPerView

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + step) % testimonials.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [step])

  useEffect(() => {
    if (trackRef.current) {
      const track = trackRef.current
      const parentWidth = track.parentElement?.offsetWidth || 0
      const cardWidth = parentWidth / cardsPerView
      track.style.transform = `translateX(-${currentIndex * (cardWidth + 24)}px)`
    }
  }, [currentIndex, cardsPerView])

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      const next = prev - step
      return next < 0 ? testimonials.length - step : next
    })
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + step) % testimonials.length)
  }

  return (
    <section
      className="
        testimonials-section relative overflow-hidden bg-[var(--ink)]
        px-5 py-16
        md:px-10 md:py-24
        lg:px-[72px] lg:py-[120px]
      "
    >
      {/* Background Gradient */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(203,176,119,0.06), transparent 70%)',
          top: '-200px', right: '-200px'
        }}
      />

      {/* Header */}
      <div
        className="
          mb-10 flex flex-col gap-5
          md:mb-14 md:flex-row md:justify-between md:items-end
          lg:mb-[72px]
        "
      >
        <div>
          <div
            className="eyebrow reveal flex items-center gap-[14px] font-semibold uppercase text-[var(--orange)] mb-5 tracking-[0.22em]
              text-[13px] md:text-[16px] lg:text-[20px]"
          >
            <span className="w-7 h-px bg-[var(--orange)]" />
            Testimonials
            <span className="w-7 h-px bg-[var(--orange)]" />
          </div>
          <h2
            className="testimonials-h2 reveal d1 font-cormorant font-semibold leading-[1.05] tracking-[-0.025em] text-[var(--cream)]
              text-[clamp(38px,8vw,60px)]
              md:text-[clamp(44px,6vw,66px)]
              lg:text-[clamp(48px,5vw,72px)]"
          >
            What our <em>clients say</em>
          </h2>
        </div>

        {/* Navigation */}
        <div className="test-nav reveal d2 flex gap-3">
          <button
            className="test-nav-btn w-12 h-12 border border-[rgba(203,176,119,0.2)] bg-transparent rounded-full flex items-center justify-center cursor-pointer"
            onClick={goToPrevious}
          >
            <svg viewBox="0 0 24 24" style={{ width: '20px', height: '20px', stroke: 'var(--gold)', fill: 'none', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
              <path d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            className="test-nav-btn w-12 h-12 border border-[rgba(203,176,119,0.2)] bg-transparent rounded-full flex items-center justify-center cursor-pointer"
            onClick={goToNext}
          >
            <svg viewBox="0 0 24 24" style={{ width: '20px', height: '20px', stroke: 'var(--gold)', fill: 'none', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
              <path d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Testimonials Track */}
      <div className="test-track-wrap overflow-hidden">
        <div
          ref={trackRef}
          className="test-track flex gap-6"
          style={{ transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1)' }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="test-card reveal d1 relative flex-shrink-0
                bg-[rgba(250,243,225,0.04)] border border-[rgba(203,176,119,0.1)]
                /* Mobile: full width; Desktop: half width */
                w-[calc(100%-0px)]
                md:w-[calc(50%-12px)]
                p-8 md:p-10 lg:p-[52px_48px]"
            >
              {/* Quote watermark */}
              <div
                className="absolute top-5 left-7 font-cormorant font-light leading-[0.8] pointer-events-none select-none
                  text-[80px] lg:text-[120px]"
                style={{ color: 'rgba(203,176,119,0.12)' }}
              >
                "
              </div>

              {/* Text */}
              <p
                className="test-text font-cormorant font-normal italic leading-[1.6] text-[var(--cream)] mb-8 relative z-[1]
                  text-[18px] md:text-[20px] lg:text-[24px]"
              >
                {testimonial.content}
              </p>

              {/* Stars — repositioned for mobile */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[var(--gold)] text-[22px] lg:text-[30px]">★</span>
                ))}
              </div>

              {/* Author */}
              <div className="test-author flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full border border-[rgba(203,176,119,0.3)] flex-shrink-0 overflow-hidden bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial.image})` }}
                />
                <div>
                  <div className="text-[13px] lg:text-[14px] font-semibold tracking-[0.04em] text-[var(--cream)]">
                    {testimonial.name}
                  </div>
                  <div className="text-[11px] font-light tracking-[0.06em] text-[rgba(250,243,225,0.4)] mt-1">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}