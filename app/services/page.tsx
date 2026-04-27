'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'

export default function Services() {
  const [loaderVisible, setLoaderVisible] = useState(true)
  const [processFillActive, setProcessFillActive] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaderVisible(false), 1600)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
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
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const processObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setProcessFillActive(true)
            processObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.4 }
    )
    const el = document.getElementById('processTimeline')
    if (el) processObserver.observe(el)
    return () => processObserver.disconnect()
  }, [])

  const toggleCard = (index: number) => {
    const allCards = document.querySelectorAll('.svc-card')
    const clickedCard = allCards[index]
    const isOpen = clickedCard.classList.contains('open')
    allCards.forEach((card) => card.classList.remove('open'))
    if (!isOpen) clickedCard.classList.add('open')
  }

  return (
    <>
      <style jsx global>{`
        :root {
          --gold: #A07830;
          --gold-light: #B8924A;
          --gold-bright: #C9A96E;
          --gold-dark: #7A5C20;
          --gold-dim: rgba(160,120,48,0.12);
          --orange: #D4530A;
          --orange-light: #E8703A;
          --orange-dark: #A83E00;
          --orange-dim: rgba(212,83,10,0.1);
          --orange-glow: rgba(212,83,10,0.05);
          --bg: #FAFAF8;
          --bg2: #F4F2EE;
          --bg3: #EDE9E2;
          --bg4: #E4DFD6;
          --ivory: #1C1A14;
          --ivory-mid: #6B6050;
          --ivory-dim: rgba(28,26,20,0.5);
          --ivory-faint: rgba(28,26,20,0.08);
          --divider: rgba(160,120,48,0.15);
          --divider-o: rgba(212,83,10,0.15);
          --divider-bright: rgba(160,120,48,0.35);
          --divider-w: rgba(28,26,20,0.08);
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

        /* ── LOADER ── */
        .page-loader {
          position: fixed; inset: 0; z-index: 99990; background: var(--bg);
          display: flex; align-items: center; justify-content: center;
          flex-direction: column; gap: 28px;
          transition: opacity 0.8s ease, visibility 0.8s ease;
        }
        .page-loader.hidden { opacity: 0; visibility: hidden; pointer-events: none; }
        .loader-logo {
          font-family: 'Cormorant', serif; font-size: 36px; font-weight: 300;
          color: var(--ivory); letter-spacing: 0.12em;
          opacity: 0; animation: lFade 0.6s 0.3s forwards;
        }
        .loader-logo span { color: var(--orange); }
        .loader-bar-wrap {
          width: 160px; height: 1px; background: rgba(212,83,10,0.18);
          overflow: hidden; opacity: 0; animation: lFade 0.6s 0.5s forwards;
        }
        .loader-bar {
          height: 100%; width: 0;
          background: linear-gradient(to right, var(--gold), var(--orange));
          animation: lBar 1.2s 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        @keyframes lFade { to { opacity: 1; } }
        @keyframes lBar  { to { width: 100%; } }

        /* ── REVEAL ── */
        .reveal {
          opacity: 0; transform: translateY(44px);
          transition: opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-left {
          opacity: 0; transform: translateX(-52px);
          transition: opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal-left.visible  { opacity: 1; transform: translateX(0); }
        .reveal-right {
          opacity: 0; transform: translateX(52px);
          transition: opacity 1s cubic-bezier(0.22,1,0.36,1), transform 1s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal-right.visible { opacity: 1; transform: translateX(0); }
        .reveal-scale {
          opacity: 0; transform: scale(0.9);
          transition: opacity 1.1s cubic-bezier(0.22,1,0.36,1), transform 1.1s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal-scale.visible { opacity: 1; transform: scale(1); }
        .d1 { transition-delay: 0.08s; }
        .d2 { transition-delay: 0.18s; }
        .d3 { transition-delay: 0.28s; }
        .d4 { transition-delay: 0.38s; }
        .d5 { transition-delay: 0.48s; }
        .d6 { transition-delay: 0.58s; }

        /* ── SHARED ATOMS ── */
        .eyebrow {
          font-size: 13px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--orange); font-weight: 500;
          display: inline-flex; align-items: center; gap: 14px; margin-bottom: 20px;
        }
        .eyebrow .line { width: 28px; height: 1px; background: var(--orange); }
        .eyebrow-gold { color: var(--gold); }
        .eyebrow-gold .line { background: var(--gold); }
        @media (min-width: 768px)  { .eyebrow { font-size: 16px; } }
        @media (min-width: 1024px) { .eyebrow { font-size: 20px; } }

        .sec-h2 {
          font-family: 'Cormorant', serif;
          font-size: clamp(36px, 6vw, 70px);
          font-weight: 600; line-height: 1.04; letter-spacing: -0.025em; margin-bottom: 20px;
        }
        .sec-h2 em      { font-style: italic; color: var(--orange); font-weight: 300; }
        .sec-h2 em.gold { color: var(--gold); }

        .btn-orange {
          position: relative; overflow: hidden; background: var(--orange); color: var(--bg);
          padding: 15px 28px; font-size: 12px; border: none; border-radius: 1px;
          cursor: pointer; letter-spacing: 0.14em; text-transform: uppercase;
          font-weight: 700; font-family: 'Outfit', sans-serif; transition: box-shadow 0.3s;
          display: inline-block;
        }
        @media (min-width: 1024px) { .btn-orange { padding: 18px 42px; } }
        .btn-orange::before {
          content: ''; position: absolute; inset: 0; background: var(--orange-light);
          transform: translateX(-101%); transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .btn-orange:hover::before { transform: translateX(0); }
        .btn-orange:hover { box-shadow: 0 20px 60px rgba(212,83,10,0.4); }
        .btn-orange span { position: relative; z-index: 1; }

        .btn-ghost {
          position: relative; overflow: hidden; background: transparent; color: var(--ivory);
          padding: 15px 28px; font-size: 12px; border: 1px solid rgba(28,26,20,0.18);
          border-radius: 1px; cursor: pointer; letter-spacing: 0.14em; text-transform: uppercase;
          font-weight: 400; font-family: 'Outfit', sans-serif;
          transition: border-color 0.3s, color 0.3s; display: inline-block;
        }
        @media (min-width: 1024px) { .btn-ghost { padding: 18px 42px; } }
        .btn-ghost::before {
          content: ''; position: absolute; inset: 0; background: rgba(212,83,10,0.08);
          transform: translateX(-101%); transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .btn-ghost:hover::before { transform: translateX(0); }
        .btn-ghost:hover { border-color: var(--orange); color: var(--orange); }

        svg.ico {
          width: 22px; height: 22px; stroke: var(--orange); fill: none;
          stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round;
        }
        svg.ico.gold { stroke: var(--gold); }

        /* ── HERO ── */
        .svc-hero {
          min-height: 100svh; position: relative; overflow: hidden; background: var(--bg);
          display: flex; flex-direction: column;
        }
        @media (min-width: 1024px) {
          .svc-hero { display: grid; grid-template-columns: 58% 42%; }
        }

        .sh-glow-a {
          position: absolute; top: -5%; left: 20%; width: 800px; height: 800px;
          border-radius: 50%; pointer-events: none;
          background: radial-gradient(circle, rgba(212,83,10,0.05) 0%, transparent 65%);
          animation: glowA 9s ease-in-out infinite;
        }
        .sh-glow-b {
          position: absolute; bottom: -10%; right: 10%; width: 600px; height: 600px;
          border-radius: 50%; pointer-events: none;
          background: radial-gradient(circle, rgba(160,120,48,0.05) 0%, transparent 65%);
          animation: glowA 11s ease-in-out infinite 4s;
        }
        @keyframes glowA {
          0%,100% { transform: scale(1); opacity: 0.7; }
          50%      { transform: scale(1.12); opacity: 1; }
        }

        .sh-diagonal { display: none; }
        @media (min-width: 1024px) {
          .sh-diagonal {
            display: block; position: absolute; top: 0; right: 41%; bottom: 0; width: 120px;
            background: linear-gradient(to right, var(--bg), transparent); z-index: 3; pointer-events: none;
          }
        }

        .sh-left {
          padding: 100px 20px 56px; position: relative; z-index: 2;
          display: flex; flex-direction: column; justify-content: center;
        }
        @media (min-width: 768px)  { .sh-left { padding: 120px 40px 72px; } }
        @media (min-width: 1024px) { .sh-left { padding: 140px 80px 80px 72px; } }

        .sh-breadcrumb {
          display: flex; align-items: center; gap: 10px;
          font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase;
          color: var(--ivory-dim); margin-bottom: 28px;
        }
        @media (min-width: 768px)  { .sh-breadcrumb { font-size: 13px; margin-bottom: 40px; } }
        @media (min-width: 1024px) { .sh-breadcrumb { font-size: 20px; margin-bottom: 52px; } }
        .sh-breadcrumb a { color: var(--ivory-dim); text-decoration: none; transition: color 0.3s; }
        .sh-breadcrumb a:hover { color: var(--orange); }
        .sh-breadcrumb .sep { color: var(--orange); opacity: 0.4; }
        .sh-breadcrumb .cur { color: var(--orange); }

        .sh-tag {
          display: inline-flex; align-items: center; gap: 12px;
          font-size: 12px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--orange); font-weight: 500; margin-bottom: 22px;
        }
        @media (min-width: 768px)  { .sh-tag { font-size: 15px; gap: 14px; margin-bottom: 28px; } }
        @media (min-width: 1024px) { .sh-tag { font-size: 20px; margin-bottom: 36px; } }
        .sh-tag .line { width: 40px; height: 1px; background: var(--orange); flex-shrink: 0; }

        .sh-h1 {
          font-family: 'Cormorant', serif;
          font-size: clamp(44px, 9vw, 90px);
          font-weight: 600; line-height: 0.96; letter-spacing: -0.028em; margin-bottom: 18px; overflow: hidden;
        }
        .sh-h1 .lw { overflow: hidden; display: block; }
        .sh-h1 .li { display: block; transform: translateY(110%); transition: transform 1.1s cubic-bezier(0.22,1,0.36,1); }
        .sh-h1 .li.in { transform: translateY(0); }
        .sh-h1 em { font-style: italic; color: var(--orange); font-weight: 300; }

        .sh-sub-quote {
          font-family: 'Cormorant', serif; font-size: clamp(16px, 2.5vw, 25px);
          font-weight: 400; font-style: italic; color: var(--ivory-mid);
          padding-left: 18px; border-left: 2px solid var(--orange);
          margin-bottom: 22px; line-height: 1.45;
          opacity: 0; animation: slideIn 0.8s 1.5s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        @media (min-width: 1024px) { .sh-sub-quote { padding-left: 22px; margin-bottom: 36px; } }

        .sh-intro {
          font-size: clamp(14px, 2vw, 20px); line-height: 1.95; color: var(--ivory-mid);
          max-width: 100%; font-weight: 300; margin-bottom: 32px;
          opacity: 0; animation: fadeUp 0.8s 1.8s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        @media (min-width: 1024px) { .sh-intro { max-width: 480px; margin-bottom: 52px; } }

        .sh-btns {
          display: flex; gap: 12px; flex-wrap: wrap;
          opacity: 0; animation: fadeUp 0.8s 2.1s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        .sh-btns a, .sh-btns button { width: 100%; text-align: center; }
        @media (min-width: 480px) { .sh-btns a, .sh-btns button { width: auto; } }

        @keyframes slideIn { from { opacity: 0; transform: translateX(-18px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeUp  { from { opacity: 0; transform: translateY(20px); }  to { opacity: 1; transform: translateY(0); } }

        .sh-right {
          position: relative; z-index: 2; background: var(--bg2);
          display: flex; flex-direction: column; justify-content: center;
          padding: 40px 20px; overflow: hidden;
        }
        @media (min-width: 768px)  { .sh-right { padding: 56px 40px; } }
        @media (min-width: 1024px) { .sh-right { padding: 120px 60px 80px; } }

        .sh-ring-wrap {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%); pointer-events: none; display: none;
        }
        @media (min-width: 1024px) { .sh-ring-wrap { display: block; } }

        .sh-ring {
          position: absolute; border-radius: 50%; border: 1px solid var(--divider);
          top: 50%; left: 50%; transform: translate(-50%, -50%);
        }
        .sh-ring:nth-child(1) { width: 260px; height: 260px; animation: spinR 60s linear infinite;   border-color: rgba(212,83,10,0.1); }
        .sh-ring:nth-child(2) { width: 440px; height: 440px; animation: spinR 90s linear infinite reverse; border-color: rgba(160,120,48,0.07); }
        .sh-ring:nth-child(3) { width: 620px; height: 620px; animation: spinR 130s linear infinite;  border-color: rgba(212,83,10,0.04); }
        @keyframes spinR {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to   { transform: translate(-50%,-50%) rotate(360deg); }
        }

        .sh-svc-list { position: relative; z-index: 2; display: flex; flex-direction: column; gap: 1px; }

        .sh-svc-item {
          background: rgba(250,250,248,0.75); border: 1px solid var(--divider);
          padding: 14px 18px; display: flex; align-items: center; gap: 14px;
          backdrop-filter: blur(16px); cursor: pointer;
          transition: border-color 0.35s, background 0.35s, transform 0.35s cubic-bezier(0.22,1,0.36,1);
          position: relative; overflow: hidden;
        }
        @media (min-width: 1024px) { .sh-svc-item { padding: 22px 28px; gap: 18px; } }
        .sh-svc-item::after {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
          background: linear-gradient(to bottom, var(--orange), var(--gold));
          transform: scaleY(0); transform-origin: bottom;
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .sh-svc-item:hover::after  { transform: scaleY(1); }
        .sh-svc-item:hover { border-color: rgba(212,83,10,0.35); background: rgba(240,238,234,0.9); transform: translateX(8px); }

        .sh-svc-num {
          font-family: 'Cormorant', serif; font-size: 11px; font-weight: 600;
          color: var(--orange); opacity: 0.5; letter-spacing: 0.1em; min-width: 22px; transition: opacity 0.3s;
        }
        @media (min-width: 1024px) { .sh-svc-num { font-size: 13px; min-width: 28px; } }
        .sh-svc-item:hover .sh-svc-num { opacity: 1; }

        .sh-svc-name {
          font-size: 13px; font-weight: 500; color: var(--ivory); letter-spacing: 0.02em; transition: color 0.3s;
        }
        @media (min-width: 768px)  { .sh-svc-name { font-size: 17px; } }
        @media (min-width: 1024px) { .sh-svc-name { font-size: 25px; } }
        .sh-svc-item:hover .sh-svc-name { color: var(--orange-light); }

        .sh-svc-arrow { margin-left: auto; font-size: 14px; color: var(--ivory-dim); transition: color 0.3s, transform 0.3s; }
        .sh-svc-item:hover .sh-svc-arrow { color: var(--orange); transform: translateX(4px); }

        .sh-scroll { display: none; }
        @media (min-width: 1024px) {
          .sh-scroll {
            display: flex; position: absolute; bottom: 44px; left: 72px;
            align-items: center; gap: 14px; font-size: 9px;
            letter-spacing: 0.24em; text-transform: uppercase;
            color: var(--ivory-dim); font-weight: 400;
            opacity: 0; animation: fadeUp 0.6s 2.4s forwards;
          }
        }
        .sh-scroll-bar { width: 48px; height: 1px; background: rgba(212,83,10,0.25); position: relative; overflow: hidden; }
        .sh-scroll-fill { position: absolute; top: 0; left: 0; height: 100%; background: var(--orange); animation: scrollPulse 2s ease-in-out infinite; }
        @keyframes scrollPulse {
          0%   { left: -30%; width: 30%; }
          50%  { width: 60%; }
          100% { left: 100%; width: 30%; }
        }

        /* ── BELIEF STRIP ── */
        .belief-strip {
          background: var(--bg3); border-top: 1px solid var(--divider-o);
          border-bottom: 1px solid var(--divider-o); padding: 14px 0;
          overflow: hidden; white-space: nowrap; position: relative;
        }
        @media (min-width: 1024px) { .belief-strip { padding: 20px 0; } }
        .belief-strip::before, .belief-strip::after {
          content: ''; position: absolute; top: 0; bottom: 0; width: 60px; z-index: 2;
        }
        @media (min-width: 1024px) { .belief-strip::before, .belief-strip::after { width: 120px; } }
        .belief-strip::before { left: 0;  background: linear-gradient(to right, var(--bg3), transparent); }
        .belief-strip::after  { right: 0; background: linear-gradient(to left,  var(--bg3), transparent); }
        .belief-inner { display: inline-flex; animation: marquee 36s linear infinite; }
        .belief-inner:hover { animation-play-state: paused; }
        .belief-item {
          font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase;
          color: rgba(28,26,20,0.25); font-weight: 500;
          display: inline-flex; align-items: center; gap: 20px;
          flex-shrink: 0; transition: color 0.3s; padding: 0 18px;
        }
        @media (min-width: 768px) { .belief-item { font-size: 11px; gap: 28px; padding: 0 28px; } }
        .belief-item:hover { color: var(--orange); }
        .belief-sep { width: 5px; height: 5px; border-radius: 50%; background: var(--orange); opacity: 0.35; flex-shrink: 0; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        /* ── INTRO BLOCK ── */
        .intro-block {
          background: var(--bg); display: flex; flex-direction: column;
          border-bottom: 1px solid var(--divider);
        }
        @media (min-width: 1024px) { .intro-block { display: grid; grid-template-columns: 1fr 1fr; } }

        .ib-left {
          padding: 56px 20px; border-bottom: 1px solid var(--divider); position: relative; overflow: hidden;
        }
        @media (min-width: 768px)  { .ib-left { padding: 80px 40px; } }
        @media (min-width: 1024px) {
          .ib-left { padding: 120px 80px 120px 72px; border-right: 1px solid var(--divider); border-bottom: none; }
          .ib-left::before {
            content: '"'; font-family: 'Cormorant', serif; font-size: 500px; font-weight: 300;
            color: rgba(212,83,10,0.025); position: absolute; top: -120px; right: -60px; line-height: 1; pointer-events: none;
          }
        }

        .ib-right {
          padding: 56px 20px; background: var(--bg2);
          display: flex; flex-direction: column; justify-content: center;
        }
        @media (min-width: 768px)  { .ib-right { padding: 80px 40px; } }
        @media (min-width: 1024px) { .ib-right { padding: 120px 72px 120px 80px; } }

        .ib-statement {
          font-family: 'Cormorant', serif; font-size: clamp(20px, 2.6vw, 42px);
          font-style: italic; font-weight: 400; line-height: 1.45; color: var(--ivory);
          border-left: 2px solid var(--orange); padding-left: 20px; margin: 24px 0 28px;
        }
        @media (min-width: 1024px) { .ib-statement { padding-left: 36px; margin: 32px 0 36px; } }
        .ib-statement strong { font-style: normal; color: var(--orange); font-weight: 600; }

        .ib-body { font-size: clamp(13px, 1.6vw, 15px); color: var(--ivory-mid); line-height: 1.9; font-weight: 300; margin-bottom: 20px; }

        .ib-pillars {
          display: flex; gap: 1px; background: var(--divider); margin-top: 32px;
          flex-direction: column;
        }
        @media (min-width: 540px) { .ib-pillars { flex-direction: row; } }
        @media (min-width: 1024px) { .ib-pillars { margin-top: 40px; } }

        .ib-pillar {
          background: var(--bg3); flex: 1; padding: 20px 16px;
          border-top: 2px solid transparent; transition: border-color 0.35s, background 0.35s; cursor: pointer;
        }
        @media (min-width: 1024px) { .ib-pillar { padding: 28px 24px; } }
        .ib-pillar:hover { background: var(--bg4); border-top-color: var(--orange); }
        .ib-p-num { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(212,83,10,0.4); font-weight: 500; margin-bottom: 6px; transition: color 0.3s; }
        @media (min-width: 1024px) { .ib-p-num { font-size: 20px; } }
        .ib-pillar:hover .ib-p-num { color: var(--orange); }
        .ib-p-title { font-family: 'Cormorant', serif; font-size: clamp(18px, 2.2vw, 30px); font-weight: 600; color: var(--ivory); margin-bottom: 6px; transition: color 0.3s; }
        .ib-pillar:hover .ib-p-title { color: var(--orange-light); }
        .ib-p-desc { font-size: clamp(12px, 1.4vw, 15px); color: var(--ivory-dim); line-height: 1.7; font-weight: 300; }

        /* ── SERVICES ACCORDION ── */
        .services-section {
          background: var(--bg); position: relative; overflow: hidden;
          padding: 80px 20px;
        }
        @media (min-width: 768px)  { .services-section { padding: 100px 40px; } }
        @media (min-width: 1024px) { .services-section { padding: 160px 72px; } }
        .services-section::before {
          content: ''; position: absolute; top: -80px; right: -80px; width: 700px; height: 700px;
          border-radius: 50%; background: radial-gradient(circle, rgba(212,83,10,0.04) 0%, transparent 70%); pointer-events: none;
        }

        .svcs-header {
          display: flex; flex-direction: column; gap: 24px; margin-bottom: 56px;
        }
        @media (min-width: 1024px) {
          .svcs-header { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: end; margin-bottom: 100px; }
        }

        .svcs-intro { font-size: clamp(14px, 1.8vw, 20px); color: var(--ivory-mid); line-height: 1.9; font-weight: 300; }

        .svc-cards { display: flex; flex-direction: column; gap: 1px; background: var(--divider); }

        .svc-card {
          background: var(--bg2); position: relative; overflow: hidden;
          cursor: pointer; transition: background 0.5s;
        }
        .svc-card:hover, .svc-card.open { background: var(--bg3); }
        .svc-card::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: linear-gradient(to bottom, var(--orange-dark), var(--orange));
          transform: scaleY(0); transform-origin: top; transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .svc-card.gold-card::before { background: linear-gradient(to bottom, var(--gold-dark), var(--gold)); }
        .svc-card:hover::before, .svc-card.open::before { transform: scaleY(1); }
        .svc-card::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(to right, transparent, var(--orange), transparent);
          opacity: 0; transition: opacity 0.4s;
        }
        .svc-card.gold-card::after { background: linear-gradient(to right, transparent, var(--gold), transparent); }
        .svc-card:hover::after, .svc-card.open::after { opacity: 1; }

        .svc-header-row {
          display: grid; align-items: center; gap: 16px; position: relative; z-index: 1;
          /* Mobile: number hidden, 1 col + toggle */
          grid-template-columns: 1fr auto;
          padding: 24px 20px;
        }
        @media (min-width: 640px) {
          .svc-header-row { grid-template-columns: 64px 1fr auto; gap: 24px; padding: 32px 40px; }
        }
        @media (min-width: 1024px) {
          .svc-header-row { grid-template-columns: 100px 1fr auto; gap: 36px; padding: 40px 60px; }
        }

        .svc-big-num {
          font-family: 'Cormorant', serif; font-size: clamp(36px, 4vw, 56px);
          font-weight: 700; color: rgba(28,26,20,0.3); line-height: 1; transition: color 0.4s;
          display: none;
        }
        @media (min-width: 640px) { .svc-big-num { display: block; } }
        .svc-card:hover .svc-big-num,      .svc-card.open .svc-big-num      { color: rgba(212,83,10,0.5); }
        .svc-card.gold-card:hover .svc-big-num, .svc-card.gold-card.open .svc-big-num { color: rgba(160,120,48,0.5); }

        .svc-label {
          font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(212,83,10,0.7); font-weight: 500; margin-bottom: 6px;
          transition: color 0.3s; display: block;
        }
        @media (min-width: 1024px) { .svc-label { font-size: 15px; margin-bottom: 8px; } }
        .svc-card.gold-card .svc-label { color: rgba(160,120,48,0.7); }
        .svc-card:hover .svc-label, .svc-card.open .svc-label { color: var(--orange); }
        .svc-card.gold-card:hover .svc-label, .svc-card.gold-card.open .svc-label { color: var(--gold); }

        .svc-name {
          font-family: 'Cormorant', serif; font-size: clamp(18px, 2.5vw, 28px);
          font-weight: 600; color: var(--ivory); letter-spacing: -0.01em; transition: color 0.3s;
        }
        .svc-card:hover .svc-name, .svc-card.open .svc-name { color: var(--orange-light); }
        .svc-card.gold-card:hover .svc-name, .svc-card.gold-card.open .svc-name { color: var(--gold-light); }

        .svc-toggle {
          width: 40px; height: 40px; border-radius: 50%; border: 1px solid var(--divider-bright);
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.35s, background 0.35s, transform 0.4s; flex-shrink: 0;
        }
        @media (min-width: 1024px) { .svc-toggle { width: 44px; height: 44px; } }
        .svc-card:hover .svc-toggle { border-color: var(--orange); background: var(--orange-dim); }
        .svc-card.gold-card:hover .svc-toggle { border-color: var(--gold); background: var(--gold-dim); }
        .svc-card.open .svc-toggle { transform: rotate(45deg); }
        .svc-toggle-icon { width: 16px; height: 16px; position: relative; }
        .svc-toggle-icon::before, .svc-toggle-icon::after {
          content: ''; position: absolute; background: var(--ivory-mid); border-radius: 1px; transition: background 0.3s;
        }
        .svc-toggle-icon::before { width: 14px; height: 1px; top: 50%; left: 50%; transform: translate(-50%,-50%); }
        .svc-toggle-icon::after  { width: 1px; height: 14px; top: 50%; left: 50%; transform: translate(-50%,-50%); transition: opacity 0.3s; }
        .svc-card.open .svc-toggle-icon::after { opacity: 0; }
        .svc-card:hover .svc-toggle-icon::before, .svc-card:hover .svc-toggle-icon::after { background: var(--orange); }
        .svc-card.gold-card:hover .svc-toggle-icon::before, .svc-card.gold-card:hover .svc-toggle-icon::after { background: var(--gold); }

        .svc-body { max-height: 0; overflow: hidden; transition: max-height 0.7s cubic-bezier(0.22,1,0.36,1); }
        .svc-card.open .svc-body { max-height: 800px; }

        .svc-body-inner {
          padding: 28px 20px 40px; display: flex; flex-direction: column; gap: 28px;
          position: relative; z-index: 1; border-top: 1px solid var(--divider);
        }
        @media (min-width: 768px)  { .svc-body-inner { padding: 36px 40px 48px; } }
        @media (min-width: 1024px) {
          .svc-body-inner { padding: 40px 60px 56px; display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
        }

        .svc-desc-text { font-size: clamp(14px, 1.8vw, 20px); color: var(--ivory-mid); line-height: 1.9; font-weight: 300; margin-bottom: 20px; }
        .svc-closing {
          font-family: 'Cormorant', serif; font-size: clamp(16px, 1.6vw, 20px);
          font-style: italic; color: var(--ivory-dim); line-height: 1.55;
          border-left: 2px solid rgba(212,83,10,0.3); padding-left: 14px;
        }
        .svc-card.gold-card .svc-closing { border-left-color: rgba(160,120,48,0.3); }

        .svc-features { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .svc-feature {
          display: flex; align-items: flex-start; gap: 12px;
          font-size: clamp(13px, 1.6vw, 20px); color: var(--ivory-dim); line-height: 1.65; font-weight: 300;
        }
        .svc-feature-dot {
          width: 18px; height: 18px; border-radius: 50%;
          background: var(--orange-dim); border: 1px solid rgba(212,83,10,0.25);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;
        }
        .svc-card.gold-card .svc-feature-dot { background: var(--gold-dim); border-color: rgba(160,120,48,0.25); }
        .svc-feature-dot::after { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--orange); }
        .svc-card.gold-card .svc-feature-dot::after { background: var(--gold); }

        /* ── DIFF SECTION ── */
        .diff-section { background: var(--bg2); position: relative; overflow: hidden; }
        .diff-section::before {
          content: ''; position: absolute; inset: 0;
          background: radial-gradient(ellipse at 20% 50%, rgba(212,83,10,0.05) 0%, transparent 55%),
                      radial-gradient(ellipse at 80% 50%, rgba(160,120,48,0.04) 0%, transparent 55%);
          pointer-events: none;
        }
        .diff-grid { display: flex; flex-direction: column; }
        @media (min-width: 1024px) { .diff-grid { display: grid; grid-template-columns: 1fr 1fr; min-height: 420px; } }

        .diff-left {
          padding: 60px 20px; display: flex; flex-direction: column; justify-content: center; position: relative; z-index: 2;
          border-bottom: 1px solid var(--divider);
        }
        @media (min-width: 768px)  { .diff-left { padding: 80px 40px; } }
        @media (min-width: 1024px) { .diff-left { padding: 100px 80px; border-right: 1px solid var(--divider); border-bottom: none; } }

        .diff-right {
          padding: 60px 20px; display: flex; flex-direction: column; justify-content: center; position: relative; z-index: 2;
        }
        @media (min-width: 768px)  { .diff-right { padding: 80px 40px; } }
        @media (min-width: 1024px) { .diff-right { padding: 100px 80px; } }

        .diff-statement {
          font-family: 'Cormorant', serif; font-size: clamp(32px, 4vw, 58px);
          font-weight: 600; line-height: 1.1; letter-spacing: -0.02em; color: var(--ivory);
        }
        .diff-statement em { font-style: italic; color: var(--orange); font-weight: 300; }
        .diff-sub { font-size: clamp(14px, 1.8vw, 20px); color: var(--ivory-mid); line-height: 1.9; font-weight: 300; margin-top: 28px; }

        .diff-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        @media (min-width: 1024px) { .diff-stats { gap: 40px; } }
        .diff-stat { padding: 28px 0; border-bottom: 1px solid var(--divider); }
        .diff-stat:last-child { border-bottom: none; }
        .diff-stat-num {
          font-family: 'Cormorant', serif; font-size: clamp(40px, 4.5vw, 56px);
          font-weight: 700; color: var(--ivory); line-height: 1;
          display: block; margin-bottom: 8px; transition: color 0.3s;
        }
        .diff-stat:hover .diff-stat-num { color: var(--orange); }
        .diff-stat-label { font-size: clamp(10px, 1.2vw, 11px); letter-spacing: 0.14em; text-transform: uppercase; color: var(--ivory-mid); font-weight: 500; line-height: 1.55; }

        /* ── PROCESS ── */
        .process-section {
          background: var(--bg); position: relative; overflow: hidden;
          padding: 80px 20px;
        }
        @media (min-width: 768px)  { .process-section { padding: 100px 40px; } }
        @media (min-width: 1024px) { .process-section { padding: 160px 72px; } }
        .process-section::before {
          content: 'PROCESS'; font-family: 'Cormorant', serif;
          font-size: clamp(80px, 18vw, 220px); font-weight: 700;
          color: rgba(212,83,10,0.025); position: absolute; top: 60px; right: -20px;
          letter-spacing: -0.05em; line-height: 1; pointer-events: none;
          display: none;
        }
        @media (min-width: 768px) { .process-section::before { display: block; } }

        .process-header { display: flex; flex-direction: column; gap: 24px; margin-bottom: 60px; }
        @media (min-width: 1024px) { .process-header { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: end; margin-bottom: 100px; } }
        .process-intro { font-size: clamp(14px, 1.8vw, 20px); color: var(--ivory-mid); line-height: 1.9; font-weight: 300; }

        /* Process steps: vertical on mobile, horizontal on desktop */
        .process-line {
          position: relative; margin-bottom: 56px;
          display: flex; flex-direction: column; gap: 32px;
        }
        @media (min-width: 1024px) {
          .process-line { display: grid; grid-template-columns: repeat(4,1fr); gap: 0; margin-bottom: 80px; }
        }

        .process-track { display: none; }
        .process-fill  { display: none; }
        @media (min-width: 1024px) {
          .process-track {
            display: block; position: absolute; top: 22px;
            left: calc(12.5%); right: calc(12.5%); height: 1px; background: var(--divider); z-index: 0;
          }
          .process-fill {
            display: block; position: absolute; top: 22px; left: calc(12.5%);
            width: 0; height: 1px; z-index: 1;
            background: linear-gradient(to right, var(--orange-dark), var(--orange), var(--gold));
            box-shadow: 0 0 16px rgba(212,83,10,0.5);
            transition: width 2.4s cubic-bezier(0.22,1,0.36,1);
          }
          .process-fill.active { width: calc(75%); }
        }

        .p-step {
          padding: 0 16px; text-align: left; position: relative; z-index: 2; cursor: pointer;
          display: flex; gap: 20px; align-items: flex-start;
        }
        @media (min-width: 1024px) { .p-step { padding: 0 28px; text-align: center; flex-direction: column; align-items: center; gap: 0; } }

        .p-dot-wrap {
          width: 44px; height: 44px; flex-shrink: 0; border-radius: 50%; border: 1px solid var(--divider);
          display: flex; align-items: center; justify-content: center;
          background: var(--bg); transition: border-color 0.4s, background 0.4s, box-shadow 0.4s; position: relative;
          margin-bottom: 0;
        }
        @media (min-width: 1024px) { .p-dot-wrap { margin-bottom: 36px; } }
        .p-dot-wrap::before {
          content: ''; position: absolute; inset: -8px; border-radius: 50%;
          border: 1px solid rgba(212,83,10,0); transition: border-color 0.4s;
        }
        .p-step:hover .p-dot-wrap { border-color: var(--orange); background: var(--orange-dim); box-shadow: 0 0 30px rgba(212,83,10,0.25); }
        .p-step:hover .p-dot-wrap::before { border-color: rgba(212,83,10,0.25); }
        .p-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--orange); box-shadow: 0 0 10px var(--orange); }

        .p-ghost-num {
          font-family: 'Cormorant', serif; font-size: clamp(36px, 4vw, 64px);
          font-weight: 700; color: rgba(28,26,20,0.04); line-height: 1; margin-bottom: 8px;
        }
        @media (max-width: 1023px) { .p-ghost-num { display: none; } }

        .p-title {
          font-family: 'Cormorant', serif; font-size: clamp(22px, 2.5vw, 35px);
          font-weight: 600; color: var(--ivory); margin-bottom: 8px;
          letter-spacing: 0.01em; transition: color 0.3s;
        }
        .p-step:hover .p-title { color: var(--orange); }
        .p-desc { font-size: clamp(13px, 1.6vw, 21px); color: var(--ivory-dim); line-height: 1.75; font-weight: 300; }

        .commitment {
          background: var(--bg3); border: 1px solid var(--divider-o);
          padding: 36px 24px; display: flex; flex-direction: column; gap: 20px;
          position: relative; overflow: hidden;
        }
        @media (min-width: 768px)  { .commitment { padding: 48px 40px; } }
        @media (min-width: 1024px) { .commitment { padding: 56px 60px; flex-direction: row; align-items: center; gap: 60px; } }
        .commitment::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px;
          background: linear-gradient(to bottom, var(--orange-dark), var(--orange), var(--gold));
        }
        .commitment-label {
          font-size: clamp(12px, 1.5vw, 25px); letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--orange); font-weight: 600; white-space: nowrap;
        }
        .commitment-text {
          font-family: 'Cormorant', serif; font-size: clamp(16px, 1.8vw, 29px);
          font-style: italic; color: var(--ivory); font-weight: 400; line-height: 1.4;
        }
        .commitment-text strong { font-style: normal; color: var(--orange); font-weight: 600; }

        /* ── WHY SECTION ── */
        .why-section {
          background: var(--bg2); position: relative; overflow: hidden;
          padding: 80px 20px;
        }
        @media (min-width: 768px)  { .why-section { padding: 100px 40px; } }
        @media (min-width: 1024px) { .why-section { padding: 160px 72px; } }
        .why-section::before {
          content: ''; position: absolute; bottom: -100px; left: -100px; width: 600px; height: 600px;
          border-radius: 50%; background: radial-gradient(circle, rgba(160,120,48,0.05) 0%, transparent 70%); pointer-events: none;
        }
        .why-header { max-width: 580px; margin-bottom: 56px; }
        @media (min-width: 1024px) { .why-header { margin-bottom: 80px; } }

        .why-grid {
          display: grid; gap: 1px; background: var(--divider); margin-bottom: 1px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) { .why-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1024px) { .why-grid { grid-template-columns: 1fr 1fr 1fr; } }

        .why-card {
          background: var(--bg); padding: 40px 28px; position: relative; overflow: hidden;
          cursor: pointer; transition: background 0.4s, transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        @media (min-width: 1024px) { .why-card { padding: 56px 44px; } }
        .why-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(to right, var(--orange), var(--gold));
          transform: scaleX(0); transform-origin: left; transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .why-card:hover::before { transform: scaleX(1); }
        .why-card:hover { background: var(--bg3); transform: translateY(-5px); }

        .why-icon {
          width: 48px; height: 48px; border: 1px solid var(--divider); border-radius: 2px;
          display: flex; align-items: center; justify-content: center; margin-bottom: 24px;
          transition: border-color 0.3s, background 0.3s, transform 0.4s;
        }
        @media (min-width: 1024px) { .why-icon { width: 52px; height: 52px; margin-bottom: 28px; } }
        .why-card:hover .why-icon { border-color: var(--orange); background: var(--orange-dim); transform: rotate(8deg); }

        .why-ghost {
          font-family: 'Cormorant', serif; font-size: clamp(48px, 6vw, 72px); font-weight: 700;
          color: rgba(212,83,10,0.05); position: absolute; top: 16px; right: 20px;
          line-height: 1; pointer-events: none; transition: color 0.4s;
        }
        .why-card:hover .why-ghost { color: rgba(212,83,10,0.1); }

        .why-title {
          font-family: 'Cormorant', serif; font-size: clamp(22px, 2.5vw, 35px);
          font-weight: 600; color: var(--ivory); margin-bottom: 10px;
          letter-spacing: -0.01em; transition: color 0.3s;
        }
        .why-card:hover .why-title { color: var(--orange-light); }
        .why-body { font-size: clamp(13px, 1.6vw, 20px); color: var(--ivory-dim); line-height: 1.85; font-weight: 300; }

        .why-wide {
          background: var(--bg3); border: 1px solid var(--divider);
          padding: 40px 24px; display: flex; flex-direction: column; gap: 28px;
          position: relative; overflow: hidden;
        }
        @media (min-width: 768px)  { .why-wide { padding: 48px 40px; } }
        @media (min-width: 1024px) { .why-wide { padding: 60px 72px; flex-direction: row; align-items: center; justify-content: space-between; gap: 60px; } }
        .why-wide::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to right, rgba(212,83,10,0.04), transparent 50%); pointer-events: none;
        }
        .why-wide-text {
          font-family: 'Cormorant', serif; font-size: clamp(18px, 2.2vw, 34px);
          font-style: italic; color: var(--ivory); font-weight: 400; line-height: 1.45;
          max-width: 640px; position: relative; z-index: 1;
        }
        .why-wide-text strong { font-style: normal; color: var(--orange); font-weight: 600; }

        /* ── FINAL CTA ── */
        .final-cta {
          background: var(--bg); text-align: center; position: relative; overflow: hidden;
          padding: 80px 20px;
        }
        @media (min-width: 768px)  { .final-cta { padding: 120px 40px; } }
        @media (min-width: 1024px) { .final-cta { padding: 160px 72px; } }

        .cta-rings-wrap {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%,-50%); pointer-events: none; z-index: 0;
        }
        .cta-r {
          position: absolute; border-radius: 50%; top: 50%; left: 50%;
          transform: translate(-50%,-50%);
        }
        .cta-r:nth-child(1) { width: 260px;  height: 260px;  border: 1px solid rgba(212,83,10,0.1); animation: spinR 45s  linear infinite; }
        .cta-r:nth-child(2) { width: 460px;  height: 460px;  border: 1px solid rgba(212,83,10,0.07); animation: spinR 70s  linear infinite reverse; }
        .cta-r:nth-child(3) { width: 660px;  height: 660px;  border: 1px solid rgba(160,120,48,0.05); animation: spinR 95s  linear infinite; }
        .cta-r:nth-child(4) { width: 860px;  height: 860px;  border: 1px solid rgba(160,120,48,0.025); animation: spinR 130s linear infinite reverse; }

        .cta-eyebrow {
          font-size: 10px; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--orange); font-weight: 500; margin-bottom: 24px;
          position: relative; z-index: 2; display: block;
        }
        @media (min-width: 768px) { .cta-eyebrow { font-size: 11px; margin-bottom: 28px; } }
        .cta-h2 {
          font-family: 'Cormorant', serif; font-size: clamp(36px, 5vw, 76px);
          font-weight: 600; line-height: 1.04; letter-spacing: -0.025em;
          color: var(--ivory); margin-bottom: 24px; position: relative; z-index: 2;
        }
        .cta-h2 em { font-style: italic; color: var(--orange); font-weight: 300; }
        .cta-sub {
          font-size: clamp(14px, 1.8vw, 20px); color: var(--ivory-mid); line-height: 1.9;
          font-weight: 300; max-width: 520px; margin: 0 auto 48px; position: relative; z-index: 2;
        }
        @media (min-width: 1024px) { .cta-sub { margin-bottom: 60px; } }
        .cta-btns {
          display: flex; gap: 12px; justify-content: center; flex-direction: column;
          align-items: center; position: relative; z-index: 2; margin-bottom: 32px;
        }
        @media (min-width: 480px) { .cta-btns { flex-direction: row; } }
        @media (min-width: 1024px) { .cta-btns { gap: 14px; margin-bottom: 40px; } }
        .cta-note {
          font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
          color: var(--ivory-dim); font-weight: 400; position: relative; z-index: 2; display: block;
        }
      `}</style>

      {/* Page Loader */}
      <div className={`page-loader ${loaderVisible ? '' : 'hidden'}`}>
        <div className="loader-logo">Nivedshri <span>Wealth</span></div>
        <div className="loader-bar-wrap"><div className="loader-bar" /></div>
      </div>

      <Layout
        loaderTitle="Services"
        loaderSubtitle="Expert Financial Solutions Tailored for You"
        loaderDuration={1500}
      >

        {/* ── HERO ── */}
        <section className="svc-hero">
          <div className="sh-glow-a" />
          <div className="sh-glow-b" />
          <div className="sh-diagonal" />

          <div className="sh-left">
            <div className="sh-breadcrumb">
              <a href="/">Home</a><span className="sep">—</span><span className="cur">Services</span>
            </div>
            <div className="sh-tag"><span className="line" />Our Core Services</div>
            <h1 className="sh-h1">
              <span className="lw"><span className={`li ${!loaderVisible ? 'in' : ''}`}>Wealth Should Be</span></span>
              <span className="lw"><span className={`li ${!loaderVisible ? 'in' : ''}`} style={{ transitionDelay: '0.12s' }}><em>Intentional,</em></span></span>
              <span className="lw"><span className={`li ${!loaderVisible ? 'in' : ''}`} style={{ transitionDelay: '0.24s' }}>Not Accidental.</span></span>
            </h1>
            <p className="sh-sub-quote">We don't focus on selling products. We focus on helping you understand what to do with your money — and why.</p>
            <p className="sh-intro">Most people don't struggle because they don't earn enough. They struggle because their financial decisions are scattered. Our work is to bring structure, clarity, and direction to those decisions so wealth creation becomes a disciplined process rather than guesswork.</p>
            <div className="sh-btns">
              <Link href="/about"><button className="btn-orange"><span>Explore Services</span></button></Link>
              <Link href="/contact"><button className="btn-ghost">Book a Consultation</button></Link>
            </div>
          </div>

          <div className="sh-right">
            <div className="sh-ring-wrap">
              <div className="sh-ring">
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%) translateY(-50%)', width: '5px', height: '5px', borderRadius: '50%', background: 'var(--orange)', boxShadow: '0 0 12px var(--orange)' }} />
              </div>
              <div className="sh-ring" />
              <div className="sh-ring" />
            </div>
            <div className="sh-svc-list">
              {[
                { n: '01', label: 'Goal-Based Financial Planning' },
                { n: '02', label: 'Wealth Creation & Portfolio Structuring' },
                { n: '03', label: 'Retirement & Financial Independence' },
                { n: '04', label: "Children's Education & Legacy" },
                { n: '05', label: 'Insurance & Wealth Protection' },
                { n: '06', label: 'Tax-Efficient Wealth Structuring' },
              ].map((item, i) => (
                <div key={i} className={`sh-svc-item reveal d${i + 1}`}>
                  <span className="sh-svc-num">{item.n}</span>
                  <span className="sh-svc-name">{item.label}</span>
                  <span className="sh-svc-arrow">→</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sh-scroll">
            <div className="sh-scroll-bar"><div className="sh-scroll-fill" /></div>
            Scroll to explore
          </div>
        </section>

        {/* ── BELIEF STRIP ── */}
        <div className="belief-strip">
          <div className="belief-inner">
            {['Goal-Based Planning','Wealth Creation','Retirement Security','Education Planning','Wealth Protection','Tax Efficiency','Long-Term Discipline','Intentional Wealth',
              'Goal-Based Planning','Wealth Creation','Retirement Security','Education Planning','Wealth Protection','Tax Efficiency','Long-Term Discipline','Intentional Wealth'].map((item, i) => (
              <span key={i} className="belief-item">{item}<span className="belief-sep" /></span>
            ))}
          </div>
        </div>

        {/* ── INTRO PHILOSOPHY ── */}
        <div className="intro-block">
          <div className="ib-left reveal-left">
            <div className="eyebrow eyebrow-gold"><span className="line" />Our Philosophy</div>
            <h2 className="sec-h2" style={{ marginTop: '8px' }}>
              Wealth is Built<br /><em className="gold">by Direction,</em><br />Not by Chance.
            </h2>
            <div className="ib-pillars">
              {[
                { n: '01', t: 'Structure', d: 'Every rupee with a purpose and a place' },
                { n: '02', t: 'Clarity',   d: 'Decisions you understand, not just follow' },
                { n: '03', t: 'Direction', d: 'Goals as the compass, not markets' },
              ].map((p, i) => (
                <div key={i} className="ib-pillar">
                  <div className="ib-p-num">{p.n}</div>
                  <div className="ib-p-title">{p.t}</div>
                  <div className="ib-p-desc">{p.d}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="ib-right reveal-right">
            <div className="eyebrow"><span className="line" />The Core Belief</div>
            <div className="ib-statement">Wealth should be <strong>intentional,</strong> not accidental.</div>
            <p className="ib-body">At Nivedshri Wealth, everything we do is guided by one simple belief. Most people don't struggle because they don't earn enough. They struggle because their financial decisions are scattered.</p>
            <p className="ib-body">Our work is to bring structure, clarity, and direction to those decisions so wealth creation becomes a disciplined process — not guesswork. We don't focus on selling products. We focus on helping you understand what to do with your money, and why.</p>
            <Link href="/contact"><button className="btn-orange" style={{ marginTop: '36px' }}><span>Start Your Plan</span></button></Link>
          </div>
        </div>

        {/* ── SERVICES ACCORDION ── */}
        <section className="services-section">
          <div className="svcs-header">
            <div>
              <div className="eyebrow reveal"><span className="line" />Core Services</div>
              <h2 className="sec-h2 reveal d1">Six Ways We<br />Serve Your <em>Wealth Journey</em></h2>
            </div>
            <div className="reveal d2">
              <p className="svcs-intro">Every service we offer is designed around one outcome: long-term financial clarity. Click any service to explore how we approach it and what it delivers for you.</p>
            </div>
          </div>

          <div className="svc-cards">
            {/* 01 */}
            <div className="svc-card reveal" onClick={() => toggleCard(0)}>
              <div className="svc-header-row">
                <span className="svc-big-num">01</span>
                <div><span className="svc-label">Foundation Service</span><div className="svc-name">Goal-Based Financial Planning</div></div>
                <div className="svc-toggle"><div className="svc-toggle-icon" /></div>
              </div>
              <div className="svc-body"><div className="svc-body-inner">
                <div>
                  <p className="svc-desc-text">Every financial journey starts with life itself — your priorities, responsibilities, and future plans. We take your life goals and convert them into a practical, step-by-step financial plan that you can actually follow and track over time.</p>
                  <p className="svc-closing">Your money should follow your life, not the other way around.</p>
                </div>
                <ul className="svc-features">
                  {['A structured roadmap for all your financial goals','Clear prioritisation between short, mid, and long-term needs','Investment planning aligned with life milestones','Ongoing reviews and guidance as life evolves'].map((f,i) => (
                    <li key={i} className="svc-feature"><div className="svc-feature-dot" />{f}</li>
                  ))}
                </ul>
              </div></div>
            </div>

            {/* 02 gold */}
            <div className="svc-card gold-card reveal" onClick={() => toggleCard(1)}>
              <div className="svc-header-row">
                <span className="svc-big-num">02</span>
                <div><span className="svc-label">Growth Service</span><div className="svc-name">Wealth Creation & Portfolio Structuring</div></div>
                <div className="svc-toggle"><div className="svc-toggle-icon" /></div>
              </div>
              <div className="svc-body"><div className="svc-body-inner" style={{ borderTopColor: 'rgba(160,120,48,0.1)' }}>
                <div>
                  <p className="svc-desc-text">We build portfolios designed to stay steady across market cycles — not react emotionally to them. Instead of scattered investments, focus is on creating a well-balanced structure aligned with your goals and risk profile.</p>
                  <p className="svc-closing" style={{ borderLeftColor: 'rgba(160,120,48,0.3)' }}>The outcome is a portfolio that stays disciplined even when markets are not.</p>
                </div>
                <ul className="svc-features">
                  {['Personalised asset allocation strategy','Mutual fund portfolio construction','Risk profiling and optimisation','Long-term compounding-focused approach'].map((f,i) => (
                    <li key={i} className="svc-feature">
                      <div className="svc-feature-dot" style={{ background: 'var(--gold-dim)', borderColor: 'rgba(160,120,48,0.25)' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }} />
                      </div>{f}
                    </li>
                  ))}
                </ul>
              </div></div>
            </div>

            {/* 03 */}
            <div className="svc-card reveal" onClick={() => toggleCard(2)}>
              <div className="svc-header-row">
                <span className="svc-big-num">03</span>
                <div><span className="svc-label">Independence Service</span><div className="svc-name">Retirement & Financial Independence Planning</div></div>
                <div className="svc-toggle"><div className="svc-toggle-icon" /></div>
              </div>
              <div className="svc-body"><div className="svc-body-inner">
                <div>
                  <p className="svc-desc-text">Retirement is not just about saving a large amount. It is about making sure your income continues when your active earnings stop. We design plans that focus on stability and long-term financial independence.</p>
                  <p className="svc-closing">A future where your lifestyle is supported without financial uncertainty.</p>
                </div>
                <ul className="svc-features">
                  {['Retirement corpus planning and projection','Income replacement strategies post-retirement','Systematic withdrawal planning','Inflation-adjusted long-term projections'].map((f,i) => (
                    <li key={i} className="svc-feature"><div className="svc-feature-dot" />{f}</li>
                  ))}
                </ul>
              </div></div>
            </div>

            {/* 04 gold */}
            <div className="svc-card gold-card reveal" onClick={() => toggleCard(3)}>
              <div className="svc-header-row">
                <span className="svc-big-num">04</span>
                <div><span className="svc-label">Legacy Service</span><div className="svc-name">Children's Education & Legacy Planning</div></div>
                <div className="svc-toggle"><div className="svc-toggle-icon" /></div>
              </div>
              <div className="svc-body"><div className="svc-body-inner" style={{ borderTopColor: 'rgba(160,120,48,0.1)' }}>
                <div>
                  <p className="svc-desc-text">Planning for children is about more than education — it's about building long-term financial strength for the entire family. We help create structured investment plans that grow steadily over time.</p>
                  <p className="svc-closing" style={{ borderLeftColor: 'rgba(160,120,48,0.3)' }}>Your child's future supported by preparation, not pressure.</p>
                </div>
                <ul className="svc-features">
                  {['Education-focused financial planning','SIP-based disciplined long-term investing','Long-term wealth transfer planning','Family financial alignment strategies'].map((f,i) => (
                    <li key={i} className="svc-feature">
                      <div className="svc-feature-dot" style={{ background: 'var(--gold-dim)', borderColor: 'rgba(160,120,48,0.25)' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }} />
                      </div>{f}
                    </li>
                  ))}
                </ul>
              </div></div>
            </div>

            {/* 05 */}
            <div className="svc-card reveal" onClick={() => toggleCard(4)}>
              <div className="svc-header-row">
                <span className="svc-big-num">05</span>
                <div><span className="svc-label">Protection Service</span><div className="svc-name">Insurance & Wealth Protection Planning</div></div>
                <div className="svc-toggle"><div className="svc-toggle-icon" /></div>
              </div>
              <div className="svc-body"><div className="svc-body-inner">
                <div>
                  <p className="svc-desc-text">Building wealth matters, but protecting it matters just as much. We make sure your financial plan is not exposed to unnecessary risks. A comprehensive protection layer ensures that what you build is shielded against life's uncertainties.</p>
                  <p className="svc-closing">This creates a safety layer around your entire financial journey.</p>
                </div>
                <ul className="svc-features">
                  {['Life insurance planning and adequacy review','Health coverage evaluation and optimisation','Income protection planning','Identification and plugging of protection gaps'].map((f,i) => (
                    <li key={i} className="svc-feature"><div className="svc-feature-dot" />{f}</li>
                  ))}
                </ul>
              </div></div>
            </div>

            {/* 06 gold */}
            <div className="svc-card gold-card reveal" onClick={() => toggleCard(5)}>
              <div className="svc-header-row">
                <span className="svc-big-num">06</span>
                <div><span className="svc-label">Efficiency Service</span><div className="svc-name">Tax-Efficient Wealth Structuring</div></div>
                <div className="svc-toggle"><div className="svc-toggle-icon" /></div>
              </div>
              <div className="svc-body"><div className="svc-body-inner" style={{ borderTopColor: 'rgba(160,120,48,0.1)' }}>
                <div>
                  <p className="svc-desc-text">Tax efficiency is not an afterthought — it is part of the plan from the beginning. We structure investments in a way that improves efficiency while staying aligned with long-term goals.</p>
                  <p className="svc-closing" style={{ borderLeftColor: 'rgba(160,120,48,0.3)' }}>The focus is on keeping more of what you earn working for you.</p>
                </div>
                <ul className="svc-features">
                  {['Tax-efficient investment planning from day one','Capital gains management and timing','Long-term tax optimisation strategies','Smart product selection based on tax impact'].map((f,i) => (
                    <li key={i} className="svc-feature">
                      <div className="svc-feature-dot" style={{ background: 'var(--gold-dim)', borderColor: 'rgba(160,120,48,0.25)' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)' }} />
                      </div>{f}
                    </li>
                  ))}
                </ul>
              </div></div>
            </div>

            {/* 07 */}
            <div className="svc-card reveal" onClick={() => toggleCard(6)}>
              <div className="svc-header-row">
                <span className="svc-big-num">07</span>
                <div><span className="svc-label">Asset Service</span><div className="svc-name">Real Estate Advisory & Planning</div></div>
                <div className="svc-toggle"><div className="svc-toggle-icon" /></div>
              </div>
              <div className="svc-body"><div className="svc-body-inner">
                <div>
                  <p className="svc-desc-text">Real estate is often the largest single asset in a financial plan — yet it is rarely integrated into the broader wealth picture. We help you evaluate, plan, and optimise real estate decisions as a cohesive part of your financial strategy, not in isolation.</p>
                  <p className="svc-closing">Property should work alongside your portfolio, not outside it.</p>
                </div>
                <ul className="svc-features">
                  {['Buy vs rent analysis aligned with your financial goals','Loan structuring and EMI optimisation','Real estate as an asset class within your overall portfolio','Planning for rental income, appreciation, and exit timing'].map((f,i) => (
                    <li key={i} className="svc-feature"><div className="svc-feature-dot" />{f}</li>
                  ))}
                </ul>
              </div></div>
            </div>
          </div>
        </section>

        {/* ── DIFFERENTIATOR ── */}
        <section className="diff-section">
          <div className="diff-grid">
            <div className="diff-left reveal-left">
              <div className="eyebrow"><span className="line" />What Sets Us Apart</div>
              <div className="diff-statement">
                We don't promise<br /><em>quick results.</em><br />We build<br />lasting wealth.
              </div>
              <p className="diff-sub">Wealth is not built by constantly doing more. It is built by consistently doing the right things. Our role is to bring that discipline into your financial life.</p>
            </div>
            <div className="diff-right reveal-right">
              <div className="diff-stats">
                {[
                  { num: '18', sup: '+', supColor: 'var(--orange)', label: 'Years of Financial\nAdvisory Experience' },
                  { num: '500', sup: '+', supColor: 'var(--orange)', label: 'Families &\nIndividuals Guided' },
                  { num: '6', sup: '', supColor: '', label: 'Integrated Service\nDisciplines' },
                  { num: '100', sup: '%', supColor: 'var(--gold)', label: 'Goal-Based\nPlanning Focus' },
                ].map((s, i) => (
                  <div key={i} className="diff-stat">
                    <span className="diff-stat-num">
                      {s.num}{s.sup && <sup style={{ fontSize: '40%', color: s.supColor, verticalAlign: 'super' }}>{s.sup}</sup>}
                    </span>
                    <div className="diff-stat-label">{s.label.split('\n').map((l, j) => <span key={j}>{l}{j === 0 && <br />}</span>)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="process-section">
          <div className="process-header">
            <div>
              <div className="eyebrow eyebrow-gold reveal"><span className="line" />How We Work</div>
              <h2 className="sec-h2 reveal d1">A Simple Process.<br /><em className="gold">A Lasting Result.</em></h2>
            </div>
            <div className="reveal d2">
              <p className="process-intro">Every client relationship starts with understanding, not products. We take time to understand your goals, responsibilities, and future plans. Based on that, we design a financial structure that is practical, disciplined, and easy to follow.</p>
            </div>
          </div>

          <div className="process-line" id="processTimeline">
            <div className="process-track" />
            <div className={`process-fill ${processFillActive ? 'active' : ''}`} />

            {[
              { t: 'Discover', d: 'We listen first. Understanding your life goals, responsibilities, and financial picture before anything else.' },
              { t: 'Design',   d: 'We create a structured plan tailored to your goals — practical, clear, and actionable.' },
              { t: 'Execute',  d: 'We implement with discipline — right products, right timing, right allocation, always goal-aligned.' },
              { t: 'Monitor',  d: 'We stay with you — reviewing, adjusting, and guiding through every market cycle and life change.' },
            ].map((step, i) => (
              <div key={i} className={`p-step reveal d${i + 1}`}>
                <div className="p-dot-wrap"><div className="p-dot" /></div>
                <div>
                  <div className="p-ghost-num">0{i + 1}</div>
                  <div className="p-title">{step.t}</div>
                  <p className="p-desc">{step.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="commitment reveal">
            <span className="commitment-label">Our Promise</span>
            <p className="commitment-text">We help you stay consistent when markets change and emotions fluctuate — because <strong>consistency is where wealth is truly built.</strong></p>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="why-section">
          <div className="why-header">
            <div className="eyebrow reveal"><span className="line" />Why Clients Choose Us</div>
            <h2 className="sec-h2 reveal d1">Chosen for <em>Clarity.</em><br />Trusted for Consistency.</h2>
            <p className="reveal d2" style={{ fontSize: 'clamp(14px,1.8vw,21px)', color: 'var(--ivory-mid)', lineHeight: '1.9', fontWeight: '300', marginTop: '16px' }}>
              Clients don't come to us for products. They come for clarity. And they stay because of consistency.
            </p>
          </div>

          <div className="why-grid">
            {[
              { icon: <><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></>, t: 'Deep Experience', b: '18+ years navigating multiple market cycles — crashes, rallies, and everything between. That experience shapes every recommendation.' },
              { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, t: 'Honest Advisory', b: 'We say what needs to be said, not what sounds good. Transparent, unbiased guidance with your interests always first.' },
              { icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>, t: 'No Jargon, Ever', b: "Finance doesn't have to be complicated. We translate complexity into plain language so you always understand what's happening and why." },
              { icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>, t: 'Calm in Volatility', b: 'When markets move, emotions run high. We bring a structured, steady hand that keeps your plan on track through uncertainty.' },
              { icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>, t: 'Relationship, Not Transaction', b: 'We are long-term partners, not one-time advisors. Our relationship deepens as your wealth grows and your life evolves.' },
              { icon: <><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></>, t: 'Goal-Aligned Always', b: 'Every decision, every review, every recommendation — anchored to your goals, not market sentiment or product cycles.' },
            ].map((card, i) => (
              <div key={i} className={`why-card reveal d${(i % 3) + 1}`}>
                <span className="why-ghost">0{i + 1}</span>
                <div className="why-icon"><svg className="ico" viewBox="0 0 24 24">{card.icon}</svg></div>
                <div className="why-title">{card.t}</div>
                <p className="why-body">{card.b}</p>
              </div>
            ))}
          </div>

          <div className="why-wide reveal" style={{ marginTop: '1px' }}>
            <p className="why-wide-text">Wealth is not built by constantly doing more. It is built by <strong>consistently doing the right things.</strong> That is the discipline we bring to every client relationship.</p>
            <Link href="/contact"><button className="btn-orange"><span>Book a Consultation</span></button></Link>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="final-cta">
          <div className="cta-rings-wrap">
            <div className="cta-r" /><div className="cta-r" /><div className="cta-r" /><div className="cta-r" />
          </div>
          <span className="cta-eyebrow reveal">Let's Begin</span>
          <h2 className="cta-h2 reveal d1">Let's Bring Structure<br />to Your <em>Financial Future.</em></h2>
          <p className="cta-sub reveal d2">Start your wealth plan with a private, no-pressure consultation. We'll understand your goals and design a clear, disciplined path forward — together.</p>
          <div className="cta-btns reveal d3">
            <Link href="/contact"><button className="btn-orange"><span>Start Your Wealth Plan</span></button></Link>
            <Link href="/contact"><button className="btn-ghost">Book a Private Consultation</button></Link>
          </div>
          <span className="cta-note reveal d4">Pan India · Digital-First · Completely Confidential</span>
        </section>

      </Layout>
    </>
  )
}