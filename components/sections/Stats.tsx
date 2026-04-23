export default function Stats() {
  const stats = [
    {
      number: "18",
      suffix: "+",
      label: "Years in Practice",
      description: "Navigating multiple market cycles with calm and discipline"
    },
    {
      number: "₹500",
      suffix: "Cr",
      label: "Assets Under Management",
      description: "Systematically managed across diversified goal-based portfolios"
    },
    {
      number: "1,200",
      suffix: "+",
      label: "Families Served",
      description: "Across India — each relationship built on honesty and long-term care"
    },
    {
      number: "96",
      suffix: "%",
      label: "Client Retention Rate",
      description: "The most meaningful number — trust renewed year after year"
    }
  ]

  return (
    <section
      className="
        bg-[var(--cream)] relative
        border-t border-[var(--divider)] border-b border-[var(--divider)]
        px-5 py-14
        md:px-10 md:py-20
        lg:px-[72px] lg:py-[120px]
      "
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="flex items-center justify-center gap-[14px] text-[var(--gold)] font-semibold uppercase tracking-[0.22em] mb-6 reveal
            text-[13px] md:text-[16px] lg:text-[20px]">
            <span className="w-7 h-px bg-[var(--gold)]" />
            The Numbers
            <span className="w-7 h-px bg-[var(--gold)]" />
          </div>
          <h2 className="font-cormorant font-semibold leading-[1.05] tracking-[-0.025em] text-[var(--ink)] reveal d1
            text-[clamp(38px,8vw,62px)]
            md:text-[clamp(44px,6vw,72px)]
            lg:text-[clamp(48px,5.5vw,85px)]">
            Measured in<br />
            <span className="italic font-light text-[var(--gold)]">trust and time</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid border border-[var(--divider)]
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                relative text-center transition-all duration-400 cursor-pointer group
                hover:bg-[var(--cream2)]
                reveal d${index + 1}
                py-10 px-6 md:py-12 md:px-8 lg:py-13 lg:px-10
                /* Right border: always on except last in each row */
                border-b border-[var(--divider)]
                /* Mobile: every item has bottom border */
                /* Tablet (md): 2 cols — remove right border on even items */
                md:border-r md:border-[var(--divider)]
                ${index % 2 === 1 ? 'md:border-r-0' : ''}
                /* Remove bottom border on last two items in tablet view */
                ${index >= 2 ? 'md:border-b-0' : ''}
                /* Desktop (lg): 4 cols — restore all right borders except last */
                lg:border-r lg:border-[var(--divider)] lg:border-b-0
                ${index === 3 ? 'lg:border-r-0' : ''}
              `}
            >
              {/* Hover Top Border */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[var(--orange)] transform scale-x-0 transition-transform duration-500 ease-out origin-left group-hover:scale-x-100" />

              {/* Number */}
              <div className="font-cormorant font-semibold leading-[1] text-[var(--ink)] tracking-[-0.03em] mb-2 block
                text-[clamp(44px,8vw,70px)] md:text-[clamp(50px,6vw,76px)] lg:text-[clamp(54px,5vw,80px)]">
                {stat.number}
                <sup className={`text-[32px] lg:text-[40px] font-light align-super ${
                  index === 0 || index === 2 ? 'text-[var(--gold)]' : 'text-[var(--orange)]'
                }`}>
                  {stat.suffix}
                </sup>
              </div>

              {/* Label */}
              <span className="tracking-[0.18em] uppercase text-[var(--ink-dim)] font-medium block mb-2
                text-[12px] md:text-[14px] lg:text-[17px]">
                {stat.label}
              </span>

              {/* Description */}
              <p className="font-light leading-[1.6] text-[var(--ink-dim)]
                text-[13px] md:text-[14px] lg:text-[16px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}