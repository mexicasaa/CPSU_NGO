import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ_ITEMS = [
  {
    q: 'Is my donation eligible for tax exemption?',
    a: 'Yes, the CSR & Educational India Foundation is registered under Section 80G of the Income Tax Act. All domestic donations qualify for a tax deduction. Your receipt is emailed immediately.'
  },
  {
    q: 'How do I set up recurring monthly donations?',
    a: 'Simply select the "Monthly Support" tab on the donation panel. This helps us plan and sustain long-term operations. You can cancel or alter your monthly support at any time.'
  },
  {
    q: 'How is the transparent fund usage managed?',
    a: 'We operate under a strict "Ground First" mandate. 100% of public donations go directly to buying program supplies (water filters, native saplings, training kits, school books). Administrative costs are sponsored independently by our founders.'
  },
  {
    q: 'Can I donate from outside of India?',
    a: 'Currently, our online portal handles INR domestic cards, netbanking, and UPI. For foreign contributions (FCRA clearance), please contact us directly at aumdcarya@gmail.com to execute bank transfers.'
  }
];

export default function DonationPage() {
  const [frequency, setFrequency] = useState('one-time');
  const [selectedTier, setSelectedTier] = useState(2500);
  const [customAmount, setCustomAmount] = useState('');
  const [sponsorOption, setSponsorOption] = useState('most-needed');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', pan: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successReceipt, setSuccessReceipt] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const finalAmount = selectedTier === 'custom' ? Number(customAmount || 0) : selectedTier;

  const handleTierSelect = (amt) => {
    setSelectedTier(amt);
    if (amt !== 'custom') setCustomAmount('');
  };

  const handleDonateSubmit = (e) => {
    e.preventDefault();
    if (!finalAmount || finalAmount <= 0) {
      alert('Please specify a valid contribution amount.');
      return;
    }
    setIsSubmitting(true);

    // Simulate secure payment gateway
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessReceipt({
        receiptNo: `CSREIF-2026-${Math.floor(100000 + Math.random() * 900000)}`,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }),
        amount: finalAmount,
        frequency,
        sponsorOption: getSponsorLabel(sponsorOption),
        donorName: formData.name || 'Generous Supporter',
        taxBenefit: '80G Exemption (50% Deduction eligible)'
      });
    }, 1500);
  };

  const getSponsorLabel = (opt) => {
    switch (opt) {
      case 'water-purity': return 'Clean Water Filtration Kits';
      case 'student-literacy': return 'Sankalp Primary Education';
      case 'trade-skills': return 'Women Vocational Training';
      default: return 'General Fund (High Need Initiatives)';
    }
  };

  const getTierDesc = () => {
    if (selectedTier === 1000) return 'Provides a complete educational kit (school bag, books, geometry kit, and uniforms) for a child at a Sankalp center.';
    if (selectedTier === 2500) return 'Funds clean water filtration setups for a small suburban cluster or comprehensive trade toolkit training for one youth.';
    if (selectedTier === 5000) return 'Sponsors a cluster of native saplings (25 mature plants) with protection grids or tailors structural empowerment grants.';
    if (selectedTier === 'custom') return 'Every rupee contributes directly to clean living, educational opportunities, and family stability across India.';
    return '';
  };

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
      
      {/* Premium Hero Header */}
      <section style={{ 
        background: '#1a3a2a', 
        padding: '160px 0 100px', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: 'radial-gradient(circle at 80% 20%, rgba(200, 168, 74, 0.15) 0%, transparent 60%)', 
          pointerEvents: 'none' 
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ color: 'var(--green-icon)', margin: 0, display: 'inline-block', marginBottom: '16px' }}>
            TRANSPARENT DONATION PATHWAY
          </span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', 
              fontWeight: 400, 
              color: '#11251a', 
              lineHeight: 1.15, 
              letterSpacing: '-0.02em', 
              marginBottom: '24px' 
            }}
          >
            Invest in <span className="serif-italic" style={{ color: 'var(--green-icon)' }}>self-reliance</span> and environmental health.
          </motion.h1>
          <p style={{ fontSize: '1.15rem', maxWidth: '650px', color: 'rgba(17, 37, 26, 0.8)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
            Your support directly fuels clean air drives in Delhi, educational classrooms, and vocational toolkits. 100% of public funds reach our program execution.
          </p>
        </div>
      </section>

      <section style={{ padding: '100px 0 120px', background: 'var(--bg-main)' }}>
        <div className="container">
          
          {/* 2-Column Core Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '64px', alignItems: 'start' }} className="cinematic-reveal">
          
          {/* LEFT: Donation Panel Card */}
          <div style={{ 
            background: 'var(--bg-card)', 
            borderRadius: '24px', 
            border: '1px solid rgba(26,58,42,0.06)', 
            padding: '40px',
            boxShadow: 'var(--shadow-premium)'
          }}>
            <form onSubmit={handleDonateSubmit}>
              
              {/* One-Time vs. Monthly Frequency Toggle */}
              <div style={{ 
                display: 'flex', 
                background: 'rgba(26,58,42,0.04)', 
                borderRadius: '999px', 
                padding: '6px', 
                marginBottom: '32px',
                border: '1px solid rgba(26,58,42,0.06)'
              }}>
                <button
                  type="button"
                  onClick={() => setFrequency('one-time')}
                  style={{
                    flex: 1,
                    padding: '12px 24px',
                    borderRadius: '999px',
                    border: 'none',
                    background: frequency === 'one-time' ? 'var(--green-dark)' : 'transparent',
                    color: frequency === 'one-time' ? '#fff' : 'var(--text-body)',
                    fontWeight: 500,
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  One-Time Gift
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  style={{
                    flex: 1,
                    padding: '12px 24px',
                    borderRadius: '999px',
                    border: 'none',
                    background: frequency === 'monthly' ? 'var(--gold-accent)' : 'transparent',
                    color: frequency === 'monthly' ? '#11251a' : 'var(--text-body)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  Monthly Support
                </button>
              </div>

              {/* Tier Amount Grid */}
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--green-dark)', marginBottom: '16px', letterSpacing: '0.01em' }}>SELECT AN AMOUNT (INR)</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '24px' }}>
                {[1000, 2500, 5000, 'custom'].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => handleTierSelect(amt)}
                    style={{
                      padding: '14px 8px',
                      borderRadius: '12px',
                      border: selectedTier === amt ? '2px solid var(--green-dark)' : '1px solid rgba(26,58,42,0.12)',
                      background: selectedTier === amt ? 'rgba(26,58,42,0.03)' : 'transparent',
                      color: 'var(--green-dark)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      transition: 'all 0.2s ease',
                      textAlign: 'center'
                    }}
                  >
                    {amt === 'custom' ? 'Custom' : `₹${amt.toLocaleString('en-IN')}`}
                  </button>
                ))}
              </div>

              {/* Custom Amount Input & Tier Description */}
              {selectedTier === 'custom' && (
                <div style={{ marginBottom: '24px' }}>
                  <input
                    type="number"
                    placeholder="Enter Custom Amount (₹)"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    min="100"
                    style={{
                      background: 'transparent',
                      border: '1.5px solid var(--green-dark)',
                      borderRadius: '12px',
                      padding: '14px 20px',
                      fontSize: '1rem',
                      fontWeight: 500
                    }}
                  />
                </div>
              )}

              {frequency === 'monthly' ? (
                <div style={{
                  background: 'rgba(200,168,74,0.08)',
                  border: '1px solid rgba(200,168,74,0.2)',
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '32px'
                }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--green-icon)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    Monthly Partner Benefits
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li style={{ fontSize: '0.88rem', color: 'var(--text-body)', display: 'flex', alignItems: 'start', gap: '10px', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--green-icon)', fontWeight: 800 }}>✓</span> Exclusive quarterly field reports and raw impact metrics.
                    </li>
                    <li style={{ fontSize: '0.88rem', color: 'var(--text-body)', display: 'flex', alignItems: 'start', gap: '10px', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--green-icon)', fontWeight: 800 }}>✓</span> Direct invitations to our local community town-halls.
                    </li>
                    <li style={{ fontSize: '0.88rem', color: 'var(--text-body)', display: 'flex', alignItems: 'start', gap: '10px', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--green-icon)', fontWeight: 800 }}>✓</span> Sustainable, long-term impact that helps us plan ambitious, multi-year projects.
                    </li>
                  </ul>
                </div>
              ) : (
                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-body)',
                  background: 'rgba(26,58,42,0.04)',
                  borderLeft: '3px solid var(--green-dark)',
                  padding: '12px 18px',
                  borderRadius: '6px',
                  lineHeight: 1.5,
                  marginBottom: '32px'
                }}>
                  {getTierDesc()}
                </p>
              )}

              {/* Sponsorship Tiers */}
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--green-dark)', marginBottom: '16px', letterSpacing: '0.01em' }}>DIRECT MY CONTRIBUTION TO</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {[
                  { id: 'most-needed', label: 'Where it is needed most (General Welfare)' },
                  { id: 'water-purity', label: 'Clean Water Filters & Hygiene Equipment' },
                  { id: 'student-literacy', label: 'Sankalp Primary Education Supplies' },
                  { id: 'trade-skills', label: 'Women Livelihood Vocational Toolkits' }
                ].map((opt) => (
                  <label
                    key={opt.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      background: 'rgba(26,58,42,0.02)',
                      border: '1px solid rgba(26,58,42,0.05)',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      color: 'var(--text-body)',
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    <input
                      type="radio"
                      name="sponsorOption"
                      checked={sponsorOption === opt.id}
                      onChange={() => setSponsorOption(opt.id)}
                      style={{ width: '18px', height: '18px', accentColor: 'var(--green-dark)', margin: 0 }}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>

              {/* Donor Credentials Form */}
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--green-dark)', marginBottom: '16px', letterSpacing: '0.01em' }}>DONOR PARTICULARS (Tax Exemption Receipt)</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                <input
                  required
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={{ borderBottom: '1.5px solid rgba(26,58,42,0.15)', borderRadius: '0', padding: '10px 0', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
                />
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  style={{ borderBottom: '1.5px solid rgba(26,58,42,0.15)', borderRadius: '0', padding: '10px 0', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
                />
                <input
                  required
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  style={{ borderBottom: '1.5px solid rgba(26,58,42,0.15)', borderRadius: '0', padding: '10px 0', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
                />
                <input
                  placeholder="PAN Card Number (Optional)"
                  value={formData.pan}
                  onChange={e => setFormData({ ...formData, pan: e.target.value })}
                  style={{ borderBottom: '1.5px solid rgba(26,58,42,0.15)', borderRadius: '0', padding: '10px 0', borderTop: 'none', borderLeft: 'none', borderRight: 'none', textTransform: 'uppercase' }}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-green"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '16px',
                  borderRadius: '14px',
                  fontSize: '1rem',
                  fontWeight: 600
                }}
              >
                {isSubmitting ? 'Simulating Secure Gateway...' : `Proceed to Support ₹${finalAmount.toLocaleString('en-IN')}${frequency === 'monthly' ? ' / month' : ''}`}
              </button>

            </form>
          </div>

          {/* RIGHT: Fund Transparency, Security Badges & FAQ */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            
            {/* SVG Circular Fund Allocation Graph */}
            <div style={{ 
              background: 'var(--bg-card)', 
              borderRadius: '24px', 
              border: '1px solid rgba(26,58,42,0.06)', 
              padding: '36px',
              boxShadow: '0 10px 40px rgba(26,58,42,0.03)',
              display: 'flex',
              alignItems: 'center',
              gap: '28px'
            }}>
              <div style={{ position: 'relative', width: '130px', height: '130px', flexShrink: 0 }}>
                {/* Simulated circle graphic */}
                <svg width="130" height="130" viewBox="0 0 36 36">
                  {/* Outer circle track */}
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="rgba(26,58,42,0.04)" strokeWidth="3" />
                  
                  {/* Administrative Segment (10%) */}
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="var(--gold-accent)" strokeWidth="3" 
                    strokeDasharray="10 90" strokeDashoffset="25" />
                  
                  {/* Program Execution Segment (85%) */}
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="var(--green-dark)" strokeWidth="3.6" 
                    strokeDasharray="85 15" strokeDashoffset="115" />
                  
                  {/* Fundraising Segment (5%) */}
                  <circle cx="18" cy="18" r="15.915" fill="none" stroke="#102a43" strokeWidth="3" 
                    strokeDasharray="5 95" strokeDashoffset="120" />
                </svg>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--green-dark)', lineHeight: 1 }}>85%</div>
                  <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Direct</span>
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--green-dark)', marginBottom: '8px' }}>Radical Transparency</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                  <strong style={{ color: 'var(--green-dark)' }}>85%</strong> goes to field supplies, <strong style={{ color: 'var(--green-icon)' }}>10%</strong> administrative, <strong style={{ color: '#102a43' }}>5%</strong> advocacy/marketing. Founders independently fund senior admin costs.
                </p>
              </div>
            </div>

            {/* Credential Indicators */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {[
                { title: '80G Registered', label: 'Eligible for Tax Cuts' },
                { title: 'Verified Secure', label: 'SSL Crypt Encryption' },
                { title: 'ISO Audited', label: 'Annual Impact Review' }
              ].map((badge, idx) => (
                <div key={idx} style={{ 
                  background: 'var(--bg-card)', 
                  border: '1px solid rgba(26,58,42,0.06)', 
                  borderRadius: '16px', 
                  padding: '16px', 
                  textAlign: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.01)'
                }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: 'rgba(200,168,74,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 10px'
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gold-accent)" strokeWidth="2.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--green-dark)', marginBottom: '2px' }}>{badge.title}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{badge.label}</div>
                </div>
              ))}
            </div>

            {/* Interactive FAQs Accordion */}
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 500, color: 'var(--green-dark)', marginBottom: '20px' }}>Frequently Asked Questions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {FAQ_ITEMS.map((faq, idx) => {
                  const isOpen = expandedFaq === idx;
                  return (
                    <div key={idx} style={{ 
                      background: 'var(--bg-card)', 
                      border: '1px solid rgba(26,58,42,0.06)', 
                      borderRadius: '14px',
                      overflow: 'hidden',
                      transition: 'all 0.3s'
                    }}>
                      <button
                        type="button"
                        onClick={() => setExpandedFaq(isOpen ? null : idx)}
                        style={{
                          width: '100%',
                          padding: '18px 24px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <span style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--green-dark)', fontFamily: "'Inter', sans-serif" }}>{faq.q}</span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2.5" style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div style={{ padding: '0 24px 20px', fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.6, borderTop: '1px solid rgba(26,58,42,0.03)' }}>
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
        </div>
      </section>

      {/* Checkout Simulator Success Screen Modal */}
      <AnimatePresence>
        {successReceipt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
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
              padding: '24px'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              style={{
                width: '100%',
                maxWidth: '520px',
                background: '#fff',
                borderRadius: '24px',
                border: '1px solid rgba(200, 168, 74, 0.25)',
                padding: '40px',
                boxShadow: '0 30px 80px rgba(26,58,42,0.15)',
                textAlign: 'center',
                position: 'relative'
              }}
            >
              {/* Green Tick Badge */}
              <div style={{
                width: '64px', height: '64px', borderRadius: '50%',
                background: 'rgba(31,71,51,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <h2 style={{ fontSize: '1.75rem', fontWeight: 500, color: 'var(--green-dark)', marginBottom: '8px' }}>
                Dhanyavad, {successReceipt.donorName}!
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', marginBottom: '32px', lineHeight: 1.5 }}>
                Your transaction has completed successfully. A formal receipt containing tax deduction coordinates has been emailed.
              </p>

              {/* Receipt Breakdown Card */}
              <div style={{ 
                background: 'var(--bg-main)', 
                borderRadius: '16px', 
                border: '1px solid rgba(26,58,42,0.06)', 
                padding: '24px', 
                textAlign: 'left',
                marginBottom: '32px',
                fontFamily: "'Inter', sans-serif"
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>RECEIPT NO:</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--green-dark)' }}>{successReceipt.receiptNo}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>DATE:</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--green-dark)' }}>{successReceipt.date}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>CONTRIBUTION:</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--green-dark)' }}>
                    ₹{successReceipt.amount.toLocaleString('en-IN')} {successReceipt.frequency === 'monthly' ? '/ month' : '(One-Time)'}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>DIRECTED TO:</span>
                  <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--green-dark)', textAlign: 'right', maxWidth: '200px' }}>{successReceipt.sponsorOption}</span>
                </div>
                <div style={{ borderTop: '1px dashed rgba(26,58,42,0.1)', marginTop: '16px', paddingTop: '16px', display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--green-icon)', fontWeight: 600 }}>TAX STATUS:</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--green-dark)', fontWeight: 600 }}>{successReceipt.taxBenefit}</span>
                </div>
              </div>

              {/* Close and Return Button */}
              <button
                type="button"
                onClick={() => setSuccessReceipt(null)}
                className="btn-green"
                style={{ width: '100%', justifyContent: 'center', borderRadius: '12px' }}
              >
                Close Receipt
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
