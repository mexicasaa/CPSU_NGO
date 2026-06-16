import React from 'react';
import { motion } from 'framer-motion';
import { db } from '../utils/db';

export default function WhoWeAre({ isPreview }) {
  const data = db.getHomeSection('about', isPreview);

  const leader1 = data.leaders && data.leaders[0] ? data.leaders[0] : {
    name: 'Sh Bajrang Bagra',
    role: 'Chairman',
    image: '/images/Bajrang Lal Bagra.jpg',
    bio: 'True development in India is achieved by blending professional and industrial excellence with deep-rooted cultural values, integrity, and cooperative social responsibility.',
    subtitle: 'Former CMD, NALCO • General Secretary, VHP'
  };

  const leader2 = data.leaders && data.leaders[1] ? data.leaders[1] : {
    name: 'Sh D.C. Arya',
    role: 'Founder & Secretary',
    image: '/dc_arya_suit_v3.jpg',
    bio: 'True progress is built on pure air, clean minds, and ethical values. We must address not only environmental pollution, but also moral and social challenges.',
    subtitle: 'Former Chairman, NIRC-ICMAI • Former Director (Finance), IRFC'
  };

  const timeline = data.timeline || [
    { year: '2025', title: 'Foundation Established', desc: 'Registered as a Section 8 non-profit with core ecological, educational, and livelihood focus areas aligned.' },
    { year: '2025', title: 'Sankalp & Hunar Pilot Initiatives', desc: 'Launched first grassroots student coaching centers and vocational livelihood modules.' },
    { year: '2026', title: 'Operations Scale-up', desc: 'Expansion of digital literacy libraries, local trade workshops, and Parivar Samvad dialogue circles.' }
  ];

  return (
    <section id="about" style={{ background: 'var(--bg-main)', padding: '140px 0 80px' }}>
      <div className="container">
        <div style={{ marginBottom: '40px', maxWidth: '800px' }}>
          <span className="eyebrow">{data.eyebrow}</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 400, color: '#11251a', lineHeight: 1.1, letterSpacing: '-0.025em', margin: 0 }}>
            {data.title}
          </h2>
        </div>
        {/* Row 1: Chairman & Text Paragraphs */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start', marginBottom: '60px' }} className="wewe-row">
          
          {/* LEFT: Card 1 */}
          <div>
            <div className="hover-lift animate-reveal wewe-leader-card" style={{ 
              background: '#ffffff',
              borderRadius: '24px', 
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(26,58,42,0.03)',
              border: '1px solid rgba(26,58,42,0.06)',
              display: 'flex',
              flexDirection: 'row',
              gap: '24px',
              padding: '24px',
              alignItems: 'flex-start'
            }}>
              <div style={{ width: '240px', height: '300px', borderRadius: '16px', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(26,58,42,0.08)' }}>
                <img 
                  src={leader1.image} 
                  alt={leader1.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexGrow: 1 }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--green-dark)', marginBottom: '2px' }}>{leader1.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#c8a84a', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>{leader1.role}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0, fontStyle: 'italic', fontWeight: 300, fontFamily: "'Playfair Display', serif" }}>
                  "{leader1.bio}"
                </p>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '8px', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                  {leader1.subtitle}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Text Paragraphs */}
          <div style={{ paddingTop: '10px' }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--green-dark)', lineHeight: 1.8, marginBottom: '28px', fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', fontWeight: 500, marginTop: 0 }}>
              {data.descParagraph1}
            </p>
            <p style={{ fontSize: '0.95rem', color: '#4a5568', lineHeight: 1.8, marginBottom: 0, fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              {data.descParagraph2}
            </p>
          </div>
        </div>

        {/* Row 2: Founder & Timeline */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }} className="wewe-row">
          
          {/* LEFT: Card 2 */}
          <div>
            <div className="hover-lift animate-reveal wewe-leader-card" style={{ 
              background: '#ffffff',
              borderRadius: '24px', 
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(26,58,42,0.03)',
              border: '1px solid rgba(26,58,42,0.06)',
              display: 'flex',
              flexDirection: 'row',
              gap: '24px',
              padding: '24px',
              alignItems: 'flex-start'
            }}>
              <div style={{ width: '240px', height: '300px', borderRadius: '16px', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(26,58,42,0.08)' }}>
                <img 
                  src={leader2.image} 
                  alt={leader2.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flexGrow: 1 }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--green-dark)', marginBottom: '2px' }}>{leader2.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#c8a84a', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>{leader2.role}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0, fontStyle: 'italic', fontWeight: 300, fontFamily: "'Playfair Display', serif" }}>
                  "{leader2.bio}"
                </p>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '8px', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                  {leader2.subtitle}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Timeline */}
          <div>
            <div style={{ borderTop: '1px solid rgba(26,58,42,0.08)', paddingTop: '28px', position: 'relative', marginBottom: '40px' }}>
              <div style={{ fontSize: '1.15rem', fontFamily: "'Playfair Display', serif", fontWeight: 500, color: '#11251a', marginBottom: '28px' }}>Our Journey</div>
              
              <div style={{ position: 'relative', paddingLeft: '24px' }}>
                {/* Connecting Line */}
                <div style={{ 
                  position: 'absolute', 
                  left: '4px', 
                  top: '8px', 
                  bottom: '8px', 
                  width: '2px', 
                  background: 'linear-gradient(to bottom, #1a3a2a, rgba(26, 58, 42, 0.1))' 
                }} />

                {timeline.map((item, i) => (
                  <div key={i} style={{ position: 'relative', marginBottom: '28px' }}>
                    {/* Glowing Node */}
                    <div style={{ 
                       position: 'absolute', 
                       left: '-24px', 
                       top: '6px', 
                       width: '10px', 
                       height: '10px', 
                       borderRadius: '50%', 
                       background: '#c8a84a', 
                       border: '2px solid var(--bg-main)',
                       boxShadow: '0 0 0 2px #1a3a2a',
                       zIndex: 2 
                     }} />
                    
                    <div>
                      <div style={{ fontSize: '0.98rem', fontWeight: 600, color: '#11251a', marginBottom: '4px' }}>
                        <span style={{ color: '#c8a84a', fontWeight: 700, marginRight: '12px', fontFamily: "'Inter', sans-serif" }}>{item.year}</span>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '0.88rem', color: '#4a5568', lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .wewe-row { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (max-width: 640px) {
          .wewe-leader-card {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .wewe-leader-card > div:first-child {
            width: 100% !important;
            max-width: 280px !important;
            height: auto !important;
            aspect-ratio: 4/5 !important;
            flex-shrink: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
