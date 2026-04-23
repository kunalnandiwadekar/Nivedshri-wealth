'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'

export default function StoriesPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal')
      reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
        if (elementTop < window.innerHeight - elementVisible) {
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
          --gold: #A07830;
          --gold-light: #B8924A;
          --gold-bright: #C9A96E;
          --gold-dark: #7A5C20;
          --gold-dim: rgba(160,120,48,0.12);
          --gold-faint: rgba(160,120,48,0.06);
          --orange: #D4530A;
          --orange-light: #E8703A;
          --orange-dim: rgba(212,83,10,0.1);
          --bg: #FAFAF8;
          --bg2: #F4F2EE;
          --bg3: #EDE9E2;
          --bg4: #E4DFD6;
          --ivory: #1C1A14;
          --ivory-mid: #6B6050;
          --ivory-dim: rgba(28,26,20,0.5);
          --ivory-faint: rgba(28,26,20,0.08);
          --divider: rgba(160,120,48,0.15);
          --divider-bright: rgba(160,120,48,0.35);
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

        /* ── Page Loader ── */
        .page-loader {
          position: fixed;
          inset: 0;
          z-index: 99990;
          background: var(--bg);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 24px;
          transition: opacity 0.8s, visibility 0.8s;
        }

        .page-loader.hidden {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .loader-logo {
          font-family: 'Cormorant', serif;
          font-size: 36px;
          font-weight: 300;
          color: var(--ivory);
          letter-spacing: 0.12em;
          opacity: 0;
          animation: loaderFade 0.6s 0.3s forwards;
        }

        .loader-logo span { color: var(--gold); }

        .loader-bar-wrap {
          width: 160px;
          height: 1px;
          background: rgba(160,120,48,0.2);
          overflow: hidden;
          opacity: 0;
          animation: loaderFade 0.6s 0.5s forwards;
        }

        .loader-bar {
          height: 100%;
          width: 0;
          background: var(--gold);
          animation: loaderBar 1.4s 0.7s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        @keyframes loaderFade { to { opacity: 1; } }
        @keyframes loaderBar { to { width: 100%; } }

        /* ── Reveal System ── */
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal.visible { opacity: 1; transform: none; }

        .reveal-left {
          opacity: 0;
          transform: translateX(-32px);
          transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal-left.visible { opacity: 1; transform: none; }

        .reveal-right {
          opacity: 0;
          transform: translateX(32px);
          transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal-right.visible { opacity: 1; transform: none; }

        .d1 { transition-delay: 0.1s; }
        .d2 { transition-delay: 0.2s; }
        .d3 { transition-delay: 0.3s; }
        .d4 { transition-delay: 0.4s; }
        .d5 { transition-delay: 0.5s; }

        /* ══════════════════════════════════════════
           HERO SECTION
        ══════════════════════════════════════════ */
        .sh-hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 56px 120px;
          position: relative;
          overflow: hidden;
          background: var(--bg);
        }

        .sh-hero-bg {
          position: absolute;
          inset: 0;
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
          position: absolute;
          right: -20px;
          top: 50%;
          transform: translateY(-50%);
          font-family: 'Cormorant', serif;
          font-size: clamp(140px, 28vw, 380px);
          font-weight: 300;
          color: rgba(160,120,48,0.04);
          line-height: 1;
          letter-spacing: -0.04em;
          user-select: none;
          pointer-events: none;
          white-space: nowrap;
        }

        .sh-vert {
          position: absolute;
          right: 56px;
          top: 50%;
          transform: translateY(-50%) rotate(90deg);
          transform-origin: center center;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ivory-dim);
          font-weight: 300;
          white-space: nowrap;
        }

        .sh-eyebrow {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 400;
          margin-bottom: 32px;
        }

        .sh-eyebrow .line {
          width: 40px;
          height: 1px;
          background: var(--gold);
        }

        .sh-h1 {
          font-family: 'Cormorant', serif;
          font-size: clamp(60px, 10vw, 130px);
          font-weight: 300;
          line-height: 0.95;
          letter-spacing: -0.02em;
          max-width: 900px;
          overflow: hidden;
          color: #000000;
          padding-bottom: 10px;
        }

        .sh-h1 .li {
          display: block;
          transform: translateY(110%);
          opacity: 0;
          transition: transform 1s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease;
          position: relative;
          color: #000000;
        }

        .sh-h1 .li.visible { transform: translateY(0); opacity: 1; }

        .sh-h1 em {
          font-style: italic;
          color: var(--orange);
          background: linear-gradient(135deg, var(--orange), var(--orange-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .sh-sub {
          font-size: 20px;
          color: var(--ivory-mid);
          line-height: 1.85;
          max-width: 560px;
          font-weight: 300;
          margin-top: 36px;
          margin-bottom: 56px;
        }

        .sh-intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1px;
          background: var(--divider);
          border-top: 1px solid var(--divider);
        }

        .sh-intro-item {
          background: var(--bg);
          padding: 28px 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sh-intro-item:not(:first-child) { padding-left: 32px; }

        .sh-intro-num {
          font-family: 'Cormorant', serif;
          font-size: 36px;
          font-weight: 300;
          color: var(--gold);
        }

        .sh-intro-label {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ivory-dim);
          font-weight: 300;
        }

        .sh-scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          font-size: 10px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ivory-dim);
        }

        .sh-scroll-line {
          width: 1px;
          height: 48px;
          background: var(--divider);
          overflow: hidden;
          position: relative;
        }

        .sh-scroll-line::after {
          content: '';
          position: absolute;
          top: -100%; left: 0; right: 0;
          height: 100%;
          background: var(--gold);
          animation: scrollDrop 2s ease-in-out infinite;
        }

        @keyframes scrollDrop {
          0% { top: -100%; }
          50%, 100% { top: 100%; }
        }

        /* ══════════════════════════════════════════
           MARQUEE
        ══════════════════════════════════════════ */
        .quote-marquee {
          background: var(--bg2);
          padding: 28px 0;
          border-top: 1px solid var(--divider);
          border-bottom: 1px solid var(--divider);
          overflow: hidden;
          white-space: nowrap;
        }

        .quote-inner {
          display: inline-flex;
          gap: 0;
          animation: marquee 30s linear infinite;
        }

        .quote-item {
          font-family: 'Cormorant', serif;
          font-size: 24px;
          font-weight: 300;
          font-style: italic;
          color: var(--ivory-dim);
          padding: 0 48px;
          white-space: nowrap;
        }

        .quote-item .dot {
          color: var(--gold);
          font-style: normal;
          font-size: 10px;
          vertical-align: middle;
          margin: 0 8px;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* ══════════════════════════════════════════
           STORIES SECTION
        ══════════════════════════════════════════ */
        .stories-section { padding: 120px 56px 0; }

        .stories-head {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
          margin-bottom: 64px;
        }

        .section-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 400;
          margin-bottom: 24px;
        }

        .section-eyebrow .line { width: 28px; height: 1px; background: var(--gold); }

        .section-h2 {
          font-family: 'Cormorant', serif;
          font-size: clamp(48px, 7vw, 80px);
          font-weight: 300;
          line-height: 1.08;
          letter-spacing: -0.015em;
        }

        .section-h2 em { font-style: italic; color: var(--orange); }

        .stories-intro p {
          font-size: 20px;
          color: var(--ivory-mid);
          line-height: 1.9;
          font-weight: 300;
          max-width: 480px;
          margin-bottom: 20px;
        }

        /* ── Featured Story ── */
        .featured-story {
          margin-bottom: 2px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 580px;
          border: 1px solid var(--divider);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.22,1,0.36,1);
        }

        .featured-story::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(212,83,10,0.03) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.6s;
          z-index: 1;
        }

        .featured-story:hover::before { opacity: 1; }
        .featured-story:hover .fs-overlay { opacity: 1; }
        .featured-story:hover .fs-img-inner { transform: scale(1.06) rotate(1deg); }
        .featured-story:hover .fs-name { color: var(--orange); }

        .fs-img {
          background: var(--bg3);
          position: relative;
          overflow: hidden;
        }

        .fs-img-inner {
          width: 100%; height: 100%;
          background: linear-gradient(135deg, #EDE9E2 0%, #E4DFD6 60%, #D8D2C8 100%);
          transition: transform 1.2s cubic-bezier(0.22,1,0.36,1);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          min-height: 260px;
        }

        .fs-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(160,120,48,0.12) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.5s;
        }

        .fs-tag {
          position: absolute;
          top: 24px; left: 24px;
          background: var(--gold);
          color: var(--bg);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 600;
          padding: 6px 14px;
        }

        .fs-content {
          padding: 56px 56px 56px 64px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: var(--bg3);
        }

        .fs-profile {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 40px;
        }

        .fs-avatar {
          width: 56px; height: 56px;
          border-radius: 50%;
          border: 1px solid var(--gold-dim);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant', serif;
          font-size: 22px; font-weight: 500;
          color: var(--gold);
          background: var(--gold-faint);
          flex-shrink: 0;
          transition: all 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        .fs-name {
          font-size: 17px; font-weight: 500;
          color: var(--ivory);
          letter-spacing: 0.01em;
          transition: color 0.3s;
        }

        .fs-role {
          font-size: 15px;
          color: var(--ivory-dim);
          margin-top: 3px;
          font-weight: 300;
          line-height: 1.5;
        }

        .fs-city {
          font-size: 12px; color: var(--gold);
          margin-top: 2px; font-weight: 300;
          letter-spacing: 0.04em;
        }

        .fs-quote {
          font-family: 'Cormorant', serif;
          font-size: clamp(22px, 3.2vw, 36px);
          font-style: italic; font-weight: 300;
          line-height: 1.55;
          color: var(--ivory);
          flex: 1;
          margin-bottom: 32px;
          position: relative;
          padding-top: 16px;
        }

        .fs-quote::before {
          content: '\\201C';
          font-size: 80px;
          color: var(--gold);
          opacity: 0.2;
          position: absolute;
          top: -20px; left: -8px;
          line-height: 1;
          font-style: normal;
        }

        .fs-transformation {
          display: flex;
          align-items: stretch;
          gap: 0;
          background: var(--bg4);
          padding: 18px 20px;
          margin-bottom: 28px;
        }

        .fs-trans-from, .fs-trans-to {
          font-size: 16px; font-weight: 300;
          line-height: 1.5; flex: 1;
        }

        .fs-trans-from { color: var(--ivory-dim); }
        .fs-trans-to { color: var(--gold-light); text-align: right; }

        .fs-trans-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          opacity: 0.6;
          display: block;
          margin-bottom: 3px;
        }

        .fs-trans-arrow {
          width: 40px;
          text-align: center;
          flex-shrink: 0;
          color: var(--gold);
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .fs-metrics { display: flex; gap: 32px; flex-wrap: wrap; }

        .fs-metric-num {
          font-family: 'Cormorant', serif;
          font-size: 32px; font-weight: 300;
          color: var(--gold); line-height: 1;
        }

        .fs-metric-num sup { font-size: 16px; }

        .fs-metric-label {
          font-size: 12px;
          color: var(--ivory); margin-top: 4px;
          font-weight: 300; letter-spacing: 0.04em;
          line-height: 1.4;
        }

        /* ── Story Grid ── */
        .stories-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1px;
          background: var(--divider);
          margin-bottom: 2px;
        }

        .story-card {
          background: var(--bg2);
          padding: 40px 36px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.22,1,0.36,1);
          display: flex;
          flex-direction: column;
        }

        .story-card::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(212,83,10,0.02) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.5s;
          z-index: 0;
        }

        .story-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--orange), var(--orange-light), var(--gold));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }

        .story-card:hover { background: var(--bg3); transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
        .story-card:hover::before { opacity: 1; }
        .story-card:hover::after { transform: scaleX(1); }
        .story-card:hover .sc-name { color: var(--orange); }

        .sc-num {
          font-family: 'Cormorant', serif;
          font-size: 11px; color: var(--ivory-dim);
          letter-spacing: 0.1em; font-weight: 300;
          margin-bottom: 24px; display: block;
          position: relative; z-index: 1;
        }

        .sc-avatar {
          width: 72px; height: 72px;
          border-radius: 50%;
          border: 1px solid var(--divider-bright);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Cormorant', serif;
          font-size: 24px; font-weight: 400;
          color: var(--gold);
          background: var(--gold-faint);
          margin-bottom: 20px;
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
          position: relative; z-index: 1;
          flex-shrink: 0;
        }

        .sc-name {
          font-size: 16px; font-weight: 500;
          color: var(--ivory); margin-bottom: 4px;
          letter-spacing: 0.01em;
          position: relative; z-index: 1;
          transition: color 0.3s;
        }

        .sc-role {
          font-size: 12px; color: var(--ivory-dim);
          font-weight: 300; margin-bottom: 4px;
          position: relative; z-index: 1;
        }

        .sc-city {
          font-size: 11px; color: var(--gold);
          font-weight: 300; letter-spacing: 0.04em;
          margin-bottom: 24px;
          position: relative; z-index: 1;
        }

        .sc-quote {
          font-family: 'Cormorant', serif;
          font-size: 20px; font-style: italic;
          font-weight: 300; line-height: 1.6;
          color: var(--ivory-mid); margin-bottom: 28px;
          flex: 1;
          position: relative; z-index: 1;
        }

        .sc-divider {
          height: 1px; background: var(--divider);
          margin: 0 0 24px;
          position: relative; z-index: 1;
        }

        .sc-before-after {
          display: flex; flex-direction: column;
          gap: 8px; margin-bottom: 24px;
          position: relative; z-index: 1;
        }

        .sc-ba-item {
          display: flex; align-items: flex-start;
          gap: 10px; font-size: 13px;
          font-weight: 300; line-height: 1.5;
        }

        .sc-ba-icon {
          width: 6px; height: 6px;
          border-radius: 50%; flex-shrink: 0; margin-top: 6px;
        }

        .sc-ba-before .sc-ba-icon { background: rgba(28,26,20,0.2); }
        .sc-ba-before { color: var(--ivory-dim); }
        .sc-ba-after .sc-ba-icon { background: var(--gold); }
        .sc-ba-after { color: var(--ivory-mid); }

        .sc-metric {
          display: inline-flex; align-items: baseline;
          gap: 4px; background: var(--gold-faint);
          border: 1px solid var(--gold-dim);
          padding: 8px 14px; margin-top: 4px;
          position: relative; z-index: 1;
        }

        .sc-metric-num {
          font-family: 'Cormorant', serif;
          font-size: 30px; font-weight: 300;
          color: var(--gold); line-height: 1;
        }

        .sc-metric-label {
          font-size: 10px; color: var(--ivory-dim);
          letter-spacing: 0.08em; text-transform: uppercase;
          font-weight: 300;
        }

        .sc-stars {
          color: var(--gold); font-size: 12px;
          letter-spacing: 2px; margin-top: 16px;
          display: block; position: relative; z-index: 1;
        }

        /* ── Horizontal Story Bar ── */
        .hstory-bar {
          background: var(--bg2);
          border-top: 1px solid var(--divider);
          border-bottom: 1px solid var(--divider);
          padding: 56px;
          display: grid;
          grid-template-columns: 200px 1fr 240px;
          gap: 48px;
          align-items: center;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
          position: relative;
          overflow: hidden;
        }

        .hstory-bar::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 0;
          background: linear-gradient(to bottom, var(--orange), var(--orange-light));
          transition: width 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        .hstory-bar:hover { background: var(--bg3); transform: translateX(8px); }
        .hstory-bar:hover::before { width: 3px; }
        .hstory-bar:hover .hb-name { color: var(--orange); }
        .hstory-bar + .hstory-bar { border-top: none; }

        .hb-profile { display: flex; flex-direction: column; gap: 8px; }

        .hb-avatar {
          width: 80px; height: 80px;
          border-radius: 50%;
          border: 1px solid var(--divider-bright);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Cormorant', serif;
          font-size: 28px; font-weight: 400;
          color: var(--gold);
          background: var(--gold-faint);
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
          flex-shrink: 0;
        }

        .hstory-bar:hover .hb-avatar { transform: scale(1.1); border-color: var(--orange); box-shadow: 0 0 20px rgba(212,83,10,0.25); }

        .hb-name {
          font-size: 16px; font-weight: 500;
          color: var(--ivory); letter-spacing: 0.01em;
          transition: color 0.3s;
        }

        .hb-role { font-size: 12px; color: var(--ivory-dim); font-weight: 300; line-height: 1.4; }
        .hb-city { font-size: 11px; color: var(--gold); font-weight: 300; letter-spacing: 0.04em; }

        .hb-quote {
          font-family: 'Cormorant', serif;
          font-size: 20px; font-style: italic;
          font-weight: 300; line-height: 1.6;
          color: var(--ivory-mid);
        }

        .hb-metrics { display: flex; gap: 24px; justify-content: flex-end; }

        .hb-metric { text-align: right; }

        .hb-metric-num {
          font-family: 'Cormorant', serif;
          font-size: 28px; font-weight: 300;
          color: var(--gold); line-height: 1;
        }

        .hb-metric-label {
          font-size: 10px; color: var(--ivory-dim);
          letter-spacing: 0.08em; text-transform: uppercase;
          font-weight: 300;
        }

        /* ── Final CTA ── */
        .final-cta {
          padding: 120px 56px;
          text-align: center;
          position: relative;
          overflow: hidden;
          background: var(--bg);
        }

        .cta-rings {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .cta-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid var(--divider);
          transform: translate(-50%, -50%);
        }

        .cta-ring:nth-child(1) { width: 300px; height: 300px; }
        .cta-ring:nth-child(2) { width: 500px; height: 500px; border-color: rgba(160,120,48,0.07); }
        .cta-ring:nth-child(3) { width: 700px; height: 700px; border-color: rgba(160,120,48,0.04); }
        .cta-ring:nth-child(4) { width: 900px; height: 900px; border-color: rgba(160,120,48,0.02); }

        .cta-eyebrow {
          font-size: 11px; letter-spacing: 0.16em;
          text-transform: uppercase; color: var(--gold);
          margin-bottom: 20px; font-weight: 400;
          position: relative; z-index: 1;
        }

        .cta-h2 {
          font-family: 'Cormorant', serif;
          font-size: clamp(48px, 8vw, 92px);
          font-weight: 300; color: var(--ivory);
          line-height: 1.1; margin-bottom: 16px;
          letter-spacing: -0.02em;
          position: relative; z-index: 1;
        }

        .cta-h2 em { font-style: italic; color: var(--orange); }

        .cta-sub {
          font-size: 18px; color: var(--ivory-mid);
          margin-bottom: 48px; font-weight: 300;
          max-width: 460px;
          margin-left: auto; margin-right: auto;
          line-height: 1.8;
          position: relative; z-index: 1;
        }

        .cta-btns {
          display: flex; gap: 14px;
          justify-content: center;
          position: relative; z-index: 1;
          flex-wrap: wrap;
        }

        .btn-gold-lg {
          background: linear-gradient(135deg, var(--gold), var(--gold-bright));
          color: var(--bg);
          padding: 16px 36px; font-size: 13px;
          border: none; border-radius: 2px;
          cursor: pointer; letter-spacing: 0.08em;
          text-transform: uppercase; font-weight: 600;
          font-family: 'Outfit', sans-serif;
          position: relative; overflow: hidden;
          transition: all 0.4s cubic-bezier(0.22,1,0.36,1);
          box-shadow: 0 4px 15px rgba(160,120,48,0.2);
          text-decoration: none; display: inline-block;
        }

        .btn-gold-lg span { position: relative; z-index: 1; }

        .btn-gold-lg::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, var(--orange), var(--orange-light));
          transform: translateX(-101%);
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        .btn-gold-lg:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(160,120,48,0.3); }
        .btn-gold-lg:hover::before { transform: translateX(0); }

        .btn-outline-lg {
          background: transparent; color: var(--ivory);
          padding: 16px 36px; font-size: 13px;
          border: 1px solid rgba(28,26,20,0.2); border-radius: 2px;
          cursor: pointer; letter-spacing: 0.08em;
          text-transform: uppercase; font-weight: 400;
          font-family: 'Outfit', sans-serif;
          transition: border-color 0.3s, color 0.3s;
          text-decoration: none; display: inline-block;
        }

        .btn-outline-lg:hover { border-color: var(--gold); color: var(--gold); }

        .cta-note {
          font-size: 11px; color: rgba(28,26,20,0.2);
          margin-top: 28px; letter-spacing: 0.1em;
          text-transform: uppercase;
          position: relative; z-index: 1;
        }

        /* ══════════════════════════════════════════
           TABLET  (768px – 1023px)
        ══════════════════════════════════════════ */
        @media (max-width: 1023px) and (min-width: 768px) {

          /* Hero */
          .sh-hero { padding: 120px 40px 80px; }
          .sh-vert { display: none; }
          .sh-h1 { font-size: clamp(44px, 7vw, 80px); }
          .sh-sub { font-size: 18px; margin-top: 28px; margin-bottom: 44px; }
          .sh-intro-grid { grid-template-columns: 1fr 1fr 1fr; }
          .sh-scroll { display: none; }

          /* Stories section */
          .stories-section { padding: 80px 40px 0; }
          .stories-head { grid-template-columns: 1fr; gap: 40px; margin-bottom: 48px; }
          .stories-intro p { max-width: 100%; font-size: 17px; }

          /* Featured story */
          .featured-story {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .fs-img-inner { min-height: 300px; }
          .fs-content { padding: 40px; }
          .fs-quote { font-size: clamp(17px, 3vw, 22px); }
          .fs-transformation { flex-direction: column; gap: 16px; }
          .fs-trans-to { text-align: left; }
          .fs-trans-arrow { display: none; }

          /* Story grid */
          .stories-grid { grid-template-columns: 1fr 1fr; }

          /* Horizontal bars */
          .hstory-bar {
            grid-template-columns: 180px 1fr;
            gap: 32px;
            padding: 40px;
          }

          .hb-metrics { display: none; }

          /* CTA */
          .final-cta { padding: 96px 40px; }
        }

        /* ══════════════════════════════════════════
           MOBILE  (≤767px)
        ══════════════════════════════════════════ */
        @media (max-width: 767px) {

          /* Hero */
          .sh-hero {
            padding: 130px 24px 64px;
            min-height: auto;
            justify-content: flex-start;
          }

          .sh-hero-num { font-size: 80px; right: -10px; }
          .sh-vert { display: none; }

          .sh-eyebrow { font-size: 11px; margin-bottom: 20px; }

          .sh-h1 {
            font-size: clamp(40px, 11vw, 60px);
            line-height: 0.98;
          }

          .sh-sub {
            font-size: 16px;
            margin-top: 20px;
            margin-bottom: 36px;
            line-height: 1.7;
            max-width: 100%;
          }

          /* Stats — single column stacked */
          .sh-intro-grid {
            grid-template-columns: 1fr;
          }

          .sh-intro-item {
            padding: 20px 0 !important;
            border-bottom: 1px solid var(--divider);
          }

          .sh-intro-item:last-child { border-bottom: none; }

          .sh-intro-num { font-size: 28px; }
          .sh-scroll { display: none; }

          /* Marquee */
          .quote-item { font-size: 18px; padding: 0 32px; }

          /* Stories section */
          .stories-section { padding: 64px 24px 0; }

          .stories-head {
            grid-template-columns: 1fr;
            gap: 28px;
            margin-bottom: 40px;
          }

          .section-h2 { font-size: clamp(32px, 9vw, 48px); }
          .stories-intro p { font-size: 16px; max-width: 100%; margin-bottom: 12px; }

          /* Featured story — fully stacked */
          .featured-story {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .fs-img-inner { min-height: 220px; }
          .fs-tag { top: 16px; left: 16px; font-size: 9px; padding: 5px 10px; }

          .fs-content { padding: 28px 24px; }

          .fs-profile {
            flex-direction: row;
            align-items: flex-start;
            gap: 14px;
            margin-bottom: 24px;
          }

          .fs-avatar { width: 48px; height: 48px; font-size: 18px; flex-shrink: 0; }
          .fs-name { font-size: 15px; }
          .fs-role { font-size: 12px; }

          .fs-quote {
            font-size: clamp(16px, 4.5vw, 20px);
            margin-bottom: 24px;
          }

          .fs-quote::before { font-size: 56px; top: -14px; left: -4px; }

          /* Transformation block — stack vertically */
          .fs-transformation {
            flex-direction: column;
            gap: 14px;
            padding: 14px 16px;
            margin-bottom: 20px;
          }

          .fs-trans-to { text-align: left; }
          .fs-trans-arrow { display: none; }
          .fs-trans-from, .fs-trans-to { font-size: 13px; }

          .fs-metrics { gap: 20px; }
          .fs-metric-num { font-size: 24px; }
          .fs-metric-label { font-size: 11px; }

          /* Story grid — single column */
          .stories-grid { grid-template-columns: 1fr; }

          .story-card { padding: 28px 20px; }
          .sc-avatar { width: 56px; height: 56px; font-size: 20px; margin-bottom: 14px; }
          .sc-quote { font-size: 16px; margin-bottom: 20px; }
          .sc-metric-num { font-size: 22px; }

          /* Horizontal bars — fully stacked */
          .hstory-bar {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 28px 24px;
          }

          .hb-profile { flex-direction: row; align-items: center; gap: 14px; }
          .hb-avatar { width: 56px; height: 56px; font-size: 20px; flex-shrink: 0; }

          .hb-name { font-size: 15px; }
          .hb-role { font-size: 12px; }
          .hb-quote { font-size: 16px; line-height: 1.55; }

          /* Show metrics stacked on mobile */
          .hb-metrics {
            justify-content: flex-start;
            gap: 20px;
          }

          .hb-metric { text-align: left; }
          .hb-metric-num { font-size: 22px; }

          /* CTA */
          .final-cta { padding: 72px 24px; }

          .cta-ring:nth-child(3),
          .cta-ring:nth-child(4) { display: none; }

          .cta-ring:nth-child(1) { width: 180px; height: 180px; }
          .cta-ring:nth-child(2) { width: 320px; height: 320px; }

          .cta-h2 { font-size: clamp(32px, 9vw, 48px); }
          .cta-sub { font-size: 15px; max-width: 100%; margin-bottom: 36px; }

          .cta-btns {
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }

          .btn-gold-lg,
          .btn-outline-lg {
            width: 100%;
            max-width: 320px;
            text-align: center;
            padding: 14px 24px;
          }

          .cta-note { font-size: 10px; margin-top: 20px; letter-spacing: 0.08em; }
        }

        /* ══════════════════════════════════════════
           SMALL MOBILE  (≤400px)
        ══════════════════════════════════════════ */
        @media (max-width: 400px) {
          .sh-hero { padding: 120px 16px 56px; }
          .stories-section { padding: 56px 16px 0; }
          .fs-content { padding: 24px 16px; }
          .story-card { padding: 24px 16px; }
          .hstory-bar { padding: 24px 16px; }
          .final-cta { padding: 60px 16px; }
          .btn-gold-lg, .btn-outline-lg { max-width: 100%; }

          .sh-h1 { font-size: clamp(36px, 10vw, 52px); }
          .fs-transformation { padding: 12px 14px; }
        }
      `}</style>

      {/* Page Loader */}
      <div className={`page-loader ${isLoaded ? 'hidden' : ''}`}>
        <div className="loader-logo">Nivedshri <span>Wealth</span></div>
        <div className="loader-bar-wrap">
          <div className="loader-bar"></div>
        </div>
      </div>

      <Layout
        loaderTitle="Stories"
        loaderSubtitle="Real Journeys to Financial Freedom"
        loaderDuration={1400}
      >
        {/* ── Hero ── */}
        <section className="sh-hero">
          <div className="sh-hero-bg"></div>
          <div className="sh-hero-num">Stories</div>
          <div className="sh-vert">Real Journeys · Real Clarity · 2024</div>

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
            <span className="quote-item">These journeys are not about quick wins<span className="dot">·</span></span>
            <span className="quote-item">They're about building discipline, staying consistent<span className="dot">·</span></span>
            <span className="quote-item">Making better financial choices over long term<span className="dot">·</span></span>
            <span className="quote-item">When the right guidance meets patience and intent<span className="dot">·</span></span>
            <span className="quote-item">These journeys are not about quick wins<span className="dot">·</span></span>
            <span className="quote-item">They're about building discipline, staying consistent<span className="dot">·</span></span>
            <span className="quote-item">Making better financial choices over long term<span className="dot">·</span></span>
            <span className="quote-item">When the right guidance meets patience and intent<span className="dot">·</span></span>
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

          {/* Featured Story */}
          <div className="featured-story reveal">
            <div className="fs-img">
              <div className="fs-img-inner">
                <svg style={{ width: '60%', maxWidth: '280px', opacity: '0.35' }} viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 160 L60 130 L90 140 L120 100 L150 90 L180 60 L210 40 L260 20" stroke="#A07830" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 160 L60 130 L90 140 L120 100 L150 90 L180 60 L210 40 L260 20 L260 180 L20 180 Z" fill="rgba(160,120,48,0.06)"/>
                  <line x1="20" y1="180" x2="260" y2="180" stroke="rgba(160,120,48,0.2)" strokeWidth="0.5"/>
                  <line x1="20" y1="140" x2="260" y2="140" stroke="rgba(160,120,48,0.08)" strokeWidth="0.5" strokeDasharray="4 4"/>
                  <line x1="20" y1="100" x2="260" y2="100" stroke="rgba(160,120,48,0.08)" strokeWidth="0.5" strokeDasharray="4 4"/>
                  <line x1="20" y1="60" x2="260" y2="60" stroke="rgba(160,120,48,0.08)" strokeWidth="0.5" strokeDasharray="4 4"/>
                  <circle cx="260" cy="20" r="4" fill="#A07830"/>
                  <circle cx="180" cy="60" r="3" fill="#A07830" opacity="0.7"/>
                  <circle cx="120" cy="100" r="3" fill="#A07830" opacity="0.5"/>
                </svg>
              </div>
              <div className="fs-overlay"></div>
              <span className="fs-tag">Featured Story</span>
            </div>
            <div className="fs-content">
              <div>
                <div className="fs-profile">
                  <div className="fs-avatar" style={{
                    backgroundImage: 'url(/testimonials/subir-rao.jpeg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    border: '2px solid var(--gold)',
                    boxShadow: '0 0 20px rgba(160,120,48,0.3)'
                  }}></div>
                  <div>
                    <div className="fs-name">Mr Subir Rao</div>
                    <div className="fs-role">Associate Professor and Deputy Chair for Executive Management Programs — S.P.Jain Institute of Management and Research</div>
                    <div className="fs-city">Location</div>
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
                  <div className="fs-trans-arrow">→</div>
                  <div className="fs-trans-to">
                    <span className="fs-trans-label">After</span>
                    Structured plan across 4 goals. Monthly SIP discipline. Calm through 2022 correction.
                  </div>
                </div>
              </div>
              <div className="fs-metrics">
                <div>
                  <div className="fs-metric-num">3<sup>yrs</sup></div>
                  <div className="fs-metric-label">Client Since<br/>2021</div>
                </div>
                <div>
                  <div className="fs-metric-num">4</div>
                  <div className="fs-metric-label">Goals<br/>Structured</div>
                </div>
                <div>
                  <div className="fs-metric-num">₹2Cr<sup>+</sup></div>
                  <div className="fs-metric-label">Portfolio<br/>Value</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Story Grid ── */}
        <div className="stories-grid">
          {[
            {
              num: 'Story 01',
              img: '/testimonials/eswaran-kps.jpeg',
              name: 'Eswaran K P S',
              role: 'Proprietor, Astrom Business Associates',
              city: 'Location',
              quote: '"Nitesh has been more of a partner than just an advisor or service provider. He has helped us navigate both tough & great times prudently. His innate understanding of financial markets is evident from returns on Investment."',
              before: 'Uncertain market approach',
              after: 'Strategic, goal-aligned investments',
              metric: '18%', metricLabel: 'Annual Returns',
              delay: ''
            },
            {
              num: 'Story 02',
              img: '/testimonials/ashish-more.jpeg',
              name: 'Mr Ashish More',
              role: 'Inspector Fire, Maharashtra Fire Service',
              city: 'Location',
              quote: '"Dear Nitesh, Thank you for your prompt response and swift action in getting my account opened. I truly appreciate your thoughtful suggestions in selecting the right funds for investment, as well as consistent support you provided until SIP was successfully initiated."',
              before: 'Manual fund selection',
              after: 'Expert-guided portfolio',
              metric: '22%', metricLabel: 'Goal Achievement',
              delay: 'd2'
            },
            {
              num: 'Story 03',
              img: '/testimonials/shamiran-banerjee.jpeg',
              name: 'Mr Shamiran S Banerjee',
              role: 'Associate Director, Morningstar, Inc',
              city: 'Location',
              quote: '"I\'ve had the privilege of working with Nitesh Kandarkar for the past 1 year and I can confidently say that his expertise has been instrumental in helping me maximize my capital gains. His deep understanding of market dynamics and disciplined investment strategy consistently delivered results that exceeded my expectations."',
              before: 'Generic investment approach',
              after: 'Personalized wealth strategy',
              metric: '35%', metricLabel: 'Portfolio Growth',
              delay: 'd3'
            },
          ].map((card) => (
            <div key={card.num} className={`story-card reveal ${card.delay}`}>
              <span className="sc-num">{card.num}</span>
              <div className="sc-avatar" style={{
                backgroundImage: `url(${card.img})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                border: '1px solid var(--gold)',
                boxShadow: '0 0 15px rgba(160,120,48,0.2)'
              }}></div>
              <div className="sc-name">{card.name}</div>
              <div className="sc-role">{card.role}</div>
              <div className="sc-city">{card.city}</div>
              <div className="sc-quote">{card.quote}</div>
              <div className="sc-divider"></div>
              <div className="sc-before-after">
                <div className="sc-ba-item sc-ba-before">
                  <div className="sc-ba-icon"></div>
                  <div>{card.before}</div>
                </div>
                <div className="sc-ba-item sc-ba-after">
                  <div className="sc-ba-icon"></div>
                  <div>{card.after}</div>
                </div>
              </div>
              <div className="sc-metric">
                <span className="sc-metric-num">{card.metric}</span>
                <span className="sc-metric-label">{card.metricLabel}</span>
              </div>
              <span className="sc-stars">★★★★★</span>
            </div>
          ))}
        </div>

        {/* ── Horizontal Story Bars ── */}
        {[
          {
            img: '/testimonials/manisha-phadke.jpeg',
            name: 'Dr Manisha Phadke',
            role: 'DGM - Quality Assurance, Ajanta Pharma Ltd',
            city: 'Location',
            quote: '"Nitesh is very patient. Person like me who was not knowing anything about finance, he explained me everything in detail in simple language. He has taken all care of my investment and made my retirement tenure peaceful."',
            metrics: [{ num: '12%', label: 'Annual Returns' }, { num: '8', label: 'Years Together' }],
            delay: ''
          },
          {
            img: '/testimonials/lekha-bharathan.jpeg',
            name: 'Mrs Lekha Bharathan',
            role: 'Vice President & National Manager - Audit, Reliance General Insurance',
            city: 'Location',
            quote: '"If you wish to have a Personal trustworthy friend who will also manage your money expertly for you, look no further than Nitesh. Nitesh was referred by a mutual friend and it\'s been two years of transparent dedicated stress free relationship since."',
            metrics: [{ num: '8', label: 'Years Together' }, { num: '25%', label: 'Portfolio Growth' }],
            delay: 'd2'
          },
          {
            img: '/testimonials/sdkhandeka.jpeg',
            name: 'Mr S.D.Khandekar',
            role: 'Retired Sr. Accounts Officer, Mumbai Port Authority',
            city: 'Location',
            quote: '"Nitesh is a professional portfolio adviser. He is hard working and updated in his field. He has insight in his subject and capability to keep the investors satisfied not only by offering prompt services but by achieving optimum returns on their portfolios."',
            metrics: [{ num: '15%', label: 'Annual Returns' }, { num: '25', label: 'Years Experience' }],
            delay: 'd3'
          },
          {
            img: '/testimonials/sadhana-khandekar.jpeg',
            name: 'Mrs Sadhana Khandekar',
            role: 'Retired Manager, Air India Limited',
            city: 'Location',
            quote: '"I know Nitesh for a long time and I know his passion about financial planning. His guidance has proved very beneficial to me looking at returns I am getting today out of my investment. He keeps me updated about the capital market and advices me accordingly."',
            metrics: [{ num: '18%', label: 'Avg. Returns' }, { num: '12', label: 'Years Together' }],
            delay: 'd4'
          },
        ].map((bar) => (
          <div key={bar.name} className={`hstory-bar reveal ${bar.delay}`}>
            <div className="hb-profile">
              <div className="hb-avatar" style={{
                backgroundImage: `url(${bar.img})`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                border: '1px solid var(--gold)',
                boxShadow: '0 0 20px rgba(160,120,48,0.25)'
              }}></div>
              <div className="hb-name">{bar.name}</div>
              <div className="hb-role">{bar.role}</div>
              <div className="hb-city">{bar.city}</div>
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
            <div className="cta-ring"></div>
            <div className="cta-ring"></div>
            <div className="cta-ring"></div>
            <div className="cta-ring"></div>
          </div>
          <div className="cta-eyebrow reveal">Ready to Begin Your Journey?</div>
          <h2 className="cta-h2 reveal d1">Your story of <em>financial clarity</em> starts here.</h2>
          <p className="cta-sub reveal d2">
            Join hundreds of families who've transformed their relationship with money through disciplined, goal-based wealth management.
          </p>
          <div className="cta-btns reveal d3">
            <Link href="/contact">
              <button className="btn-gold-lg">
                <span>Start Your Journey</span>
              </button>
            </Link>
            <Link href="/about">
              <button className="btn-outline-lg">View All Stories</button>
            </Link>
          </div>
          <p className="cta-note reveal d4">No obligation · Confidential consultation · Personalised approach</p>
        </section>

      </Layout>
    </>
  )
}