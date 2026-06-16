import React from 'react';
import { Link } from 'react-router-dom';
import { db } from '../utils/db';

const getWayIcon = (idx) => {
  if (idx === 0) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    );
  }
  if (idx === 1) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M21 21V10a2 2 0 0 0-2-2h-6v13" />
      <path d="M9 21V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v15" />
      <path d="M14 12h2" />
      <path d="M14 16h2" />
    </svg>
  );
};

export default function GetInvolved({ isPreview = false }) {
  const data = db.getHomeSection('involved', isPreview);
  const ways = data.ways || [];

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
        <span className="eyebrow">{data.eyebrow || 'GET INVOLVED'}</span>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '80px',
          alignItems: 'end',
          marginBottom: '64px',
        }} className="get-involved-header">
          <h2 style={{
            fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)',
            fontWeight: 400,
            color: 'var(--green-dark)',
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            margin: 0
          }}>
            {data.title || 'Three clear ways to join the work.'}
          </h2>
          <div>
            <p style={{ fontSize: '1.08rem', color: 'var(--text-body)', lineHeight: 1.7, maxWidth: '500px', margin: 0, fontWeight: 300 }}>
              {data.description || 'Whether you have an hour, a specific skill, material resources, or a matching CSR budget—there is a direct path designed to match your potential.'}
            </p>
          </div>
        </div>

        {/* 3 Compact Interactive Tiles */}
        <div className="involvement-grid">
          {ways.map((w, idx) => {
            const isExternalOrHash = w.link.startsWith('#') || w.link.startsWith('http');
            const icon = getWayIcon(idx);
            const innerCardContent = (
              <>
                {/* Image background layer (opacity 0 default, scale zoom on hover) */}
                <img src={w.image} alt={w.title} className="involvement-card__bg-img" />
                <div className="involvement-card__overlay" />

                <div className="involvement-card__content">
                  {/* Top: Icon Box & Number */}
                  <div className="involvement-card__top">
                    <div className="involvement-card__icon-box">
                      {icon}
                    </div>
                    <span className="involvement-card__num">{w.num}</span>
                  </div>
                  
                  {/* Text meta */}
                  <div className="involvement-card__meta">
                    <h3 className="involvement-card__title">{w.title}</h3>
                    <p className="involvement-card__desc">{w.desc}</p>
                  </div>
                  
                  {/* Bottom link CTA */}
                  <div className="involvement-card__cta">
                    <span>{w.cta}</span>
                    <svg className="involvement-card__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </>
            );

            return isExternalOrHash ? (
              <a 
                key={idx} 
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
                {innerCardContent}
              </a>
            ) : (
              <Link 
                key={idx} 
                to={w.link} 
                className="involvement-card"
              >
                {innerCardContent}
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
          display: block;
          height: 215px;
          background: #ffffff;
          border: 1px solid rgba(26, 58, 42, 0.05);
          border-radius: 24px;
          box-shadow: 0 4px 15px rgba(26, 58, 42, 0.01);
          text-decoration: none;
          color: inherit;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.5s ease;
          overflow: hidden;
          z-index: 1;
        }

        .involvement-card:hover {
          transform: translateY(-6px);
          border-color: rgba(200, 168, 74, 0.35);
          box-shadow: 0 20px 40px rgba(13, 30, 21, 0.12);
        }

        /* Image Background Reveal */
        .involvement-card__bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          opacity: 0;
          transform: scale(1.05);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .involvement-card:hover .involvement-card__bg-img {
          opacity: 0.9;
          transform: scale(1);
        }

        .involvement-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(13, 30, 21, 0.98) 0%,
            rgba(13, 30, 21, 0.75) 60%,
            rgba(13, 30, 21, 0.3) 100%
          );
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .involvement-card:hover .involvement-card__overlay {
          opacity: 1;
        }

        .involvement-card__content {
          position: relative;
          z-index: 2;
          padding: 26px 24px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .involvement-card__top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .involvement-card__num {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.35rem;
          font-weight: 500;
          color: var(--gold-accent);
          opacity: 0.5;
          transition: opacity 0.3s ease, color 0.3s ease;
        }

        .involvement-card:hover .involvement-card__num {
          opacity: 0.95;
          color: var(--gold-accent);
        }

        .involvement-card__icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(26, 58, 42, 0.04);
          color: var(--green-dark);
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .involvement-card:hover .involvement-card__icon-box {
          background: #ffffff;
          color: var(--green-dark);
        }

        .involvement-card__meta {
          flex-grow: 1;
          margin-bottom: 8px;
        }

        .involvement-card__title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1.08rem;
          color: var(--green-dark);
          margin: 0 0 6px;
          letter-spacing: -0.015em;
          transition: color 0.3s ease;
        }

        .involvement-card:hover .involvement-card__title {
          color: #ffffff !important;
        }

        .involvement-card__desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          color: var(--text-body);
          line-height: 1.45;
          margin: 0;
          opacity: 0.85;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.3s ease;
        }

        .involvement-card:hover .involvement-card__desc {
          color: rgba(255, 255, 255, 0.8);
        }

        .involvement-card__cta {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--gold-accent);
          transition: color 0.3s ease;
        }

        .involvement-card:hover .involvement-card__cta {
          color: var(--gold-accent);
        }

        .involvement-card__arrow {
          transition: transform 0.3s ease;
        }

        .involvement-card:hover .involvement-card__arrow {
          transform: translateX(4px);
        }

        @media (max-width: 900px) {
          .involvement-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .get-involved-header {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }

        @media (max-width: 600px) {
          .involvement-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .involvement-card {
            height: 195px;
          }
        }
      `}} />
    </section>
  );
}
