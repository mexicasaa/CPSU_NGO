import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function MotionScrollingHero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: 'var(--bg-main)',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '88px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', width: '100%' }}>

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ba8a1', display: 'block', marginBottom: '28px' }}>
            INDIA · REGISTERED IN 2025 · A NON-PROFIT FOUNDATION
          </span>

          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5.2rem)', fontWeight: 400, color: '#1a1a1a', lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: '28px' }}>
            Building a cleaner, <span className="serif-italic">wiser</span>,<br />and stronger India.
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: 1.7, maxWidth: '520px', marginBottom: '40px' }}>
            CSR & Educational India Foundation works at the intersection of environment, education, livelihood and family - building self-reliant communities through awareness, skill, and service.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '72px' }}>
            <Link to="/donate" className="btn-green" style={{ fontSize: '0.92rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.518 4.009 2 6.585 2c2.35 0 4.13 1.344 5.415 3.559C13.285 3.344 15.065 2 17.415 2 19.991 2 23 3.518 23 7.191c0 4.105-5.371 8.863-11 14.402z"/></svg>
              Donate Now
            </Link>
            <Link to="/volunteer" className="btn-outline-dark" style={{ fontSize: '0.92rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Join as Volunteer
            </Link>
            <a href="#work" className="btn-text-arrow" style={{ fontSize: '0.92rem', marginLeft: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              Explore Our Work ↗
            </a>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', paddingTop: '32px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            {[
              { num: '24,800+', label: 'People reached' },
              { num: '3,120', label: 'Students supported' },
              { num: '67', label: 'Communities engaged' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: '2rem', fontWeight: 400, color: '#1a1a1a', letterSpacing: '-0.02em', marginBottom: '4px' }}>{s.num}</div>
                <div style={{ fontSize: '0.85rem', color: '#9ba8a1' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT - Globe + Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '560px' }}
        >
          {/* Orbital ring 1 */}
          <div style={{
            position: 'absolute', width: '580px', height: '580px', borderRadius: '50%',
            border: '1px solid rgba(26,58,42,0.1)',
            transform: 'rotateX(70deg) rotateZ(20deg)',
            pointerEvents: 'none',
          }} />

          {/* Orbital ring 2 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', width: '520px', height: '520px', borderRadius: '50%',
              border: '1px dashed rgba(26,58,42,0.08)',
              pointerEvents: 'none',
            }}
          />

          {/* Floating orb top-left */}
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ position: 'absolute', top: '14%', left: '4%', width: 36, height: 36, borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, #f5a88a, #e06040)', boxShadow: '0 4px 16px rgba(224,96,64,0.3)' }}
          />
          {/* Floating orb right */}
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            style={{ position: 'absolute', top: '36%', right: '2%', width: 18, height: 18, borderRadius: '50%', background: 'radial-gradient(circle at 35% 35%, #d8d2c8, #b8b2a8)', boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}
          />
          {/* Floating orb bottom-right */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            style={{ position: 'absolute', bottom: '20%', right: '6%', width: 14, height: 14, borderRadius: '50%', background: '#c8503a', boxShadow: '0 2px 8px rgba(200,80,58,0.3)' }}
          />

          {/* Main Globe */}
          <div style={{
            width: '340px', height: '340px', borderRadius: '50%',
            background: 'radial-gradient(circle at 32% 28%, #3a6b50 0%, #1f4733 45%, #132e20 100%)',
            boxShadow: 'inset -24px -24px 50px rgba(0,0,0,0.4), inset 10px 10px 30px rgba(255,255,255,0.06), 0 40px 80px rgba(26,58,42,0.25)',
            position: 'relative', overflow: 'hidden',
            zIndex: 2,
          }}>
            {/* Texture dots */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1.5px, transparent 1.5px)',
              backgroundSize: '22px 22px',
            }} />
            {/* Shine */}
            <div style={{
              position: 'absolute', top: '12%', left: '16%',
              width: '35%', height: '30%',
              background: 'radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 70%)',
              borderRadius: '50%',
            }} />
          </div>

          {/* Card: PLANTED top-right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              position: 'absolute', top: '6%', right: '-2%',
              background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)',
              borderRadius: '20px', padding: '14px 20px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)', border: '1px solid rgba(255,255,255,0.9)',
              zIndex: 5,
            }}
          >
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', color: '#9ba8a1', marginBottom: '3px' }}>PLANTED</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 500, color: '#1a1a1a' }}>11.5k <span style={{ fontSize: '0.8rem', fontWeight: 400 }}>trees</span></div>
          </motion.div>

          {/* Card: LIVE CLASSROOM bottom-right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65 }}
            style={{
              position: 'absolute', bottom: '18%', right: '-5%',
              background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)',
              borderRadius: '20px', padding: '14px 20px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)', border: '1px solid rgba(255,255,255,0.9)',
              zIndex: 5, minWidth: '200px',
            }}
          >
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', color: '#c8a84a', marginBottom: '4px' }}>LIVE CLASSROOM</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 400, color: '#1a1a1a', marginBottom: '10px' }}>Sankalp tuition · Noida</div>
            <div style={{ display: 'flex' }}>
              {['#e88060', '#a7d3bf', '#26523c', '#1a3a2a'].map((c, i) => (
                <div key={i} style={{ width: 22, height: 22, borderRadius: '50%', background: c, border: '2px solid #fff', marginLeft: i > 0 ? -8 : 0 }} />
              ))}
            </div>
          </motion.div>

          {/* Card: FOUNDER bottom-left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55 }}
            style={{
              position: 'absolute', bottom: '6%', left: '0%',
              background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(8px)',
              borderRadius: '20px', padding: '14px 20px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)', border: '1px solid rgba(255,255,255,0.9)',
              zIndex: 5,
            }}
          >
            <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', color: '#9ba8a1', marginBottom: '5px' }}>FOUNDER</div>
            <div style={{ fontSize: '0.95rem', fontWeight: 500, color: '#1a1a1a', marginBottom: '2px' }}>D.C. Arya</div>
            <div style={{ fontSize: '0.8rem', color: '#9ba8a1' }}>Chairperson & Founder</div>
          </motion.div>

        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #hero > div { grid-template-columns: 1fr !important; }
          #hero > div > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
