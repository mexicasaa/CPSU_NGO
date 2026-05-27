import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'Donation / Partnership', message: '' });

  const update = k => e => setForm(p => ({ ...p, [k]: e.target.value }));

  return (
    <section id="contact" style={{ background: 'var(--bg-main)', padding: '140px 0 120px', borderTop: '1px solid rgba(26,58,42,0.05)' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', bottom: '-40px', right: '5%', width: '400px', height: '400px', zIndex: 0 }} className="ambient-glow-gold" />
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '80px', alignItems: 'start', position: 'relative', zIndex: 1 }}>

          {/* LEFT */}
          <div>
            <span className="eyebrow">GET IN TOUCH</span>
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', 
              fontWeight: 400, 
              color: 'var(--green-dark)', 
              lineHeight: 1.15, 
              letterSpacing: '-0.02em', 
              marginBottom: '24px' 
            }}>
              We would love to hear from you.
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '40px', fontWeight: 300 }}>
              For institutional partnerships, grassroots volunteering, media inquiries or general queries - please drop us a line or connect directly. WhatsApp is our fastest channel for direct community interaction.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                ), label: 'EMAIL OFFICE', value: 'aumdcarya@gmail.com', href: 'mailto:aumdcarya@gmail.com' },
                { icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                ), label: 'PHONE SUPPORT', value: '+91 98106 00994', href: 'tel:+919810600994' },
                { icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                ), label: 'WHATSAPP DIRECT', value: 'Chat on WhatsApp', href: 'https://wa.me/919810600994' },
              ].map((item, i) => (
                <a href={item.href} target="_blank" rel="noopener noreferrer" key={i} className="card hover-lift" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '20px', 
                  padding: '20px 24px',
                  background: 'var(--bg-card)',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  border: '1px solid rgba(26, 58, 42, 0.06)',
                  boxShadow: '0 10px 30px rgba(26,58,42,0.02)'
                }}>
                  <div style={{ 
                    width: 44, 
                    height: 44, 
                    borderRadius: '14px', 
                    background: 'rgba(26, 58, 42, 0.05)', 
                    color: 'var(--green-icon)',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }} className="contact-icon-box">
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: '4px' }}>{item.label}</div>
                    <div style={{ fontSize: '1rem', color: 'var(--green-dark)', fontWeight: 600 }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT - Form */}
          <div style={{ 
            background: '#ffffff', 
            borderRadius: '28px', 
            padding: '48px', 
            border: '1px solid rgba(26, 58, 42, 0.06)',
            boxShadow: '0 15px 45px rgba(26, 58, 42, 0.02)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '28px' }} className="form-row-2">
              <div style={{ borderBottom: '1.5px solid rgba(26, 58, 42, 0.15)', transition: 'border-color 0.3s ease' }} className="input-wrapper">
                <label style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', color: '#9ba8a1', textTransform: 'uppercase', marginBottom: '4px', display: 'block', fontFamily: "'Inter', sans-serif" }}>YOUR NAME</label>
                <input 
                  placeholder="e.g. Anjali Sharma" 
                  value={form.name} 
                  onChange={update('name')} 
                  style={{ 
                    padding: '10px 0', 
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'var(--green-dark)',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.95rem',
                    width: '100%'
                  }} 
                  onFocus={e => e.target.parentElement.style.borderColor = 'var(--gold-accent)'}
                  onBlur={e => e.target.parentElement.style.borderColor = 'rgba(26, 58, 42, 0.15)'}
                />
              </div>
              <div style={{ borderBottom: '1.5px solid rgba(26, 58, 42, 0.15)', transition: 'border-color 0.3s ease' }} className="input-wrapper">
                <label style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', color: '#9ba8a1', textTransform: 'uppercase', marginBottom: '4px', display: 'block', fontFamily: "'Inter', sans-serif" }}>EMAIL ADDRESS</label>
                <input 
                  placeholder="you@example.com" 
                  value={form.email} 
                  onChange={update('email')} 
                  style={{ 
                    padding: '10px 0', 
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'var(--green-dark)',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.95rem',
                    width: '100%'
                  }} 
                  onFocus={e => e.target.parentElement.style.borderColor = 'var(--gold-accent)'}
                  onBlur={e => e.target.parentElement.style.borderColor = 'rgba(26, 58, 42, 0.15)'}
                />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '28px' }} className="form-row-2">
              <div style={{ borderBottom: '1.5px solid rgba(26, 58, 42, 0.15)', transition: 'border-color 0.3s ease' }} className="input-wrapper">
                <label style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', color: '#9ba8a1', textTransform: 'uppercase', marginBottom: '4px', display: 'block', fontFamily: "'Inter', sans-serif" }}>PHONE NUMBER</label>
                <input 
                  placeholder="+91" 
                  value={form.phone} 
                  onChange={update('phone')} 
                  style={{ 
                    padding: '10px 0', 
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'var(--green-dark)',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.95rem',
                    width: '100%'
                  }} 
                  onFocus={e => e.target.parentElement.style.borderColor = 'var(--gold-accent)'}
                  onBlur={e => e.target.parentElement.style.borderColor = 'rgba(26, 58, 42, 0.15)'}
                />
              </div>
              <div style={{ borderBottom: '1.5px solid rgba(26, 58, 42, 0.15)', transition: 'border-color 0.3s ease' }} className="input-wrapper">
                <label style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', color: '#9ba8a1', textTransform: 'uppercase', marginBottom: '4px', display: 'block', fontFamily: "'Inter', sans-serif" }}>REACHING OUT ABOUT</label>
                <select 
                  value={form.subject} 
                  onChange={update('subject')} 
                  style={{ 
                    padding: '10px 0', 
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: 'var(--green-dark)',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.95rem',
                    width: '100%',
                    cursor: 'pointer'
                  }} 
                  onFocus={e => e.target.parentElement.style.borderColor = 'var(--gold-accent)'}
                  onBlur={e => e.target.parentElement.style.borderColor = 'rgba(26, 58, 42, 0.15)'}
                >
                  <option style={{ background: '#fff' }}>Donation / Partnership</option>
                  <option style={{ background: '#fff' }}>Volunteering</option>
                  <option style={{ background: '#fff' }}>Media / Press</option>
                  <option style={{ background: '#fff' }}>General Query</option>
                  <option style={{ background: '#fff' }}>CSR Collaboration</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '40px', borderBottom: '1.5px solid rgba(26, 58, 42, 0.15)' }} className="input-wrapper">
              <label style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', color: '#9ba8a1', textTransform: 'uppercase', marginBottom: '4px', display: 'block', fontFamily: "'Inter', sans-serif" }}>YOUR MESSAGE</label>
              <textarea 
                placeholder="Tell us how you would like to engage with the foundation..." 
                value={form.message} 
                onChange={update('message')} 
                rows={4} 
                style={{ 
                  padding: '10px 0', 
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--green-dark)',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.95rem',
                  width: '100%',
                  resize: 'none'
                }} 
                onFocus={e => e.target.parentElement.style.borderColor = 'var(--gold-accent)'}
                onBlur={e => e.target.parentElement.style.borderColor = 'rgba(26, 58, 42, 0.15)'}
              />
            </div>

            <button 
              className="btn-green hover-lift" 
              style={{ 
                fontSize: '0.95rem', 
                padding: '16px 36px',
                borderRadius: '999px',
                background: 'var(--green-dark)',
                color: '#ffffff',
                border: 'none',
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(26,58,42,0.15)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={e => {
                e.target.style.background = 'var(--green-mid)';
                e.target.style.transform = 'translateY(-1px)';
                e.target.style.boxShadow = '0 15px 35px rgba(26,58,42,0.25)';
              }}
              onMouseLeave={e => {
                e.target.style.background = 'var(--green-dark)';
                e.target.style.transform = 'none';
                e.target.style.boxShadow = '0 10px 30px rgba(26,58,42,0.15)';
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              Send Message
            </button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .card:hover .contact-icon-box {
          background: var(--gold-accent) !important;
          color: var(--green-dark) !important;
        }
        @media (max-width: 1024px) {
          #contact > div > div { grid-template-columns: 1fr !important; gap: 56px !important; }
        }
        @media (max-width: 640px) {
          #contact { padding: 100px 0 60px !important; }
          #contact > div > div > div:last-child {
            padding: 32px !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}} />
    </section>
  );
}
