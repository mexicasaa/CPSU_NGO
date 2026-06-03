import React from 'react';
import { motion } from 'framer-motion';

export default function MantraPage() {
  const mantras = [
    {
      slogan: "कर्म ही संकल्प है",
      english: "Action Over Promise",
      desc: "We believe true transformation is built on the ground, not in meeting rooms. Our focus is immediate, active participation—whether conducting real-time solid waste cleaning drives, organizing physical learning camps, or equipping rural youth with practical job skills. We speak through execution.",
      number: "I",
      tag: "THE PILGRIM OF ACTION"
    },
    {
      slogan: "संस्कार ही संपत्ति है",
      english: "Values Over Valuables",
      desc: "Economic growth without ethical grounding is transient. We emphasize character-building education: teaching the younger generation deep moral respect for parents and elders, absolute financial integrity, and a profound commitment to civic duty and social harmony.",
      number: "II",
      tag: "THE MORAL CORE"
    },
    {
      slogan: "संस्कृति से प्रगति तक",
      english: "Rooted in Culture, Reaching for Progress",
      desc: "We stand unwavering in our respect for Indian cultural heritage, spiritual values, and family harmony. Simultaneously, we leverage modern educational parameters, state-of-the-art technical capability, and advanced vocational training to build a highly progressive nation.",
      number: "III",
      tag: "THE CIVILIZATIONAL BRIDGE"
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
        {/* Procedural Dotted Grid */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: 'radial-gradient(rgba(17, 37, 26, 0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.45,
          pointerEvents: 'none' 
        }} />
        
        {/* Giant Faded Devnagri Background Watermarks for cultural authenticity */}
        <div style={{ 
          position: 'absolute', 
          right: '5%', 
          bottom: '-20px', 
          fontSize: '9rem', 
          fontWeight: 800, 
          color: 'rgba(17, 37, 26, 0.03)', 
          fontFamily: "'Playfair Display', serif",
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0
        }}>
          राष्ट्र धर्म
        </div>

        {/* Ambient Glows */}
        <div style={{ 
          position: 'absolute', 
          top: '-10%', 
          left: '10%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, rgba(245, 196, 67, 0.1) 0%, transparent 70%)', 
          filter: 'blur(60px)',
          pointerEvents: 'none' 
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ color: 'var(--green-icon)', margin: 0, display: 'inline-block', marginBottom: '20px', letterSpacing: '0.2em' }}>
            PHILOSOPHY & MOTTO
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
            Our Guiding <span className="serif-italic" style={{ color: 'var(--green-icon)' }}>Mantras</span>
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
            Discover the foundational mottos and core cultural directives that govern our policies, program allocations, and transparent executions.
          </motion.p>
        </div>
      </section>

      {/* Mantras List Section */}
      <section style={{ padding: '120px 0', background: 'var(--bg-main)', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '90px' }}>
            <span className="eyebrow" style={{ color: 'var(--green-icon)' }}>THE GUIDING SLOGANS</span>
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2rem, 4vw, 3.2rem)', 
              color: 'var(--green-dark)', 
              fontWeight: 400,
              marginTop: '8px' 
            }}>
              Philosophies Built for Action
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
            {mantras.map((m, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  className="card hover-lift"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.12 }}
                  style={{
                    padding: '48px',
                    background: '#ffffff',
                    borderRadius: '32px',
                    border: '1px solid rgba(26, 58, 42, 0.05)',
                    boxShadow: 'var(--shadow-premium)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Floating Large Roman Numeral Watermark */}
                  <div style={{ 
                    position: 'absolute', 
                    right: isEven ? 'auto' : '48px', 
                    left: isEven ? '48px' : 'auto',
                    top: '20px', 
                    fontSize: '9.5rem', 
                    fontWeight: 900, 
                    color: 'rgba(26, 58, 42, 0.02)', 
                    fontFamily: "'Playfair Display', serif",
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none'
                  }}>
                    {m.number}
                  </div>

                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1.1fr', 
                    gap: '48px', 
                    alignItems: 'center' 
                  }} className="mantra-grid">
                    
                    {/* Devnagri Accent block (Alternated Columns) */}
                    <div style={{ 
                      order: isEven ? 0 : 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '36px 24px',
                      background: 'rgba(245, 196, 67, 0.03)',
                      border: '1px solid rgba(200, 168, 74, 0.25)',
                      borderRadius: '24px',
                      textAlign: 'center',
                      position: 'relative'
                    }} className="mantra-sanskrit-plate">
                      {/* Traditional filigree corner dots */}
                      <div style={{ position: 'absolute', top: 12, left: 12, width: 4, height: 4, borderRadius: '50%', background: 'var(--gold-accent)' }} />
                      <div style={{ position: 'absolute', top: 12, right: 12, width: 4, height: 4, borderRadius: '50%', background: 'var(--gold-accent)' }} />
                      <div style={{ position: 'absolute', bottom: 12, left: 12, width: 4, height: 4, borderRadius: '50%', background: 'var(--gold-accent)' }} />
                      <div style={{ position: 'absolute', bottom: 12, right: 12, width: 4, height: 4, borderRadius: '50%', background: 'var(--gold-accent)' }} />
                      
                      <span style={{ 
                        fontFamily: "'Playfair Display', Georgia, serif", 
                        fontSize: 'clamp(1.6rem, 2.5vw, 2.1rem)', 
                        color: 'var(--green-dark)', 
                        fontWeight: 600,
                        lineHeight: 1.3,
                        letterSpacing: '0.02em',
                        textShadow: '0 1px 2px rgba(26,58,42,0.05)'
                      }}>
                        {m.slogan}
                      </span>
                    </div>

                    {/* Spaced English content */}
                    <div style={{ order: isEven ? 1 : 0 }}>
                      
                      {/* Badge / Tagline */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--green-icon)', letterSpacing: '0.12em' }}>
                          MANTRA 0{idx + 1}
                        </span>
                        <div style={{ width: '16px', height: '1.5px', background: 'rgba(200, 168, 74, 0.4)' }} />
                        <span style={{ fontSize: '0.68rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                          {m.tag}
                        </span>
                      </div>

                      <h3 style={{ 
                        fontFamily: "'Inter', sans-serif", 
                        fontSize: 'clamp(1.15rem, 1.8vw, 1.35rem)', 
                        fontWeight: 600, 
                        color: 'var(--green-dark)', 
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: '16px',
                        lineHeight: 1.3
                      }}>
                        {m.english}
                      </h3>

                      <p style={{ 
                        fontSize: '1rem', 
                        color: 'var(--text-body)', 
                        lineHeight: 1.8, 
                        fontWeight: 300, 
                        margin: 0
                      }}>
                        {m.desc}
                      </p>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Refined Philosophy Footnote banner */}
      <section style={{ 
        padding: '100px 0', 
        background: '#6cdf32', 
        position: 'relative', 
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        {/* Procedural Grid */}
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
          background: 'radial-gradient(circle at 50% 50%, rgba(245, 196, 67, 0.06) 0%, transparent 60%)', 
          pointerEvents: 'none' 
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
          
          <div style={{
            border: '1px solid rgba(17, 37, 26, 0.12)',
            padding: '60px 40px',
            borderRadius: '28px',
            background: 'rgba(17, 37, 26, 0.02)',
            backdropFilter: 'blur(10px)',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', 
              color: '#11251a', 
              marginBottom: '20px',
              fontWeight: 400
            }}>
              Building a United, Prosperous Nation
            </h2>
            <p style={{ fontSize: '1rem', color: 'rgba(17, 37, 26, 0.8)', lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
              These mantras are not mere slogans inscribed on our walls; they define our criteria of recruitment, program creation, budget allocation, and transparent service to the Indian society.
            </p>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .mantra-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .mantra-sanskrit-plate {
            order: 0 !important;
            padding: 28px 16px !important;
          }
        }
      `}} />
    </div>
  );
}
