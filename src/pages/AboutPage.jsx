import React from 'react';
import WhoWeAre from '../components/WhoWeAre';
import { motion } from 'framer-motion';

export default function AboutPage() {
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
            About Our Foundation
          </motion.h1>
          <p style={{ fontSize: '1.15rem', maxWidth: '650px', color: 'rgba(245, 243, 238, 0.8)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
            Learn more about our mission, our grounding community heritage, and the systematic, sustainable change we are creating across India.
          </p>
        </div>
      </section>
      
      {/* Who We Are Component */}
      <WhoWeAre />
      
      {/* Mission, Vision, Values Bento Grid */}
      <section style={{ padding: '100px 0 120px', background: 'var(--bg-section)', borderTop: '1px solid rgba(26,58,42,0.06)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }} className="mvv-grid">
            
            {/* Mission */}
            <div className="card hover-lift" style={{ 
              padding: '40px', 
              background: '#ffffff', 
              borderRadius: '24px', 
              border: '1px solid rgba(26, 58, 42, 0.06)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(26,58,42,0.01)'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--green-dark)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green-icon)" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.4rem', fontWeight: 400, color: 'var(--green-dark)' }}>Our Mission</h3>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
                To empower underserved rural and semi-urban communities through sustainable green livelihoods, high-impact education, skill training, and preservation of strong family units.
              </p>
            </div>

            {/* Vision */}
            <div className="card hover-lift" style={{ 
              padding: '40px', 
              background: '#ffffff', 
              borderRadius: '24px', 
              border: '1px solid rgba(26, 58, 42, 0.06)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(26,58,42,0.01)'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--gold-accent)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold-accent)" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.4rem', fontWeight: 400, color: 'var(--green-dark)' }}>Our Vision</h3>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
                A socially harmonious and self-reliant India where every household has a dignified livelihood, is empowered through skills, and lives in deep balance with environmental ecosystems.
              </p>
            </div>

            {/* Values */}
            <div className="card hover-lift" style={{ 
              padding: '40px', 
              background: '#ffffff', 
              borderRadius: '24px', 
              border: '1px solid rgba(26, 58, 42, 0.06)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(26,58,42,0.01)'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--green-icon)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green-icon)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.4rem', fontWeight: 400, color: 'var(--green-dark)' }}>Our Values</h3>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
                Absolute financial transparency, absolute community-centered service, zero artificial dependencies, and an unwavering commitment to trust, mutual dignity, and social harmony.
              </p>
            </div>

          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .mvv-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}} />
    </div>
  );
}
