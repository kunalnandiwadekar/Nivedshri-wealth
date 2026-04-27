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
      {/* Background Rings */}
      <div className="cta-bg-rings absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[
          { size: 300, color: 'rgba(203,176,119,0.08)' },
          { size: 500, color: 'rgba(203,176,119,0.08)' },
          { size: 700, color: 'rgba(255,102,0,0.05)' },
          { size: 900, color: 'rgba(203,176,119,0.08)' },
        ].map(({ size, color }, i) => (
          <div
            key={i}
            className="absolute rounded-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            style={{ width: size, height: size, border: `1px solid ${color}` }}
          />
        ))}
      </div>

      {/* Eyebrow */}
      <span className="cta-eyebrow reveal block font-semibold uppercase tracking-[0.24em] text-[var(--orange)] mb-6 text-[13px] md:text-[16px] lg:text-[20px]">
        Begin Your Journey
      </span>

      {/* Heading */}
      <h2 className="cta-h2 reveal d1 font-cormorant font-semibold leading-[1.02] tracking-[-0.03em] text-[var(--cream)] mb-5 text-[clamp(40px,9vw,72px)] md:text-[clamp(50px,8vw,88px)] lg:text-[clamp(56px,7vw,100px)]">
        Ready to bring{' '}
        <em className="italic font-light text-[var(--gold)]">clarity</em>
        <br className="hidden sm:block" />
        {' '}to your financial future?
      </h2>

      {/* Subheading */}
      <p className="cta-sub reveal d2 font-light leading-[1.8] text-[rgba(250,243,225,0.5)] mx-auto text-[14px] max-w-[320px] mb-10 md:text-[17px] md:max-w-[460px] md:mb-12 lg:text-[20px] lg:max-w-[520px] lg:mb-14">
        A calm, structured conversation focused entirely on your goals. No sales pitch. No pressure. No jargon.
      </p>

      {/* Buttons */}
      <div className="cta-btns reveal d3 flex gap-3 justify-center flex-wrap mb-8 flex-col items-center sm:flex-row sm:items-center">
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
            <span style={{ position: 'relative', zIndex: 1 }}>Book a Free Consultation</span>
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
            <span style={{ position: 'relative', zIndex: 1 }}>Talk to an Advisor</span>
          </button>
        </Link>
      </div>

      {/* Note */}
      <p className="cta-note reveal d4 text-[11px] tracking-[0.16em] uppercase text-[rgba(250,243,225,0.25)] mb-0">
        Pan India · Digital-First · Confidential
      </p>

      {/* ── TICKER STRIPS ─────────────────────────────── */}
      <style>{`
        @keyframes nvs-ticker1 {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes nvs-ticker2 {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .nvs-t1 { animation: nvs-ticker1 32s linear infinite; }
        .nvs-t1:hover { animation-play-state: paused; }
        .nvs-t2 { animation: nvs-ticker2 48s linear infinite; }
        .nvs-t2:hover { animation-play-state: paused; }
      `}</style>

      {/* Strip 1 — Channel Partner */}
      <div
        style={{
          position: 'absolute',
          bottom: '72px',
          left: 0,
          right: 0,
          overflow: 'hidden',
          borderTop: '1px solid rgba(203,176,119,0.18)',
          borderBottom: '1px solid rgba(203,176,119,0.18)',
          padding: '18px 0',
          background: 'rgba(203,176,119,0.04)',
        }}
      >
        {/* Fade masks */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(90deg, var(--ink, #1c1007), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(270deg, var(--ink, #1c1007), transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div className="nvs-t1" style={{ display: 'flex', width: 'max-content', alignItems: 'center' }}>
          {[...Array(8)].map((_, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
              {/* Label */}
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(11px, 1.1vw, 14px)',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(250,243,225,0.4)',
                fontWeight: 400,
                paddingRight: '18px',
              }}>
                In Association with
              </span>
              {/* Name */}
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(18px, 2.2vw, 30px)',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#CBB077',
                fontWeight: 700,
                paddingRight: '20px',
                lineHeight: 1,
              }}>
                Prudent Corporate Advisory Services Pvt. Ltd.
              </span>
              {/* Separator — small arrow */}
              <svg width="18" height="18" viewBox="0 0 18 18" style={{ marginRight: '36px', flexShrink: 0, opacity: 0.5 }}>
                <polygon points="9,0 18,9 9,18 0,9" fill="#CBB077" />
              </svg>
            </span>
          ))}
        </div>
      </div>

      {/* Strip 2 — AMC Partners */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          overflow: 'hidden',
          borderTop: '1px solid rgba(203,176,119,0.08)',
          padding: '14px 0',
          background: 'rgba(0,0,0,0.2)',
        }}
      >
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(90deg, var(--ink, #1c1007), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(270deg, var(--ink, #1c1007), transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div className="nvs-t2" style={{ display: 'flex', width: 'max-content', alignItems: 'center' }}>
          {[...Array(3)].map((_, ri) => (
            <span key={ri} style={{ display: 'flex', alignItems: 'center' }}>
              {[
                { name: 'Kotak Mahindra AMC', accent: true },
                { name: 'Nippon India', accent: true },
                { name: 'DSP Mutual Fund', accent: true },
                { name: 'ICICI Prudential', accent: true },
                { name: 'Aditya Birla Sun Life', accent: true },
              ].map((amc, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(13px, 1.5vw, 20px)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: amc.accent ? '#CBB077' : 'rgba(250,243,225,0.45)',
                    fontWeight: amc.accent ? 700 : 400,
                    paddingRight: '8px',
                    lineHeight: 1,
                  }}>
                    {amc.name}
                  </span>
                  {/* Dot */}
                  <span style={{ color: 'rgba(203,176,119,0.3)', fontSize: '22px', lineHeight: 1, paddingRight: '28px', marginTop: '-1px' }}>·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
      {/* ── END TICKER STRIPS ─────────────────────────── */}

    </section>
  )
}