'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

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
    content: "Nitesh is an exceptional investor and financial advisor who has consistently demonstrated a deep understanding of financial markets. His expertise and guidance have been invaluable to me, helping me make informed investment decisions and achieve my financial goals. Nitesh's professionalism, integrity, and commitment to his clients are truly commendable.",
    rating: 5,
    image: '/testimonials/mrs-priyanka-shetty.png'
  },
  {
    name: 'Mr Rigved Phadke',
    role: 'Actor, director, producer of Vedh Production',
    content: "Nitesh has been an incredible guide in my investment journey. He's honest, transparent, and always puts long-term growth first. He never pushes unnecessary options and only recommends what truly benefits you. Thanks to his clear vision and consistent advice, I feel confident and well-prepared for the future.",
    rating: 5,
    image: '/testimonials/mr-rigved-phadke.png'
  },
  {
    name: 'Mrs Shraddha Kadam',
    role: 'Soul Coach & Grief Support Guide - Healer',
    content: 'Nitesh is a game-changer for financial planning. For the last 7 years, he has been managing my funds. I can attest to his expertise, patience, and personalized approach. He multiplies wealth with smart investments and strategies. I highly recommend Nitesh to anyone seeking a trusted financial advisor.',
    rating: 5,
    image: '/testimonials/shraddha-kadam-jain.png'
  },
  {
    name: 'Mr Subir Rao',
    role: 'Associate Professor & Deputy Chair — S.P.Jain Institute of Management and Research',
    content: "I'm extremely satisfied with services provided by Nitesh. His ability to stay on top of market movements is impressive. He takes time to listen and tells me stuff tailored to my specific situation, rather than pushing products that might benefit him more. I've developed full trust over time and I'd highly recommend Nitesh.",
    rating: 4,
    image: '/testimonials/subir-rao.jpeg'
  },
  {
    name: 'Eswaran KPS',
    role: 'Proprietor, Astrom Business Associates',
    content: 'Nitesh has been more of a partner than just an advisor or service provider. He has helped us navigate both tough and great times prudently. His innate understanding of financial markets is evident from the returns on Investment.',
    rating: 5,
    image: '/testimonials/eswaran-kps.jpeg'
  },
  {
    name: 'Mr Ashish More',
    role: 'Inspector Fire, Maharashtra Fire Service',
    content: 'Dear Nitesh, Thank you for your prompt response and swift action in getting my account opened. I truly appreciate your thoughtful suggestions in selecting the right funds for investment, as well as the consistent support you provided until the SIP was successfully initiated.',
    rating: 4,
    image: '/testimonials/ashish-more.jpeg'
  },
  {
    name: 'Mr Shamiran Banerjee',
    role: 'Associate CEO, Morningstar, Inc',
    content: "I've had the privilege of working with Nitesh for the past year and I can confidently say that his expertise has been instrumental in helping me maximize my capital gains. His deep understanding of market dynamics and disciplined investment strategy consistently delivered results that exceeded my expectations.",
    rating: 5,
    image: '/testimonials/shamiran-banerjee.jpeg'
  },
  {
    name: 'Dr Manisha Phadke',
    role: 'DGM - Quality Assurance, Ajanta Pharma Ltd',
    content: 'Nitesh is very patient. As a person who was not knowing anything about finance, he explained everything in detail in simple language. He has taken all care of my investment and made my retirement tenure peaceful.',
    rating: 5,
    image: '/testimonials/manisha-phadke.jpeg'
  },
  {
    name: 'Mrs Lekha Bharathan',
    role: 'Vice President & National Manager - Audit, Reliance General Insurance',
    content: "If you wish to have a personal trustworthy friend who will also manage your money expertly for you, look no further than Nitesh. He was referred by a mutual friend and it's been two years of transparent, dedicated, stress-free relationship since.",
    rating: 5,
    image: '/testimonials/lekha-bharathan.jpeg'
  },
  {
    name: 'Mr SD Khandekar',
    role: 'Retired Sr. Accounts Officer, Mumbai Port Authority',
    content: 'Nitesh is a professional portfolio adviser. He is hard working and updated in his field. He has insight in his subject and the capability to keep investors satisfied not only by offering prompt services but by achieving optimum returns on their portfolios.',
    rating: 5,
    image: '/testimonials/sdkhandeka.jpeg'
  },
  {
    name: 'Mrs Sadhana Khandekar',
    role: 'Retired Manager, Air India Limited',
    content: 'I know Nitesh for a long time and I know his passion about financial planning. His guidance has proved very beneficial to me looking at the returns I am getting today. He keeps me updated about the capital market and advises me accordingly.',
    rating: 5,
    image: '/testimonials/sadhana-khandekar.jpeg'
  },
  {
    name: 'Mrs Gauri Paralikar',
    role: 'Investor',
    content: 'I have been investing in mutual funds for almost 10 years. Nitesh was the one who guided me through this entire process in depth. With his accurate knowledge, commitment and determination he has proven to be the best Financial Advisor. One can be totally worry free about their financial future with Nitesh as their planner.',
    rating: 5,
    image: '/testimonials/gauri.jpeg'
  },
  {
    name: 'Prasad Shetty',
    role: 'AVP - IndusInd Bank',
    content: "I have been investing in Mutual Funds through Nitesh for the past 15 years. His exceptional advice and services have helped me and my relatives achieve significant growth. Nitesh embodies the qualities of a truly professional Financial Adviser — passion, knowledge, and commitment to his clients.",
    rating: 5,
    image: '/testimonials/prasad.jpeg'
  },
  {
    name: 'Miss Pallavi Alva',
    role: 'Sr. Quality and Process Improvement Analyst - Morningstar India',
    content: 'Nitesh has been extremely helpful and supportive. He explains everything clearly and is always available when I need assistance. I truly appreciate his prompt and detailed guidance.',
    rating: 5,
    image: '/testimonials/pallavi.jpeg'
  },
  {
    name: 'Mrs Utkarsha Nijap',
    role: 'Senior Operations Analyst - Morningstar',
    content: "Nitesh has been instrumental in helping me organize and grow my finances. His deep understanding of financial planning, combined with his patient and practical approach, made me feel confident about my future. He doesn't just advise — he truly listens and tailors strategies to suit individual needs.",
    rating: 5,
    image: '/testimonials/utkarsha.jpeg'
  },
  {
    name: 'Mrs Sujitha Nair',
    role: 'Trust and Safety Advisor - Accenture Ltd',
    content: 'Nitesh has always placed his clients interest first. He always explains about risks, fees and other information critical to their decision making. You have helped me in many ways and I am glad that you are someone reputable and well-established. Thank you!',
    rating: 4,
    image: '/testimonials/sujitha.jpeg'
  },
  {
    name: 'शुभांगी जोशी',
    role: 'संगीत शिक्षिका – Naad Sangeet Vidyalaya',
    content: 'नमस्कार, मी ३ वर्षांपूर्वी दीर्घकालीन गुंतवणूक वाढ आणि नियमित उत्पन्न योजना या उद्देशाने गुंतवणूक केली होती. त्याचा मला खूप चांगला फायदा झाला आहे. नितेश प्रत्येक क्लायंटला आपलंच मानतो आणि गुंतवणुकीसंबंधी प्रामाणिक, विचारपूर्वक आणि मार्गदर्शक भूमिका घेतो.',
    rating: 5,
    image: '/testimonials/shubhangi.jpeg'
  },
  {
    name: 'Ankit Kamat',
    role: 'AVP - Citicorp Services India Pvt Ltd',
    content: 'Nitesh is passionate for his work and a very good advisor. Special thanks to him for assisting me build a customized MF portfolio based on my requirements and his market expertise. Together as a team our objective is to achieve capital appreciation, income generation and risk diversification.',
    rating: 5,
    image: '/testimonials/Ankit.jpeg'
  },
  {
    name: 'Mr Shirish Gurjar',
    role: 'Professional',
    content: "Mr. Nitesh has a sound knowledge of mutual funds. Since I was unaware of what to do with my savings, he has guided me with proper investment plans and has made me a secured investor. He studies the market thoroughly and guides his clients accordingly. His advices are really a matter of trust.",
    rating: 4,
    image: '/testimonials/Shirish.jpeg'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const cardsPerView = isMobile ? 1 : 2
  const totalGroups = Math.ceil(testimonials.length / cardsPerView)
  const currentGroup = Math.floor(currentIndex / cardsPerView)

  // Auto-slide — pauses on hover
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + cardsPerView
        return next >= testimonials.length ? 0 : next
      })
    }, 7000) // 7s — enough time to read long testimonials
    return () => clearInterval(timer)
  }, [cardsPerView, isPaused])

  // Sync track position
  useEffect(() => {
    if (!trackRef.current) return
    const parentWidth = trackRef.current.parentElement?.offsetWidth || 0
    const cardWidth = cardsPerView === 2 ? (parentWidth - 24) / 2 : parentWidth
    trackRef.current.style.transform = `translateX(-${currentIndex * (cardWidth + 24)}px)`
  }, [currentIndex, cardsPerView])

  const goToPrev = () => {
    setCurrentIndex((prev) => {
      const next = prev - cardsPerView
      return next < 0 ? testimonials.length - cardsPerView : next
    })
  }

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const next = prev + cardsPerView
      return next >= testimonials.length ? 0 : next
    })
  }

  const goToGroup = (groupIndex: number) => {
    setCurrentIndex(groupIndex * cardsPerView)
  }

  return (
    <section
      className="
        relative overflow-hidden bg-[var(--ink)]
        px-5 py-16
        md:px-10 md:py-24
        lg:px-[72px] lg:py-[120px]
      "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle radial glow top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '700px', height: '700px',
          background: 'radial-gradient(circle, rgba(203,176,119,0.055), transparent 68%)',
          top: '-250px', right: '-250px',
          borderRadius: '50%'
        }}
      />

      {/* Header */}
      <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:justify-between md:items-end lg:mb-[64px]">
        <div>
          <div className="reveal flex items-center gap-[14px] font-semibold uppercase text-[var(--orange)] mb-5 tracking-[0.22em] text-[13px] md:text-[16px] lg:text-[20px]">
            <span className="w-7 h-px bg-[var(--orange)]" />
            Testimonials
            <span className="w-7 h-px bg-[var(--orange)]" />
          </div>
          <h2 className="reveal d1 font-cormorant font-semibold leading-[1.05] tracking-[-0.025em] text-[var(--cream)] text-[clamp(42px,8vw,68px)] md:text-[clamp(48px,6vw,74px)] lg:text-[clamp(54px,5vw,80px)]">
            What our{' '}
            <em className="italic font-light text-[var(--gold)]">clients say</em>
          </h2>
        </div>

        {/* Nav arrows */}
        <div className="reveal d2 flex items-center gap-3">
          <button
            onClick={goToPrev}
            className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer"
            style={{
              border: '1px solid rgba(203,176,119,0.25)',
              background: 'transparent',
              transition: 'border-color 0.3s, background 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(203,176,119,0.7)'
              e.currentTarget.style.background = 'rgba(203,176,119,0.08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(203,176,119,0.25)'
              e.currentTarget.style.background = 'transparent'
            }}
            aria-label="Previous testimonials"
          >
            <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', stroke: 'var(--gold)', fill: 'none', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
              <path d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="w-11 h-11 rounded-full flex items-center justify-center cursor-pointer"
            style={{
              border: '1px solid rgba(203,176,119,0.25)',
              background: 'transparent',
              transition: 'border-color 0.3s, background 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(203,176,119,0.7)'
              e.currentTarget.style.background = 'rgba(203,176,119,0.08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(203,176,119,0.25)'
              e.currentTarget.style.background = 'transparent'
            }}
            aria-label="Next testimonials"
          >
            <svg viewBox="0 0 24 24" style={{ width: '18px', height: '18px', stroke: 'var(--gold)', fill: 'none', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
              <path d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Slider track */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6"
          style={{ transition: 'transform 0.65s cubic-bezier(0.22,1,0.36,1)' }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full md:w-[calc(50%-12px)]
                bg-[rgba(250,243,225,0.04)] border border-[rgba(203,176,119,0.1)]
                p-8 md:p-10 lg:p-12"
              style={{ transition: 'border-color 0.3s' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(203,176,119,0.28)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(203,176,119,0.1)'
              }}
            >
              {/* Large decorative quote mark */}
              <div
                className="absolute top-4 left-6 font-cormorant font-light leading-none pointer-events-none select-none"
                style={{
                  fontSize: '120px',
                  lineHeight: 1,
                  color: 'rgba(203,176,119,0.1)',
                }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-[3px] mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    style={{
                      width: '14px', height: '14px',
                      fill: i < t.rating ? 'var(--gold)' : 'rgba(203,176,119,0.2)',
                      flexShrink: 0
                    }}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              {/* Quote text */}
              <p
                className="font-cormorant italic leading-[1.65] text-[var(--cream)] mb-8 relative z-[1]"
                style={{
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  opacity: 0.88
                }}
              >
                "{t.content}"
              </p>

              {/* Divider */}
              <div
                className="mb-6"
                style={{ height: '1px', background: 'rgba(203,176,119,0.12)' }}
              />

              {/* Author row */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className="w-16 h-16 rounded-full flex-shrink-0 overflow-hidden"
                  style={{
                    border: '1.5px solid rgba(203,176,119,0.3)',
                    background: 'rgba(203,176,119,0.1)',
                    position: 'relative'
                  }}
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    style={{
                      width: '100%', height: '100%',
                      objectFit: 'cover', borderRadius: '50%'
                    }}
                    onError={(e) => {
                      // Fallback: show initials if image fails
                      const el = e.currentTarget
                      el.style.display = 'none'
                      const parent = el.parentElement
                      if (parent) {
                        parent.style.display = 'flex'
                        parent.style.alignItems = 'center'
                        parent.style.justifyContent = 'center'
                        parent.innerHTML = `<span style="font-family:'Cormorant Garamond',serif;font-size:20px;color:rgba(203,176,119,0.7);font-weight:300">${t.name.charAt(0)}</span>`
                      }
                    }}
                  />
                </div>
                <div>
                  <div
                    className="font-semibold tracking-[0.03em] text-[var(--cream)]"
                    style={{ fontSize: 'clamp(17px, 2vw, 22px)' }}
                  >
                    {t.name}
                  </div>
                  {t.role && (
                    <div
                      className="font-light tracking-[0.04em] mt-1"
                      style={{
                        fontSize: 'clamp(13px, 1.5vw, 15px)',
                        color: 'rgba(250,243,225,0.38)',
                        lineHeight: 1.4
                      }}
                    >
                      {t.role}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot pagination */}
      <div className="flex items-center justify-center gap-2 mt-10">
        {Array.from({ length: totalGroups }).map((_, i) => (
          <button
            key={i}
            onClick={() => goToGroup(i)}
            aria-label={`Go to group ${i + 1}`}
            style={{
              width: i === currentGroup ? '24px' : '6px',
              height: '6px',
              borderRadius: '3px',
              background: i === currentGroup
                ? 'var(--gold)'
                : 'rgba(203,176,119,0.25)',
              border: 'none',
              cursor: 'pointer',
              transition: 'width 0.4s cubic-bezier(0.22,1,0.36,1), background 0.3s',
              padding: 0,
              flexShrink: 0
            }}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div
        className="text-center mt-4"
        style={{
          fontSize: '11px',
          letterSpacing: '0.1em',
          color: 'rgba(203,176,119,0.35)',
          fontFamily: 'Outfit, sans-serif'
        }}
      >
        {currentGroup + 1} / {totalGroups}
      </div>
    </section>
  )
}