import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);

  // Set up scroll-based animations (parallax)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Different parallax speeds for the cascading images
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Rotations to match the tilted look in the reference image
  const rotate1 = useTransform(scrollYProgress, [0, 1], [4, 8]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [-6, -2]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <section 
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '110vh', // extra height for parallax scroll
        background: 'var(--bg-cream)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '96px', // Account for header
      }}
    >
      <div 
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%',
          padding: '0 4vw',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* LEFT COLUMN: Typography */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: '10vh' }}>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(3.5rem, 6vw, 6.5rem)',
              fontWeight: 500,
              color: '#0d1321', // Deep dark blue/black
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
              maxWidth: '600px'
            }}
          >
            Empowering the future of <span style={{ color: 'var(--green-main)' }}>India.</span>
          </motion.h1>

          <motion.a 
            href="#impact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.2rem',
              color: '#0d1321',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: 'auto',
              fontWeight: 400
            }}
          >
            Our Impact <span style={{ transition: 'transform 0.3s' }}>→</span>
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              marginTop: '15vh',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              lineHeight: 1.6,
              color: '#4a5568',
              maxWidth: '320px',
              fontWeight: 400
            }}
          >
            We back initiatives building the future of sustainable living; creating platforms whose impact extends across communities.
          </motion.p>
        </div>

        {/* RIGHT COLUMN: Cascading Images Collage */}
        <div style={{ position: 'relative', height: '800px', pointerEvents: 'none' }}>
          
          {/* Top Image (Agriculture/Environment) */}
          <motion.div
            style={{
              position: 'absolute',
              top: '-10%',
              right: '15%',
              width: '320px',
              height: '400px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              y: y1,
              rotate: rotate1,
              zIndex: 1
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop" 
              alt="Agriculture" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </motion.div>

          {/* Middle Left Image (Education/Innovation) */}
          <motion.div
            style={{
              position: 'absolute',
              top: '25%',
              left: '0%',
              width: '380px',
              height: '460px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
              y: y2,
              rotate: rotate2,
              zIndex: 2,
              background: '#fff',
              padding: '8px'
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop" 
              alt="Education" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} 
            />
          </motion.div>

          {/* Bottom Right Image (Community/Food) */}
          <motion.div
            style={{
              position: 'absolute',
              top: '55%',
              right: '5%',
              width: '340px',
              height: '420px',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0,0,0,0.12)',
              y: y3,
              rotate: rotate3,
              zIndex: 3
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1593113580332-628f5223c6f6?q=80&w=800&auto=format&fit=crop" 
              alt="Community" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </motion.div>

          {/* Small Floating Text/Graphic Element */}
          <motion.div
            style={{
              position: 'absolute',
              top: '48%',
              right: '-10%',
              width: '200px',
              y: y4,
              zIndex: 4,
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#b4e135', flexShrink: 0 }}></div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#1a3a2a',
              lineHeight: 1.4
            }}>
              TRANSFORMING COMMUNITIES THROUGH SUSTAINABLE ACTION.
            </p>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #hero > div {
            grid-template-columns: 1fr !important;
          }
          #hero .right-collage {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
