import React from 'react';
import WhoWeAre from '../components/WhoWeAre';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh', overflow: 'hidden' }}>
      
      {/* Immersive Editorial Hero */}
      <section style={{ 
        background: '#1a3a2a', 
        padding: '180px 0 120px', 
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(17, 37, 26, 0.08)'
      }}>
        {/* Procedural Dotted Background Grid */}
        <div style={{ 
          position: 'absolute', 
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(17, 37, 26, 0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.45,
          pointerEvents: 'none' 
        }} />
        
        {/* Soft Organic Atmospheric Glows */}
        <div style={{ 
          position: 'absolute', 
          top: '-10%', 
          right: '10%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, rgba(245, 196, 67, 0.12) 0%, transparent 70%)', 
          filter: 'blur(60px)',
          pointerEvents: 'none' 
        }} />
        <div style={{ 
          position: 'absolute', 
          bottom: '-20%', 
          left: '10%', 
          width: '400px', 
          height: '400px', 
          background: 'radial-gradient(circle, rgba(42, 92, 63, 0.35) 0%, transparent 70%)', 
          filter: 'blur(50px)',
          pointerEvents: 'none' 
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow" 
            style={{ 
              color: 'var(--gold-accent)', 
              margin: 0, 
              display: 'inline-block', 
              marginBottom: '20px',
              letterSpacing: '0.2em',
              fontWeight: 600
            }}
          >
            CSR & EDUCATIONAL INDIA FOUNDATION
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(3rem, 6vw, 5.2rem)', 
              fontWeight: 400, 
              color: '#ffffff', 
              lineHeight: 1.1, 
              letterSpacing: '-0.02em', 
              marginBottom: '28px' 
            }}
          >
            About Our <span className="serif-italic" style={{ color: 'var(--gold-accent)' }}>Foundation</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', 
              maxWidth: '700px', 
              color: 'rgba(255, 255, 255, 0.9)', 
              lineHeight: 1.8, 
              fontWeight: 300, 
              margin: 0 
            }}
          >
            We are structuring direct community-focused empowerment across India through rigorous environmental protection, modern digital learning, and ethical character building.
          </motion.p>
        </div>
      </section>
      
      {/* Asymmetric Founding Values (Editorial Layout) */}
      <section style={{ padding: '120px 0 80px', background: 'var(--bg-main)', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', alignItems: 'start' }} className="editorial-split">
            
            {/* Left side: Premium typography block */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ borderLeft: '3px solid var(--gold-accent)', paddingLeft: '40px' }}
            >
              <span className="eyebrow" style={{ color: 'var(--green-icon)', marginBottom: '16px' }}>OUR GENERAL PURPOSE</span>
              <p style={{ 
                fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', 
                color: 'var(--green-dark)', 
                lineHeight: 1.6, 
                fontFamily: "'Playfair Display', Georgia, serif", 
                fontWeight: 400,
                marginBottom: '36px'
              }}>
                Established in 2025, our core mandate is to trigger value-based community development, restoring ethical living, family integration, and ecological duty.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '3.5rem', fontFamily: "'Playfair Display', serif", color: 'var(--green-icon)', fontWeight: 600, lineHeight: 1 }}>2025</span>
                <div style={{ width: '40px', height: '1px', background: 'rgba(26,58,42,0.15)' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>REGISTRATION YEAR</span>
              </div>
            </motion.div>

            {/* Right side: Detailed narrative */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
            >
              <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.8, fontWeight: 300 }}>
                We believe that the future of Indian society depends not only on pure industrialization, but also on clean surroundings, ethical thinking, quality skills, and strong family and cultural values.
              </p>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
                Through seminars, educational initiatives, social outreach, and collaborative partnerships, the foundation works in the areas of environmental protection, youth empowerment, civic duty education, and community development.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
      
      {/* Who We Are Component */}
      <WhoWeAre />
      
      {/* Redesigned Bento Grid Section (Glassmorphism & Staggered Cards) */}
      <section style={{ 
        padding: '120px 0', 
        background: 'var(--bg-section)', 
        borderTop: '1px solid rgba(26,58,42,0.06)',
        position: 'relative'
      }}>
        {/* Soft Gold Background Glow */}
        <div style={{ 
          position: 'absolute', 
          top: '30%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
          width: '600px', 
          height: '600px', 
          background: 'radial-gradient(circle, rgba(245, 196, 67, 0.05) 0%, transparent 70%)', 
          filter: 'blur(50px)',
          pointerEvents: 'none' 
        }} />

        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="eyebrow" style={{ color: 'var(--green-icon)' }}>THE CORE COMPASS</span>
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2rem, 4vw, 3.2rem)', 
              color: 'var(--green-dark)', 
              fontWeight: 400,
              marginTop: '8px' 
            }}>
              Operational Foundations
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="mvv-grid">
            
            {/* Mission Card (Forest Green Accent) */}
            <motion.div 
              className="card hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ 
                padding: '48px 40px', 
                background: '#ffffff', 
                borderRadius: '28px', 
                border: '1px solid rgba(26, 58, 42, 0.05)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-premium)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '6px', background: '#1a3a2a' }} />
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '12px', 
                  background: 'rgba(26, 58, 42, 0.04)', 
                  color: 'var(--green-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.6rem', fontWeight: 500, color: 'var(--green-dark)' }}>Our Mission</h3>
              </div>
              
              <ul style={{ 
                fontSize: '0.96rem', 
                color: 'var(--text-body)', 
                lineHeight: 1.8, 
                paddingLeft: '20px', 
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                fontWeight: 300
              }}>
                <li>To spread rigorous awareness about environmental preservation and waste management.</li>
                <li>To promote value-based education and direct technical skill development.</li>
                <li>To strengthen ethical character building, social duty, and family integration.</li>
              </ul>
            </motion.div>

            {/* Vision Card (Sunlit Gold Accent) */}
            <motion.div 
              className="card hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{ 
                padding: '48px 40px', 
                background: '#ffffff', 
                borderRadius: '28px', 
                border: '1px solid rgba(26, 58, 42, 0.05)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-premium)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '6px', background: 'var(--gold-accent)' }} />
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '12px', 
                  background: 'rgba(245, 196, 67, 0.06)', 
                  color: 'var(--green-icon)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.6rem', fontWeight: 500, color: 'var(--green-dark)' }}>Our Vision</h3>
              </div>
              
              <p style={{ fontSize: '1.02rem', color: 'var(--text-body)', lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
                To build an environmentally resilient, educated, and value-driven society where absolute integrity, dignity, and collective capability empower every citizen.
              </p>
            </motion.div>

            {/* Values Card (Forest Green Light Accent) */}
            <motion.div 
              className="card hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ 
                padding: '48px 40px', 
                background: '#ffffff', 
                borderRadius: '28px', 
                border: '1px solid rgba(26, 58, 42, 0.05)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-premium)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '6px', background: 'var(--green-icon)' }} />
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ 
                  width: '44px', 
                  height: '44px', 
                  borderRadius: '12px', 
                  background: 'rgba(42, 92, 63, 0.04)', 
                  color: 'var(--green-icon)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.6rem', fontWeight: 500, color: 'var(--green-dark)' }}>Our Values</h3>
              </div>
              
              <p style={{ fontSize: '1.02rem', color: 'var(--text-body)', lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
                Absolute financial transparency, absolute community-centered service, zero artificial dependencies, and an unwavering commitment to trust, mutual dignity, and social harmony.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 990px) {
          .editorial-split {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .mvv-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}} />
    </div>
  );
}
