import React from 'react';
import { motion } from 'framer-motion';

export default function WhoWeAre() {
  return (
    <section id="about" style={{ background: 'var(--bg-main)', padding: '140px 0' }}>
      <div className="container">
        <div style={{ marginBottom: '60px', maxWidth: '800px' }}>
          <span className="eyebrow">WHO WE ARE</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 400, color: '#11251a', lineHeight: 1.1, letterSpacing: '-0.025em', margin: 0 }}>
            A serious, human-centred foundation - not a slogan.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '80px', alignItems: 'start' }}>

          {/* LEFT: Leadership Vision */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Leader 1: Sh Bajrang Bagra */}
            <div className="hover-lift animate-reveal" style={{ 
              background: '#ffffff',
              borderRadius: '24px', 
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(26,58,42,0.03)',
              border: '1px solid rgba(26,58,42,0.06)',
              display: 'flex',
              flexDirection: 'row',
              gap: '24px',
              padding: '24px',
              alignItems: 'center'
            }}>
              <div style={{ width: '130px', height: '150px', borderRadius: '16px', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(26,58,42,0.08)' }}>
                <img 
                  src="/images/Bajrang Lal Bagra.jpg" 
                  alt="Sh Bajrang Bagra"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--green-dark)', marginBottom: '2px' }}>Sh Bajrang Bagra</div>
                <div style={{ fontSize: '0.75rem', color: '#c8a84a', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>Chairman</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0, fontStyle: 'italic', fontWeight: 300, fontFamily: "'Playfair Display', serif" }}>
                  "True development in India is achieved by blending professional and industrial excellence with deep-rooted cultural values, integrity, and cooperative social responsibility."
                </p>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '8px', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                  Former CMD, NALCO • General Secretary, VHP
                </div>
              </div>
            </div>

            {/* Leader 2: Sh D C Arya */}
            <div className="hover-lift animate-reveal" style={{ 
              background: '#ffffff',
              borderRadius: '24px', 
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(26,58,42,0.03)',
              border: '1px solid rgba(26,58,42,0.06)',
              display: 'flex',
              flexDirection: 'row',
              gap: '24px',
              padding: '24px',
              alignItems: 'center'
            }}>
              <div style={{ width: '130px', height: '150px', borderRadius: '16px', overflow: 'hidden', flexShrink: 0, border: '1px solid rgba(26,58,42,0.08)' }}>
                <img 
                  src="/dc_arya_suit_v3.jpg" 
                  alt="Sh D.C. Arya"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--green-dark)', marginBottom: '2px' }}>Sh D.C. Arya</div>
                <div style={{ fontSize: '0.75rem', color: '#c8a84a', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '8px' }}>Founder & Secretary</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0, fontStyle: 'italic', fontWeight: 300, fontFamily: "'Playfair Display', serif" }}>
                  "True progress is built on pure air, clean minds, and ethical values. We must address not only environmental pollution, but also moral and social challenges."
                </p>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '8px', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                  Former Chairman, NIRC-ICMAI
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div>
            <p style={{ fontSize: '1.05rem', color: 'var(--green-dark)', lineHeight: 1.8, marginBottom: '28px', fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', fontWeight: 500 }}>
              Founded in 2025, CSR & Educational India Foundation works towards addressing critical social and environmental challenges through awareness, education, and community engagement.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#4a5568', lineHeight: 1.8, marginBottom: '40px', fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
              The foundation believes that true progress is achieved when society grows not only economically, but also morally, educationally, and environmentally. Through seminars, educational initiatives, social outreach programs, and collaborative efforts, the foundation aims to create meaningful and long-term impact for individuals, families, and future generations.
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
                  { year: '2025', title: 'Foundation Established', desc: 'Registered as a Section 8 non-profit with core ecological, educational, and livelihood focus areas aligned.' },
                  { year: '2025', title: 'Sankalp & Hunar Pilot Initiatives', desc: 'Launched first grassroots student coaching centers and vocational livelihood modules.' },
                  { year: '2026', title: 'Operations Scale-up', desc: 'Expansion of digital literacy libraries, local trade workshops, and Parivar Samvad dialogue circles.' },
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
          #about > div > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
