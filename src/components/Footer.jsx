import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer style={{ background: '#11251a', color: '#fff', padding: '100px 0 0', borderTop: '1px solid rgba(200, 168, 74, 0.2)' }}>
      <div className="container">
        {/* Big headline */}
        <h2 style={{ 
          fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
          fontWeight: 400, 
          color: '#fff', 
          lineHeight: 1.05, 
          letterSpacing: '-0.03em', 
          marginBottom: '80px' 
        }}>
          Let's build a <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: '#c8a84a' }}>cleaner</span>,<br />
          wiser India - together.
        </h2>

        {/* 4-column info grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '48px', paddingBottom: '64px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Link to="/" style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', border: '1.5px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c8a84a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </Link>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 500, color: '#fff', letterSpacing: '0.01em' }}>CSR & Educational</div>
                <div style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.12em', color: '#c8a84a', textTransform: 'uppercase' }}>INDIA FOUNDATION</div>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '28px', maxWidth: '320px', fontFamily: "'Inter', sans-serif" }}>
              A citizen-led non-profit working on environment, education, livelihood and social cohesion across communities in India.
            </p>
            <div style={{ marginBottom: '8px' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '10px' }}>QUARTERLY FIELD NOTES</div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ position: 'relative', flex: 1 }}>
                  <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c8a84a" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </span>
                  <input
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{ 
                      background: 'rgba(255,255,255,0.05)', 
                      border: '1px solid rgba(255,255,255,0.12)', 
                      color: '#fff', 
                      borderRadius: '999px', 
                      padding: '11px 16px 11px 40px', 
                      fontSize: '0.85rem', 
                      width: '100%',
                      outline: 'none',
                      fontFamily: "'Inter', sans-serif",
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={e => {
                      e.target.style.borderColor = '#c8a84a';
                      e.target.style.background = 'rgba(255,255,255,0.08)';
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'rgba(255,255,255,0.12)';
                      e.target.style.background = 'rgba(255,255,255,0.05)';
                    }}
                  />
                </div>
                <button style={{ 
                  background: '#c8a84a', 
                  border: 'none', 
                  color: '#11251a', 
                  borderRadius: '999px', 
                  padding: '11px 24px', 
                  cursor: 'pointer', 
                  fontSize: '0.85rem', 
                  fontWeight: 600, 
                  fontFamily: "'Inter', sans-serif", 
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={e => {
                    e.target.style.background = '#d9b95b';
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={e => {
                    e.target.style.background = '#c8a84a';
                    e.target.style.transform = 'none';
                  }}
                >JOIN</button>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '20px' }}>EXPLORE</div>
            {[
              { label: 'About', to: '/about' },
              { label: 'Focus areas', to: '/focus-areas' },
              { label: 'Leadership', to: '/leadership' },
              { label: 'Programs', to: '/programs' },
              { label: 'Media & stories', to: '/media' }
            ].map(l => (
              <Link key={l.label} to={l.to} style={{ display: 'block', fontSize: '0.92rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginBottom: '12px', transition: 'all 0.2s ease', fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => {
                  e.target.style.color = '#c8a84a';
                  e.target.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={e => {
                  e.target.style.color = 'rgba(255,255,255,0.7)';
                  e.target.style.transform = 'none';
                }}>{l.label}</Link>
            ))}
          </div>

          {/* Engage */}
          <div>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '20px' }}>ENGAGE</div>
            {[
              { label: 'Donate', to: '/donate' },
              { label: 'Volunteer', to: '/volunteer' },
              { label: 'Partner & CSR', to: '/partners' },
              { label: 'Contact Us', to: '/contact' }
            ].map(l => (
              <Link key={l.label} to={l.to} style={{ display: 'block', fontSize: '0.92rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginBottom: '12px', transition: 'all 0.2s ease', fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => {
                  e.target.style.color = '#c8a84a';
                  e.target.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={e => {
                  e.target.style.color = 'rgba(255,255,255,0.7)';
                  e.target.style.transform = 'none';
                }}>{l.label}</Link>
            ))}
          </div>

          {/* Reach Us */}
          <div>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginBottom: '20px' }}>REACH US</div>
            {[
              'info@csreif.org',
              '+91 98100 00000',
              'Sector 14, Noida\nUttar Pradesh - 201301',
            ].map((l, i) => (
              <div key={i} style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.65)', marginBottom: '14px', lineHeight: 1.5, whiteSpace: 'pre-line', fontFamily: "'Inter', sans-serif" }}>{l}</div>
            ))}
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
              {[
                <path key="ig" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>,
                <path key="fb" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>,
                <path key="li" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>,
                <polygon key="yt" points="23 7 16 12 23 17 23 7"/>,
              ].map((icon, i) => (
                <a key={i} href="#" style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', border: '1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(200, 168, 74, 0.15)';
                    e.currentTarget.style.borderColor = '#c8a84a';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', flexWrap: 'wrap', gap: '16px' }}>
          <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', fontFamily: "'Inter', sans-serif" }}>
            © 2026 CSR & Educational India Foundation. All rights reserved.
          </span>
          <Link to="/privacy" style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.2s', fontFamily: "'Inter', sans-serif" }}
            onMouseEnter={e => e.target.style.color = '#c8a84a'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.35)'}>Privacy</Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          footer > div > div:nth-child(2) { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          footer > div > div:nth-child(2) { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
