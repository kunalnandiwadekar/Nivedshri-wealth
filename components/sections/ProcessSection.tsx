export default function ProcessSection() {
  return (
    <section 
      className="process-section"
      style={{
        background: 'var(--bg)',
        padding: '160px 72px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        className="process-header"
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
              color: 'var(--gold)',
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
                background: 'var(--gold)'
              }}
            />
            How We Work
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
            A Simple Process.<br/><em style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: '300' }}>A Lasting Result.</em>
          </h2>
        </div>
        <div>
          <p 
            className="process-intro"
            style={{
              fontSize: '15px',
              color: 'var(--ivory-mid)',
              lineHeight: '1.9',
              fontWeight: '300'
            }}
          >
            Every client relationship starts with understanding, not products. We take time to understand your goals, responsibilities, and future plans. Based on that, we design a financial structure that is practical, disciplined, and easy to follow.
          </p>
        </div>
      </div>

      <div style={{ padding: '60px', textAlign: 'center', color: 'var(--ivory-mid)' }}>
        Process timeline section - Coming Soon
      </div>
    </section>
  )
}
