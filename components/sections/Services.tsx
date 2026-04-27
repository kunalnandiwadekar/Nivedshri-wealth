import Link from 'next/link'

export default function Services() {
  const services = [
    {
      number: "01",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Mutual Fund Advisory & SIP Management",
      description: "Curated fund recommendations aligned to your goals and risk appetite — paired with systematic investing that compounds quietly, month after month.",
      featured: false
    },
    {
      number: "02",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
      ),
      title: "Portfolio Review",
      description: "A thorough, unbiased review. We identify gaps, overlaps, and opportunities — then restructure with purpose.",
      featured: false
    },
    {
      number: "03",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
      ),
      title: "Goal-Based Planning",
      description: "Whether it's retirement, education, or a home — we map a clear path from here to there.",
      featured: false
    },
    {
      number: "04",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      title: "Tax-Efficient Investing",
      description: "ELSS, indexation, exit timing — smart strategies that keep more of your wealth working for you.",
      featured: false
    },
    {
      number: "05",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4"/>
          <path d="M20 21a8 8 0 1 0-16 0"/>
        </svg>
      ),
      title: "Retirement Planning",
      description: "Start early, invest wisely, and retire confidently. Decades of intention, built into every plan.",
      featured: false
    },
    {
      number: "06",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="15" rx="1"/>
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
          <line x1="12" y1="12" x2="12" y2="16"/>
          <line x1="10" y1="14" x2="14" y2="14"/>
        </svg>
      ),
      title: "Real Estate — Category A Projects",
      description: "Exclusive access to vetted Category A developer projects. We help you invest in premium real estate that builds long-term, tangible wealth.",
      featured: false
    }
  ]

  return (
    <section
      className="
        bg-[var(--ink)] relative overflow-hidden
        px-5 py-16
        md:px-10 md:py-24
        lg:px-[72px] lg:py-[120px]
      "
    >
      {/* Background Texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")"
        }}
      />

      {/* Header */}
      <div
        className="
          relative z-10 mb-12
          flex flex-col gap-6
          md:mb-16
          lg:flex-row lg:justify-between lg:items-end lg:mb-20
        "
      >
        <div>
          <div className="flex items-center gap-[14px] text-[var(--orange)] font-semibold uppercase tracking-[0.22em] mb-6 reveal
            text-[13px] md:text-[16px] lg:text-[20px]">
            <span className="w-7 h-px bg-[var(--orange)]" />
            What We Offer
          </div>
          <h2 className="font-cormorant font-semibold leading-[1.04] tracking-[-0.025em] text-[var(--cream)] reveal d1
            text-[clamp(38px,8vw,62px)]
            md:text-[clamp(44px,6vw,70px)]
            lg:text-[clamp(48px,5vw,78px)]">
            Services crafted<br />
            for <span className="italic font-light text-[var(--gold)]">clarity</span>
          </h2>
        </div>
        <p className="max-w-full text-[var(--cream)] opacity-50 font-light leading-[1.8] reveal d2
          text-[14px]
          md:text-[16px] md:max-w-[380px] md:text-right
          lg:text-[18px] lg:max-w-[340px]">
          Every service we offer is connected to one goal — helping you build wealth with purpose, structure, and long-term intent.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-[2px] relative z-10
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative overflow-hidden cursor-pointer group
              p-8 md:p-10 lg:p-12
              ${service.featured
                ? 'bg-[var(--gold)] border border-[var(--gold)]'
                : 'bg-[rgba(250,243,225,0.03)] border border-[rgba(203,176,119,0.1)]'
              }
              hover:bg-[var(--gold)] hover:border-[var(--gold)]`}
            style={{
              /* Card 01 spans full width on its row to reflect the merged service */
              ...(index === 0 ? { gridColumn: 'span 1' } : {})
            }}
          >
            <span className={`font-cormorant font-light tracking-[0.1em] mb-4 block
              text-[20px] lg:text-[25px]
              ${service.featured ? 'text-[rgba(34,34,34,0.35)]' : 'text-[rgba(203,176,119,0.4)]'}
              group-hover:text-black`}>
              {service.number}
            </span>

            <div className={`w-10 h-10 lg:w-12 lg:h-12 mb-5 lg:mb-7 transition-colors duration-300
              ${service.featured ? 'text-[var(--ink)]' : 'text-[var(--gold)]'}
              group-hover:text-black`}>
              {service.icon}
            </div>

            <h3 className={`font-cormorant font-semibold leading-[1.2] mb-3 lg:mb-4 tracking-[-0.01em] group-hover:text-black
              text-[24px] md:text-[28px] lg:text-[33px]
              ${service.featured ? 'text-[var(--ink)]' : 'text-[var(--cream)]'}`}>
              {service.title}
            </h3>

            <p className="font-light leading-[1.8] mb-6 lg:mb-8 text-[rgba(250,243,225,0.5)] group-hover:text-[rgba(0,0,0,0.65)]
              text-[15px] lg:text-[18px]">
              {service.description}
            </p>

            <Link
              href="/services"
              className={`text-[12px] lg:text-[14px] tracking-[0.2em] uppercase font-semibold inline-flex items-center gap-2.5 transition-all duration-300 cursor-pointer group-hover:text-[var(--orange)]
                ${service.featured ? 'text-[var(--ink)]' : 'text-[rgba(203,176,119,0.7)]'}`}
            >
              Learn More
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}