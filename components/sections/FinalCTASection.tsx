'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function FinalCTASection() {
  useEffect(() => {
    const id = 'finalcta-responsive-styles'
    if (document.getElementById(id)) return
    const style = document.createElement('style')
    style.id = id
    style.innerHTML = `
      @media (max-width: 1024px) {
        .final-cta {
          padding: 120px 40px !important;
        }
        .cta-ring:nth-child(3),
        .cta-ring:nth-child(4) {
          display: none;
        }
      }
      @media (max-width: 768px) {
        .final-cta {
          padding: 80px 20px !important;
        }
        .cta-rings {
          display: none !important;
        }
        .cta-h2 {
          font-size: clamp(36px, 8vw, 52px) !important;
        }
        .cta-sub {
          font-size: 15px !important;
          margin-bottom: 40px !important;
        }
        .cta-btns {
          flex-direction: column !important;
          align-items: stretch !important;
          gap: 12px !important;
          padding: 0 12px !important;
        }
        .btn-gold-lg,
        .btn-outline-lg {
          width: 100% !important;
          padding: 16px 24px !important;
          text-align: center !important;
        }
        .cta-note {
          font-size: 10px !important;
        }
      }
    `
    document.head.appendChild(style)
  }, [])

  return (
    <section
      className="final-cta"
      style={{
        background: 'var(--bg2)',
        padding: '160px 72px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Orbital Rings */}
      <div
        className="cta-rings"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: '0'
        }}
      >
        <div
          className="cta-ring"
          style={{
            position: 'absolute',
            borderRadius: '50%',
            border: '1px solid var(--divider)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            animation: 'ahSpin 40s linear infinite'
          }}
        />
        <div
          className="cta-ring"
          style={{
            position: 'absolute',
            borderRadius: '50%',
            border: '1px solid var(--divider)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '500px',
            animation: 'ahSpin 65s linear infinite reverse',
            borderColor: 'rgba(160,120,48,0.07)'
          }}
        />
        <div
          className="cta-ring"
          style={{
            position: 'absolute',
            borderRadius: '50%',
            border: '1px solid var(--divider)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '700px',
            animation: 'ahSpin 90s linear infinite',
            borderColor: 'rgba(160,120,48,0.04)'
          }}
        />
        <div
          className="cta-ring"
          style={{
            position: 'absolute',
            borderRadius: '50%',
            border: '1px solid var(--divider)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '900px',
            height: '900px',
            animation: 'ahSpin 120s linear infinite reverse',
            borderColor: 'rgba(160,120,48,0.025)'
          }}
        />
      </div>

      {/* Content */}
      <div
        className="cta-eyebrow reveal"
        style={{
          fontSize: '20px',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          fontWeight: '500',
          marginBottom: '28px',
          position: 'relative',
          zIndex: '2'
        }}
      >
        Begin Your Journey
      </div>

      <h2
        className="cta-h2 reveal d1"
        style={{
          fontFamily: "'Cormorant', serif",
          fontSize: 'clamp(48px,5vw,76px)',
          fontWeight: '600',
          lineHeight: '1.05',
          color: 'var(--ink)',
          marginBottom: '28px',
          position: 'relative',
          zIndex: '2'
        }}
      >
        Ready to bring <em style={{ fontStyle: 'italic', color: 'var(--orange)', fontWeight: '300' }}>clarity</em><br />
        to your financial future?
      </h2>

      <p
        className="cta-sub reveal d2"
        style={{
          fontSize: '16px',
          color: 'var(--ink-mid)',
          lineHeight: '1.85',
          fontWeight: '300',
          maxWidth: '540px',
          margin: '0 auto 60px',
          position: 'relative',
          zIndex: '2'
        }}
      >
        A calm, structured conversation focused entirely on your goals. No sales pitch. No pressure. No jargon.
      </p>

      <div
        className="cta-btns reveal d3"
        style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          position: 'relative',
          zIndex: '2',
          marginBottom: '40px'
        }}
      >
        <Link href="/contact">
          <button
            className="btn-gold-lg"
            style={{
              position: 'relative',
              overflow: 'hidden',
              background: 'var(--gold)',
              color: '#FAFAF8',
              padding: '17px 40px',
              fontSize: '13px',
              border: 'none',
              borderRadius: '1px',
              cursor: 'pointer',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: '700',
              fontFamily: "'Outfit', sans-serif",
              transition: 'color 0.3s ease, boxShadow 0.3s ease'
            }}
          >
            <span style={{ position: 'relative', zIndex: '1' }}>Book a Free Consultation</span>
          </button>
        </Link>
        <Link href="/contact">
          <button
            className="btn-outline-lg"
            style={{
              background: 'transparent',
              color: 'var(--ink)',
              padding: '17px 40px',
              fontSize: '13px',
              border: '1px solid var(--ink)',
              borderRadius: '1px',
              cursor: 'pointer',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: '400',
              fontFamily: "'Outfit', sans-serif",
              transition: 'color 0.3s ease, border-color 0.3s ease'
            }}
          >
            Talk to a Wealth Advisor
          </button>
        </Link>
      </div>

      <p
        className="cta-note reveal d4"
        style={{
          fontSize: '11px',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--ink-mid)',
          fontWeight: '400',
          position: 'relative',
          zIndex: '2'
        }}
      >
        Pan India · Digital-First · Confidential
      </p>
    </section>
  )
}