'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
            
      <nav
        className="fixed top-0 left-0 right-0 z-[1000] h-[100px] flex items-center justify-between border-b transition-all duration-500 bg-[#ebe2bb] border-transparent
          px-4
          sm:px-6
          md:px-10
          lg:px-[72px]
          xl:px-[100px]
          2xl:px-[120px]"
      >
      <Link
        href="/"
        className="flex items-center transition-all duration-500 relative"
      >
        <div className="bg-[#22150d] rounded-full transition-all duration-300 hover:shadow-xl
          px-[16px] py-[10px]
          sm:px-[18px] sm:py-[11px]
          md:px-[20px] md:py-[12px]
          shadow-lg">
          <img 
            src="/testimonials/Website-logo2.png" 
            alt="NVS Wealth" 
            className="h-[50px] w-auto object-contain transition-all duration-300 ease-out hover:scale-110 hover:rotate-2 animate-fadeIn
              sm:h-[60px]
              md:h-[70px]"
          />
        </div>
        <span className="absolute bottom-[-3px] left-0 w-0 h-[1px] bg-[#000000] transition-all duration-400 hover:w-full" />
      </Link>

      <div className="hidden lg:flex gap-[24px] items-center
        xl:gap-[32px]
        2xl:gap-[40px]">
        <Link
          href="/"
          className={`text-[clamp(11px, 2.5vw, 13px)] font-bold tracking-[0.16em] uppercase relative transition-colors duration-300 group ${
            pathname === '/' ? 'text-[#000000]' : 'text-[var(--ink-dim)] hover:text-[var(--ink)]'
          }`}
        >
          Home
          <span className={`absolute bottom-[-4px] left-0 h-[1px] bg-[#000000] transition-all duration-350 ${
            pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
          }`} />
        </Link>
        <Link
          href="/about"
          className={`text-[clamp(11px, 2.5vw, 13px)] font-bold tracking-[0.16em] uppercase relative transition-colors duration-300 group ${
            pathname === '/about' ? 'text-[#000000]' : 'text-[var(--ink-dim)] hover:text-[var(--ink)]'
          }`}
        >
          About
          <span className={`absolute bottom-[-4px] left-0 h-[1px] bg-[#000000] transition-all duration-350 ${
            pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'
          }`} />
        </Link>
        <Link
          href="/services"
          className={`text-[clamp(11px, 2.5vw, 13px)] font-bold tracking-[0.16em] uppercase relative transition-colors duration-300 group ${
            pathname === '/services' ? 'text-[#000000]' : 'text-[var(--ink-dim)] hover:text-[var(--ink)]'
          }`}
        >
          Services
          <span className={`absolute bottom-[-4px] left-0 h-[1px] bg-[#000000] transition-all duration-350 ${
            pathname === '/services' ? 'w-full' : 'w-0 group-hover:w-full'
          }`} />
        </Link>
        <Link
          href="/insights"
          className={`text-[clamp(11px, 2.5vw, 13px)] font-bold tracking-[0.16em] uppercase relative transition-colors duration-300 group ${
            pathname === '/insights' ? 'text-[#000000]' : 'text-[var(--ink-dim)] hover:text-[var(--ink)]'
          }`}
        >
          Insights
          <span className={`absolute bottom-[-4px] left-0 h-[1px] bg-[#000000] transition-all duration-350 ${
            pathname === '/insights' ? 'w-full' : 'w-0 group-hover:w-full'
          }`} />
        </Link>
        <Link
          href="/stories"
          className={`text-[clamp(11px, 2.5vw, 13px)] font-bold tracking-[0.16em] uppercase relative transition-colors duration-300 group ${
            pathname === '/stories' ? 'text-[#000000]' : 'text-[var(--ink-dim)] hover:text-[var(--ink)]'
          }`}
        >
          Stories
          <span className={`absolute bottom-[-4px] left-0 h-[1px] bg-[#000000] transition-all duration-350 ${
            pathname === '/stories' ? 'w-full' : 'w-0 group-hover:w-full'
          }`} />
        </Link>
        <Link
          href="/contact"
          className="group relative overflow-hidden bg-transparent text-[var(--orange)] border-[1.5px] border-[var(--orange)] text-[clamp(11px, 2.5vw, 13px)] px-[20px] py-[8px] rounded-[8px] tracking-[0.14em] uppercase font-semibold transition-colors duration-300
            xl:px-[24px] xl:py-[9px]
            2xl:px-[26px] 2xl:py-[10px]"
        >
          <span className="relative z-10 transition-colors duration-350 group-hover:text-black">Get Started</span>
          <span className="absolute inset-0 bg-[var(--orange)] transform -translate-x-full transition-transform duration-350 ease-out group-hover:translate-x-0" />
        </Link>
      </div>

      <button
        className="lg:hidden flex flex-col gap-[5px] p-[6px] transition-all duration-300 hover:scale-110"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span
          className={`w-[24px] h-[1.5px] transition-all duration-300 bg-[var(--ink)] ${
            isMobileMenuOpen ? 'rotate-45 translate-y-[6.5px]' : ''
          }`}
        />
        <span
          className={`w-[24px] h-[1.5px] transition-all duration-300 bg-[var(--ink)] ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`w-[24px] h-[1.5px] transition-all duration-300 bg-[var(--ink)] ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-[100px] left-0 right-0 bg-[#ebe2bb] backdrop-blur-[20px] px-6 py-8 gap-6 flex flex-col border-b border-transparent shadow-xl
          sm:px-8 sm:py-10 sm:gap-8
          md:px-10 md:py-12 md:gap-10">
          <Link
            href="/"
            className="text-[clamp(14px, 3.5vw, 16px)] font-bold tracking-[0.16em] uppercase text-[var(--ink)] hover:text-[#000000] group transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
            <span className="block w-0 h-[1px] bg-[#000000] transition-all duration-350 group-hover:w-full mt-1" />
          </Link>
          <Link
            href="/about"
            className="text-[clamp(14px, 3.5vw, 16px)] font-bold tracking-[0.16em] uppercase text-[var(--ink)] hover:text-[#000000] group transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
            <span className="block w-0 h-[1px] bg-[#000000] transition-all duration-350 group-hover:w-full mt-1" />
          </Link>
          <Link
            href="/services"
            className="text-[clamp(14px, 3.5vw, 16px)] font-bold tracking-[0.16em] uppercase text-[var(--ink)] hover:text-[#000000] group transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
            <span className="block w-0 h-[1px] bg-[#000000] transition-all duration-350 group-hover:w-full mt-1" />
          </Link>
          <Link
            href="/insights"
            className="text-[clamp(14px, 3.5vw, 16px)] font-bold tracking-[0.16em] uppercase text-[var(--ink)] hover:text-[#000000] group transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Insights
            <span className="block w-0 h-[1px] bg-[#000000] transition-all duration-350 group-hover:w-full mt-1" />
          </Link>
          <Link
            href="/stories"
            className="text-[clamp(14px, 3.5vw, 16px)] font-bold tracking-[0.16em] uppercase text-[var(--ink)] hover:text-[#000000] group transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Stories
            <span className="block w-0 h-[1px] bg-[#000000] transition-all duration-350 group-hover:w-full mt-1" />
          </Link>
          <div className="pt-4">
            <Link
              href="/contact"
              className="group relative overflow-hidden bg-transparent text-[var(--orange)] border-[1.5px] border-[var(--orange)] text-[clamp(14px, 3.5vw, 16px)] px-[24px] py-[12px] rounded-[8px] tracking-[0.14em] uppercase font-semibold transition-colors duration-300 block w-fit"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative z-10 transition-colors duration-350 group-hover:text-black">Get Started</span>
              <span className="absolute inset-0 bg-[var(--orange)] transform -translate-x-full transition-transform duration-350 ease-out group-hover:translate-x-0" />
            </Link>
          </div>
        </div>
      )}
    </nav>
    </>
  )
}
