import React from 'react';

const WHY_CARDS = [
  {
    num: '01',
    title: 'Human & Cultural Values',
    desc: 'Respect for families, traditions and the communities we serve.',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    num: '02',
    title: 'Direct Local Impact',
    desc: 'Every rupee is mapped to a programme, a village, and a name.',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  },
  {
    num: '03',
    title: 'Volunteer-First',
    desc: 'Citizens, students and professionals lead alongside our team.',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    )
  },
  {
    num: '04',
    title: 'Field-Tested Methods',
    desc: 'Nothing we do is borrowed from a textbook - it is built on ground.',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12" />
        <path d="M12 12a5 5 0 0 1 5-5h2" />
        <path d="M12 14a5 5 0 0 0-5-5H5" />
        <path d="M12 6a3 3 0 0 1 3-3h2" />
      </svg>
    )
  },
  {
    num: '05',
    title: '80G Tax Benefits',
    desc: 'All donations eligible for 80G deduction with emailed receipts.',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    )
  },
  {
    num: '06',
    title: 'Quarterly Transparency',
    desc: 'Published impact reports with real outcomes and honest failures.',
    svg: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    )
  }
];

export default function WhySupport() {
  return (
    <section id="why" style={{ background: 'var(--bg-section)', padding: '140px 0', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(26, 58, 42, 0.05)' }}>
      {/* Background Decorative Element */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(200, 168, 74, 0.03) 0%, transparent 60%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <span className="eyebrow">WHY SUPPORT US</span>
        
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
            A foundation built on <span className="serif-italic" style={{ color: 'var(--gold-accent)' }}>practice</span>, transparency & respect.
          </h2>
          <div>
            <p style={{ fontSize: '1.08rem', color: 'var(--text-body)', lineHeight: 1.7, maxWidth: '500px', margin: 0, fontWeight: 300 }}>
              Six reasons our partners, donors, and volunteers stay with us—and provide the collective momentum that keeps our ground missions moving.
            </p>
          </div>
        </div>

        <div className="why-pillar-grid">
          {WHY_CARDS.map((card, i) => (
            <div key={i} className="why-pillar-card">
              {/* Card Index Watermark */}
              <div className="why-pillar-card__num">{card.num}</div>
              
              {/* Left Accent indicator line */}
              <div className="why-pillar-card__indicator" />

              {/* Icon container */}
              <div className="why-pillar-card__icon-wrap">
                <div className="why-pillar-card__icon-box">
                  {card.svg}
                </div>
              </div>

              {/* Text content */}
              <div className="why-pillar-card__content">
                <h3 className="why-pillar-card__title">{card.title}</h3>
                <p className="why-pillar-card__desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .why-pillar-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .why-pillar-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 40px;
          background: #ffffff;
          border: 1px solid rgba(26, 58, 42, 0.04);
          border-radius: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.01);
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .why-pillar-card__indicator {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 4px;
          background: var(--green-icon);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s ease;
        }

        .why-pillar-card:hover {
          transform: translateY(-6px);
          border-color: rgba(26, 58, 42, 0.08);
          box-shadow: 0 20px 40px rgba(26, 58, 42, 0.05);
        }

        .why-pillar-card:hover .why-pillar-card__indicator {
          transform: scaleY(1);
          background: var(--gold-accent);
        }

        .why-pillar-card__num {
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

        .why-pillar-card:hover .why-pillar-card__num {
          opacity: 0.85;
          transform: scale(1.05);
          color: var(--gold-accent);
        }

        .why-pillar-card__icon-wrap {
          margin-bottom: 24px;
        }

        .why-pillar-card__icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          background: rgba(26, 58, 42, 0.04);
          color: var(--green-dark);
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .why-pillar-card:hover .why-pillar-card__icon-box {
          background: var(--green-dark);
          color: var(--gold-accent);
          box-shadow: 0 8px 20px rgba(26, 58, 42, 0.12);
        }

        .why-pillar-card__content {
          flex-grow: 1;
        }

        .why-pillar-card__title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.3rem;
          font-weight: 500;
          color: var(--green-dark);
          margin: 0 0 10px;
        }

        .why-pillar-card__desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          color: var(--text-body);
          line-height: 1.6;
          margin: 0;
          opacity: 0.85;
        }

        @media (max-width: 1024px) {
          .why-pillar-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
          #why > .container > div:first-of-type {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @media (max-width: 640px) {
          .why-pillar-grid {
            grid-template-columns: 1fr;
          }
          .why-pillar-card {
            padding: 30px;
          }
        }
      `}} />
    </section>
  );
}
