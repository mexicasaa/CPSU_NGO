import React from 'react';

const GALLERY_ITEMS = [
  { img: '/images/community.png', label: 'Empowered Grassroots Collectives' },
  { img: '/images/education.png', label: 'Bridging Slum Tuition Circles' },
  { img: '/images/environment.png', label: 'Eco-Clubs Waste Segregation' },
  { img: '/images/family.png', label: 'Parivar Samvad Value Dialogues' },
  { img: '/images/seminar.png', label: 'Civic Environmental Seminars' },
  { img: '/skill_workshop.png', label: 'Hunar Skill Repair Workshops' },
  { img: '/environment_cleanup.png', label: 'Water Preservation Planting Drives' },
];

export default function Gallery() {
  return (
    <section id="gallery" style={{ background: 'var(--bg-main)', padding: '140px 0', borderTop: '1px solid rgba(26,58,42,0.05)' }}>
      <div className="container">
        
        <span className="eyebrow">FIELD GALLERY</span>
        
        <div style={{ marginBottom: '64px', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', alignItems: 'end' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 400, color: '#11251a', lineHeight: 1.1, letterSpacing: '-0.025em', margin: 0 }}>
            Documentary moments - workshops, classrooms, communities.
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#4a5568', lineHeight: 1.7, maxWidth: '480px', margin: 0, fontFamily: "'Inter', sans-serif" }}>
            A small selection from our recent programmes, captured by volunteers on the ground.
          </p>
        </div>

        {/* Masonry-like grid */}
        <div className="gallery-masonry-grid">
          
          {/* Item 0: Big left card - spans 2 rows */}
          <div className="gallery-card card-large-left">
            <img src={GALLERY_ITEMS[0].img} alt={GALLERY_ITEMS[0].label} className="gallery-card__img" />
            <div className="gallery-card__overlay" />
            <span className="gallery-card__label">{GALLERY_ITEMS[0].label}</span>
          </div>
          
          {/* Item 1: Middle top left */}
          <div className="gallery-card card-small">
            <img src={GALLERY_ITEMS[1].img} alt={GALLERY_ITEMS[1].label} className="gallery-card__img" />
            <div className="gallery-card__overlay" />
            <span className="gallery-card__label">{GALLERY_ITEMS[1].label}</span>
          </div>

          {/* Item 2: Middle top right */}
          <div className="gallery-card card-small">
            <img src={GALLERY_ITEMS[2].img} alt={GALLERY_ITEMS[2].label} className="gallery-card__img" />
            <div className="gallery-card__overlay" />
            <span className="gallery-card__label">{GALLERY_ITEMS[2].label}</span>
          </div>
          
          {/* Item 3: Big right card - spans 2 rows */}
          <div className="gallery-card card-large-right">
            <img src={GALLERY_ITEMS[3].img} alt={GALLERY_ITEMS[3].label} className="gallery-card__img" />
            <div className="gallery-card__overlay" />
            <span className="gallery-card__label">{GALLERY_ITEMS[3].label}</span>
          </div>
          
          {/* Item 4: Bottom middle left */}
          <div className="gallery-card card-small">
            <img src={GALLERY_ITEMS[4].img} alt={GALLERY_ITEMS[4].label} className="gallery-card__img" />
            <div className="gallery-card__overlay" />
            <span className="gallery-card__label">{GALLERY_ITEMS[4].label}</span>
          </div>

          {/* Item 5: Bottom middle right */}
          <div className="gallery-card card-small">
            <img src={GALLERY_ITEMS[5].img} alt={GALLERY_ITEMS[5].label} className="gallery-card__img" />
            <div className="gallery-card__overlay" />
            <span className="gallery-card__label">{GALLERY_ITEMS[5].label}</span>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .gallery-masonry-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: minmax(230px, auto);
          gap: 16px;
        }

        .gallery-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: #e6f1e2;
          box-shadow: 0 10px 30px rgba(26,58,42,0.02);
          border: 1px solid rgba(26,58,42,0.06);
          display: flex;
          align-items: flex-end;
          padding: 24px;
          cursor: pointer;
        }

        .card-large-left {
          grid-column: 1;
          grid-row: span 2;
          min-height: 480px;
        }

        .card-large-right {
          grid-column: 4;
          grid-row: span 2;
          min-height: 480px;
        }

        .card-small {
          min-height: 232px;
        }

        .gallery-card__img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          filter: brightness(0.85);
        }

        .gallery-card:hover .gallery-card__img {
          transform: scale(1.05);
          filter: brightness(0.65);
        }

        .gallery-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(17,37,26,0.85) 0%, rgba(17,37,26,0.2) 60%, transparent 100%);
          z-index: 1;
          transition: opacity 0.4s ease;
        }

        .gallery-card__label {
          position: relative;
          z-index: 2;
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.9);
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .gallery-card:hover .gallery-card__label {
          color: #c8a84a;
          transform: translateY(-2px);
        }

        /* Responsive styling */
        @media (max-width: 1024px) {
          .gallery-masonry-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: 220px !important;
          }
          .card-large-left, .card-large-right {
            grid-column: auto !important;
            grid-row: auto !important;
            min-height: 220px !important;
          }
        }

        @media (max-width: 600px) {
          .gallery-masonry-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
}
