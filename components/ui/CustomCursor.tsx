'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [ringPosition, setRingPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateRingPosition = () => {
      setRingPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.14,
        y: prev.y + (position.y - prev.y) * 0.14
      }))
    }

    document.addEventListener('mousemove', updateMousePosition)
    const animationFrame = requestAnimationFrame(function animate() {
      updateRingPosition()
      requestAnimationFrame(animate)
    })

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      cancelAnimationFrame(animationFrame)
    }
  }, [position])

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const interactiveElements = document.querySelectorAll(
      'a, button, .intro-pillar, .svc-card, .stat-item, .process-step, .insight-card, .test-card, .h-badge, .hero-advisor-card'
    )

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  useEffect(() => {
    if (cursorDotRef.current) {
      cursorDotRef.current.style.left = `${position.x}px`
      cursorDotRef.current.style.top = `${position.y}px`
    }
    if (cursorRingRef.current) {
      cursorRingRef.current.style.left = `${ringPosition.x}px`
      cursorRingRef.current.style.top = `${ringPosition.y}px`
    }
  }, [position, ringPosition])

  return (
    <>
      <div
        ref={cursorDotRef}
        className={`fixed z-[99999] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          isHovering ? 'w-1 h-1 bg-[var(--gold)]' : 'w-[6px] h-[6px] bg-[var(--orange)]'
        } rounded-full`}
      />
      <div
        ref={cursorRingRef}
        className={`fixed z-[99998] pointer-events-none transform -translate-x-1/2 -translate-y-1/2 border-[1.5px] rounded-full transition-all duration-300 ${
          isHovering 
            ? 'w-[58px] h-[58px] border-[var(--orange)] opacity-80' 
            : 'w-[36px] h-[36px] border-[rgba(255,102,0,0.45)]'
        }`}
        style={{
          transition: 'transform 0.18s cubic-bezier(0.22, 1, 0.36, 1), width 0.3s, height 0.3s, border-color 0.3s, opacity 0.3s'
        }}
      />
    </>
  )
}
