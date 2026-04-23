'use client'

const processSteps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'A calm, focused conversation. We listen to understand your life, your goals, and your financial situation — without any sales pitch.',
    iconPath: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'
  },
  {
    number: '02',
    title: 'Risk Profiling',
    description: 'We assess your risk tolerance with depth and care — a real conversation about what market volatility means for your life.',
    iconPath: 'M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'
  },
  {
    number: '03',
    title: 'Custom Plan',
    description: 'A personalized investment plan — asset allocation, fund selection, SIP amounts — built specifically for you. No templates.',
    iconPath: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z'
  },
  {
    number: '04',
    title: 'Ongoing Partnership',
    description: 'Annual reviews, goal check-ins, and proactive communication during volatile markets. A long-term partner, not just an advisor.',
    iconPath: 'M23 6 13.5 15.5 8.5 10.5 1 18 M17 6 23 6 23 12'
  }
]

export default function Process() {
  return (
    <section
      className="
        relative overflow-hidden bg-[var(--cream2)]
        px-5 py-16
        md:px-10 md:py-24
        lg:px-[72px] lg:py-[140px]
      "
    >
      {/* PROCESS Watermark — scale down on smaller screens */}
      <div
        className="process-bg-text absolute pointer-events-none whitespace-nowrap select-none font-cormorant font-bold leading-[1] top-1/2 -translate-y-1/2
          hidden md:block
          right-[-20px] text-[160px] tracking-[-0.05em]
          lg:right-[-40px] lg:text-[280px]"
        style={{ color: 'rgba(203,176,119,0.05)', letterSpacing: '-0.05em' }}
      >
        PROCESS
      </div>

      <div className="relative z-[1]">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-[100px] relative z-[1]">
          <div className="eyebrow reveal justify-center flex items-center gap-[14px] font-semibold uppercase text-[var(--orange)] mb-5
            text-[13px] tracking-[0.22em]
            md:text-[16px]
            lg:text-[20px]">
            <span className="w-7 h-px bg-[var(--orange)]" />
            How We Work
            <span className="w-7 h-px bg-[var(--orange)]" />
          </div>

          <h2
            className="process-h2 reveal d1 font-cormorant font-semibold leading-[1.05] tracking-[-0.025em] text-[var(--ink)] mb-5
              text-[clamp(38px,8vw,62px)]
              md:text-[clamp(44px,6vw,70px)]
              lg:text-[clamp(48px,5vw,78px)]"
          >
            A process built on<br />
            <em className="text-[var(--orange)] italic font-light">clarity</em>, not complexity
          </h2>

          <p className="process-sub reveal d2 font-light leading-[1.8] text-[var(--ink-mid)] mx-auto
            text-[14px] max-w-[320px]
            md:text-[17px] md:max-w-[420px]
            lg:text-[20px] lg:max-w-[480px]">
            From first conversation to your ongoing journey — every step is deliberate, structured, and focused on your goals.
          </p>
        </div>

        {/* Process Steps */}
        <div
          className="process-steps relative z-[1] gap-[2px]
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4"
        >
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="process-step reveal d1 group relative cursor-pointer
                transition-[background,transform] duration-400
                border border-[var(--divider-ink)] bg-[var(--cream)]
                p-8 md:p-10 lg:p-[48px_36px]"
              data-num={step.number}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--cream2)'
                e.currentTarget.style.transform = 'translateY(-6px)'
                const stepNumber = e.currentTarget.querySelector('.step-number') as HTMLElement
                if (stepNumber) stepNumber.style.color = 'rgba(203,176,119,0.12)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--cream)'
                e.currentTarget.style.transform = 'translateY(0)'
                const stepNumber = e.currentTarget.querySelector('.step-number') as HTMLElement
                if (stepNumber) stepNumber.style.color = 'var(--gold-faint)'
              }}
            >
              <svg
                className="step-icon"
                viewBox="0 0 24 24"
                style={{
                  width: '40px', height: '40px', marginBottom: '20px',
                  stroke: 'var(--orange)', fill: 'none', strokeWidth: '1.5',
                  strokeLinecap: 'round', strokeLinejoin: 'round'
                }}
              >
                <path d={step.iconPath} />
              </svg>

              {/* Step number watermark */}
              <div
                className="step-number absolute top-5 right-6 font-cormorant font-bold leading-[1] tracking-[-0.03em] transition-colors duration-400
                  text-[52px] lg:text-[72px]"
                style={{ color: 'var(--gold-faint)' }}
              >
                {step.number}
              </div>

              <div
                className="step-title font-cormorant font-semibold leading-[1.2] text-[var(--ink)] mb-3
                  text-[26px] md:text-[30px] lg:text-[35px]"
              >
                {step.title}
              </div>

              <p
                className="step-body font-light leading-[1.7] text-[var(--ink-mid)]
                  text-[14px] md:text-[16px] lg:text-[20px]"
              >
                {step.description}
              </p>

              {index < 3 && (
                <span
                  className="step-arrow absolute bottom-5 right-5 h-px bg-[var(--ink)]"
                  style={{ width: '8px' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}