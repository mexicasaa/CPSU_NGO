import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Dynamic color configuration based on home page background (light vs dark)
  const textColor = isHome ? 'var(--green-dark)' : '#ffffff';
  const textMutedColor = isHome ? 'rgba(26, 58, 42, 0.75)' : 'rgba(255, 255, 255, 0.8)';
  const subtextColor = isHome ? 'var(--gold-accent)' : '#888888';
  const borderCTA = isHome ? '1px solid var(--green-dark)' : '1px solid rgba(255, 255, 255, 0.15)';
  const backgroundCTA = isHome ? 'rgba(26, 58, 42, 0.05)' : 'rgba(255, 255, 255, 0.08)';
  const hoverBackgroundCTA = isHome ? 'rgba(26, 58, 42, 0.1)' : 'rgba(255, 255, 255, 0.12)';

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
              border: isHome ? '1px solid rgba(26, 58, 42, 0.15)' : '1px solid rgba(255,255,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
            }}>
              <img src="/logo.jpg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: textColor, lineHeight: 1.2 }}>CSR & Educational</div>
              <div style={{ fontSize: '10px', fontWeight: 600, color: subtextColor, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '2px' }}>INDIA FOUNDATION</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hdr-nav">
            {NAV_LINKS.map(link => (
              <Link key={link.label} to={link.href} style={{
                fontSize: '14px', fontWeight: 400, color: textMutedColor,
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
                onMouseEnter={e => e.target.style.color = textColor}
                onMouseLeave={e => e.target.style.color = textMutedColor}
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
              color: textColor,
              background: backgroundCTA,
              border: borderCTA,
              transition: 'all 0.2s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = hoverBackgroundCTA;
                e.currentTarget.style.borderColor = isHome ? 'var(--green-mid)' : 'rgba(255, 255, 255, 0.25)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = backgroundCTA;
                e.currentTarget.style.borderColor = isHome ? 'var(--green-dark)' : 'rgba(255, 255, 255, 0.15)';
              }}
            >
              Donate
            </Link>
            
            <button onClick={() => setMenuOpen(!menuOpen)} className="hdr-hamburger" aria-label="Menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none', flexDirection: 'column', gap: 5 }}>
              <span style={{ display: 'block', width: 22, height: 1.5, background: textColor, transition: 'transform 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }} />
              <span style={{ display: 'block', width: 22, height: 1.5, background: textColor, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.3s' }} />
              <span style={{ display: 'block', width: 22, height: 1.5, background: textColor, transition: 'transform 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }} />
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
