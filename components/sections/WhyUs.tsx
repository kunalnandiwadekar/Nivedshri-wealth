'use client'

import { useEffect } from 'react'

export default function WhyUs() {
  const whyItems = [
    {
      title: 'Calm, Structured Approach',
      desc: 'We bring structure to complex financial situations. No panic, no noise — just a steady, disciplined framework that holds through every market cycle.',
      icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
    },
    {
      title: 'Honest, Long-Term Advisory',
      desc: 'We say what needs to be said, not what sounds good. Our relationships are built on honesty and genuine alignment with your interests — always.',
      icon: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'
    },
    {
      title: 'Deep Market Cycle Experience',
      desc: '18+ years means we\'ve navigated multiple crashes, rallies, and everything in between. That experience shapes every recommendation we make.',
      icon: 'M2 20h.01M7 20v-4M12 20V10M17 20V4M22 20v-8'
    },
    {
      title: 'Clear Communication, No Jargon',
      desc: 'Finance doesn\'t have to be complicated. We translate complexity into clarity — so you always understand exactly what\'s happening and why.',
      icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'
    }
  ]

  useEffect(() => {
    const id = 'whyus-responsive-styles'
    if (document.getElementById(id)) return
    const style = document.createElement('style')
    style.id = id
    style.innerHTML = `
      @media (max-width: 1024px) {
        .why-section {
          padding: 100px 40px !important;
        }
        .why-grid {
          grid-template-columns: 1fr !important;
        }
        .why-item {
          padding: 40px 36px !important;
        }
        .promise-block {
          padding: 52px 40px !important;
        }
      }
      @media (max-width: 768px) {
        .why-section {
          padding: 80px 20px !important;
        }
        .why-header {
          margin: 0 auto 60px !important;
        }
        .why-grid {
          grid-template-columns: 1fr !important;
        }
        .why-item {
          grid-template-columns: auto 1fr !important;
          gap: 20px !important;
          padding: 32px 20px !important;
        }
        .why-icon-box {
          width: 48px !important;
          height: 48px !important;
        }
        .why-title {
          font-size: 26px !important;
        }
        .why-body {
          font-size: 16px !important;
        }
        .promise-block {
          padding: 48px 24px !important;
        }
        .promise-text {
          font-size: clamp(24px, 5vw, 36px) !important;
        }
      }
    `
    document.head.appendChild(style)
  }, [])

  return (
    <section
      className="why-section"
      style={{
        background: 'var(--bg2)',
        padding: '160px 72px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-100px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(160,120,48,0.06) 0%,transparent 65%)',
          pointerEvents: 'none'
        }}
      />

      {/* Header */}
      <div
        className="why-header"
        style={{
          maxWidth: '800px',
          marginBottom: '100px',
          textAlign: 'center',
          margin: '0 auto 100px'
        }}
      >
        <div
          className="section-eyebrow reveal"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            fontSize: '20px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontWeight: '500',
            marginBottom: '20px'
          }}
        >
          <span className="line" style={{ width: '28px', height: '1px', background: 'var(--gold)' }} />
          Why Clients Work With Us
          <span className="line" style={{ width: '28px', height: '1px', background: 'var(--gold)' }} />
        </div>
        <h2
          className="section-h2 reveal d1"
          style={{
            fontFamily: "'Cormorant', serif",
            fontSize: 'clamp(42px,4.5vw,64px)',
            fontWeight: '600',
            lineHeight: '1.05',
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            color: 'var(--ink)'
          }}
        >
          Chosen for <em style={{ fontStyle: 'italic', color: 'var(--orange)', fontWeight: '300' }}>Consistency</em>
        </h2>
        <p
          className="reveal d2"
          style={{
            fontSize: '16px',
            color: 'var(--ink-mid)',
            lineHeight: '1.9',
            fontWeight: '300',
            marginTop: '16px',
            textAlign: 'center'
          }}
        >
          Clients don't come to us for products. They come for clarity. And they stay because of consistency.
        </p>
      </div>

      {/* Why Grid */}
      <div
        className="why-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1px',
          background: 'var(--divider)',
          marginBottom: '80px'
        }}
      >
        {whyItems.map((item, index) => (
          <div
            key={index}
            className={`why-item reveal d${index + 1}`}
            style={{
              background: 'var(--bg)',
              padding: '56px 60px',
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              gap: '32px',
              alignItems: 'start',
              position: 'relative',
              cursor: 'none',
              transition: 'background 0.4s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bg3)'
              const iconBox = e.currentTarget.querySelector('.why-icon-box') as HTMLElement
              const title = e.currentTarget.querySelector('.why-title') as HTMLElement
              if (iconBox) {
                iconBox.style.borderColor = 'var(--gold)'
                iconBox.style.background = 'var(--gold-dim)'
                iconBox.style.transform = 'rotate(5deg)'
              }
              if (title) title.style.color = 'var(--orange)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bg)'
              const iconBox = e.currentTarget.querySelector('.why-icon-box') as HTMLElement
              const title = e.currentTarget.querySelector('.why-title') as HTMLElement
              if (iconBox) {
                iconBox.style.borderColor = 'var(--divider)'
                iconBox.style.background = 'transparent'
                iconBox.style.transform = 'rotate(0deg)'
              }
              if (title) title.style.color = 'var(--ink)'
            }}
          >
            {/* Hover Bottom Line */}
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                height: '1px',
                background: 'linear-gradient(to right,var(--gold),transparent)',
                opacity: '0',
                transition: 'opacity 0.4s'
              }}
            />

            <div
              className="why-icon-box"
              style={{
                width: '64px',
                height: '64px',
                border: '1px solid var(--divider)',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                transition: 'borderColor 0.3s, background 0.3s, transform 0.3s',
                flexShrink: 0
              }}
            >
              <svg
                className="ico"
                viewBox="0 0 24 24"
                style={{
                  width: '28px',
                  height: '28px',
                  stroke: 'var(--gold)',
                  fill: 'none',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round'
                }}
              >
                <path d={item.icon} />
              </svg>
            </div>

            <div className="why-content">
              <div
                className="why-title"
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: '34px',
                  fontWeight: '600',
                  color: 'var(--ink)',
                  marginBottom: '10px',
                  transition: 'color 0.3s'
                }}
              >
                {item.title}
              </div>
              <p
                className="why-body"
                style={{
                  fontSize: '20px',
                  color: 'var(--ink-mid)',
                  lineHeight: '1.8',
                  fontWeight: '300'
                }}
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Promise Block */}
      <div
        className="promise-block reveal"
        style={{
          background: 'var(--bg3)',
          border: '1px solid var(--divider-bright)',
          padding: '72px 80px',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '0',
            background: 'radial-gradient(ellipse at center,rgba(160,120,48,0.05) 0%,transparent 70%)',
            pointerEvents: 'none'
          }}
        />

        <div
          className="promise-eyebrow"
          style={{
            fontSize: '20px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontWeight: '500',
            marginBottom: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            position: 'relative',
            zIndex: 1
          }}
        >
          <span className="line" style={{ width: '28px', height: '1px', background: 'var(--gold)' }} />
          Our Promise
          <span className="line" style={{ width: '28px', height: '1px', background: 'var(--gold)' }} />
        </div>

        <p
          className="promise-text"
          style={{
            fontFamily: "'Cormorant', serif",
            fontSize: 'clamp(32px,3.2vw,52px)',
            fontWeight: '600',
            lineHeight: '1.2',
            color: 'var(--ink)',
            maxWidth: '800px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1
          }}
        >
          We don't promise quick results.<br />
          We focus on <em style={{ fontStyle: 'italic', color: 'var(--orange)', fontWeight: '300' }}>sustainable progress.</em>
        </p>
      </div>
    </section>
  )
}