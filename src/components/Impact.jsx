import React from 'react';
import { db } from '../utils/db';

export default function Impact({ isPreview = false }) {
  const data = db.getHomeSection('stats', isPreview);
  const stats = data.items || [];
  return (
    <section id="impact" style={{ position: 'relative', padding: 0, background: 'var(--bg-main)' }}>
      {/* Full-bleed image with overlay */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{
          width: '100%', minHeight: '80vh',
          background: 'linear-gradient(160deg, #0e1d15 0%, #153022 50%, #0a140f 100%)',
          display: 'flex', alignItems: 'flex-end',
          position: 'relative',
          padding: '120px 0'
        }}>
          
          {/* Textured mesh overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(rgba(200, 168, 74, 0.05) 1.2px, transparent 1.2px)',
            backgroundSize: '32px 32px',
            pointerEvents: 'none',
            zIndex: 1
          }} />

          {/* Ambient Gold Glow Orbs */}
          <div style={{
            position: 'absolute', top: '-10%', left: '20%', width: '40vw', height: '40vw',
            background: 'radial-gradient(circle, rgba(200,168,74,0.06) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(80px)', zIndex: 1, pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute', bottom: '-10%', right: '10%', width: '35vw', height: '35vw',
            background: 'radial-gradient(circle, rgba(45,114,84,0.1) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(100px)', zIndex: 1, pointerEvents: 'none'
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
            <div>
              <span className="eyebrow" style={{ color: '#c8a84a', display: 'block', marginBottom: '20px' }}>
                {data.eyebrow || 'MEASURED IMPACT'}
              </span>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 0.8fr',
                gap: '80px',
                alignItems: 'end',
                marginBottom: '64px'
              }}>
                <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 400, color: '#fff', lineHeight: 1.1, letterSpacing: '-0.025em', maxWidth: '750px', margin: 0 }}>
                  {data.title || 'Impact Updates'}
                </h2>
                <p style={{ fontSize: '1.02rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.7, maxWidth: '520px', margin: 0, fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
                  {data.description || 'The foundation’s measurable impact data will be updated as programs and initiatives continue to expand. This section will showcase the outcomes, reach, and community impact created through our environmental, educational, and social initiatives.'}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="impact-stats-grid">
                {stats.map((s, i) => (
                  <div 
                    key={i} 
                    className="hover-lift" 
                    style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      borderRadius: '24px', 
                      padding: '36px 30px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(200, 168, 74, 0.4)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                      e.currentTarget.style.boxShadow = '0 30px 60px rgba(200, 168, 74, 0.08)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
                    }}
                  >
                    <div style={{ 
                      fontSize: 'clamp(2.2rem, 3vw, 3.2rem)', 
                      fontWeight: 400, 
                      color: '#c8a84a', 
                      letterSpacing: '-0.02em', 
                      marginBottom: '10px', 
                      fontFamily: "'Playfair Display', Georgia, serif",
                      lineHeight: 1.1 
                    }}>{s.num}</div>
                    
                    <div style={{ 
                      fontSize: '0.88rem', 
                      color: 'rgba(255,255,255,0.7)', 
                      lineHeight: 1.5, 
                      fontFamily: "'Inter', sans-serif", 
                      fontWeight: 300 
                    }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .impact-stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        @media (max-width: 900px) {
          #impact > div > div {
            padding: 80px 0 !important;
          }
          #impact h2 {
            margin-bottom: 24px !important;
          }
          #impact > div > div > div > div:first-of-type {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
            margin-bottom: 48px !important;
          }
          .impact-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 550px) {
          .impact-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />
    </section>
  );
}
