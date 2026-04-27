import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(160deg, #1c1007 0%, #150d05 40%, #1a1008 100%)',
        borderTop: '1px solid rgba(203,176,119,0.18)',
        position: 'relative',
        overflow: 'hidden',
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      {/* Watermark chart arrows — responsive visibility */}
      <svg
        viewBox="0 0 340 260"
        className="hidden sm:block"
        style={{ position: 'absolute', bottom: '-30px', left: '-20px', width: '320px', opacity: 0.045, pointerEvents: 'none' }}
        fill="none"
      >
        <polyline points="20,220 20,140 60,140 60,80 100,80 100,30" stroke="#CBB077" strokeWidth="10" strokeLinejoin="round" />
        <polygon points="100,30 85,55 115,55" fill="#CBB077" />
        <polyline points="110,220 110,160 150,160 150,100 190,100 190,40" stroke="#CBB077" strokeWidth="10" strokeLinejoin="round" />
        <polygon points="190,40 175,65 205,65" fill="#CBB077" />
        <polyline points="210,220 210,170 250,170 250,110 290,110 290,50" stroke="#CBB077" strokeWidth="10" strokeLinejoin="round" />
        <polygon points="290,50 275,75 305,75" fill="#CBB077" />
        <polygon points="30,230 30,200 55,200 55,230" stroke="#CBB077" strokeWidth="6" fill="none" />
        <polyline points="20,205 42,185 65,205" stroke="#CBB077" strokeWidth="6" fill="none" strokeLinejoin="round" />
        <polygon points="125,230 125,200 150,200 150,230" stroke="#CBB077" strokeWidth="6" fill="none" />
        <polyline points="115,205 137,185 160,205" stroke="#CBB077" strokeWidth="6" fill="none" strokeLinejoin="round" />
        <polygon points="220,230 220,200 245,200 245,230" stroke="#CBB077" strokeWidth="6" fill="none" />
        <polyline points="210,205 232,185 255,205" stroke="#CBB077" strokeWidth="6" fill="none" strokeLinejoin="round" />
      </svg>
      <svg
        viewBox="0 0 340 260"
        className="hidden sm:block"
        style={{ position: 'absolute', bottom: '-30px', right: '-20px', width: '320px', opacity: 0.045, pointerEvents: 'none', transform: 'scaleX(-1)' }}
        fill="none"
      >
        <polyline points="20,220 20,140 60,140 60,80 100,80 100,30" stroke="#CBB077" strokeWidth="10" strokeLinejoin="round" />
        <polygon points="100,30 85,55 115,55" fill="#CBB077" />
        <polyline points="110,220 110,160 150,160 150,100 190,100 190,40" stroke="#CBB077" strokeWidth="10" strokeLinejoin="round" />
        <polygon points="190,40 175,65 205,65" fill="#CBB077" />
        <polyline points="210,220 210,170 250,170 250,110 290,110 290,50" stroke="#CBB077" strokeWidth="10" strokeLinejoin="round" />
        <polygon points="290,50 275,75 305,75" fill="#CBB077" />
        <polygon points="30,230 30,200 55,200 55,230" stroke="#CBB077" strokeWidth="6" fill="none" />
        <polyline points="20,205 42,185 65,205" stroke="#CBB077" strokeWidth="6" fill="none" strokeLinejoin="round" />
        <polygon points="125,230 125,200 150,200 150,230" stroke="#CBB077" strokeWidth="6" fill="none" />
        <polyline points="115,205 137,185 160,205" stroke="#CBB077" strokeWidth="6" fill="none" strokeLinejoin="round" />
        <polygon points="220,230 220,200 245,200 245,230" stroke="#CBB077" strokeWidth="6" fill="none" />
        <polyline points="210,205 232,185 255,205" stroke="#CBB077" strokeWidth="6" fill="none" strokeLinejoin="round" />
      </svg>

      {/* Leaf decorations — responsive visibility */}
      <svg viewBox="0 0 120 120" className="hidden md:block" style={{ position: 'absolute', top: '-10px', right: '-10px', width: '130px', opacity: 0.07, pointerEvents: 'none' }} fill="none">
        <path d="M110,10 C90,10 60,20 40,50 C20,80 20,110 20,110 C20,110 50,100 70,80 C90,60 110,30 110,10Z" fill="#CBB077" />
        <path d="M110,10 C110,10 65,60 20,110" stroke="#CBB077" strokeWidth="1.5" />
      </svg>
      <svg viewBox="0 0 120 120" className="hidden md:block" style={{ position: 'absolute', top: '-10px', left: '-10px', width: '100px', opacity: 0.055, pointerEvents: 'none', transform: 'scaleX(-1)' }} fill="none">
        <path d="M110,10 C90,10 60,20 40,50 C20,80 20,110 20,110 C20,110 50,100 70,80 C90,60 110,30 110,10Z" fill="#CBB077" />
        <path d="M110,10 C110,10 65,60 20,110" stroke="#CBB077" strokeWidth="1.5" />
      </svg>

      {/* Gold left border accent */}
      <div
        style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px',
          background: 'linear-gradient(180deg, transparent 0%, #CBB077 20%, #a8893a 50%, #CBB077 80%, transparent 100%)',
          opacity: 0.7,
        }}
      />

      {/* Main content */}
      <div
        className="
          relative z-[1]
          px-4 pt-8 pb-0
          sm:px-6 sm:pt-10
          md:px-10 md:pt-14
          lg:px-[72px] lg:pt-[72px]
          xl:px-[100px] xl:pt-[80px]
          2xl:px-[120px] 2xl:pt-[90px]
        "
      >
        {/* Grid: 1 col mobile → 1 col small tablet → 2 col tablet → 3 col large tablet → 4 col desktop */}
        <div
          className="
            grid gap-8 mb-8
            grid-cols-1
            sm:gap-10 sm:mb-10
            md:grid-cols-2 md:gap-12 md:mb-12
            lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-[60px] lg:mb-[60px]
            xl:gap-[80px] xl:mb-[70px]
            2xl:gap-[100px] 2xl:mb-[80px]
          "
        >
          {/* Brand column */}
          <div className="order-1">
            <div style={{ borderRadius: '8px', display: 'inline-block' }}>
              <img
                src="/Profile-logo-NVS-Background.png"
                alt="NVS Wealth"
                style={{ width: '55%', height: 'auto', display: 'block' }}
              />
              <div style={{ height: '1px', width: '100%', marginTop: '8px' }} />
            </div>
            <div style={{ borderLeft: '2px solid #CBB077', paddingLeft: '12px', marginTop: '16px' }}>
              <p
                style={{
                  fontSize: 'clamp(11px, 2.5vw, 13px)', letterSpacing: '0.14em',
                  color: 'rgba(250,243,225,0.7)', lineHeight: 1.7,
                  textTransform: 'uppercase',
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                AMFI Registered Mutual Fund Distributor<br />
                ARN : 124910
              </p>
            </div>
          </div>

          {/* Navigate */}
          <div className="order-2">
            <div style={{ fontSize: 'clamp(12px, 2.8vw, 13px)', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#CBB077', fontWeight: 600, marginBottom: 'clamp(20px, 4vw, 24px)', fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              Navigate
            </div>
            <div style={{ height: '1px', background: 'linear-gradient(90deg, #CBB077, transparent)', width: 'clamp(32px, 6vw, 40px)', marginBottom: 'clamp(16px, 3vw, 20px)', marginTop: '-12px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 2vw, 14px)' }}>
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Insights', href: '/insights' },
                { label: 'Stories', href: '/stories' },
                { label: 'Contact', href: '/contact' }
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  style={{ fontSize: 'clamp(15px, 3.5vw, 17px)', fontWeight: 300, color: 'rgba(250,243,225,0.85)', textDecoration: 'none', letterSpacing: '0.03em', fontFamily: "'Cormorant Garamond', Georgia, serif", transition: 'color 0.3s' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#CBB077'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(250,243,225,0.85)'}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="order-3">
            <div style={{ fontSize: 'clamp(12px, 2.8vw, 13px)', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#CBB077', fontWeight: 600, marginBottom: 'clamp(20px, 4vw, 24px)', fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              Services
            </div>
            <div style={{ height: '1px', background: 'linear-gradient(90deg, #CBB077, transparent)', width: 'clamp(32px, 6vw, 40px)', marginBottom: 'clamp(16px, 3vw, 20px)', marginTop: '-12px' }} />
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 'clamp(10px, 2vw, 14px)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 2vw, 14px)' }}>
                {[
                  'Mutual Fund Advisory',
                  'SIP Planning',
                  'Portfolio Review',
                  'Goal-Based Planning',
                  'Tax-Efficient Investing',
                  'Retirement Planning',
                  'PMS',
                  'SIF'
                ].map((item, i) => (
                  <Link
                    key={i}
                    href="/services"
                    style={{ fontSize: 'clamp(15px, 3.5vw, 17px)', fontWeight: 300, color: 'rgba(250,243,225,0.85)', textDecoration: 'none', letterSpacing: '0.03em', fontFamily: "'Cormorant Garamond', Georgia, serif", transition: 'color 0.3s' }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = '#CBB077'}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(250,243,225,0.85)'}
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(10px, 2vw, 14px)' }}>
                {[
                  'Corporate Fixed Deposits',
                  'NCDs',
                  'Health Insurance',
                  'Term Insurance',
                  'Real estate',
                  'LAS',
                  'Loans',
                  'Small Cases',
                  'SIF'
                ].map((item, i) => (
                  <Link
                    key={i}
                    href="/services"
                    style={{ fontSize: 'clamp(15px, 3.5vw, 17px)', fontWeight: 300, color: 'rgba(250,243,225,0.85)', textDecoration: 'none', letterSpacing: '0.03em', fontFamily: "'Cormorant Garamond', Georgia, serif", transition: 'color 0.3s' }}
                    onMouseEnter={e => (e.target as HTMLElement).style.color = '#CBB077'}
                    onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(250,243,225,0.85)'}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="order-4">
            <div style={{ fontSize: 'clamp(12px, 2.8vw, 13px)', letterSpacing: '0.26em', textTransform: 'uppercase', color: '#CBB077', fontWeight: 600, marginBottom: 'clamp(20px, 4vw, 24px)', fontFamily: "'Cormorant Garamond', Georgia, serif" }}>
              Get in Touch
            </div>
            <div style={{ height: '1px', background: 'linear-gradient(90deg, #CBB077, transparent)', width: 'clamp(32px, 6vw, 40px)', marginBottom: 'clamp(16px, 3vw, 20px)', marginTop: '-12px' }} />
            <div style={{ border: '1px solid rgba(203,176,119,0.25)', padding: 'clamp(16px, 3vw, 20px)', marginBottom: 'clamp(12px, 2.5vw, 16px)', background: 'rgba(203,176,119,0.04)' }}>
              <p style={{ fontSize: 'clamp(18px, 4vw, 20px)', color: '#CBB077', fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, marginBottom: '6px', letterSpacing: '0.03em' }}>
                Nitesh Tara
              </p>
              <p style={{ fontSize: 'clamp(14px, 3.2vw, 15px)', color: 'rgba(250,243,225,0.75)', fontFamily: "'Cormorant Garamond', Georgia, serif", letterSpacing: '0.04em', marginBottom: 'clamp(8px, 2vw, 12px)' }}>
                9920557577 &nbsp;|&nbsp; 8591557577
              </p>
              <div style={{ height: '1px', background: 'rgba(203,176,119,0.2)', marginBottom: 'clamp(8px, 2vw, 12px)' }} />
              <p style={{ fontSize: 'clamp(14px, 3.2vw, 15px)', color: 'rgba(250,243,225,0.65)', fontFamily: "'Cormorant Garamond', Georgia, serif", lineHeight: 1.7, letterSpacing: '0.02em' }}>
                Office Unit No : 901, 9th Floor<br />
                IRIS Shopping Co-op Premises Society Ltd<br />
                <span style={{ color: '#CBB077' }}>Hiranandani Meadows</span><br />
                Thane West 400610
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 2vw, 12px)' }}>
              {[
                { label: 'hello@nvswealth.in', href: 'mailto:hello@nvswealth.in' },
                { label: 'WhatsApp Us', href: '/contact' },
                { label: 'Book a Call', href: '/contact' },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  style={{ fontSize: 'clamp(15px, 3.5vw, 17px)', fontWeight: 300, color: 'rgba(250,243,225,0.85)', textDecoration: 'none', letterSpacing: '0.03em', fontFamily: "'Cormorant Garamond', Georgia, serif", transition: 'color 0.3s' }}
                  onMouseEnter={e => (e.target as HTMLElement).style.color = '#CBB077'}
                  onMouseLeave={e => (e.target as HTMLElement).style.color = 'rgba(250,243,225,0.85)'}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer + copyright */}
        <div
          className="border-t border-[rgba(203,176,119,0.1)] flex flex-col gap-4 py-6 pb-8 sm:py-7 sm:pb-10 md:flex-row md:justify-between md:items-start md:gap-12 md:py-7 md:pb-10 lg:py-[28px] lg:pb-10 xl:py-[32px] xl:pb-12 2xl:py-[36px] 2xl:pb-14"
        >
          <p
            style={{
              fontSize: 'clamp(12px, 2.8vw, 14px)',
              fontWeight: 300,
              lineHeight: 1.85,
              color: 'rgba(250,243,225,0.5)',
              maxWidth: 'clamp(280px, 60vw, 680px)',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              letterSpacing: '0.02em'
            }}
          >
            Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not a guarantee of future results. NVS Wealth is an AMFI Registered Mutual Fund Distributor. Registration does not indicate that SEBI endorses intermediary. © 2025 NVS Wealth. All rights reserved.
          </p>
          <span
            style={{
              fontSize: 'clamp(12px, 2.8vw, 14px)',
              color: 'rgba(203,176,119,0.6)',
              letterSpacing: '0.1em',
              whiteSpace: 'nowrap',
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              textTransform: 'uppercase'
            }}
          >
            © 2025 NVS Wealth
          </span>
        </div>
      </div>
    </footer>
  )
}