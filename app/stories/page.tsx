'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'

// ─────────────────────────────────────────────
// Typewriter Quote — goes in featured story LEFT panel
// ─────────────────────────────────────────────
const QUOTE = "Every great financial story begins with one decision — to stop drifting and start planning."
const AUTHOR = "Nitesh Tara"
const ROLE = "Founder & CEO, NVS Wealth"
const TYPING_SPEED = 58

function TypewriterQuote() {
  const [displayed, setDisplayed] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)
  const [showAuthor, setShowAuthor] = useState(false)
  const [goldLine, setGoldLine] = useState(false)
  const indexRef = useRef(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const lineTimer = setTimeout(() => setGoldLine(true), 400)
    const startTimer = setTimeout(() => {
      function typeNext() {
        if (indexRef.current <= QUOTE.length) {
          setDisplayed(QUOTE.slice(0, indexRef.current))
          indexRef.current++
          timerRef.current = setTimeout(typeNext, TYPING_SPEED)
        } else {
          setTimeout(() => setCursorVisible(false), 700)
          setTimeout(() => setShowAuthor(true), 1000)
        }
      }
      typeNext()
    }, 900)

    const blinkInterval = setInterval(() => {
      setCursorVisible(prev => !prev)
    }, 530)

    return () => {
      clearTimeout(lineTimer)
      clearTimeout(startTimer)
      if (timerRef.current) clearTimeout(timerRef.current)
      clearInterval(blinkInterval)
    }
  }, [])

  return (
    <div style={{
      background: '#1C1400',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '56px 52px',
      position: 'relative',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      minHeight: '580px',
    }}>
      {/* Giant watermark quote mark */}
      <div style={{
        position: 'absolute',
        top: '-24px', left: '20px',
        fontFamily: 'Cormorant Garamond, Georgia, serif',
        fontSize: '240px',
        lineHeight: 1,
        color: 'rgba(212,168,67,0.06)',
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 0,
      }}>"</div>

      {/* Radial glow top-right */}
      <div style={{
        position: 'absolute',
        top: '-120px', right: '-120px',
        width: '360px', height: '360px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,67,0.07), transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Subtle bottom-left glow */}
      <div style={{
        position: 'absolute',
        bottom: '-80px', left: '-80px',
        width: '260px', height: '260px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,168,67,0.04), transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Gold sliding line */}
      <div style={{
        width: goldLine ? '44px' : '0px',
        height: '2px',
        background: '#D4A843',
        marginBottom: '32px',
        borderRadius: '1px',
        transition: 'width 0.9s cubic-bezier(0.22, 1, 0.36, 1)',
        position: 'relative',
        zIndex: 1,
      }} />

      {/* Typewriter quote text */}
      <p style={{
        fontFamily: 'Cormorant Garamond, Georgia, serif',
        fontSize: 'clamp(20px, 2.2vw, 30px)',
        fontStyle: 'italic',
        fontWeight: 300,
        lineHeight: 1.65,
        color: 'rgba(245,237,216,0.90)',
        margin: '0 0 32px 0',
        position: 'relative',
        zIndex: 1,
        minHeight: '180px',
      }}>
        {displayed}
        {/* Blinking cursor */}
        <span style={{
          display: 'inline-block',
          width: '2px',
          height: '1.1em',
          background: '#D4A843',
          marginLeft: '3px',
          verticalAlign: 'middle',
          opacity: cursorVisible ? 1 : 0,
          transition: 'opacity 0.1s',
        }} />
      </p>

      {/* Author — fades in after typing */}
      <div style={{
        opacity: showAuthor ? 1 : 0,
        transform: showAuthor ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Divider */}
        <div style={{
          width: '100%',
          height: '1px',
          background: 'rgba(212,168,67,0.14)',
          marginBottom: '20px',
        }} />

        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Avatar */}
          <div style={{
            width: '42px', height: '42px',
            borderRadius: '50%',
            border: '1.5px solid rgba(212,168,67,0.35)',
            background: 'rgba(212,168,67,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '18px',
            color: 'rgba(212,168,67,0.7)',
            fontWeight: 300,
          }}>N</div>

          <div>
            <div style={{
              fontSize: '12px',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#D4A843',
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '3px',
            }}>{AUTHOR}</div>
            <div style={{
              fontSize: '11px',
              color: 'rgba(245,237,216,0.28)',
              letterSpacing: '0.07em',
              fontFamily: 'Outfit, sans-serif',
              lineHeight: 1.4,
            }}>{ROLE}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────
export default function StoriesPage() {

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal')
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        if (elementTop < window.innerHeight - 150) {
          element.classList.add('visible')
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <style jsx>{`
        :root {
          --gold: #CBB077;
          --gold-light: #DFC999;
          --gold-bright: #EDD98A;
          --gold-dark: #8B6B35;
          --gold-dim: rgba(203,176,119,0.15);
          --gold-faint: rgba(203,176,119,0.07);
          --orange: #FF6600;
          --orange-light: #FF8533;
          --orange-dim: rgba(255,102,0,0.10);
          --bg: #FAF3E1;
          --bg2: #F5EDD4;
          --bg3: #EDE3C8;
          --bg4: #E4DFD6;
          --ivory: #222222;
          --ivory-mid: #555444;
          --ivory-dim: rgba(34,34,34,0.55);
          --ivory-faint: rgba(34,34,34,0.12);
          --divider: rgba(203,176,119,0.22);
          --divider-bright: rgba(203,176,119,0.35);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Outfit', sans-serif;
          background: var(--bg);
          color: var(--ivory);
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .reveal {
          opacity: 0; transform: translateY(28px);
          transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal.visible { opacity: 1; transform: none; }
        .reveal-left { opacity: 0; transform: translateX(-32px); transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1); }
        .reveal-left.visible { opacity: 1; transform: none; }
        .reveal-right { opacity: 0; transform: translateX(32px); transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1); }
        .reveal-right.visible { opacity: 1; transform: none; }
        .d1 { transition-delay: 0.1s; }
        .d2 { transition-delay: 0.2s; }
        .d3 { transition-delay: 0.3s; }
        .d4 { transition-delay: 0.4s; }
        .d5 { transition-delay: 0.5s; }

        /* ── Hero ── */
        .sh-hero {
          min-height: 100vh;
          display: flex; flex-direction: column; justify-content: flex-end;
          padding: 0 56px 0;
          position: relative; overflow: hidden; background: var(--bg);
        }
        .sh-hero-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 60% 40%, rgba(160,120,48,0.08) 0%, transparent 65%),
            radial-gradient(ellipse 40% 60% at 20% 70%, rgba(160,120,48,0.04) 0%, transparent 60%);
          animation: heroFloat 20s ease-in-out infinite;
        }
        @keyframes heroFloat {
          0%,100% { transform: scale(1) rotate(0deg); }
          33% { transform: scale(1.05) rotate(0.5deg); }
          66% { transform: scale(0.98) rotate(-0.3deg); }
        }
        .sh-hero-num {
          position: absolute; right: -20px; top: 50%;
          transform: translateY(-50%);
          font-family: 'Cormorant', serif;
          font-size: clamp(140px, 28vw, 380px);
          font-weight: 300; color: rgba(160,120,48,0.04);
          line-height: 1; letter-spacing: -0.04em;
          user-select: none; pointer-events: none; white-space: nowrap;
        }
        .sh-vert {
          position: absolute; right: 56px; top: 50%;
          transform: translateY(-50%) rotate(90deg);
          transform-origin: center center;
          font-size: 10px; letter-spacing: 0.2em;
          text-transform: uppercase; color: var(--ivory-dim);
          font-weight: 300; white-space: nowrap;
        }
        .sh-breadcrumb {
          position: absolute; top: 140px; left: 56px;
          font-size: 11px; letter-spacing: 0.18em;
          text-transform: uppercase; font-weight: 400; z-index: 10;
        }
        @media (min-width: 768px) { .sh-breadcrumb { font-size: 13px; left: 40px; } }
        @media (min-width: 1024px) { .sh-breadcrumb { font-size: 20px; left: 56px; } }
        section.sh-hero .sh-breadcrumb a { color: #1c1a1480 !important; text-decoration: none; transition: color 0.3s ease; }
        section.sh-hero .sh-breadcrumb a:hover { color: var(--ivory); }
        .sh-breadcrumb .sep { margin: 0 8px; color: var(--gold); opacity: 0.4; }
        .sh-breadcrumb .cur { color: var(--gold); }
        .sh-eyebrow {
          display: flex; align-items: center; gap: 14px;
          font-size: 14px; letter-spacing: 0.28em;
          text-transform: uppercase; color: var(--orange);
          font-weight: 600; margin-top: 56px; margin-bottom: 26px;
        }
        @media (min-width: 768px) { .sh-eyebrow { font-size: 17px; gap: 16px; margin-bottom: 32px; } }
        @media (min-width: 1024px) { .sh-eyebrow { font-size: 22px; margin-top: 20px; margin-bottom: 14px; } }
        .sh-eyebrow .line { width: 40px; height: 1px; background: var(--gold); }
        .sh-h1 {
          font-family: 'Cormorant', serif;
          font-size: clamp(68px, 11vw, 150px);
          font-weight: 300; line-height: 0.92;
          letter-spacing: -0.03em; max-width: 950px;
          overflow: hidden; color: #000000; padding-bottom: 12px;
        }
        .sh-h1 .li {
          display: block; transform: translateY(110%); opacity: 0;
          transition: transform 1s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease;
          position: relative; color: #000000;
        }
        .sh-h1 .li.visible { transform: translateY(0); opacity: 1; }
        .sh-h1 em {
          font-style: italic; color: var(--orange);
          background: linear-gradient(135deg, var(--orange), var(--orange-light));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .sh-sub {
          font-size: 22px; color: var(--ivory-mid); line-height: 1.75;
          max-width: 600px; font-weight: 300; margin-top: 40px; margin-bottom: 60px;
        }
        .sh-intro-grid {
          display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 1px; background: var(--divider); border-top: 1px solid var(--divider);
        }
        .sh-intro-item {
          background: var(--bg); padding: 28px 0;
          display: flex; flex-direction: column; gap: 6px;
        }
        .sh-intro-item:not(:first-child) { padding-left: 32px; }
        .sh-intro-num { font-family: 'Cormorant', serif; font-size: 42px; font-weight: 300; color: var(--gold); letter-spacing: -0.01em; }
        .sh-intro-label { font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ivory-dim); font-weight: 400; }
        .sh-scroll {
          position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center;
          gap: 10px; font-size: 10px; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--ivory-dim);
        }
        .sh-scroll-line { width: 1px; height: 48px; background: var(--divider); overflow: hidden; position: relative; }
        .sh-scroll-line::after {
          content: ''; position: absolute; top: -100%; left: 0; right: 0; height: 100%;
          background: var(--gold); animation: scrollDrop 2s ease-in-out infinite;
        }
        @keyframes scrollDrop { 0% { top: -100%; } 50%, 100% { top: 100%; } }

        /* ── Marquee ── */
        .quote-marquee {
          background: var(--bg2); padding: 28px 0;
          border-top: 1px solid var(--divider); border-bottom: 1px solid var(--divider);
          overflow: hidden; white-space: nowrap;
        }
        .quote-inner { display: inline-flex; gap: 0; animation: marquee 30s linear infinite; }
        .quote-item {
          font-family: 'Cormorant', serif; font-size: 28px;
          font-weight: 300; font-style: italic; color: var(--ivory-dim);
          padding: 0 48px; white-space: nowrap; letter-spacing: 0.01em;
        }
        .quote-item .dot { color: var(--gold); font-style: normal; font-size: 10px; vertical-align: middle; margin: 0 8px; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        /* ── Stories Section ── */
        .stories-section { padding: 120px 56px 0; }
        .stories-head { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; margin-bottom: 64px; }
        .section-eyebrow {
          display: flex; align-items: center; gap: 14px;
          font-size: 13px; letter-spacing: 0.18em;
          text-transform: uppercase; color: var(--gold);
          font-weight: 500; margin-bottom: 28px;
        }
        .section-eyebrow .line { width: 28px; height: 1px; background: var(--gold); }
        .section-h2 {
          font-family: 'Cormorant', serif; font-size: clamp(56px, 8vw, 96px);
          font-weight: 300; line-height: 1.05; letter-spacing: -0.02em;
        }
        .section-h2 em { font-style: italic; color: var(--orange); }
        .stories-intro p { font-size: 22px; color: var(--ivory-mid); line-height: 1.75; font-weight: 300; max-width: 540px; margin-bottom: 24px; }

        /* ── Featured Story ── KEY CHANGE: left panel is now dark typewriter */
        .featured-story {
          margin-bottom: 2px;
          display: grid; grid-template-columns: 1fr 1fr;
          min-height: 580px; border: 1px solid var(--divider);
          position: relative; overflow: hidden; cursor: pointer;
          transition: all 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .featured-story:hover .fs-name { color: var(--orange); }

        /* Left panel — typewriter dark panel */
        .fs-left-panel {
          position: relative;
          overflow: hidden;
          min-height: 580px;
        }

        .fs-content {
          padding: 56px 56px 56px 64px;
          display: flex; flex-direction: column; justify-content: space-between;
          background: var(--bg3);
        }
        .fs-profile { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 40px; }
        .fs-avatar {
          width: 56px; height: 56px; border-radius: 50%;
          border: 1px solid var(--gold-dim);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Cormorant', serif; font-size: 22px; font-weight: 500;
          color: var(--gold); background: var(--gold-faint); flex-shrink: 0;
          transition: all 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .fs-name { font-size: 19px; font-weight: 500; color: var(--ivory); letter-spacing: 0.02em; transition: color 0.3s; }
        .fs-role { font-size: 16px; color: var(--ivory-dim); margin-top: 4px; font-weight: 300; line-height: 1.6; letter-spacing: 0.01em; }
        .fs-tag {
          position: absolute; top: 24px; left: 24px; z-index: 10;
          background: var(--gold); color: var(--bg);
          font-size: 11px; letter-spacing: 0.14em;
          text-transform: uppercase; font-weight: 600; padding: 8px 16px;
        }
        .fs-quote {
          font-family: 'Cormorant', serif;
          font-size: clamp(24px, 3.4vw, 40px);
          font-style: italic; font-weight: 300; line-height: 1.5;
          color: var(--ivory); flex: 1; margin-bottom: 36px;
          position: relative; padding-top: 20px;
          letter-spacing: 0.01em;
        }
        .fs-quote::before {
          content: '\\201C'; font-size: 90px; color: var(--gold); opacity: 0.2;
          position: absolute; top: -24px; left: -10px; line-height: 1; font-style: normal;
        }
        .fs-transformation {
          display: flex; align-items: stretch; gap: 0;
          background: var(--bg4); padding: 18px 20px; margin-bottom: 28px;
        }
        .fs-trans-from, .fs-trans-to { font-size: 17px; font-weight: 300; line-height: 1.6; flex: 1; letter-spacing: 0.01em; }
        .fs-trans-from { color: rgba(28,26,20,0.9); }
        .fs-trans-to { color: var(--orange); text-align: right; }
        .fs-trans-label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.12em; opacity: 0.7; display: block; margin-bottom: 4px; font-weight: 500; }
        .fs-trans-arrow { width: 40px; text-align: center; flex-shrink: 0; color: var(--gold); font-size: 18px; display: flex; align-items: center; justify-content: center; }
        .fs-metrics { display: flex; gap: 36px; flex-wrap: wrap; }
        .fs-metric-num { font-family: 'Cormorant', serif; font-size: 36px; font-weight: 300; color: var(--gold); line-height: 1; letter-spacing: -0.01em; }
        .fs-metric-num sup { font-size: 18px; }
        .fs-metric-label { font-size: 13px; color: var(--ivory); margin-top: 6px; font-weight: 300; letter-spacing: 0.06em; line-height: 1.5; }

        /* ── Story Grid ── */
        .stories-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: var(--divider); margin-bottom: 2px; }
        .story-card {
          background: var(--bg2); padding: 40px 36px;
          position: relative; overflow: hidden; cursor: pointer;
          transition: all 0.5s cubic-bezier(0.22,1,0.36,1);
          display: flex; flex-direction: column;
        }
        .story-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--orange), var(--orange-light), var(--gold));
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .story-card:hover { background: var(--bg3); transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .story-card:hover::after { transform: scaleX(1); }
        .story-card:hover .sc-name { color: var(--orange); }
        .sc-num { font-family: 'Cormorant', serif; font-size: 12px; color: var(--ivory-dim); letter-spacing: 0.12em; font-weight: 400; margin-bottom: 24px; display: block; position: relative; z-index: 1; }
        .sc-avatar {
          width: 76px; height: 76px; border-radius: 50%;
          border: 1px solid var(--divider-bright);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Cormorant', serif; font-size: 26px; font-weight: 400;
          color: var(--gold); background: var(--gold-faint); margin-bottom: 22px;
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
          position: relative; z-index: 1; flex-shrink: 0;
        }
        .sc-name { font-size: 18px; font-weight: 500; color: var(--ivory); margin-bottom: 5px; letter-spacing: 0.02em; position: relative; z-index: 1; transition: color 0.3s; }
        .sc-role { font-size: 13px; color: var(--ivory-dim); font-weight: 300; margin-bottom: 5px; position: relative; z-index: 1; line-height: 1.45; }
        .sc-city { font-size: 12px; color: var(--gold); font-weight: 300; letter-spacing: 0.05em; margin-bottom: 24px; position: relative; z-index: 1; }
        .sc-quote { font-family: 'Cormorant', serif; font-size: 22px; font-style: italic; font-weight: 300; line-height: 1.55; color: var(--ivory-mid); margin-bottom: 30px; flex: 1; position: relative; z-index: 1; letter-spacing: 0.01em; }
        .sc-divider { height: 1px; background: var(--divider); margin: 0 0 24px; position: relative; z-index: 1; }
        .sc-before-after { display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px; position: relative; z-index: 1; }
        .sc-ba-item { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; font-weight: 300; line-height: 1.55; letter-spacing: 0.01em; }
        .sc-ba-icon { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; margin-top: 6px; }
        .sc-ba-before .sc-ba-icon { background: rgba(28,26,20,0.2); }
        .sc-ba-before { color: var(--ivory-dim); }
        .sc-ba-after .sc-ba-icon { background: var(--gold); }
        .sc-ba-after { color: var(--ivory-mid); }
        .sc-metric { display: inline-flex; align-items: baseline; gap: 4px; background: var(--gold-faint); border: 1px solid var(--gold-dim); padding: 8px 14px; margin-top: 4px; position: relative; z-index: 1; }
        .sc-metric-num { font-family: 'Cormorant', serif; font-size: 32px; font-weight: 300; color: var(--gold); line-height: 1; letter-spacing: -0.01em; }
        .sc-metric-label { font-size: 11px; color: var(--ivory-dim); letter-spacing: 0.1em; text-transform: uppercase; font-weight: 400; }
        .sc-stars { color: var(--gold); font-size: 13px; letter-spacing: 3px; margin-top: 18px; display: block; position: relative; z-index: 1; }

        /* ── Horizontal Story Bar ── */
        .hstory-bar {
          background: var(--bg2);
          border-top: 1px solid var(--divider); border-bottom: 1px solid var(--divider);
          padding: 56px;
          display: grid; grid-template-columns: 200px 1fr 240px;
          gap: 48px; align-items: center;
          cursor: pointer; transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
          position: relative; overflow: hidden;
        }
        .hstory-bar::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 0;
          background: linear-gradient(to bottom, var(--orange), var(--orange-light));
          transition: width 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .hstory-bar:hover { background: var(--bg3); transform: translateX(8px); }
        .hstory-bar:hover::before { width: 3px; }
        .hstory-bar:hover .hb-name { color: var(--orange); }
        .hstory-bar + .hstory-bar { border-top: none; }
        .hb-profile { display: flex; flex-direction: column; gap: 8px; }
        .hb-avatar {
          width: 84px; height: 84px; border-radius: 50%;
          border: 1px solid var(--divider-bright);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Cormorant', serif; font-size: 30px; font-weight: 400;
          color: var(--gold); background: var(--gold-faint);
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1); flex-shrink: 0;
        }
        .hstory-bar:hover .hb-avatar { transform: scale(1.1); border-color: var(--orange); box-shadow: 0 0 20px rgba(212,83,10,0.25); }
        .hb-name { font-size: 18px; font-weight: 500; color: var(--ivory); letter-spacing: 0.02em; transition: color 0.3s; }
        .hb-role { font-size: 13px; color: var(--ivory-dim); font-weight: 300; line-height: 1.5; }
        .hb-city { font-size: 12px; color: var(--gold); font-weight: 300; letter-spacing: 0.05em; }
        .hb-quote { font-family: 'Cormorant', serif; font-size: 22px; font-style: italic; font-weight: 300; line-height: 1.55; color: var(--ivory-mid); letter-spacing: 0.01em; }
        .hb-metrics { display: flex; gap: 24px; justify-content: flex-end; }
        .hb-metric { text-align: right; }
        .hb-metric-num { font-family: 'Cormorant', serif; font-size: 32px; font-weight: 300; color: var(--gold); line-height: 1; letter-spacing: -0.01em; }
        .hb-metric-label { font-size: 11px; color: var(--ivory-dim); letter-spacing: 0.1em; text-transform: uppercase; font-weight: 400; }

        /* ── Final CTA ── */
        .final-cta { padding: 120px 56px; text-align: center; position: relative; overflow: hidden; background: var(--bg); }
        .cta-rings { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none; }
        .cta-ring { position: absolute; border-radius: 50%; border: 1px solid var(--divider); transform: translate(-50%, -50%); }
        .cta-ring:nth-child(1) { width: 300px; height: 300px; }
        .cta-ring:nth-child(2) { width: 500px; height: 500px; border-color: rgba(160,120,48,0.07); }
        .cta-ring:nth-child(3) { width: 700px; height: 700px; border-color: rgba(160,120,48,0.04); }
        .cta-ring:nth-child(4) { width: 900px; height: 900px; border-color: rgba(160,120,48,0.02); }
        .cta-eyebrow { font-size: 16px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold); margin-bottom: 24px; font-weight: 500; position: relative; z-index: 1; }
        .cta-h2 { font-family: 'Cormorant', serif; font-size: clamp(56px, 9vw, 104px); font-weight: 300; color: var(--ivory); line-height: 1.05; margin-bottom: 20px; letter-spacing: -0.02em; position: relative; z-index: 1; }
        .cta-h2 em { font-style: italic; color: var(--orange); }
        .cta-sub { font-size: 20px; color: var(--ivory-mid); margin-bottom: 52px; font-weight: 300; max-width: 500px; margin-left: auto; margin-right: auto; line-height: 1.7; position: relative; z-index: 1; }
        .cta-btns { display: flex; gap: 14px; justify-content: center; position: relative; z-index: 1; flex-wrap: wrap; }
        .btn-gold-lg {
          background: linear-gradient(135deg, var(--gold), var(--gold-bright));
          color: var(--bg); padding: 18px 40px; font-size: 14px;
          border: none; border-radius: 2px; cursor: pointer; letter-spacing: 0.1em;
          text-transform: uppercase; font-weight: 600; font-family: 'Outfit', sans-serif;
          position: relative; overflow: hidden;
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
          box-shadow: 0 4px 15px rgba(160,120,48,0.2);
          text-decoration: none; display: inline-block;
        }
        .btn-gold-lg span { position: relative; z-index: 1; }
        .btn-gold-lg::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, var(--orange), var(--orange-light));
          transform: translateX(-101%); transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .btn-gold-lg:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(160,120,48,0.3); }
        .btn-gold-lg:hover::before { transform: translateX(0); }
        .btn-outline-lg {
          background: transparent; color: var(--ivory); padding: 18px 40px; font-size: 14px;
          border: 1px solid rgba(28,26,20,0.2); border-radius: 2px; cursor: pointer;
          letter-spacing: 0.1em; text-transform: uppercase; font-weight: 400;
          font-family: 'Outfit', sans-serif; transition: border-color 0.3s, color 0.3s;
          text-decoration: none; display: inline-block;
        }
        .btn-outline-lg:hover { border-color: var(--gold); color: var(--gold); }
        .cta-note { font-size: 11px; color: rgba(28,26,20,0.2); margin-top: 28px; letter-spacing: 0.1em; text-transform: uppercase; position: relative; z-index: 1; }

        /* ── Responsive ── */
        @media (max-width: 1023px) and (min-width: 768px) {
          .sh-hero { padding: 120px 40px 80px; }
          .sh-vert { display: none; }
          .stories-section { padding: 80px 40px 0; }
          .stories-head { grid-template-columns: 1fr; gap: 40px; margin-bottom: 48px; }
          .featured-story { grid-template-columns: 1fr; min-height: auto; }
          .fs-left-panel { min-height: 360px; }
          .fs-content { padding: 40px; }
          .stories-grid { grid-template-columns: 1fr 1fr; }
          .hstory-bar { grid-template-columns: 180px 1fr; gap: 32px; padding: 40px; }
          .hb-metrics { display: none; }
          .final-cta { padding: 96px 40px; }
        }

        @media (max-width: 1440px) and (min-width: 768px) {
          .sh-hero { padding-top: 180px; justify-content: flex-start; }
          .sh-breadcrumb { top: 130px; }
        }

        @media (min-width: 1441px) {
          .sh-breadcrumb { display: none; }
          .sh-eyebrow { margin-top: 0; }
        }

        @media (max-width: 767px) {
          .sh-hero { padding: 130px 20px 56px; min-height: 100svh; justify-content: flex-start; }
          .sh-hero-num { font-size: clamp(80px, 22vw, 120px); right: -8px; top: 40%; }
          .sh-vert { display: none; }
          .sh-breadcrumb { top: 120px; left: 20px; font-size: 10px; }
          .sh-eyebrow { font-size: 11px; gap: 10px; margin-top: 48px; margin-bottom: 18px; }
          .sh-h1 { font-size: clamp(44px, 12vw, 68px); line-height: 1; padding-bottom: 8px; }
          .sh-sub { font-size: 16px; line-height: 1.75; margin-top: 18px; margin-bottom: 36px; max-width: 100%; }
          .sh-intro-grid { grid-template-columns: 1fr; border-top: 1px solid var(--divider); }
          .sh-intro-item { padding: 18px 0 !important; border-bottom: 1px solid var(--divider); }
          .sh-intro-item:last-child { border-bottom: none; }
          .sh-intro-item:not(:first-child) { padding-left: 0 !important; }
          .sh-scroll { display: none; }
          .quote-item { font-size: 18px; padding: 0 28px; }
          .stories-section { padding: 56px 20px 0; }
          .stories-head { grid-template-columns: 1fr; gap: 24px; margin-bottom: 36px; }
          .section-h2 { font-size: clamp(38px, 9vw, 52px); }
          .stories-intro p { font-size: 16px; max-width: 100%; margin-bottom: 12px; }
          .featured-story { grid-template-columns: 1fr; min-height: auto; border-left: none; border-right: none; }
          .fs-left-panel { min-height: 320px; }
          .fs-tag { top: 14px; left: 14px; font-size: 10px; padding: 5px 12px; }
          .fs-content { padding: 24px 20px 28px; }
          .fs-profile { flex-direction: row; align-items: flex-start; gap: 12px; margin-bottom: 20px; }
          .fs-avatar { width: 44px; height: 44px; font-size: 16px; flex-shrink: 0; }
          .fs-name { font-size: 15px; }
          .fs-role { font-size: 13px; line-height: 1.45; }
          .fs-quote { font-size: clamp(16px, 4vw, 19px); margin-bottom: 22px; padding-top: 14px; }
          .fs-transformation { flex-direction: column; gap: 12px; padding: 14px 16px; margin-bottom: 18px; }
          .fs-trans-to { text-align: left; }
          .fs-trans-arrow { display: none; }
          .fs-metrics { gap: 20px; }
          .fs-metric-num { font-size: 26px; }
          .stories-grid { grid-template-columns: 1fr; }
          .story-card { padding: 28px 22px; }
          .hstory-bar { grid-template-columns: 1fr; gap: 16px; padding: 24px 20px; }
          .hb-profile { display: grid; grid-template-columns: auto 1fr; grid-template-rows: auto auto auto; column-gap: 14px; row-gap: 2px; align-items: start; }
          .hb-avatar { width: 56px; height: 56px; font-size: 20px; flex-shrink: 0; grid-row: span 3; }
          .hb-metrics { display: flex; justify-content: flex-start; gap: 20px; }
          .hb-metric { text-align: left; }
          .final-cta { padding: 64px 20px; }
          .cta-h2 { font-size: clamp(34px, 9vw, 48px) !important; line-height: 1.15; }
          .cta-sub { font-size: 15px; max-width: 100%; margin-bottom: 36px; }
          .cta-btns { flex-direction: column; align-items: stretch; gap: 10px; }
          .btn-gold-lg, .btn-outline-lg { width: 100%; text-align: center; padding: 16px 24px; font-size: 13px; }
        }

        @media (max-width: 400px) {
          .sh-hero { padding: 120px 16px 48px; }
          .stories-section { padding: 48px 16px 0; }
          .fs-content { padding: 20px 16px 24px; }
          .story-card { padding: 20px 16px; }
          .hstory-bar { padding: 20px 16px; }
          .final-cta { padding: 56px 16px; }
        }
      `}</style>

      <Layout
        loaderTitle="Stories"
        loaderSubtitle="Real Journeys to Financial Freedom"
        loaderDuration={1400}
      >
        {/* ── Hero ── */}
        <section className="sh-hero">
          <div className="sh-hero-bg"></div>
          <div className="sh-hero-num">Stories</div>

          <div className="sh-breadcrumb">
            <Link href="/" style={{ color: '#1c1a1480' }}>Home</Link>
            <span className="sep">—</span>
            <span className="cur">Stories</span>
          </div>
          <div className="sh-eyebrow reveal">
            <span className="line"></span>
            Client Stories
          </div>
          <h1 className="sh-h1">
            <span className="li visible">Not just <em>clients.</em></span>
            <span className="li visible">Transformed</span>
            <span className="li visible">perspectives.</span>
          </h1>
          <p className="sh-sub reveal d2">
            Our clients don't just invest — they change how they think about money. What starts as uncertainty and scattered decisions becomes clarity, structure, and a sense of direction.
          </p>
          <div className="sh-intro-grid">
            <div className="sh-intro-item reveal d1">
              <span className="sh-intro-num">500+</span>
              <span className="sh-intro-label">Families Guided</span>
            </div>
            <div className="sh-intro-item reveal d2">
              <span className="sh-intro-num">18+</span>
              <span className="sh-intro-label">Years of Experience</span>
            </div>
            <div className="sh-intro-item reveal d3">
              <span className="sh-intro-num">7</span>
              <span className="sh-intro-label">Integrated Service<br />Disciplines</span>
            </div>
            <div className="sh-intro-item reveal d4">
              <span className="sh-intro-num">100%</span>
              <span className="sh-intro-label">Goal-Based Approach</span>
            </div>
          </div>
          <div className="sh-scroll">
            <span>Scroll</span>
            <div className="sh-scroll-line"></div>
          </div>
        </section>

        {/* ── Marquee ── */}
        <div className="quote-marquee">
          <div className="quote-inner">
            {[...Array(2)].map((_, ri) => (
              <span key={ri} style={{ display: 'contents' }}>
                <span className="quote-item">These journeys are not about quick wins<span className="dot">·</span></span>
                <span className="quote-item">They're about building discipline, staying consistent<span className="dot">·</span></span>
                <span className="quote-item">Making better financial choices over long term<span className="dot">·</span></span>
                <span className="quote-item">When the right guidance meets patience and intent<span className="dot">·</span></span>
              </span>
            ))}
          </div>
        </div>

        {/* ── Stories Section ── */}
        <section className="stories-section">
          <div className="stories-head">
            <div>
              <div className="section-eyebrow reveal"><span className="line"></span>Real Transformations</div>
              <h2 className="section-h2 reveal d1">Every story<br />begins with<br /><em>confusion.</em></h2>
            </div>
            <div className="stories-intro">
              <p className="reveal d2">Over time, we see a clear shift. What starts as uncertainty and scattered decisions becomes clarity, structure, and a sense of direction.</p>
              <p className="reveal d3">Each story reflects what happens when the right guidance meets patience and intent.</p>
            </div>
          </div>

          {/* ── Featured Story — TypewriterQuote on LEFT, client quote on RIGHT ── */}
          <div className="featured-story reveal">

            {/* LEFT PANEL — Typewriter quote dark panel */}
            <div className="fs-left-panel">
              <span className="fs-tag">Featured Story</span>
              <TypewriterQuote />
            </div>

            {/* RIGHT PANEL — Client testimonial */}
            <div className="fs-content">
              <div>
                <div className="fs-profile">
                  <div
                    className="fs-avatar"
                    style={{
                      backgroundImage: 'url(/testimonials/subir-rao.jpeg)',
                      backgroundSize: 'cover', backgroundPosition: 'center',
                      border: '2px solid var(--gold)',
                      boxShadow: '0 0 20px rgba(160,120,48,0.3)'
                    }}
                  />
                  <div>
                    <div className="fs-name">Mr Subir Rao</div>
                    <div className="fs-role">Associate Professor and Deputy Chair for Executive Management Programs — S.P.Jain Institute of Management and Research</div>
                  </div>
                </div>
                <blockquote className="fs-quote">
                  "I'm extremely satisfied with services provided by Nitesh. His ability to stay on top of market movements is impressive, and consistently understanding what impacts my investments is key. He takes time to listen and tell me stuff that's tailored to my specific situation, rather than pushing products that might benefit him more. I've developed this full trust over time and I'd highly recommend Nitesh."
                </blockquote>
                <div className="fs-transformation">
                  <div className="fs-trans-from">
                    <span className="fs-trans-label">Before</span>
                    Scattered investments across 12+ products. No clarity on goals. Anxiety during every market dip.
                  </div>
                  <div className="fs-trans-arrow">—</div>
                  <div className="fs-trans-to">
                    <span className="fs-trans-label">After</span>
                    Structured plan across 4 goals. Monthly SIP discipline. Calm through 2022 correction.
                  </div>
                </div>
              </div>
              <div className="fs-metrics">
                <div>
                  <div className="fs-metric-num">3<sup>yrs</sup></div>
                  <div className="fs-metric-label">Client Since<br />2021</div>
                </div>
                <div>
                  <div className="fs-metric-num">4</div>
                  <div className="fs-metric-label">Goals<br />Structured</div>
                </div>
                <div>
                  <div className="fs-metric-num">Stable</div>
                  <div className="fs-metric-label">Portfolio<br />Growth</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Story Grid ── */}
        <div className="stories-grid">
          {[
            { num: 'Story 01', img: '/testimonials/eswaran-kps.jpeg', name: 'Eswaran K P S', role: 'Proprietor, Astrom Business Associates', quote: '"Nitesh has been more of a partner than just an advisor or service provider. He has helped us navigate both tough & great times prudently. His innate understanding of financial markets is evident from returns on Investment."', before: 'Uncertain market approach', after: 'Strategic, goal-aligned investments', metric: 'Strong', metricLabel: 'Portfolio<br/>Performance', delay: '' },
            { num: 'Story 02', img: '/testimonials/ashish-more.jpeg', name: 'Mr Ashish More', role: 'Inspector Fire, Maharashtra Fire Service', quote: '"Dear Nitesh, Thank you for your prompt response and swift action in getting my account opened. I truly appreciate your thoughtful suggestions in selecting the right funds for investment."', before: 'Manual fund selection', after: 'Expert-guided portfolio', metric: 'On Track', metricLabel: 'Goal<br/>Progress', delay: 'd2' },
            { num: 'Story 03', img: '/testimonials/shamiran-banerjee.jpeg', name: 'Mr Shamiran S Banerjee', role: 'Associate Director, Morningstar, Inc', quote: '"I\'ve had the privilege of working with Nitesh for the past 1 year and I can confidently say that his expertise has been instrumental in helping me maximize my capital gains."', before: 'Generic investment approach', after: 'Personalized wealth strategy', metric: 'Positive', metricLabel: 'Wealth<br/>Building', delay: 'd3' },
            { num: 'Story 04', img: '/testimonials/mr-vaibhav-devlekar.png', name: 'Mr Vaibhav Devlekar', role: 'Head - Training & Quality, Reliable Spaces Private Limited', quote: '"Nitesh is one of most approachable person, always ready to answer any queries related to financial planning in a simple way. I stay worry-free with his support in the investment part."', before: 'Complex financial decisions', after: 'Clear, simple guidance', metric: 'Approachable', metricLabel: 'Advisor<br/>Style', delay: 'd4' },
            { num: 'Story 05', img: '/testimonials/mrs-priyanka-shetty.png', name: 'Mrs Priyanka Shetty', role: 'Head of Accounting, Nynas Naphthenics pvt ltd.', quote: '"Nitesh is an exceptional investor and financial advisor who has consistently demonstrated a deep understanding of financial markets. His expertise and guidance have been invaluable to me."', before: 'Uncertain investment choices', after: 'Informed decision making', metric: 'Expert', metricLabel: 'Market<br/>Knowledge', delay: '' },
            { num: 'Story 06', img: '/testimonials/mr-rigved-phadke.png', name: 'Mr Rigved Phadke', role: 'Actor, director, producer of Vedh Production', quote: '"Nitesh has been an incredible guide in my investment journey. He\'s honest, transparent, and always puts long-term growth first. He never pushes unnecessary options."', before: 'Product-pushing advisors', after: 'Client-first approach', metric: 'Trustworthy', metricLabel: 'Long-term<br/>Partnership', delay: 'd2' },
            { num: 'Story 07', img: '/testimonials/shraddha-kadam-jain.png', name: 'Mrs Shraddha Kadam', role: 'Soul Coach & Grief Support Guide - Healer', quote: '"Nitesh is a game-changer for financial planning. For the last 7 years, he has been managing my funds. I can attest to his expertise, patience, and personalized approach."', before: 'Scattered investment approach', after: 'Strategic wealth building', metric: 'Patient', metricLabel: 'Personalized<br/>Service', delay: 'd3' },
            { num: 'Story 08', img: '/testimonials/gauri.jpeg', name: 'Mrs Gauri Paralikar', role: 'Investor', quote: '"I have been investing in mutual funds for almost 10 years. Nitesh was the one who guided me through this entire process in depth. He has proven to be the best Financial Advisor."', before: 'DIY investing struggles', after: 'Expert guidance and peace of mind', metric: 'Experienced', metricLabel: '10+ Years<br/>Partnership', delay: 'd4' },
            { num: 'Story 09', img: '/testimonials/prasad.jpeg', name: 'Prasad shetty', role: 'AVP - IndusInd Bank', quote: '"I have been investing in Mutual Funds through Nitesh for the past 15 years. His exceptional advice and services have helped me and my relatives achieve significant growth."', before: 'Limited investment knowledge', after: 'Professional wealth management', metric: 'Dedicated', metricLabel: '15+ Years<br/>Relationship', delay: '' },
            { num: 'Story 10', img: '/testimonials/pallavi.jpeg', name: 'Miss Pallavi Alva', role: 'Sr. Quality and Process Improvement Analyst - Morningstar India', quote: '"Nitesh has been extremely helpful and supportive. He explains everything clearly and is always available when I need assistance. I truly appreciate his prompt and detailed guidance."', before: 'Unclear financial communication', after: 'Clear, responsive guidance', metric: 'Supportive', metricLabel: 'Always<br/>Available', delay: 'd2' },
            { num: 'Story 11', img: '/testimonials/utkarsha.jpeg', name: 'Mrs Utkarsha Nijap', role: 'Senior Operations Analyst - Morningstar', quote: '"Nitesh has been instrumental in helping me organize and grow my finances. His deep understanding of financial planning, combined with his patient and practical approach, made me feel confident."', before: 'Disorganized financial structure', after: 'Well-organized financial plan', metric: 'Structured', metricLabel: 'Financial<br/>Organization', delay: 'd3' },
            { num: 'Story 12', img: '/testimonials/sujitha.jpeg', name: 'Mrs Sujitha Nair', role: 'Trust and Safety Advisor - Accenture Ltd', quote: '"Nitesh has always placed his clients interest first. He always explains about risks, fees and other information critical to their decision making. I am glad that you are someone reputable."', before: 'Hidden fees and unclear risks', after: 'Transparent, client-first advice', metric: 'Transparent', metricLabel: 'Ethical<br/>Practices', delay: 'd4' },
            { num: 'Story 13', img: '/testimonials/shubhangi.jpeg', name: 'शुभांगी जोशी', role: 'संगीत शिक्षिका – Naad Sangeet Vidyalaya', quote: 'नमस्कार, मी ३ वर्षांपूर्वी दीर्घकालीन गुंतवणूक वाढ आणि नियमित उत्पन्न योजना या उद्देशाने गुंतवणूक केली होती. त्याचा मला खूप चांगला फायदा झाला आहे.', before: 'गुंतवणुकीबद्दल अनिश्चितता', after: 'दीर्घकालीन वाढ आणि स्थिर उत्पन्न', metric: 'लाभदायक', metricLabel: 'गुंतवणूक<br/>योजना', delay: '' },
            { num: 'Story 14', img: '/testimonials/Ankit.jpeg', name: 'Ankit Kamat', role: 'AVP - Citicorp Services India Pvt Ltd', quote: '"Nitesh is passionate for his work and a very good advisor. Special thanks to him for assisting me build a customized MF portfolio based on my requirements and his market expertise."', before: 'Generic portfolio approach', after: 'Customized investment strategy', metric: 'Expert', metricLabel: 'Customized<br/>Solutions', delay: 'd2' },
            { num: 'Story 15', img: '/testimonials/Shirish.jpeg', name: 'Mr Shirish Gurjar', role: 'Professional', quote: '"Mr. Nitesh has a sound knowledge of mutual funds. Since I was unaware of what to do with my savings, he has guided me with proper investment plans and has made me a secured investor."', before: 'Savings without direction', after: 'Secure investment planning', metric: 'Secured', metricLabel: 'Investment<br/>Safety', delay: 'd3' },
          ].map((card) => (
            <div key={card.num} className={`story-card reveal ${card.delay}`}>
              <span className="sc-num">{card.num}</span>
              <div className="sc-avatar" style={{ backgroundImage: `url(${card.img})`, backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid var(--gold)', boxShadow: '0 0 15px rgba(160,120,48,0.2)' }} />
              <div className="sc-name">{card.name}</div>
              <div className="sc-role">{card.role}</div>
              <div className="sc-quote">{card.quote}</div>
              <div className="sc-divider" />
              <div className="sc-before-after">
                <div className="sc-ba-item sc-ba-before"><div className="sc-ba-icon" /><div>{card.before}</div></div>
                <div className="sc-ba-item sc-ba-after"><div className="sc-ba-icon" /><div>{card.after}</div></div>
              </div>
              <div className="sc-metric">
                <span className="sc-metric-num">{card.metric}</span>
                <span className="sc-metric-label" dangerouslySetInnerHTML={{ __html: card.metricLabel }} />
              </div>
              <span className="sc-stars">★★★★★</span>
            </div>
          ))}
        </div>

        {/* ── Horizontal Story Bars ── */}
        {[
          { img: '/testimonials/manisha-phadke.jpeg', name: 'Dr Manisha Phadke', role: 'DGM - Quality Assurance, Ajanta Pharma Ltd', quote: '"Nitesh is very patient. Person like me who was not knowing anything about finance, he explained me everything in detail in simple language. He has taken all care of my investment and made my retirement tenure peaceful."', metrics: [{ num: 'Strong', label: 'Partnership' }, { num: '8', label: 'Years Together' }], delay: '' },
          { img: '/testimonials/lekha-bharathan.jpeg', name: 'Mrs Lekha Bharathan', role: 'Vice President & National Manager - Audit, Reliance General Insurance', quote: '"If you wish to have a Personal trustworthy friend who will also manage your money expertly for you, look no further than Nitesh. It\'s been two years of transparent dedicated stress free relationship."', metrics: [{ num: '8', label: 'Years Together' }, { num: 'Positive', label: 'Growth' }], delay: 'd2' },
          { img: '/testimonials/sdkhandeka.jpeg', name: 'Mr S.D.Khandekar', role: 'Retired Sr. Accounts Officer, Mumbai Port Authority', quote: '"Nitesh is a professional portfolio adviser. He is hard working and updated in his field. He has insight in his subject and capability to keep the investors satisfied by achieving optimum returns."', metrics: [{ num: 'Strong', label: 'Performance' }, { num: '25', label: 'Years Experience' }], delay: 'd3' },
          { img: '/testimonials/sadhana-khandekar.jpeg', name: 'Mrs Sadhana Khandekar', role: 'Retired Manager, Air India Limited', quote: '"I know Nitesh for a long time and I know his passion about financial planning. His guidance has proved very beneficial to me looking at returns I am getting today out of my investment."', metrics: [{ num: 'Steady', label: 'Returns' }, { num: '12', label: 'Years Together' }], delay: 'd4' },
        ].map((bar) => (
          <div key={bar.name} className={`hstory-bar reveal ${bar.delay}`}>
            <div className="hb-profile">
              <div className="hb-avatar" style={{ backgroundImage: `url(${bar.img})`, backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid var(--gold)', boxShadow: '0 0 20px rgba(160,120,48,0.25)' }} />
              <div className="hb-name">{bar.name}</div>
              <div className="hb-role">{bar.role}</div>
            </div>
            <div className="hb-quote">{bar.quote}</div>
            <div className="hb-metrics">
              {bar.metrics.map(m => (
                <div key={m.label} className="hb-metric">
                  <div className="hb-metric-num">{m.num}</div>
                  <div className="hb-metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* ── Final CTA ── */}
        <section className="final-cta">
          <div className="cta-rings">
            <div className="cta-ring" />
            <div className="cta-ring" />
            <div className="cta-ring" />
            <div className="cta-ring" />
          </div>
          <div className="cta-eyebrow reveal">Ready to Begin Your Journey?</div>
          <h2 className="cta-h2 reveal d1">Your story of <em>financial clarity</em> starts here.</h2>
          <p className="cta-sub reveal d2">Join hundreds of families who've transformed their relationship with money through disciplined, goal-based wealth management.</p>
          <div className="cta-btns reveal d3">
            <Link href="/contact"><button className="btn-gold-lg"><span>Start Your Journey</span></button></Link>
            <Link href="/about"><button className="btn-outline-lg">View All Stories</button></Link>
          </div>
          <p className="cta-note reveal d4">No obligation · Confidential consultation · Personalised approach</p>
        </section>

      </Layout>
    </>
  )
}