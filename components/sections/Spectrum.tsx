'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Spectrum() {

  useEffect(() => {
    const id = 'spectrum-responsive-styles'
    if (document.getElementById(id)) return
    const style = document.createElement('style')
    style.id = id
    style.innerHTML = `
      @media (max-width: 1279px) and (min-width: 1024px) {
        .spectrum-section { padding: 120px 56px !important; }
        .spec-title { font-size: 28px !important; }
        .spec-desc { font-size: 17px !important; }
      }
      @media (max-width: 1023px) and (min-width: 768px) {
        .spectrum-section { padding: 100px 40px !important; }
        .spectrum-header { margin-bottom: 64px !important; }
        .spec-row1 { grid-template-columns: repeat(2, 1fr) !important; }
        .spec-row1 .spec-featured-col { grid-column: span 2 !important; }
        .spec-trio { grid-template-columns: repeat(3, 1fr) !important; }
        .spec-bottom { grid-template-columns: 1fr !important; }
        .spec-bottom .spec-featured-col { grid-column: span 1 !important; }
        .spec-item { padding: 36px 28px !important; }
        .spec-title { font-size: 26px !important; }
        .spec-desc { font-size: 16px !important; max-width: 100% !important; }
        .spec-outcome { flex-direction: column !important; gap: 32px !important; align-items: flex-start !important; padding: 40px 36px !important; }
        .spec-outcome-text { max-width: 100% !important; }
        .spec-outcome-btn { width: 100% !important; text-align: center !important; display: block !important; box-sizing: border-box !important; }
      }
      @media (max-width: 767px) {
        .spectrum-section { padding: 72px 20px !important; }
        .spectrum-header { margin-bottom: 48px !important; }
        .spec-row1 { grid-template-columns: 1fr !important; }
        .spec-row1 .spec-featured-col { grid-column: span 1 !important; }
        .spec-trio { grid-template-columns: 1fr !important; }
        .spec-bottom { grid-template-columns: 1fr !important; }
        .spec-quote-panel { display: none !important; }
        .spec-item { padding: 32px 20px !important; }
        .spec-title { font-size: 26px !important; }
        .spec-desc { font-size: 16px !important; max-width: 100% !important; }
        .spec-outcome { flex-direction: column !important; gap: 24px !important; align-items: flex-start !important; padding: 32px 20px !important; }
        .spec-outcome-text { font-size: clamp(20px, 5.5vw, 28px) !important; max-width: 100% !important; }
        .spec-outcome-btn { width: 100% !important; text-align: center !important; display: block !important; padding: 16px 24px !important; box-sizing: border-box !important; }
        .spec-re-badge { display: none !important; }
      }
      @media (max-width: 400px) {
        .spectrum-section { padding: 60px 16px !important; }
        .spec-item { padding: 28px 16px !important; }
        .spec-outcome { padding: 28px 16px !important; }
      }
    `
    document.head.appendChild(style)
  }, [])

  const iconStyle: React.CSSProperties = {
    width: '20px', height: '20px', stroke: 'var(--gold)', fill: 'none',
    strokeWidth: '1.5', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const
  }

  const hoverLine = (
    <div className="spec-hover-line" style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
      background: 'linear-gradient(to right, var(--gold-dark), var(--gold))',
      transform: 'scaleX(0)', transformOrigin: 'left',
      transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)'
    }} />
  )

  const onEnter = (e: React.MouseEvent<HTMLDivElement>, featured = false) => {
    const el = e.currentTarget
    el.style.background = featured ? 'var(--bg4)' : 'var(--bg4)'
    el.style.transform = 'translateY(-4px)'
    const line = el.querySelector('.spec-hover-line') as HTMLElement
    const num = el.querySelector('.spec-num') as HTMLElement
    const icon = el.querySelector('.spec-icon-wrap') as HTMLElement
    const title = el.querySelector('.spec-title') as HTMLElement
    if (line) line.style.transform = 'scaleX(1)'
    if (num) num.style.color = 'var(--gold)'
    if (icon) { icon.style.borderColor = 'var(--gold)'; icon.style.background = 'rgba(160,120,48,0.08)' }
    if (title) title.style.color = 'var(--orange)'
  }

  const onLeave = (e: React.MouseEvent<HTMLDivElement>, featured = false) => {
    const el = e.currentTarget
    el.style.background = featured ? 'var(--bg3)' : 'var(--bg2)'
    el.style.transform = 'translateY(0)'
    const line = el.querySelector('.spec-hover-line') as HTMLElement
    const num = el.querySelector('.spec-num') as HTMLElement
    const icon = el.querySelector('.spec-icon-wrap') as HTMLElement
    const title = el.querySelector('.spec-title') as HTMLElement
    if (line) line.style.transform = 'scaleX(0)'
    if (num) num.style.color = 'rgba(160,120,48,0.35)'
    if (icon) { icon.style.borderColor = 'var(--divider)'; icon.style.background = 'transparent' }
    if (title) title.style.color = 'var(--ink)'
  }

  const numStyle: React.CSSProperties = {
    fontSize: '15px', letterSpacing: '0.2em', textTransform: 'uppercase',
    color: 'rgba(160,120,48,0.35)', fontWeight: '500', marginBottom: '20px',
    display: 'block', transition: 'color 0.3s'
  }

  const iconWrapStyle: React.CSSProperties = {
    width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: '1px solid var(--divider)', borderRadius: '1px', marginBottom: '18px',
    transition: 'border-color 0.3s, background 0.3s'
  }

  const titleStyle: React.CSSProperties = {
    fontFamily: "'Cormorant', serif", fontSize: '35px', fontWeight: '600',
    color: 'var(--ink)', marginBottom: '10px', letterSpacing: '-0.01em',
    lineHeight: '1.15', transition: 'color 0.3s'
  }

  const descStyle = (maxW?: string): React.CSSProperties => ({
    fontSize: '20px', color: 'var(--ink-mid)', lineHeight: '1.8',
    fontWeight: '300', maxWidth: maxW || 'none'
  })

  const baseCard = (featured = false): React.CSSProperties => ({
    background: featured ? 'var(--bg3)' : 'var(--bg2)',
    padding: '48px 40px', position: 'relative', overflow: 'hidden',
    cursor: 'pointer', transition: 'background 0.4s, transform 0.4s cubic-bezier(0.22,1,0.36,1)'
  })

  return (
    <section className="spectrum-section" style={{
      background: 'var(--bg)', padding: '160px 72px',
      position: 'relative', overflow: 'hidden'
    }}>

      {/* Glows */}
      <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(160,120,48,0.04) 0%,transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(160,120,48,0.03) 0%,transparent 70%)', pointerEvents: 'none' }} />

      {/* Header */}
      <div className="spectrum-header" style={{ marginBottom: '100px', textAlign: 'center' }}>
        <div className="section-eyebrow reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', fontSize: '20px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: '500', marginBottom: '20px' }}>
          <span style={{ width: '28px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
          What We Help With
          <span style={{ width: '28px', height: '1px', background: 'var(--gold)', display: 'inline-block' }} />
        </div>
        <h2 className="reveal d1" style={{ fontFamily: "'Cormorant', serif", fontSize: 'clamp(44px,4.5vw,68px)', fontWeight: '600', lineHeight: '1.05', letterSpacing: '-0.02em', marginBottom: '20px', color: 'var(--ink)' }}>
          The Full Spectrum of<br />
          <em style={{ fontStyle: 'italic', color: 'var(--orange)', fontWeight: '300' }}>Long-Term Wealth Planning</em>
        </h2>
        <p className="reveal d2" style={{ fontSize: '20px', color: 'var(--ink-mid)', lineHeight: '1.9', fontWeight: '300', margin: '16px auto 0', maxWidth: '560px' }}>
          Our advisory covers everything connected to one outcome — long-term financial clarity.
        </p>
      </div>

      {/* ── GRID WRAPPER ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--divider)' }}>

        {/* ROW 1: Featured(span-2) + card02 + card03 */}
        <div className="spec-row1" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--divider)' }}>

          {/* 01 — Featured */}
          <div className="spec-featured-col reveal d1" style={{ ...baseCard(true), gridColumn: 'span 2' }}
            onMouseEnter={(e) => onEnter(e, true)} onMouseLeave={(e) => onLeave(e, true)}>
            {hoverLine}
            <span className="spec-num" style={numStyle}>01 — Core</span>
            <div className="spec-icon-wrap" style={iconWrapStyle}>
              <svg viewBox="0 0 24 24" style={iconStyle}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10" /></svg>
            </div>
            <div className="spec-title" style={titleStyle}>Goal-Based Financial Planning</div>
            <p className="spec-desc" style={descStyle('340px')}>Everything connected to a goal. Retirement, education, lifestyle, legacy — your financial structure is designed around what matters most to you, not around products.</p>
          </div>

          {/* 02 */}
          <div className="spec-item reveal d2" style={baseCard()} onMouseEnter={(e) => onEnter(e)} onMouseLeave={(e) => onLeave(e)}>
            {hoverLine}
            <span className="spec-num" style={numStyle}>02</span>
            <div className="spec-icon-wrap" style={iconWrapStyle}>
              <svg viewBox="0 0 24 24" style={iconStyle}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <div className="spec-title" style={titleStyle}>Retirement & Income Planning</div>
            <p className="spec-desc" style={descStyle()}>Build a corpus that lasts a lifetime with sustainable income strategies.</p>
          </div>

          {/* 03 */}
          <div className="spec-item reveal d3" style={baseCard()} onMouseEnter={(e) => onEnter(e)} onMouseLeave={(e) => onLeave(e)}>
            {hoverLine}
            <span className="spec-num" style={numStyle}>03</span>
            <div className="spec-icon-wrap" style={iconWrapStyle}>
              <svg viewBox="0 0 24 24" style={iconStyle}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            </div>
            <div className="spec-title" style={titleStyle}>Children's Education</div>
            <p className="spec-desc" style={descStyle()}>Long-term, structured planning for your child's education milestones.</p>
          </div>
        </div>

        {/* ROW 2: 3 cards evenly across full width */}
        <div className="spec-trio" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--divider)' }}>

          {/* 04 */}
          <div className="spec-item reveal d1" style={baseCard()} onMouseEnter={(e) => onEnter(e)} onMouseLeave={(e) => onLeave(e)}>
            {hoverLine}
            <span className="spec-num" style={numStyle}>04</span>
            <div className="spec-icon-wrap" style={iconWrapStyle}>
              <svg viewBox="0 0 24 24" style={iconStyle}><path d="M18 20V10M12 20V4M6 20v-6" /></svg>
            </div>
            <div className="spec-title" style={titleStyle}>Portfolio Structuring</div>
            <p className="spec-desc" style={descStyle()}>Asset allocation designed around your risk profile and timeline.</p>
          </div>

          {/* 05 */}
          <div className="spec-item reveal d2" style={baseCard()} onMouseEnter={(e) => onEnter(e)} onMouseLeave={(e) => onLeave(e)}>
            {hoverLine}
            <span className="spec-num" style={numStyle}>05</span>
            <div className="spec-icon-wrap" style={iconWrapStyle}>
              <svg viewBox="0 0 24 24" style={iconStyle}><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
            </div>
            <div className="spec-title" style={titleStyle}>Mutual Fund Strategy</div>
            <p className="spec-desc" style={descStyle()}>Curated fund selection tied to your specific goals and horizon.</p>
          </div>

          {/* 06 — Real Estate */}
          <div className="spec-item reveal d3" style={baseCard()} onMouseEnter={(e) => onEnter(e)} onMouseLeave={(e) => onLeave(e)}>
            {hoverLine}
            <span className="spec-re-badge" style={{
              position: 'absolute', top: '20px', right: '20px',
              fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--gold)', border: '1px solid var(--gold)',
              padding: '3px 10px', borderRadius: '1px', fontWeight: '600',
              background: 'rgba(160,120,48,0.06)'
            }}>New</span>
            <span className="spec-num" style={numStyle}>06</span>
            <div className="spec-icon-wrap" style={iconWrapStyle}>
              <svg viewBox="0 0 24 24" style={iconStyle}><path d="M3 21h18M3 7v14M21 7v14M6 3h12l3 4H3l3-4zM9 21V11h6v10" /></svg>
            </div>
            <div className="spec-title" style={titleStyle}>Real Estate Advisory</div>
            <p className="spec-desc" style={descStyle()}>Structured guidance on integrating real estate into your wealth plan — buy, hold, or liquidate decisions aligned with your overall financial goals.</p>
          </div>
        </div>

        {/* ROW 3: Insurance (featured left) + Quote panel (right) — no blank space */}
        <div className="spec-bottom" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--divider)' }}>

          {/* 07 — Protection */}
          <div className="spec-item reveal d1" style={baseCard(true)} onMouseEnter={(e) => onEnter(e, true)} onMouseLeave={(e) => onLeave(e, true)}>
            {hoverLine}
            <span className="spec-num" style={numStyle}>07 — Protection</span>
            <div className="spec-icon-wrap" style={iconWrapStyle}>
              <svg viewBox="0 0 24 24" style={iconStyle}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <div className="spec-title" style={titleStyle}>Insurance & Wealth Protection</div>
            <p className="spec-desc" style={descStyle('340px')}>Comprehensive protection planning — life, health, and wealth protection integrated into your overall financial structure. Because true wealth planning includes safeguarding what you've built.</p>
          </div>

          {/* Decorative quote panel — fills the blank space */}
          <div className="spec-quote-panel" style={{
            background: 'var(--bg2)', padding: '56px 60px',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            position: 'relative', overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', top: '-40px', right: '-40px',
              width: '300px', height: '300px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(160,120,48,0.06) 0%, transparent 70%)',
              pointerEvents: 'none'
            }} />
            <div style={{
              fontFamily: "'Cormorant', serif", fontSize: '110px',
              color: 'var(--gold)', lineHeight: '0.8', fontWeight: '700',
              opacity: '0.12', marginBottom: '28px'
            }}>&ldquo;</div>
            <p style={{
              fontFamily: "'Cormorant', serif",
              fontSize: 'clamp(22px, 1.8vw, 34px)',
              fontStyle: 'italic', fontWeight: '400',
              color: 'var(--ink)', lineHeight: '1.55',
              position: 'relative', zIndex: 1
            }}>
              True wealth planning is not just about growing money — it is about{' '}
              <strong style={{ color: 'var(--gold)', fontStyle: 'normal', fontWeight: '600' }}>
                protecting what you've worked a lifetime to build.
              </strong>
            </p>
            <div style={{ marginTop: '36px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '40px', height: '1px', background: 'var(--gold)', opacity: '0.4' }} />
              <span style={{
                fontSize: '13px', letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'var(--gold)', fontWeight: '500'
              }}>NVS Wealth Philosophy</span>
            </div>
          </div>
        </div>

      </div>{/* end grid wrapper */}

      {/* Outcome Strip */}
      <div className="spec-outcome reveal" style={{
        background: 'var(--bg2)', border: '1px solid var(--divider)',
        padding: '52px 60px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', position: 'relative',
        overflow: 'hidden', marginTop: '1px'
      }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: 'linear-gradient(to bottom, var(--gold-dark), var(--gold), var(--gold-bright))' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right,rgba(160,120,48,0.04),transparent 50%)', pointerEvents: 'none' }} />
        <p className="spec-outcome-text" style={{
          fontFamily: "'Cormorant', serif", fontSize: 'clamp(22px,2vw,40px)',
          fontStyle: 'italic', color: 'var(--ink)', lineHeight: '1.4',
          maxWidth: '600px', position: 'relative', zIndex: 1
        }}>
          Everything we do is connected to one outcome:<br />
          <strong style={{ color: 'var(--gold)', fontStyle: 'normal', fontWeight: '600' }}>Long-term financial clarity.</strong>
        </p>
        <Link href="/services" style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
          <button className="spec-outcome-btn" style={{
            background: 'var(--gold)', color: '#FAFAF8', padding: '16px 36px',
            fontSize: '18px', border: 'none', borderRadius: '1px', cursor: 'pointer',
            letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: '700',
            fontFamily: "'Outfit', sans-serif", transition: 'opacity 0.3s, box-shadow 0.3s',
            boxShadow: '0 8px 25px rgba(160,120,48,0.25)'
          }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--orange)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(212,83,10,0.4), 0 0 60px rgba(212,83,10,0.3)'; (e.currentTarget as HTMLElement).style.opacity = '0.92' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--gold)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 25px rgba(160,120,48,0.25)'; (e.currentTarget as HTMLElement).style.opacity = '1' }}
          >
            Explore Our Services
          </button>
        </Link>
      </div>
    </section>
  )
}