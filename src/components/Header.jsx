import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Focus Areas', href: '/focus-areas' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Programs', href: '/programs' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Partners & CSR', href: '/partners' },
  { label: 'Media', href: '/media' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="transparent-navbar" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        borderBottom: 'none',
      }}>
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 40px',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: '#ffffff', lineHeight: 1.2 }}>CSR & Educational</div>
              <div style={{ fontSize: '10px', fontWeight: 600, color: '#888888', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '2px' }}>INDIA FOUNDATION</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hdr-nav">
            {NAV_LINKS.map(link => (
              <Link key={link.label} to={link.href} style={{
                fontSize: '14px', fontWeight: 400, color: 'rgba(255, 255, 255, 0.8)',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
                onMouseEnter={e => e.target.style.color = '#ffffff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
              >{link.label}</Link>
            ))}
          </nav>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <Link to="/donate" style={{
              padding: '10px 28px',
              fontSize: '14px',
              borderRadius: '999px',
              textDecoration: 'none',
              fontWeight: 500,
              color: '#ffffff',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              transition: 'all 0.2s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              }}
            >
              Donate
            </Link>
            
            <button onClick={() => setMenuOpen(!menuOpen)} className="hdr-hamburger" aria-label="Menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none', flexDirection: 'column', gap: 5 }}>
              <span style={{ display: 'block', width: 22, height: 1.5, background: '#ffffff', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }} />
              <span style={{ display: 'block', width: 22, height: 1.5, background: '#ffffff', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.3s' }} />
              <span style={{ display: 'block', width: 22, height: 1.5, background: '#ffffff', transition: 'transform 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          background: '#0c100e',
          padding: '24px',
        }}>
          {NAV_LINKS.map(link => (
            <Link key={link.label} to={link.href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', padding: '16px 0',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '18px',
            }}>{link.label}</Link>
          ))}
          <Link to="/donate" onClick={() => setMenuOpen(false)} style={{
            marginTop: 32,
            display: 'flex',
            justifyContent: 'center',
            padding: '16px',
            borderRadius: '999px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 500,
            background: '#ffffff',
            color: '#0c100e',
          }}>Donate</Link>
        </div>
      )}

      <style>{`
        .transparent-navbar {
          background-color: transparent !important;
        }
        @media (max-width: 1024px) {
          .hdr-nav { display: none !important; }
          .hdr-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
