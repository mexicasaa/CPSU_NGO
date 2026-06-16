import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { db } from '../utils/db';

export default function YouthSpotlight({ isPreview }) {
  const data = db.getHomeSection('testimonial', isPreview);
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
                src={data.image} 
                alt={data.title} 
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
                {data.badge || 'Youth Icon'}
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
            <span className="eyebrow" style={{ color: 'var(--gold-accent)', marginBottom: '8px', display: 'inline-block' }}>
              {data.eyebrow}
            </span>
            
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2.2rem, 4.2vw, 2.8rem)', 
              fontWeight: 400, 
              color: '#ffffff', 
              lineHeight: 1.15,
              marginBottom: '14px'
            }}>
              {data.title}
            </h2>
 
            {/* Professional Chips */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '22px' }}>
              {data.roleChips && data.roleChips.map((chip, i) => (
                <span key={i} style={{
                  background: i === 0 ? 'rgba(223, 189, 83, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                  border: i === 0 ? '1px solid rgba(223, 189, 83, 0.25)' : '1px solid rgba(255, 255, 255, 0.1)',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  fontSize: '0.78rem',
                  fontWeight: i === 0 ? 600 : 500,
                  color: i === 0 ? 'var(--gold-accent)' : 'rgba(255, 255, 255, 0.8)',
                  letterSpacing: i === 0 ? '0.02em' : 'none'
                }}>
                  {chip}
                </span>
              ))}
            </div>

            {/* Testimonial Message Callout */}
            <div style={{ 
              position: 'relative', 
              background: 'rgba(255, 255, 255, 0.02)', 
              borderLeft: '3px solid var(--gold-accent)', 
              padding: '16px 20px',
              borderRadius: '0 12px 12px 0',
              marginBottom: '20px'
            }}>
              <span style={{ 
                fontFamily: "'Playfair Display', Georgia, serif", 
                fontSize: '4rem', 
                color: 'rgba(223, 189, 83, 0.12)', 
                position: 'absolute', 
                top: '-15px', 
                left: '6px', 
                lineHeight: 0 
              }}>&ldquo;</span>
              
              <p className="serif-italic" style={{ 
                fontSize: 'clamp(1.05rem, 1.8vw, 1.18rem)', 
                lineHeight: 1.5, 
                color: 'rgba(255, 255, 255, 0.95)',
                position: 'relative',
                zIndex: 1,
                fontWeight: 400,
                margin: 0,
                paddingLeft: '16px'
              }}>
                "{data.quote}"
              </p>
            </div>

            <p style={{ 
              fontSize: '0.96rem', 
              color: 'rgba(255, 255, 255, 0.75)', 
              lineHeight: 1.65, 
              fontWeight: 300, 
              marginBottom: '28px' 
            }}>
              {data.description}
            </p>

            {/* Micro Details and Action Link */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'flex-start', 
              borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
              paddingTop: '24px' 
            }}>
              <Link 
                to={data.ctaUrl || "/leadership"} 
                className="btn-gold-spotlight hover-lift" 
                style={{ 
                  background: 'var(--gold-accent)', 
                  color: 'var(--green-dark)', 
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  padding: '12px 28px',
                  borderRadius: '100px',
                  boxShadow: '0 8px 20px rgba(223, 189, 83, 0.15)',
                  border: 'none',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {data.ctaText || "Read Leadership Profile"}
                <ArrowRight size={16} className="btn-arrow" style={{ transition: 'transform 0.3s ease' }} />
              </Link>
            </div>

          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .ys-frame-wrapper {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.6s;
        }
        .ys-frame-wrapper:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(223, 189, 83, 0.5) !important;
          box-shadow: 0 30px 60px rgba(223, 189, 83, 0.15), 0 20px 50px rgba(0, 0, 0, 0.4) !important;
        }
        .ys-frame-wrapper:hover .ys-img {
          transform: scale(1.04);
        }
        .btn-gold-spotlight:hover {
          background: var(--gold-hover) !important;
          box-shadow: 0 10px 25px rgba(223, 189, 83, 0.3) !important;
        }
        .btn-gold-spotlight:hover .btn-arrow {
          transform: translateX(4px);
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
