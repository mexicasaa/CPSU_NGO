import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const opportunityOptions = [
  "Volunteer Programs",
  "Internship Opportunities",
  "Community Outreach Support",
  "Social Media & Communication Assistance",
  "Event Coordination",
  "Research & Awareness Initiatives"
];

const OPPORTUNITIES = [
  {
    title: 'Volunteer Programs',
    desc: 'Engage on the ground in our environmental campaigns, educational initiatives, or community outreach drives.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    title: 'Internship Opportunities',
    desc: 'Gain practical experience in social sector operations, field coordination, and community engagement structures.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    )
  },
  {
    title: 'Community Outreach Support',
    desc: 'Work directly with resident associations and local leaders to organize social welfare and value-driven initiatives.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  },
  {
    title: 'Social Media & Communication Assistance',
    desc: 'Help write compelling copy, design visual posts, capture event photography, and amplify public awareness campaigns.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    )
  },
  {
    title: 'Event Coordination',
    desc: 'Structure, coordinate, and execute environmental seminars, vocational workshops, and public outreach events.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    )
  },
  {
    title: 'Research & Awareness Initiatives',
    desc: 'Conduct surveys and research on pollution control, educational requirements, and social values to inform our strategy.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    )
  }
];

export default function CareersPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', opportunityType: 'Volunteer Programs', resumeLink: '', coverLetter: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
      
      {/* 1. Cinematic Hero Section */}
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
          <span className="eyebrow" style={{ color: 'var(--gold-accent)', margin: 0, display: 'inline-block', marginBottom: '16px' }}>CAREERS & OPPORTUNITIES</span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', 
              fontWeight: 400, 
              color: '#ffffff', 
              lineHeight: 1.15, 
              letterSpacing: '-0.02em', 
              marginBottom: '24px',
              maxWidth: '900px'
            }}
          >
            Join our mission to build a <span className="serif-italic" style={{ color: 'var(--gold-accent)' }}>healthier, value-driven</span> society.
          </motion.h1>
          <p style={{ fontSize: '1.15rem', maxWidth: '750px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
            CSR & Educational India Foundation welcomes passionate individuals who wish to contribute towards social impact and community development. We offer opportunities for individuals interested in volunteering, internships, awareness campaigns, event coordination, communication support, and educational initiatives.
          </p>
        </div>
      </section>

      {/* 2. Opportunities Section */}
      <section style={{ padding: '100px 0', background: 'var(--bg-main)' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="eyebrow" style={{ color: 'var(--green-icon)', justifyContent: 'center' }}>DEPARTMENTS</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--green-dark)', fontWeight: 400, marginTop: '8px' }}>
              Opportunities May Include
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }} className="cinematic-reveal">
            {OPPORTUNITIES.map((opp, idx) => (
              <div key={idx} className="card hover-lift" style={{ 
                background: 'var(--bg-card)', 
                border: '1px solid rgba(26,58,42,0.06)', 
                borderRadius: '24px', 
                padding: '36px',
                boxShadow: 'var(--shadow-premium)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'rgba(200, 168, 74, 0.08)',
                  color: 'var(--green-icon)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {opp.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--green-dark)' }}>{opp.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>{opp.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Join Our Mission & Apply Section */}
      <section style={{ padding: '100px 0 120px', background: 'var(--bg-section)', borderTop: '1px solid rgba(26,58,42,0.06)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'start' }} className="form-split">
            
            {/* Left Info Column */}
            <div>
              <span className="eyebrow" style={{ color: 'var(--green-icon)' }}>JOIN OUR MISSION</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--green-dark)', fontWeight: 400, marginTop: '8px', marginBottom: '24px' }}>
                Be part of our journey towards <span className="serif-italic" style={{ color: 'var(--green-icon)' }}>positive social change.</span>
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.75, marginBottom: '32px' }}>
                If you are committed to creating positive social and environmental change, we welcome you to be part of our journey towards building a healthier, educated, and responsible society.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { title: 'Empowering Communities', desc: 'Work directly on initiatives centered around pollution awareness, local education, and family moral structures.' },
                  { title: 'Professional Growth', desc: 'Gain unique field experience, lead programs, and build robust public relations and operations capabilities.' },
                  { title: 'Transparent Culture', desc: 'Collaborate with a humble, zero-greed, and value-driven leadership dedicated to authentic public welfare.' }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ 
                      width: '28px', height: '28px', borderRadius: '50%',
                      background: 'rgba(200, 168, 74, 0.1)', color: 'var(--green-icon)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, fontSize: '0.8rem', fontWeight: 600
                    }}>
                      ✓
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--green-dark)', marginBottom: '4px' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Application Form */}
            <div style={{ position: 'relative' }}>
              <div style={{ 
                position: 'absolute', 
                top: '-30px', 
                left: '-30px', 
                right: '-30px', 
                bottom: '-30px', 
                background: 'radial-gradient(circle, rgba(200,168,74,0.06) 0%, transparent 60%)', 
                filter: 'blur(30px)',
                pointerEvents: 'none'
              }} />

              <div style={{ 
                background: 'var(--bg-card)', 
                borderRadius: '28px', 
                border: '1.5px solid rgba(26,58,42,0.06)', 
                padding: '48px',
                position: 'relative',
                zIndex: 2,
                boxShadow: 'var(--shadow-premium)'
              }}>
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form 
                      key="career-form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
                    >
                      <h3 style={{ fontSize: '1.4rem', fontWeight: 500, color: 'var(--green-dark)', marginBottom: '8px' }}>Career Inquiry Form</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>Provide your contact information, select an area of interest, and share how you wish to contribute to the mission.</p>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <input
                          required
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          style={{ borderBottom: '1.5px solid rgba(26,58,42,0.15)', borderRadius: '0', padding: '12px 0', borderTop: 'none', borderLeft: 'none', borderRight: 'none', background: 'transparent', fontSize: '1rem' }}
                        />
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <input
                          required
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          style={{ borderBottom: '1.5px solid rgba(26,58,42,0.15)', borderRadius: '0', padding: '12px 0', borderTop: 'none', borderLeft: 'none', borderRight: 'none', background: 'transparent', fontSize: '1rem' }}
                        />
                        <input
                          required
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          style={{ borderBottom: '1.5px solid rgba(26,58,42,0.15)', borderRadius: '0', padding: '12px 0', borderTop: 'none', borderLeft: 'none', borderRight: 'none', background: 'transparent', fontSize: '1rem' }}
                        />
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
                        <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Opportunity Interest</label>
                        
                        <div 
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          style={{ 
                            padding: '12px 0', 
                            borderBottom: `1.5px solid ${isDropdownOpen ? 'var(--green-dark)' : 'rgba(26,58,42,0.15)'}`, 
                            background: 'transparent', 
                            fontSize: '1rem', 
                            color: 'var(--green-dark)', 
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            transition: 'border-color 0.2s ease'
                          }}
                        >
                          <span>{formData.opportunityType}</span>
                          <motion.svg 
                            animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </motion.svg>
                        </div>

                        <AnimatePresence>
                          {isDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.15 }}
                              style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                right: 0,
                                background: 'var(--bg-card)',
                                borderRadius: '12px',
                                border: '1px solid rgba(26,58,42,0.1)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                zIndex: 10,
                                marginTop: '4px',
                                overflow: 'hidden'
                              }}
                            >
                              {opportunityOptions.map((opt, i) => (
                                <div
                                  key={i}
                                  onClick={() => {
                                    setFormData({ ...formData, opportunityType: opt });
                                    setIsDropdownOpen(false);
                                  }}
                                  style={{
                                    padding: '12px 16px',
                                    cursor: 'pointer',
                                    fontSize: '0.95rem',
                                    color: formData.opportunityType === opt ? 'var(--green-dark)' : 'var(--text-body)',
                                    background: formData.opportunityType === opt ? 'rgba(31,71,51,0.05)' : 'transparent',
                                    fontWeight: formData.opportunityType === opt ? 600 : 400,
                                    transition: 'background 0.2s ease, color 0.2s ease'
                                  }}
                                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(31,71,51,0.03)'}
                                  onMouseLeave={(e) => e.currentTarget.style.background = formData.opportunityType === opt ? 'rgba(31,71,51,0.05)' : 'transparent'}
                                >
                                  {opt}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <input
                          placeholder="Resume Link (Google Drive, Dropbox, etc. - Optional)"
                          value={formData.resumeLink}
                          onChange={e => setFormData({ ...formData, resumeLink: e.target.value })}
                          style={{ borderBottom: '1.5px solid rgba(26,58,42,0.15)', borderRadius: '0', padding: '12px 0', borderTop: 'none', borderLeft: 'none', borderRight: 'none', background: 'transparent', fontSize: '1rem' }}
                        />
                      </div>

                      <textarea
                        required
                        placeholder="Tell us about yourself and how you would like to support the foundation..."
                        value={formData.coverLetter}
                        onChange={e => setFormData({ ...formData, coverLetter: e.target.value })}
                        rows={4}
                        style={{ borderBottom: '1.5px solid rgba(26,58,42,0.15)', borderRadius: '0', padding: '12px 0', borderTop: 'none', borderLeft: 'none', borderRight: 'none', background: 'transparent', resize: 'vertical', fontSize: '1rem' }}
                      />

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-green hover-lift"
                        style={{ width: '100%', justifyContent: 'center', padding: '18px', borderRadius: '14px', fontSize: '1rem', fontWeight: 600, marginTop: '20px', background: 'var(--green-btn)' }}
                      >
                        {isSubmitting ? 'Submitting Application...' : 'Send Inquiry'}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="career-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      style={{ textAlign: 'center', padding: '24px 0' }}
                    >
                      <div style={{
                        width: '56px', height: '56px', borderRadius: '50%',
                        background: 'rgba(31,71,51,0.08)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 20px'
                      }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--green-dark)', marginBottom: '12px' }}>Application Sent Successfully</h3>
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '28px' }}>
                        Thank you for your interest, <strong style={{ color: 'var(--green-dark)' }}>{formData.name}</strong>. We have received your inquiry for <strong style={{ color: 'var(--green-dark)' }}>{formData.opportunityType}</strong>. Our human resources coordinator will review your profile and connect with you shortly.
                      </p>
                      <button
                        type="button"
                        onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', opportunityType: 'Volunteer Programs', resumeLink: '', coverLetter: '' }); }}
                        className="btn-outline-dark"
                        style={{ borderRadius: '12px', padding: '12px 28px' }}
                      >
                        Submit Another Inquiry
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
