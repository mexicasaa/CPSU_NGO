import React from 'react';
import { motion } from 'framer-motion';

export default function LeadershipPage() {
  const leaders = [
    {
      name: "DC Arya",
      role: "Founder Director",
      bio: "CSR & Educational India Foundation is led by Founder Director DC Arya, whose vision is centered around environmental awareness, education, social responsibility, and cultural values. He strongly believes that society must address not only environmental pollution, but also the growing challenges related to moral and social imbalance. Through awareness initiatives, educational activities, and community engagement, his goal is to inspire individuals towards responsible living and collective progress. His leadership reflects a commitment to building a healthier, educated, and ethically strong society for future generations.",
      image: "/dc_arya_suit.jpg"
    },
    {
      name: "Anjali Sharma",
      role: "Executive Director",
      bio: "Passionate about high-impact elementary education and gender-focused livelihood training, Anjali drives our comprehensive field operations.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=300&auto=format&fit=crop"
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Director of Ecology & Forestry",
      bio: "An environmental scientist and community forester dedicated to restoring active local riverways and introducing green farming practices.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&h=300&auto=format&fit=crop"
    },
    {
      name: "Suman Devi",
      role: "Grassroots Community Lead",
      bio: "Working at the front lines of village-level interaction to build social harmony and lead weekly Parivar Samvad counseling meets.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=300&h=300&auto=format&fit=crop"
    }
  ];

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
      {/* Premium Hero Header */}
      <section style={{ 
        background: 'var(--green-dark)', 
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
              color: 'var(--bg-main)', 
              lineHeight: 1.15, 
              letterSpacing: '-0.02em', 
              marginBottom: '24px' 
            }}
          >
            Our Leadership Team
          </motion.h1>
          <p style={{ fontSize: '1.15rem', maxWidth: '650px', color: 'rgba(245, 243, 238, 0.8)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
            Meet the systematic, passionate minds organizing our ground efforts to build long-term dignified self-reliance.
          </p>
        </div>
      </section>

      {/* Leadership Bio Grid */}
      <section style={{ padding: '100px 0 120px', background: 'var(--bg-main)' }}>
        <div className="container">
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
                      filter: 'grayscale(100%)',
                      transition: 'filter 0.5s ease, transform 0.5s ease'
                    }} 
                    className="leader-img"
                  />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.45rem', fontWeight: 400, color: 'var(--green-dark)', marginBottom: '4px' }}>
                    {leader.name}
                  </h3>
                  <div style={{ fontSize: '0.72rem', color: 'var(--gold-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '14px' }}>
                    {leader.role}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Call to Action Section */}
      <section style={{ padding: '100px 0', background: 'var(--bg-section)', borderTop: '1px solid rgba(26,58,42,0.06)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="hover-lift" style={{ 
            background: 'var(--green-dark)', 
            borderRadius: '28px', 
            padding: '60px 48px', 
            maxWidth: '850px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(17,37,26,0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 10% 90%, rgba(200,168,74,0.08) 0%, transparent 50%)', pointerEvents: 'none' }} />
            <span className="eyebrow" style={{ color: 'var(--gold-accent)' }}>JOIN OUR MISSION</span>
            
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', 
              fontWeight: 400, 
              color: 'var(--bg-main)', 
              marginBottom: '20px',
              lineHeight: 1.25
            }}>
              Want to lead change with us?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(245,243,238,0.75)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 36px', fontWeight: 300 }}>
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
        @media (max-width: 991px) {
          .leaders-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
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
