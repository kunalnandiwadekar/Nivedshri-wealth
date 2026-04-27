'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Intro() {
  const pillars = [
    {
      number: "01",
      title: "Clarity Over Complexity",
      description: "We simplify finance so you can make confident decisions. No jargon. No confusion. Just clear, purposeful guidance."
    },
    {
      number: "02",
      title: "Discipline as a Strategy",
      description: "The best investment strategy is one you can stick with. We build plans designed for the long run, not the next quarter."
    },
    {
      number: "03",
      title: "Compounding as a Belief",
      description: "Compounding rewards patience. Every year of disciplined investing multiplies its impact. We help you harness this quietly powerful force."
    },
    {
      number: "04",
      title: "Trust Built Over Time",
      description: "18+ years. Hundreds of families. One consistent philosophy. Our track record speaks through the relationships we've built."
    }
  ]

  useEffect(() => {
    const handleButtonHover = (e: Event) => {
      const btn = e.target as HTMLElement
      if (btn.classList.contains('btn-orange')) {
        btn.style.boxShadow = '0 20px 60px rgba(255,102,0,0.35)'
        const before = btn.querySelector('.btn-before') as HTMLElement
        if (before) before.style.transform = 'translateX(0)'
      } else if (btn.classList.contains('btn-ghost')) {
        btn.style.borderColor = 'rgba(255,255,255,0.8)'
        btn.style.color = '#fff'
        const before = btn.querySelector('.btn-before') as HTMLElement
        if (before) before.style.transform = 'translateX(0)'
      }
    }

    const handleButtonLeave = (e: Event) => {
      const btn = e.target as HTMLElement
      if (btn.classList.contains('btn-orange')) {
        btn.style.boxShadow = ''
        const before = btn.querySelector('.btn-before') as HTMLElement
        if (before) before.style.transform = 'translateX(-101%)'
      } else if (btn.classList.contains('btn-ghost')) {
        btn.style.borderColor = 'rgba(255,255,255,0.45)'
        btn.style.color = 'rgba(255,255,255,0.85)'
        const before = btn.querySelector('.btn-before') as HTMLElement
        if (before) before.style.transform = 'translateX(-101%)'
      }
    }

    const buttons = document.querySelectorAll('.btn-orange, .btn-ghost')
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

  return (
    <section
      className="
        relative overflow-hidden intro-section bg-[var(--cream)]
        px-5 py-16 flex flex-col gap-8
        md:px-10 md:py-24 md:gap-16
        lg:grid lg:grid-cols-2 lg:gap-[80px] lg:items-center lg:px-[72px] lg:py-[120px]
      "
    >
      {/* Vertical divider — desktop only */}
      <div
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-[60%]"
        style={{ background: 'rgba(203,176,119,0.22)' }}
      />

      {/* ── LEFT CONTENT — image card with content inside ── */}
      <div
        className="intro-left"
        style={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          /* Space from all sides — the card sits inset within the column */
          margin: '0',
          minHeight: '520px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          /* Subtle outer glow to lift card off cream bg */
          boxShadow: '0 32px 80px rgba(139,94,26,0.18), 0 8px 24px rgba(139,94,26,0.10)',
        }}
      >
        {/* Background image layer */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/journey.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          /* Lighter treatment — readable but image shows through beautifully */
          filter: 'blur(0px) brightness(0.62) saturate(1.1)',
          transform: 'scale(1.02)',
          zIndex: 0,
          borderRadius: '16px',
        }} />

        {/* Gradient overlay — dark at bottom for text, transparent at top to show image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(20,12,0,0.15) 0%, rgba(20,12,0,0.35) 40%, rgba(20,12,0,0.82) 100%)',
          zIndex: 1,
          borderRadius: '16px',
        }} />

        {/* Subtle gold top border accent */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '2px',
          background: 'linear-gradient(to right, transparent, rgba(212,168,67,0.7), transparent)',
          zIndex: 2,
        }} />

        {/* Content — sits above both layers */}
        <div style={{ position: 'relative', zIndex: 3, padding: '40px 44px 44px' }}>

          {/* Eyebrow */}
          <div
            className="intro-eyebrow reveal flex items-center gap-[14px] font-semibold uppercase tracking-[0.24em] mb-6"
            style={{ color: '#D4A843', fontSize: '13px' }}
          >
            <span style={{ width: '28px', height: '1px', background: '#D4A843', flexShrink: 0 }} />
            Our Philosophy
          </div>

          {/* Headline */}
          <h2
            className="intro-h2 reveal d1 font-cormorant font-semibold leading-[1.02] tracking-[-0.025em] mb-7"
            style={{
              color: '#FFFFFF',
              fontSize: 'clamp(40px, 5.5vw, 72px)',
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
            }}
          >
            Wealth is a<br />
            <em className="italic font-light" style={{ color: '#E2B94A' }}>journey,</em><br />
            not an event.
          </h2>

          {/* Body */}
          <p
            className="intro-desc reveal d2 font-light leading-[1.8] mb-10"
            style={{
              color: 'rgba(255,245,225,0.82)',
              fontSize: 'clamp(14px, 1.6vw, 17px)',
              maxWidth: '420px',
            }}
          >
            At NVS Wealth, we believe the most powerful force in investing is{' '}
            <strong style={{ color: '#fff', fontWeight: 600 }}>time and consistency</strong>. We don't
            chase market highs. We don't react to market lows. We plan, we invest, and we{' '}
            <strong style={{ color: '#fff', fontWeight: 600 }}>stay disciplined</strong>.
          </p>

          {/* Buttons */}
          <div className="intro-btns reveal d3 flex gap-3 flex-wrap">
            <Link href="/services">
              <button
                className="btn-orange relative overflow-hidden"
                onMouseMove={(e) => {
                  const btn = e.currentTarget
                  const r = btn.getBoundingClientRect()
                  btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.14}px, ${(e.clientY - r.top - r.height / 2) * 0.2}px)`
                }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = '' }}
                style={{
                  position: 'relative', overflow: 'hidden',
                  background: 'var(--orange)', color: '#fff',
                  padding: '15px 36px', fontSize: '11px', border: 'none',
                  borderRadius: '2px', cursor: 'pointer', letterSpacing: '0.18em',
                  textTransform: 'uppercase', fontWeight: '700',
                  fontFamily: "'Outfit', sans-serif", transition: 'box-shadow 0.3s',
                  display: 'inline-block'
                }}
              >
                <span style={{ position: 'relative', zIndex: 10 }}>Our Approach</span>
                <span
                  className="btn-before"
                  style={{
                    position: 'absolute', inset: '0', background: 'var(--orange-light)',
                    transform: 'translateX(-101%)',
                    transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
                  }}
                />
              </button>
            </Link>
            <Link href="/about">
              <button
                className="btn-ghost relative overflow-hidden"
                onMouseMove={(e) => {
                  const btn = e.currentTarget
                  const r = btn.getBoundingClientRect()
                  btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.14}px, ${(e.clientY - r.top - r.height / 2) * 0.2}px)`
                }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = '' }}
                style={{
                  position: 'relative', overflow: 'hidden',
                  background: 'transparent',
                  color: 'rgba(255,255,255,0.85)',
                  padding: '15px 36px', fontSize: '11px',
                  border: '1.5px solid rgba(255,255,255,0.45)',
                  borderRadius: '2px', cursor: 'pointer', letterSpacing: '0.18em',
                  textTransform: 'uppercase', fontWeight: '400',
                  fontFamily: "'Outfit', sans-serif",
                  transition: 'border-color 0.3s, color 0.3s', display: 'inline-block'
                }}
              >
                <span style={{ position: 'relative', zIndex: 10 }}>Meet Team</span>
                <span
                  className="btn-before"
                  style={{
                    position: 'absolute', inset: '0', background: 'rgba(255,255,255,0.08)',
                    transform: 'translateX(-101%)',
                    transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
                  }}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── RIGHT CONTENT — Pillars ── */}
      <div className="intro-right">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className={`intro-pillar reveal d${index + 1} relative cursor-pointer`}
            onMouseEnter={(e) => {
              const num = e.currentTarget.querySelector('.pillar-num') as HTMLElement
              const line = e.currentTarget.querySelector('.pillar-hover-line') as HTMLElement
              if (num) num.style.color = 'var(--orange)'
              if (line) line.style.transform = 'scaleY(1)'
            }}
            onMouseLeave={(e) => {
              const num = e.currentTarget.querySelector('.pillar-num') as HTMLElement
              const line = e.currentTarget.querySelector('.pillar-hover-line') as HTMLElement
              if (num) num.style.color = 'var(--gold)'
              if (line) line.style.transform = 'scaleY(0)'
            }}
            style={{
              padding: '28px 0',
              borderBottom: '1px solid rgba(34,34,34,0.10)',
              borderTop: index === 0 ? '1px solid rgba(34,34,34,0.10)' : 'none',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '20px',
            }}
          >
            {/* Hover line */}
            <div
              className="pillar-hover-line"
              style={{
                position: 'absolute', left: '-4px', top: '0', bottom: '0',
                width: '3px', background: 'var(--orange)',
                transform: 'scaleY(0)',
                transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                transformOrigin: 'bottom'
              }}
            />
            {/* Number */}
            <div
              className="pillar-num font-cormorant font-light leading-[1] flex-shrink-0 transition-colors duration-300"
              style={{
                fontSize: 'clamp(36px,5vw,48px)',
                color: '#FF6600',
                width: '48px',
              }}
            >
              {pillar.number}
            </div>
            <div>
              <div
                className="pillar-title font-semibold tracking-[0.02em] text-[#222222] mb-2"
                style={{ fontSize: 'clamp(16px,2.2vw,25px)' }}
              >
                {pillar.title}
              </div>
              <p
                className="pillar-body font-light leading-[1.7] text-[#555444]"
                style={{ fontSize: 'clamp(14px,1.8vw,20px)' }}
              >
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}