'use client'

import { useEffect } from 'react'
import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import MarqueeStrip from '@/components/ui/MarqueeStrip'
import Intro from '@/components/sections/Intro'
import Services from '@/components/sections/Services'
import Stats from '@/components/sections/Stats'
import Process from '@/components/sections/Process'
import Testimonials from '@/components/sections/Testimonials'
import Insights from '@/components/sections/Insights'
import TrustBar from '@/components/sections/TrustBar'
import FinalCTA from '@/components/sections/FinalCTA'

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <Layout 
      loaderTitle="Welcome"
      loaderSubtitle="Your Journey to Financial Freedom Starts Here"
      loaderDuration={1200}
    >
      <Hero />
      <MarqueeStrip />
      <Intro />
      <Services />
      <Stats />
      <Process />
      <Testimonials />
      <Insights />
      <TrustBar />
      <FinalCTA />
    </Layout>
  )
}
