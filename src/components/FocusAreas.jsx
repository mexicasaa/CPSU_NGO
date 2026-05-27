import React from 'react';

const FOCUS_AREAS = [
  {
    num: '01',
    tag: 'ENVIRONMENT',
    title: 'Environment Protection',
    desc: 'The foundation actively promotes awareness regarding pollution, environmental responsibility, clean air, water conservation, and sustainable living practices. We believe environmental protection is essential for the health and future of coming generations.',
    image: '/environment_cleanup.png',
    gridClass: 'card-env'
  },
  {
    num: '02',
    tag: 'EDUCATION',
    title: 'Education & Awareness',
    desc: 'We support educational initiatives that encourage knowledge, awareness, practical learning, and personal development. Our approach focuses on empowering individuals through education that builds both capability and character.',
    image: '/education_classroom.png',
    gridClass: 'card-edu'
  },
  {
    num: '03',
    tag: 'LIVELIHOOD',
    title: 'Skill Development & Self-Reliance',
    desc: 'The foundation encourages vocational and professional skill development programs that help individuals become self-dependent and career-ready.',
    image: '/skill_workshop.png',
    gridClass: 'card-live'
  },
  {
    num: '04',
    tag: 'SOCIAL REFORM',
    title: 'Social Reform',
    desc: 'We work towards creating a more responsible and value-driven society by promoting ethics, social harmony, respect for elders, and positive family values.',
    image: '/family_community.png',
    gridClass: 'card-fam'
  },
  {
    num: '05',
    tag: 'YOUTH EMPOWERMENT',
    title: 'Youth Empowerment',
    desc: 'We aim to inspire and guide young individuals towards leadership, responsibility, discipline, and meaningful contribution to society.',
    image: '/images/seminar.png',
    gridClass: 'card-harm'
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
        }}>
          <h2 style={{
            fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)',
            fontWeight: 400,
            color: '#11251a',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            maxWidth: '560px'
          }}>
            Practical field solutions across five vital disciplines.
          </h2>
          <div style={{ paddingTop: '8px' }}>
            <p style={{ fontSize: '1.05rem', color: '#4a5568', lineHeight: 1.7, maxWidth: '540px', fontFamily: "'Inter', sans-serif" }}>
              Our work is focused on resolving key societal needs through local, sustainable action. Each focus area delivers measured, concrete changes where it counts.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="focus-bento-grid">
          {FOCUS_AREAS.map((area, idx) => (
            <div
              key={idx}
              className={`focus-card ${area.gridClass}`}
            >
              <img src={area.image} alt={area.title} className="focus-card__img" />
              <div className="focus-card__overlay" />

              {/* Tag Pill */}
              <div className="focus-card__tag">
                <span className="focus-card__tag-dot" />
                <span>{area.num} / {area.tag}</span>
              </div>

              {/* Action Arrow */}
              <div className="focus-card__arrow">↗</div>

              {/* Card Contents */}
              <div className="focus-card__content">
                <h3 className="focus-card__title">{area.title}</h3>
                <p className="focus-card__desc">{area.desc}</p>
                <div className="focus-card__cta">READ COVERAGE →</div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .focus-bento-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
          grid-auto-rows: 280px;
        }

        /* Asymmetric Layout Mappings */
        .card-env {
          grid-column: span 4;
          grid-row: span 2;
        }

        .card-edu {
          grid-column: span 2;
          grid-row: span 1;
        }

        .card-live {
          grid-column: span 2;
          grid-row: span 1;
        }

        .card-fam {
          grid-column: span 3;
          grid-row: span 1;
        }

        .card-harm {
          grid-column: span 3;
          grid-row: span 1;
        }

        /* Card Component Styling */
        .focus-card {
          position: relative;
          border-radius: 28px;
          overflow: hidden;
          cursor: pointer;
          background: #11251a;
          box-shadow: 0 10px 30px rgba(26,58,42,0.03);
          border: 1px solid rgba(26,58,42,0.06);
        }

        .focus-card__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: filter 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          filter: brightness(0.72);
        }

        .focus-card:hover .focus-card__img {
          filter: brightness(0.55);
        }

        .focus-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(17,37,26,0.92) 0%,
            rgba(17,37,26,0.45) 50%,
            rgba(17,37,26,0.1) 100%
          );
          z-index: 1;
        }

        .focus-card__tag {
          position: absolute;
          top: 24px;
          left: 24px;
          z-index: 2;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 999px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: rgba(255, 255, 255, 0.95);
          font-family: 'Inter', sans-serif;
        }

        .focus-card__tag-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #c8a84a;
          box-shadow: 0 0 6px #c8a84a;
          flex-shrink: 0;
        }

        .focus-card__arrow {
          position: absolute;
          top: 24px;
          right: 24px;
          z-index: 2;
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.6);
          transition: all 0.3s ease;
        }

        .focus-card:hover .focus-card__arrow {
          color: #c8a84a;
        }

        .focus-card__content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 2;
          padding: 56px 30px 30px;
        }

        .focus-card__title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.55rem;
          font-weight: 400;
          color: #ffffff;
          letter-spacing: -0.01em;
          margin-bottom: 8px;
          line-height: 1.25;
        }

        .card-edu .focus-card__title,
        .card-live .focus-card__title {
          font-size: 1.3rem;
        }

        .focus-card__desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.6;
          margin-bottom: 16px;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Reveal descriptions fluidly on hover */
        .focus-card:hover .focus-card__desc {
          max-height: 120px;
          opacity: 1;
        }

        .focus-card__cta {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: rgba(255, 255, 255, 0.5);
          transition: color 0.3s ease;
        }

        .focus-card:hover .focus-card__cta {
          color: #c8a84a;
        }

        /* Responsive Layout Overrides */
        @media (max-width: 1024px) {
          .focus-bento-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 260px;
          }
          .card-env {
            grid-column: span 2;
            grid-row: span 2;
          }
          .card-edu {
            grid-column: span 1;
            grid-row: span 1;
          }
          .card-live {
            grid-column: span 1;
            grid-row: span 1;
          }
          .card-fam {
            grid-column: span 1;
            grid-row: span 1;
          }
          .card-harm {
            grid-column: span 1;
            grid-row: span 1;
          }
        }

        @media (max-width: 650px) {
          .focus-bento-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 240px;
          }
          .card-env, .card-edu, .card-live, .card-fam, .card-harm {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
          .focus-card__desc {
            display: none !important;
          }
        }
      `}} />
    </section>
  );
}
