import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      clause: "SECTION I",
      title: "Data Collection & Consent",
      desc: "We collect only vital information required for donation processing, volunteer registration, and quarterly field newsletter delivery. We enforce strict data consent models where no stakeholder record is captured without explicit active authorization."
    },
    {
      clause: "SECTION II",
      title: "Absolute Non-Disclosure Policy",
      desc: "Your data belongs to you. Under our foundational compliance parameters, the Foundation maintains an absolute non-sharing mandate. We do not sell, rent, lease, or disclose stakeholder contact details to any third-party corporate entities or external marketing factions."
    },
    {
      clause: "SECTION III",
      title: "Payment Gateway Security",
      desc: "All financial contributions made to the CSR & Educational India Foundation are processed via premium, bank-grade encrypted payment gateways. No credit card numbers, CVV keys, or detailed banking credentials are ever recorded or stored on our servers."
    }
  ];

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh', overflow: 'hidden' }}>
      
      {/* Immersive Hero Header */}
      <section style={{ 
        background: '#6cdf32', 
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
          background: 'radial-gradient(circle, rgba(245, 196, 67, 0.1) 0%, transparent 70%)', 
          filter: 'blur(55px)',
          pointerEvents: 'none' 
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ color: 'var(--green-icon)', margin: 0, display: 'inline-block', marginBottom: '20px', letterSpacing: '0.2em' }}>
            REGULATORY PROTOCOLS
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
            Privacy <span className="serif-italic" style={{ color: 'var(--green-icon)' }}>Policy</span>
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
            Our rigorous, direct compliance parameters guarantee the absolute confidentiality, security, and integrity of your stakeholder data.
          </motion.p>
        </div>
      </section>

      {/* Main Charter Content Section */}
      <section style={{ padding: '120px 0', background: 'var(--bg-main)', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {sections.map((s, idx) => (
              <motion.div 
                key={idx}
                className="card hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
                style={{
                  padding: '12px',
                  background: '#ffffff',
                  borderRadius: '32px',
                  border: '1px solid rgba(26, 58, 42, 0.08)',
                  boxShadow: 'var(--shadow-premium)',
                  position: 'relative'
                }}
              >
                <div style={{
                  border: '1px solid rgba(200, 168, 74, 0.25)',
                  borderRadius: '22px',
                  padding: '48px 40px',
                  display: 'grid',
                  gridTemplateColumns: '180px 1fr',
                  gap: '40px',
                  alignItems: 'start'
                }} className="charter-inner">
                  
                  {/* Left Column: Section identifier */}
                  <div style={{ borderLeft: '3px solid var(--gold-accent)', paddingLeft: '24px' }}>
                    <span style={{ 
                      fontSize: '0.85rem', 
                      fontWeight: 700, 
                      color: 'var(--green-icon)', 
                      letterSpacing: '0.12em',
                      fontFamily: "'Inter', sans-serif" 
                    }} className="serif-italic">
                      {s.clause}
                    </span>
                    <h4 style={{ 
                      fontSize: '0.68rem', 
                      fontWeight: 600, 
                      color: 'var(--text-muted)', 
                      letterSpacing: '0.1em',
                      marginTop: '4px',
                      textTransform: 'uppercase'
                    }}>
                      POLICY SECTION
                    </h4>
                  </div>

                  {/* Right Column: Text content */}
                  <div>
                    <h3 style={{ 
                      fontFamily: "'Playfair Display', Georgia, serif", 
                      fontSize: 'clamp(1.3rem, 2vw, 1.65rem)', 
                      fontWeight: 500, 
                      color: 'var(--green-dark)', 
                      marginBottom: '16px',
                      lineHeight: 1.25
                    }}>
                      {s.title}
                    </h3>
                    <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8, fontWeight: 300, margin: 0, opacity: 0.95 }}>
                      {s.desc}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {styleStyle}
    </div>
  );
}

const styleStyle = (
  <style dangerouslySetInnerHTML={{ __html: `
    @media (max-width: 768px) {
      .charter-inner {
        grid-template-columns: 1fr !important;
        gap: 24px !important;
        padding: 36px 20px !important;
      }
    }
  `}} />
);
