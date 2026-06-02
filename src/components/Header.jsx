import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Programs', href: '/programs' },
  { label: 'Focus Areas', href: '/focus-areas' },
  { label: 'Partners & CSR', href: '/partners' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Media', href: '/media' },
  { 
    label: 'About', 
    href: '/about',
    submenu: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Mission', href: '/mission' },
      { label: 'Our Vision', href: '/vision' },
      { label: 'Core Statements', href: '/statements' },
      { label: 'Our Mantra', href: '/mantra' },
    ]
  },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Premium transparent theme with high-legibility white/gold text over video and dark green backgrounds
  const textColor = scrolled ? '#1a3a2a' : '#ffffff';
  const textMutedColor = scrolled ? 'rgba(26, 58, 42, 0.7)' : 'rgba(255, 255, 255, 0.8)';
  const subtextColor = scrolled ? '#1a3a2a' : 'var(--gold-accent)';
  const borderCTA = scrolled ? '1px solid rgba(26, 58, 42, 0.25)' : '1px solid rgba(255, 255, 255, 0.25)';
  const backgroundCTA = scrolled ? 'rgba(26, 58, 42, 0.08)' : 'rgba(255, 255, 255, 0.08)';
  const hoverBackgroundCTA = scrolled ? 'rgba(26, 58, 42, 0.15)' : 'rgba(255, 255, 255, 0.15)';

  return (
    <>
      <header className={scrolled ? "scrolled-navbar" : "transparent-navbar"} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        borderBottom: 'none',
        transition: 'all 0.3s ease-in-out',
      }}>
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '0 40px',
          height: scrolled ? '70px' : '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'height 0.3s ease-in-out',
        }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: scrolled ? 'rgba(26, 58, 42, 0.05)' : 'rgba(255,255,255,0.03)',
              border: scrolled ? '1px solid rgba(26, 58, 42, 0.15)' : '1px solid rgba(255, 255, 255, 0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              transition: 'all 0.3s ease'
            }}>
              <img src="/logo.jpg" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: textColor, lineHeight: 1.2 }}>CSR & Educational</div>
              <div style={{ fontSize: '10px', fontWeight: 700, color: subtextColor, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '2px', textShadow: '0 1px 2px rgba(0,0,0,0.15)' }}>INDIA FOUNDATION</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hdr-nav">
            {NAV_LINKS.map(link => {
              if (link.submenu) {
                return (
                  <div key={link.label} className="nav-item-dropdown" style={{ position: 'relative' }}>
                    <Link to={link.href} style={{
                      fontSize: '14px', fontWeight: 400, color: textMutedColor,
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '8px 0',
                    }}
                      onMouseEnter={e => e.currentTarget.style.color = textColor}
                      onMouseLeave={e => e.currentTarget.style.color = textMutedColor}
                    >
                      {link.label}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transition: 'transform 0.2s' }} className="dropdown-arrow-svg">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </Link>
                    <div className="submenu-dropdown" style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%) translateY(10px)',
                      background: 'var(--green-dark)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '16px',
                      padding: '12px 0',
                      minWidth: '185px',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                      zIndex: 100,
                      opacity: 0,
                      pointerEvents: 'none',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}>
                      {link.submenu.map(sub => (
                        <Link key={sub.label} to={sub.href} style={{
                          display: 'block',
                          padding: '10px 24px',
                          fontSize: '13px',
                          color: 'rgba(255, 255, 255, 0.75)',
                          textDecoration: 'none',
                          transition: 'all 0.2s',
                          whiteSpace: 'nowrap',
                          textAlign: 'left'
                        }}
                          onMouseEnter={e => {
                            e.target.style.color = '#ffffff';
                            e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                            e.target.style.paddingLeft = '28px';
                          }}
                          onMouseLeave={e => {
                            e.target.style.color = 'rgba(255, 255, 255, 0.75)';
                            e.target.style.background = 'transparent';
                            e.target.style.paddingLeft = '24px';
                          }}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link key={link.label} to={link.href} style={{
                  fontSize: '14px', fontWeight: 400, color: textMutedColor,
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  padding: '8px 0',
                }}
                  onMouseEnter={e => e.target.style.color = textColor}
                  onMouseLeave={e => e.target.style.color = textMutedColor}
                >{link.label}</Link>
              );
            })}
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
                e.currentTarget.style.borderColor = scrolled ? 'rgba(26, 58, 42, 0.5)' : 'rgba(255, 255, 255, 0.5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = backgroundCTA;
                e.currentTarget.style.borderColor = scrolled ? 'rgba(26, 58, 42, 0.25)' : 'rgba(255, 255, 255, 0.25)';
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
          top: scrolled ? '70px' : '80px',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          background: '#0c100e',
          padding: '24px',
          overflowY: 'auto',
          transition: 'top 0.3s ease-in-out',
        }}>
          {NAV_LINKS.map(link => {
            if (link.submenu) {
              return (
                <div key={link.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '12px 0' }}>
                  <span style={{
                    display: 'block',
                    padding: '8px 0',
                    color: 'var(--gold-accent)',
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em'
                  }}>{link.label}</span>
                  <div style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {link.submenu.map(sub => (
                      <Link key={sub.label} to={sub.href} onClick={() => setMenuOpen(false)} style={{
                        display: 'block',
                        padding: '10px 0',
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: 300,
                      }}>{sub.label}</Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link key={link.label} to={link.href} onClick={() => setMenuOpen(false)} style={{
                display: 'block', padding: '16px 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '18px',
              }}>{link.label}</Link>
            );
          })}
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
        .scrolled-navbar {
          background-color: rgba(255, 255, 255, 0.95) !important;
          backdrop-filter: blur(12px) !important;
          -webkit-backdrop-filter: blur(12px) !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        .nav-item-dropdown:hover .submenu-dropdown {
          opacity: 1 !important;
          pointer-events: auto !important;
          transform: translateX(-50%) translateY(0) !important;
        }
        .nav-item-dropdown:hover .dropdown-arrow-svg {
          transform: rotate(180deg) !important;
        }
        @media (max-width: 1024px) {
          .hdr-nav { display: none !important; }
          .hdr-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
