'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const chartRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    const handleButtonHover = (e: Event) => {
      const btn = e.target as HTMLElement
      if (btn.classList.contains('btn-gold')) {
        btn.style.boxShadow = '0 20px 60px rgba(203,176,119,0.45)'
        const before = btn.querySelector('.btn-before') as HTMLElement
        if (before) before.style.transform = 'translateX(0)'
      } else if (btn.classList.contains('btn-ghost-dark')) {
        btn.style.borderColor = 'var(--gold)'
        btn.style.color = 'var(--gold)'
        const before = btn.querySelector('.btn-before') as HTMLElement
        if (before) before.style.transform = 'translateX(0)'
      }
    }

    const handleButtonLeave = (e: Event) => {
      const btn = e.target as HTMLElement
      if (btn.classList.contains('btn-gold')) {
        btn.style.boxShadow = ''
        const before = btn.querySelector('.btn-before') as HTMLElement
        if (before) before.style.transform = 'translateX(-101%)'
      } else if (btn.classList.contains('btn-ghost-dark')) {
        btn.style.borderColor = 'rgba(250,243,225,0.18)'
        btn.style.color = 'rgba(250,243,225,0.72)'
        const before = btn.querySelector('.btn-before') as HTMLElement
        if (before) before.style.transform = 'translateX(-101%)'
      }
    }

    const buttons = document.querySelectorAll('.btn-gold, .btn-ghost-dark')
    buttons.forEach((btn) => {
      btn.addEventListener('mouseenter', handleButtonHover)
      btn.addEventListener('mouseleave', handleButtonLeave)
    })

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener('mouseenter', handleButtonHover)
        btn.removeEventListener('mouseleave', handleButtonLeave)
      })
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1600)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 28
      const y = (e.clientY / window.innerHeight - 0.5) * 28
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const titleVariants = {
    hidden: { opacity: 0, y: 110 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      className="
        min-h-screen relative overflow-hidden bg-[var(--h-bg)]
        /* Mobile: single column, tighter padding */
        grid grid-cols-1
        px-5 pt-[120px] pb-20
        gap-10
        /* Tablet (md): slightly more padding */
        md:px-10 md:pt-[140px] md:pb-24 md:gap-12
        /* Desktop (lg): original 2-col layout */
        lg:grid-cols-2 lg:items-center lg:px-[72px] lg:py-[120px_100px] lg:gap-[60px]
      "
    >
      {/* Ambient Glow Effects */}
      <motion.div
        className="absolute top-[8%] right-[8%] w-[620px] h-[620px] rounded-full bg-[radial-gradient(circle,rgba(203,176,119,0.08)_0%,transparent_70%)] pointer-events-none"
        animate={{ scale: [1, 1.18, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      />
      <motion.div
        className="absolute bottom-[-80px] left-[-60px] w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(255,102,0,0.06)_0%,transparent_70%)] pointer-events-none"
        animate={{ scale: [1, 1.18, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        style={{ transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)` }}
      />

      {/* Animated Rings — hidden on mobile to avoid clutter */}
      <motion.div
        className="hidden lg:block absolute border border-[var(--h-div)] rounded-full w-[380px] h-[380px] top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-[var(--gold)] shadow-[0_0_12px_var(--gold)]" />
      </motion.div>
      <motion.div
        className="hidden lg:block absolute border border-[rgba(203,176,119,0.06)] rounded-full w-[560px] h-[560px] top-[20%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-[var(--gold)] shadow-[0_0_12px_var(--gold)]" />
      </motion.div>
      <motion.div
        className="hidden lg:block absolute border border-[rgba(203,176,119,0.04)] rounded-full w-[740px] h-[740px] top-[11%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 130, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] rounded-full bg-[var(--gold)] shadow-[0_0_12px_var(--gold)]" />
      </motion.div>

      {/* ── LEFT CONTENT ── */}
      <div className="relative z-[2] lg:pr-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '14px',
            fontSize: '20px',
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontWeight: '500',
            marginBottom: '36px',
          }}
          /* Scale down eyebrow text on mobile */
          className="hero-eyebrow !text-[13px] md:!text-[16px] lg:!text-[20px] !mb-5 md:!mb-7 lg:!mb-9 whitespace-nowrap"
        >
          <span style={{ width: '40px', height: '1px', background: 'var(--gold)', flexShrink: 0 }} />
          18+ Years of Experience
          <span style={{ width: '40px', height: '1px', background: 'var(--gold)', flexShrink: 0 }} />
        </motion.div>

        {/* Headline */}
        <h1
          className="
            font-cormorant font-semibold text-[var(--cream)] tracking-[-0.025em]
            /* Mobile size */
            text-[clamp(44px,11vw,64px)] leading-[0.97] mb-6
            /* Tablet */
            md:text-[clamp(52px,8vw,76px)] md:mb-7
            /* Desktop: original */
            lg:text-[clamp(60px,6.2vw,96px)] lg:mb-9
          "
        >
          <div className="overflow-hidden block">
            <motion.span
              className="block"
              variants={titleVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Clarity in Wealth.
            </motion.span>
          </div>
          <div className="overflow-hidden block">
            <motion.span
              className="block italic font-light text-[var(--gold)]"
              variants={titleVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              Confidence
            </motion.span>
          </div>
          <div className="overflow-hidden block">
            <motion.span
              className="block"
              variants={titleVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              transition={{ duration: 1.1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              in Every Decision.
            </motion.span>
          </div>
        </h1>

        {/* Body copy */}
        <motion.p
          className="
            leading-[1.85] text-white font-light tracking-[0.01em]
            /* Mobile */
            text-[15px] max-w-full mb-10
            /* Tablet */
            md:text-[16px] md:max-w-[480px] md:mb-14
            /* Desktop: original */
            lg:text-[17px] lg:max-w-[420px] lg:mb-20
          "
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
        >
          Transforming income into structured, goal-driven wealth with disciplined financial
          planning and long-term vision — built for individuals who want clarity, not confusion.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-3 items-center flex-wrap lg:gap-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link href="/contact">
            <button
              className="btn-gold relative overflow-hidden w-full sm:w-auto !py-[13px] !px-[28px] sm:!py-[17px] sm:!px-[40px] !text-[13px] sm:!text-[15px]"
              onMouseMove={(e) => {
                const btn = e.currentTarget
                const r = btn.getBoundingClientRect()
                btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.14}px, ${(e.clientY - r.top - r.height / 2) * 0.2}px)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = ''
              }}
              style={{
                position: 'relative',
                overflow: 'hidden',
                background: 'var(--gold)',
                color: 'var(--ink)',
                padding: '17px 40px',
                fontSize: '15px',
                border: 'none',
                borderRadius: '1px',
                cursor: 'pointer',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                fontWeight: '700',
                fontFamily: "'Outfit', sans-serif",
                transition: 'box-shadow 0.3s',
                display: 'inline-block',
              }}
            >
              <span style={{ position: 'relative', zIndex: 10 }}>Start Your Financial Plan</span>
              <span
                className="btn-before"
                style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'var(--gold-bright)',
                  transform: 'translateX(-101%)',
                  transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              />
            </button>
          </Link>
          <Link href="/contact">
            <button
              className="btn-ghost-dark relative overflow-hidden w-full sm:w-auto !py-[13px] !px-[28px] sm:!py-[17px] sm:!px-[40px] !text-[13px] sm:!text-[15px]"
              onMouseMove={(e) => {
                const btn = e.currentTarget
                const r = btn.getBoundingClientRect()
                btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.14}px, ${(e.clientY - r.top - r.height / 2) * 0.2}px)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = ''
              }}
              style={{
                position: 'relative',
                overflow: 'hidden',
                background: 'transparent',
                color: 'rgba(250,243,225,0.72)',
                padding: '17px 40px',
                fontSize: '15px',
                border: '1.5px solid rgba(250,243,225,0.18)',
                borderRadius: '1px',
                cursor: 'pointer',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                fontWeight: '400',
                fontFamily: "'Outfit', sans-serif",
                transition: 'border-color 0.3s, color 0.3s',
                display: 'inline-block',
              }}
            >
              <span style={{ position: 'relative', zIndex: 10 }}>Book a Free Consultation</span>
              <span
                className="btn-before"
                style={{
                  position: 'absolute',
                  inset: '0',
                  background: 'rgba(255,255,255,0.04)',
                  transform: 'translateX(-101%)',
                  transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* ── RIGHT CONTENT — Chart ── */}
      <motion.div
        className="relative z-[2] flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-full max-w-[520px] relative mx-auto">
          {/* Experience Badge */}
          <motion.div
            className="
              absolute z-[4] bg-[rgba(22,20,16,0.93)] border border-[var(--h-div-b)] rounded-[3px] backdrop-blur-[20px] transition-all duration-350
              /* Mobile: inside top-left, smaller offset */
              top-[4%] left-0
              p-[12px_16px]
              /* Desktop: original offset */
              lg:top-[6%] lg:left-[-36px] lg:p-[18px_24px]
            "
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ borderColor: 'var(--gold)', y: -5 }}
          >
            <span className="font-cormorant text-[var(--gold)] leading-[1] block text-[28px] lg:text-[36px] font-semibold">
              18<sup style={{ fontSize: '48%', color: 'var(--gold)' }}>+</sup>
            </span>
            <span className="text-[8px] lg:text-[9px] tracking-[0.16em] uppercase text-[rgba(250,243,225,0.5)] mt-1 block font-medium">
              Years of
              <br />
              Experience
            </span>
          </motion.div>

          {/* Animated Chart SVG */}
          <svg
            ref={chartRef}
            viewBox="0 0 540 440"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="w-full h-auto"
          >
            <defs>
              <linearGradient id="lgLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B6B35" />
                <stop offset="50%" stopColor="#CBB077" />
                <stop offset="100%" stopColor="#EDD98A" />
              </linearGradient>
              <linearGradient id="lgArea" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#CBB077" stopOpacity="0.30" />
                <stop offset="100%" stopColor="#CBB077" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="lgOrng" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#CC5200" stopOpacity="0" />
                <stop offset="100%" stopColor="#FF6600" stopOpacity="0.28" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Grid */}
            <line x1="60" y1="50" x2="60" y2="360" stroke="rgba(203,176,119,0.08)" strokeWidth="1" />
            <line x1="160" y1="50" x2="160" y2="360" stroke="rgba(203,176,119,0.08)" strokeWidth="1" />
            <line x1="260" y1="50" x2="260" y2="360" stroke="rgba(203,176,119,0.08)" strokeWidth="1" />
            <line x1="360" y1="50" x2="360" y2="360" stroke="rgba(203,176,119,0.08)" strokeWidth="1" />
            <line x1="460" y1="50" x2="460" y2="360" stroke="rgba(203,176,119,0.08)" strokeWidth="1" />
            <line x1="40" y1="100" x2="490" y2="100" stroke="rgba(203,176,119,0.06)" strokeWidth="1" strokeDasharray="4 6" />
            <line x1="40" y1="180" x2="490" y2="180" stroke="rgba(203,176,119,0.06)" strokeWidth="1" strokeDasharray="4 6" />
            <line x1="40" y1="260" x2="490" y2="260" stroke="rgba(203,176,119,0.06)" strokeWidth="1" strokeDasharray="4 6" />
            <line x1="40" y1="340" x2="490" y2="340" stroke="rgba(203,176,119,0.06)" strokeWidth="1" strokeDasharray="4 6" />
            {/* Areas */}
            <path d="M60 340 C100 320,130 300,160 265 C200 225,220 252,260 196 C300 148,335 172,360 118 C385 78,430 64,460 42 L460 360 L60 360 Z" fill="url(#lgArea)" />
            <path d="M260 360 C300 350,340 340,380 310 C410 288,440 270,460 238 L460 360 Z" fill="url(#lgOrng)" opacity="0.5" />
            <path d="M60 360 C110 348,160 340,210 318 C260 296,310 285,360 268 C400 255,440 245,460 238" stroke="rgba(203,176,119,0.18)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="5 5" />
            {/* Main Line */}
            <motion.path
              d="M60 340 C100 320,130 300,160 265 C200 225,220 252,260 196 C300 148,335 172,360 118 C385 78,430 64,460 42"
              stroke="url(#lgLine)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.4, delay: 2.2, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Data Points */}
            <circle cx="60" cy="340" r="5" fill="#0C0B09" stroke="#CBB077" strokeWidth="2" />
            <circle cx="160" cy="265" r="5" fill="#0C0B09" stroke="#CBB077" strokeWidth="2" />
            <circle cx="260" cy="196" r="5" fill="#0C0B09" stroke="#CBB077" strokeWidth="2" />
            <circle cx="360" cy="118" r="5" fill="#0C0B09" stroke="#CBB077" strokeWidth="2" />
            {/* Animated End Point */}
            <circle cx="460" cy="42" r="22" fill="rgba(203,176,119,0.08)" />
            <circle cx="460" cy="42" r="14" fill="rgba(203,176,119,0.14)" />
            <circle cx="460" cy="42" r="7" fill="#CBB077" filter="url(#glow)" />
            <circle cx="460" cy="42" r="4" fill="#EDD98A" />
            <circle cx="460" cy="42" r="20" fill="none" stroke="rgba(255,102,0,0.15)" strokeWidth="1">
              <animate attributeName="r" values="12;28;12" dur="3s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
            </circle>
            {/* Label */}
            <rect x="366" y="14" width="94" height="24" rx="2" fill="rgba(203,176,119,0.12)" stroke="rgba(203,176,119,0.4)" strokeWidth="1" />
            <text x="413" y="30" textAnchor="middle" fontFamily="Outfit,sans-serif" fontSize="11" fill="#CBB077" fontWeight="600" letterSpacing="0.06em">₹500 CR+</text>
            <line x1="460" y1="42" x2="460" y2="360" stroke="rgba(203,176,119,0.16)" strokeWidth="1" strokeDasharray="4 5" />
            <line x1="40" y1="360" x2="490" y2="360" stroke="rgba(203,176,119,0.18)" strokeWidth="1" />
            {/* X-axis */}
            <text x="60" y="380" textAnchor="middle" fontFamily="Outfit,sans-serif" fontSize="10" fill="rgba(250,243,225,0.25)" letterSpacing="0.04em">2017</text>
            <text x="160" y="380" textAnchor="middle" fontFamily="Outfit,sans-serif" fontSize="10" fill="rgba(250,243,225,0.25)" letterSpacing="0.04em">2019</text>
            <text x="260" y="380" textAnchor="middle" fontFamily="Outfit,sans-serif" fontSize="10" fill="rgba(250,243,225,0.25)" letterSpacing="0.04em">2021</text>
            <text x="360" y="380" textAnchor="middle" fontFamily="Outfit,sans-serif" fontSize="10" fill="rgba(250,243,225,0.25)" letterSpacing="0.04em">2023</text>
            <text x="460" y="380" textAnchor="middle" fontFamily="Outfit,sans-serif" fontSize="10" fill="rgba(250,243,225,0.25)" letterSpacing="0.04em">2025</text>
            {/* Y-axis */}
            <text x="32" y="104" textAnchor="end" fontFamily="Outfit,sans-serif" fontSize="9" fill="rgba(250,243,225,0.18)">High</text>
            <text x="32" y="344" textAnchor="end" fontFamily="Outfit,sans-serif" fontSize="9" fill="rgba(250,243,225,0.18)">Low</text>
          </svg>

          {/* Advisor Card */}
          <div
            className="
              bg-[rgba(22,20,16,0.95)] border border-[var(--h-div-b)] rounded-[3px] backdrop-blur-[20px]
              transition-all duration-300 hover:border-[var(--gold)]
              flex items-center gap-4
              p-[14px_18px] mt-8
              md:p-[18px_22px] md:mt-10
              lg:p-[20px_26px] lg:mt-14 lg:gap-[18px]
            "
          >
            <div className="w-11 h-11 lg:w-[52px] lg:h-[52px] rounded-full bg-gradient-to-br from-[var(--gold-dark)] to-[var(--gold)] flex items-center justify-center font-cormorant text-xl lg:text-[22px] font-bold text-[var(--h-bg)] flex-shrink-0 border-2 border-[rgba(203,176,119,0.4)]">
              N
            </div>
            <div>
              <div className="font-cormorant text-[17px] lg:text-[20px] font-semibold text-[var(--cream)] tracking-[0.02em]">
                Nitesh Tara-Founder & Chief Executive Officer Nivedshri Wealth
              </div>
              <div className="text-[9px] lg:text-[10px] text-[var(--gold)] tracking-[0.16em] uppercase font-medium mt-1">
                Mutual Fund Distributor
              </div>
            </div>
            <div className="ml-auto text-right flex-shrink-0">
              <span className="text-[8px] lg:text-[9px] text-[rgba(250,243,225,0.38)] tracking-[0.1em] uppercase mb-1 block">
                AMFI Registered
              </span>
              <div className="w-9 h-[1px] bg-[var(--gold)] ml-auto opacity-60" />
            </div>
          </div>

          {/* AUM Badge */}
          <motion.div
            className="
              absolute z-[4] bg-[rgba(22,20,16,0.93)] border border-[var(--h-div-b)] rounded-[3px] backdrop-blur-[20px] transition-all duration-350
              /* Mobile: inside bottom-right */
              bottom-[14%] right-[4px]
              p-[10px_14px]
              /* Desktop: original offset */
              lg:bottom-[13%] lg:right-[-18px] lg:p-[18px_24px]
            "
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
            whileHover={{ borderColor: 'var(--gold)', y: -5 }}
          >
            <span className="font-cormorant font-semibold text-[var(--gold)] leading-[1] block text-[16px] lg:text-[26px]">
              500+<sup style={{ fontSize: '46%', color: 'var(--orange)' }}></sup>
            </span>
            <span className="text-[8px] lg:text-[9px] tracking-[0.16em] uppercase text-[rgba(250,243,225,0.5)] mt-1 block font-medium">
              <br />
              families
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Hint — hidden on mobile */}
      <motion.div
        className="hidden md:flex absolute bottom-9 left-18 items-center gap-3"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-11 h-[1px] bg-gradient-to-r from-[var(--gold)] to-transparent animate-pulse" />
        <span className="text-[9px] tracking-[0.22em] uppercase text-[rgba(250,243,225,0.26)]">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  )
}