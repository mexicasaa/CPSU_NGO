import React from 'react';
import { motion } from 'framer-motion';

export default function VisionPage() {
  const visions = [
    {
      number: "01",
      title: "Environmental Resilience",
      subtitle: "Green & Carbon-Neutral Ecosystems",
      desc: "We envision an India with clean air, pure water systems, and waste-free cities. Our vision is to institutionalize solid-waste separation, massive organic recycling, and ecological accountability in every community.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      number: "02",
      title: "Value-Driven Youth",
      subtitle: "The Future Civic Leadership",
      desc: "Our vision is to nurture a generation of young leaders who are globally competitive, technically skilled, yet deeply grounded in core human ethics, strong family integration, and high social responsibility.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      number: "03",
      title: "Self-Sustaining Progress",
      subtitle: "Zero Artificial Dependency",
      desc: "We strive to establish autonomous rural training facilities and vocational centers. We envision a society that does not rely on transient grants, but builds its own wealth and capabilities sustainably.",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      )
    }
  ];

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh', overflow: 'hidden' }}>
      
      {/* Immersive Hero Header */}
      <section style={{ 
        background: '#e6f1e2', 
        padding: '180px 0 120px', 
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(17, 37, 26, 0.08)'
      }}>
        {/* Procedural Grid */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: 'radial-gradient(rgba(17, 37, 26, 0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.45,
          pointerEvents: 'none' 
        }} />
        
        {/* Ambient Glows */}
        <div style={{ 
          position: 'absolute', 
          top: '-10%', 
          right: '5%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, rgba(245, 196, 67, 0.12) 0%, transparent 70%)', 
          filter: 'blur(60px)',
          pointerEvents: 'none' 
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ color: 'var(--green-icon)', margin: 0, display: 'inline-block', marginBottom: '20px', letterSpacing: '0.2em' }}>
            OUR SUSTAINABLE FUTURE
          </span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(3rem, 6vw, 5.2rem)', 
              fontWeight: 400, 
              color: '#11251a', 
              lineHeight: 1.1, 
              letterSpacing: '-0.02em', 
              marginBottom: '28px' 
            }}
          >
            Our Long-Term <span className="serif-italic" style={{ color: 'var(--green-icon)' }}>Vision</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', 
              maxWidth: '700px', 
              color: 'rgba(17, 37, 26, 0.8)', 
              lineHeight: 1.8, 
              fontWeight: 300, 
              margin: 0 
            }}
          >
            We strive for an environmentally resilient, educated, and value-driven society where absolute integrity, dignity, and collective capability empower every citizen.
          </motion.p>
        </div>
      </section>

      {/* Vision 2030 Blueprint Cards Section */}
      <section style={{ padding: '120px 0', background: 'var(--bg-main)', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="eyebrow" style={{ color: 'var(--green-icon)' }}>THE 2030 BLUEPRINT</span>
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2rem, 4vw, 3.2rem)', 
              color: 'var(--green-dark)', 
              fontWeight: 400,
              marginTop: '8px' 
            }}>
              Strategic Transformation Goals
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="vision-grid">
            {visions.map((v, idx) => (
              <motion.div 
                key={idx}
                className="card hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                style={{
                  padding: '48px 40px',
                  background: '#ffffff',
                  borderRadius: '28px',
                  border: '1px solid rgba(26, 58, 42, 0.05)',
                  boxShadow: 'var(--shadow-premium)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Floating Outline Year Tag */}
                <div style={{ 
                  position: 'absolute', 
                  right: '-10px', 
                  bottom: '-25px', 
                  fontSize: '9rem', 
                  fontWeight: 900, 
                  color: 'rgba(26, 58, 42, 0.03)', 
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: 1,
                  pointerEvents: 'none',
                  userSelect: 'none',
                  fontStyle: 'italic'
                }}>
                  {v.number}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ 
                    width: '44px', 
                    height: '44px', 
                    borderRadius: '12px', 
                    background: 'rgba(26, 58, 42, 0.04)', 
                    color: 'var(--green-icon)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center' 
                  }}>
                    {v.icon}
                  </div>
                  <span style={{ 
                    fontSize: '0.72rem', 
                    fontWeight: 600, 
                    color: 'var(--green-icon)', 
                    textTransform: 'uppercase', 
                    letterSpacing: '0.12em',
                    background: 'rgba(245, 196, 67, 0.08)',
                    padding: '4px 12px',
                    borderRadius: '999px'
                  }}>
                    {v.number} TARGET
                  </span>
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {v.subtitle}
                  </span>
                  <h3 style={{ 
                    fontFamily: "'Playfair Display', Georgia, serif", 
                    fontSize: '1.5rem', 
                    fontWeight: 500, 
                    color: 'var(--green-dark)', 
                    marginTop: '8px', 
                    marginBottom: '16px' 
                  }}>
                    {v.title}
                  </h3>
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-body)', lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Frame Quote Section */}
      <section style={{ 
        padding: '140px 0', 
        background: '#e6f1e2', 
        position: 'relative', 
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        {/* Procedural Grid inside quote section */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: 'radial-gradient(rgba(17, 37, 26, 0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.5,
          pointerEvents: 'none' 
        }} />
        
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'radial-gradient(circle at 20% 80%, rgba(245, 196, 67, 0.08) 0%, transparent 60%)', 
          pointerEvents: 'none' 
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
          
          {/* Framed Quote container */}
          <div style={{
            border: '1px solid rgba(17, 37, 26, 0.12)',
            padding: '80px 60px',
            borderRadius: '32px',
            background: 'rgba(17, 37, 26, 0.02)',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            textAlign: 'center'
          }}>
            {/* Corner Notch decorations for craft appeal */}
            <div style={{ position: 'absolute', top: '-1px', left: '40px', width: '20px', height: '3px', background: 'var(--gold-accent)' }} />
            <div style={{ position: 'absolute', top: '40px', left: '-1px', width: '3px', height: '20px', background: 'var(--gold-accent)' }} />
            <div style={{ position: 'absolute', bottom: '-1px', right: '40px', width: '20px', height: '3px', background: 'var(--gold-accent)' }} />
            <div style={{ position: 'absolute', bottom: '40px', right: '-1px', width: '3px', height: '20px', background: 'var(--gold-accent)' }} />

            <span className="eyebrow" style={{ color: 'var(--green-icon)', marginBottom: '28px' }}>THE INTEGRAL COMPASS</span>
            
            <p style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(1.5rem, 3vw, 2.3rem)', 
              fontStyle: 'italic', 
              lineHeight: 1.6, 
              color: '#11251a', 
              fontWeight: 400,
              marginBottom: '36px',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              "We do not inherit the earth from our ancestors; we borrow it from our children. Our vision is to return it cleaner, healthier, and richer in human values."
            </p>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
              <div style={{ width: '30px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
              <span style={{ color: 'var(--green-icon)', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                FOUNDATION CHARTER
              </span>
              <div style={{ width: '30px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 960px) {
          .vision-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}} />
    </div>
  );
}
