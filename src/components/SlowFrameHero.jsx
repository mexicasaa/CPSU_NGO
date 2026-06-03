import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function SlowFrameHero() {
  return (
    <>
      <section
        id="hero"
        style={{
          height: '100vh',
          width: '100%',
          position: 'relative',
          background: 'var(--bg-main)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          margin: 0,
        }}
      >
        {/* ========================================================
            LAYER 1: FULLSCREEN BACKGROUND VIDEO
            ======================================================== */}
        <video
          src="/download.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        {/* ========================================================
            LAYER 2: Subtle dark overlay for text readability over video
            ======================================================== */}
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 100%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        {/* ========================================================
            LAYER 3: CENTERED HERO CONTENT OVERLAYS
            ======================================================== */}
        <div 
          className="container"
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, cubicBezier: [0.16, 1, 0.3, 1] }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left',
              maxWidth: '860px',
              padding: '0',
            }}
          >
            {/* Tagline eyebrow */}
            <span className="eyebrow-hero" style={{ marginBottom: '20px', letterSpacing: '0.24em' }}>
              INDIA | REGISTERED IN 2025 | A NON-PROFIT FOUNDATION
            </span>

            {/* Main Headline */}
            <h1 className="hero-title">
              Building a Healthier, Educated,<br />
              and <span className="serif-italic" style={{ color: 'var(--gold-accent)', textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>Value-Driven</span> India
            </h1>

            {/* Supporting Paragraph */}
            <p className="hero-description">
              We inspire communities to build a cleaner environment, empower youth through education, and strengthen society through ethical values.
            </p>

            {/* Centered CTA Buttons */}
            <div className="hero-actions">
              <Link 
                to="/donate" 
                className="btn-green hero-btn-donate"
                style={{
                  boxShadow: '0 12px 32px rgba(31,71,51,0.2)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '4px' }}>
                  <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.518 4.009 2 6.585 2c2.35 0 4.13 1.344 5.415 3.559C13.285 3.344 15.065 2 17.415 2 19.991 2 23 3.518 23 7.191c0 4.105-5.371 8.863-11 14.402z"/>
                </svg>
                Donate Now
              </Link>

              <Link 
                to="/volunteer" 
                className="btn-outline-dark hero-btn-volunteer"
                style={{
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ marginRight: '4px' }}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                Join as Volunteer
              </Link>
            </div>



          </motion.div>
        </div>
      </section>

      {/* Styled styles for custom layouts, responsiveness and variables */}
      <style>{`
        .eyebrow-hero {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--gold-accent);
          display: block;
          text-shadow: 0 1px 3px rgba(0,0,0,0.25);
        }

        .hero-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.4rem, 5vw, 4.4rem);
          font-weight: 400;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -0.015em;
          margin-bottom: 24px;
        }

        .hero-description {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1rem, 1.25vw, 1.15rem);
          color: #e2e8f0;
          line-height: 1.7;
          max-width: 660px;
          margin-bottom: 40px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: flex-start;
          margin-bottom: 56px;
        }

        .hero-actions a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 52px;
          padding: 0 34px;
          font-size: 0.95rem;
          font-weight: 500;
          border-radius: 26px;
          text-decoration: none;
        }

        .hero-btn-donate {
          background: var(--green-btn);
          color: #ffffff;
          font-weight: 600;
        }

        .hero-btn-donate:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 36px rgba(230, 241, 226, 0.25) !important;
          background: var(--green-hover) !important;
        }

        .hero-btn-volunteer {
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
        }

        .hero-btn-volunteer:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.1) !important;
          color: #ffffff !important;
          border-color: #ffffff !important;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
        }

        /* Sleek Glassmorphic Floating Statistics Row */
        .hero-stats-glass-card {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          border-radius: 40px;
          padding: 24px 48px;
          max-width: 760px;
          width: 100%;
          box-shadow: 0 25px 50px rgba(26, 58, 42, 0.06);
        }

        .hero-stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-number {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1.6rem, 2.2vw, 2.1rem);
          font-weight: 700;
          color: #ffffff;
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold-accent);
          margin-bottom: 2px;
        }

        .stat-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          color: #cbd5e1;
          line-height: 1.3;
        }

        /* ── Responsive Queries ── */
        @media (max-width: 1023px) {
          #hero {
            padding-top: 60px;
          }

          .hero-stats-glass-card {
            gap: 20px;
            padding: 20px 32px;
          }
        }

        @media (max-width: 768px) {
          .hero-stats-glass-card {
            grid-template-columns: 1fr;
            gap: 20px;
            border-radius: 28px;
            padding: 24px;
          }

          .hero-stat-card {
            border-bottom: 1.5px solid rgba(26, 58, 42, 0.08);
            padding-bottom: 16px;
          }

          .hero-stat-card:last-child {
            border-bottom: none;
            padding-bottom: 0;
          }
        }

        @media (max-width: 480px) {
          #hero {
            padding-top: 80px;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
            gap: 12px;
          }

          .hero-actions a {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
