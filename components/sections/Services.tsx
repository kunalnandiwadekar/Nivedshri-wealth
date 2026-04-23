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
      title: "Mutual Fund Advisory",
      description: "Curated fund recommendations aligned to your goals, risk appetite, and time horizon.",
      featured: false
    },
    {
      number: "02",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: "SIP Planning & Management",
      description: "Systematic investing, done right. No surprises, no shortcuts, just compounding at work.",
      featured: false
    },
    {
      number: "03",
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
      number: "04",
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
      number: "05",
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
      number: "06",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4"/>
          <path d="M20 21a8 8 0 1 0-16 0"/>
        </svg>
      ),
      title: "Retirement Planning",
      description: "Start early, invest wisely, and retire confidently. Decades of intention, built into every plan.",
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
          >
            <span className={`font-cormorant font-light tracking-[0.1em] mb-4 block
              text-[20px] lg:text-[25px]
              ${service.featured ? 'text-[rgba(34,34,34,0.35)]' : 'text-[rgba(203,176,119,0.4)]'}
              group-hover:text-black`}>
              {service.number}
            </span>

            <div className={`w-10 h-10 lg:w-12 lg:h-12 mb-5 lg:mb-7 transition-colors duration-300
              ${service.featured ? 'stroke-[var(--ink)]' : 'stroke-[var(--gold)]'}
              group-hover:text-black`}>
              {service.icon}
            </div>

            <h3 className={`font-cormorant font-semibold leading-[1.2] mb-3 lg:mb-4 tracking-[-0.01em] group-hover:text-black
              text-[26px] md:text-[30px] lg:text-[35px]
              ${service.featured ? 'text-[var(--ink)]' : 'text-[var(--cream)]'}`}>
              {service.title}
            </h3>

            <p className="font-light leading-[1.8] mb-6 lg:mb-8 text-[rgba(250,243,225,0.5)] group-hover:text-black
              text-[15px] lg:text-[20px]">
              {service.description}
            </p>

            <Link
              href="/services"
              className="text-[13px] lg:text-[15px] tracking-[0.2em] uppercase font-semibold inline-flex items-center gap-2.5 transition-all duration-300 cursor-pointer group-hover:text-[var(--orange)]"
            >
              Learn More
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 transition-transform duration-300">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}