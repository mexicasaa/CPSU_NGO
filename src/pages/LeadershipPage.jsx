import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { db } from '../utils/db';

export default function LeadershipPage() {
  const location = useLocation();
  const isPreview = new URLSearchParams(location.search).get('preview') === 'true';

  const { leaders: allLeaders = [], advisors: allAdvisors = [] } = db.getLeadership(isPreview);

  const leaders = isPreview 
    ? allLeaders 
    : allLeaders.filter(l => l.visible !== false);

  const advisors = isPreview 
    ? allAdvisors 
    : allAdvisors.filter(a => a.visible !== false);

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
      {/* Premium Hero Header */}
      <section style={{ 
        background: '#1a3a2a', 
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
              color: '#ffffff', 
              lineHeight: 1.15, 
              letterSpacing: '-0.02em', 
              marginBottom: '24px' 
            }}
          >
            Our Leadership Team
          </motion.h1>
          <p style={{ fontSize: '1.15rem', maxWidth: '650px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
            Meet the systematic, passionate minds organizing our ground efforts to build long-term dignified self-reliance.
          </p>
        </div>
      </section>

      {/* Leadership Bio Grid */}
      <section style={{ padding: '100px 0 120px', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="eyebrow" style={{ color: 'var(--green-icon)', display: 'inline-block', marginBottom: '12px' }}>CORE LEADERSHIP</span>
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
              fontWeight: 400, 
              color: 'var(--green-dark)', 
              lineHeight: 1.2,
              margin: 0
            }}>
              Core Team
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--gold-accent)', margin: '24px auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }} className="leaders-grid">
            {leaders.map((leader, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="card hover-lift"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'row', 
                  gap: '28px', 
                  background: '#ffffff', 
                  padding: '32px', 
                  borderRadius: '24px', 
                  border: '1px solid rgba(26, 58, 42, 0.06)', 
                  alignItems: 'flex-start',
                  boxShadow: '0 10px 30px rgba(26,58,42,0.01)'
                }}
              >
                <div style={{ 
                  width: 140, 
                  height: 160, 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  flexShrink: 0, 
                  background: 'var(--bg-section)',
                  boxShadow: '0 4px 15px rgba(26,58,42,0.05)'
                }}>
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      objectPosition: leader.image.includes('dc_arya') ? 'top' : 'center',
                      filter: 'grayscale(100%)',
                      transition: 'filter 0.5s ease, transform 0.5s ease'
                    }} 
                    className="leader-img"
                  />
                </div>
                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                      <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.45rem', fontWeight: 400, color: 'var(--green-dark)', margin: 0 }}>
                        {leader.name}
                      </h3>
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--green-icon)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '14px' }}>
                      {leader.role}
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6, margin: '0 0 16px 0', fontWeight: 300 }}>
                      {leader.bio}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Youth Icon Spotlight Section */}
      <section style={{ 
        padding: '120px 0', 
        background: 'linear-gradient(135deg, #1a3a2a 0%, #26523c 100%)', 
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(200, 168, 74, 0.2)',
        borderBottom: '1px solid rgba(200, 168, 74, 0.2)'
      }}>
        {/* Decorative Golden Radials */}
        <div style={{ 
          position: 'absolute', 
          top: '-20%', 
          right: '-10%', 
          width: '600px', 
          height: '600px', 
          background: 'radial-gradient(circle, rgba(200, 168, 74, 0.1) 0%, transparent 70%)', 
          pointerEvents: 'none' 
        }} />
        <div style={{ 
          position: 'absolute', 
          bottom: '-30%', 
          left: '-10%', 
          width: '600px', 
          height: '600px', 
          background: 'radial-gradient(circle, rgba(200, 168, 74, 0.08) 0%, transparent 70%)', 
          pointerEvents: 'none' 
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="eyebrow" style={{ color: '#a57c1d', display: 'inline-block', marginBottom: '12px' }}>DISTINGUISHED RECOGNITION</span>
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
              fontWeight: 400, 
              color: '#ffffff', 
              lineHeight: 1.2,
              margin: 0
            }}>
              Youth Icon of the Foundation
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--gold-accent)', margin: '24px auto 0' }} />
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(12, 1fr)', 
            gap: '48px', 
            alignItems: 'start' 
          }} className="youth-icon-grid">
            
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ gridColumn: 'span 5', position: 'sticky', top: '100px' }}
              className="youth-img-col"
            >
              <div className="hover-lift" style={{ 
                position: 'relative', 
                borderRadius: '28px', 
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.35)',
                border: '1px solid rgba(200, 168, 74, 0.8)',
                background: 'rgba(255,255,255,0.05)',
                aspectRatio: '3/4'
              }}>
                <img 
                  src="/images/Tarun_Bidani_Goyal_v2.jpg" 
                  alt="Tarun Bidani Goyal" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.8s ease'
                  }}
                  className="spotlight-img"
                />
                {/* Decorative border overlay */}
                <div style={{ 
                  position: 'absolute', 
                  top: '16px', 
                  left: '16px', 
                  right: '16px', 
                  bottom: '16px', 
                  border: '1px solid rgba(200, 168, 74, 0.6)', 
                  borderRadius: '18px',
                  pointerEvents: 'none'
                }} />
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ gridColumn: 'span 7' }}
              className="youth-content-col"
            >


              <h3 style={{ 
                fontFamily: "'Playfair Display', Georgia, serif", 
                fontSize: '2.5rem', 
                fontWeight: 400, 
                color: '#ffffff', 
                margin: '0 0 8px 0',
                lineHeight: 1.15
              }}>
                Tarun Bidani Goyal
              </h3>
              
              <h4 style={{ 
                color: '#a57c1d', 
                fontSize: '1rem', 
                fontWeight: 500, 
                letterSpacing: '0.05em', 
                textTransform: 'uppercase', 
                margin: '0 0 12px 0' 
              }}>
                Youth Icon
              </h4>

              {/* Motto Banner */}
              <div style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(17, 37, 26, 0.3)',
                border: '1px solid rgba(200, 168, 74, 0.4)',
                padding: '8px 16px',
                borderRadius: '12px',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#ffffff',
                letterSpacing: '0.05em',
                marginBottom: '32px'
              }}>
                <span style={{ color: '#a57c1d' }}>Motto:</span>
                Nation First • Environment First • Future First 🇮🇳🌱
              </div>


              {/* Story Details */}
              <div style={{ fontSize: '0.98rem', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.8, marginBottom: '32px', fontWeight: 300 }}>
                <p style={{ margin: '0 0 20px 0' }}>
                  Tarun is a highly distinguished finance and governance professional, holding prestigious dual qualifications as CA and CMA. His notable professional career includes key experience as a consultant for the Ministry of Corporate Affairs and the Serious Fraud Investigation Office (SFIO), where he actively contributed to corporate governance, compliance management, and complex regulatory affairs. 
                </p>
                <p style={{ margin: '0 0 20px 0' }}>
                  Beyond his professional accomplishments, Tarun's love for nature began in childhood and continues to inspire his mission today. He actively promotes sustainable living, environmental conservation, and public awareness because he believes protecting our planet is an urgent responsibility. His vision is to empower India's youth to become environmental leaders by inspiring the next generation to take action against pollution, climate change, and global warming. He believes that young people are not just the future of the nation—they are the driving force behind positive change. For Tarun, protecting the environment is a duty we all share—a duty to our Earth, our communities, and future generations.
                </p>
                <p style={{ margin: 0 }}>
                  Guided by the philosophy of "NATION FIRST," he is deeply committed to promoting ethical leadership, responsible citizenship, and meaningful youth participation in nation-building, while working towards a cleaner, greener, and more sustainable India.
                </p>
              </div>

              {/* Vision Quote Section */}
              <div style={{ 
                position: 'relative', 
                marginBottom: '40px', 
                background: 'rgba(200, 168, 74, 0.05)', 
                borderLeft: '4px solid var(--gold-accent)', 
                padding: '24px 32px',
                borderRadius: '0 20px 20px 0'
              }}>
                <span style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif", 
                  fontSize: '5rem', 
                  color: 'rgba(200, 168, 74, 0.25)', 
                  position: 'absolute', 
                  top: '-5px', 
                  left: '10px', 
                  lineHeight: 0 
                }}>&ldquo;</span>
                <p style={{ 
                  fontSize: '1.25rem', 
                  lineHeight: 1.7, 
                  fontStyle: 'italic', 
                  color: '#ffffff',
                  position: 'relative',
                  zIndex: 1,
                  fontWeight: 300,
                  margin: 0,
                  paddingLeft: '24px',
                  fontFamily: "'Playfair Display', Georgia, serif"
                }}>
                  "To empower the youth to lead with integrity, serve society with purpose, and contribute towards a greener, stronger, and more prosperous India."
                </p>
                <div style={{ textAlign: 'right', marginTop: '12px', fontSize: '0.85rem', color: 'var(--green-icon)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  — CORE VISION
                </div>
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Advisory Members Section */}
      <section style={{ padding: '120px 0', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="eyebrow" style={{ color: 'var(--green-icon)', display: 'inline-block', marginBottom: '12px' }}>GUIDING OUR PATH</span>
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
              fontWeight: 400, 
              color: 'var(--green-dark)', 
              lineHeight: 1.2,
              margin: 0
            }}>
              Advisory Board
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--gold-accent)', margin: '24px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }} className="advisors-grid">
            {advisors.map((advisor, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="card hover-lift"
                style={{ 
                  background: '#ffffff', 
                  padding: '32px', 
                  borderRadius: '24px', 
                  border: '1px solid rgba(26, 58, 42, 0.06)', 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(26,58,42,0.01)'
                }}
              >
                <div style={{ 
                  width: 120, 
                  height: 120, 
                  borderRadius: '50%', 
                  overflow: 'hidden', 
                  marginBottom: '24px',
                  background: 'var(--bg-section)',
                  boxShadow: '0 8px 20px rgba(26,58,42,0.08)',
                  border: '4px solid #ffffff'
                }}>
                  <img 
                    src={advisor.image} 
                    alt={advisor.name} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      filter: 'grayscale(100%)',
                      transition: 'filter 0.5s ease, transform 0.5s ease'
                    }} 
                    className="leader-img"
                  />
                </div>
                
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.35rem', fontWeight: 600, color: 'var(--green-dark)', margin: '0 0 4px 0' }}>
                  {advisor.name}
                </h3>
                <div style={{ fontSize: '0.75rem', color: 'var(--green-icon)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                  {advisor.role}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6, margin: '0 0 24px 0', fontWeight: 300, flexGrow: 1, textAlign: 'justify' }}>
                  {advisor.bio}
                </p>
                

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Call to Action Section */}
      <section style={{ padding: '100px 0', background: 'var(--bg-section)', borderTop: '1px solid rgba(26,58,42,0.06)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="hover-lift" style={{ 
            background: '#1a3a2a', 
            borderRadius: '28px', 
            padding: '60px 48px', 
            maxWidth: '850px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(17,37,26,0.05)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 10% 90%, rgba(17, 37, 26, 0.06) 0%, transparent 50%)', pointerEvents: 'none' }} />
            <span className="eyebrow" style={{ color: 'var(--gold-accent)' }}>JOIN OUR MISSION</span>
            
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', 
              fontWeight: 400, 
              color: '#ffffff', 
              marginBottom: '20px',
              lineHeight: 1.25
            }}>
              Want to lead change with us?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 36px', fontWeight: 300 }}>
              We are constantly seeking dedicated individuals, field managers, ecology experts, and corporate CSR sponsors to expand our grassroots impact across India.
            </p>
            <button 
              className="btn-green hover-lift" 
              style={{ 
                background: 'var(--gold-accent)', 
                color: 'var(--green-dark)', 
                fontSize: '0.95rem',
                fontWeight: 600,
                padding: '16px 36px',
                border: 'none',
                boxShadow: '0 8px 25px rgba(200,168,74,0.2)'
              }}
              onMouseEnter={e => {
                e.target.style.background = 'var(--gold-hover)';
                e.target.style.boxShadow = '0 12px 30px rgba(200,168,74,0.3)';
              }}
              onMouseLeave={e => {
                e.target.style.background = 'var(--gold-accent)';
                e.target.style.boxShadow = '0 8px 25px rgba(200,168,74,0.2)';
              }}
            >
              Connect with Our Team
            </button>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .card:hover .leader-img {
          filter: grayscale(0%) !important;
          transform: scale(1.04);
        }
        .social-icon-btn:hover {
          opacity: 1 !important;
          color: var(--gold-accent) !important;
          transform: scale(1.15) translateY(-2px);
        }
        .btn-gold:hover {
          background: var(--gold-hover) !important;
          box-shadow: 0 12px 30px rgba(200, 168, 74, 0.4) !important;
          transform: translateY(-2px);
        }
        .youth-img-col:hover .spotlight-img {
          transform: scale(1.03);
        }
        @media (max-width: 991px) {
          .leaders-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 900px) {
          .youth-icon-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .youth-img-col, .youth-content-col {
            grid-column: span 12 !important;
          }
          .youth-img-col {
            max-width: 380px;
            margin: 0 auto;
          }
        }
        @media (max-width: 640px) {
          .leaders-grid > div {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .leaders-grid img {
            margin-bottom: 8px !important;
          }
        }
      `}} />
    </div>
  );
}
