import React from 'react';
import { Link } from 'react-router-dom';

const WAYS = [
  {
    num: '01',
    title: 'Donate',
    desc: "Fund a child's education, a skill workshop or a plantation drive. Every amount matters.",
    cta: 'Donate Now',
    link: '/donate',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    )
  },
  {
    num: '02',
    title: 'Volunteer',
    desc: 'Teach, train, plant or document. Give an hour or a year - we will find the right fit.',
    cta: 'Apply to Volunteer',
    link: '/volunteer',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    num: '03',
    title: 'Corporate CSR',
    desc: "Partner your company's CSR mandate with field-tested, measurable ground programmes.",
    cta: 'Partner with Us',
    link: '#contact',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M21 21V10a2 2 0 0 0-2-2h-6v13" />
        <path d="M9 21V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v15" />
        <path d="M14 12h2" />
        <path d="M14 16h2" />
      </svg>
    )
  },
  {
    num: '04',
    title: 'In-Kind Support',
    desc: 'Books, stationery, equipment or space - donations of materials go directly to programmes.',
    cta: 'Material Donations',
    link: '#contact',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    )
  },
  {
    num: '05',
    title: 'Spread the Word',
    desc: 'Share our work, invite speakers to your institution, or write about what we do.',
    cta: 'Share the Vision',
    link: '#contact',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    )
  },
  {
    num: '06',
    title: 'Strategic Partnership',
    desc: "NGOs, panchayats, government bodies - let's build something together in your district.",
    cta: 'Collaborate',
    link: '#contact',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
        <path d="M9 12h6" />
        <path d="M12 9v6" />
        <path d="M6 11H5a3 3 0 0 0 0 6h1" />
        <rect x="6" y="7" width="12" height="10" rx="2" />
      </svg>
    )
  }
];

export default function GetInvolved() {
  return (
    <section id="get-involved" style={{ background: 'var(--bg-main)', padding: '140px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Dynamic Background Glows */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(200, 168, 74, 0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(26, 58, 42, 0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="eyebrow">GET INVOLVED</span>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '80px',
          alignItems: 'end',
          marginBottom: '64px',
        }}>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)',
            fontWeight: 400,
            color: 'var(--green-dark)',
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            margin: 0
          }}>
            Six clear ways to <span className="serif-italic" style={{ color: 'var(--gold-accent)' }}>join</span> the work.
          </h2>
          <div>
            <p style={{ fontSize: '1.08rem', color: 'var(--text-body)', lineHeight: 1.7, maxWidth: '500px', margin: 0, fontWeight: 300 }}>
              Whether you have an hour, a specific skill, material resources, or a matching CSR budget—there is a direct path designed to match your potential.
            </p>
          </div>
        </div>

        <div className="involvement-grid">
          {WAYS.map((w, i) => {
            const isExternalOrHash = w.link.startsWith('#') || w.link.startsWith('http');
            return isExternalOrHash ? (
              <a 
                key={i} 
                href={w.link} 
                className="involvement-card"
                onClick={(e) => {
                  if (w.link.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(w.link);
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                <div className="involvement-card__num">{w.num}</div>
                <div className="involvement-card__top">
                  <div className="involvement-card__icon-box">
                    {w.svg}
                  </div>
                </div>
                <div className="involvement-card__meta">
                  <h3 className="involvement-card__title">{w.title}</h3>
                  <p className="involvement-card__desc">{w.desc}</p>
                </div>
                <div className="involvement-card__cta">
                  <span>{w.cta}</span>
                  <svg className="involvement-card__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </a>
            ) : (
              <Link 
                key={i} 
                to={w.link} 
                className="involvement-card"
              >
                <div className="involvement-card__num">{w.num}</div>
                <div className="involvement-card__top">
                  <div className="involvement-card__icon-box">
                    {w.svg}
                  </div>
                </div>
                <div className="involvement-card__meta">
                  <h3 className="involvement-card__title">{w.title}</h3>
                  <p className="involvement-card__desc">{w.desc}</p>
                </div>
                <div className="involvement-card__cta">
                  <span>{w.cta}</span>
                  <svg className="involvement-card__arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .involvement-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .involvement-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 40px;
          background: #ffffff;
          border: 1px solid rgba(26, 58, 42, 0.05);
          border-radius: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.01);
          text-decoration: none;
          color: inherit;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
        }

        .involvement-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: var(--gold-accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .involvement-card:hover {
          transform: translateY(-6px);
          border-color: rgba(200, 168, 74, 0.25);
          box-shadow: 0 20px 40px rgba(26, 58, 42, 0.06);
        }

        .involvement-card:hover::before {
          transform: scaleX(1);
        }

        .involvement-card__num {
          position: absolute;
          top: 24px;
          right: 32px;
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 2.4rem;
          font-weight: 500;
          color: var(--gold-accent);
          opacity: 0.4;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .involvement-card:hover .involvement-card__num {
          opacity: 0.85;
          transform: scale(1.05);
          color: var(--gold-accent);
        }

        .involvement-card__top {
          margin-bottom: 28px;
        }

        .involvement-card__icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          background: rgba(26, 58, 42, 0.05);
          color: var(--green-dark);
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .involvement-card:hover .involvement-card__icon-box {
          background: var(--green-dark);
          color: var(--gold-accent);
          box-shadow: 0 8px 20px rgba(26, 58, 42, 0.15);
        }

        .involvement-card__meta {
          flex-grow: 1;
          margin-bottom: 32px;
        }

        .involvement-card__title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.35rem;
          font-weight: 500;
          color: var(--green-dark);
          margin: 0 0 12px;
          transition: color 0.3s ease;
        }

        .involvement-card:hover .involvement-card__title {
          color: var(--green-dark);
        }

        .involvement-card__desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: var(--text-body);
          line-height: 1.6;
          margin: 0;
          opacity: 0.85;
        }

        .involvement-card__cta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--gold-accent);
          transition: all 0.3s ease;
        }

        .involvement-card__arrow {
          transition: transform 0.3s ease;
        }

        .involvement-card:hover .involvement-card__arrow {
          transform: translateX(6px);
        }

        @media (max-width: 1024px) {
          .involvement-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          #get-involved > .container > div:first-of-type {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @media (max-width: 640px) {
          .involvement-grid {
            grid-template-columns: 1fr;
          }
          .involvement-card {
            padding: 30px;
          }
        }
      `}} />
    </section>
  );
}
