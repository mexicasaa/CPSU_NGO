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
            Media & Public <span className="serif-italic" style={{ color: 'var(--gold-accent)' }}>Awareness</span>
          </motion.h1>
          <p style={{ fontSize: '1.15rem', maxWidth: '800px', color: 'rgba(245, 243, 238, 0.85)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
            Our media section highlights interviews, seminars, awareness campaigns, public discussions, and foundation activities related to environment, education, and social reform. This platform serves as a space to share ideas, inspire awareness, and encourage meaningful conversations for the betterment of society.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '100px 0 120px', background: 'var(--bg-main)' }}>
        <div className="container">

        {/* Chairperson's YouTube Interviews Grid */}
        <div style={{ marginBottom: '80px' }} className="cinematic-reveal">
          <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--green-icon)', textTransform: 'uppercase', display: 'block', marginBottom: '24px' }}>CHAIRPERSON’S INTERVIEWS & BROADCASTS</span>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
          }} id="youtube-interviews-grid">
            
            {/* Interview 1 */}
            <div style={{
              background: 'var(--bg-card)',
              borderRadius: '28px',
              border: '1px solid rgba(26,58,42,0.06)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-premium)',
              display: 'flex',
              flexDirection: 'column'
            }} className="hover-lift">
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: '#000' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5Eqo64tQ5B4"
                  title="Chairperson D.C. Arya Interview: Air Purity & Civic Action"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: 'none', display: 'block' }}
                ></iframe>
              </div>
              <div style={{ padding: '32px' }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--gold-accent)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>MEDIA INTERVIEW</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 500, color: 'var(--green-dark)', lineHeight: 1.3, marginBottom: '12px' }}>
                  Environmental Awareness Discussion
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                  Founder Director DC Arya shares his views on increasing pollution levels, environmental responsibility, public health concerns, and the importance of awareness for protecting future generations.
                </p>
              </div>
            </div>

            {/* Interview 2 */}
            <div style={{
              background: 'var(--bg-card)',
              borderRadius: '28px',
              border: '1px solid rgba(26,58,42,0.06)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-premium)',
              display: 'flex',
              flexDirection: 'column'
            }} className="hover-lift">
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: '#000' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/tE2IGhGd52c"
                  title="Chairperson D.C. Arya Interview: Grassroots Communities"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: 'none', display: 'block' }}
                ></iframe>
              </div>
              <div style={{ padding: '32px' }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--gold-accent)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>FIELD DIALOGUE</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 500, color: 'var(--green-dark)', lineHeight: 1.3, marginBottom: '12px' }}>
                  Social & Educational Awareness
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                  Discussions focused on education, social values, youth development, self-reliance, and the importance of building a responsible and value-driven society.
                </p>
              </div>
            </div>

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

      <style>{`
        #youtube-interviews-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 900px) {
          #youtube-interviews-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}
