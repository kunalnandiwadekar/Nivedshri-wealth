'use client'

import Link from 'next/link'

export default function FinalCTA() {
  return (
    <section
      className="
        cta-section relative overflow-hidden bg-[var(--ink)] text-center
        px-5 py-20
        md:px-10 md:py-28
        lg:px-[72px] lg:py-[160px]
      "
    >
      {/* Background Rings — scale to viewport so they don't overflow badly on mobile */}
      <div
        className="cta-bg-rings absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        {[
          { size: 300, color: 'rgba(203,176,119,0.08)' },
          { size: 500, color: 'rgba(203,176,119,0.08)' },
          { size: 700, color: 'rgba(255,102,0,0.05)' },
          { size: 900, color: 'rgba(203,176,119,0.08)' },
        ].map(({ size, color }, i) => (
          <div
            key={i}
            className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            style={{
              width: size,
              height: size,
              border: `1px solid ${color}`,
            }}
          />
        ))}
      </div>

      {/* Eyebrow */}
      <span
        className="cta-eyebrow reveal block font-semibold uppercase tracking-[0.24em] text-[var(--orange)] mb-6
          text-[13px] md:text-[16px] lg:text-[20px]"
      >
        Begin Your Journey
      </span>

      {/* Heading */}
      <h2
        className="cta-h2 reveal d1 font-cormorant font-semibold leading-[1.02] tracking-[-0.03em] text-[var(--cream)] mb-5
          text-[clamp(40px,9vw,72px)]
          md:text-[clamp(50px,8vw,88px)]
          lg:text-[clamp(56px,7vw,100px)]"
      >
        Ready to bring{' '}
        <em className="italic font-light text-[var(--gold)]">clarity</em>
        <br className="hidden sm:block" />
        {' '}to your financial future?
      </h2>

      {/* Subheading */}
      <p
        className="cta-sub reveal d2 font-light leading-[1.8] text-[rgba(250,243,225,0.5)] mx-auto
          text-[14px] max-w-[320px] mb-10
          md:text-[17px] md:max-w-[460px] md:mb-12
          lg:text-[20px] lg:max-w-[520px] lg:mb-14"
      >
        A calm, structured conversation focused entirely on your goals. No sales pitch. No pressure. No jargon.
      </p>

      {/* Buttons */}
      <div
        className="cta-btns reveal d3 flex gap-3 justify-center flex-wrap mb-8
          flex-col items-center
          sm:flex-row sm:items-center"
      >
        <Link href="/contact">
          <button
            className="btn-orange w-full sm:w-auto"
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
            <span style={{ position: 'relative', zIndex: 1 }}>
              Book a Free Consultation
            </span>
          </button>
        </Link>
        <Link href="/contact">
          <button
            className="btn-ghost-dark w-full sm:w-auto"
            style={{
              position: 'relative', overflow: 'hidden',
              background: 'transparent', color: 'rgba(250,243,225,0.72)',
              padding: '17px 40px', fontSize: '12px',
              border: '1.5px solid rgba(250,243,225,0.18)',
              borderRadius: '1px', cursor: 'pointer', letterSpacing: '0.16em',
              textTransform: 'uppercase', fontWeight: '400',
              fontFamily: "'Outfit', sans-serif",
              transition: 'border-color 0.3s, color 0.3s', display: 'inline-block'
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>
              Talk to an Advisor
            </span>
          </button>
        </Link>
      </div>

      {/* Note */}
      <p
        className="cta-note reveal d4 text-[11px] tracking-[0.16em] uppercase text-[rgba(250,243,225,0.25)]"
      >
        Pan India · Digital-First · Confidential
      </p>
    </section>
  )
}