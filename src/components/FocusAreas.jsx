import React from 'react';

const FOCUS_AREAS = [
  {
    num: '01',
    tag: 'ENVIRONMENT',
    title: 'Environment Protection',
    desc: 'Promoting awareness regarding pollution, clean air, water conservation, and sustainable living practices.',
    image: '/environment_cleanup.png'
  },
  {
    num: '02',
    tag: 'EDUCATION',
    title: 'Education & Awareness',
    desc: 'Supporting initiatives that encourage knowledge, awareness, practical learning, and character development.',
    image: '/education_classroom.png'
  },
  {
    num: '03',
    tag: 'LIVELIHOOD',
    title: 'Skill Development',
    desc: 'Encouraging vocational and professional training programs that build self-reliance and career readiness.',
    image: '/skill_workshop.png'
  },
  {
    num: '04',
    tag: 'SOCIAL REFORM',
    title: 'Social Reform & Values',
    desc: 'Working towards a value-driven society by promoting ethics, social harmony, and positive family values.',
    image: '/family_community.png'
  },
  {
    num: '05',
    tag: 'YOUTH EMPOWERMENT',
    title: 'Youth Empowerment',
    desc: 'Guiding young individuals towards leadership, responsibility, discipline, and community contribution.',
    image: '/images/seminar.png'
  }
];

export default function FocusAreas() {
  return (
    <section id="focus-areas" style={{ background: 'var(--bg-main)', padding: '140px 0' }}>
      <div className="container">
        
        {/* Header */}
        <span className="eyebrow">OUR FIVE FOCUS AREAS</span>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
          marginBottom: '64px',
        }} className="focus-header-row">
          <h2 style={{
            fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)',
            fontWeight: 400,
            color: '#11251a',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            maxWidth: '560px'
          }}>
            Practical field solutions across <span className="serif-italic">five vital disciplines</span>.
          </h2>
          <div style={{ paddingTop: '8px' }}>
            <p style={{ fontSize: '1.05rem', color: '#4a5568', lineHeight: 1.7, maxWidth: '540px', fontFamily: "'Inter', sans-serif" }}>
              Our work is focused on resolving key societal needs through local, sustainable action. Each focus area delivers measured, concrete changes where it counts.
            </p>
          </div>
        </div>

        {/* Uniform 5-Column Grid */}
        <div className="focus-grid">
          {FOCUS_AREAS.map((area, idx) => (
            <div
              key={idx}
              className="focus-grid-card"
            >
              {/* Full-bleed background image */}
              <img src={area.image} alt={area.title} className="focus-grid-card__img" />
              {/* Gradient overlay for high text readability */}
              <div className="focus-grid-card__overlay" />

              {/* Card Contents */}
              <div className="focus-grid-card__content">
                <div>
                  <span className="focus-grid-card__tag">{area.num} / {area.tag}</span>
                  <h3 className="focus-grid-card__title">{area.title}</h3>
                  <p className="focus-grid-card__desc">{area.desc}</p>
                </div>
                <div className="focus-grid-card__cta">
                  READ COVERAGE <span className="focus-grid-card__cta-arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .focus-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
        }

        .focus-grid-card {
          position: relative;
          height: 440px;
          border-radius: 32px;
          overflow: hidden;
          cursor: pointer;
          background: #0d1e15;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 1;
        }

        .focus-grid-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(13, 30, 21, 0.15);
        }

        .focus-grid-card__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), filter 0.8s ease;
          filter: brightness(0.85);
        }

        .focus-grid-card:hover .focus-grid-card__img {
          transform: scale(1.08);
          filter: brightness(0.75);
        }

        .focus-grid-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(13, 30, 21, 0.05) 0%,
            rgba(13, 30, 21, 0.5) 45%,
            rgba(13, 30, 21, 0.95) 90%,
            #0a1811 100%
          );
          z-index: 1;
          transition: background 0.5s ease;
        }

        .focus-grid-card:hover .focus-grid-card__overlay {
          background: linear-gradient(
            to bottom,
            rgba(13, 30, 21, 0.1) 0%,
            rgba(13, 30, 21, 0.6) 45%,
            rgba(13, 30, 21, 0.98) 90%,
            #07120c 100%
          );
        }

        .focus-grid-card__content {
          position: absolute;
          inset: 0;
          z-index: 2;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 16px;
        }

        .focus-grid-card__tag {
          display: block;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold-accent);
          font-family: 'Inter', sans-serif;
          margin-bottom: 6px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .focus-grid-card__title {
          font-family: 'Inter', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.015em;
          line-height: 1.25;
          margin: 0;
          margin-bottom: 6px;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        .focus-grid-card__desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.5;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-weight: 300;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
          transition: color 0.3s ease;
        }

        .focus-grid-card:hover .focus-grid-card__desc {
          color: rgba(255, 255, 255, 0.95);
        }

        .focus-grid-card__cta {
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: rgba(255, 255, 255, 0.85);
          transition: all 0.3s ease;
          width: fit-content;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .focus-grid-card:hover .focus-grid-card__cta {
          color: var(--gold-accent);
        }

        .focus-grid-card__cta-arrow {
          transition: transform 0.3s ease;
          display: inline-block;
        }

        .focus-grid-card:hover .focus-grid-card__cta-arrow {
          transform: translateX(4px);
        }

        /* Responsive Grid Adaptations */
        @media (max-width: 1200px) {
          .focus-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 800px) {
          .focus-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .focus-header-row {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }

        @media (max-width: 500px) {
          .focus-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .focus-grid-card {
            height: 380px;
          }
        }
      `}} />
    </section>
  );
}
