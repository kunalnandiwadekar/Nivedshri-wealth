'use client'

import Layout from '@/components/layout/Layout'
import About from '@/components/sections/About'

export default function AboutPage() {
  return (
    <>
      <style jsx>{`
        @keyframes ahGlow1 {
          0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.7 }
          50% { transform: scale(1.1) translate(20px, -20px); opacity: 1 }
        }
        @keyframes ahGlow2 {
          0%, 100% { transform: scale(1); opacity: 0.5 }
          50% { transform: scale(1.15); opacity: 0.9 }
        }
        @keyframes ahSpin {
          from { transform: translate(-50%, -50%) rotate(0deg) }
          to { transform: translate(-50%, -50%) rotate(360deg) }
        }
        @keyframes scrollPulse {
          0% { left: -30%; width: 30% }
          50% { width: 60% }
          100% { left: 100%; width: 30% }
        }
        @keyframes cfpPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(160,120,48,0.4) }
          50% { box-shadow: 0 0 0 6px rgba(160,120,48,0) }
        }
        @keyframes ahSpin {
          from { transform: translate(-50%, -50%) rotate(0deg) }
          to { transform: translate(-50%, -50%) rotate(360deg) }
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(-20px) }
          to { opacity: 1; transform: translateX(0) }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px) }
          to { opacity: 1; transform: translateY(0) }
        }
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .d1 { transition-delay: 0.08s; }
        .d2 { transition-delay: 0.18s; }
        .d3 { transition-delay: 0.28s; }
        .d4 { transition-delay: 0.38s; }
        .reveal-left {
          opacity: 0;
          transform: translateX(-52px);
          transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-left.visible {
          opacity: 1;
          transform: translateX(0);
        }
        .reveal-right {
          opacity: 0;
          transform: translateX(52px);
          transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal-right.visible {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
      <Layout 
        loaderTitle="About"
        loaderSubtitle="Discover Our Story & Values"
        loaderDuration={1600}
      >
        <About />
      </Layout>
    </>
  )
}
