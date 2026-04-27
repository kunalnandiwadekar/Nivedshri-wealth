'use client'

import Link from 'next/link'

export default function Insights() {
  const insights = [
    {
      category: 'Market Perspective',
      title: "Why market corrections are not your enemy — they're your opportunity",
      excerpt: 'Every significant market correction in history has been followed by recovery. The investors who stayed invested — and often added — during dips came out far ahead.',
      date: 'March 2025',
      readTime: '8 min read',
      large: true
    },
    {
      category: 'SIP Strategy',
      title: 'The 1 rupee that became ₹1 lakh: a compounding story',
      excerpt: 'A simple illustration of why time in the market is the most powerful investing tool available.',
      date: 'Feb 2025',
      readTime: '5 min',
      large: false
    },
    {
      category: 'Tax Planning',
      title: 'ELSS vs PPF: which tax-saving instrument suits your goals?',
      excerpt: 'Breaking down the key differences so you can make an informed, confident decision before the March deadline.',
      date: 'Jan 2025',
      readTime: '6 min',
      large: false
    }
  ]

  return (
    <section
      className="
        insights-section bg-[var(--cream)]
        px-5 py-16
        md:px-10 md:py-24
        lg:px-[72px] lg:py-[140px]
      "
    >
      {/* Header */}
      <div
        className="
          mb-10
          flex flex-col gap-6
          md:mb-14 md:flex-row md:justify-between md:items-end
          lg:mb-[72px]
        "
      >
        <div>
          <div
            className="reveal flex items-center gap-[14px] font-semibold uppercase text-[var(--orange)] mb-5 tracking-[0.22em]
              text-[13px] md:text-[16px] lg:text-[20px]"
          >
            <span className="w-7 h-px bg-[var(--orange)]" />
            Latest Insights
          </div>
          <h2
            className="reveal d1 font-cormorant font-semibold leading-[1.05] tracking-[-0.025em] text-[var(--ink)]
              text-[clamp(38px,8vw,60px)]
              md:text-[clamp(44px,6vw,66px)]
              lg:text-[clamp(48px,5vw,72px)]"
          >
            Thinking out<br />
            <em className="italic font-light text-[var(--orange)]">loud</em>
          </h2>
        </div>

        <Link href="/insights">
          <button
            className="reveal d2 bg-transparent uppercase font-semibold tracking-[0.16em] border cursor-pointer rounded-[1px]
              text-[11px] px-5 py-3
              md:text-[12px] md:px-6 md:py-3
              w-full sm:w-auto"
            style={{
              color: 'var(--ink)',
              borderColor: 'var(--ink)',
              transition: 'color 0.3s, border-color 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--orange)'
              e.currentTarget.style.borderColor = 'var(--orange)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--ink)'
              e.currentTarget.style.borderColor = 'var(--ink)'
            }}
          >
            View All Insights
          </button>
        </Link>
      </div>

      {/* Grid */}
      <div
        className="
          grid gap-[2px]
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-[2fr_1fr_1fr]
        "
      >
        {insights.map((insight, index) => (
          <div
            key={index}
            className={`
              relative overflow-hidden cursor-pointer
              bg-[var(--cream2)] border border-[var(--divider-ink)]
              p-8 md:p-10 lg:p-11
              ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
            `}
            style={{ transition: 'background 0.3s, transform 0.3s' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--cream3)'
              e.currentTarget.style.transform = 'translateY(-4px)'
              const hoverLine = e.currentTarget.querySelector('.hover-line') as HTMLElement
              if (hoverLine) hoverLine.style.transform = 'scaleX(1)'
              const arrow = e.currentTarget.querySelector('.insight-arrow') as HTMLElement
              if (arrow) {
                arrow.style.background = 'var(--orange)'
                arrow.style.borderColor = 'var(--orange)'
              }
              const arrowSvg = e.currentTarget.querySelector('.insight-arrow svg') as SVGElement
              if (arrowSvg) arrowSvg.style.stroke = '#fff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--cream2)'
              e.currentTarget.style.transform = 'translateY(0)'
              const hoverLine = e.currentTarget.querySelector('.hover-line') as HTMLElement
              if (hoverLine) hoverLine.style.transform = 'scaleX(0)'
              const arrow = e.currentTarget.querySelector('.insight-arrow') as HTMLElement
              if (arrow) {
                arrow.style.background = 'transparent'
                arrow.style.borderColor = 'var(--divider-ink)'
              }
              const arrowSvg = e.currentTarget.querySelector('.insight-arrow svg') as SVGElement
              if (arrowSvg) arrowSvg.style.stroke = 'var(--ink-dim)'
            }}
          >
            {/* Hover line — bottom orange bar */}
            <div
              className="hover-line absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--orange)]"
              style={{
                transform: 'scaleX(0)',
                transformOrigin: 'left',
                transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)'
              }}
            />

            {/* Category tag */}
            <span
              className="block font-semibold uppercase tracking-[0.22em] text-[var(--orange)] mb-5
                text-[11px] lg:text-[13px]"
            >
              {insight.category}
            </span>

            {/* Title */}
            <h3
              className="font-cormorant font-semibold leading-[1.25] text-[var(--ink)] mb-4 tracking-[-0.01em]"
              style={{
                fontSize: insight.large
                  ? 'clamp(22px, 3.5vw, 36px)'
                  : 'clamp(18px, 2.5vw, 26px)'
              }}
            >
              {insight.title}
            </h3>

            {/* Excerpt */}
            <p
              className="font-light leading-[1.75] text-[var(--ink-mid)] mb-8
                text-[14px] md:text-[15px] lg:text-[17px]"
            >
              {insight.excerpt}
            </p>

            {/* Meta */}
            <div
              className="flex items-center gap-3 tracking-[0.06em] text-[var(--ink-dim)]
                text-[12px] lg:text-[13px]"
            >
              <span>{insight.date}</span>
              <span className="text-[var(--gold)]">·</span>
              <span>{insight.readTime}</span>
            </div>

            {/* Arrow button */}
            <div
              className="insight-arrow absolute bottom-8 right-8 lg:bottom-10 lg:right-10
                w-9 h-9 lg:w-10 lg:h-10
                border border-[var(--divider-ink)] rounded-full
                flex items-center justify-center"
              style={{ transition: 'background 0.3s, border-color 0.3s' }}
            >
              <svg
                viewBox="0 0 24 24"
                style={{
                  width: '15px', height: '15px',
                  stroke: 'var(--ink-dim)', fill: 'none',
                  strokeWidth: '1.5', strokeLinecap: 'round',
                  transition: 'stroke 0.3s'
                }}
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}