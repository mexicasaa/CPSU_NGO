import React from 'react';
import { motion } from 'framer-motion';

export default function MissionPage() {
  const pillars = [
    {
      number: "01",
      roman: "I",
      title: "Environmental Preservation",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a15 15 0 0 0-12 13 15 15 0 0 0 24 0A15 15 0 0 0 12 2z"/>
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      description: "Combating ecological degradation at its roots, promoting local waste management, and orchestrating comprehensive tree plantation and community cleanup drives across urban and rural zones.",
      bullets: ["Waste Audits & Separation", "Massive Organic Recycling", "Ecological Restoration"],
      color: "var(--green-icon)",
      bgColor: "rgba(42, 92, 63, 0.04)"
    },
    {
      number: "02",
      roman: "II",
      title: "Value-Based Education",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      ),
      description: "Guiding the next generation with modern learning frameworks that integrate academic excellence with civic duties, cultural values, and strict ethical standards.",
      bullets: ["Modern Digital Labs", "Civic & Cultural Duty", "Ethical Mentorship"],
      color: "var(--gold-accent)",
      bgColor: "rgba(245, 196, 67, 0.06)"
    },
    {
      number: "03",
      roman: "III",
      title: "Skill Development & Self-Reliance",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      ),
      description: "Empowering communities to break cycles of dependency through job-oriented vocational training, technical certifications, and local enterprise assistance.",
      bullets: ["Vocational Certifications", "Technical Bootcamps", "Local Trade Workshops"],
      color: "var(--gold-accent)",
      bgColor: "rgba(245, 196, 67, 0.06)"
    },
    {
      number: "04",
      roman: "IV",
      title: "Ethical Character Building",
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      description: "Strengthening families by instilling high respect for elders, value-driven parenting, self-discipline, and deep commitment to social and communal harmony.",
      bullets: ["Family Dialogue Circles", "Leadership Workshops", "Youth Community Duty"],
      color: "var(--green-icon)",
      bgColor: "rgba(42, 92, 63, 0.04)"
    }
  ];

  const milestones = [
    { year: "2025", title: "Inception & Core Setup", desc: "Establishing regional coordination hubs, enrolling first cohorts of value-coaching students, and starting local ecological drives." },
    { year: "2026", title: "Scale of Operations", desc: "Deploying 15 permanent environmental restoration hubs and launching digital-skills libraries across 100+ villages." },
    { year: "2027", title: "National Self-Reliance Network", desc: "Establishing state-of-the-art technical institutes with direct industry linkage and 100% vocational job-placement rates." }
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
        {/* Procedural Dotted Grid */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.45,
          pointerEvents: 'none' 
        }} />
        
        {/* Organic Ambient Glows */}
        <div style={{ 
          position: 'absolute', 
          top: '-15%', 
          left: '50%', 
          transform: 'translateX(-50%)',
          width: '600px', 
          height: '600px', 
          background: 'radial-gradient(circle, rgba(245, 196, 67, 0.12) 0%, transparent 70%)', 
          filter: 'blur(60px)',
          pointerEvents: 'none' 
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ color: 'var(--gold-accent)', margin: 0, display: 'inline-block', marginBottom: '20px', letterSpacing: '0.2em' }}>
            CSR & EDUCATIONAL INDIA FOUNDATION
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
            Our Mission <span className="serif-italic" style={{ color: 'var(--gold-accent)' }}>In Action</span>
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
            We deploy practical, high-impact community programs that foster a cleaner environment, drive education equity, and empower self-reliant Indian communities.
          </motion.p>
        </div>
      </section>

      {/* Pillars Staggered Grid Section */}
      <section style={{ padding: '120px 0', background: 'var(--bg-main)', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="eyebrow" style={{ color: 'var(--green-icon)' }}>THE CORE WORK</span>
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2rem, 4vw, 3.2rem)', 
              color: 'var(--green-dark)', 
              fontWeight: 400,
              marginTop: '8px' 
            }}>
              Four Pillars of Transformation
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }} className="mission-grid">
            {pillars.map((p, idx) => (
              <motion.div 
                key={idx}
                className="card hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.12 }}
                style={{
                  padding: '56px 48px',
                  background: 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '32px',
                  border: `1px solid rgba(26, 58, 42, 0.06)`,
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-premium)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '28px'
                }}
              >
                {/* Floating Serif Number in Background */}
                <div style={{ 
                  position: 'absolute', 
                  right: '24px', 
                  bottom: '-25px', 
                  fontSize: '9.5rem', 
                  fontWeight: 900, 
                  color: 'rgba(26, 58, 42, 0.02)', 
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: 1,
                  fontStyle: 'italic',
                  userSelect: 'none',
                  pointerEvents: 'none'
                }}>
                  {p.roman}
                </div>

                {/* Accent Top Border notch to match luxury branding */}
                <div style={{ 
                  position: 'absolute', 
                  top: 0, 
                  left: '48px', 
                  width: '60px', 
                  height: '4px', 
                  background: p.color,
                  borderRadius: '0 0 4px 4px'
                }} />

                {/* Header Row: Circular Seal Icon and Small Label */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {/* Circular double bordered seal icon */}
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    border: `1px dashed ${p.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px',
                    flexShrink: 0
                  }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      background: p.bgColor,
                      color: p.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {p.icon}
                    </div>
                  </div>

                  <span style={{ 
                    fontSize: '0.72rem', 
                    fontWeight: 700, 
                    color: p.color, 
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    background: p.bgColor,
                    padding: '6px 16px',
                    borderRadius: '999px'
                  }}>
                    Pillar {p.roman}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 style={{ 
                    fontFamily: "'Playfair Display', Georgia, serif", 
                    fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)', 
                    fontWeight: 500, 
                    color: 'var(--green-dark)', 
                    marginBottom: '16px',
                    lineHeight: 1.25
                  }}>
                    {p.title}
                  </h3>
                  <p style={{ 
                    fontSize: '1.02rem', 
                    color: 'var(--text-body)', 
                    lineHeight: 1.8, 
                    fontWeight: 300, 
                    margin: 0,
                    opacity: 0.9
                  }}>
                    {p.description}
                  </p>
                </div>

                {/* Detailed Action Sub-bullets (Bespoke layout details) */}
                <div style={{ 
                  borderTop: '1px solid rgba(26, 58, 42, 0.06)', 
                  paddingTop: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px'
                }}>
                  {p.bullets.map((b, bIdx) => (
                    <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {/* Stylized tiny gold check dot */}
                      <div style={{ 
                        width: '6px', 
                        height: '6px', 
                        borderRadius: '50%', 
                        background: 'var(--gold-accent)',
                        boxShadow: '0 0 6px rgba(245, 196, 67, 0.8)'
                      }} />
                      <span style={{ 
                        fontSize: '0.88rem', 
                        fontWeight: 500, 
                        color: 'var(--green-dark)',
                        letterSpacing: '0.02em'
                      }}>
                        {b}
                      </span>
                    </div>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Milestones/Timeline Section */}
      <section style={{ 
        padding: '120px 0', 
        background: 'var(--bg-section)', 
        borderTop: '1px solid rgba(26,58,42,0.06)',
        position: 'relative'
      }}>
        {/* Ambient Glow */}
        <div style={{ 
          position: 'absolute', 
          bottom: '10%', 
          right: '5%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, rgba(245, 196, 67, 0.05) 0%, transparent 70%)', 
          filter: 'blur(60px)',
          pointerEvents: 'none' 
        }} />

        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '100px' }}>
            <span className="eyebrow" style={{ color: 'var(--gold-accent)' }}>OUR ROADMAP</span>
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2rem, 4vw, 3.2rem)', 
              color: 'var(--green-dark)', 
              fontWeight: 400,
              marginTop: '8px' 
            }}>
              Execution Milestones
            </h2>
          </div>

          <div style={{ position: 'relative', paddingLeft: '60px', borderLeft: '2px solid rgba(26, 58, 42, 0.08)' }}>
            {milestones.map((m, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                style={{ 
                  marginBottom: idx === milestones.length - 1 ? 0 : '80px', 
                  position: 'relative' 
                }}
              >
                {/* Staggered Floating Timeline Node */}
                <div style={{
                  position: 'absolute',
                  left: '-74px',
                  top: '6px',
                  width: '26px',
                  height: '26px',
                  borderRadius: '50%',
                  background: 'var(--bg-section)',
                  border: '3px solid var(--gold-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(245, 196, 67, 0.3)',
                  zIndex: 2
                }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--green-dark)' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '40px', alignItems: 'start' }} className="timeline-grid">
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ 
                      fontSize: '2.4rem', 
                      fontWeight: 700, 
                      color: 'var(--gold-accent)', 
                      fontFamily: "'Inter', sans-serif",
                      lineHeight: 1 
                    }}>
                      {m.year}
                    </span>
                    <span style={{ 
                      fontSize: '0.72rem', 
                      fontWeight: 600, 
                      letterSpacing: '0.1em', 
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      marginTop: '4px'
                    }}>
                      PHASE 0{idx + 1}
                    </span>
                  </div>
                  
                  <div style={{
                    background: '#ffffff',
                    padding: '36px 40px',
                    borderRadius: '24px',
                    boxShadow: 'var(--shadow-premium)',
                    border: '1px solid rgba(26, 58, 42, 0.04)',
                    position: 'relative'
                  }}>
                    <h3 style={{ 
                      fontFamily: "'Playfair Display', Georgia, serif", 
                      fontSize: '1.45rem', 
                      fontWeight: 500, 
                      color: 'var(--green-dark)',
                      marginBottom: '12px'
                    }}>
                      {m.title}
                    </h3>
                    <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .mission-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 768px) {
          .timeline-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}} />
    </div>
  );
}
