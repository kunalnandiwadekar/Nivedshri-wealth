export default function Differentiator() {
  return (
    <section 
      className="diff-section"
      style={{
        background: 'var(--bg2)',
        padding: '0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        className="diff-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '420px'
        }}
      >
        <div 
          className="diff-left"
          style={{
            padding: '100px 80px',
            borderRight: '1px solid var(--divider)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: '2'
          }}
        >
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
            What Sets Us Apart
          </div>
          <div 
            className="diff-statement"
            style={{
              fontFamily: "'Cormorant', serif",
              fontSize: 'clamp(36px, 3.8vw, 58px)',
              fontWeight: '600',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              color: 'var(--ivory)'
            }}
          >
            We don't promise<br/><em style={{ fontStyle: 'italic', color: 'var(--orange)', fontWeight: '300' }}>quick results.</em><br/>We build<br/>lasting wealth.
          </div>
          <p 
            className="diff-sub"
            style={{
              fontSize: '15px',
              color: 'var(--ivory-mid)',
              lineHeight: '1.9',
              fontWeight: '300',
              marginTop: '32px'
            }}
          >
            Wealth is not built by constantly doing more. It is built by consistently doing right things. Our role is to bring that discipline into your financial life.
          </p>
        </div>
        
        <div 
          className="diff-right"
          style={{
            padding: '100px 80px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            zIndex: '2'
          }}
        >
          <div 
            className="diff-stats"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px'
            }}
          >
            <div 
              className="diff-stat"
              style={{
                padding: '36px 0',
                borderBottom: '1px solid var(--divider)'
              }}
            >
              <span 
                className="diff-stat-num"
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: '56px',
                  fontWeight: '700',
                  color: 'var(--ivory)',
                  lineHeight: '1',
                  display: 'block',
                  marginBottom: '8px',
                  transition: 'color 0.3s'
                }}
              >
                18<sup style={{ fontSize: '40%', color: 'var(--orange)', verticalAlign: 'super' }}>+</sup>
              </span>
              <div 
                className="diff-stat-label"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ivory-mid)',
                  fontWeight: '500',
                  lineHeight: '1.55'
                }}
              >
                Years of Financial<br/>Advisory Experience
              </div>
            </div>
            
            <div 
              className="diff-stat"
              style={{
                padding: '36px 0',
                borderBottom: '1px solid var(--divider)'
              }}
            >
              <span 
                className="diff-stat-num"
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: '56px',
                  fontWeight: '700',
                  color: 'var(--ivory)',
                  lineHeight: '1',
                  display: 'block',
                  marginBottom: '8px',
                  transition: 'color 0.3s'
                }}
              >
                500<sup style={{ fontSize: '40%', color: 'var(--orange)', verticalAlign: 'super' }}>+</sup>
              </span>
              <div 
                className="diff-stat-label"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ivory-mid)',
                  fontWeight: '500',
                  lineHeight: '1.55'
                }}
              >
                Families &<br/>Individuals Guided
              </div>
            </div>
            
            <div 
              className="diff-stat"
              style={{
                padding: '36px 0',
                borderBottom: '1px solid var(--divider)'
              }}
            >
              <span 
                className="diff-stat-num"
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: '56px',
                  fontWeight: '700',
                  color: 'var(--ivory)',
                  lineHeight: '1',
                  display: 'block',
                  marginBottom: '8px',
                  transition: 'color 0.3s'
                }}
              >
                6
              </span>
              <div 
                className="diff-stat-label"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ivory-mid)',
                  fontWeight: '500',
                  lineHeight: '1.55'
                }}
              >
                Integrated Service<br/>Disciplines
              </div>
            </div>
            
            <div 
              className="diff-stat"
              style={{
                padding: '36px 0',
                borderBottom: 'none'
              }}
            >
              <span 
                className="diff-stat-num"
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: '56px',
                  fontWeight: '700',
                  color: 'var(--ivory)',
                  lineHeight: '1',
                  display: 'block',
                  marginBottom: '8px',
                  transition: 'color 0.3s'
                }}
              >
                100<sup style={{ fontSize: '40%', color: 'var(--gold)', verticalAlign: 'super' }}>%</sup>
              </span>
              <div 
                className="diff-stat-label"
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ivory-mid)',
                  fontWeight: '500',
                  lineHeight: '1.55'
                }}
              >
                Goal-Based<br/>Planning Focus
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
