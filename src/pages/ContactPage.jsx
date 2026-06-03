import React from 'react';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
      {/* Premium Hero Header */}
      <section style={{ 
        background: '#6cdf32', 
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
          <span className="eyebrow" style={{ color: 'var(--green-icon)', margin: 0, display: 'inline-block', marginBottom: '16px' }}>CSR & EDUCATIONAL INDIA FOUNDATION</span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', 
              fontWeight: 400, 
              color: '#11251a', 
              lineHeight: 1.15, 
              letterSpacing: '-0.02em', 
              marginBottom: '24px' 
            }}
          >
            Connect With Us
          </motion.h1>
          <p style={{ fontSize: '1.15rem', maxWidth: '650px', color: 'rgba(17, 37, 26, 0.8)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
            Have questions about CSR compliance, grassroots collaborations, or volunteering? Let's begin a conversation.
          </p>
        </div>
      </section>
      
      {/* Redesigned Contact Component */}
      <Contact />
      
      {/* HQ & Map Section */}
      <section style={{ padding: '100px 0 120px', background: 'var(--bg-section)', borderTop: '1px solid rgba(26,58,42,0.06)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px', alignItems: 'center' }} className="office-grid">
            
            {/* Headquarters details */}
            <div>
              <span className="eyebrow">VISIT OUR HEADQUARTERS</span>
              <h2 style={{ 
                fontFamily: "'Playfair Display', Georgia, serif", 
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', 
                fontWeight: 400, 
                color: 'var(--green-dark)', 
                marginBottom: '40px',
                lineHeight: 1.2
              }}>
                Foundation Office
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {[
                  {
                    title: "Registered Address",
                    desc: "B2A-102 Golflinks Residency, Sector 18 B, Dwarka-110078",
                    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-accent)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  },
                  {
                    title: "Corporate Relations",
                    desc: "+91 98106 00994",
                    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-accent)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  },
                  {
                    title: "General Email Desk",
                    desc: "aumdcarya@gmail.com",
                    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-accent)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '12px', 
                      background: 'rgba(26,58,42,0.05)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--green-dark)', marginBottom: '6px' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.5, margin: 0, fontWeight: 300 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Container */}
            <div className="card hover-lift" style={{ 
              height: '400px', 
              background: '#6cdf32', 
              borderRadius: '28px', 
              overflow: 'hidden', 
              position: 'relative',
              boxShadow: '0 20px 40px rgba(17,37,26,0.06)',
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(200, 168, 74, 0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ textAlign: 'center', zIndex: 1, padding: '40px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-accent)" strokeWidth="1.8"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.25rem', color: '#11251a', marginBottom: '8px', fontWeight: 400 }}>Interactive Map</h3>
                <p style={{ fontSize: '0.85rem', color: 'rgba(17, 37, 26, 0.65)', maxWidth: '280px', margin: 0, lineHeight: 1.5, fontWeight: 300 }}>
                  Connecting families and projects. Our field centers are active across NCR and Haryana.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 991px) {
          .office-grid {
            grid-template-columns: 1fr !important;
            gap: 56px !important;
          }
        }
      `}} />
    </div>
  );
}
