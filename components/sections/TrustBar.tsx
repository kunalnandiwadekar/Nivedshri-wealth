'use client'

export default function TrustBar() {
  const trustItems = [
    {
      icon: (<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>),
      title: 'AMFI Registered',
      subtitle: 'ARN : 124910'
    },
    {
      icon: (<><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></>),
      title: '18+ Years',
      subtitle: 'Of Practice'
    },
    {
      icon: (
        <>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </>
      ),
      title: '500+ Families',
      subtitle: 'Across India'
    },
    {
      icon: (<><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>),
      title: 'Digital-First',
      subtitle: 'Pan India Advisory'
    },
    {
      icon: (<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>),
      title: '100% Retention',
      subtitle: 'Client Loyalty Rate'
    }
  ]

  return (
    <div
      className="
        trust-bar bg-[var(--cream2)]
        border-t border-[var(--divider)] border-b border-[var(--divider)]
        /* Mobile */
        px-5 py-10
        /* Tablet */
        md:px-10 md:py-12
        /* Desktop */
        lg:px-[72px] lg:py-[60px]
      "
    >
      {/* Mobile / Tablet: 2-col grid. Desktop: single row flex */}
      <div
        className="
          trust-inner
          grid grid-cols-2 gap-x-6 gap-y-8
          md:grid-cols-3 md:gap-x-8
          lg:flex lg:items-center lg:justify-between lg:gap-0
        "
      >
        {trustItems.map((item, index) => (
          <div key={index} className="flex items-center lg:contents">

            {/* Trust Item */}
            <div className="trust-item flex items-center gap-3 lg:gap-4">
              <svg
                className="trust-icon flex-shrink-0"
                viewBox="0 0 24 24"
                style={{
                  stroke: 'var(--gold)', fill: 'none',
                  strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round'
                }}
                /* Scale icon with breakpoints */
                width="28" height="28"
              >
                {item.icon}
              </svg>
              <div className="trust-text">
                <span
                  className="block font-semibold tracking-[0.02em] text-[var(--ink)]
                    text-[16px] md:text-[19px] lg:text-[25px]"
                >
                  {item.title}
                </span>
                <span
                  className="block font-normal text-[var(--ink-mid)] mt-0.5
                    text-[12px] md:text-[13px] lg:text-[15px]"
                >
                  {item.subtitle}
                </span>
              </div>
            </div>

            {/* Vertical divider — desktop only, not after last item */}
            {index < trustItems.length - 1 && (
              <div
                className="trust-divider hidden lg:block w-px h-10 bg-[var(--divider)] ml-12"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}