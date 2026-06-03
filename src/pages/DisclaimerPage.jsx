import React from 'react';
import { motion } from 'framer-motion';

export default function DisclaimerPage() {
  const disclaimers = [
    {
      sec: "NOTICE I",
      tag: "INFORMATION ACCURACY",
      title: "Limits of Representation & Warranties",
      content: "All information, field reports, data figures, and coordination timelines provided on this website are shared in absolute good faith for public awareness. While the Foundation maintains rigorous audit processes to ensure accuracy, we make no legal representations or absolute warranties regarding the immediate completeness, real-time sync, or exhaustive precision of all logistical content."
    },
    {
      sec: "NOTICE II",
      tag: "NO PROFESSIONAL ADVICE",
      title: "Financial, Legal, & Tax Consulting Limits",
      content: "The content on this website does not represent, and must not be interpreted as, professional legal, tax, or investment advice. Donations made to the Foundation are eligible for statutory tax exemptions under applicable Indian acts (e.g. 80G/12A when verified). Stakeholders are strongly encouraged to consult their certified public accountants or legal advisors to review their specific taxation positions."
    },
    {
      sec: "NOTICE III",
      tag: "FIELD EXECUTION DEPENDENCE",
      title: "Direct Volunteer & Operational Activity Limits",
      content: "The Foundation delivers its digital schools and ecological cleanup drives using local volunteer networks, community trade leaders, and partnered organizations on the ground. Operational timelines, site plantation outcomes, and local trade placements may vary depending on local weather, municipal authorizations, and volunteer availability."
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
          background: 'radial-gradient(circle, rgba(245, 196, 67, 0.1) 0%, transparent 70%)', 
          filter: 'blur(55px)',
          pointerEvents: 'none' 
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ color: 'var(--green-icon)', margin: 0, display: 'inline-block', marginBottom: '20px', letterSpacing: '0.2em' }}>
            STATUTORY ANNOUNCEMENTS
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
            Legal <span className="serif-italic" style={{ color: 'var(--green-icon)' }}>Disclaimer</span>
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
            Please read the detailed statutory notices regarding information representation limits, taxation advices, and field program dependencies.
          </motion.p>
        </div>
      </section>

      {/* Main Charter Content Section */}
      <section style={{ padding: '120px 0', background: 'var(--bg-main)', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginBottom: '80px' }}>
            {disclaimers.map((d, idx) => (
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
                  
                  {/* Left Column: Notice identifier */}
                  <div style={{ borderLeft: '3px solid var(--gold-accent)', paddingLeft: '24px' }}>
                    <span style={{ 
                      fontSize: '0.85rem', 
                      fontWeight: 700, 
                      color: 'var(--green-icon)', 
                      letterSpacing: '0.12em',
                      fontFamily: "'Inter', sans-serif" 
                    }} className="serif-italic">
                      {d.sec}
                    </span>
                    <h4 style={{ 
                      fontSize: '0.68rem', 
                      fontWeight: 600, 
                      color: 'var(--text-muted)', 
                      letterSpacing: '0.1em',
                      marginTop: '4px',
                      textTransform: 'uppercase'
                    }}>
                      DISCLAIMER CASE
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
                      {d.title}
                    </h3>
                    <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8, fontWeight: 300, margin: 0, opacity: 0.95 }}>
                      {d.content}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Refined Seal Stamp Audit Banner */}
      <section style={{ 
        padding: '80px 0', 
        background: 'var(--bg-section)', 
        borderTop: '1px solid rgba(26,58,42,0.06)',
        position: 'relative'
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 200px',
            gap: '60px',
            alignItems: 'center'
          }} className="audit-flex">
            
            <div>
              <div style={{ 
                display: 'inline-flex', 
                padding: '8px 16px', 
                background: 'rgba(26, 58, 42, 0.05)', 
                borderRadius: '12px', 
                color: 'var(--green-icon)', 
                fontSize: '0.8rem', 
                fontWeight: 600, 
                letterSpacing: '0.08em', 
                marginBottom: '20px' 
              }}>
                OFFICIAL REGULATORY NOTICES
              </div>
              
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.5rem',
                color: 'var(--green-dark)',
                marginBottom: '16px',
                fontWeight: 500
              }}>
                Statutory Attestation & Transparency
              </h3>
              
              <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
                Every clause and statutory notice displayed is maintained securely in coordination with our legal advisors. Under our strict policy of compliance, these disclaimers are reviewed periodically to match contemporary Indian administrative guidelines.
              </p>
            </div>

            {/* Custom Stamp of Assurance */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                border: '2px dashed var(--gold-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                transform: 'rotate(-8deg)',
                padding: '12px'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  border: '1.5px solid var(--green-icon)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.5)',
                  textAlign: 'center',
                  padding: '10px'
                }}>
                  <span style={{ fontSize: '0.55rem', fontWeight: 700, color: 'var(--green-dark)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    CERTIFIED
                  </span>
                  <span style={{ fontSize: '0.72rem', fontFamily: "'Playfair Display', serif", fontWeight: 600, color: 'var(--green-icon)', margin: '2px 0' }}>
                    GOVERNANCE
                  </span>
                  <span style={{ fontSize: '0.5rem', fontWeight: 500, color: 'var(--green-icon)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    COMPLIANCE SEAL
                  </span>
                </div>
              </div>
            </div>

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
      .audit-flex {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
        text-align: center !important;
      }
    }
  `}} />
);
