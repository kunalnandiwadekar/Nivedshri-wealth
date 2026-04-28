'use client'

import React from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import Spectrum from './Spectrum'
import WhyUs from './WhyUs'
import ClosingBelief from './ClosingBelief'
import FinalCTASection from './FinalCTASection'

export default function About() {
  useEffect(() => {
    const revealOnScroll = () => {
      const revealElements = document.querySelectorAll('.reveal')
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        if (elementTop < windowHeight - 100) {
          element.classList.add('visible')
        }
      })
    }
    setTimeout(revealOnScroll, 100)
    window.addEventListener('scroll', revealOnScroll)
    const headingLines = document.querySelectorAll('.ah-h1 span[style*="translateY(0%)"]')
    headingLines.forEach((line, index) => {
      setTimeout(() => {
        ;(line as HTMLElement).style.transform = 'translateY(0)'
      }, 100 + (index * 120))
    })
    return () => {
      window.removeEventListener('scroll', revealOnScroll)
    }
  }, [])

  return (
    <>
      <section className="about-hero">
        {/* Ambient Glow Effects */}
        <div className="ah-glow-1" style={{
          position: 'absolute', top: '-10%', left: '30%', width: '700px', height: '700px',
          borderRadius: '50%', background: 'radial-gradient(circle,rgba(160,120,48,0.055) 0%,transparent 65%)',
          pointerEvents: 'none', animation: 'ahGlow1 8s ease-in-out infinite'
        }} />
        <div className="ah-glow-2" style={{
          position: 'absolute', bottom: '0', right: '0', width: '500px', height: '500px',
          borderRadius: '50%', background: 'radial-gradient(circle,rgba(160,120,48,0.04) 0%,transparent 65%)',
          pointerEvents: 'none', animation: 'ahGlow2 10s ease-in-out infinite 3s'
        }} />

        {/* Left Column */}
        <div className="ah-left">
          {/* Large Watermark Numeral */}
          <div className="ah-watermark-num">01</div>

          {/* Breadcrumb */}
          <div className="ah-breadcrumb">
            <span style={{ color: 'var(--ink-mid)', textDecoration: 'none' }}>Home</span>
            <span className="sep" style={{ color: 'var(--gold)', opacity: '0.4' }}>—</span>
            <span className="current" style={{ color: 'var(--gold)' }}>About Us</span>
          </div>

          {/* Tag */}
          <div className="ah-tag">
            <span className="line" style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
            Our Story & Philosophy
          </div>

          {/* Main Heading */}
          <h1 className="ah-h1">
            <span style={{ overflow: 'hidden', display: 'block' }}>
              <span style={{ display: 'block', transform: 'translateY(0%)', transition: 'transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)' }}>Clarity.</span>
            </span>
            <span style={{ overflow: 'hidden', display: 'block' }}>
              <span style={{ display: 'block', transform: 'translateY(0%)', transition: 'transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '0.12s' }}>Discipline.</span>
            </span>
            <span style={{ overflow: 'hidden', display: 'block' }}>
              <span style={{ display: 'block', transform: 'translateY(0%)', transition: 'transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '0.24s' }}>
                <em style={{ fontStyle: 'italic', color: 'var(--orange)', fontWeight: '300' }}>Long-Term</em>
              </span>
            </span>
            <span style={{ overflow: 'hidden', display: 'block' }}>
              <span style={{ display: 'block', transform: 'translateY(0%)', transition: 'transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)', transitionDelay: '0.36s' }}>Trust.</span>
            </span>
          </h1>

          {/* Tagline */}
          <p className="ah-tagline reveal d2 premium-text">
            <span style={{
              display: 'inline-block', transform: 'translateY(100%)', opacity: '0',
              animation: 'fadeInUpText 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.8s forwards'
            }}>
              Managing money should not feel complicated.
            </span>
          </p>

          {/* Intro */}
          <p className="ah-intro reveal d3 premium-text">
            <span style={{
              display: 'inline-block', transform: 'translateY(100%)', opacity: '0',
              animation: 'fadeInUpText 1.2s cubic-bezier(0.22, 1, 0.36, 1) 1.2s forwards'
            }}>
              NVS Wealth was built on a simple belief — managing money should feel clear, purposeful, and aligned with real life goals. We work with individuals and families who want more than just investment advice. They want a partner who stays with them through every market cycle, every milestone, and every decision that matters.
            </span>
          </p>

          {/* Buttons */}
          <div className="ah-btns reveal d4 premium-buttons">
            <Link href="/services">
              <button className="btn-primary premium-btn" style={{
                position: 'relative', overflow: 'hidden', background: 'var(--gold)', color: '#FAFAF8',
                padding: '16px 36px', fontSize: '13px', border: 'none', borderRadius: '1px', cursor: 'pointer',
                letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: '700',
                fontFamily: "'Outfit', sans-serif", transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                boxShadow: '0 8px 25px rgba(160,120,48,0.25), 0 0 50px rgba(160,120,48,0.15)',
                transform: 'translateY(0) scale(1)',
                animation: 'buttonEntrance 1s cubic-bezier(0.22, 1, 0.36, 1) 1.6s forwards'
              }}>
                <span style={{ position: 'relative', zIndex: '2' }}>Our Approach</span>
                <span className="btn-shine" style={{
                  position: 'absolute', top: '0', left: '-100%', width: '100%', height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                  transition: 'left 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
                }} />
                <span className="btn-glow" style={{
                  position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)',
                  opacity: '0', transition: 'opacity 0.5s ease'
                }} />
              </button>
            </Link>
            <Link href="/contact">
              <button className="btn-ghost premium-btn" style={{
                position: 'relative', overflow: 'hidden', background: 'transparent', color: 'var(--ink)',
                padding: '18px 42px', fontSize: '14px', border: '2px solid rgba(28,26,20,0.3)', borderRadius: '2px',
                cursor: 'pointer', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: '500',
                fontFamily: "'Outfit', sans-serif", transition: 'all 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                transform: 'translateY(0) scale(1)',
                animation: 'buttonEntrance 1s cubic-bezier(0.22, 1, 0.36, 1) 1.8s forwards'
              }}>
                <span style={{ position: 'relative', zIndex: '2' }}>Meet Director</span>
                <span className="btn-border-glow" style={{
                  position: 'absolute', top: '0', left: '0', right: '0', bottom: '0',
                  border: '2px solid transparent', borderRadius: '2px',
                  background: 'linear-gradient(45deg, var(--gold), transparent, var(--gold), transparent, var(--gold))',
                  backgroundClip: 'padding-box', WebkitBackgroundClip: 'padding-box',
                  opacity: '0', transition: 'opacity 0.5s ease'
                }} />
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="ah-right">
          {/* Premium Background Image */}
          <div className="ah-bg-image" style={{
            position: 'absolute', top: '0', left: '0', right: '0', bottom: '0',
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1682309799578-6e685bacd4e1?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            backgroundSize: 'cover', backgroundPosition: '25% center',
            opacity: '0.15', filter: 'grayscale(30%) sepia(20%)', mixBlendMode: 'multiply'
          }} />
          <div className="ah-bg-overlay" style={{
            position: 'absolute', top: '0', left: '0', right: '0', bottom: '0',
            background: 'linear-gradient(135deg, rgba(250,243,225,0.6) 0%, rgba(250,243,225,0.3) 50%, rgba(160,120,48,0.1) 100%)'
          }} />

          {/* Orbital Rings */}
          <div className="ah-rings" style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)', pointerEvents: 'none'
          }}>
            <div className="ah-ring" style={{
              position: 'absolute', borderRadius: '50%', border: '1px solid rgba(160,120,48,0.12)',
              top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: '300px', height: '300px', animation: 'ahSpin 50s linear infinite'
            }}>
              <div className="ah-ring-dot" style={{
                position: 'absolute', top: '0', left: '50%',
                transform: 'translateX(-50%) translateY(-50%)', width: '5px', height: '5px',
                borderRadius: '50%', background: 'var(--gold)', boxShadow: '0 0 12px var(--gold)'
              }} />
            </div>
            <div className="ah-ring" style={{
              position: 'absolute', borderRadius: '50%', border: '1px solid rgba(160,120,48,0.07)',
              top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: '450px', height: '450px', animation: 'ahSpin 80s linear infinite reverse'
            }}>
              <div className="ah-ring-dot" style={{
                position: 'absolute', top: '0', left: '50%',
                transform: 'translateX(-50%) translateY(-50%)', width: '5px', height: '5px',
                borderRadius: '50%', background: 'var(--gold)', boxShadow: '0 0 12px var(--gold)'
              }} />
            </div>
            <div className="ah-ring" style={{
              position: 'absolute', borderRadius: '50%', border: '1px solid rgba(160,120,48,0.04)',
              top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              width: '600px', height: '600px', animation: 'ahSpin 110s linear infinite'
            }} />
          </div>

          {/* Pillars */}
          <div className="ah-pillars">
            {/* Pillar 1 */}
            <div
              className="ah-pillar reveal d1 premium-pillar"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold)';
                e.currentTarget.style.background = 'rgba(250,250,248,1)';
                e.currentTarget.style.transform = 'translateX(15px) translateY(-5px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 25px 80px rgba(160,120,48,0.25), 0 15px 30px rgba(0,0,0,0.15)';
                const num = e.currentTarget.querySelector('.ah-pillar-num') as HTMLElement;
                const title = e.currentTarget.querySelector('.ah-pillar-title') as HTMLElement;
                const after = e.currentTarget.querySelector('.pillar-hover-line') as HTMLElement;
                const desc = e.currentTarget.querySelector('.ah-pillar-desc') as HTMLElement;
                if (num) { num.style.opacity = '1'; num.style.color = 'var(--orange)'; num.style.transform = 'scale(1.2)'; }
                if (title) { title.style.color = 'var(--gold)'; title.style.transform = 'translateY(-2px)'; }
                if (after) { after.style.transform = 'scaleY(1)'; after.style.height = '3px'; }
                if (desc) { desc.style.color = 'var(--ink)'; desc.style.transform = 'translateY(-2px)'; }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--divider)';
                e.currentTarget.style.background = 'rgba(250,250,248,0.9)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.05)';
                const num = e.currentTarget.querySelector('.ah-pillar-num') as HTMLElement;
                const title = e.currentTarget.querySelector('.ah-pillar-title') as HTMLElement;
                const after = e.currentTarget.querySelector('.pillar-hover-line') as HTMLElement;
                const desc = e.currentTarget.querySelector('.ah-pillar-desc') as HTMLElement;
                if (num) { num.style.opacity = '0.6'; num.style.color = 'var(--gold)'; num.style.transform = 'scale(1)'; }
                if (title) { title.style.color = 'var(--ink)'; title.style.transform = 'translateY(0)'; }
                if (after) { after.style.transform = 'scaleY(0)'; after.style.height = '2px'; }
                if (desc) { desc.style.color = 'var(--ink-mid)'; desc.style.transform = 'translateY(0)'; }
              }}
            >
              <div className="pillar-hover-line" />
              <span className="ah-pillar-num">01 — Pillar</span>
              <div className="ah-pillar-title">Clarity</div>
              <div className="ah-pillar-desc">Every decision, explained simply. No jargon, no confusion - just clear direction aligned with your life.</div>
            </div>

            {/* Pillar 2 */}
            <div
              className="ah-pillar reveal d2"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold)';
                e.currentTarget.style.background = 'rgba(250,250,248,0.98)';
                e.currentTarget.style.transform = 'translateX(12px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(160,120,48,0.15), 0 8px 20px rgba(0,0,0,0.08)';
                const num = e.currentTarget.querySelector('.ah-pillar-num') as HTMLElement;
                const title = e.currentTarget.querySelector('.ah-pillar-title') as HTMLElement;
                const after = e.currentTarget.querySelector('.pillar-hover-line') as HTMLElement;
                const desc = e.currentTarget.querySelector('.ah-pillar-desc') as HTMLElement;
                if (num) { num.style.opacity = '1'; num.style.color = 'var(--orange)'; }
                if (title) title.style.color = 'var(--gold)';
                if (after) after.style.transform = 'scaleY(1)';
                if (desc) desc.style.color = 'var(--ink)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--divider)';
                e.currentTarget.style.background = 'rgba(250,250,248,0.85)';
                e.currentTarget.style.transform = 'translateX(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                const num = e.currentTarget.querySelector('.ah-pillar-num') as HTMLElement;
                const title = e.currentTarget.querySelector('.ah-pillar-title') as HTMLElement;
                const after = e.currentTarget.querySelector('.pillar-hover-line') as HTMLElement;
                const desc = e.currentTarget.querySelector('.ah-pillar-desc') as HTMLElement;
                if (num) { num.style.opacity = '0.6'; num.style.color = 'var(--gold)'; }
                if (title) title.style.color = 'var(--ink)';
                if (after) after.style.transform = 'scaleY(0)';
                if (desc) desc.style.color = 'var(--ink-mid)';
              }}
            >
              <div className="pillar-hover-line" />
              <span className="ah-pillar-num">02 — Pillar</span>
              <div className="ah-pillar-title">Discipline</div>
              <div className="ah-pillar-desc">We build financial systems designed to stay steady through market cycles, not react to them.</div>
            </div>

            {/* Pillar 3 */}
            <div
              className="ah-pillar reveal d3"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold)';
                e.currentTarget.style.background = 'rgba(250,250,248,0.98)';
                e.currentTarget.style.transform = 'translateX(12px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(160,120,48,0.15), 0 8px 20px rgba(0,0,0,0.08)';
                const num = e.currentTarget.querySelector('.ah-pillar-num') as HTMLElement;
                const title = e.currentTarget.querySelector('.ah-pillar-title') as HTMLElement;
                const after = e.currentTarget.querySelector('.pillar-hover-line') as HTMLElement;
                const desc = e.currentTarget.querySelector('.ah-pillar-desc') as HTMLElement;
                if (num) { num.style.opacity = '1'; num.style.color = 'var(--orange)'; }
                if (title) title.style.color = 'var(--gold)';
                if (after) after.style.transform = 'scaleY(1)';
                if (desc) desc.style.color = 'var(--ink)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--divider)';
                e.currentTarget.style.background = 'rgba(250,250,248,0.85)';
                e.currentTarget.style.transform = 'translateX(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                const num = e.currentTarget.querySelector('.ah-pillar-num') as HTMLElement;
                const title = e.currentTarget.querySelector('.ah-pillar-title') as HTMLElement;
                const after = e.currentTarget.querySelector('.pillar-hover-line') as HTMLElement;
                const desc = e.currentTarget.querySelector('.ah-pillar-desc') as HTMLElement;
                if (num) { num.style.opacity = '0.6'; num.style.color = 'var(--gold)'; }
                if (title) title.style.color = 'var(--ink)';
                if (after) after.style.transform = 'scaleY(0)';
                if (desc) desc.style.color = 'var(--ink-mid)';
              }}
            >
              <div className="pillar-hover-line" />
              <span className="ah-pillar-num">03 — Pillar</span>
              <div className="ah-pillar-title">Long-Term Trust</div>
              <div className="ah-pillar-desc">We are not here for transactions. We are here as your long-term financial partner - through every stage.</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="ah-scroll">
          <div className="ah-scroll-bar">
            <div className="ah-scroll-fill" />
          </div>
          Scroll to explore
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-watermark">Story</div>
        <div className="story-header">
          <div className="story-header-left">
            <div className="section-eyebrow">
              <span className="line" style={{ width: '28px', height: '1px', background: 'var(--gold)' }} />
              Our Story
            </div>
            <h2 className="section-h2">
              18 Years of<br />
              <em style={{ fontStyle: 'italic', color: 'var(--orange)', fontWeight: '300' }}>Real Experience</em>
            </h2>
          </div>
          <div className="story-header-right">
            <div className="story-insight">
              Most people don't struggle because they don't earn enough. They struggle because <strong style={{ color: 'var(--gold)', fontStyle: 'normal', fontWeight: '600' }}>their money doesn't have a clear structure.</strong>
            </div>
            <p className="story-body">
              With over 18 years of experience across leading financial institutions, our journey has been shaped by real client interactions across different stages of wealth creation. One pattern became very clear - and that insight led to the creation of NVS Wealth in 2017.
            </p>
            <p className="story-body">
              The goal was simple: move away from product-driven conversations and focus entirely on goal-based, long-term financial planning.
            </p>
          </div>
        </div>

        {/* Timeline — updated data */}
        <div className="story-timeline">
          {[
            {
              year: '2007',
              title: 'The Foundation Years',
              body: 'Started as Team Leader at Serco, managing Tata-AIG and HSBC bank operations — building discipline in institutional processes from the ground up.',
              pills: ['Serco', 'Team Leader', 'Tata AIG', 'HSBC']
            },
            {
              year: '2010-2016',
              title: 'Expertise & The Turning Point',
              body: 'Joined Aegon Life as Relationship Manager, developing deep understanding of client needs in life insurance advisory across HNI and mass affluent segments. Later expanded into private wealth management at HDFC Bank, observing a persistent gap: clients with good incomes but fragmented, purposeless financial structures. The conviction to change this grew stronger.',
              pills: ['Aegon Life', 'Relationship Manager', 'HDFC Bank', 'Wealth Manager', 'ICICI Prudential', 'ICICI Bank', 'Private Wealth']
            },
            {
              year: '2017',
              title: 'NVS Wealth Born',
              body: 'Founded with a single mission — goal-based, long-term financial clarity. Built around trust, not transactions. Today serving 500+ families across India.',
              pills: ['Founder & CEO', '500+ Families', 'Pan India']
            },
          ].map((era, i) => (
            <div
              key={era.year}
              className="story-era"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg3)';
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.08), 0 10px 20px rgba(160,120,48,0.1)';
                e.currentTarget.style.zIndex = '10';
                const year = e.currentTarget.querySelector('.era-year') as HTMLElement;
                const title = e.currentTarget.querySelector('.era-title') as HTMLElement;
                const body = e.currentTarget.querySelector('.era-body') as HTMLElement;
                const pills = e.currentTarget.querySelectorAll('.era-pill') as NodeListOf<HTMLElement>;
                if (year) year.style.color = 'rgba(160,120,48,0.45)';
                if (title) { title.style.color = 'var(--orange)'; title.style.transform = 'translateX(4px)'; }
                if (body) body.style.color = 'var(--ink)';
                pills.forEach(pill => { pill.style.borderColor = 'var(--orange)'; pill.style.color = 'var(--orange)'; pill.style.background = 'rgba(212,83,10,0.08)'; pill.style.transform = 'scale(1.05)'; });
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.zIndex = '1';
                const year = e.currentTarget.querySelector('.era-year') as HTMLElement;
                const title = e.currentTarget.querySelector('.era-title') as HTMLElement;
                const body = e.currentTarget.querySelector('.era-body') as HTMLElement;
                const pills = e.currentTarget.querySelectorAll('.era-pill') as NodeListOf<HTMLElement>;
                if (year) year.style.color = 'rgba(160,120,48,0.15)';
                if (title) { title.style.color = 'var(--ink)'; title.style.transform = 'translateX(0)'; }
                if (body) body.style.color = 'var(--ink-dim)';
                pills.forEach(pill => { pill.style.borderColor = 'var(--divider-bright)'; pill.style.color = 'var(--ink-mid)'; pill.style.background = 'transparent'; pill.style.transform = 'scale(1)'; });
              }}
            >
              <span className="era-year">{era.year}</span>
              <div className="era-title">{era.title}</div>
              <p className="era-body">{era.body}</p>
              <div className="era-institution">
                {era.pills.map(pill => <span key={pill} className="era-pill">{pill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Director Message Section */}
      <section className="director-section">
        <div className="director-inner">
          {/* Left Column - Visual */}
          <div className="director-visual">
            <div className="director-portrait" style={{
              position: 'absolute', inset: '0',
              background: `linear-gradient(180deg, transparent 30%, var(--bg3) 100%), linear-gradient(135deg, rgba(160,120,48,0.06) 0%, transparent 60%)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }} />
            <div className="director-avatar-wrap">
              <div className="director-avatar">N</div>
            </div>
            <div className="director-name-block">
              <div className="director-name">Nitesh Tara</div>
              <div className="director-title-text">Founder & CEO <br /> NVS Wealth</div>
              <div className="director-credentials">
                {[
                  '18+ Years Financial Advisory',
                  'Serco · Aegon Life · HDFC Bank · ICICI Pru',
                  'AMFI Registered Distributor',
                  '500+ Families Guided',
                ].map(cred => (
                  <div key={cred} className="cred-item">
                    <span className="cred-dot" />
                    {cred}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Message */}
          <div className="director-message">
            <div className="section-eyebrow">
              <span className="line" style={{ width: '28px', height: '1px', background: 'var(--gold)' }} />
              A Message from CEO
            </div>
            <span className="dir-quote-open">&ldquo;</span>
            <p className="dir-message-text">
              Over 18 years in financial services taught me one fundamental truth:<br />
              <strong style={{ fontStyle: 'normal', color: 'var(--gold)', fontWeight: '600' }}>
                wealth is not built through products — it is built through purpose.
              </strong>
            </p>
            <p className="dir-message-body">I have sat across the table with thousands of clients — business owners, salaried professionals, retirees, young families. And regardless of their income or background, the ones who truly built wealth were not the ones who picked the best stocks or chased the highest returns.</p>
            <p className="dir-message-body">They were the ones who had <em style={{ fontStyle: 'italic', color: 'var(--orange)' }}>clarity</em>. They knew what their money was working toward. They had a structure that held steady when markets moved and life changed.</p>
            <p className="dir-message-body">That is what NVS Wealth is built around. Not transactions. Not short-term movement. But long-term, disciplined, goal-aligned financial thinking — delivered with honesty and without jargon.</p>
            <p className="dir-message-body">When your money has direction, everything feels calmer. And calm is where good decisions are made.</p>
            <div className="dir-signature">
              <div className="dir-sig-line" />
              <div>
                <div className="dir-sig-name">Nitesh Tara</div>
                <div className="dir-sig-title">Founder & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs Section */}
      <section className="beliefs-section">
        <div className="beliefs-watermark">Belief</div>
        <div className="beliefs-header">
          <div>
            <div className="section-eyebrow">
              <span className="line" style={{ width: '28px', height: '1px', background: 'var(--gold)' }} />
              What We Believe
            </div>
            <h2 className="section-h2">
              Our Philosophy,<br />
              <em style={{ fontStyle: 'italic', color: 'var(--orange)', fontWeight: '300' }}>Our Foundation</em>
            </h2>
          </div>
          <div className="beliefs-header-right">
            <p className="beliefs-sub">We don't believe in reacting to markets. We believe in building financial systems that stay steady through them. Our philosophy is grounded in three principles that govern every client relationship.</p>
          </div>
        </div>

        <div className="beliefs-grid">
          {[
            {
              num: '01', title: 'Life-First Financial Decisions', principle: 'Keep financial decisions aligned with life goals',
              body: 'Financial decisions must always be anchored to life goals — not market movements, product cycles, or short-term sentiment. We always start with the life you want to build.',
              icon: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" /></>
            },
            {
              num: '02', title: 'Simplicity Over Complexity', principle: 'Avoid unnecessary complexity in planning',
              body: 'The best financial plan is the one you can actually follow. We deliberately avoid unnecessary complexity — because clarity of structure leads to consistency of behavior.',
              icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            },
            {
              num: '03', title: 'Discipline Over Movement', principle: 'Long-term discipline over short-term movement',
              body: 'Wealth, for us, is not about activity. It is about direction. Long-term discipline — staying the course when emotions fluctuate — is what separates lasting wealth from temporary gains.',
              icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            },
          ].map((belief) => (
            <div
              key={belief.num}
              className="belief-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg3)';
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.1), 0 10px 30px rgba(160,120,48,0.1)';
                const num = e.currentTarget.querySelector('.belief-num') as HTMLElement;
                const title = e.currentTarget.querySelector('.belief-title') as HTMLElement;
                const body = e.currentTarget.querySelector('.belief-body') as HTMLElement;
                const iconWrap = e.currentTarget.querySelector('.belief-icon-wrap') as HTMLElement;
                const ico = e.currentTarget.querySelector('.ico') as HTMLElement;
                if (num) num.style.color = 'rgba(160,120,48,0.15)';
                if (title) { title.style.color = 'var(--gold)'; title.style.transform = 'translateX(4px)'; }
                if (body) body.style.color = 'var(--ink)';
                if (iconWrap) { iconWrap.style.borderColor = 'var(--gold)'; iconWrap.style.background = 'rgba(160,120,48,0.1)'; iconWrap.style.transform = 'scale(1.1) rotate(5deg)'; }
                if (ico) ico.style.stroke = 'var(--orange)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg2)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                const num = e.currentTarget.querySelector('.belief-num') as HTMLElement;
                const title = e.currentTarget.querySelector('.belief-title') as HTMLElement;
                const body = e.currentTarget.querySelector('.belief-body') as HTMLElement;
                const iconWrap = e.currentTarget.querySelector('.belief-icon-wrap') as HTMLElement;
                const ico = e.currentTarget.querySelector('.ico') as HTMLElement;
                if (num) num.style.color = 'rgba(160,120,48,0.06)';
                if (title) { title.style.color = 'var(--ink)'; title.style.transform = 'translateX(0)'; }
                if (body) body.style.color = 'var(--ink-dim)';
                if (iconWrap) { iconWrap.style.borderColor = 'var(--divider)'; iconWrap.style.background = 'transparent'; iconWrap.style.transform = 'scale(1) rotate(0)'; }
                if (ico) ico.style.stroke = 'var(--gold)';
              }}
            >
              <span className="belief-num">{belief.num}</span>
              <div className="belief-icon-wrap">
                <svg className="ico" viewBox="0 0 24 24" style={{ width: '24px', height: '24px', stroke: 'var(--gold)', strokeWidth: '2', fill: 'none' }}>
                  {belief.icon}
                </svg>
              </div>
              <div className="belief-title">{belief.title}</div>
              <p className="belief-body">{belief.body}</p>
              <div className="belief-principle">{belief.principle}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
<section className="process-section">
        {/* Background radial glow */}
        <div style={{
          position: 'absolute', inset: '0',
          background: 'radial-gradient(ellipse at 50% 80%, rgba(160,120,48,0.05) 0%, transparent 65%)',
          pointerEvents: 'none'
        }} />

        {/* Watermark */}
        <div style={{
          position: 'absolute', top: '40px', right: '-20px',
          fontFamily: "'Cormorant', serif", fontSize: '220px', fontWeight: '700',
          color: 'rgba(160,120,48,0.025)', letterSpacing: '-0.05em',
          lineHeight: '1', pointerEvents: 'none', whiteSpace: 'nowrap', userSelect: 'none'
        }}>Process</div>

        {/* Header */}
        <div className="process-header">
          <div>
            <div className="section-eyebrow">
              <span className="line" style={{ width: '28px', height: '1px', background: 'var(--gold)' }} />
              How We Work
            </div>
            <h2 className="section-h2">
              Our Process,<br />
              <em style={{ fontStyle: 'italic', color: 'var(--orange)', fontWeight: '300' }}>Simply Put</em>
            </h2>
          </div>
          <div className="reveal d2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <p style={{ fontSize: '20px', color: 'var(--ink-mid)', lineHeight: '1.9', fontWeight: '300' }}>
              Every client relationship starts with understanding, not products. We take time to understand your goals, responsibilities, and future plans. Based on that, we design a financial structure that is practical, disciplined, and easy to follow.
            </p>
          </div>
        </div>

        {/* Process Cards */}
        <div className="udg-visual" style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr auto 1fr',
          gap: '0',
          alignItems: 'stretch',
          marginBottom: '100px',
          border: '1px solid var(--divider)',
          background: 'var(--divider)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {[
            {
              num: '01',
              word: 'Understand',
              desc: 'Deep listening. Your goals, your life, your responsibilities — we start here, not with products.',
              icon: (
                <svg viewBox="0 0 24 24" style={{ width: '28px', height: '28px', stroke: 'var(--gold)', fill: 'none', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ),
              detail: 'Goals · Life Stage · Responsibilities'
            },
            {
              num: '02',
              word: 'Design',
              desc: 'A structured financial plan built around your life — practical, disciplined, and easy to follow.',
              icon: (
                <svg viewBox="0 0 24 24" style={{ width: '28px', height: '28px', stroke: 'var(--gold)', fill: 'none', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                  <path d="M2 20h20M5 20V10l7-7 7 7v10" /><path d="M9 20v-5h6v5" />
                </svg>
              ),
              detail: 'Structure · Allocation · Timeline'
            },
            {
              num: '03',
              word: 'Guide',
              desc: 'We stay with you — through market shifts, life changes, and every stage of your wealth journey.',
              icon: (
                <svg viewBox="0 0 24 24" style={{ width: '28px', height: '28px', stroke: 'var(--gold)', fill: 'none', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              ),
              detail: 'Reviews · Rebalancing · Long-Term'
            }
          ].map((step, i) => (
            <React.Fragment key={step.num}>
              {/* Card */}
              <div
                key={step.num}
                className={`udg-item reveal d${i + 1}`}
                style={{
                  background: 'var(--bg2)',
                  padding: '64px 48px 56px',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  transition: 'background 0.4s cubic-bezier(0.22,1,0.36,1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg3)';
                  const bar = e.currentTarget.querySelector('.udg-top-bar') as HTMLElement;
                  const num = e.currentTarget.querySelector('.udg-num') as HTMLElement;
                  const word = e.currentTarget.querySelector('.udg-word') as HTMLElement;
                  const iconWrap = e.currentTarget.querySelector('.udg-icon-wrap') as HTMLElement;
                  const detail = e.currentTarget.querySelector('.udg-detail') as HTMLElement;
                  if (bar) bar.style.transform = 'scaleX(1)';
                  if (num) { num.style.color = 'rgba(160,120,48,0.35)'; num.style.transform = 'translateY(-4px)'; }
                  if (word) { word.style.color = 'var(--orange)'; }
                  if (iconWrap) { iconWrap.style.borderColor = 'var(--gold)'; iconWrap.style.background = 'rgba(160,120,48,0.08)'; iconWrap.style.transform = 'scale(1.08)'; }
                  if (detail) detail.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg2)';
                  const bar = e.currentTarget.querySelector('.udg-top-bar') as HTMLElement;
                  const num = e.currentTarget.querySelector('.udg-num') as HTMLElement;
                  const word = e.currentTarget.querySelector('.udg-word') as HTMLElement;
                  const iconWrap = e.currentTarget.querySelector('.udg-icon-wrap') as HTMLElement;
                  const detail = e.currentTarget.querySelector('.udg-detail') as HTMLElement;
                  if (bar) bar.style.transform = 'scaleX(0)';
                  if (num) { num.style.color = 'rgba(160,120,48,0.08)'; num.style.transform = 'translateY(0)'; }
                  if (word) { word.style.color = 'var(--ink)'; }
                  if (iconWrap) { iconWrap.style.borderColor = 'var(--divider)'; iconWrap.style.background = 'transparent'; iconWrap.style.transform = 'scale(1)'; }
                  if (detail) detail.style.opacity = '0';
                }}
              >
                {/* Top accent bar */}
                <div className="udg-top-bar" style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                  background: 'linear-gradient(to right, var(--gold-dark), var(--gold))',
                  transform: 'scaleX(0)', transformOrigin: 'left',
                  transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)'
                }} />

                {/* Step number — large watermark */}
                <div className="udg-num" style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: '100px', fontWeight: '700',
                  color: 'rgba(160,120,48,0.08)', lineHeight: '1',
                  position: 'absolute', top: '20px', right: '28px',
                  transition: 'color 0.4s, transform 0.4s',
                  pointerEvents: 'none', userSelect: 'none'
                }}>{step.num}</div>

                {/* Icon */}
                <div className="udg-icon-wrap" style={{
                  width: '56px', height: '56px',
                  border: '1px solid var(--divider)', borderRadius: '2px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '28px',
                  transition: 'border-color 0.3s, background 0.3s, transform 0.4s',
                  position: 'relative', zIndex: 1
                }}>
                  {step.icon}
                </div>

                {/* Step label */}
                <div style={{
                  fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: 'var(--gold)', fontWeight: '500', marginBottom: '12px',
                  position: 'relative', zIndex: 1
                }}>Step {step.num}</div>

                {/* Word */}
                <div className="udg-word" style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: '52px', fontWeight: '600',
                  color: 'var(--ink)', marginBottom: '16px',
                  transition: 'color 0.3s', lineHeight: '1.1',
                  position: 'relative', zIndex: 1
                }}>{step.word}</div>

                {/* Divider */}
                <div style={{
                  width: '36px', height: '1px',
                  background: 'var(--gold)', opacity: '0.4',
                  marginBottom: '20px'
                }} />

                {/* Description */}
                <p className="udg-desc" style={{
                  fontSize: '18px', color: 'var(--ink-dim)',
                  lineHeight: '1.8', fontWeight: '300',
                  position: 'relative', zIndex: 1, flex: 1
                }}>{step.desc}</p>

                {/* Detail tags — appear on hover */}
                <div className="udg-detail" style={{
                  marginTop: '28px', opacity: '0',
                  transition: 'opacity 0.4s',
                  fontSize: '12px', letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: 'var(--gold)',
                  fontWeight: '500', position: 'relative', zIndex: 1
                }}>{step.detail}</div>
              </div>

              {/* Arrow between cards */}
              {i < 2 && (
                <div key={`arrow-${i}`} className="udg-arrow reveal" style={{
                  background: 'var(--bg)',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  padding: '0 4px', gap: '8px', minWidth: '48px'
                }}>
                  <div style={{
                    width: '1px', height: '40px',
                    background: 'linear-gradient(to bottom, transparent, var(--gold))',
                    opacity: '0.3'
                  }} />
                  <span style={{
                    fontSize: '20px', color: 'var(--gold)', opacity: '0.5',
                    fontFamily: 'monospace', lineHeight: 1
                  }}>→</span>
                  <div style={{
                    width: '1px', height: '40px',
                    background: 'linear-gradient(to top, transparent, var(--gold))',
                    opacity: '0.3'
                  }} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Commitment Strip — enhanced */}
        <div className="commitment-strip reveal" style={{
          background: 'var(--bg3)',
          border: '1px solid var(--divider)',
          padding: '52px 60px',
          display: 'flex',
          alignItems: 'center',
          gap: '60px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Left accent bar */}
          <div style={{
            position: 'absolute', left: '0', top: '0', bottom: '0', width: '3px',
            background: 'linear-gradient(to bottom, var(--gold-dark), var(--gold), var(--gold-bright))'
          }} />
          {/* Background glow */}
          <div style={{
            position: 'absolute', right: '-60px', top: '50%',
            transform: 'translateY(-50%)',
            width: '400px', height: '400px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(160,120,48,0.06) 0%, transparent 70%)',
            pointerEvents: 'none'
          }} />

          {/* Icon */}
          <div style={{
            width: '56px', height: '56px', flexShrink: 0,
            border: '1px solid var(--divider-bright)', borderRadius: '2px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(160,120,48,0.06)'
          }}>
            <svg viewBox="0 0 24 24" style={{ width: '24px', height: '24px', stroke: 'var(--gold)', fill: 'none', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' }}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>

          <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
            <span className="cs-label" style={{
              fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--gold)', fontWeight: '500', display: 'block', marginBottom: '12px'
            }}>Our Commitment</span>
            <p className="cs-text" style={{
              fontFamily: "'Cormorant', serif",
              fontSize: 'clamp(20px, 1.8vw, 28px)',
              fontStyle: 'italic', color: 'var(--ink)',
              fontWeight: '400', lineHeight: '1.4'
            }}>
              We help you stay consistent when markets change and emotions fluctuate — because{' '}
              <strong style={{ fontStyle: 'normal', color: 'var(--gold)', fontWeight: '600' }}>
                consistency is where wealth is truly built.
              </strong>
            </p>
          </div>
        </div>
      </section>

      <Spectrum />
      <WhyUs />
      <ClosingBelief />
      <FinalCTASection />

      <style jsx>{`
        /* ============================================================
           DESKTOP BASE STYLES (≥1280px)
           ============================================================ */

        .about-hero {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 55% 45%;
        }

        .ah-watermark-num {
          position: absolute;
          bottom: -60px;
          left: -20px;
          font-family: 'Cormorant', serif;
          font-size: 400px;
          font-weight: 700;
          color: rgba(160,120,48,0.025);
          line-height: 1;
          pointer-events: none;
          z-index: 1;
        }

        .ah-left {
          padding: 140px 80px 80px 72px;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-right: 1px solid var(--divider);
          background: #F8F8F5;
        }

        .ah-breadcrumb {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 20px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--ink-mid);
          font-weight: 400;
          margin-bottom: 56px;
        }

        .ah-tag {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-size: 20px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 500;
          margin-bottom: 36px;
        }

        .ah-h1 {
          font-family: 'Cormorant', serif;
          font-size: clamp(60px, 6vw, 92px);
          font-weight: 600;
          line-height: 0.98;
          letter-spacing: -0.025em;
          margin-bottom: 16px;
          overflow: hidden;
          color: var(--ink);
        }

        .ah-tagline {
          font-family: 'Cormorant', serif;
          font-size: 24px;
          font-weight: 400;
          font-style: italic;
          color: var(--ink-mid);
          letter-spacing: 0.04em;
          margin-bottom: 40px;
          padding-left: 20px;
          border-left: 2px solid var(--gold);
          position: relative;
          overflow: hidden;
        }

        .ah-intro {
          font-size: 18px;
          line-height: 1.9;
          color: var(--ink-mid);
          max-width: 480px;
          font-weight: 300;
          margin-bottom: 56px;
          position: relative;
          overflow: hidden;
        }

        .ah-btns {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        .ah-right {
          position: relative;
          z-index: 2;
          background: var(--bg2);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 80px 60px;
          overflow: hidden;
        }

        .ah-pillars {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 1px;
          width: 100%;
          max-width: 360px;
        }

        .ah-pillar {
          background: rgba(250,250,248,0.9);
          border: 1px solid var(--divider);
          padding: 36px 40px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(25px);
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          cursor: pointer;
          transform: translateY(0) scale(1);
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          animation: pillarEntrance 1s cubic-bezier(0.22, 1, 0.36, 1) 0.4s forwards;
        }

        .pillar-hover-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--gold-dark), var(--gold));
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .ah-pillar-num {
          font-family: 'Cormorant', serif;
          font-size: 15px;
          font-weight: 500;
          color: var(--gold);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 10px;
          opacity: 0.6;
          display: block;
          transition: opacity 0.3s;
        }

        .ah-pillar-title {
          font-family: 'Cormorant', serif;
          font-size: 35px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 6px;
          transition: color 0.3s;
        }

        .ah-pillar-desc {
          font-size: 17px;
          color: var(--ink-mid);
          line-height: 1.75;
          font-weight: 300;
        }

        .ah-scroll {
          position: absolute;
          bottom: 48px;
          left: 72px;
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 9px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--ink-mid);
          font-weight: 500;
          opacity: 0;
          animation: fadeUp 0.6s 2.4s forwards;
        }

        .ah-scroll-bar {
          width: 48px;
          height: 1px;
          background: var(--divider-bright);
          position: relative;
          overflow: hidden;
        }

        .ah-scroll-fill {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 30%;
          background: var(--gold);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        /* ── Story Section ── */
        .story-section {
          background: var(--bg);
          padding: 160px 0 0;
          position: relative;
          overflow: hidden;
        }

        .story-watermark {
          position: absolute;
          top: 40px;
          right: -40px;
          font-family: 'Cormorant', serif;
          font-size: 260px;
          font-weight: 700;
          color: rgba(160,120,48,0.025);
          letter-spacing: -0.05em;
          line-height: 1;
          pointer-events: none;
          white-space: nowrap;
          user-select: none;
        }

        .story-header {
          padding: 0 72px;
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: start;
          margin-bottom: 100px;
        }

        .section-eyebrow {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 20px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 500;
          margin-bottom: 20px;
        }

        .section-h2 {
          font-family: 'Cormorant', serif;
          font-size: clamp(44px, 4.5vw, 68px);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          color: var(--ink);
        }

        .story-insight {
          font-family: 'Cormorant', serif;
          font-size: clamp(28px, 2.6vw, 42px);
          font-style: italic;
          font-weight: 400;
          line-height: 1.45;
          color: var(--ink);
          border-left: 2px solid var(--gold);
          padding-left: 36px;
          margin-bottom: 32px;
        }

        .story-body {
          font-size: 20px;
          color: var(--ink-mid);
          line-height: 1.9;
          font-weight: 300;
          margin-bottom: 20px;
        }

        .story-timeline {
          border-top: 1px solid var(--divider);
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          position: relative;
        }

        .story-era {
          padding: 60px 48px 80px;
          border-right: 1px solid var(--divider);
          position: relative;
          transition: background 0.4s, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s;
          cursor: pointer;
        }

        .story-era:last-child { border-right: none; }

        .era-year {
          font-family: 'Cormorant', serif;
          font-size: 60px;
          font-weight: 700;
          color: rgba(160,120,48,0.15);
          line-height: 1;
          margin-bottom: 12px;
          display: block;
          transition: color 0.4s;
        }

        .era-title {
          font-family: 'Cormorant', serif;
          font-size: 30px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 14px;
          letter-spacing: 0.01em;
          transition: color 0.3s, transform 0.3s;
        }

        .era-body {
          font-size: 18px;
          color: var(--ink-dim);
          line-height: 1.8;
          font-weight: 300;
          transition: color 0.3s;
        }

        .era-institution {
          display: inline-flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 20px;
        }

        .era-pill {
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          border: 1px solid var(--divider-bright);
          padding: 5px 12px;
          color: var(--ink-mid);
          font-weight: 500;
          border-radius: 1px;
          transition: border-color 0.3s, color 0.3s, background 0.3s, transform 0.3s;
        }

        /* ── Director Section ── */
        .director-section {
          background: var(--bg2);
          position: relative;
          overflow: hidden;
        }

        .director-inner {
          display: grid;
          grid-template-columns: 400px 1fr;
          min-height: 700px;
          position: relative;
          z-index: 2;
        }

        .director-visual {
          background: var(--bg3);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 80px 60px;
          border-right: 1px solid var(--divider);
        }

        .director-avatar-wrap {
          position: absolute;
          top: 50px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
        }

        .director-avatar {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--bg3), var(--bg2));
          border: 1px solid var(--divider-bright);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant', serif;
          font-size: 64px;
          font-weight: 700;
          color: var(--gold);
          position: relative;
          box-shadow: 0 0 60px rgba(160,120,48,0.15);
        }

        .director-name-block {
          position: relative;
          z-index: 2;
          text-align: center;
          margin-top: 40px;
        }

        .director-name {
          font-family: 'Cormorant', serif;
          font-size: 40px;
          font-weight: 600;
          color: var(--ink);
          letter-spacing: 0.01em;
          margin-bottom: 6px;
        }

        .director-title-text {
          font-size: 15px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--ink-mid);
          font-weight: 500;
          margin-bottom: 20px;
        }

        .director-credentials {
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: left;
        }

        .cred-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          color: var(--ink-dim);
          font-weight: 300;
        }

        .cred-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--gold);
          flex-shrink: 0;
        }

        .director-message {
          padding: 90px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .dir-quote-open {
          font-family: 'Cormorant', serif;
          font-size: 120px;
          color: var(--gold);
          line-height: 0.6;
          display: block;
          font-weight: 700;
          float: left;
          margin-right: 4px;
        }

        .dir-message-text {
          font-family: 'Cormorant', serif;
          font-size: clamp(22px, 2.2vw, 40px);
          font-style: italic;
          font-weight: 400;
          line-height: 1.45;
          color: var(--ink);
          letter-spacing: -0.01em;
          margin-bottom: 40px;
        }

        .dir-message-body {
          font-size: 20px;
          color: var(--ink-mid);
          line-height: 1.9;
          font-weight: 300;
          margin-bottom: 20px;
        }

        .dir-signature {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-top: 52px;
          padding-top: 40px;
          border-top: 1px solid var(--divider);
        }

        .dir-sig-line {
          width: 80px;
          height: 1px;
          background: var(--gold);
          opacity: 0.4;
        }

        .dir-sig-name {
          font-family: 'Cormorant', serif;
          font-size: 32px;
          font-weight: 600;
          color: var(--ink);
          letter-spacing: 0.02em;
        }

        .dir-sig-title {
          font-size: 15px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 500;
          margin-top: 4px;
        }

        /* ── Beliefs Section ── */
        .beliefs-section {
          background: var(--bg);
          padding: 160px 72px;
          position: relative;
          overflow: hidden;
        }

        .beliefs-watermark {
          position: absolute;
          top: 60px;
          left: -30px;
          font-family: 'Cormorant', serif;
          font-size: 300px;
          font-weight: 700;
          color: rgba(160,120,48,0.025);
          letter-spacing: -0.05em;
          line-height: 1;
          pointer-events: none;
          white-space: nowrap;
          user-select: none;
        }

        .beliefs-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
          margin-bottom: 100px;
        }

        .beliefs-header-right {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .beliefs-sub {
          font-size: 20px;
          color: var(--ink-mid);
          line-height: 1.9;
          font-weight: 300;
          margin-bottom: 20px;
        }

        .beliefs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--divider);
        }

        .belief-card {
          background: var(--bg2);
          padding: 64px 52px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: background 0.4s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s;
        }

        .belief-num {
          font-family: 'Cormorant', serif;
          font-size: 80px;
          font-weight: 700;
          color: rgba(160,120,48,0.06);
          line-height: 1;
          display: block;
          margin-bottom: 16px;
          transition: color 0.4s;
          pointer-events: none;
        }

        .belief-icon-wrap {
          width: 56px;
          height: 56px;
          border: 1px solid var(--divider);
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
          position: relative;
          z-index: 1;
        }

        .belief-title {
          font-family: 'Cormorant', serif;
          font-size: 35px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 16px;
          transition: color 0.3s, transform 0.3s;
          position: relative;
          z-index: 1;
        }

        .belief-body {
          font-size: 18px;
          color: var(--ink-dim);
          line-height: 1.85;
          font-weight: 300;
          position: relative;
          z-index: 1;
          margin-bottom: 28px;
          transition: color 0.3s;
        }

        .belief-principle {
          font-size: 15px;
          letter-spacing: 0.1em;
          color: var(--gold);
          font-weight: 500;
          border-top: 1px solid var(--divider);
          padding-top: 12px;
        }

        /* ── Process Section ── */
        .process-section {
          background: var(--bg2);
          padding: 160px 72px;
          position: relative;
          overflow: hidden;
        }

        .process-header {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: end;
          margin-bottom: 100px;
        }

        .udg-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin-bottom: 100px;
          position: relative;
        }

        .udg-item {
          flex: 1;
          text-align: center;
          padding: 60px 40px;
          cursor: pointer;
          transition: background 0.4s;
        }

        .udg-num {
          font-family: 'Cormorant', serif;
          font-size: 120px;
          font-weight: 700;
          color: rgba(160,120,48,0.06);
          line-height: 1;
          transition: color 0.4s;
          pointer-events: none;
          display: block;
        }

        .udg-word {
          font-family: 'Cormorant', serif;
          font-size: 55px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 14px;
          transition: color 0.3s;
        }

        .udg-desc {
          font-size: 20px;
          color: var(--ink-dim);
          line-height: 1.8;
          font-weight: 300;
          position: relative;
          z-index: 1;
        }

        .udg-arrow {
          font-size: 32px;
          color: var(--gold);
          opacity: 0.3;
          transition: opacity 0.3s, transform 0.3s;
          align-self: center;
          padding: 0 8px;
          flex-shrink: 0;
        }

        .commitment-strip {
          background: var(--bg3);
          border: 1px solid var(--divider);
          padding: 52px 60px;
          display: flex;
          align-items: center;
          gap: 60px;
          position: relative;
          overflow: hidden;
        }

        .cs-label {
          font-size: 20px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 500;
          white-space: nowrap;
        }

        .cs-text {
          font-family: 'Cormorant', serif;
          font-size: clamp(20px, 1.8vw, 28px);
          font-style: italic;
          color: var(--ink);
          font-weight: 400;
          line-height: 1.4;
        }

        /* ============================================================
           ANIMATIONS
           ============================================================ */
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUpText {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0%); opacity: 1; }
        }

        @keyframes buttonEntrance {
          0% { transform: translateY(50px) scale(0.8); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        @keyframes pillarEntrance {
          0% { transform: translateY(30px) scale(0.9); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scrollPulse {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(300%); }
        }

        @keyframes ahSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal.d1 { transition-delay: 0.1s; }
        .reveal.d2 { transition-delay: 0.2s; }
        .reveal.d3 { transition-delay: 0.3s; }
        .reveal.d4 { transition-delay: 0.4s; }

        .premium-btn:hover .btn-shine { left: 100%; }
        .premium-btn:hover .btn-glow { opacity: 1; }
        .premium-btn:hover { transform: translateY(-3px) scale(1.05); box-shadow: 0 15px 40px rgba(160,120,48,0.35), 0 0 80px rgba(160,120,48,0.2); }
        .premium-pillar:hover { transform: translateX(20px) translateY(-8px) scale(1.02); box-shadow: 0 30px 100px rgba(160,120,48,0.3), 0 20px 50px rgba(0,0,0,0.15); }
        .premium-pillar:hover .ah-pillar-num { transform: scale(1.3); text-shadow: 0 0 15px var(--orange); }

        /* ============================================================
           LAPTOP (1024px – 1279px)
           ============================================================ */
        @media (max-width: 1279px) and (min-width: 1024px) {

          .ah-left { padding: 120px 56px 72px 56px; }
          .ah-right { padding: 72px 40px; }
          .ah-pillars { max-width: 320px; }
          .ah-pillar { padding: 28px 28px; }
          .ah-pillar-title { font-size: 30px; }
          .ah-pillar-desc { font-size: 15px; }

          .story-header { padding: 0 56px; gap: 60px; }
          .story-era { padding: 48px 32px 64px; }
          .era-title { font-size: 26px; }
          .era-body { font-size: 16px; }

          .director-inner { grid-template-columns: 340px 1fr; }
          .director-visual { padding: 72px 44px; }
          .director-message { padding: 72px 56px; }

          .beliefs-section { padding: 120px 56px; }
          .belief-card { padding: 52px 40px; }
          .belief-title { font-size: 30px; }

          .process-section { padding: 120px 56px; }
          .udg-item { padding: 48px 28px; }
          .udg-word { font-size: 46px; }
          .udg-num { font-size: 96px; }
        }

        /* ============================================================
           TABLET (768px – 1023px)
           ============================================================ */
        @media (max-width: 1023px) and (min-width: 768px) {

          /* Hero */
          .about-hero {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .ah-watermark-num { font-size: 220px; bottom: -30px; left: -10px; }

          .ah-left {
            padding: 120px 48px 60px;
            border-right: none;
            border-bottom: 1px solid var(--divider);
          }

          .ah-breadcrumb { margin-bottom: 36px; font-size: 16px; }
          .ah-tag { font-size: 16px; margin-bottom: 28px; }
          .ah-tagline { font-size: 22px; }
          .ah-intro { font-size: 17px; max-width: 100%; margin-bottom: 44px; }

          .ah-right {
            padding: 60px 48px;
            min-height: 420px;
          }

          .ah-pillars {
            max-width: 100%;
            flex-direction: row;
            gap: 12px;
          }
          .ah-pillar { padding: 24px 20px; flex: 1; min-width: 0; }
          .ah-pillar-title { font-size: 24px; }
          .ah-pillar-desc { font-size: 14px; }

          .ah-scroll { display: none; }
          .ah-rings { display: none; }

          /* Story */
          .story-section { padding: 100px 0 0; }
          .story-header { padding: 0 48px; grid-template-columns: 1fr; gap: 40px; margin-bottom: 60px; }
          .story-watermark { font-size: 160px; }
          .story-insight { font-size: 24px; padding-left: 24px; }
          .story-body { font-size: 18px; }

          .story-timeline { grid-template-columns: repeat(2, 1fr); }
          .story-era { padding: 40px 32px 56px; }
          .story-era:nth-child(2) { border-right: none; }
          .story-era:nth-child(3) { border-top: 1px solid var(--divider); border-right: none; }
          .era-year { font-size: 48px; }
          .era-title { font-size: 24px; }
          .era-body { font-size: 16px; }

          /* Director */
          .director-inner { grid-template-columns: 1fr; min-height: auto; }
          .director-visual {
            padding: 60px 48px;
            border-right: none;
            border-bottom: 1px solid var(--divider);
            min-height: 360px;
          }
          .director-avatar-wrap {
            position: static;
            transform: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 24px;
          }
          .director-name-block { position: static; margin-top: 0; }
          .director-avatar { width: 120px; height: 120px; font-size: 48px; }
          .director-name { font-size: 32px; }
          .director-title-text { font-size: 13px; }
          .cred-item { font-size: 13px; }
          .director-message { padding: 60px 48px; }
          .dir-quote-open { font-size: 80px; }
          .dir-message-body { font-size: 18px; }
          .dir-sig-name { font-size: 26px; }
          .director-credentials { align-items: center; }

          /* Beliefs */
          .beliefs-section { padding: 100px 48px; }
          .beliefs-watermark { font-size: 180px; }
          .beliefs-header { grid-template-columns: 1fr; gap: 32px; margin-bottom: 60px; }
          .beliefs-grid { grid-template-columns: 1fr; }
          .belief-card { padding: 48px 40px; }
          .belief-title { font-size: 28px; }
          .belief-body { font-size: 16px; }

          /* Process */
          .process-section { padding: 100px 48px; }
          .process-header { grid-template-columns: 1fr; gap: 32px; margin-bottom: 60px; }
          .udg-visual { flex-direction: column; gap: 16px; margin-bottom: 60px; }
          .udg-arrow { transform: rotate(90deg); padding: 8px 0; }
          .udg-item { padding: 40px 32px; width: 100%; }
          .udg-num { font-size: 80px; }
          .udg-word { font-size: 42px; }
          .udg-desc { font-size: 18px; }
          .commitment-strip { flex-direction: column; gap: 24px; align-items: flex-start; padding: 40px 48px; }
          .cs-label { white-space: normal; }
        }

        /* ============================================================
           MOBILE (≤767px)
           ============================================================ */
        @media (max-width: 767px) {

          /* Hero */
          .about-hero {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .ah-watermark-num { display: none; }

          .ah-left {
            padding: 100px 24px 48px;
            border-right: none;
            border-bottom: 1px solid var(--divider);
          }

          .ah-breadcrumb {
            font-size: 12px;
            margin-bottom: 28px;
            gap: 8px;
            letter-spacing: 0.15em;
            margin-top: 40px;
          }

          .ah-tag {
            font-size: 12px;
            margin-bottom: 24px;
            letter-spacing: 0.16em;
          }
          .ah-h1 {

            font-size: clamp(44px, 12vw, 64px);
            margin-bottom: 20px;
          }

          .ah-tagline {
            font-size: 18px;
            margin-bottom: 24px;
            padding-left: 14px;
          }

          .ah-intro {
            font-size: 16px;
            max-width: 100%;
            margin-bottom: 36px;
            line-height: 1.8;
          }

          .ah-btns {
            flex-direction: column;
            gap: 12px;
          }

          .ah-right {
            padding: 40px 20px;
            min-height: auto;
          }

          .ah-pillars {
            max-width: 100%;
            flex-direction: column;
            gap: 1px;
          }

          .ah-pillar {
            padding: 24px 20px;
            animation: none;
          }

          .ah-pillar-title { font-size: 28px; }
          .ah-pillar-desc { font-size: 15px; }
          .ah-scroll { display: none; }
          .ah-rings { display: none; }

          /* Story */
          .story-section { padding: 72px 0 0; }
          .story-watermark { font-size: 100px; top: 20px; right: -10px; }

          .story-header {
            padding: 0 24px;
            grid-template-columns: 1fr;
            gap: 28px;
            margin-bottom: 48px;
          }

          .section-eyebrow { font-size: 13px; letter-spacing: 0.18em; }

          .story-insight {
            font-size: 20px;
            padding-left: 16px;
            margin-bottom: 20px;
          }

          .story-body { font-size: 16px; line-height: 1.8; }

          .story-timeline { grid-template-columns: 1fr; }

          .story-era {
            padding: 36px 24px 44px;
            border-right: none;
            border-bottom: 1px solid var(--divider);
          }

          .story-era:last-child { border-bottom: none; }
          .era-year { font-size: 52px; }
          .era-title { font-size: 26px; }
          .era-body { font-size: 16px; }

          /* Director */
          .director-inner {
            grid-template-columns: 1fr;
            min-height: auto;
          }

          .director-visual {
            padding: 48px 24px;
            border-right: none;
            border-bottom: 1px solid var(--divider);
            min-height: auto;
          }

          .director-avatar-wrap {
            position: static;
            transform: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 24px;
          }

          .director-name-block {
            position: static;
            margin-top: 0;
          }

          .director-credentials { align-items: center; }

          .director-avatar { width: 100px; height: 100px; font-size: 42px; }
          .director-name { font-size: 28px; }
          .director-title-text { font-size: 12px; }
          .cred-item { font-size: 13px; }

          .director-message { padding: 40px 24px; }
          .dir-quote-open { font-size: 72px; }
          .dir-message-text { font-size: clamp(20px, 5vw, 28px); }
          .dir-message-body { font-size: 16px; line-height: 1.8; }
          .dir-sig-name { font-size: 24px; }
          .dir-sig-line { width: 48px; }

          /* Beliefs */
          .beliefs-section { padding: 72px 24px; }
          .beliefs-watermark { font-size: 120px; top: 20px; left: -10px; }
          .beliefs-header { grid-template-columns: 1fr; gap: 24px; margin-bottom: 48px; }
          .beliefs-grid { grid-template-columns: 1fr; }
          .belief-card { padding: 36px 24px; }
          .belief-num { font-size: 56px; }
          .belief-title { font-size: 28px; }
          .belief-body { font-size: 16px; }
          .beliefs-sub { font-size: 16px; }

          /* Process */
          .process-section { padding: 72px 24px; }
          .process-header { grid-template-columns: 1fr; gap: 24px; margin-bottom: 48px; }

          .udg-visual {
            flex-direction: column;
            gap: 8px;
            margin-bottom: 48px;
          }

          .udg-arrow {
            transform: rotate(90deg);
            padding: 4px 0;
            font-size: 24px;
          }

          .udg-item { padding: 28px 16px; width: 100%; }
          .udg-num { font-size: 72px; }
          .udg-word { font-size: 36px; }
          .udg-desc { font-size: 16px; }

          .commitment-strip {
            flex-direction: column;
            gap: 16px;
            align-items: flex-start;
            padding: 32px 24px;
          }

          .cs-label { font-size: 14px; letter-spacing: 0.16em; white-space: normal; }
          .cs-text { font-size: 18px; }
        }

        /* ============================================================
           SMALL MOBILE (≤400px)
           ============================================================ */
        @media (max-width: 400px) {
          .ah-left { padding: 90px 16px 40px; }
          .ah-right { padding: 32px 16px; }
          .story-header { padding: 0 16px; }
          .story-era { padding: 28px 16px 36px; }
          .director-visual { padding: 32px 16px; }
          .director-message { padding: 32px 16px; }
          .beliefs-section { padding: 60px 16px; }
          .process-section { padding: 60px 16px; }
          .commitment-strip { padding: 24px 16px; }
          .ah-pillar { padding: 20px 16px; }
          .belief-card { padding: 28px 16px; }
          .udg-item { padding: 24px 12px; }
        }
      `}</style>
    </>
  )
}