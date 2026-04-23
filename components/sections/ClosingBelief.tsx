'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function ClosingBelief() {
  const chainSteps = [
    {
      arrow: 'When',
      text: 'Your money has',
      strong: 'structure',
      subtext: 'decisions become easier'
    },
    {
      arrow: 'When',
      text: 'Decisions become',
      strong: 'easier',
      subtext: 'confidence increases'
    },
    {
      arrow: 'When',
      text: 'Confidence',
      strong: 'increases',
      subtext: 'wealth becomes stable'
    }
  ]

  useEffect(() => {
    const id = 'closing-responsive-styles'
    if (document.getElementById(id)) return
    const style = document.createElement('style')
    style.id = id
    style.innerHTML = `
      @media (max-width: 1024px) {
        .closing-section {
          padding: 100px 40px !important;
        }
        .closing-grid {
          grid-template-columns: 1fr !important;
        }
        .closing-left,
        .closing-right {
          padding: 72px 48px !important;
        }
      }
      @media (max-width: 768px) {
        .closing-section {
          padding: 80px 20px !important;
        }
        .closing-left,
        .closing-right {
          padding: 52px 24px !important;
        }
        .chain-text {
          font-size: 24px !important;
        }
        .chain-text span {
          font-size: 20px !important;
        }
        .chain-arrow {
          font-size: 16px !important;
        }
        .closing-quote {
          font-size: clamp(22px, 5vw, 32px) !important;
        }
        .closing-body {
          font-size: 14px !important;
        }
        .closing-btns {
          flex-direction: column !important;
          gap: 12px !important;
        }
        .closing-btns a,
        .closing-btns button {
          width: 100% !important;
          text-align: center !important;
          display: block !important;
        }
      }
    `
    document.head.appendChild(style)
  }, [])

  return (
    <section
      className="closing-section"
      style={{
        background: 'var(--bg)',
        padding: '160px 72px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          inset: '0',
          background: 'radial-gradient(ellipse at 60% 50%,rgba(160,120,48,0.05) 0%,transparent 65%)',
          pointerEvents: 'none'
        }}
      />

      <div
        className="closing-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1px',
          background: 'var(--divider)'
        }}
      >
        {/* Left Column - Chain of Clarity */}
        <div
          className="closing-left reveal-left"
          style={{
            padding: '100px 80px',
            background: 'var(--bg)'
          }}
        >
          <div
            className="section-eyebrow"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontSize: '25px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              fontWeight: '500',
              marginBottom: '20px'
            }}
          >
            <span className="line" style={{ width: '28px', height: '1px', background: 'var(--gold)' }} />
            The Chain of Clarity
          </div>

          <div
            className="closing-chain"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              marginTop: '48px'
            }}
          >
            {chainSteps.map((step, index) => (
              <div
                key={index}
                className="chain-step"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '24px',
                  padding: '28px 0',
                  borderBottom: index < 2 ? '1px solid var(--divider)' : 'none',
                  position: 'relative'
                }}
              >
                <span
                  className="chain-arrow"
                  style={{
                    fontSize: '22px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    fontWeight: '500',
                    paddingTop: '4px',
                    flexShrink: 0,
                    fontFamily: "'Outfit', sans-serif"
                  }}
                >
                  {step.arrow}
                </span>
                <div
                  className="chain-text"
                  style={{
                    fontFamily: "'Cormorant', serif",
                    fontSize: '32px',
                    fontWeight: '500',
                    color: 'var(--ink)',
                    lineHeight: '1.35'
                  }}
                >
                  {step.text} <strong style={{ color: 'var(--gold)' }}>{step.strong}</strong>
                  <span style={{ display: 'block', marginTop: '4px', color: 'var(--ink-dim)', fontStyle: 'italic', fontSize: '28px' }}>
                    {step.subtext}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Closing Thought */}
        <div
          className="closing-right reveal-right"
          style={{
            padding: '100px 80px',
            background: 'var(--bg2)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <div
            className="section-eyebrow"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              fontSize: '25px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              fontWeight: '500',
              marginBottom: '20px'
            }}
          >
            <span className="line" style={{ width: '28px', height: '1px', background: 'var(--gold)' }} />
            Closing Thought
          </div>

          <p
            className="closing-quote"
            style={{
              fontFamily: "'Cormorant', serif",
              fontSize: 'clamp(28px,2.6vw,42px)',
              fontStyle: 'italic',
              fontWeight: '400',
              color: 'var(--ink)',
              marginBottom: '36px'
            }}
          >
            Nivedshri Wealth is not built around transactions. It is built around{' '}
            <strong style={{ fontStyle: 'normal', color: 'var(--gold)', fontWeight: '600' }}>
              trust, clarity, and long-term thinking.
            </strong>
          </p>

          <p
            className="closing-body"
            style={{
              fontSize: '15px',
              color: 'var(--ink-mid)',
              lineHeight: '1.9',
              fontWeight: '300',
              marginBottom: '52px'
            }}
          >
            We are here to help you make better financial decisions — calmly, consistently, and with purpose. Because when your finances have direction, life feels clearer.
          </p>

          <div
            className="closing-btns"
            style={{
              display: 'flex',
              gap: '16px'
            }}
          >
            <Link href="/services">
              <button
                className="btn-primary"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'var(--gold)',
                  color: '#FAFAF8',
                  padding: '16px 36px',
                  fontSize: '13px',
                  border: 'none',
                  borderRadius: '1px',
                  cursor: 'pointer',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: '700',
                  fontFamily: "'Outfit', sans-serif",
                  transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                <span style={{ position: 'relative', zIndex: '1' }}>Begin Your Journey</span>
              </button>
            </Link>
            <Link href="/contact">
              <button
                className="btn-ghost"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'transparent',
                  color: 'var(--ink)',
                  padding: '16px 36px',
                  fontSize: '13px',
                  border: '1px solid var(--ink)',
                  borderRadius: '1px',
                  cursor: 'pointer',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontWeight: '400',
                  fontFamily: "'Outfit', sans-serif",
                  transition: 'border-color 0.3s, color 0.3s'
                }}
              >
                Talk to Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}