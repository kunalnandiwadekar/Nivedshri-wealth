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
        btn.style.borderColor = 'var(--orange)'
        btn.style.color = 'var(--orange)'
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
        btn.style.borderColor = 'var(--divider-ink)'
        btn.style.color = 'var(--ink)'
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
        /* Mobile: single col, tight padding */
        px-5 py-16 flex flex-col gap-12
        /* Tablet */
        md:px-10 md:py-24 md:gap-16
        /* Desktop: original 2-col grid */
        lg:grid lg:grid-cols-2 lg:gap-[120px] lg:items-center lg:px-[72px] lg:py-[140px]
      "
    >
      {/* Vertical divider — desktop only */}
      <div
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-[60%]"
        style={{ background: 'rgba(203,176,119,0.22)' }}
      />

      {/* ── LEFT CONTENT ── */}
      <div className="intro-left">
        {/* Eyebrow */}
        <div
          className="intro-eyebrow reveal flex items-center gap-[14px] font-semibold uppercase tracking-[0.24em] text-[var(--orange)] mb-7
            text-[13px] md:text-[16px] lg:text-[20px]"
        >
          <span className="w-7 h-px bg-[var(--orange)] flex-shrink-0" />
          Our Philosophy
        </div>

        {/* Headline */}
        <h2
          className="intro-h2 reveal d1 font-cormorant font-semibold leading-[1.02] tracking-[-0.025em] text-[#222222] mb-8
            text-[clamp(40px,10vw,64px)]
            md:text-[clamp(48px,7vw,72px)]
            lg:text-[clamp(52px,5.5vw,88px)]"
        >
          Wealth is a<br />
          <em className="italic font-light text-[var(--gold)]">journey,</em><br />
          not an event.
        </h2>

        {/* Body */}
        <p
          className="intro-desc reveal d2 font-light leading-[1.85] text-[#555444] mb-10
            text-[15px] max-w-full
            md:text-[17px] md:max-w-[480px]
            lg:text-[19px] lg:mb-12"
        >
          At NVS Wealth, we believe the most powerful force in investing is{' '}
          <strong className="text-[#222222] font-semibold">time and consistency</strong>. We don't
          chase market highs. We don't react to market lows. We plan, we invest, and we{' '}
          <strong className="text-[#222222] font-semibold">stay disciplined</strong>.
        </p>

        {/* Buttons */}
        <div className="intro-btns reveal d3 flex gap-3 flex-wrap">
          <Link href="/services">
            <button
              className="btn-orange relative overflow-hidden w-full sm:w-auto"
              onMouseMove={(e) => {
                const btn = e.currentTarget
                const r = btn.getBoundingClientRect()
                btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.14}px, ${(e.clientY - r.top - r.height / 2) * 0.2}px)`
              }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = '' }}
              style={{
                position: 'relative', overflow: 'hidden',
                background: 'var(--orange)', color: '#fff',
                padding: '17px 40px', fontSize: '12px', border: 'none',
                borderRadius: '1px', cursor: 'pointer', letterSpacing: '0.16em',
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
              className="btn-ghost relative overflow-hidden w-full sm:w-auto"
              onMouseMove={(e) => {
                const btn = e.currentTarget
                const r = btn.getBoundingClientRect()
                btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.14}px, ${(e.clientY - r.top - r.height / 2) * 0.2}px)`
              }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = '' }}
              style={{
                position: 'relative', overflow: 'hidden',
                background: 'transparent', color: 'var(--ink)',
                padding: '17px 40px', fontSize: '12px',
                border: '1.5px solid var(--divider-ink)',
                borderRadius: '1px', cursor: 'pointer', letterSpacing: '0.16em',
                textTransform: 'uppercase', fontWeight: '400',
                fontFamily: "'Outfit', sans-serif",
                transition: 'border-color 0.3s, color 0.3s', display: 'inline-block'
              }}
            >
              <span style={{ position: 'relative', zIndex: 10 }}>Meet Team</span>
              <span
                className="btn-before"
                style={{
                  position: 'absolute', inset: '0', background: 'var(--orange-faint)',
                  transform: 'translateX(-101%)',
                  transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              />
            </button>
          </Link>
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