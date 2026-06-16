import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { db } from '../utils/db';

export default function Footer() {
  const [email, setEmail] = useState('');
  const location = useLocation();
  const isPreview = new URLSearchParams(location.search).get('preview') === 'true';
  const settings = db.getSettings(isPreview);
  
  // Apply orange styling ONLY on the Mantra page
  const isMantraPage = location.pathname === '/mantra';

  // Theme object for conditional styling
  const t = isMantraPage ? {
    bg: '#F47C20',
    textMain: '#ffffff',
    textMuted: 'rgba(255,255,255,0.85)',
    textLabel: 'rgba(255,255,255,0.7)',
    accent: '#ffffff',
    accentHover: '#f0f0f0',
    border: 'rgba(255,255,255,0.2)',
    divider: 'rgba(255,255,255,0.15)',
    inputBg: '#ffffff',
    inputBorder: 'rgba(255,255,255,0.3)',
    iconBg: 'rgba(255,255,255,0.1)',
    iconBgHover: 'rgba(255,255,255,0.25)',
    iconBorder: 'rgba(255,255,255,0.2)',
    btnText: '#F47C20',
    svgIcon: '#ffffff'
  } : {
    bg: '#1a3a2a',
    textMain: '#ffffff',
    textMuted: 'rgba(255,255,255,0.65)',
    textLabel: 'rgba(255,255,255,0.5)',
    accent: '#c8a84a',
    accentHover: '#d9b95b',
    border: 'rgba(200, 168, 74, 0.2)',
    divider: 'rgba(255,255,255,0.08)',
    inputBg: '#ffffff',
    inputBorder: 'rgba(255,255,255,0.15)',
    iconBg: 'rgba(255,255,255,0.06)',
    iconBgHover: 'rgba(200, 168, 74, 0.15)',
    iconBorder: 'rgba(255,255,255,0.08)',
    btnText: '#ffffff',
    svgIcon: 'rgba(255,255,255,0.8)'
  };

  return (
    <footer style={{ background: t.bg, color: t.textMain, padding: '100px 0 0', borderTop: `1px solid ${t.border}`, transition: 'background 0.3s ease' }}>
      <div className="container">
        {/* Big headline */}
        <h2 style={{ 
          fontSize: 'clamp(2.5rem, 6vw, 5rem)', 
          fontWeight: 400, 
          color: t.textMain, 
          lineHeight: 1.05, 
          letterSpacing: '-0.03em', 
          marginBottom: '80px' 
        }}>
          Let's build a <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', color: t.accent }}>cleaner</span>,<br />
          wiser India - together.
        </h2>

        {/* 4-column info grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '48px', paddingBottom: '64px', borderBottom: `1px solid ${t.divider}` }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <Link to="/" style={{ width: 44, height: 44, borderRadius: '50%', background: t.iconBg, border: `1.5px solid ${t.iconBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'all 0.3s ease', overflow: 'hidden' }}>
                <img src={settings.logo || "/logo.jpg"} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </Link>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 500, color: t.textMain, letterSpacing: '0.01em' }}>CSR & Educational</div>
                <div style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.12em', color: t.accent, textTransform: 'uppercase' }}>INDIA FOUNDATION</div>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', color: t.textMuted, lineHeight: 1.7, marginBottom: '28px', maxWidth: '320px', fontFamily: "'Inter', sans-serif" }}>
              A citizen-led non-profit working on environment, education, livelihood and social cohesion across communities in India.
            </p>
            <div style={{ marginBottom: '8px' }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: t.textLabel, textTransform: 'uppercase', marginBottom: '10px' }}>QUARTERLY FIELD NOTES</div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ position: 'relative', flex: 1 }}>
                  <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={t.accent} strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </span>
                  <input
                    placeholder="you@example.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={{ 
                      background: t.inputBg, 
                      border: `1px solid ${t.inputBorder}`, 
                      color: '#11251a', 
                      borderRadius: '999px', 
                      padding: '11px 16px 11px 40px', 
                      fontSize: '0.85rem', 
                      width: '100%',
                      outline: 'none',
                      fontFamily: "'Inter', sans-serif",
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={e => {
                      e.target.style.borderColor = t.accent;
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = t.inputBorder;
                    }}
                  />
                </div>
                <button style={{ 
                  background: t.accent, 
                  border: 'none', 
                  color: t.btnText, 
                  borderRadius: '999px', 
                  padding: '11px 24px', 
                  cursor: 'pointer', 
                  fontSize: '0.85rem', 
                  fontWeight: 700, 
                  fontFamily: "'Inter', sans-serif", 
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease'
                }}
                  onMouseEnter={e => {
                    e.target.style.background = t.accentHover;
                    e.target.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={e => {
                    e.target.style.background = t.accent;
                    e.target.style.transform = 'none';
                  }}
                >JOIN</button>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: t.textLabel, textTransform: 'uppercase', marginBottom: '20px' }}>EXPLORE</div>
            {[
              { label: 'About Us', to: '/about' },
              { label: 'Programs & Focus Areas', to: '/programs' },
              { label: 'Leadership', to: '/leadership' },
              { label: 'Media & stories', to: '/media' }
            ].map(l => (
              <Link key={l.label} to={l.to} style={{ display: 'block', fontSize: '0.92rem', color: t.textMuted, textDecoration: 'none', marginBottom: '12px', transition: 'all 0.2s ease', fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => {
                  e.target.style.color = t.accent;
                  e.target.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={e => {
                  e.target.style.color = t.textMuted;
                  e.target.style.transform = 'none';
                }}>{l.label}</Link>
            ))}
          </div>

          {/* Engage */}
          <div>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: t.textLabel, textTransform: 'uppercase', marginBottom: '20px' }}>ENGAGE</div>
            {[
              { label: 'Donate', to: '/donate' },
              { label: 'Volunteer', to: '/volunteer' },
              { label: 'Partner & CSR', to: '/partners' },
              { label: 'Careers', to: '/careers' },
              { label: 'Contact Us', to: '/contact' }
            ].map(l => (
              <Link key={l.label} to={l.to} style={{ display: 'block', fontSize: '0.92rem', color: t.textMuted, textDecoration: 'none', marginBottom: '12px', transition: 'all 0.2s ease', fontFamily: "'Inter', sans-serif" }}
                onMouseEnter={e => {
                  e.target.style.color = t.accent;
                  e.target.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={e => {
                  e.target.style.color = t.textMuted;
                  e.target.style.transform = 'none';
                }}>{l.label}</Link>
            ))}
          </div>

          {/* Reach Us */}
          <div>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: t.textLabel, textTransform: 'uppercase', marginBottom: '20px' }}>REACH Us</div>
            {[
              settings.email || 'aumdcarya@gmail.com',
              settings.phone || '+91 98106 00994',
              settings.address || 'B2A-102 Golflinks Residency\nSector 18 B, Dwarka New Delhi-110078',
            ].map((l, i) => (
              <div key={i} style={{ fontSize: '0.88rem', color: t.textMuted, marginBottom: '14px', lineHeight: 1.5, whiteSpace: 'pre-line', fontFamily: "'Inter', sans-serif" }}>{l}</div>
            ))}
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '24px' }}>
              {[
                { url: settings.socials?.instagram || '#', icon: <path key="ig" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/> },
                { url: settings.socials?.facebook || '#', icon: <path key="fb" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/> },
                { url: settings.socials?.linkedin || '#', icon: <path key="li" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/> },
                { url: settings.socials?.youtube || '#', icon: <polygon key="yt" points="23 7 16 12 23 17 23 7"/> },
              ].map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" style={{ width: 38, height: 38, borderRadius: '50%', background: t.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', border: `1px solid ${t.iconBorder}` }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = t.iconBgHover;
                    e.currentTarget.style.borderColor = t.accent;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = t.iconBg;
                    e.currentTarget.style.borderColor = t.iconBorder;
                  }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={t.svgIcon} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0', flexWrap: 'wrap', gap: '16px' }}>
          <span style={{ fontSize: '0.82rem', color: t.textLabel, fontFamily: "'Inter', sans-serif" }}>
            © 2026 CSR & Educational India Foundation. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/privacy-policy" style={{ fontSize: '0.82rem', color: t.textLabel, textDecoration: 'none', transition: 'color 0.2s', fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={e => e.target.style.color = t.accent}
              onMouseLeave={e => e.target.style.color = t.textLabel}>Privacy Policy</Link>
            <Link to="/terms-conditions" style={{ fontSize: '0.82rem', color: t.textLabel, textDecoration: 'none', transition: 'color 0.2s', fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={e => e.target.style.color = t.accent}
              onMouseLeave={e => e.target.style.color = t.textLabel}>Terms & Conditions</Link>
            <Link to="/disclaimer" style={{ fontSize: '0.82rem', color: t.textLabel, textDecoration: 'none', transition: 'color 0.2s', fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={e => e.target.style.color = t.accent}
              onMouseLeave={e => e.target.style.color = t.textLabel}>Disclaimer</Link>
            <Link to={isPreview ? "/admin?preview=true" : "/admin"} style={{ fontSize: '0.82rem', color: t.textLabel, textDecoration: 'none', transition: 'color 0.2s', fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={e => e.target.style.color = t.accent}
              onMouseLeave={e => e.target.style.color = t.textLabel}>Admin Portal</Link>
          </div>
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
