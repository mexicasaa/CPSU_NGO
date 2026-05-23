import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MEDIA_ITEMS = [
  {
    id: 1,
    title: 'Delhi-NCR Clean Air Summit',
    category: 'seminar',
    date: 'October 2025',
    image: '/images/seminar.png',
    desc: 'Brought together civic leaders, educators, and environmental researchers to draft actionable air-quality models for local schools.'
  },
  {
    id: 2,
    title: 'Bio-Sand Water Filter Distribution',
    category: 'field-work',
    date: 'December 2025',
    image: '/images/hero_globe.png',
    desc: 'Installed and handed over 50 community-scale water filtration systems in low-income settlements in Delhi-NCR.'
  },
  {
    id: 3,
    title: 'Vocational Livelihood Graduation',
    category: 'field-work',
    date: 'January 2026',
    image: '/education_classroom.png',
    desc: 'Sankalp Vocational Cohort-4 celebrated graduation. 76% of candidates stepped immediately into manufacturing and trade apprenticeships.'
  },
  {
    id: 4,
    title: 'NCR Urban Micro-Forestry Drive',
    category: 'field-work',
    date: 'April 2026',
    image: '/environment_cleanup.png',
    desc: 'Planted 500+ mature native saplings and initiated a plastic cleanup sweep across denuded community parks.'
  },
  {
    id: 5,
    title: 'Intergenerational Wisdom Circles',
    category: 'seminar',
    date: 'March 2026',
    image: '/family_community.png',
    desc: 'Biannual Parivar Samvad dialogue circles honoring joint family structures, moral cohesion, and elderly guidance.'
  },
  {
    id: 6,
    title: 'Annual Social Impact Audits',
    category: 'press',
    date: 'May 2026',
    image: '/images/community.png',
    desc: 'Released our audited financial sheets and ground-impact statistics, detailing radical transparent fund executions.'
  }
];

export default function MediaPage() {
  const [filter, setFilter] = useState('all');
  const [activeVideo, setActiveVideo] = useState(false);

  const filteredItems = filter === 'all' 
    ? MEDIA_ITEMS 
    : MEDIA_ITEMS.filter(item => item.category === filter);

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
          <span className="eyebrow" style={{ color: 'var(--gold-accent)', margin: 0, display: 'inline-block', marginBottom: '16px' }}>DOCUMENTARY JOURNALS</span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', 
              fontWeight: 400, 
              color: 'var(--bg-main)', 
              lineHeight: 1.15, 
              letterSpacing: '-0.02em', 
              marginBottom: '24px',
              maxWidth: '900px'
            }}
          >
            Stories of change, <span className="serif-italic" style={{ color: 'var(--gold-accent)' }}>audited</span> field reports & campaigns.
          </motion.h1>
          <p style={{ fontSize: '1.15rem', maxWidth: '650px', color: 'rgba(245, 243, 238, 0.8)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
            Explore our continuous media updates, ground-level photograph diaries, and documented events that capture socio-ecological advancement in action.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '100px 0 120px', background: 'var(--bg-main)' }}>
        <div className="container">

        {/* Featured Video Story Banner */}
        <div style={{ 
          background: 'var(--bg-card)',
          borderRadius: '28px',
          border: '1px solid rgba(26,58,42,0.06)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-premium)',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          marginBottom: '80px',
          alignItems: 'center'
        }} className="cinematic-reveal">
          {/* Image & Video Trigger Column */}
          <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
            <img 
              src="/dc_arya_suit.jpg" 
              alt="Chairperson D.C. Arya Video Story" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            {/* Play Button Overlay */}
            <button
              onClick={() => setActiveVideo(true)}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'rgba(245, 243, 238, 0.95)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 30px rgba(26,58,42,0.15)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)'; }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--green-dark)" stroke="var(--green-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px' }}>
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </button>
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              background: 'rgba(26, 58, 42, 0.76)',
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '0.7rem',
              fontWeight: 600,
              color: '#fff',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              backdropFilter: 'blur(4px)'
            }}>
              Featured Video
            </div>
          </div>

          {/* Content Column */}
          <div style={{ padding: '48px' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--green-icon)', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>FOUNDER’S BROADCAST</span>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 500, color: 'var(--green-dark)', lineHeight: 1.25, marginBottom: '20px' }}>
              Why Air Purity and Value Cohesion are Crucial for India
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '28px' }}>
              "Delhi's air quality and modern materialism create division and physical illness. True prosperity lies in clean air, self-reliance, moral family values, and selfless service." // Chairperson D.C. Arya
            </p>
            <button 
              onClick={() => setActiveVideo(true)}
              className="btn-green"
              style={{ padding: '12px 28px', fontSize: '0.9rem' }}
            >
              Watch Founder Story
            </button>
          </div>
        </div>

        {/* Gallery Filtering Controls */}
        <div style={{ 
          display: 'flex', 
          gap: '12px', 
          marginBottom: '40px',
          flexWrap: 'wrap',
          borderBottom: '1px solid rgba(26,58,42,0.06)',
          paddingBottom: '20px'
        }} className="cinematic-reveal">
          {[
            { id: 'all', label: 'All Chronicles' },
            { id: 'field-work', label: 'Ground Operations' },
            { id: 'seminar', label: 'Summit Meetings' },
            { id: 'press', label: 'Audits & Press' }
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              style={{
                background: filter === btn.id ? 'var(--green-dark)' : 'transparent',
                color: filter === btn.id ? '#fff' : 'var(--text-body)',
                border: filter === btn.id ? '1px solid var(--green-dark)' : '1px solid rgba(26,58,42,0.12)',
                borderRadius: '999px',
                padding: '10px 22px',
                fontSize: '0.88rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Filtered Masonry Media Grid */}
        <motion.div 
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '32px'
          }} 
          className="cinematic-reveal"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="card hover-lift"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 0,
                  borderRadius: '24px',
                  overflow: 'hidden',
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(26,58,42,0.06)',
                  boxShadow: 'var(--shadow-premium)'
                }}
              >
                {/* Media Image */}
                <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'rgba(245, 243, 238, 0.95)',
                    padding: '5px 12px',
                    borderRadius: '999px',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'var(--green-dark)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                  }}>
                    {item.category === 'field-work' ? 'Ground Ops' : item.category === 'seminar' ? 'Summit' : 'Audit'}
                  </div>
                </div>

                {/* Media Body */}
                <div style={{ padding: '24px 28px 28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--gold-accent)', fontWeight: 600, marginBottom: '8px', display: 'block' }}>{item.date}</span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--green-dark)', lineHeight: 1.3, marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.6, flexGrow: 1 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        </div>
      </section>

      {/* Stay Updated Call to Action Section */}
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
            <span className="eyebrow" style={{ color: 'var(--gold-accent)' }}>STAY INFORMED</span>
            
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', 
              fontWeight: 400, 
              color: 'var(--bg-main)', 
              marginBottom: '20px',
              lineHeight: 1.25
            }}>
              Want to follow our journey?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(245,243,238,0.75)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 36px', fontWeight: 300 }}>
              Subscribe to our monthly journal to receive field-reports, transparency audits, and inspiring stories directly from the communities we serve.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', maxWidth: '480px', margin: '0 auto' }}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                style={{ 
                  flexGrow: 1, 
                  background: 'rgba(255,255,255,0.1)', 
                  border: '1px solid rgba(255,255,255,0.2)', 
                  color: '#fff', 
                  borderRadius: '999px',
                  padding: '16px 24px'
                }} 
              />
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
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Simulated Media Player Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 3000,
              background: 'rgba(26, 58, 42, 0.72)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
            onClick={() => setActiveVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 15 }}
              transition={{ type: 'spring', damping: 25 }}
              style={{
                width: '100%',
                maxWidth: '820px',
                background: '#1a1a1a',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 30px 90px rgba(0,0,0,0.6)',
                position: 'relative'
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveVideo(false)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  transition: 'background 0.3s'
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.25)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {/* Video Simulated Window */}
              <div style={{ width: '100%', height: '420px', background: '#000', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src="/dc_arya_suit.jpg" 
                  alt="Video playing" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} 
                />
                
                {/* Audio Waves graphic overlay */}
                <div style={{ position: 'absolute', display: 'flex', gap: '6px', alignItems: 'center' }}>
                  {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((h, i) => (
                    <motion.div
                      key={i}
                      animate={{ height: [12 * h, 36 * h, 12 * h] }}
                      transition={{ repeat: Infinity, duration: 1.2 + i * 0.1, ease: 'easeInOut' }}
                      style={{ width: '4px', background: 'var(--gold-accent)', borderRadius: '2px' }}
                    />
                  ))}
                </div>

                <div style={{
                  position: 'absolute',
                  top: '24px',
                  left: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(0,0,0,0.4)',
                  padding: '6px 12px',
                  borderRadius: '999px'
                }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'red', animation: 'pulse 1.5s infinite' }}></div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#fff', letterSpacing: '0.05em' }}>LIVE BROADCAST</span>
                </div>
              </div>

              {/* Video Simulated Control Panels */}
              <div style={{ padding: '24px 32px', background: '#1c1c1c' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', gap: '20px', marginBottom: '12px' }}>
                  {/* Play icon */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold-accent)" strokeWidth="2.5">
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                  
                  {/* Scrub progress bar */}
                  <div style={{ flex: 1, height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', position: 'relative' }}>
                    <div style={{ width: '52%', height: '100%', background: 'var(--gold-accent)', borderRadius: '2px' }}></div>
                  </div>

                  <span style={{ fontSize: '0.78rem', color: '#888', fontFamily: "'Inter', sans-serif" }}>01:45 / 03:20</span>
                </div>
                <div style={{ fontSize: '0.9rem', color: '#fff', fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                  Broadcasting D.C. Arya's Keynote Message on Delhi Air & Civic Responsibility
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes pulse {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
