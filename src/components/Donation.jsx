import React, { useState } from 'react';

const AMOUNTS = [500, 1500, 5000, 12000];
const FUNDS = ['General', 'Environment', 'Education', 'Skill Development', 'Family Programs'];

// High-fidelity custom SVG icons for each fund category
const getFundIcon = (f, isActive, accentColor) => {
  const color = isActive ? '#ffffff' : 'var(--text-body)';
  switch (f) {
    case 'General':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" style={{ marginRight: '6px' }}>
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
        </svg>
      );
    case 'Environment':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" style={{ marginRight: '6px' }}>
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
          <path d="M2 21c0-3 1.85-5.36 5.08-6"/>
        </svg>
      );
    case 'Education':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" style={{ marginRight: '6px' }}>
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/>
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
        </svg>
      );
    case 'Skill Development':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" style={{ marginRight: '6px' }}>
          <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      );
    case 'Family Programs':
      return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" style={{ marginRight: '6px' }}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      );
    default:
      return null;
  }
};

export default function Donation() {
  const [frequency, setFrequency] = useState('one-time'); // 'one-time' or 'monthly'
  const [selected, setSelected] = useState(1500);
  const [custom, setCustom] = useState('');
  const [fund, setFund] = useState('General');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  
  // Custom focus state tracking for input cards
  const [focusedField, setFocusedField] = useState(null);

  // Checkout simulation states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [receipt, setReceipt] = useState(null);

  const amount = frequency === 'one-time' && custom ? parseInt(custom) || 0 : selected;

  const handleDonateSubmit = (e) => {
    e.preventDefault();
    if (!amount || amount <= 0) {
      alert('Please specify a valid contribution amount.');
      return;
    }
    setIsSubmitting(true);

    // Simulate secure bank gateway
    setTimeout(() => {
      setIsSubmitting(false);
      setReceipt({
        receiptNo: `CSREIF-2026-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
        amount: amount,
        frequency: frequency,
        fund: fund,
        donorName: name || 'Generous Supporter',
        taxBenefit: '80G Exemption Eligible (50% Deduction)'
      });
    }, 1500);
  };

  const handleCloseReceipt = () => {
    setReceipt(null);
    // Reset form after successful contribution
    setName('');
    setEmail('');
    setNote('');
    setCustom('');
    setSelected(1500);
  };

  // Determine active color tokens
  const accentColor = frequency === 'monthly' ? 'var(--gold-accent)' : 'var(--green-btn)';
  const accentHover = frequency === 'monthly' ? 'var(--gold-hover)' : 'var(--green-hover)';
  const activeBgLight = frequency === 'monthly' ? 'rgba(200, 168, 74, 0.05)' : 'rgba(26, 58, 42, 0.03)';
  const activeBorder = frequency === 'monthly' ? '2px solid var(--gold-accent)' : '2px solid var(--green-dark)';

  // Reusable focus styling function for input cards
  const getInputCardStyle = (fieldName) => {
    const isFocused = focusedField === fieldName;
    return {
      background: isFocused ? '#ffffff' : '#faf9f5',
      border: isFocused ? `1.5px solid ${accentColor}` : '1.5px solid rgba(26, 58, 42, 0.09)',
      borderRadius: '14px',
      padding: '4px 18px',
      boxShadow: isFocused 
        ? (frequency === 'monthly' ? '0 0 0 4px rgba(200,168,74,0.12)' : '0 0 0 4px rgba(26,58,42,0.06)') 
        : 'none',
      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    };
  };

  return (
    <section id="donate" style={{ background: '#f5f3ee', padding: '140px 0', borderTop: '1px solid rgba(26,58,42,0.05)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative ambient glowing backdrops for organic depth */}
      <div className="ambient-glow-green" style={{ position: 'absolute', top: '10%', left: '-10%', width: '400px', height: '400px', pointerEvents: 'none', opacity: 0.6 }} />
      <div className="ambient-glow-gold" style={{ position: 'absolute', bottom: '10%', right: '-10%', width: '450px', height: '450px', pointerEvents: 'none', opacity: 0.5 }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.92fr 1.08fr', gap: '80px', alignItems: 'start' }}>

          {/* LEFT COLUMN - Storytelling Editorial Panel */}
          <div>
            <span className="eyebrow" style={{ color: 'var(--green-icon)', fontWeight: 700 }}>MAKE A DIFFERENCE</span>
            
            <h2 style={{ 
              fontSize: 'clamp(2.3rem, 3.8vw, 3.6rem)', 
              fontWeight: 400, 
              color: 'var(--green-dark)', 
              lineHeight: 1.15, 
              letterSpacing: '-0.025em', 
              marginBottom: '32px',
              fontFamily: "'Inter', sans-serif"
            }}>
              Your contribution becomes a classroom, a kit, <span className="serif-italic" style={{ color: 'var(--gold-accent)' }}>a clean stream</span>.
            </h2>
            
            <p style={{ 
              fontSize: '1.05rem', 
              color: 'var(--text-body)', 
              lineHeight: 1.8, 
              marginBottom: '48px', 
              fontFamily: "'Inter', sans-serif", 
              fontWeight: 300 
            }}>
              Every contribution directly powers our local centers, buying program execution supplies. All donations are 100% transparent and eligible for tax benefits under 80G.
            </p>

            {/* Premium Gold-Bordered Dark Trust Card */}
            <div className="hover-lift" style={{
              background: 'var(--green-dark)', 
              borderRadius: '28px', 
              padding: '44px',
              border: '1px solid rgba(200, 168, 74, 0.25)',
              boxShadow: '0 25px 50px rgba(17,37,26,0.15)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Subtle gold mesh background lines */}
              <div style={{
                position: 'absolute', top: 0, right: 0, bottom: 0, left: 0,
                background: 'radial-gradient(circle at 100% 0%, rgba(200, 168, 74, 0.08) 0%, transparent 60%)',
                pointerEvents: 'none'
              }} />

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
                <span style={{ 
                  fontSize: '0.72rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.14em', 
                  color: 'var(--gold-accent)', 
                  textTransform: 'uppercase', 
                  fontFamily: "'Inter', sans-serif" 
                }}>TRUSTED & TRANSPARENT FOUNDATION</span>
              </div>
              
              <blockquote style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontStyle: 'italic', 
                fontSize: '1.25rem', 
                color: '#ffffff', 
                lineHeight: 1.7, 
                marginBottom: '26px',
                borderLeft: '2px solid var(--gold-accent)',
                paddingLeft: '20px'
              }}>
                "₹1,500 funds one child's monthly learning kit. ₹12,000 sponsors a full year."
              </blockquote>
              
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: 0, fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                Bank transfer, corporate rails and custom UPI gates are supported. Our dedicated support team will share detailed receipts and structural field reports on your email.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - Premium Overhauled Form Container Card */}
          <div style={{ 
            background: '#ffffff', 
            borderRadius: '28px', 
            padding: '48px', 
            border: '1px solid rgba(26,58,42,0.06)',
            boxShadow: 'var(--shadow-premium)',
            position: 'relative'
          }}>
            <form onSubmit={handleDonateSubmit}>

              {/* Dynamic One-Time vs. Monthly Support Sliding Toggle */}
              <div style={{
                display: 'flex',
                background: 'rgba(26,58,42,0.03)',
                borderRadius: '999px',
                padding: '5px',
                marginBottom: '32px',
                border: '1px solid rgba(26,58,42,0.05)',
                position: 'relative',
                boxShadow: 'inset 0 1px 3px rgba(26,58,42,0.02)'
              }}>
                <button
                  type="button"
                  onClick={() => { setFrequency('one-time'); setSelected(1500); }}
                  style={{
                    flex: 1,
                    padding: '13px 24px',
                    borderRadius: '999px',
                    border: 'none',
                    background: frequency === 'one-time' ? 'var(--green-dark)' : 'transparent',
                    color: frequency === 'one-time' ? '#ffffff' : 'var(--text-body)',
                    fontWeight: 600,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    boxShadow: frequency === 'one-time' ? '0 4px 12px rgba(26,58,42,0.08)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    zIndex: 2
                  }}
                >
                  One-Time Gift
                </button>
                <button
                  type="button"
                  onClick={() => { setFrequency('monthly'); setSelected(1500); setCustom(''); }}
                  style={{
                    flex: 1,
                    padding: '13px 24px',
                    borderRadius: '999px',
                    border: 'none',
                    background: frequency === 'monthly' ? 'var(--gold-accent)' : 'transparent',
                    color: frequency === 'monthly' ? '#11251a' : 'var(--text-body)',
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    boxShadow: frequency === 'monthly' ? '0 4px 12px rgba(200,168,74,0.12)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    zIndex: 2
                  }}
                >
                  Monthly Support
                </button>
              </div>

              {/* Amount Selection Section */}
              <div style={{ marginBottom: '32px' }}>
                <label style={{ 
                  fontSize: '0.68rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.12em', 
                  color: 'var(--text-label)', 
                  textTransform: 'uppercase', 
                  marginBottom: '16px', 
                  display: 'block', 
                  fontFamily: "'Inter', sans-serif" 
                }}>
                  CHOOSE AMOUNT (INR {frequency === 'monthly' && '/ MONTH'})
                </label>
                
                {/* Tactile grid of premium amount selector cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '24px' }}>
                  {AMOUNTS.map(a => {
                    const isActive = selected === a && !custom;
                    return (
                      <button 
                        key={a} 
                        type="button"
                        onClick={() => { setSelected(a); setCustom(''); }}
                        style={{
                          padding: '16px 8px', 
                          borderRadius: '16px', 
                          cursor: 'pointer', 
                          fontFamily: "'Inter', sans-serif", 
                          fontSize: '1rem',
                          fontWeight: 700,
                          background: isActive ? activeBgLight : '#faf9f5',
                          color: isActive ? 'var(--green-dark)' : 'var(--text-body)',
                          border: isActive ? activeBorder : '1.5px solid rgba(26,58,42,0.08)',
                          transform: isActive ? 'translateY(-2px)' : 'none',
                          boxShadow: isActive 
                            ? (frequency === 'monthly' ? '0 8px 24px rgba(200,168,74,0.14)' : '0 8px 24px rgba(26,58,42,0.08)') 
                            : 'none',
                          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                        onMouseEnter={e => {
                          if (!isActive) {
                            e.target.style.borderColor = accentColor;
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.02)';
                          }
                        }}
                        onMouseLeave={e => {
                          if (!isActive) {
                            e.target.style.borderColor = 'rgba(26,58,42,0.08)';
                            e.target.style.transform = 'none';
                            e.target.style.boxShadow = 'none';
                          }
                        }}
                      >
                        ₹{a.toLocaleString('en-IN')}
                      </button>
                    );
                  })}
                </div>
                
                {/* CONDITIONAL LAYOUT: 
                    - One-Time: Beautiful rounded card custom input with a shaded badge currency circle
                    - Monthly: Premium benefits card block */}
                {frequency === 'one-time' ? (
                  <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    background: focusedField === 'custom' ? '#ffffff' : '#faf9f5',
                    border: focusedField === 'custom' ? `1.5px solid ${accentColor}` : '1.5px solid rgba(26, 58, 42, 0.09)',
                    borderRadius: '16px',
                    padding: '2px 16px',
                    boxShadow: focusedField === 'custom' ? '0 0 0 4px rgba(26,58,42,0.06)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}>
                    {/* Shaded currency circle */}
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: focusedField === 'custom' ? activeBgLight : 'rgba(26, 58, 42, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '12px',
                      color: 'var(--green-dark)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      flexShrink: 0,
                      transition: 'all 0.3s'
                    }}>
                      ₹
                    </div>
                    
                    <input 
                      type="number" 
                      min="1"
                      placeholder="Custom amount" 
                      value={custom}
                      onChange={e => { 
                        if (e.target.value < 0) return;
                        setCustom(e.target.value); 
                        setSelected(null); 
                      }}
                      onFocus={() => setFocusedField('custom')}
                      onBlur={() => setFocusedField(null)}
                      style={{ 
                        padding: '14px 0', 
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        color: 'var(--green-dark)',
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        width: '100%'
                      }} 
                    />
                  </div>
                ) : (
                  // Premium glassmorphic benefits card block
                  <div style={{
                    background: 'rgba(200, 168, 74, 0.03)',
                    border: '1px solid rgba(200, 168, 74, 0.22)',
                    borderRadius: '20px',
                    padding: '24px',
                    boxShadow: '0 10px 30px rgba(200, 168, 74, 0.02)',
                    animation: 'revealUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-accent)" strokeWidth="2.5">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--green-dark)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: "'Inter', sans-serif" }}>
                        Monthly Partner Benefits
                      </h4>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <li style={{ fontSize: '0.85rem', color: 'var(--text-body)', display: 'flex', alignItems: 'start', gap: '8px', lineHeight: 1.45 }}>
                        <span style={{ color: 'var(--gold-accent)', fontWeight: 800 }}>✓</span> <strong>Sustained Planning:</strong> Helps us budget long-term learning tools and continuous clean water drives.
                      </li>
                      <li style={{ fontSize: '0.85rem', color: 'var(--text-body)', display: 'flex', alignItems: 'start', gap: '8px', lineHeight: 1.45 }}>
                        <span style={{ color: 'var(--gold-accent)', fontWeight: 800 }}>✓</span> <strong>Visionary Circle:</strong> Recipient of quarterly detailed structural reports & exclusive volunteer orientations.
                      </li>
                      <li style={{ fontSize: '0.85rem', color: 'var(--text-body)', display: 'flex', alignItems: 'start', gap: '8px', lineHeight: 1.45 }}>
                        <span style={{ color: 'var(--gold-accent)', fontWeight: 800 }}>✓</span> <strong>Impact Certainty:</strong> 100% of public funds buy program supplies directly on the ground.
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Fund Destination Pills with high-fidelity Micro-Icons */}
              <div style={{ marginBottom: '36px' }}>
                <label style={{ 
                  fontSize: '0.68rem', 
                  fontWeight: 700, 
                  letterSpacing: '0.12em', 
                  color: 'var(--text-label)', 
                  textTransform: 'uppercase', 
                  marginBottom: '16px', 
                  display: 'block', 
                  fontFamily: "'Inter', sans-serif" 
                }}>DIRECT FUNDS TO</label>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {FUNDS.map(f => {
                    const isActive = fund === f;
                    return (
                      <button 
                        key={f} 
                        type="button"
                        onClick={() => setFund(f)}
                        style={{
                          padding: '9px 18px', 
                          borderRadius: '999px', 
                          cursor: 'pointer', 
                          fontFamily: "'Inter', sans-serif", 
                          fontSize: '0.85rem',
                          fontWeight: isActive ? 700 : 500,
                          background: isActive ? accentColor : '#faf9f5',
                          color: isActive ? (frequency === 'monthly' ? '#11251a' : '#ffffff') : 'var(--text-body)',
                          border: isActive ? `1.5px solid ${accentColor}` : '1.5px solid rgba(26,58,42,0.08)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          transform: isActive ? 'translateY(-1px)' : 'none',
                          boxShadow: isActive ? '0 4px 10px rgba(0,0,0,0.03)' : 'none',
                          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                        onMouseEnter={e => {
                          if (!isActive) e.target.style.borderColor = accentColor;
                        }}
                        onMouseLeave={e => {
                          if (!isActive) e.target.style.borderColor = 'rgba(26,58,42,0.08)';
                        }}
                      >
                        {getFundIcon(f, isActive, accentColor)}
                        {f}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Donor Contact Credentials - rounded boxes with focus glow rings */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
                <div style={getInputCardStyle('name')}>
                  <input 
                    required
                    placeholder="Your name" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    style={{ 
                      padding: '12px 0', 
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: 'var(--green-dark)',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      width: '100%'
                    }} 
                  />
                </div>
                
                <div style={getInputCardStyle('email')}>
                  <input 
                    required
                    type="email"
                    placeholder="Email for receipt" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    style={{ 
                      padding: '12px 0', 
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: 'var(--green-dark)',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      width: '100%'
                    }} 
                  />
                </div>
              </div>

              {/* Optional message card text-area */}
              <div style={{ marginBottom: '38px' }}>
                <div style={getInputCardStyle('note')}>
                  <textarea 
                    placeholder="A note (optional)" 
                    value={note} 
                    onChange={e => setNote(e.target.value)} 
                    onFocus={() => setFocusedField('note')}
                    onBlur={() => setFocusedField(null)}
                    rows={2} 
                    style={{ 
                      padding: '12px 0', 
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: 'var(--green-dark)',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      width: '100%',
                      resize: 'none'
                    }} 
                  />
                </div>
              </div>

              {/* Footer CTA & Detailed Tax Footnote Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  style={{ 
                    fontSize: '0.98rem', 
                    padding: '16px 36px', 
                    borderRadius: '999px',
                    background: accentColor,
                    color: frequency === 'monthly' ? '#11251a' : '#ffffff',
                    border: 'none',
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    cursor: 'pointer',
                    boxShadow: frequency === 'monthly' ? '0 10px 25px rgba(200, 168, 74, 0.2)' : '0 10px 25px rgba(31, 71, 51, 0.15)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={e => {
                    e.target.style.background = accentHover;
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = frequency === 'monthly' ? '0 15px 30px rgba(200, 168, 74, 0.3)' : '0 15px 30px rgba(31, 71, 51, 0.25)';
                  }}
                  onMouseLeave={e => {
                    e.target.style.background = accentColor;
                    e.target.style.transform = 'none';
                    e.target.style.boxShadow = frequency === 'monthly' ? '0 10px 25px rgba(200, 168, 74, 0.2)' : '0 10px 25px rgba(31, 71, 51, 0.15)';
                  }}
                >
                  <svg className="pulsing-heart" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ transition: 'transform 0.2s' }}>
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.518 4.009 2 6.585 2c2.35 0 4.13 1.344 5.415 3.559C13.285 3.344 15.065 2 17.415 2 19.991 2 23 3.518 23 7.191c0 4.105-5.371 8.863-11 14.402z"/>
                  </svg>
                  <span>
                    {isSubmitting 
                      ? 'Securing Connection...' 
                      : `Donate ₹${amount.toLocaleString('en-IN')}${frequency === 'monthly' ? ' / month' : ''}`
                    }
                  </span>
                </button>
                
                {/* Structured info footnote grid */}
                <div style={{ display: 'flex', alignItems: 'start', gap: '10px', flex: 1 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                    <circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>
                  </svg>
                  <span style={{ 
                    fontSize: '0.78rem', 
                    color: 'var(--text-muted)', 
                    lineHeight: 1.45, 
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400
                  }}>
                    Eligible for 80G tax benefit. Official receipt and progress newsletters will be routed to your email.
                  </span>
                </div>
              </div>

            </form>
          </div>

        </div>
      </div>

      {/* SUCCESS RECEIPT DIALOG MODAL (High-Fidelity UI Overlap) */}
      {receipt && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 3000,
          background: 'rgba(26, 58, 42, 0.45)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          animation: 'fadeIn 0.3s ease-out forwards'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '520px',
            background: '#ffffff',
            borderRadius: '28px',
            border: '1px solid rgba(200, 168, 74, 0.35)',
            padding: '40px 48px',
            boxShadow: '0 30px 70px rgba(17,37,26,0.18)',
            textAlign: 'center',
            position: 'relative',
            animation: 'slideUpModal 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards'
          }}>
            
            {/* Beautiful Custom Checkmark Circle */}
            <div style={{
              width: '68px',
              height: '68px',
              borderRadius: '50%',
              background: frequency === 'monthly' ? 'rgba(200, 168, 74, 0.08)' : 'rgba(31,71,51,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              border: `1.5px solid ${frequency === 'monthly' ? 'var(--gold-accent)' : 'var(--green-btn)'}`
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={frequency === 'monthly' ? 'var(--gold-accent)' : 'var(--green-dark)'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h3 style={{ 
              fontSize: '1.8rem', 
              fontWeight: 500, 
              color: 'var(--green-dark)', 
              marginBottom: '10px',
              fontFamily: "'Playfair Display', serif"
            }}>
              Dhanyavad, {receipt.donorName}!
            </h3>
            
            <p style={{ 
              fontSize: '0.9rem', 
              color: 'var(--text-body)', 
              marginBottom: '32px', 
              lineHeight: 1.55, 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300 
            }}>
              Your noble transaction completed successfully. A formal receipt containing secure tax coordinates has been emailed.
            </p>

            {/* Premium Receipt Details Box */}
            <div style={{ 
              background: 'rgba(26,58,42,0.02)', 
              borderRadius: '20px', 
              border: '1px solid rgba(26,58,42,0.06)', 
              padding: '24px 28px', 
              textAlign: 'left',
              marginBottom: '32px',
              fontFamily: "'Inter', sans-serif"
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.78rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>RECEIPT NO:</span>
                <span style={{ fontWeight: 700, color: 'var(--green-dark)' }}>{receipt.receiptNo}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.78rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>DATE:</span>
                <span style={{ fontWeight: 700, color: 'var(--green-dark)' }}>{receipt.date}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.78rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>CONTRIBUTION:</span>
                <span style={{ fontWeight: 700, color: 'var(--green-dark)' }}>
                  ₹{receipt.amount.toLocaleString('en-IN')} {receipt.frequency === 'monthly' ? '/ month' : '(One-Time)'}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '0.78rem' }}>
                <span style={{ color: 'var(--text-muted)' }}>DIRECTED TO:</span>
                <span style={{ fontWeight: 700, color: 'var(--green-dark)' }}>{receipt.fund} Fund</span>
              </div>
              <div style={{ borderTop: '1px dashed rgba(26,58,42,0.12)', marginTop: '16px', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem' }}>
                <span style={{ color: 'var(--gold-accent)', fontWeight: 700 }}>TAX COORDINATES:</span>
                <span style={{ color: 'var(--green-dark)', fontWeight: 700 }}>{receipt.taxBenefit}</span>
              </div>
            </div>

            {/* Action Dialog Controls */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="button"
                onClick={() => window.print()}
                style={{ 
                  flex: 1, 
                  padding: '14px', 
                  borderRadius: '12px', 
                  border: '1.5px solid rgba(26,58,42,0.15)', 
                  background: 'transparent',
                  color: 'var(--green-dark)',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'background 0.25s'
                }}
                onMouseEnter={e => e.target.style.background = 'rgba(26,58,42,0.03)'}
                onMouseLeave={e => e.target.style.background = 'transparent'}
              >
                Print Receipt
              </button>
              
              <button
                type="button"
                onClick={handleCloseReceipt}
                style={{ 
                  flex: 1.2, 
                  padding: '14px', 
                  borderRadius: '12px', 
                  border: 'none', 
                  background: 'var(--green-btn)',
                  color: '#ffffff',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'background 0.25s'
                }}
                onMouseEnter={e => e.target.style.background = 'var(--green-hover)'}
                onMouseLeave={e => e.target.style.background = 'var(--green-btn)'}
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

      {/* High-quality UI Micro-Animations Stylesheet */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Pulsing heartbeat micro-animation for CTA heart icon */
        .pulsing-heart {
          animation: heartBeat 2s infinite ease-in-out;
        }
        
        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.16); }
          40% { transform: scale(1); }
          55% { transform: scale(1.12); }
          70% { transform: scale(1); }
        }

        /* Modal transitions */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUpModal {
          from { transform: translateY(40px) scale(0.96); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }

        @keyframes revealUp {
          from { transform: translateY(15px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @media (max-width: 1024px) {
          #donate > div > div { grid-template-columns: 1fr !important; gap: 64px !important; }
        }
        
        @media (max-width: 600px) {
          #donate > div > div > div:last-child {
            padding: 32px 24px !important;
          }
          #donate > div > div > div:last-child > div:nth-child(2) > div:first-child {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 10px !important;
          }
        }
      `}} />
    </section>
  );
}
