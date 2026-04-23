'use client'

import { useEffect } from 'react'

const services = [
  { num: '01', name: 'Goal-Based Financial Planning', arrow: '→' },
  { num: '02', name: 'Wealth Creation & Portfolio Structuring', arrow: '→' },
  { num: '03', name: 'Retirement & Financial Independence', arrow: '→' },
  { num: '04', name: 'Children\'s Education & Legacy', arrow: '→' },
  { num: '05', name: 'Insurance & Wealth Protection', arrow: '→' },
  { num: '06', name: 'Tax-Efficient Wealth Structuring', arrow: '→' }
]

export default function ServicesHero() {
  useEffect(() => {
    // Animate heading lines
    setTimeout(() => {
      const lines = document.querySelectorAll('.sh-h1 .li')
      lines.forEach((line, index) => {
        setTimeout(() => {
          line.classList.add('in')
        }, 200 + (index * 130))
      })
    }, 1600)

    // Animate service items
    setTimeout(() => {
      const items = document.querySelectorAll('.sh-svc-item')
      items.forEach((item, index) => {
        setTimeout(() => {
          (item as HTMLElement).style.opacity = '1'
        }, 2200 + (index * 100))
      })
    }, 2100)

    // Animate scroll indicator
    setTimeout(() => {
      const scroll = document.querySelector('.sh-scroll')
      if (scroll) {
        (scroll as HTMLElement).style.opacity = '1'
      }
    }, 2400)
  }, [])

  return (
    <section 
      className="svc-hero"
      style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg)',
        display: 'grid',
        gridTemplateColumns: '58% 42%'
      }}
    >
      {/* Ambient Glows */}
      <div 
        className="sh-glow-a"
        style={{
          position: 'absolute',
          top: '-5%',
          left: '20%',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(212,83,10,0.05) 0%, transparent 65%)',
          pointerEvents: 'none',
          animation: 'glowA 9s ease-in-out infinite'
        }}
      />
      <div 
        className="sh-glow-b"
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(160,120,48,0.05) 0%, transparent 65%)',
          pointerEvents: 'none',
          animation: 'glowA 11s ease-in-out infinite 4s'
        }}
      />

      {/* Diagonal Divider */}
      <div 
        className="sh-diagonal"
        style={{
          position: 'absolute',
          top: '0',
          right: '41%',
          bottom: '0',
          width: '120px',
          background: 'linear-gradient(to right, var(--bg), transparent)',
          zIndex: '3',
          pointerEvents: 'none'
        }}
      />

      {/* Left Column */}
      <div 
        className="sh-left"
        style={{
          padding: '140px 80px 80px 72px',
          position: 'relative',
          zIndex: '2',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        {/* Breadcrumb */}
        <div 
          className="sh-breadcrumb"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '20px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--ivory-dim)',
            marginBottom: '52px'
          }}
        >
          <a 
            href="/"
            style={{
              color: 'var(--ivory-dim)',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}
          >
            Home
          </a>
          <span 
            className="sep"
            style={{
              color: 'var(--orange)',
              opacity: '0.4'
            }}
          >
            —
          </span>
          <span 
            className="cur"
            style={{
              color: 'var(--orange)'
            }}
          >
            Services
          </span>
        </div>

        {/* Tag */}
        <div 
          className="sh-tag"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '14px',
            fontSize: '20px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--orange)',
            fontWeight: '500',
            marginBottom: '36px'
          }}
        >
          <span 
            className="line"
            style={{
              width: '40px',
              height: '1px',
              background: 'var(--orange)'
            }}
          />
          Our Core Services
        </div>

        {/* Main Heading */}
        <h1 
          className="sh-h1"
          style={{
            fontFamily: "'Cormorant', serif",
            fontSize: 'clamp(58px, 5.8vw, 90px)',
            fontWeight: '600',
            lineHeight: '0.96',
            letterSpacing: '-0.028em',
            marginBottom: '18px',
            overflow: 'hidden'
          }}
        >
          <span 
            className="lw"
            style={{
              overflow: 'hidden',
              display: 'block'
            }}
          >
            <span 
              className="li"
              style={{
                display: 'block',
                transform: 'translateY(110%)',
                transition: 'transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              Wealth Should Be
            </span>
          </span>
          <span 
            className="lw"
            style={{
              overflow: 'hidden',
              display: 'block'
            }}
          >
            <span 
              className="li"
              style={{
                display: 'block',
                transform: 'translateY(110%)',
                transition: 'transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: '0.12s'
              }}
            >
              <em style={{ fontStyle: 'italic', color: 'var(--orange)', fontWeight: '300' }}>
                Intentional,
              </em>
            </span>
          </span>
          <span 
            className="lw"
            style={{
              overflow: 'hidden',
              display: 'block'
            }}
          >
            <span 
              className="li"
              style={{
                display: 'block',
                transform: 'translateY(110%)',
                transition: 'transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: '0.24s'
              }}
            >
              Not Accidental.
            </span>
          </span>
        </h1>

        {/* Sub Quote */}
        <p 
          className="sh-sub-quote"
          style={{
            fontFamily: "'Cormorant', serif",
            fontSize: '21px',
            fontWeight: '400',
            fontStyle: 'italic',
            color: 'var(--ivory-mid)',
            paddingLeft: '20px',
            borderLeft: '2px solid var(--orange)',
            marginBottom: '36px',
            lineHeight: '1.45',
            opacity: '0',
            animation: 'slideIn 0.8s 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards'
          }}
        >
          We don't focus on selling products. We focus on helping you understand what to do with your money — and why.
        </p>

        {/* Intro Text */}
        <p 
          className="sh-intro"
          style={{
            fontSize: '15px',
            lineHeight: '1.95',
            color: 'var(--ivory-mid)',
            maxWidth: '480px',
            fontWeight: '300',
            marginBottom: '52px',
            opacity: '0',
            animation: 'fadeUp 0.8s 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards'
          }}
        >
          Most people don't struggle because they don't earn enough. They struggle because their financial decisions are scattered. Our work is to bring structure, clarity, and direction to those decisions so wealth creation becomes a disciplined process rather than guesswork.
        </p>

        {/* Buttons */}
        <div 
          className="sh-btns"
          style={{
            display: 'flex',
            gap: '14px',
            opacity: '0',
            animation: 'fadeUp 0.8s 2.1s cubic-bezier(0.22, 1, 0.36, 1) forwards'
          }}
        >
          <button 
            className="btn-orange"
            style={{
              position: 'relative',
              overflow: 'hidden',
              background: 'var(--orange)',
              color: 'var(--bg)',
              padding: '18px 42px',
              fontSize: '12px',
              border: 'none',
              borderRadius: '1px',
              cursor: 'none',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: '700',
              fontFamily: "'Outfit', sans-serif",
              transition: 'boxShadow 0.3s'
            }}
          >
            <span style={{ position: 'relative', zIndex: '1' }}>Explore Services</span>
          </button>
          <button 
            className="btn-ghost"
            style={{
              position: 'relative',
              overflow: 'hidden',
              background: 'transparent',
              color: 'var(--ivory)',
              padding: '18px 42px',
              fontSize: '12px',
              border: '1px solid var(--divider)',
              borderRadius: '1px',
              cursor: 'none',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              fontWeight: '400',
              fontFamily: "'Outfit', sans-serif",
              transition: 'borderColor 0.3s, color 0.3s'
            }}
          >
            Book a Consultation
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div 
        className="sh-right"
        style={{
          position: 'relative',
          zIndex: '2',
          background: 'var(--bg2)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '120px 60px 80px',
          overflow: 'hidden'
        }}
      >
        {/* Floating Rings */}
        <div 
          className="sh-ring-wrap"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none'
          }}
        >
          <div 
            className="sh-ring"
            style={{
              position: 'absolute',
              borderRadius: '50%',
              border: '1px solid var(--divider)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '260px',
              height: '260px',
              animation: 'spinR 60s linear infinite',
              borderColor: 'rgba(212,83,10,0.1)'
            }}
          >
            <div 
              style={{
                position: 'absolute',
                top: '0',
                left: '50%',
                transform: 'translateX(-50%) translateY(-50%)',
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: 'var(--orange)',
                boxShadow: '0 0 12px var(--orange)'
              }}
            />
          </div>
          <div 
            className="sh-ring"
            style={{
              position: 'absolute',
              borderRadius: '50%',
              border: '1px solid var(--divider)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '440px',
              height: '440px',
              animation: 'spinR 90s linear infinite reverse',
              borderColor: 'rgba(160,120,48,0.07)'
            }}
          />
          <div 
            className="sh-ring"
            style={{
              position: 'absolute',
              borderRadius: '50%',
              border: '1px solid var(--divider)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '620px',
              height: '620px',
              animation: 'spinR 130s linear infinite',
              borderColor: 'rgba(212,83,10,0.04)'
            }}
          />
        </div>

        {/* Service List */}
        <div 
          className="sh-svc-list"
          style={{
            position: 'relative',
            zIndex: '2',
            display: 'flex',
            flexDirection: 'column',
            gap: '1px'
          }}
        >
          {services.map((service, index) => (
            <div 
              key={index}
              className={`sh-svc-item reveal d${index + 1}`}
              style={{
                background: 'rgba(250,250,248,0.75)',
                border: '1px solid var(--divider)',
                padding: '22px 28px',
                opacity: '0',
                animation: `fadeUp 0.8s ${2.1 + (index * 0.1)}s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
                position: 'relative',
                overflow: 'hidden',
                transition: 'borderColor 0.35s, background 0.35s, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212,83,10,0.35)'
                e.currentTarget.style.background = 'rgba(240,238,234,0.9)'
                e.currentTarget.style.transform = 'translateX(8px)'
                const num = e.currentTarget.querySelector('.sh-svc-num') as HTMLElement
                const name = e.currentTarget.querySelector('.sh-svc-name') as HTMLElement
                const arrow = e.currentTarget.querySelector('.sh-svc-arrow') as HTMLElement
                if (num) num.style.opacity = '1'
                if (name) name.style.color = 'var(--orange-light)'
                if (arrow) arrow.style.color = 'var(--orange)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--divider)'
                e.currentTarget.style.background = 'rgba(250,250,248,0.75)'
                e.currentTarget.style.transform = 'translateX(0)'
                const num = e.currentTarget.querySelector('.sh-svc-num') as HTMLElement
                const name = e.currentTarget.querySelector('.sh-svc-name') as HTMLElement
                const arrow = e.currentTarget.querySelector('.sh-svc-arrow') as HTMLElement
                if (num) num.style.opacity = '0.5'
                if (name) name.style.color = 'var(--ivory)'
                if (arrow) arrow.style.color = 'var(--ivory-dim)'
              }}
            >
              <span 
                className="sh-svc-num"
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'var(--orange)',
                  opacity: '0.5',
                  letterSpacing: '0.1em',
                  minWidth: '28px',
                  transition: 'opacity 0.3s'
                }}
              >
                {service.num}
              </span>
              <span 
                className="sh-svc-name"
                style={{
                  fontSize: '13px',
                  fontWeight: '500',
                  color: 'var(--ivory)',
                  letterSpacing: '0.03em',
                  transition: 'color 0.3s'
                }}
              >
                {service.name}
              </span>
              <span 
                className="sh-svc-arrow"
                style={{
                  marginLeft: 'auto',
                  fontSize: '14px',
                  color: 'var(--ivory-dim)',
                  transition: 'color 0.3s, transform 0.3s'
                }}
              >
                {service.arrow}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="sh-scroll"
        style={{
          position: 'absolute',
          bottom: '44px',
          left: '72px',
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          fontSize: '9px',
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          color: 'var(--ivory-dim)',
          fontWeight: '400',
          opacity: '0',
          animation: 'fadeUp 0.6s 2.4s forwards'
        }}
      >
        <div 
          className="sh-scroll-bar"
          style={{
            width: '48px',
            height: '1px',
            background: 'rgba(212,83,10,0.25)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div 
            className="sh-scroll-fill"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              height: '100%',
              background: 'var(--orange)',
              animation: 'scrollPulse 2s ease-in-out infinite'
            }}
          />
        </div>
        Scroll to explore
      </div>
    </section>
  )
}
