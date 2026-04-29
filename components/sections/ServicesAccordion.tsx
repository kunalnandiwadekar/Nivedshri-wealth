export default function ServicesAccordion() {
  return (
    <section 
      className="services-section"
      style={{
        background: 'var(--bg)',
        padding: '160px 72px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        className="svcs-header"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'end',
          marginBottom: '100px'
        }}
      >
        <div>
          <div 
            className="eyebrow"
            style={{
              fontSize: '20px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--orange)',
              fontWeight: '500',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '20px'
            }}
          >
            <span 
              className="line"
              style={{
                width: '28px',
                height: '1px',
                background: 'var(--orange)'
              }}
            />
            Core Services
          </div>
          <h2 
            className="sec-h2"
            style={{
              fontFamily: "'Cormorant', serif",
              fontSize: 'clamp(44px, 4.5vw, 70px)',
              fontWeight: '600',
              lineHeight: '1.04',
              letterSpacing: '-0.025em',
              marginBottom: '20px'
            }}
          >
            Seven Ways We<br/>Serve Your <em style={{ fontStyle: 'italic', color: 'var(--orange)', fontWeight: '300' }}>Wealth Journey</em>
          </h2>
        </div>
        <div>
          <p 
            className="svcs-intro"
            style={{
              fontSize: '15px',
              color: 'var(--ivory-mid)',
              lineHeight: '1.9',
              fontWeight: '300',
              maxWidth: '460px'
            }}
          >
            Every service we offer is designed around one outcome: long-term financial clarity. Click any service to explore how we approach it and what it delivers for you.
          </p>
        </div>
      </div>

      <div 
        className="svc-cards"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1px',
          background: 'var(--divider)'
        }}
      >
        {/* Service cards will be added here */}
        <div style={{ padding: '60px', textAlign: 'center', color: 'var(--ivory-mid)' }}>
          Services accordion section - Coming Soon
        </div>
      </div>
    </section>
  )
}
