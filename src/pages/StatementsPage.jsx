import React from 'react';
import { motion } from 'framer-motion';

export default function StatementsPage() {
  const statements = [
    {
      clause: "CLAUSE I",
      tag: "FINANCIAL TRANSPARENCY",
      title: "Statement of Financial Transparency",
      subtitle: "Absolute Audit & Direct Impact",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      content: "We enforce absolute financial transparency. 100% of public donations are channelled directly to project execution, environmental cleanup equipment, and learning materials on the ground. We completely reject administrative commission models, ensuring that every rupee you trust us with builds a direct, measurable impact.",
      attestation: "Direct Impact Audited"
    },
    {
      clause: "CLAUSE II",
      tag: "ETHICAL INCLUSIVITY",
      title: "Statement of Ethical Inclusivity",
      subtitle: "Pure Humanitarian Integration",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      content: "The Foundation is committed to absolute equality. We design and deliver our environmental protection drives, student classes, and skill training workshops to serve all members of society equally—completely free of bias regarding religion, caste, gender, region, or socio-economic background.",
      attestation: "Universal Service Seal"
    },
    {
      clause: "CLAUSE III",
      tag: "INDEPENDENCE & INTEGRITY",
      title: "Statement of Independence & Integrity",
      subtitle: "Values Over External Alignments",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </svg>
      ),
      content: "We maintain complete independence from political factions, corporate lobbies, or narrow external agendas. While we actively coordinate with administrative authorities for environmental and educational approvals, our policies, objectives, and ethics remain completely self-governing to ensure absolute integrity.",
      attestation: "Independent Board Attested"
    }
  ];

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh', overflow: 'hidden' }}>
      
      {/* Immersive Hero Header */}
      <section style={{ 
        background: 'var(--green-dark)', 
        padding: '180px 0 120px', 
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        {/* Procedural Grid */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.45,
          pointerEvents: 'none' 
        }} />
        
        {/* Ambient Glows */}
        <div style={{ 
          position: 'absolute', 
          bottom: '-10%', 
          left: '5%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, rgba(245, 196, 67, 0.1) 0%, transparent 70%)', 
          filter: 'blur(50px)',
          pointerEvents: 'none' 
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ color: 'var(--gold-accent)', margin: 0, display: 'inline-block', marginBottom: '20px', letterSpacing: '0.2em' }}>
            TRUST, COMPLIANCE & GOVERNANCE
          </span>
          
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
            Core Statements <span className="serif-italic" style={{ color: 'var(--gold-accent)' }}>Of Integrity</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', 
              maxWidth: '700px', 
              color: 'rgba(255, 255, 255, 0.78)', 
              lineHeight: 1.8, 
              fontWeight: 300, 
              margin: 0 
            }}
          >
            We hold ourselves to absolute parameters of accountability, non-discrimination, independent policies, and direct execution compliance on the ground.
          </motion.p>
        </div>
      </section>

      {/* Trust & Compliance Charter Section */}
      <section style={{ padding: '120px 0', background: 'var(--bg-main)', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1020px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="eyebrow" style={{ color: 'var(--green-icon)' }}>THE FOUNDATIONAL RULES</span>
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2rem, 4vw, 3.2rem)', 
              color: 'var(--green-dark)', 
              fontWeight: 400,
              marginTop: '8px' 
            }}>
              Commitment to Transparency & Trust
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {statements.map((s, idx) => (
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
                {/* Double frame outline for an official certificate/charter aesthetic */}
                <div style={{
                  border: '1px solid rgba(200, 168, 74, 0.25)',
                  borderRadius: '22px',
                  padding: '48px 40px',
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 0.8fr',
                  gap: '48px',
                  alignItems: 'center'
                }} className="charter-inner">
                  
                  {/* Left Column: Title & Spaced Prose */}
                  <div>
                    {/* Clause Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                      <span style={{ 
                        fontSize: '0.72rem', 
                        fontWeight: 700, 
                        color: 'var(--gold-accent)', 
                        letterSpacing: '0.12em',
                        fontFamily: "'Inter', sans-serif" 
                      }}>
                        {s.clause}
                      </span>
                      <div style={{ width: '16px', height: '1.5px', background: 'rgba(200, 168, 74, 0.4)' }} />
                      <span style={{ 
                        fontSize: '0.68rem', 
                        fontWeight: 600, 
                        color: 'var(--text-muted)', 
                        letterSpacing: '0.1em' 
                      }}>
                        {s.tag}
                      </span>
                    </div>

                    <h3 style={{ 
                      fontFamily: "'Playfair Display', Georgia, serif", 
                      fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)', 
                      fontWeight: 500, 
                      color: 'var(--green-dark)', 
                      marginBottom: '20px',
                      lineHeight: 1.25
                    }}>
                      {s.title}
                    </h3>
                    
                    <p style={{ 
                      fontSize: '1rem', 
                      color: 'var(--text-body)', 
                      lineHeight: 1.8, 
                      fontWeight: 300, 
                      margin: 0,
                      opacity: 0.95
                    }}>
                      {s.content}
                    </p>
                  </div>

                  {/* Right Column: Attestation stamp & handwritten sig (Elite human design element) */}
                  <div style={{ 
                    borderLeft: '1px solid rgba(26, 58, 42, 0.08)',
                    paddingLeft: '48px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '24px',
                    textAlign: 'center'
                  }} className="charter-attest">
                    
                    {/* Circular Double-Ring Seal Stamp */}
                    <div style={{
                      width: '76px',
                      height: '76px',
                      borderRadius: '50%',
                      border: '1.5px dashed var(--gold-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '4px'
                    }}>
                      <div style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background: 'rgba(26, 58, 42, 0.04)',
                        color: 'var(--green-icon)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(26, 58, 42, 0.08)'
                      }}>
                        {s.icon}
                      </div>
                    </div>

                    {/* Attestation Text & Sign */}
                    <div>
                      <div style={{ 
                        fontFamily: "'Playfair Display', Georgia, serif", 
                        fontStyle: 'italic', 
                        fontSize: '1.3rem', 
                        color: 'var(--green-dark)', 
                        fontWeight: 400,
                        letterSpacing: '-0.01em',
                        marginBottom: '4px'
                      }}>
                        {s.attestation}
                      </div>
                      <div style={{ 
                        fontSize: '0.68rem', 
                        fontWeight: 600, 
                        color: 'var(--text-muted)', 
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase' 
                      }}>
                        ATTESTED BY TRUST BOARD
                      </div>
                    </div>

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
                REGULAR AUDITS IN PLACE
              </div>
              
              <h3 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.5rem',
                color: 'var(--green-dark)',
                marginBottom: '16px',
                fontWeight: 500
              }}>
                Annual Financial Disclosure Policy
              </h3>
              
              <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
                Every financial record, audit statement, and operational milestone report is kept securely documented. Under our strict policy of transparency, these materials will be systematically disclosed annually to the public and regulatory authorities.
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
                    APPROVED
                  </span>
                  <span style={{ fontSize: '0.72rem', fontFamily: "'Playfair Display', serif", fontWeight: 600, color: 'var(--gold-accent)', margin: '2px 0' }}>
                    100% DIRECT
                  </span>
                  <span style={{ fontSize: '0.5rem', fontWeight: 500, color: 'var(--green-icon)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    IMPACT AUDIT
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .charter-inner {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 36px 24px !important;
          }
          .charter-attest {
            border-left: none !important;
            border-top: 1px solid rgba(26, 58, 42, 0.08) !important;
            padding-left: 0 !important;
            padding-top: 32px !important;
            flex-direction: row !important;
            text-align: left !important;
            justify-content: flex-start !important;
          }
        }
        @media (max-width: 800px) {
          .audit-flex {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center !important;
          }
        }
      `}} />
    </div>
  );
}
