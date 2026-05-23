import React from 'react';
import FocusAreas from '../components/FocusAreas';
import { motion } from 'framer-motion';

export default function FocusAreasPage() {
  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
      {/* Premium Hero Header */}
      <section style={{ 
        background: 'var(--green-dark)', 
        padding: '160px 0 100px', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: 'radial-gradient(circle at 80% 20%, rgba(200, 168, 74, 0.15) 0%, transparent 60%)', 
          pointerEvents: 'none' 
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ color: 'var(--gold-accent)', margin: 0, display: 'inline-block', marginBottom: '16px' }}>CSR & EDUCATIONAL INDIA FOUNDATION</span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', 
              fontWeight: 400, 
              color: 'var(--bg-main)', 
              lineHeight: 1.15, 
              letterSpacing: '-0.02em', 
              marginBottom: '24px' 
            }}
          >
            Our Core Focus Areas
          </motion.h1>
          <p style={{ fontSize: '1.15rem', maxWidth: '650px', color: 'rgba(245, 243, 238, 0.8)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
            We focus on systematic community development pillars to ensure practical, field-level and long-term self-reliance.
          </p>
        </div>
      </section>
      
      {/* Focus Areas Bento Grid Component */}
      <FocusAreas />
      
      {/* How We Work Process Sequence */}
      <section style={{ padding: '100px 0 120px', background: 'var(--bg-section)', borderTop: '1px solid rgba(26,58,42,0.06)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="eyebrow">OUR METHODOLOGY</span>
          <h2 style={{ 
            fontFamily: "'Playfair Display', Georgia, serif", 
            fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)', 
            fontWeight: 400, 
            color: 'var(--green-dark)', 
            marginBottom: '60px',
            lineHeight: 1.2
          }}>
            How We Execute on the Ground
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }} className="methodology-grid">
            {[
              { title: "Identify", desc: "Finding root socio-economic and ecological causes of community vulnerability." },
              { title: "Engage", desc: "Partnering closely with local village heads, families, and grassroots stakeholders." },
              { title: "Execute", desc: "Implementing practical, self-reliant solutions without creating artificial dependencies." },
              { title: "Scale", desc: "Expanding successful models and community strategies to more neighboring regions." }
            ].map((step, i) => (
              <div key={i} className="card hover-lift" style={{ 
                background: '#ffffff', 
                borderRadius: '24px', 
                padding: '36px 32px',
                border: '1px solid rgba(26, 58, 42, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: '0 10px 30px rgba(26,58,42,0.01)'
              }}>
                <div style={{ 
                  w: 48,
                  width: '48px', 
                  height: '48px', 
                  borderRadius: '50%', 
                  background: 'var(--green-dark)', 
                  color: 'var(--gold-accent)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.1rem',
                  fontWeight: 700, 
                  marginBottom: '20px',
                  boxShadow: '0 4px 12px rgba(26,58,42,0.1)'
                }}>
                  {i + 1}
                </div>
                <h3 style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif", 
                  fontSize: '1.25rem', 
                  fontWeight: 400, 
                  color: 'var(--green-dark)', 
                  marginBottom: '12px' 
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 991px) {
          .methodology-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 640px) {
          .methodology-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}} />
    </div>
  );
}
