import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function YouthSpotlight() {
  return (
    <section id="youth-spotlight" style={{ 
      padding: '120px 0', 
      background: 'linear-gradient(135deg, #132b1f 0%, #1a3a2a 100%)', 
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(200, 168, 74, 0.15)',
      borderBottom: '1px solid rgba(200, 168, 74, 0.15)'
    }}>
      {/* Decorative Golden Radials for Premium Depth */}
      <div style={{ 
        position: 'absolute', 
        top: '-10%', 
        right: '-10%', 
        width: '500px', 
        height: '500px', 
        background: 'radial-gradient(circle, rgba(200, 168, 74, 0.08) 0%, transparent 70%)', 
        pointerEvents: 'none' 
      }} />
      <div style={{ 
        position: 'absolute', 
        bottom: '-20%', 
        left: '-10%', 
        width: '500px', 
        height: '500px', 
        background: 'radial-gradient(circle, rgba(200, 168, 74, 0.06) 0%, transparent 70%)', 
        pointerEvents: 'none' 
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(12, 1fr)', 
          gap: '48px', 
          alignItems: 'center' 
        }} className="ys-grid">
          
          {/* LEFT COLUMN: Tarun's Image Spotlight */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ gridColumn: 'span 5' }}
            className="ys-img-col"
          >
            <div className="hover-lift ys-frame-wrapper" style={{ 
              position: 'relative', 
              borderRadius: '24px', 
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
              border: '1px solid rgba(200, 168, 74, 0.2)',
              background: 'rgba(255, 255, 255, 0.03)',
              aspectRatio: '4/5',
              maxWidth: '380px',
              margin: '0 auto'
            }}>
              <img 
                src="/images/Tarun Bidani Goyal.jpeg" 
                alt="Tarun Bidani Goyal" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.8s ease'
                }}
                className="ys-img"
              />
              {/* Inner Decorative Accent Frame */}
              <div style={{ 
                position: 'absolute', 
                top: '12px', 
                left: '12px', 
                right: '12px', 
                bottom: '12px', 
                border: '1px solid rgba(200, 168, 74, 0.15)', 
                borderRadius: '16px',
                pointerEvents: 'none'
              }} />
              {/* Floating Tag */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                background: 'rgba(20, 44, 32, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(200, 168, 74, 0.3)',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: 'var(--gold-accent)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                Youth Icon
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Youth Icon Message */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ gridColumn: 'span 7' }}
            className="ys-content-col"
          >
            <span className="eyebrow" style={{ color: 'var(--gold-accent)', marginBottom: '14px', display: 'inline-block' }}>
              Youth Inspiration
            </span>
            
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', 
              fontWeight: 400, 
              color: '#ffffff', 
              lineHeight: 1.2,
              marginBottom: '24px'
            }}>
              Tarun Bidani Goyal
            </h2>

            {/* Testimonial Message Callout */}
            <div style={{ 
              position: 'relative', 
              background: 'rgba(200, 168, 74, 0.03)', 
              borderLeft: '3px solid var(--gold-accent)', 
              padding: '20px 24px',
              borderRadius: '0 16px 16px 0',
              marginBottom: '24px'
            }}>
              <span style={{ 
                fontFamily: "'Playfair Display', Georgia, serif", 
                fontSize: '4.5rem', 
                color: 'rgba(200, 168, 74, 0.15)', 
                position: 'absolute', 
                top: '-15px', 
                left: '8px', 
                lineHeight: 0 
              }}>&ldquo;</span>
              
              <p className="serif-italic" style={{ 
                fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', 
                lineHeight: 1.6, 
                color: '#fcfbfa',
                position: 'relative',
                zIndex: 1,
                fontWeight: 400,
                margin: 0,
                paddingLeft: '16px'
              }}>
                "Young people are not just the future of the nation—they are the driving force behind positive change."
              </p>
            </div>

            <p style={{ 
              fontSize: '0.98rem', 
              color: 'rgba(255, 255, 255, 0.85)', 
              lineHeight: 1.75, 
              fontWeight: 300, 
              marginBottom: '28px' 
            }}>
              Tarun actively promotes sustainable living, environmental conservation, and public awareness. He believes that protecting the environment is an urgent responsibility and a duty we all share to our Earth, communities, and future generations. Through his vision, he seeks to empower India's youth to become active leaders in nation-building and environmental stewardship.
            </p>

            {/* Micro Details and Action Link */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              flexWrap: 'wrap', 
              gap: '20px', 
              borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
              paddingTop: '24px' 
            }}>
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>Tarun Bidani Goyal</div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: 400 }}>Finance & Governance Specialist • CA, CMA</div>
              </div>

              <Link 
                to="/leadership" 
                className="btn-green hover-lift" 
                style={{ 
                  background: 'var(--gold-accent)', 
                  color: 'var(--green-dark)', 
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  padding: '12px 24px',
                  boxShadow: '0 8px 20px rgba(200,168,74,0.15)',
                  border: 'none',
                  textDecoration: 'none'
                }}
                onMouseEnter={e => {
                  e.target.style.background = 'var(--gold-hover)';
                  e.target.style.boxShadow = '0 10px 25px rgba(200,168,74,0.25)';
                }}
                onMouseLeave={e => {
                  e.target.style.background = 'var(--gold-accent)';
                  e.target.style.boxShadow = '0 8px 20px rgba(200,168,74,0.15)';
                }}
              >
                Read Leadership Profile
              </Link>
            </div>

          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .ys-frame-wrapper:hover .ys-img {
          transform: scale(1.05);
        }
        @media (max-width: 900px) {
          .ys-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .ys-img-col, .ys-content-col {
            grid-column: span 12 !important;
          }
          .ys-img-col {
            order: 2;
          }
          .ys-content-col {
            order: 1;
          }
        }
      `}} />
    </section>
  );
}
