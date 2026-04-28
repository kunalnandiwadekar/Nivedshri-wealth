export default function TickerStrips() {
  return (
    <>
      {/* ── TICKER STRIPS ─────────────────────────────── */}
      <style>{`
        @keyframes nvs-ticker1 {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes nvs-ticker2 {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .nvs-t1 { animation: nvs-ticker1 32s linear infinite; }
        .nvs-t1:hover { animation-play-state: paused; }
        .nvs-t2 { animation: nvs-ticker2 48s linear infinite; }
        .nvs-t2:hover { animation-play-state: paused; }
      `}</style>

      {/* Strip 1 — Channel Partner */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid rgba(203,176,119,0.18)',
          borderBottom: '1px solid rgba(203,176,119,0.18)',
          padding: '18px 0',
          background: 'rgba(203,176,119,0.04)',
        }}
      >
        {/* Fade masks */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(90deg, var(--ink, #1c1007), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(270deg, var(--ink, #1c1007), transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div className="nvs-t1" style={{ display: 'flex', width: 'max-content', alignItems: 'center' }}>
          {[...Array(8)].map((_, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
              {/* Label */}
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(11px, 1.1vw, 14px)',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(250,243,225,0.4)',
                fontWeight: 400,
                paddingRight: '18px',
              }}>
                In Association with
              </span>
              {/* Name */}
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(18px, 2.2vw, 30px)',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#CBB077',
                fontWeight: 700,
                paddingRight: '20px',
                lineHeight: 1,
              }}>
                Prudent Corporate Advisory Services Pvt. Ltd.
              </span>
              {/* Separator — small arrow */}
              <svg width="18" height="18" viewBox="0 0 18 18" style={{ marginRight: '36px', flexShrink: 0, opacity: 0.5 }}>
                <polygon points="9,0 18,9 9,18 0,9" fill="#CBB077" />
              </svg>
            </span>
          ))}
        </div>
      </div>

      {/* Strip 2 — AMC Partners */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid rgba(203,176,119,0.08)',
          padding: '14px 0',
          background: 'rgba(0,0,0,0.2)',
        }}
      >
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(90deg, var(--ink, #1c1007), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(270deg, var(--ink, #1c1007), transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div className="nvs-t2" style={{ display: 'flex', width: 'max-content', alignItems: 'center' }}>
          {[...Array(3)].map((_, ri) => (
            <span key={ri} style={{ display: 'flex', alignItems: 'center' }}>
              {[
                { name: 'Kotak Mahindra AMC', accent: true },
                { name: 'Nippon India', accent: true },
                { name: 'DSP Mutual Fund', accent: true },
                { name: 'ICICI Prudential', accent: true },
                { name: 'Aditya Birla Sun Life', accent: true },
              ].map((amc, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(13px, 1.5vw, 20px)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: amc.accent ? '#CBB077' : 'rgba(250,243,225,0.45)',
                    fontWeight: amc.accent ? 700 : 400,
                    paddingRight: '8px',
                    lineHeight: 1,
                  }}>
                    {amc.name}
                  </span>
                  {/* Dot */}
                  <span style={{ color: 'rgba(203,176,119,0.3)', fontSize: '22px', lineHeight: 1, paddingRight: '28px', marginTop: '-1px' }}>·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
      {/* ── END TICKER STRIPS ─────────────────────────── */}
    </>
  )
}
