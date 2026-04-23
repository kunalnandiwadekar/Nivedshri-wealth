'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Spectrum() {
  const services = [
    {
      num: '01 — Core',
      title: 'Goal-Based Financial Planning',
      desc: 'Everything connected to a goal. Retirement, education, lifestyle, legacy — your financial structure is designed around what matters most to you, not around products.',
      icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z<polyline points="9 22 9 12 15 12 15 22"/>',
      featured: true
    },
    {
      num: '02',
      title: 'Retirement & Income Planning',
      desc: 'Build a corpus that lasts a lifetime with sustainable income strategies.',
      icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
      featured: false
    },
    {
      num: '03',
      title: "Children's Education",
      desc: "Long-term, structured planning for your child's education milestones.",
      icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2<circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
      featured: false
    },
    {
      num: '04',
      title: 'Portfolio Structuring',
      desc: 'Asset allocation designed around your risk profile and timeline.',
      icon: 'M18 20h-3l-4 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z',
      featured: false
    },
    {
      num: '05',
      title: 'Mutual Fund Strategy',
      desc: 'Curated fund selection tied to your specific goals and horizon.',
      icon: 'M22 12h-4l-3 9L9 3l-3 9H2',
      featured: false
    },
    {
      num: '06 — Protection',
      title: 'Insurance & Wealth Protection',
      desc: "Comprehensive protection planning — life, health, and wealth protection integrated into your overall financial structure. Because true wealth planning includes safeguarding what you've built.",
      icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
      featured: true
    }
  ]

  useEffect(() => {
    const id = 'spectrum-responsive-styles'
    if (document.getElementById(id)) return
    const style = document.createElement('style')
    style.id = id
    style.innerHTML = `
      /* ── Laptop (1024px – 1279px) ── */
      @media (max-width: 1279px) {
        .spectrum-section {
          padding: 120px 48px !important;
        }
        .spectrum-grid {
          grid-template-columns: repeat(4, 1fr) !important;
        }
      }

      /* ── Tablet (768px – 1023px) ── */
      @media (max-width: 1023px) {
        .spectrum-section {
          padding: 100px 36px !important;
        }
        .spectrum-header {
          margin-bottom: 64px !important;
        }
        .spectrum-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
        .spec-item.featured {
          grid-column: span 2 !important;
        }
        .spec-outcome {
          flex-direction: column !important;
          gap: 32px !important;
          align-items: flex-start !important;
          padding: 40px 36px !important;
        }
        .spec-outcome-text {
          max-width: 100% !important;
        }
        .btn-primary {
          width: 100% !important;
          text-align: center !important;
          display: block !important;
        }
      }

      /* ── Mobile (≤ 767px) ── */
      @media (max-width: 767px) {
        .spectrum-section {
          padding: 80px 20px !important;
        }
        .spectrum-header {
          margin-bottom: 48px !important;
        }
        .section-eyebrow {
          font-size: 11px !important;
          letter-spacing: 0.18em !important;
        }
        .spectrum-grid {
          grid-template-columns: 1fr !important;
        }
        .spec-item,
        .spec-item.featured {
          grid-column: span 1 !important;
          padding: 32px 20px !important;
        }
        .spec-title {
          font-size: 26px !important;
        }
        .spec-desc {
          font-size: 16px !important;
          max-width: 100% !important;
        }
        .spec-outcome {
          flex-direction: column !important;
          gap: 24px !important;
          align-items: flex-start !important;
          padding: 32px 20px !important;
        }
        .spec-outcome-text {
          font-size: clamp(20px, 5.5vw, 28px) !important;
          max-width: 100% !important;
        }
        .btn-primary {
          width: 100% !important;
          text-align: center !important;
          display: block !important;
          padding: 16px 24px !important;
        }
      }
    `
    document.head.appendChild(style)
  }, [])

  return (
    <section
      className="spectrum-section"
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
          top: '-100px',
          right: '-100px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(160,120,48,0.04) 0%,transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      {/* Header */}
      <div
        className="spectrum-header"
        style={{
          marginBottom: '100px',
          textAlign: 'center'
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
          What We Help With
          <span className="line" style={{ width: '28px', height: '1px', background: 'var(--gold)' }} />
        </div>

        <h2
          className="section-h2 reveal d1"
          style={{
            fontFamily: "'Cormorant', serif",
            fontSize: 'clamp(44px,4.5vw,68px)',
            fontWeight: '600',
            lineHeight: '1.05',
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            color: 'var(--ink)'
          }}
        >
          The Full Spectrum of<br />
          <em style={{ fontStyle: 'italic', color: 'var(--orange)', fontWeight: '300' }}>Long-Term Wealth Planning</em>
        </h2>

        <p
          className="reveal d2"
          style={{
            fontSize: '20px',
            color: 'var(--ink-mid)',
            lineHeight: '1.9',
            fontWeight: '300',
            margin: '16px auto 0',
            textAlign: 'center'
          }}
        >
          Our advisory covers everything connected to one outcome — long-term financial clarity.
        </p>
      </div>

      {/* Services Grid */}
      <div
        className="spectrum-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gridTemplateRows: 'auto auto',
          gap: '1px',
          background: 'var(--divider)',
          marginBottom: '1px'
        }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className={`spec-item reveal ${service.featured ? 'featured' : ''} d${((index % 4) + 1)}`}
            style={{
              background: service.featured ? 'var(--bg3)' : 'var(--bg2)',
              padding: '48px 40px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'background 0.4s, transform 0.4s cubic-bezier(0.22,1,0.36,1)',
              gridColumn: service.featured ? 'span 2' : 'auto'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bg4)'
              e.currentTarget.style.transform = 'translateY(-4px)'
              const bottomLine = e.currentTarget.querySelector('div[style*="scaleX(0)"]') as HTMLElement
              if (bottomLine) bottomLine.style.transform = 'scaleX(1)'
              const num = e.currentTarget.querySelector('.spec-num') as HTMLElement
              const icon = e.currentTarget.querySelector('.spec-icon') as HTMLElement
              const title = e.currentTarget.querySelector('.spec-title') as HTMLElement
              if (num) num.style.color = 'var(--gold)'
              if (icon) { icon.style.borderColor = 'var(--gold)'; icon.style.background = 'var(--gold-dim)' }
              if (title) title.style.color = 'var(--orange)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = service.featured ? 'var(--bg3)' : 'var(--bg2)'
              e.currentTarget.style.transform = 'translateY(0)'
              const bottomLine = e.currentTarget.querySelector('div[style*="scaleX(0)"]') as HTMLElement
              if (bottomLine) bottomLine.style.transform = 'scaleX(0)'
              const num = e.currentTarget.querySelector('.spec-num') as HTMLElement
              const icon = e.currentTarget.querySelector('.spec-icon') as HTMLElement
              const title = e.currentTarget.querySelector('.spec-title') as HTMLElement
              if (num) num.style.color = 'rgba(160,120,48,0.35)'
              if (icon) { icon.style.borderColor = 'var(--divider)'; icon.style.background = 'transparent' }
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
                height: '2px',
                background: 'linear-gradient(to right,var(--gold-dark),var(--gold))',
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)'
              }}
            />

            <span
              className="spec-num"
              style={{
                fontSize: '15px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(160,120,48,0.35)',
                fontWeight: '500',
                marginBottom: '20px',
                display: 'block',
                transition: 'color 0.3s'
              }}
            >
              {service.num}
            </span>

            <div
              className="spec-icon"
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--divider)',
                borderRadius: '1px',
                marginBottom: '18px',
                transition: 'borderColor 0.3s, background 0.3s'
              }}
            >
              <svg
                className="ico"
                viewBox="0 0 24 24"
                style={{
                  width: '20px',
                  height: '20px',
                  stroke: 'var(--gold)',
                  fill: 'none',
                  strokeWidth: '1.5',
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round'
                }}
              >
                <path d={service.icon} />
              </svg>
            </div>

            <div
              className="spec-title"
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: '35px',
                fontWeight: '600',
                color: 'var(--ink)',
                marginBottom: '10px',
                letterSpacing: '-0.01em',
                lineHeight: '1.15',
                transition: 'color 0.3s'
              }}
            >
              {service.title}
            </div>

            <p
              className="spec-desc"
              style={{
                fontSize: '20px',
                color: 'var(--ink-mid)',
                lineHeight: '1.8',
                fontWeight: '300',
                maxWidth: service.featured ? '340px' : 'auto'
              }}
            >
              {service.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Outcome Section */}
      <div
        className="spec-outcome reveal"
        style={{
          background: 'var(--bg2)',
          border: '1px solid var(--divider)',
          padding: '52px 60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          marginTop: '1px'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '0',
            background: 'linear-gradient(to right,rgba(160,120,48,0.04),transparent 50%)',
            pointerEvents: 'none'
          }}
        />

        <p
          className="spec-outcome-text"
          style={{
            fontFamily: "'Cormorant', serif",
            fontSize: 'clamp(22px,2vw,45px)',
            fontStyle: 'italic',
            color: 'var(--ink)',
            lineHeight: '1.4',
            maxWidth: '600px',
            position: 'relative',
            zIndex: 1
          }}
        >
          Everything we do is connected to one outcome:<br />
          <strong style={{ color: 'var(--gold)', fontStyle: 'normal', fontWeight: '600' }}>
            Long-term financial clarity.
          </strong>
        </p>

        <Link href="/services" style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
          <button
            className="btn-primary"
            style={{
              overflow: 'hidden',
              background: 'var(--gold)',
              color: '#FAFAF8',
              padding: '16px 36px',
              fontSize: '12px',
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
            <span style={{ position: 'relative', zIndex: '1' }}>Explore Our Services</span>
          </button>
        </Link>
      </div>
    </section>
  )
}