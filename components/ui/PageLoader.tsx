'use client'

import { useEffect, useState } from 'react'

interface PageLoaderProps {
  isLoading: boolean
  title?: string
  subtitle?: string
  customMessage?: string
  duration?: number
}

export default function PageLoader({ 
  isLoading, 
  title = "NVS Wealth", 
  subtitle = "Built on Discipline · Driven by Compounding",
  duration = 1400 
}: PageLoaderProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Don't render anything on the server to prevent hydration mismatches
  if (!isMounted) {
    return null
  }

  return (
    <div
      className={`fixed inset-0 z-[99990] bg-[var(--ink)] flex items-center justify-center flex-col gap-7 transition-all duration-900 ${
        isLoading ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      <div className="font-cormorant text-[38px] font-light text-[var(--cream)] tracking-[0.12em] animate-fade-in">
        {title.includes('NVS') ? (
          <>
            NVS <span className="text-[var(--gold)]">Wealth</span>
          </>
        ) : (
          <span className="text-[var(--gold)]">{title}</span>
        )}
      </div>
      <div className="w-[180px] h-[1px] bg-[rgba(203,176,119,0.2)] overflow-hidden animate-fade-in-delayed">
        <div className="h-full w-0 bg-gradient-to-r from-[var(--gold)] to-[var(--orange)] animate-bar-fill" />
      </div>
      <div className="text-[10px] tracking-[0.22em] uppercase text-[rgba(250,243,225,0.4)] animate-fade-in-late">
        {subtitle}
      </div>
    </div>
  )
}
