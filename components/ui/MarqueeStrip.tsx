export default function MarqueeStrip() {
  const items = [
    'Health Insurance',
    'Term Insurance',
    'Fixed Deposits',
    'NCDs',
    'Small Cases',
    'Loans',
    'LAS',
    'Real Estate',
  ]

  return (
    <div className="bg-[var(--cream2)] border-y border-[var(--divider)] overflow-hidden py-[14px] md:py-[18px] relative">
      {/* Gradient Edges */}
      <div className="absolute top-0 bottom-0 left-0 w-10 md:w-20 bg-gradient-to-r from-[var(--cream2)] to-transparent z-[2]" />
      <div className="absolute top-0 bottom-0 right-0 w-10 md:w-20 bg-gradient-to-l from-[var(--cream2)] to-transparent z-[2]" />

      {/* Marquee Track */}
      <div className="flex whitespace-nowrap animate-scroll">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="
              text-[15px] md:text-[18px]
              tracking-[0.2em] uppercase font-medium text-black
              flex-shrink-0
              px-8 md:px-14
            "
          >
            <span className="text-[var(--orange)] mr-2">●</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}