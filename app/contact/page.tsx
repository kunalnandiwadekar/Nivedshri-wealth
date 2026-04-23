'use client';

import { useState, useEffect, useCallback } from 'react';
import { JSX } from 'react';
import Layout from '@/components/layout/Layout';

export default function ContactPage() {
  // State for form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    interest: '',
    range: '',
    message: ''
  });
  const [consented, setConsented] = useState(false);
  
  // State for booking
  const [mode, setMode] = useState<'video' | 'phone'>('video');
  const [currentMonth, setCurrentMonth] = useState(3); // April (0-indexed)
  const [currentYear, setCurrentYear] = useState(2026);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [showTimeSection, setShowTimeSection] = useState(false);
  
  // State for success overlay
  const [successOverlay, setSuccessOverlay] = useState({
    show: false,
    message: ''
  });
  
  // State for loader
  const [loaderHidden, setLoaderHidden] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  
  // State for scroll reveal
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const availableSlots = ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM', '3:00 PM', '4:00 PM', '4:30 PM'];
  const bookedSlots = ['10:30 AM', '2:00 PM'];

  // Loader and hero animation
  useEffect(() => {
    const timer = setTimeout(() => setLoaderHidden(true), 2000);
    const heroTimer = setTimeout(() => setHeroVisible(true), 2100);
    return () => {
      clearTimeout(timer);
      clearTimeout(heroTimer);
    };
  }, []);

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
      if (el.id) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isRevealed = (id: string) => revealed.has(id);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id.replace('inp-', '')]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Please fill in your name, email, and mobile number.');
      return;
    }
    setSuccessOverlay({
      show: true,
      message: `Thank you, ${formData.name}. We'll reach out within 24 hours to discuss your goals.`
    });
  };

  const handleBook = () => {
    if (!selectedDay || !selectedSlot) {
      alert('Please select a date and time slot to book your consultation.');
      return;
    }
    
    try {
      setSuccessOverlay({
        show: true,
        message: `Your consultation is booked for ${monthNames[currentMonth]} ${selectedDay} at ${selectedSlot}. You'll receive a confirmation with the meeting link shortly.`
      });
    } catch (error) {
      console.error('Error booking consultation:', error);
      alert('An error occurred while booking. Please try again.');
    }
  };

  const changeMonth = (dir: number) => {
    let newMonth = currentMonth + dir;
    let newYear = currentYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
    setSelectedDay(null);
    setSelectedSlot(null);
    setShowTimeSection(false);
  };

  const renderCalendar = useCallback(() => {
    const days: JSX.Element[] = [];
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const offset = firstDay === 0 ? 6 : firstDay - 1;
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const today = new Date();
    const todayNum = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();

    for (let i = 0; i < offset; i++) {
      days.push(<div key={`empty-${i}`} className="cal-day empty" />);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const isPast = new Date(currentYear, currentMonth, d) < new Date(todayYear, todayMonth, todayNum);
      const isToday = d === todayNum && currentMonth === todayMonth && currentYear === todayYear;
      const isSun = new Date(currentYear, currentMonth, d).getDay() === 0;
      let cls = 'cal-day';
      if (isPast || isSun) cls += ' past';
      else cls += ' available';
      if (isToday) cls += ' today';
      if (selectedDay === d && !isPast && !isSun) cls += ' selected';
      
      days.push(
        <div
          key={d}
          className={cls}
          onClick={() => {
            if (!isPast && !isSun) {
              setSelectedDay(d);
              setSelectedSlot(null);
              setShowTimeSection(true);
            }
          }}
        >
          {d}
        </div>
      );
    }
    return days;
  }, [currentMonth, currentYear, selectedDay]);

  const renderSlots = () => {
    return availableSlots.map((slot) => {
      const isBooked = bookedSlots.includes(slot);
      const isSelected = selectedSlot === slot;
      let cls = 'slot-btn';
      if (isBooked) cls += ' booked';
      if (isSelected) cls += ' selected';
      
      return (
        <button
          key={slot}
          className={cls}
          disabled={isBooked}
          onClick={() => setSelectedSlot(slot)}
        >
          {slot}
        </button>
      );
    });
  };

  return (
    <>
      {/* Custom Loader */}
      <div className={`page-loader ${loaderHidden ? 'hidden' : ''}`} id="loader">
        <div className="loader-logo">Nivedshri <span>Wealth</span></div>
        <div className="loader-bar-wrap"><div className="loader-bar"></div></div>
      </div>

      <Layout 
        loaderTitle="Contact"
        loaderSubtitle="Let's Start Your Financial Journey"
        loaderDuration={1800}
      >
        {/* HERO */}
      <section className="c-hero">
        <div className="c-orb"></div>
        <div className="c-orb2"></div>
        <div className="c-ghost">Connect</div>

        <div className={`c-eyebrow reveal ${isRevealed('hero-eyebrow') ? 'visible' : ''}`} id="hero-eyebrow">
          <span className="line"></span>
          Contact Nivedshri Wealth
        </div>
        <h1 className="c-h1">
          <span className={`li ${heroVisible ? 'visible' : ''}`}>Let&apos;s Build Your</span>
          <span className={`li ${heroVisible ? 'visible' : ''}`} style={{ transitionDelay: '120ms' }}><em>Financial</em> Future</span>
          <span className={`li ${heroVisible ? 'visible' : ''}`} style={{ transitionDelay: '240ms' }}>with <strong>Clarity.</strong></span>
        </h1>
        <p className={`c-sub reveal ${isRevealed('hero-sub') ? 'visible' : ''}`} id="hero-sub">Whether you&apos;re just starting out or restructuring existing wealth — we&apos;re here to help you move forward with structure and purpose.</p>

        <div className={`c-bottom-strip reveal ${isRevealed('hero-strip') ? 'visible' : ''}`} id="hero-strip">
          <div className="c-strip-item">
            <span className="c-strip-label">Response Time</span>
            <span className="c-strip-val">Within 24 Hours</span>
          </div>
          <div className="c-strip-item">
            <span className="c-strip-label">Mode</span>
            <span className="c-strip-val">Digital-First · PAN India</span>
          </div>
          <div className="c-strip-item">
            <span className="c-strip-label">Consultation</span>
            <span className="c-strip-val">30–45 Minute Session</span>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT WRAP */}
      <div className="contact-wrap">

        {/* LEFT: CONTACT FORM */}
        <div className={`contact-col reveal-left ${isRevealed('contact-col-left') ? 'visible' : ''}`} id="contact-col-left">
          <div className="sec-label"><span className="dot"></span>Get in Touch</div>
          <h2 className="sec-heading">Share Your<br/><em>Goals</em> With Us</h2>
          <p className="sec-desc">A few details is all it takes. We&apos;ll reach out to understand your financial aspirations and explore how we can help.</p>

          {/* Nitesh Card */}
          <div className={`nitesh-card reveal ${isRevealed('nitesh-card') ? 'visible' : ''}`} id="nitesh-card">
            <div className="nitesh-avatar"><div className="nitesh-avatar-inner">NT</div></div>
            <div className="nitesh-name">Nitesh Tara</div>
            <div className="nitesh-role">Founder · Mutual Fund Distributor · Wealth Advisor</div>
            <div className="nitesh-divider"></div>
            <div className="nitesh-detail">
              <div className="nitesh-row">
                <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
                <span>Nivedshri Wealth · India</span>
              </div>
              <div className="nitesh-row">
                <svg viewBox="0 0 24 24"><path d="M21 16.92a2 2 0 01-2.18.4 16.3 16.3 0 01-5.08-3.06 16.3 16.3 0 01-3.06-5.08 2 2 0 01.4-2.18l1.26-1.27a1 1 0 011.52.14l1.4 2.07a1 1 0 01-.13 1.3l-.94.94a12 12 0 005.28 5.28l.94-.94a1 1 0 011.3-.13l2.07 1.4a1 1 0 01.14 1.52z"/></svg>
                <span>18+ Years · HSBC · HDFC · ICICI Prudential · Tata AIG</span>
              </div>
              <div className="nitesh-row">
                <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
                <span>Digital-First · In-person available on request</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={`form-grid reveal ${isRevealed('form-grid') ? 'visible' : ''}`} id="form-grid">
            <div className="form-group">
              <label className="form-label">Full Name <span>*</span></label>
              <input className="form-input" type="text" placeholder="Your full name" id="inp-name" value={formData.name} onChange={handleInputChange} />
              <div className="form-focus-line"></div>
            </div>
            <div className="form-group">
              <label className="form-label">Email Address <span>*</span></label>
              <input className="form-input" type="email" placeholder="you@example.com" id="inp-email" value={formData.email} onChange={handleInputChange} />
              <div className="form-focus-line"></div>
            </div>
            <div className="form-group">
              <label className="form-label">Mobile Number <span>*</span></label>
              <input className="form-input" type="tel" placeholder="+91 00000 00000" id="inp-phone" value={formData.phone} onChange={handleInputChange} />
              <div className="form-focus-line"></div>
            </div>
            <div className="form-group">
              <label className="form-label">City</label>
              <input className="form-input" type="text" placeholder="Your city" id="inp-city" value={formData.city} onChange={handleInputChange} />
              <div className="form-focus-line"></div>
            </div>
            <div className="form-group full">
              <label className="form-label">Area of Interest</label>
              <select className="form-select" id="inp-interest" value={formData.interest} onChange={handleInputChange}>
                <option value="" disabled>Select a topic</option>
                <option>Goal-Based Financial Planning</option>
                <option>Mutual Fund Investments</option>
                <option>Portfolio Structuring (PMS / AIF)</option>
                <option>Retirement Planning</option>
                <option>Children&apos;s Education Planning</option>
                <option>Insurance & Protection Planning</option>
                <option>Tax-Efficient Wealth Planning</option>
                <option>Other</option>
              </select>
              <div className="form-focus-line"></div>
            </div>
            <div className="form-group full">
              <label className="form-label">Investment Range</label>
              <select className="form-select" id="inp-range" value={formData.range} onChange={handleInputChange}>
                <option value="" disabled>Select your range</option>
                <option>Below ₹10 Lakhs</option>
                <option>₹10 Lakhs – ₹50 Lakhs</option>
                <option>₹50 Lakhs – ₹1 Crore</option>
                <option>Above ₹1 Crore</option>
              </select>
              <div className="form-focus-line"></div>
            </div>
            <div className="form-group full">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" placeholder="Share any context, questions, or specific goals you'd like to discuss..." id="inp-message" value={formData.message} onChange={handleInputChange} />
              <div className="form-focus-line"></div>
            </div>
            <div className="form-group full">
              <div className="checkbox-row">
                <div className={`custom-check ${consented ? 'checked' : ''}`} onClick={() => setConsented(!consented)}>
                  <svg viewBox="0 0 12 10" width="10" height="10" stroke="white" strokeWidth="2" fill="none"><polyline points="1,5 4.5,8.5 11,1"/></svg>
                </div>
                <span className="check-label">I agree to be contacted by Nivedshri Wealth regarding my enquiry. We will never share your details with third parties.</span>
              </div>
            </div>
          </div>

          <button className={`submit-btn reveal ${isRevealed('submit-btn') ? 'visible' : ''}`} id="submit-btn" onClick={handleSubmit}>
            <span>Start Your Wealth Journey</span>
            <span className="arrow">→</span>
          </button>
        </div>

        {/* RIGHT: BOOK CONSULTATION */}
        <div className={`contact-col right reveal-right ${isRevealed('contact-col-right') ? 'visible' : ''}`} id="contact-col-right">
          <div className="sec-label"><span className="dot"></span>Book a Consultation</div>
          <h2 className="sec-heading">Choose a Time<br/>That <em>Works</em> for You</h2>
          <p className="sec-desc">A focused 30–45 minute session with no sales pitch — just a structured conversation centered entirely on your financial goals.</p>

          {/* Expectations */}
          <ul className={`expect-list reveal ${isRevealed('expect-list') ? 'visible' : ''}`} id="expect-list">
            <li className="expect-item">
              <span className="expect-num">01</span>
              <span className="expect-text">Understand your current financial situation and responsibilities</span>
            </li>
            <li className="expect-item">
              <span className="expect-num">02</span>
              <span className="expect-text">Discuss your goals, priorities, and timelines in detail</span>
            </li>
            <li className="expect-item">
              <span className="expect-num">03</span>
              <span className="expect-text">Identify any gaps, missed opportunities, or misaligned decisions</span>
            </li>
            <li className="expect-item">
              <span className="expect-num">04</span>
              <span className="expect-text">Outline the next steps — if we&apos;re the right fit for each other</span>
            </li>
          </ul>

          {/* Mode Selector */}
          <div className={`mode-wrap reveal ${isRevealed('mode-wrap') ? 'visible' : ''}`} id="mode-wrap">
            <button className={`mode-btn ${mode === 'video' ? 'active' : ''}`} onClick={() => setMode('video')}>
              <div className="mode-icon">
                <svg viewBox="0 0 24 24"><polygon points="23,7 16,12 23,17"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
              </div>
              <div className="mode-info">
                <span className="mode-title">Video Call</span>
                <span className="mode-tag">Recommended</span>
              </div>
            </button>
            <button className={`mode-btn ${mode === 'phone' ? 'active' : ''}`} onClick={() => setMode('phone')}>
              <div className="mode-icon">
                <svg viewBox="0 0 24 24"><path d="M21 16.92a2 2 0 01-2.18.4 16.3 16.3 0 01-5.08-3.06 16.3 16.3 0 01-3.06-5.08 2 2 0 01.4-2.18l1.26-1.27a1 1 0 011.52.14l1.4 2.07a1 1 0 01-.13 1.3l-.94.94a12 12 0 005.28 5.28l.94-.94a1 1 0 011.3-.13l2.07 1.4a1 1 0 01.14 1.52z"/></svg>
              </div>
              <div className="mode-info">
                <span className="mode-title">Phone Call</span>
                <span className="mode-tag">Voice Only</span>
              </div>
            </button>
          </div>

          {/* Calendar */}
          <div className={`cal-wrap reveal ${isRevealed('cal-wrap') ? 'visible' : ''}`} id="cal-wrap">
            <div className="cal-header">
              <div className="cal-title">{monthNames[currentMonth]} {currentYear}</div>
              <div className="cal-nav">
                <button className="cal-nav-btn" onClick={() => changeMonth(-1)}><svg viewBox="0 0 24 24"><polyline points="15,18 9,12 15,6"/></svg></button>
                <button className="cal-nav-btn" onClick={() => changeMonth(1)}><svg viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg></button>
              </div>
            </div>
            <div className="cal-grid-wrap">
              <div className="cal-days-label">
                <div className="cal-day-lbl">Mo</div>
                <div className="cal-day-lbl">Tu</div>
                <div className="cal-day-lbl">We</div>
                <div className="cal-day-lbl">Th</div>
                <div className="cal-day-lbl">Fr</div>
                <div className="cal-day-lbl">Sa</div>
                <div className="cal-day-lbl">Su</div>
              </div>
              <div className="cal-days">{renderCalendar()}</div>
              {showTimeSection && (
                <div className="time-section">
                  <div className="time-section-label">Available Slots</div>
                  <div className="slots-grid">{renderSlots()}</div>
                </div>
              )}
            </div>
          </div>

          {/* Privacy Note */}
          <div className={`privacy-note reveal ${isRevealed('privacy-note') ? 'visible' : ''}`} id="privacy-note">
            <svg viewBox="0 0 24 24"><path d="M12 2l7 4v6c0 4.4-3 8.5-7 10-4-1.5-7-5.6-7-10V6z"/></svg>
            <p><strong>Complete confidentiality.</strong> All consultation details are private. We work with clients across India through a structured digital process. Your information is never shared.</p>
          </div>

          <button className={`book-btn reveal ${isRevealed('book-btn') ? 'visible' : ''}`} id="book-btn" onClick={handleBook}>
            <span>Schedule Your Consultation</span>
            <span>→</span>
          </button>

          <p style={{fontSize:'12px',color:'var(--ivory-dim)',textAlign:'center',marginTop:'16px',lineHeight:'1.6',fontWeight:300}}>
            Can&apos;t find a suitable time? <a href="#" style={{color:'var(--gold)',textDecoration:'none'}}>Contact us directly</a> — we&apos;ll coordinate a slot manually.
          </p>
        </div>
      </div>

      {/* BEFORE YOU BOOK */}
      <div className="byb-section">
        <div className={`byb-col reveal-left ${isRevealed('byb-col-left') ? 'visible' : ''}`} id="byb-col-left">
          <div className="sec-label"><span className="dot"></span>Before You Book</div>
          <h2 className="sec-heading" style={{fontSize:'clamp(28px,3vw,42px)',marginBottom:'14px'}}>A little context<br/><em>always helps</em></h2>
          <p style={{fontSize:'20px',color:'var(--ivory-dim)',lineHeight:'1.8',fontWeight:300,marginBottom:'36px'}}>No preparation is required — but having a rough idea of the following makes our conversation richer from the first minute.</p>
          <ul className="byb-list">
            <li className="byb-item">
              <div className="byb-icon"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
              <div className="byb-content">
                <span className="byb-title">Current Investments</span>
                <span className="byb-desc">Any existing MFs, stocks, FDs, insurance policies, or real estate holdings</span>
              </div>
            </li>
            <li className="byb-item">
              <div className="byb-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg></div>
              <div className="byb-content">
                <span className="byb-title">Financial Goals</span>
                <span className="byb-desc">Even a rough sense — retirement, home purchase, children&apos;s education, or wealth building</span>
              </div>
            </li>
            <li className="byb-item">
              <div className="byb-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
              <div className="byb-content">
                <span className="byb-title">Questions & Concerns</span>
                <span className="byb-desc">Any specific doubts, decisions you&apos;re facing, or areas of uncertainty in your financial life</span>
              </div>
            </li>
          </ul>
        </div>
        <div className={`byb-col reveal-right ${isRevealed('byb-col-right') ? 'visible' : ''}`} id="byb-col-right" style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <div style={{padding:'40px',border:'1px solid var(--divider)',borderRadius:'2px',background:'var(--bg3)',position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',top:0,left:0,right:0,height:'1px',background:'linear-gradient(90deg,transparent,var(--gold),transparent)'}}></div>
            <div style={{fontFamily:"'Cormorant',serif",fontSize:'clamp(28px,3vw,42px)',fontWeight:300,lineHeight:'1.25',color:'var(--ivory)',marginBottom:'28px',letterSpacing:'-0.01em'}}>
              &quot;Wealth is not built<br/>by doing more —<br/>but by <em style={{color:'var(--gold)'}}>consistently doing<br/>the right things.</em>&quot;
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'14px'}}>
              <div style={{width:'40px',height:'40px',borderRadius:'50%',background:'var(--gold-dim)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <span style={{fontFamily:"'Cormorant',serif",fontSize:'16px',color:'var(--gold)',fontWeight:400}}>NT</span>
              </div>
              <div>
                <div style={{fontSize:'14px',color:'var(--ivory)',fontWeight:500}}>Nitesh Tara</div>
                <div style={{fontSize:'12px',color:'var(--ivory-dim)',letterSpacing:'0.06em',textTransform:'uppercase'}}>Founder, Nivedshri Wealth</div>
              </div>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'12px',marginTop:'20px'}}>
            <div style={{padding:'24px',border:'1px solid var(--divider)',borderRadius:'2px',background:'var(--bg3)'}}>
              <div style={{fontFamily:"'Cormorant',serif",fontSize:'42px',fontWeight:300,color:'var(--orange)',lineHeight:1}}>18+</div>
              <div style={{fontSize:'11px',letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--ivory-dim)',marginTop:'6px'}}>Years of Experience</div>
            </div>
            <div style={{padding:'24px',border:'1px solid var(--divider)',borderRadius:'2px',background:'var(--bg3)'}}>
              <div style={{fontFamily:"'Cormorant',serif",fontSize:'42px',fontWeight:300,color:'var(--gold)',lineHeight:1}}>PAN</div>
              <div style={{fontSize:'11px',letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--ivory-dim)',marginTop:'6px'}}>India Digital-First</div>
            </div>
          </div>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="disclaimer">
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        <p>
          <strong style={{color:'var(--ivory-mid)',fontWeight:500}}>Disclaimer:</strong> Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing. Past performance is not a guarantee of future results. Insurance services are subject to the terms and conditions of the respective policies. Nivedshri Wealth is a registered Mutual Fund Distributor and Wealth Advisory firm. This page is for informational and enquiry purposes only.
        </p>
      </div>

      {/* WhatsApp Float */}
      <a className="whatsapp-float" href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      {/* Success Overlay */}
      {successOverlay.show && (
        <div className="success-overlay show">
          <div className="success-icon">
            <svg viewBox="0 0 24 24"><polyline points="20,6 9,17 4,12"/></svg>
          </div>
          <div className="success-title">Message Received.</div>
          <div className="success-sub">{successOverlay.message}</div>
          <button className="success-close" onClick={() => setSuccessOverlay({ show: false, message: '' })}>Close</button>
        </div>
      )}

      {/* Footer is handled by Layout */}
      </Layout>

      <style jsx global>{`
        /* ════════════════════════════════════════════════════════════════════════════════════════
           NIVEDSHRI WEALTH — Contact Page (Light Theme)
           ════════════════════════════════════════════════════════════════════════════════════════ */

        :root{
          /* ─── GOLD ─── */
          --gold:#A07830;
          --gold-light:#B8924A;
          --gold-bright:#C9A96E;
          --gold-dark:#7A5C20;
          --gold-dim:rgba(160,120,48,0.12);
          --gold-faint:rgba(160,120,48,0.05);

          /* ─── ORANGE ─── */
          --orange:#D4530A;
          --orange-light:#E8703A;
          --orange-dark:#A83E00;
          --orange-dim:rgba(212,83,10,0.1);
          --orange-faint:rgba(212,83,10,0.05);

          /* ─── BACKGROUNDS ─── */
          --bg:#FAFAF8;
          --bg2:#F4F2EE;
          --bg3:#EDE9E2;
          --bg4:#E4DFD6;

          /* ─── TEXT ─── */
          --ivory:#1C1A14;
          --ivory-mid:#4A4235;
          --ivory-dim:rgba(28,26,20,0.75);
          --ivory-faint:rgba(28,26,20,0.12);

          /* ─── DIVIDERS ─── */
          --divider:rgba(160,120,48,0.15);
          --divider-bright:rgba(160,120,48,0.35);
        }

        /* Loader */
        .page-loader{
          position:fixed;
          inset:0;
          background:var(--bg);
          z-index:9999;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          gap:28px;
          transition:opacity 0.6s,visibility 0.6s;
        }
        .page-loader.hidden{
          opacity:0;
          visibility:hidden;
        }
        .loader-logo{
          font-family:'Cormorant',serif;
          font-size:32px;
          font-weight:300;
          color:var(--ivory);
          letter-spacing:0.02em;
        }
        .loader-logo span{
          color:var(--gold);
        }
        .loader-bar-wrap{
          width:180px;
          height:2px;
          background:rgba(212,83,10,0.18);
          border-radius:1px;
          overflow:hidden;
        }
        .loader-bar{
          width:100%;
          height:100%;
          background:var(--orange);
          animation:loader 2s ease-in-out;
        }
        @keyframes loader{
          0%{transform:translateX(-100%)}
          100%{transform:translateX(0)}
        }

        /* Hero Section */
        .c-hero{
          position:relative;
          min-height:70vh;
          display:flex;
          flex-direction:column;
          justify-content:center;
          padding:140px 56px 0;
          overflow:hidden;
          background:var(--bg);
        }
        .c-orb{
          position:absolute;
          top:-10%;
          right:-5%;
          width:55vw;
          height:55vw;
          border-radius:50%;
          background:radial-gradient(circle,rgba(212,83,10,0.08) 0%,transparent 70%);
          filter:blur(80px);
          z-index:0;
          pointer-events:none;
        }
        .c-orb2{
          position:absolute;
          bottom:-15%;
          left:-10%;
          width:45vw;
          height:45vw;
          border-radius:50%;
          background:radial-gradient(circle,rgba(160,120,48,0.06) 0%,transparent 70%);
          filter:blur(80px);
          z-index:0;
          pointer-events:none;
        }
        .c-ghost{
          position:absolute;
          left:50%;
          top:45%;
          transform:translate(-50%,-50%);
          font-size:clamp(80px,18vw,280px);
          font-weight:700;
          color:transparent;
          -webkit-text-stroke:1px rgba(160,120,48,0.06);
          text-transform:uppercase;
          letter-spacing:0.1em;
          font-family:'Cormorant',serif;
          pointer-events:none;
          z-index:0;
          white-space:nowrap;
        }
        .c-eyebrow{
          display:flex;
          align-items:center;
          gap:18px;
          font-size:20px;
          letter-spacing:0.14em;
          text-transform:uppercase;
          color:var(--ivory-mid);
          margin-bottom:28px;
          position:relative;
          z-index:1;
        }
        .c-eyebrow .line{
          width:44px;
          height:1px;
          background:var(--gold);
        }
        .c-h1{
          font-family:'Cormorant',serif;
          font-size:clamp(46px,6vw,84px);
          font-weight:300;
          line-height:1.05;
          letter-spacing:-0.02em;
          color:var(--ivory);
          margin-bottom:22px;
          max-width:900px;
          position:relative;
          z-index:1;
        }
        .c-h1 .li{
          display:block;
          opacity:0;
          transform:translateY(30px);
          transition:opacity 0.8s,transform 0.8s;
        }
        .c-h1 .li.visible{
          opacity:1;
          transform:translateY(0);
        }
        .c-h1 em{
          font-style:italic;
          color:var(--gold);
        }
        .c-h1 strong{
          font-weight:500;
        }
        .c-sub{
          font-size:20px;
          color:var(--ivory-mid);
          max-width:560px;
          line-height:1.7;
          font-weight:300;
          margin-bottom:64px;
          position:relative;
          z-index:1;
        }
        .c-bottom-strip{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:1px;
          background:var(--divider);
          position:relative;
          z-index:1;
        }
        .c-strip-item{
          background:var(--bg);
          padding:32px 36px;
          display:flex;
          flex-direction:column;
          gap:8px;
        }
        .c-strip-label{
          font-size:25px;
          letter-spacing:0.1em;
          text-transform:uppercase;
          color:var(--ivory-dim);
        }
        .c-strip-val{
          font-family:'Cormorant',serif;
          font-size:25px;
          color:var(--ivory);
          font-weight:400;
        }

        /* Contact Wrap */
        .contact-wrap{
          display:grid;
          grid-template-columns:1fr 1fr;
          border-top:1px solid var(--divider);
          border-bottom:1px solid var(--divider);
        }
        .contact-col{
          background:var(--bg);
          padding:80px 56px;
          display:flex;
          flex-direction:column;
        }
        .contact-col.right{
          border-left:1px solid var(--divider);
          background:var(--bg2);
        }

        /* Section Labels */
        .sec-label{
          display:flex;
          align-items:center;
          gap:14px;
          font-size:15px;
          letter-spacing:0.2em;
          text-transform:uppercase;
          color:var(--orange);
          font-weight:500;
          margin-bottom:40px;
        }
        .sec-label .dot{
          width:5px;
          height:5px;
          border-radius:50%;
          background:var(--orange);
        }
        .sec-heading{
          font-family:'Cormorant',serif;
          font-size:clamp(36px,4vw,56px);
          font-weight:300;
          line-height:1.1;
          letter-spacing:-0.02em;
          color:var(--ivory);
          margin-bottom:20px;
        }
        .sec-heading em{
          font-style:italic;
          color:var(--gold);
        }
        .sec-desc{
          font-size:20px;
          color:var(--ivory-mid);
          line-height:1.85;
          font-weight:300;
          margin-bottom:48px;
          max-width:440px;
        }

        /* Form Grid */
        .form-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:20px;
        }
        .form-group{
          display:flex;
          flex-direction:column;
          gap:10px;
          position:relative;
        }
        .form-group.full{
          grid-column:1/-1;
        }
        .form-label{
          font-size:15px;
          letter-spacing:0.12em;
          text-transform:uppercase;
          color:var(--ivory-dim);
          font-weight:400;
        }
        .form-label span{
          color:var(--orange);
          margin-left:2px;
        }
        .form-input,.form-select,.form-textarea{
          background:transparent;
          border:none;
          border-bottom:1px solid var(--divider-bright);
          color:var(--ivory);
          font-family:'Outfit',sans-serif;
          font-size:15px;
          font-weight:300;
          padding:12px 0;
          outline:none;
          transition:border-color 0.3s;
          width:100%;
          border-radius:0;
          -webkit-appearance:none;
          appearance:none;
        }
        .form-input::placeholder,.form-textarea::placeholder{
          color:rgba(28,26,20,0.25);
          font-size:14px;
        }
        .form-input:focus,.form-select:focus,.form-textarea:focus{
          border-color:var(--orange);
        }
        .form-select{
          background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7' viewBox='0 0 12 7'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23A07830' stroke-width='1.2' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat right 4px center;
          padding-right:24px;
          cursor:pointer;
          color:rgba(28,26,20,0.55);
        }
        .form-select option{
          background:var(--bg3);
          color:var(--ivory);
        }
        .form-textarea{
          resize:none;
          height:88px;
          line-height:1.6;
        }
        .form-focus-line{
          position:absolute;
          bottom:0;
          left:0;
          width:0;
          height:1px;
          background:var(--orange);
          transition:width 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .form-group:focus-within .form-focus-line{
          width:100%;
        }

        /* Checkbox */
        .checkbox-row{
          display:flex;
          align-items:flex-start;
          gap:14px;
          margin-top:8px;
        }
        .custom-check{
          width:18px;
          height:18px;
          flex-shrink:0;
          border:1px solid var(--divider-bright);
          border-radius:2px;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          transition:border-color 0.3s,background 0.3s;
          position:relative;
          top:2px;
        }
        .custom-check.checked{
          background:var(--orange);
          border-color:var(--orange);
        }
        .custom-check svg{
          opacity:0;
          transition:opacity 0.2s;
        }
        .custom-check.checked svg{
          opacity:1;
        }
        .check-label{
          font-size:13px;
          color:var(--ivory-dim);
          line-height:1.6;
          font-weight:300;
        }

        /* Submit Button */
        .submit-btn{
          display:inline-flex;
          align-items:center;
          gap:12px;
          margin-top:36px;
          padding:16px 36px;
          border:1px solid var(--gold);
          border-radius:2px;
          color:var(--gold);
          font-family:'Outfit',sans-serif;
          font-size:13px;
          font-weight:500;
          letter-spacing:0.1em;
          text-transform:uppercase;
          cursor:pointer;
          position:relative;
          overflow:hidden;
          transition:color 0.3s;
          background:transparent;
        }
        .submit-btn::before{
          content:'';
          position:absolute;
          inset:0;
          background:var(--gold);
          transform:translateX(-101%);
          transition:transform 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .submit-btn:hover{
          color:var(--bg);
        }
        .submit-btn:hover::before{
          transform:translateX(0);
        }
        .submit-btn span{
          position:relative;
          z-index:1;
        }
        .submit-btn .arrow{
          position:relative;
          z-index:1;
          font-size:18px;
          transition:transform 0.3s;
        }
        .submit-btn:hover .arrow{
          transform:translateX(4px);
        }

        /* Expect List */
        .expect-list{
          list-style:none;
          margin-bottom:48px;
          display:flex;
          flex-direction:column;
          gap:0;
        }
        .expect-item{
          display:flex;
          align-items:flex-start;
          gap:20px;
          padding:22px 0;
          border-bottom:1px solid var(--divider);
        }
        .expect-item:last-child{
          border-bottom:none;
        }
        .expect-num{
          font-family:'Cormorant',serif;
          font-size:18px;
          color:var(--orange);
          font-weight:400;
          letter-spacing:0.08em;
          min-width:20px;
          margin-top:2px;
        }
        .expect-text{
          font-size:18px;
          color:var(--ivory-mid);
          line-height:1.7;
          font-weight:300;
        }

        /* Mode Selector */
        .mode-wrap{
          display:flex;
          gap:12px;
          margin-bottom:44px;
        }
        .mode-btn{
          flex:1;
          padding:16px 20px;
          border:1px solid var(--divider);
          border-radius:2px;
          cursor:pointer;
          display:flex;
          align-items:center;
          gap:12px;
          transition:border-color 0.3s,background 0.3s;
          background:transparent;
        }
        .mode-btn.active{
          border-color:var(--orange);
          background:var(--orange-faint);
        }
        .mode-btn:hover:not(.active){
          border-color:var(--divider-bright);
          background:var(--gold-faint);
        }
        .mode-icon{
          width:36px;
          height:36px;
          border-radius:50%;
          background:var(--gold-dim);
          display:flex;
          align-items:center;
          justify-content:center;
          flex-shrink:0;
        }
        .mode-btn.active .mode-icon{
          background:var(--orange-dim);
        }
        .mode-icon svg{
          width:16px;
          height:16px;
          stroke:var(--gold-light);
          fill:none;
          stroke-width:1.5;
        }
        .mode-btn.active .mode-icon svg{
          stroke:var(--orange);
        }
        .mode-info{
          display:flex;
          flex-direction:column;
          gap:3px;
        }
        .mode-title{
          font-size:13px;
          font-weight:500;
          color:var(--ivory);
          letter-spacing:0.02em;
        }
        .mode-tag{
          font-size:20px;
          color:var(--ivory-dim);
          letter-spacing:0.06em;
        }

        /* Calendar */
        .cal-wrap{
          border:1px solid var(--divider);
          border-radius:2px;
          overflow:hidden;
        }
        .cal-header{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:20px 24px;
          border-bottom:1px solid var(--divider);
          background:var(--bg3);
        }
        .cal-title{
          font-family:'Cormorant',serif;
          font-size:20px;
          font-weight:400;
          color:var(--ivory);
          letter-spacing:0.04em;
        }
        .cal-nav{
          display:flex;
          gap:8px;
        }
        .cal-nav-btn{
          width:30px;
          height:30px;
          border:1px solid var(--divider);
          border-radius:2px;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          transition:border-color 0.3s,background 0.3s;
          background:transparent;
        }
        .cal-nav-btn:hover{
          border-color:var(--gold);
          background:var(--gold-faint);
        }
        .cal-nav-btn svg{
          width:12px;
          height:12px;
          stroke:var(--ivory-mid);
          fill:none;
          stroke-width:2;
        }
        .cal-grid-wrap{
          padding:20px 24px;
        }
        .cal-days-label{
          display:grid;
          grid-template-columns:repeat(7,1fr);
          gap:4px;
          margin-bottom:8px;
        }
        .cal-day-lbl{
          font-size:10px;
          letter-spacing:0.1em;
          text-transform:uppercase;
          color:var(--ivory-dim);
          text-align:center;
          padding:4px 0;
        }
        .cal-days{
          display:grid;
          grid-template-columns:repeat(7,1fr);
          gap:4px;
        }
        .cal-day{
          aspect-ratio:1;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:13px;
          color:var(--ivory-mid);
          border-radius:2px;
          cursor:pointer;
          transition:background 0.2s,color 0.2s,border-color 0.2s;
          border:1px solid transparent;
        }
        .cal-day:not(.empty):not(.past):hover{
          background:var(--gold-dim);
          color:var(--ivory);
          border-color:var(--divider);
        }
        .cal-day.today{
          color:var(--orange);
          border-color:var(--orange-dim);
          background:var(--orange-faint);
        }
        .cal-day.selected{
          background:var(--orange);
          color:#fff!important;
          border-color:var(--orange);
        }
        .cal-day.available:not(.past){
          color:var(--ivory);
        }
        .cal-day.past{
          color:rgba(28,26,20,0.18);
          cursor:not-allowed;
        }
        .cal-day.empty{
          cursor:default;
        }

        /* Time Slots */
        .time-section{
          margin-top:24px;
          padding-top:24px;
          border-top:1px solid var(--divider);
        }
        .time-section-label{
          font-size:11px;
          letter-spacing:0.12em;
          text-transform:uppercase;
          color:var(--ivory-dim);
          margin-bottom:14px;
        }
        .slots-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:8px;
        }
        .slot-btn{
          padding:10px 8px;
          text-align:center;
          border:1px solid var(--divider);
          border-radius:2px;
          font-size:12px;
          color:var(--ivory-mid);
          cursor:pointer;
          transition:border-color 0.3s,background 0.3s,color 0.3s;
          background:transparent;
          font-family:'Outfit',sans-serif;
          letter-spacing:0.04em;
        }
        .slot-btn:hover{
          border-color:var(--gold);
          color:var(--ivory);
          background:var(--gold-faint);
        }
        .slot-btn.selected{
          background:var(--orange);
          border-color:var(--orange);
          color:#fff;
        }
        .slot-btn.booked{
          opacity:0.3;
          cursor:not-allowed;
          text-decoration:line-through;
        }

        /* Book Button */
        .book-btn{
          display:flex;
          align-items:center;
          justify-content:center;
          gap:12px;
          width:100%;
          margin-top:28px;
          padding:18px;
          background:var(--orange);
          border:none;
          border-radius:2px;
          color:#fff;
          font-family:'Outfit',sans-serif;
          font-size:13px;
          font-weight:500;
          letter-spacing:0.1em;
          text-transform:uppercase;
          cursor:pointer;
          transition:background 0.3s;
          position:relative;
          overflow:hidden;
        }
        .book-btn::after{
          content:'';
          position:absolute;
          inset:0;
          background:rgba(0,0,0,0.1);
          transform:translateX(-101%);
          transition:transform 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .book-btn:hover::after{
          transform:translateX(0);
        }
        .book-btn span{
          position:relative;
          z-index:1;
        }

        /* Nitesh Card */
        .nitesh-card{
          border:1px solid var(--divider);
          border-radius:2px;
          padding:36px;
          background:var(--bg3);
          position:relative;
          overflow:hidden;
          margin-bottom:36px;
        }
        .nitesh-card::before{
          content:'';
          position:absolute;
          top:0;
          left:0;
          right:0;
          height:2px;
          background:linear-gradient(90deg,var(--orange),var(--gold));
        }
        .nitesh-avatar{
          width:72px;
          height:72px;
          border-radius:50%;
          border:2px solid var(--gold-dim);
          background:linear-gradient(135deg,var(--bg4),var(--bg3));
          display:flex;
          align-items:center;
          justify-content:center;
          margin-bottom:20px;
        }
        .nitesh-avatar-inner{
          font-family:'Cormorant',serif;
          font-size:28px;
          font-weight:300;
          color:var(--gold);
        }
        .nitesh-name{
          font-family:'Cormorant',serif;
          font-size:30px;
          font-weight:400;
          color:var(--ivory);
          margin-bottom:6px;
        }
        .nitesh-role{
          font-size:15px;
          letter-spacing:0.1em;
          text-transform:uppercase;
          color:var(--orange);
          margin-bottom:20px;
        }
        .nitesh-divider{
          height:1px;
          background:var(--divider);
          margin-bottom:20px;
        }
        .nitesh-detail{
          display:flex;
          flex-direction:column;
          gap:10px;
        }
        .nitesh-row{
          display:flex;
          align-items:center;
          gap:12px;
        }
        .nitesh-row svg{
          width:14px;
          height:14px;
          stroke:var(--gold-dark);
          fill:none;
          stroke-width:1.5;
          flex-shrink:0;
        }
        .nitesh-row span{
          font-size:18px;
          color:var(--ivory-dim);
          font-weight:300;
        }

        /* Privacy Note */
        .privacy-note{
          display:flex;
          align-items:flex-start;
          gap:14px;
          padding:20px 24px;
          border:1px solid var(--divider);
          border-radius:2px;
          background:var(--gold-faint);
          margin-top:24px;
        }
        .privacy-note svg{
          width:16px;
          height:16px;
          stroke:var(--gold);
          fill:none;
          stroke-width:1.5;
          flex-shrink:0;
          margin-top:2px;
        }
        .privacy-note p{
          font-size:15px;
          color:var(--ivory-dim);
          line-height:1.65;
          font-weight:300;
        }
        .privacy-note strong{
          color:var(--gold);
          font-weight:500;
        }

        /* Before You Book Section */
        .byb-section{
          display:grid;
          grid-template-columns:1fr 1fr;
          border-top:1px solid var(--divider);
          background:var(--divider);
          gap:1px;
        }
        .byb-col{
          background:var(--bg2);
          padding:64px 56px;
        }
        .byb-list{
          list-style:none;
          display:flex;
          flex-direction:column;
          gap:0;
        }
        .byb-item{
          display:flex;
          align-items:flex-start;
          gap:20px;
          padding:20px 0;
          border-bottom:1px solid var(--divider);
        }
        .byb-item:first-child{
          padding-top:0;
        }
        .byb-item:last-child{
          border-bottom:none;
        }
        .byb-icon{
          width:32px;
          height:32px;
          border:1px solid var(--divider-bright);
          border-radius:50%;
          flex-shrink:0;
          display:flex;
          align-items:center;
          justify-content:center;
          margin-top:2px;
        }
        .byb-icon svg{
          width:13px;
          height:13px;
          stroke:var(--gold);
          fill:none;
          stroke-width:1.5;
        }
        .byb-content{
          display:flex;
          flex-direction:column;
          gap:4px;
        }
        .byb-title{
          font-size:20px;
          font-weight:500;
          color:var(--ivory);
          letter-spacing:0.02em;
        }
        .byb-desc{
          font-size:17px;
          color:var(--ivory-dim);
          line-height:1.6;
          font-weight:300;
        }

        /* Disclaimer */
        .disclaimer{
          border-top:1px solid var(--divider);
          padding:40px 56px;
          display:flex;
          align-items:flex-start;
          gap:24px;
          background:var(--bg);
        }
        .disclaimer svg{
          width:18px;
          height:18px;
          stroke:var(--ivory-dim);
          fill:none;
          stroke-width:1.5;
          flex-shrink:0;
          margin-top:2px;
        }
        .disclaimer p{
          font-size:12px;
          color:var(--ivory-dim);
          line-height:1.8;
          font-weight:300;
          letter-spacing:0.01em;
        }

        /* WhatsApp Float */
        .whatsapp-float{
          position:fixed;
          bottom:36px;
          right:36px;
          z-index:100;
          width:54px;
          height:54px;
          background:var(--orange);
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          transition:transform 0.3s cubic-bezier(0.22,1,0.36,1),background 0.3s;
          box-shadow:0 4px 24px rgba(212,83,10,0.35);
        }
        .whatsapp-float:hover{
          transform:scale(1.1);
          background:var(--orange-light);
        }
        .whatsapp-float svg{
          width:26px;
          height:26px;
          fill:white;
        }

        /* Success Overlay */
        .success-overlay{
          display:none;
          position:fixed;
          inset:0;
          background:rgba(250,250,248,0.98);
          z-index:10000;
          align-items:center;
          justify-content:center;
          flex-direction:column;
          gap:28px;
        }
        .success-overlay.show{
          display:flex;
        }
        .success-icon{
          width:72px;
          height:72px;
          border-radius:50%;
          border:1px solid var(--gold);
          display:flex;
          align-items:center;
          justify-content:center;
          animation:successPop 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        @keyframes successPop{
          from{transform:scale(0.6);opacity:0}
          to{transform:scale(1);opacity:1}
        }
        .success-icon svg{
          width:28px;
          height:28px;
          stroke:var(--gold);
          fill:none;
          stroke-width:1.5;
        }
        .success-title{
          font-family:'Cormorant',serif;
          font-size:52px;
          font-weight:300;
          color:var(--ivory);
          letter-spacing:-0.02em;
          text-align:center;
        }
        .success-sub{
          font-size:15px;
          color:var(--ivory-mid);
          font-weight:300;
          text-align:center;
        }
        .success-close{
          margin-top:8px;
          padding:12px 32px;
          border:1px solid var(--gold);
          border-radius:2px;
          color:var(--gold);
          font-size:12px;
          letter-spacing:0.12em;
          text-transform:uppercase;
          cursor:pointer;
          background:transparent;
          font-family:'Outfit',sans-serif;
          transition:background 0.3s,color 0.3s;
        }
        .success-close:hover{
          background:var(--gold);
          color:var(--bg);
        }

        /* Reveal Animations */
        .reveal, .reveal-left, .reveal-right{
          opacity:0;
          transform:translateY(20px);
          transition:opacity 0.8s cubic-bezier(0.22,1,0.36,1),transform 0.8s cubic-bezier(0.22,1,0.36,1);
        }
        .reveal.visible, .reveal-left.visible, .reveal-right.visible{
          opacity:1;
          transform:translateY(0);
        }
        .reveal-left{
          transform:translateX(-30px);
        }
        .reveal-right{
          transform:translateX(30px);
        }
        .reveal-left.visible, .reveal-right.visible{
          transform:translateX(0);
        }

        /* Responsive */
        @media(max-width:900px){
          .c-hero{
            padding:120px 28px 0;
          }
          .c-bottom-strip{
            grid-template-columns:1fr;
          }
          .contact-wrap{
            grid-template-columns:1fr;
          }
          .byb-section{
            grid-template-columns:1fr;
          }
          .contact-col,.contact-col.right,.byb-col{
            padding:56px 28px;
          }
          .form-grid{
            grid-template-columns:1fr;
          }
          .form-group.full{
            grid-column:1;
          }
          .disclaimer{
            padding:32px 28px;
          }
          .mode-wrap{
            flex-direction:column;
          }
          .slots-grid{
            grid-template-columns:repeat(2,1fr);
          }
        }
      `}</style>
    </>
  );
}
