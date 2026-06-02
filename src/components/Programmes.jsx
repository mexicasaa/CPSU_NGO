import React from 'react';

const PROGRAMMES = [
  { 
    tag: 'ENVIRONMENT', 
    color: '#26523c', // Deep Forest Green
    status: 'ONGOING', 
    title1: 'ENVIRONMENTAL',
    title2: 'SEMINARS',
    desc: 'Organizing seminars and campaigns focused on pollution control, clean air, and water conservation.',
    image: '/environment_cleanup.png',
    gradient: 'linear-gradient(to bottom, rgba(26, 58, 42, 0.25) 0%, rgba(17, 37, 26, 0.75) 60%, rgba(10, 24, 17, 0.98) 100%)'
  },
  { 
    tag: 'EDUCATION', 
    color: '#c8a84a', // Warm Gold
    status: 'ONGOING', 
    title1: 'EDUCATIONAL',
    title2: 'INITIATIVES',
    desc: 'Supporting programs that encourage learning, practical education, and knowledge sharing.',
    image: '/education_classroom.png',
    gradient: 'linear-gradient(to bottom, rgba(30, 25, 13, 0.25) 0%, rgba(54, 45, 20, 0.75) 60%, rgba(36, 30, 12, 0.98) 100%)'
  },
  { 
    tag: 'SKILLS & LIVELIHOOD', 
    color: '#102a43', // Deep Slate Blue
    status: 'ONGOING', 
    title1: 'SKILL',
    title2: 'DEVELOPMENT',
    desc: 'Promoting vocational and professional training initiatives aimed at improving self-reliance.',
    image: '/skill_workshop.png',
    gradient: 'linear-gradient(to bottom, rgba(16, 42, 67, 0.25) 0%, rgba(12, 30, 50, 0.75) 60%, rgba(8, 20, 36, 0.98) 100%)'
  },
  { 
    tag: 'COMMUNITY OUTREACH', 
    color: '#dd6b20', // Rust Terracotta
    status: 'ONGOING', 
    title1: 'COMMUNITY',
    title2: 'OUTREACH',
    desc: 'Engaging with communities through social initiatives, awareness drives, and positive impact.',
    image: '/family_community.png',
    gradient: 'linear-gradient(to bottom, rgba(48, 24, 10, 0.25) 0%, rgba(36, 18, 6, 0.75) 60%, rgba(24, 12, 3, 0.98) 100%)'
  },
];

const STATUS_STYLE = {
  ONGOING: { bg: 'rgba(255, 255, 255, 0.12)', color: '#ffffff', dotColor: '#52c41a', className: 'status-ongoing' },
  UPCOMING: { bg: 'rgba(255, 255, 255, 0.12)', color: '#ffffff', dotColor: '#d48d24', className: 'status-upcoming' },
  RECRUITING: { bg: 'rgba(255, 255, 255, 0.12)', color: '#ffffff', dotColor: '#d42459', className: 'status-recruiting' },
};

export default function Programmes() {
  return (
    <section id="programs" style={{ background: '#fcfbfa', padding: '140px 0', borderTop: '1px solid rgba(26,58,42,0.05)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Decorative Ambient Glows */}
      <div className="ambient-glow-green" style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50%', height: '50%', pointerEvents: 'none', zIndex: 0 }} />
      <div className="ambient-glow-gold" style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '50%', height: '50%', pointerEvents: 'none', zIndex: 0 }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <span className="eyebrow">ACTIVE PROGRAMMES</span>
        
        <div style={{ marginBottom: '64px', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', alignItems: 'end' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 400, color: '#11251a', lineHeight: 1.1, letterSpacing: '-0.025em', margin: 0 }}>
            Running where <span className="serif-italic">they live</span>.
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#4a5568', lineHeight: 1.7, maxWidth: '480px', margin: 0, fontFamily: "'Inter', sans-serif" }}>
            Each programme runs in partnership with schools, local administrations or grassroots collectives. Status reflects the current quarter.
          </p>
        </div>

        <div className="programmes-grid">
          {PROGRAMMES.map((p, i) => (
            <div 
              key={i} 
              className="programme-card"
            >
              {/* Colored top accent line overlay */}
              <div className="programme-card__top-line" style={{ background: p.color }} />
              
              {/* Full-bleed background image */}
              <img src={p.image} alt={p.title1} className="programme-card__img" />
              {/* Gradient tint overlay */}
              <div className="programme-card__overlay" style={{ background: p.gradient }} />

              {/* Top Section: Badges & Title */}
              <div className="programme-card__top">
                <div className="programme-card__badge-row">
                  <span className="programme-card__tag">{p.tag}</span>
                  <span className={`programme-card__status ${STATUS_STYLE[p.status].className}`}>
                    <span className="status-dot" style={{ background: STATUS_STYLE[p.status].dotColor }} />
                    {p.status}
                  </span>
                </div>
                <h3 className="programme-card__title">
                  {p.title1} <br />
                  {p.title2}
                </h3>
              </div>

              {/* Bottom Section: Description & CTA */}
              <div className="programme-card__bottom">
                <p className="programme-card__desc">{p.desc}</p>
                <a href="#contact" className="programme-card__cta">
                  Inquire Details <span className="programme-card__cta-arrow">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .programmes-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .programme-card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 410px;
          border-radius: 36px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 32px 28px;
          z-index: 1;
        }

        .programme-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(13, 30, 21, 0.18);
        }

        .programme-card__top-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          z-index: 3;
        }

        .programme-card__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .programme-card:hover .programme-card__img {
          transform: scale(1.08);
        }

        .programme-card__overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          transition: opacity 0.5s ease;
        }

        .programme-card__top {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .programme-card__bottom {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .programme-card__badge-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .programme-card__tag {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
          font-family: 'Inter', sans-serif;
        }

        .programme-card__status {
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          display: flex;
          align-items: center;
          gap: 4px;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .programme-card__status .status-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .status-ongoing .status-dot {
          animation: pulse-ongoing-white 2s infinite;
        }

        @keyframes pulse-ongoing-white {
          0% {
            box-shadow: 0 0 0 0 rgba(82, 196, 26, 0.6);
          }
          70% {
            box-shadow: 0 0 0 6px rgba(82, 196, 26, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(82, 196, 26, 0);
          }
        }

        .programme-card__title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1.3rem, 1.8vw, 1.8rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.05;
          letter-spacing: -0.02em;
          text-transform: uppercase;
          margin: 0;
          transition: color 0.3s ease;
        }

        .programme-card:hover .programme-card__title {
          color: var(--gold-accent);
        }

        .programme-card__desc {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 0.98rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.45;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .programme-card__cta {
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.85);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          transition: all 0.3s ease;
          width: fit-content;
          position: relative;
          padding-bottom: 2px;
        }

        .programme-card__cta::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--gold-accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .programme-card:hover .programme-card__cta {
          color: #ffffff;
        }

        .programme-card:hover .programme-card__cta::after {
          transform: scaleX(1);
        }

        .programme-card__cta-arrow {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: inline-block;
        }

        .programme-card__cta:hover .programme-card__cta-arrow {
          transform: translate(3px, -3px);
          color: var(--gold-accent);
        }

        @media (max-width: 1100px) {
          .programmes-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          .programme-card {
            height: 380px;
          }
        }

        @media (max-width: 650px) {
          .programmes-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .programme-card {
            height: 360px;
          }
          #programs > div > div:first-of-type {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}} />
    </section>
  );
}
