import React from 'react';
import { motion } from 'framer-motion';

export default function WhoWeAre() {
  return (
    <section id="about" style={{ background: 'var(--bg-main)', padding: '140px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '80px', alignItems: 'start' }}>

          {/* LEFT */}
          <div style={{ position: 'sticky', top: '140px' }}>
            <span className="eyebrow">WHO WE ARE</span>
            <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 400, color: '#11251a', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: '48px' }}>
              A serious, human-centred foundation - not a slogan.
            </h2>

            {/* Founder photo with label */}
            <div className="hover-lift" style={{ 
              position: 'relative', 
              borderRadius: '24px', 
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(26,58,42,0.05)',
              border: '1px solid rgba(26,58,42,0.08)'
            }}>
              <div style={{ width: '100%', overflow: 'hidden' }}>
                <img 
                  src="/dc_arya_suit.jpg" 
                  alt="D.C. Arya"
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '1/1',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(17,37,26,0.9) 0%, rgba(17,37,26,0.4) 60%, transparent 100%)',
                padding: '28px 28px 24px',
              }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#fff', letterSpacing: '-0.01em', marginBottom: '4px' }}>D.C. Arya</div>
                <div style={{ fontSize: '0.85rem', color: '#c8a84a', fontWeight: 500, letterSpacing: '0.02em' }}>Chairperson, CSR & Educational India Foundation</div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <p style={{ fontSize: '1rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '40px', fontFamily: "'Inter', sans-serif" }}>
              CSR & Educational India Foundation is a citizen-led non-profit working across four interconnected areas - environmental responsibility, education and employability, skill-based livelihood, and social cohesion. Our work is rooted in field practice, not abstractions: we partner directly with schools, panchayats, women's collectives and local industries.
            </p>

            {/* Timeline */}
            <div style={{ borderTop: '1px solid rgba(26,58,42,0.08)', paddingTop: '36px', position: 'relative', marginBottom: '40px' }}>
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

                {[
                  { year: '2018', title: 'Foundation established', desc: 'Registered non-profit, first pilot in NCR slum schools.' },
                  { year: '2020', title: 'Sankalp Education launched', desc: 'Free tuition, libraries and digital literacy programmes scaled.' },
                  { year: '2022', title: 'Hunar Skill Workshops', desc: 'Trade-based livelihood training begins across 12 communities.' },
                  { year: '2024', title: 'Green Schools & Parivar Samvad', desc: 'Environment-in-schools and family value circles roll out.' },
                ].map((item, i) => (
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
                      border: '2px solid #F5F3EE',
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

            {/* Quote block */}
            <div style={{
              background: '#eae7df', 
              borderRadius: '24px',
              padding: '40px', 
              position: 'relative',
              borderLeft: '4px solid #c8a84a',
              boxShadow: '0 10px 30px rgba(0,0,0,0.01)'
            }}>
              <div style={{ position: 'absolute', top: '24px', right: '28px', fontSize: '3rem', color: '#c8b8a2', lineHeight: 1, fontFamily: 'Georgia, serif' }}>"</div>
              <p style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: 'italic', fontWeight: 400,
                fontSize: '1.18rem', lineHeight: 1.7,
                color: '#1a3a2a', marginBottom: '20px',
              }}>
                "We believe a country becomes truly self-reliant when its environment is cared for, its children are taught, its workers are skilled, and its families stand together. That is the work we have chosen."
              </p>
              <div style={{ fontSize: '0.88rem', color: '#4a5568', fontWeight: 600 }}>- D.C. Arya, Founder</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
