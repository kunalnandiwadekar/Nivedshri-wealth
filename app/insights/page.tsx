'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { allArticles } from './articles-data'
import Layout from '@/components/layout/Layout'

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  // Filter articles based on active filter
  const filteredArticles = activeFilter === 'all' 
    ? allArticles 
    : allArticles.filter(article => article.category.toLowerCase() === activeFilter.toLowerCase())

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter)
  }

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
      { threshold: 0.07 }
    )

    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    revealElements.forEach((el) => observer.observe(el))

    return () => {
      revealElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <Layout 
        loaderTitle="Insights"
        loaderSubtitle="Financial Wisdom & Market Updates"
        loaderDuration={1300}
      >
      
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: var(--bg);
          color: var(--ivory);
          font-family: 'Outfit', sans-serif;
          font-size: 16px;
          line-height: 1.6;
          overflow-x: hidden;
        }

        /* CSS Variables */
        :root {
          --ivory: #1C1A14;
          --ivory-mid: #6B6050;
          --ivory-dim: rgba(28,26,20,0.5);
          --ivory-faint: rgba(28,26,20,0.08);
          --white: #FFFFFF;
          --orange: #D4530A;
          --orange-light: #E8703A;
          --orange-dark: #A83E00;
          --orange-dim: rgba(212,83,10,0.1);
          --orange-faint: rgba(212,83,10,0.05);
          --gold: #A07830;
          --gold-light: #B8924A;
          --gold-bright: #C9A96E;
          --gold-dark: #7A5C20;
          --gold-dim: rgba(160,120,48,0.12);
          --bg: #FAFAF8;
          --bg2: #F4F2EE;
          --bg3: #EDE9E2;
          --bg4: #E4DFD6;
          --divider: rgba(160,120,48,0.15);
          --divider-o: rgba(212,83,10,0.15);
          --divider-bright: rgba(160,120,48,0.35);
          --divider-w: rgba(28,26,20,0.08);
        }

        /* Hero Section */
        .insights-hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 56px 0;
          position: relative;
          overflow: hidden;
          background: var(--bg);
        }

        .insights-ghost-word {
          position: absolute;
          right: -30px;
          bottom: -30px;
          font-family: 'Cormorant', serif;
          font-size: clamp(180px, 24vw, 340px);
          font-weight: 300;
          line-height: 0.85;
          letter-spacing: -0.04em;
          color: transparent;
          -webkit-text-stroke: 1px rgba(201,169,110,0.06);
          user-select: none;
          pointer-events: none;
          white-space: nowrap;
        }

        .insights-orb {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232,101,26,0.12) 0%, rgba(232,101,26,0.04) 40%, transparent 70%);
          top: -100px;
          right: -80px;
          animation: orbFloat 8s ease-in-out infinite;
          pointer-events: none;
        }

        .insights-orb2 {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 65%);
          bottom: 100px;
          left: -80px;
          animation: orbFloat2 10s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes orbFloat {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-30px,20px) scale(1.08); }
        }

        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0,0); }
          50% { transform: translate(20px,-30px); }
        }

        .insights-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--orange);
          font-weight: 500;
          margin-top: 56px;
          margin-bottom: 22px;
          position: relative;
          z-index: 2;
        }

        @media (min-width: 768px) {
          .insights-eyebrow { 
            font-size: 15px; 
            gap: 14px; 
            margin-bottom: 28px; 
          }
        }

        @media (min-width: 1024px) {
          .insights-eyebrow { 
            font-size: 20px; 
            margin-top: 62px;
            margin-bottom: 10px; 
          }
        }

        .insights-eyebrow .line {
          width: 40px;
          height: 1px;
          background: var(--orange);
        }

        .insights-breadcrumb {
          position: absolute;
          top: 140px;
          left: 56px;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-weight: 400;
          z-index: 10;
        }

        @media (min-width: 768px) {
          .insights-breadcrumb { 
            font-size: 13px; 
            left: 40px;
          }
        }

        @media (min-width: 1024px) {
          .insights-breadcrumb { 
            font-size: 20px; 
            left: 56px;
          }
        }

        .insights-breadcrumb a {
          color: var(--ivory-dim);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .insights-breadcrumb a:hover {
          color: var(--ivory);
        }

        .insights-breadcrumb .sep {
          margin: 0 8px;
          color: var(--gold);
          opacity: 0.4;
        }

        .insights-breadcrumb .cur {
          color: var(--gold);
        }

        .insights-h1 {
          font-family: 'Cormorant', serif;
          font-size: clamp(56px, 9vw, 128px);
          font-weight: 300;
          line-height: 0.92;
          letter-spacing: -0.025em;
          max-width: 900px;
          position: relative;
          z-index: 2;
          overflow: hidden;
        }

        .insights-h1 em {
          font-style: italic;
          color: var(--orange);
        }

        .insights-h1 strong {
          font-weight: 400;
          color: var(--gold);
        }

        .insights-sub {
          font-size: 23px;
          color: var(--ivory-mid);
          line-height: 1.9;
          max-width: 580px;
          font-weight: 300;
          margin-top: 36px;
          position: relative;
          z-index: 2;
        }

        .insights-sub em {
          font-style: normal;
          color: var(--ivory);
          font-weight: 400;
        }

        .insights-bottom-bar {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 1px;
          background: var(--divider);
          border-top: 1px solid var(--divider);
          margin-top: 72px;
          position: relative;
          z-index: 2;
        }

        .insights-bb-item {
          background: var(--bg);
          padding: 28px 24px;
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          transition: background 0.3s;
          position: relative;
          overflow: hidden;
        }

        .insights-bb-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--orange);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }

        .insights-bb-item:hover {
          background: var(--bg3);
        }

        .insights-bb-item:hover::after {
          transform: scaleX(1);
        }

        .insights-bb-item.active {
          background: var(--bg3);
        }

        .insights-bb-item.active::after {
          transform: scaleX(1);
        }

        .insights-bb-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          background: var(--divider-bright);
        }

        .insights-bb-item.active .insights-bb-dot,
        .insights-bb-item:hover .insights-bb-dot {
          background: var(--orange);
        }

        .insights-bb-label {
          font-size: 15px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ivory-dim);
          font-weight: 400;
          transition: color 0.3s;
        }

        .insights-bb-item:hover .insights-bb-label,
        .insights-bb-item.active .insights-bb-label {
          color: var(--ivory);
        }

        .insights-bb-count {
          margin-left: auto;
          font-family: 'Cormorant', serif;
          font-size: 20px;
          font-weight: 300;
          color: var(--orange);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .insights-bb-item:hover .insights-bb-count,
        .insights-bb-item.active .insights-bb-count {
          opacity: 1;
        }

        /* Filter Tabs */
        .filter-tabs {
          display: flex;
          gap: 1px;
          background: var(--divider);
          margin-bottom: 60px;
        }

        .filter-tab {
          background: var(--bg2);
          color: var(--dim);
          padding: 16px 32px;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.35s;
          border: none;
        }

        .filter-tab:hover {
          background: var(--bg3);
          color: var(--ivory);
        }

        .filter-tab.active {
          background: var(--orange);
          color: var(--white) !important;
          border-color: var(--orange);
        }

        /* Main 3-col grid */
        .articles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--divider);
          width: 100%;
        }

        /* Article Card */
        .art-card {
          background: var(--bg2);
          display: flex;
          flex-direction: column;
          cursor: pointer;
          overflow: hidden;
          transition: background 0.35s;
          position: relative;
          z-index: 1;
        }

        .art-card:hover {
          background: var(--bg3);
        }

        .art-card.horizontal {
          grid-column: span 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .art-card-thumb {
          aspect-ratio: 16/9;
          overflow: hidden;
          position: relative;
          background: var(--bg3);
          min-height: 180px;
        }

        .art-card.horizontal .art-card-thumb {
          aspect-ratio: unset;
          height: 100%;
        }

        .art-card-thumb-inner {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.9);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .art-card:hover .art-card-thumb-inner {
          transform: scale(1);
        }

        .art-card-body {
          padding: 32px 28px 28px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .art-card.horizontal .art-card-body {
          padding: 40px;
        }

        .art-title {
          font-family: 'Cormorant', serif;
          font-size: clamp(22px, 2.4vw, 35px);
          font-weight: 300;
          line-height: 1.18;
          color: var(--ivory);
          margin-bottom: 12px;
        }

        .art-card.horizontal .art-title {
          font-size: clamp(22px, 2.4vw, 30px);
        }

        .art-cat {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .art-cat.gold {
          color: var(--gold);
        }

        .art-cat.orange {
          color: var(--orange);
        }

        .art-cat .cat-dot {
          width: 6px;
          height: 6px;
          background: currentColor;
          border-radius: 50%;
        }

        .art-excerpt {
          font-size: 18px;
          line-height: 1.5;
          color: var(--dim);
          margin-bottom: 16px;
          flex: 1;
        }

        .art-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: auto;
          gap: 8px;
        }

        .art-read-time {
          font-size: 13px;
          color: var(--dim);
        }

        .art-read-btn {
          font-size: 13px;
          color: var(--gold);
          font-weight: 500;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .art-card:hover .art-read-btn {
          color: var(--orange);
        }

        /* Newsletter Break */
        .newsletter-break {
          background: var(--bg3);
          border-top: 1px solid var(--divider);
          border-bottom: 1px solid var(--divider);
          padding: 72px 56px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .nl-left .section-eyebrow {
          color: var(--orange);
        }

        .nl-left .section-eyebrow .line {
          background: var(--orange);
        }

        .nl-big {
          font-family: 'Cormorant', serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 300;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        .nl-big em {
          font-style: italic;
          color: var(--orange);
        }

        .nl-sub {
          font-size: 20px;
          color: var(--ivory-mid);
          line-height: 1.85;
          font-weight: 300;
          margin-top: 16px;
        }

        .nl-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .nl-input {
          background: var(--bg4);
          border: 1px solid var(--divider);
          color: var(--ivory);
          font-size: 14px;
          padding: 14px 20px;
          font-family: 'Outfit', sans-serif;
          font-weight: 300;
          border-radius: 1px;
          outline: none;
          cursor: pointer;
          transition: border-color 0.3s;
          width: 100%;
        }

        .nl-input::placeholder {
          color: var(--ivory-dim);
        }

        .nl-input:focus {
          border-color: var(--orange);
        }

        .nl-submit {
          background: var(--orange);
          color: var(--white);
          padding: 14px 32px;
          font-size: 13px;
          border: none;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
          border-radius: 1px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: background 0.3s;
          width: 100%;
        }

        .nl-submit::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--orange-dark);
          transform: translateX(-101%);
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }

        .nl-submit:hover::before {
          transform: translateX(0);
        }

        .nl-submit span {
          position: relative;
          z-index: 1;
        }

        .nl-note {
          font-size: 15px;
          color: var(--ivory-dim);
          font-weight: 300;
          margin-top: 6px;
          line-height: 1.6;
        }

        /* Deep Dive Section */
        .deepdive-section {
          padding: 96px 56px;
        }

        .deepdive-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--divider);
          margin-top: 64px;
        }

        .dd-card {
          background: var(--bg2);
          padding: 40px 32px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: background 0.35s;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .dd-card:hover {
          background: var(--bg3);
        }

        .dd-icon-box {
          width: 52px;
          height: 52px;
          border: 1px solid var(--divider-bright);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1px;
          flex-shrink: 0;
          transition: border-color 0.3s, background 0.3s;
        }

        .dd-card:hover .dd-icon-box {
          border-color: var(--orange);
          background: var(--orange-faint);
        }

        .dd-icon-box svg {
          width: 22px;
          height: 22px;
          stroke: var(--gold);
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: stroke 0.3s;
        }

        .dd-card:hover .dd-icon-box svg {
          stroke: var(--orange);
        }

        .dd-num {
          font-family: 'Cormorant', serif;
          font-size: 20px;
          font-weight: 300;
          color: var(--ivory-dim);
          letter-spacing: 0.08em;
        }

        .dd-title {
          font-family: 'Cormorant', serif;
          font-size: 30px;
          font-weight: 400;
          color: var(--ivory);
          line-height: 1.3;
          letter-spacing: -0.005em;
        }

        .dd-body {
          font-size: 16px;
          color: var(--ivory-dim);
          line-height: 1.75;
          font-weight: 300;
          flex: 1;
        }

        .dd-link {
          font-size: 15px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--orange);
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: auto;
          transition: gap 0.3s;
        }

        .dd-card:hover .dd-link {
          gap: 10px;
        }

        /* Orange top border on hover */
        .dd-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--orange);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
        }

        .dd-card:hover::before {
          transform: scaleX(1);
        }

        /* Quote Break */
        .insight-quote-break {
          background: var(--bg2);
          border-top: 1px solid var(--divider);
          border-bottom: 1px solid var(--divider);
          padding: 80px 56px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .insight-quote-break .iqb-left {
          display: none;
        }

        .insight-quote-break .iqb-right {
          width: 100%;
          max-width: 800px;
          text-align: center;
        }

        .iqb-left {
          font-family: 'Cormorant', serif;
          font-size: clamp(120px, 14vw, 200px);
          font-weight: 300;
          line-height: 0.85;
          color: transparent;
          -webkit-text-stroke: 1px rgba(232,101,26,0.2);
          user-select: none;
        }

        .insight-quote-break .iqb-right blockquote {
          font-family: 'Cormorant', serif;
          font-size: clamp(24px, 3vw, 40px);
          font-weight: 700 !important;
          font-style: italic;
          line-height: 1.45;
          color: var(--ivory);
          margin-bottom: 28px;
          text-align: center !important;
        }

        .insight-quote-break .iqb-right blockquote.centered-quote {
          font-weight: 700 !important;
          text-align: center !important;
        }

        .insight-quote-break .iqb-right blockquote .gold-highlight {
          color: var(--gold) !important;
          font-weight: 700 !important;
          font-style: normal !important;
        }

        .insight-quote-break .iqb-right blockquote .orange-highlight {
          color: var(--orange) !important;
          font-weight: 700 !important;
          font-style: normal !important;
        }

        .iqb-right blockquote em {
          font-style: normal;
          color: var(--orange);
        }

        .insight-quote-break .iqb-right cite {
          font-size: 14px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ivory) !important;
          font-style: normal;
          display: flex;
          align-items: center;
          justify-content: center !important;
          gap: 12px;
          font-weight: 600 !important;
        }

        .insight-quote-break .iqb-right cite.centered-cite {
          justify-content: center !important;
          font-size: 14px;
          font-weight: 600 !important;
          color: var(--ivory) !important;
        }

        .insight-quote-break .iqb-right cite .founder-title {
          color: var(--gold) !important;
          font-weight: 400 !important;
          font-size: 12px;
        }

        .iqb-right cite::before {
          content: '';
          width: 24px;
          height: 1px;
          background: var(--orange);
        }

        /* Final CTA */
        .final-cta {
          padding: 120px 56px;
          text-align: center;
          background: var(--bg);
          position: relative;
          overflow: hidden;
        }

        .cta-rings {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .cta-ring {
          position: absolute;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .cta-ring:nth-child(1) {
          width: 300px;
          height: 300px;
          border: 1px solid var(--divider);
        }

        .cta-ring:nth-child(2) {
          width: 500px;
          height: 500px;
          border: 1px solid rgba(232,101,26,0.07);
        }

        .cta-ring:nth-child(3) {
          width: 700px;
          height: 700px;
          border: 1px solid rgba(232,101,26,0.04);
        }

        .cta-ring:nth-child(4) {
          width: 900px;
          height: 900px;
          border: 1px solid rgba(201,169,110,0.03);
        }

        .cta-eyebrow {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--orange);
          margin-bottom: 20px;
          font-weight: 500;
          position: relative;
          z-index: 1;
        }

        .cta-h2 {
          font-family: 'Cormorant', serif;
          font-size: clamp(40px, 6vw, 76px);
          font-weight: 300;
          color: var(--ivory);
          line-height: 1.1;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
          position: relative;
          z-index: 1;
        }

        .cta-h2 em {
          font-style: italic;
          color: var(--orange);
        }

        .cta-sub {
          font-size: 16px;
          color: var(--ivory-mid);
          margin-bottom: 48px;
          font-weight: 300;
          max-width: 460px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.8;
          position: relative;
          z-index: 1;
        }

        .cta-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .btn-orange-lg {
          background: var(--orange);
          color: var(--white);
          padding: 16px 36px;
          font-size: 13px;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.3s;
        }

        .btn-orange-lg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--orange-dark);
          transform: translateX(-101%);
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }

        .btn-orange-lg:hover::before {
          transform: translateX(0);
        }

        .btn-orange-lg:hover {
          box-shadow: 0 24px 60px rgba(232,101,26,0.35);
        }

        .btn-orange-lg span {
          position: relative;
          z-index: 1;
        }

        .btn-outline-lg {
          background: transparent;
          color: var(--ivory);
          padding: 16px 36px;
          font-size: 13px;
          border: 1px solid rgba(244,239,230,0.2);
          border-radius: 2px;
          cursor: pointer;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 400;
          font-family: 'Outfit', sans-serif;
          transition: border-color 0.3s, color 0.3s;
        }

        .btn-outline-lg:hover {
          border-color: var(--gold);
          color: var(--gold);
        }

        .cta-note {
          font-size: 11px;
          color: rgba(244,239,230,0.18);
          margin-top: 32px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          /* Articles Grid Responsive */
          .page-container {
            padding: 64px 32px !important;
          }
          
          .articles-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          
          .art-card {
            flex-direction: column !important;
            padding: 24px !important;
          }
          
          .art-card.horizontal {
            flex-direction: column !important;
          }
          
          .art-card.horizontal .art-card-body {
            padding: 24px !important;
          }
          
          .art-card-thumb {
            width: 100% !important;
            height: 180px !important;
          }
          
          .art-title {
            font-size: clamp(20px, 4vw, 28px) !important;
          }
          
          .art-excerpt {
            font-size: 16px !important;
            line-height: 1.6 !important;
          }
          
          /* Newsletter Responsive */
          .newsletter-break {
            padding: 48px 32px !important;
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          
          .nl-big {
            font-size: clamp(28px, 5vw, 42px) !important;
          }
          
          .nl-sub {
            font-size: 18px !important;
          }
          
          .nl-form {
            max-width: 100% !important;
          }
          
          /* Deep Dives Responsive */
          .deepdive-section {
            padding: 64px 32px !important;
          }
          
          .deepdive-grid {
            grid-template-columns: 1fr !important;
            gap: 1px !important;
          }
          
          .dd-card {
            padding: 32px 24px !important;
            gap: 16px !important;
          }
          
          .dd-icon-box {
            width: 48px !important;
            height: 48px !important;
          }
          
          .dd-icon-box svg {
            width: 20px !important;
            height: 20px !important;
          }
          
          .dd-title {
            font-size: clamp(22px, 4vw, 28px) !important;
            line-height: 1.3 !important;
          }
          
          .dd-body {
            font-size: 15px !important;
            line-height: 1.7 !important;
          }
          
          /* Final CTA Responsive */
          .final-cta {
            padding: 80px 32px !important;
          }
          
          .cta-h2 {
            font-size: clamp(32px, 6vw, 56px) !important;
          }
          
          .cta-sub {
            font-size: 15px !important;
            max-width: 100% !important;
            margin-bottom: 32px !important;
          }
          
          .cta-btns {
            flex-direction: column !important;
            gap: 12px !important;
            align-items: center !important;
          }
          
          .btn-orange-lg,
          .btn-outline-lg {
            width: 100% !important;
            max-width: 320px !important;
            padding: 14px 24px !important;
          }
          
          .cta-note {
            font-size: 10px !important;
            margin-top: 24px !important;
          }
        }

        @media (max-width: 640px) {
          /* Mobile Specific Styles */
          .page-container {
            padding: 40px 20px !important;
          }
          
          .articles-grid {
            gap: 16px !important;
          }
          
          .art-card {
            padding: 20px !important;
          }
          
          .art-card.horizontal .art-card-body {
            padding: 20px !important;
          }
          
          .art-card-thumb {
            height: 140px !important;
          }
          
          .art-title {
            font-size: clamp(18px, 5vw, 24px) !important;
            margin-bottom: 10px !important;
          }
          
          .art-excerpt {
            font-size: 14px !important;
            margin-bottom: 12px !important;
          }
          
          .art-footer {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 6px !important;
          }
          
          .art-read-time {
            font-size: 12px !important;
          }
          
          .art-read-btn {
            font-size: 12px !important;
          }
          
          .art-cat {
            font-size: 12px !important;
            margin-bottom: 6px !important;
          }
          
          /* Newsletter Mobile */
          .newsletter-break {
            padding: 32px 20px !important;
            gap: 32px !important;
          }
          
          .nl-big {
            font-size: clamp(24px, 6vw, 36px) !important;
            line-height: 1.2 !important;
          }
          
          .nl-sub {
            font-size: 16px !important;
            line-height: 1.7 !important;
            margin-top: 12px !important;
          }
          
          .nl-input {
            padding: 12px 16px !important;
            font-size: 14px !important;
          }
          
          .nl-submit {
            padding: 12px 24px !important;
            font-size: 12px !important;
          }
          
          .nl-note {
            font-size: 13px !important;
            margin-top: 8px !important;
          }
          
          /* Deep Dives Mobile */
          .deepdive-section {
            padding: 48px 20px !important;
          }
          
          .deepdive-grid {
            margin-top: 40px !important;
          }
          
          .dd-card {
            padding: 24px 20px !important;
            gap: 12px !important;
          }
          
          .dd-icon-box {
            width: 44px !important;
            height: 44px !important;
          }
          
          .dd-icon-box svg {
            width: 18px !important;
            height: 18px !important;
          }
          
          .dd-num {
            font-size: 16px !important;
          }
          
          .dd-title {
            font-size: clamp(20px, 5vw, 24px) !important;
            line-height: 1.25 !important;
          }
          
          .dd-body {
            font-size: 14px !important;
            line-height: 1.6 !important;
          }
          
          .dd-link {
            font-size: 13px !important;
            margin-top: 12px !important;
          }
          
          /* Final CTA Mobile */
          .final-cta {
            padding: 56px 20px !important;
          }
          
          .cta-h2 {
            font-size: clamp(26px, 7vw, 42px) !important;
            line-height: 1.15 !important;
            margin-bottom: 12px !important;
          }
          
          .cta-sub {
            font-size: 14px !important;
            line-height: 1.7 !important;
            margin-bottom: 24px !important;
          }
          
          .cta-btns {
            gap: 10px !important;
          }
          
          .btn-orange-lg,
          .btn-outline-lg {
            padding: 12px 20px !important;
            font-size: 11px !important;
            max-width: 280px !important;
          }
          
          .cta-note {
            font-size: 9px !important;
            margin-top: 20px !important;
            letter-spacing: 0.08em !important;
          }
          
          /* Filter bar — single column on mobile */
          .insights-bottom-bar {
            grid-template-columns: 1fr !important;
            border-top: 1px solid var(--divider);
          }

          .insights-bb-item {
            padding: 14px 20px !important;
            border-bottom: 1px solid var(--divider);
          }

          .insights-bb-label {
            font-size: 14px !important;
            letter-spacing: 0.08em !important;
          }

          .insights-bb-count {
            opacity: 1 !important;
            font-size: 17px !important;
          }

          /* Switch active indicator to left bar instead of bottom */
          .insights-bb-item::after {
            top: 0 !important;
            bottom: 0 !important;
            right: auto !important;
            width: 3px !important;
            height: 100% !important;
            transform: scaleY(0) !important;
            transform-origin: top !important;
          }

          .insights-bb-item.active::after,
          .insights-bb-item:hover::after {
            transform: scaleY(1) !important;
          }
          
          /* Mobile Ring Adjustments */
          .cta-ring:nth-child(1) {
            width: 200px !important;
            height: 200px !important;
          }
          
          .cta-ring:nth-child(2) {
            width: 350px !important;
            height: 350px !important;
          }
          
          .cta-ring:nth-child(3) {
            width: 500px !important;
            height: 500px !important;
          }
          
          .cta-ring:nth-child(4) {
            width: 650px !important;
            height: 650px !important;
          }
        }

        @media (max-width: 480px) {
          /* Extra Small Mobile */
          .art-card-thumb {
            height: 120px !important;
          }
          
          .art-title {
            font-size: clamp(16px, 6vw, 20px) !important;
          }
          
          .art-excerpt {
            font-size: 13px !important;
          }
          
          .nl-big {
            font-size: clamp(20px, 7vw, 28px) !important;
          }
          
          .nl-sub {
            font-size: 15px !important;
          }
          
          .dd-title {
            font-size: clamp(18px, 6vw, 22px) !important;
          }
          
          .dd-body {
            font-size: 13px !important;
          }
          
          .cta-h2 {
            font-size: clamp(22px, 8vw, 32px) !important;
          }
          
          .cta-sub {
            font-size: 13px !important;
          }
          
          .btn-orange-lg,
          .btn-outline-lg {
            max-width: 240px !important;
            padding: 10px 16px !important;
            font-size: 10px !important;
          }
        }

        @media (max-width: 767px) {
          .insights-hero {
            padding: 140px 24px 0;
            min-height: auto;
            justify-content: flex-start;
          }
          
          .insights-bottom-bar {
            margin-top: 40px;
          }

          .insights-breadcrumb { 
            top: 140px; 
            left: 24px; 
            font-size: 11px; 
          }
        }

        /* Laptop fix — navbar clearance */
        @media (max-width: 1440px) and (min-width: 768px) {
          .insights-hero {
            padding-top: 140px;
            justify-content: flex-start;
          }
        }

        /* Reveal animations */
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1);
        }

        .reveal.visible {
          opacity: 1;
          transform: none;
        }

        .reveal-left {
          opacity: 0;
          transform: translateX(-32px);
          transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1);
        }

        .reveal-left.visible {
          opacity: 1;
          transform: none;
        }

        .reveal-right {
          opacity: 0;
          transform: translateX(32px);
          transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1);
        }

        .reveal-right.visible {
          opacity: 1;
          transform: none;
        }

        .d1 { transition-delay: 0.1s; }
        .d2 { transition-delay: 0.2s; }
        .d3 { transition-delay: 0.3s; }
        .d4 { transition-delay: 0.4s; }

        /* Section styles */
        .section-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 20px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 400;
          margin-bottom: 20px;
        }

        .section-eyebrow .line {
          width: 28px;
          height: 1px;
          background: var(--gold);
        }

        .section-h2 {
          font-family: 'Cormorant', serif;
          font-size: clamp(36px, 4.5vw, 58px);
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -0.015em;
        }

        .section-h2 em {
          font-style: italic;
          color: var(--orange);
        }

        .section-h2 strong {
          font-weight: 400;
          color: var(--gold);
        }
      `}</style>

      {/* Hero Section */}
      <section className="insights-hero">
        <div className="insights-orb"></div>
        <div className="insights-orb2"></div>
        <div className="insights-ghost-word">Insights</div>

        <div className="insights-breadcrumb">
          <Link href="/">Home</Link><span className="sep">—</span><span className="cur">Insights</span>
        </div>

        <div className="insights-eyebrow">
          <span className="line"></span>
          Insights & Perspectives
        </div>

        <h1 className="insights-h1">
          Finance <em>made</em><br/>
          <strong>clear.</strong><br/>
          Not complicated.
        </h1>

        <p className="insights-sub">
          This section is built to break things down in a <em>simple, practical way</em> — whether it's understanding how compounding works, why inflation matters, or how to think about investments more clearly. The goal is to help you make decisions with <em>confidence, not confusion.</em>
        </p>

        <div className="insights-bottom-bar">
          <div 
            className={`insights-bb-item ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterClick('all')}
          >
            <span className="insights-bb-dot"></span>
            <span className="insights-bb-label">All Articles</span>
            <span className="insights-bb-count">{allArticles.length}</span>
          </div>
          <div 
            className={`insights-bb-item ${activeFilter === 'fundamentals' ? 'active' : ''}`}
            onClick={() => handleFilterClick('fundamentals')}
          >
            <span className="insights-bb-dot"></span>
            <span className="insights-bb-label">Fundamentals</span>
            <span className="insights-bb-count">{allArticles.filter(a => a.category === 'Fundamentals').length}</span>
          </div>
          <div 
            className={`insights-bb-item ${activeFilter === 'planning' ? 'active' : ''}`}
            onClick={() => handleFilterClick('planning')}
          >
            <span className="insights-bb-dot"></span>
            <span className="insights-bb-label">Planning</span>
            <span className="insights-bb-count">{allArticles.filter(a => a.category === 'Planning').length}</span>
          </div>
          <div 
            className={`insights-bb-item ${activeFilter === 'mindset' ? 'active' : ''}`}
            onClick={() => handleFilterClick('mindset')}
          >
            <span className="insights-bb-dot"></span>
            <span className="insights-bb-label">Mindset</span>
            <span className="insights-bb-count">{allArticles.filter(a => a.category === 'Mindset').length}</span>
          </div>
        </div>
      </section>

      <div className="page-container" style={{ padding: '96px 56px' }}>

        {/* Articles Grid */}
        <div className="articles-grid">
          {filteredArticles.map((article, index) => (
            <div 
              key={article.id} 
              className={`art-card ${article.type === 'horizontal' ? 'horizontal' : ''}`}
            >
              <div className="art-card-thumb">
                <div className="art-card-thumb-inner">
                  <div dangerouslySetInnerHTML={{ __html: typeof article.svgContent === 'string' ? article.svgContent : '' }} />
                </div>
              </div>
              <div className="art-card-body">
                <span className={`art-cat ${article.categoryColor}`}>
                  <span className="cat-dot"></span>
                  {article.category}
                </span>
                <h3 className="art-title" dangerouslySetInnerHTML={{ __html: article.title }} />
                <p className="art-excerpt">{article.excerpt}</p>
                <div className="art-footer">
                  <span className="art-read-time">{article.readTime}</span>
                  <span className="art-read-btn">Read Article →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="newsletter-break">
        <div className="nl-left">
          <div className="section-eyebrow reveal">
            <span className="line"></span>
            Stay Informed
          </div>
          <h2 className="nl-big reveal d1">
            One insight.<br/>
            Every <em>month.</em><br/>
            No noise.
          </h2>
          <p className="nl-sub reveal d2">
            A single, well-written article on something that actually matters to your finances. No spam. No product pitches. Just clear thinking delivered to your inbox.
          </p>
        </div>
        <div>
          <div className="nl-form reveal d2">
            <input className="nl-input" type="text" placeholder="Your full name" />
            <input className="nl-input" type="email" placeholder="Your email address" />
            <button className="nl-submit">
              <span>Subscribe — It's Free</span>
            </button>
            <p className="nl-note">
              We send one article per month. You can unsubscribe anytime. No data is ever shared or sold.
            </p>
          </div>
        </div>
      </div>

      {/* Deep Dives Section */}
      <section className="deepdive-section">
        <div className="section-eyebrow reveal">
          <span className="line"></span>
          Deep Dives
        </div>
        <h2 className="section-h2 reveal d1" style={{maxWidth: '600px'}}>
          Everything you need to know about<br/>
          the topics that <em>matter.</em>
        </h2>

        <div className="deepdive-grid">
          <div className="dd-card reveal d1">
            <div className="dd-icon-box">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="dd-num">01 · Fundamentals</div>
              <div className="dd-title">Understanding the Basics</div>
              <div className="dd-body">Master the fundamental concepts that form the foundation of sound financial decision-making.</div>
              <Link href="/services">
                <div className="dd-link">Learn More</div>
              </Link>
            </div>
            <p className="dd-body">
              Why time in the market matters more than timing the market — and how compounding silently transforms regular savings into significant wealth.
            </p>
            <Link href="/services">
              <span className="dd-link">Explore Topic →</span>
            </Link>
          </div>
          <div className="dd-card reveal d2">
            <div className="dd-icon-box">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="dd-num">02 · Planning</div>
              <div className="dd-title">Goal-Based Investing — How to Actually Do It</div>
            </div>
            <p className="dd-body">
              Most people invest without attaching money to a purpose. Here's how linking every rupee to a life goal changes how you save, invest, and stay consistent.
            </p>
            <Link href="/services">
              <span className="dd-link">Explore Topic →</span>
            </Link>
          </div>
          <div className="dd-card reveal d3">
            <div className="dd-icon-box">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="dd-num">03 · Mindset</div>
              <div className="dd-title">Staying Disciplined Through Market Volatility</div>
            </div>
            <p className="dd-body">
              Volatility is not a bug — it's the price you pay for long-term returns. The investors who understand this keep their wealth. The ones who don't, lose it.
            </p>
            <Link href="/services">
              <span className="dd-link">Explore Topic →</span>
            </Link>
          </div>
          <div className="dd-card reveal d1">
            <div className="dd-icon-box">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="dd-num">04 · Planning</div>
              <div className="dd-title">Retirement Planning — Beyond the Corpus Number</div>
            </div>
            <p className="dd-body">
              Retirement isn't one number. It's income planning, inflation protection, health costs, and legacy. This series breaks it all down into something you can actually build toward.
            </p>
            <Link href="/services">
              <span className="dd-link">Explore Topic →</span>
            </Link>
          </div>
          <div className="dd-card reveal d2">
            <div className="dd-icon-box">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="dd-num">05 · Fundamentals</div>
              <div className="dd-title">Insurance — The Foundation Most People Skip</div>
            </div>
            <p className="dd-body">
              Wealth creation without protection is building on sand. Understanding term life, health cover, and what you actually need vs. what's being sold to you.
            </p>
            <Link href="/services">
              <span className="dd-link">Explore Topic →</span>
            </Link>
          </div>
          <div className="dd-card reveal d3">
            <div className="dd-icon-box">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="16 7 22 7 22 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="dd-num">06 · Mindset</div>
              <div className="dd-title">Why Smart People Make Poor Financial Decisions</div>
            </div>
            <p className="dd-body">
              High income doesn't guarantee financial security. Understanding the behavioural biases — loss aversion, recency bias, herd mentality — that undermine even intelligent investors.
            </p>
            <Link href="/services">
              <span className="dd-link">Explore Topic →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <div className="insight-quote-break">
        <div className="iqb-right">
          <div className="reveal">
            <blockquote 
              className="centered-quote"
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: 'clamp(24px, 3vw, 40px)',
                fontWeight: '700',
                fontStyle: 'italic',
                lineHeight: '1.45',
                color: '#1C1A14',
                marginBottom: '28px',
                textAlign: 'center'
              }}
            >
              "Finance doesn't need to feel <span style={{color: '#A07830', fontWeight: '700', fontStyle: 'normal'}}>complicated</span>. The goal is to help you make decisions with <span style={{color: '#D4530A', fontWeight: '700', fontStyle: 'normal'}}>confidence, not confusion</span>, and stay consistent with what actually works over the long term."
            </blockquote>
            <cite 
              className="centered-cite"
              style={{
                fontSize: '14px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#1C1A14',
                fontStyle: 'normal',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                fontWeight: '600'
              }}
            >
              Nitesh Tara <span style={{color: '#A07830', fontWeight: '400', fontSize: '12px'}}>Founder, Nivedshri Wealth</span>
            </cite>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="final-cta">
        <div className="cta-rings">
          <div className="cta-ring"></div>
          <div className="cta-ring"></div>
          <div className="cta-ring"></div>
          <div className="cta-ring"></div>
        </div>
        <div className="cta-eyebrow reveal">Ready to Act on What You've Learned?</div>
        <h2 className="cta-h2 reveal d1">
          Turn insight into<br/>
          a <em>plan that works.</em>
        </h2>
        <p className="cta-sub reveal d2">
          Reading is the first step. The next is building a financial structure that actually reflects your goals. Let's do that together.
        </p>
        <div className="cta-btns reveal d3">
          <Link href="/contact">
            <button className="btn-orange-lg">
              <span>Book a Free Consultation</span>
            </button>
          </Link>
          <Link href="/contact">
            <button className="btn-outline-lg">Talk to a Wealth Advisor</button>
          </Link>
        </div>
        <p className="cta-note reveal d4">Pan India · Digital-First · Confidential</p>
      </section>
      
    </Layout>
  )
}
