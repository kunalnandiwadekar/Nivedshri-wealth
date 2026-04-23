export default function IntroPhilosophy() {
  return (
    <div 
      className="intro-block"
      style={{
        background: 'var(--bg)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        borderBottom: '1px solid var(--divider)'
      }}
    >
      <div 
        className="ib-left"
        style={{
          padding: '120px 80px 120px 72px',
          borderRight: '1px solid var(--divider)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Giant quote watermark */}
        <div 
          style={{
            content: '"',
            fontFamily: "'Cormorant', serif",
            fontSize: '500px',
            fontWeight: '300',
            color: 'rgba(212,83,10,0.025)',
            position: 'absolute',
            top: '-120px',
            right: '-60px',
            lineHeight: '1',
            pointerEvents: 'none'
          }}
        >
          "
        </div>
        
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
          Our Philosophy
        </div>
        
        <h2 
          className="sec-h2"
          style={{
            fontFamily: "'Cormorant', serif",
            fontSize: 'clamp(44px, 4.5vw, 70px)',
            fontWeight: '600',
            lineHeight: '1.04',
            letterSpacing: '-0.025em',
            marginBottom: '20px',
            marginTop: '8px'
          }}
        >
          Wealth is Built<br/>
          <em style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: '300' }}>by Direction,</em><br/>
          Not by Chance.
        </h2>
        
        <div 
          className="ib-pillars"
          style={{
            display: 'flex',
            gap: '1px',
            background: 'var(--divider)',
            marginTop: '40px'
          }}
        >
          <div 
            className="ib-pillar"
            style={{
              background: 'var(--bg3)',
              flex: '1',
              padding: '28px 24px',
              borderTop: '2px solid transparent',
              transition: 'borderColor 0.35s, background 0.35s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bg4)'
              e.currentTarget.style.borderTopColor = 'var(--orange)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bg3)'
              e.currentTarget.style.borderTopColor = 'transparent'
            }}
          >
            <div 
              className="ib-p-num"
              style={{
                fontSize: '15px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(212,83,10,0.4)',
                fontWeight: '500',
                marginBottom: '8px',
                transition: 'color 0.3s'
              }}
            >
              01
            </div>
            <div 
              className="ib-p-title"
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: '35px',
                fontWeight: '600',
                color: 'var(--ivory)',
                marginBottom: '6px',
                transition: 'color 0.3s'
              }}
            >
              Structure
            </div>
            <div 
              className="ib-p-desc"
              style={{
                fontSize: '20px',
                color: 'var(--ivory-dim)',
                lineHeight: '1.7',
                fontWeight: '300'
              }}
            >
              Every rupee with a purpose and a place
            </div>
          </div>
          
          <div 
            className="ib-pillar"
            style={{
              background: 'var(--bg3)',
              flex: '1',
              padding: '28px 24px',
              borderTop: '2px solid transparent',
              transition: 'borderColor 0.35s, background 0.35s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bg4)'
              e.currentTarget.style.borderTopColor = 'var(--orange)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bg3)'
              e.currentTarget.style.borderTopColor = 'transparent'
            }}
          >
            <div 
              className="ib-p-num"
              style={{
                fontSize: '9px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(212,83,10,0.4)',
                fontWeight: '500',
                marginBottom: '8px',
                transition: 'color 0.3s'
              }}
            >
              02
            </div>
            <div 
              className="ib-p-title"
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: '18px',
                fontWeight: '600',
                color: 'var(--ivory)',
                marginBottom: '6px',
                transition: 'color 0.3s'
              }}
            >
              Clarity
            </div>
            <div 
              className="ib-p-desc"
              style={{
                fontSize: '12px',
                color: 'var(--ivory-dim)',
                lineHeight: '1.7',
                fontWeight: '300'
              }}
            >
              Decisions you understand, not just follow
            </div>
          </div>
          
          <div 
            className="ib-pillar"
            style={{
              background: 'var(--bg3)',
              flex: '1',
              padding: '28px 24px',
              borderTop: '2px solid transparent',
              transition: 'borderColor 0.35s, background 0.35s',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--bg4)'
              e.currentTarget.style.borderTopColor = 'var(--orange)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--bg3)'
              e.currentTarget.style.borderTopColor = 'transparent'
            }}
          >
            <div 
              className="ib-p-num"
              style={{
                fontSize: '9px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(212,83,10,0.4)',
                fontWeight: '500',
                marginBottom: '8px',
                transition: 'color 0.3s'
              }}
            >
              03
            </div>
            <div 
              className="ib-p-title"
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: '18px',
                fontWeight: '600',
                color: 'var(--ivory)',
                marginBottom: '6px',
                transition: 'color 0.3s'
              }}
            >
              Direction
            </div>
            <div 
              className="ib-p-desc"
              style={{
                fontSize: '12px',
                color: 'var(--ivory-dim)',
                lineHeight: '1.7',
                fontWeight: '300'
              }}
            >
              Goals as compass, not markets
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className="ib-right"
        style={{
          padding: '120px 72px 120px 80px',
          background: 'var(--bg2)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
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
          The Core Belief
        </div>
        
        <div 
          className="ib-statement"
          style={{
            fontFamily: "'Cormorant', serif",
            fontSize: 'clamp(28px, 2.6vw, 42px)',
            fontStyle: 'italic',
            fontWeight: '400',
            lineHeight: '1.45',
            color: 'var(--ivory)',
            borderLeft: '2px solid var(--orange)',
            paddingLeft: '36px',
            margin: '32px 0 36px'
          }}
        >
          Wealth should be <strong style={{ fontStyle: 'normal', color: 'var(--orange)', fontWeight: '600' }}>intentional,</strong> not accidental.
        </div>
        
        <p 
          style={{
            fontSize: '20px',
            color: 'var(--ivory-mid)',
            lineHeight: '1.9',
            fontWeight: '300',
            marginBottom: '22px'
          }}
        >
          At Nivedshri Wealth, everything we do is guided by one simple belief. Most people don't struggle because they don't earn enough. They struggle because their financial decisions are scattered.
        </p>
        
        <p 
          style={{
            fontSize: '20px',
            color: 'var(--ivory-mid)',
            lineHeight: '1.9',
            fontWeight: '300',
            marginBottom: '22px'
          }}
        >
          Our work is to bring structure, clarity, and direction to those decisions so wealth creation becomes a disciplined process — not guesswork. We don't focus on selling products. We focus on helping you understand what to do with your money, and why.
        </p>
        
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
            cursor: 'pointer',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            fontWeight: '700',
            fontFamily: "'Outfit', sans-serif",
            transition: 'boxShadow 0.3s',
            marginTop: '40px',
            alignSelf: 'flex-start'
          }}
        >
          <span style={{ position: 'relative', zIndex: '1' }}>Start Your Plan</span>
        </button>
      </div>
    </div>
  )
}

<style jsx>{`
  .ib-body {
    font-size: 20px !important;
  }
`}</style>
