import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const CHAPTERS = [
  {
    num: '01',
    eyebrow: 'ECOLOGICAL BALANCING',
    title: "Restoring Nature's Sacred Balance",
    desc: "A country cannot progress if its ground water is depleted and its air is unbreathable. We execute targeted mass-forestation, river-cleaning awareness, and solar installation drives to heal the soil we live on.",
    img: "/environment_cleanup.png",
    accent: "#c8a84a"
  },
  {
    num: '02',
    eyebrow: 'PROGRESSIVE LEARNING',
    title: 'Sankalp Education Initiative',
    desc: "Real transformation starts with high-quality education. We provide underprivileged and rural youth with free tuition support, local community libraries, and digital literacy hubs to unlock global Opportunities.",
    img: "/education_classroom.png",
    accent: "#d9b95b"
  },
  {
    num: '03',
    eyebrow: 'VOCATIONAL RESILIENCE',
    title: 'Hunar Skill & Livelihood Workshops',
    desc: "Poverty eradication is not about charity; it is about self-reliance. Our trade-based workshops train first-generation earners in electrical, sewing, tailoring, and mobile repairs, guaranteeing sustainable livelihood bridges.",
    img: "/skill_workshop.png",
    accent: "#c8a84a"
  },
  {
    num: '04',
    eyebrow: 'CULTURAL ANCHORING',
    title: 'Parivar Samvad: Family Cohesion',
    desc: "Modernity must not cost us our core values. We run interactive community dialogue circles (Parivar Samvad) to encourage respect, intergenerational harmony, gender equality, and solid family ethics.",
    img: "/family_community.png",
    accent: "#d9b95b"
  },
  {
    num: '05',
    eyebrow: 'CHAIRPERSON\'S PROMISE',
    title: 'A Vision Grounded in Direct Field Action',
    desc: "\"We are not interested in empty numbers. We are building a model of sustainable civic change where communities are partners, not spectators. Together, we can construct an India that is clean, wise, and united.\"",
    img: "/dc_arya_suit_v3.jpg",
    accent: "#c8a84a",
    isQuote: true,
    author: "D.C. Arya, Founder"
  }
];

export default function CinematicStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} style={{ height: '550vh', position: 'relative', background: 'var(--bg-section)' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        
        {/* Background Mesh Grid */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(26, 58, 42, 0.07) 1.2px, transparent 1.2px)',
          backgroundSize: '32px 32px',
          opacity: 0.8,
          pointerEvents: 'none',
          zIndex: 1
        }} />

        {/* Ambient Glows */}
        <motion.div style={{
          position: 'absolute', top: '10%', left: '15%', width: '45vw', height: '45vw',
          background: 'radial-gradient(circle, rgba(200,168,74,0.05) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(70px)', zIndex: 1,
          y: useTransform(smoothProgress, [0, 1], [-100, 300])
        }} />
        <motion.div style={{
          position: 'absolute', bottom: '10%', right: '10%', width: '40vw', height: '40vw',
          background: 'radial-gradient(circle, rgba(45,114,84,0.06) 0%, transparent 70%)',
          borderRadius: '50%', filter: 'blur(90px)', zIndex: 1,
          y: useTransform(smoothProgress, [0, 1], [200, -200])
        }} />

        {/* Floating Indicator */}
        <div style={{
          position: 'absolute',
          left: 'var(--pad-h)',
          bottom: '80px',
          zIndex: 12,
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          fontFamily: "'Inter', sans-serif"
        }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--green-icon)', letterSpacing: '0.15em' }}>THE STORY PATH</div>
          <div style={{ width: '100px', height: '1.5px', background: 'rgba(26,58,42,0.12)', position: 'relative' }}>
            <motion.div style={{
              position: 'absolute', left: 0, top: 0, bottom: 0,
              width: useTransform(smoothProgress, [0, 1], ['0%', '100%']),
              background: 'var(--gold-accent)'
            }} />
          </div>
        </div>

        {/* Content Slider Container */}
        <div className="container" style={{ position: 'relative', zIndex: 5, width: '100%', height: '100%' }}>
          
          {CHAPTERS.map((ch, idx) => {
            // Set up scroll ranges for this chapter
            const startVal = idx * 0.18 + 0.02;
            const peakStart = startVal + 0.04;
            const peakEnd = startVal + 0.10;
            const endVal = startVal + 0.14;

            // Interpolate opacities, scales and movements
            const opacity = useTransform(
              smoothProgress, 
              [startVal, peakStart, peakEnd, endVal], 
              [0, 1, 1, 0]
            );
            
            const scale = useTransform(
              smoothProgress,
              [startVal, peakStart, peakEnd, endVal],
              [0.92, 1, 1, 0.95]
            );

            const textY = useTransform(
              smoothProgress,
              [startVal, peakStart, peakEnd, endVal],
              [40, 0, 0, -40]
            );

            const imgX = useTransform(
              smoothProgress,
              [startVal, peakStart, peakEnd, endVal],
              [50, 0, 0, -50]
            );

            return (
              <motion.div 
                key={ch.num} 
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'grid',
                  gridTemplateColumns: '1.1fr 0.9fr',
                  gap: '80px',
                  alignItems: 'center',
                  opacity,
                  scale,
                  pointerEvents: useTransform(opacity, o => o > 0.1 ? 'auto' : 'none')
                }}
              >
                {/* Text Content Block */}
                <motion.div style={{ y: textY }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                    <span style={{ 
                       fontSize: '1.25rem', 
                       fontFamily: "'Playfair Display', serif", 
                       fontStyle: 'italic',
                       fontWeight: 600,
                       color: 'var(--green-icon)' 
                    }}>{ch.num}</span>
                    <span style={{ 
                      fontSize: '0.78rem', 
                      fontWeight: 600, 
                      color: 'var(--text-muted)', 
                      letterSpacing: '0.2em',
                      fontFamily: "'Inter', sans-serif"
                    }}>{ch.eyebrow}</span>
                  </div>

                  <h3 style={{ 
                    fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', 
                    fontFamily: "'Playfair Display', Georgia, serif", 
                    fontWeight: 400, 
                    color: 'var(--green-dark)', 
                    lineHeight: 1.12, 
                    letterSpacing: '-0.02em', 
                    marginBottom: '28px' 
                  }}>
                    {ch.title}
                  </h3>

                  {ch.isQuote ? (
                    <div style={{ 
                      background: 'rgba(255, 255, 255, 0.72)', 
                      borderLeft: `3px solid ${ch.accent}`, 
                      padding: '24px 30px', 
                      borderRadius: '0 16px 16px 0',
                      marginBottom: '20px',
                      boxShadow: '0 10px 30px rgba(26, 58, 42, 0.03)',
                      border: '1px solid rgba(26,58,42,0.05)',
                      borderLeftWidth: '3px'
                    }}>
                      <p style={{ 
                        fontSize: '1.1rem', 
                        color: 'var(--green-dark)', 
                        lineHeight: 1.7, 
                        fontStyle: 'italic',
                        fontFamily: "'Playfair Display', Georgia, serif"
                      }}>
                        {ch.desc}
                      </p>
                      <div style={{ 
                        fontSize: '0.85rem', 
                        color: 'var(--text-muted)', 
                        marginTop: '12px',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500
                      }}>- {ch.author}</div>
                    </div>
                  ) : (
                    <p style={{ 
                      fontSize: '1.05rem', 
                      color: 'var(--text-body)', 
                      lineHeight: 1.8, 
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 300,
                      maxWidth: '560px'
                    }}>
                      {ch.desc}
                    </p>
                  )}
                </motion.div>

                {/* Cover Image Block */}
                <motion.div style={{ x: imgX, perspective: 1200 }}>
                  <motion.div 
                    style={{
                      position: 'relative',
                      borderRadius: '28px',
                      overflow: 'hidden',
                      aspectRatio: '4/3',
                      boxShadow: '0 20px 50px rgba(26, 58, 42, 0.08)',
                      border: '1.5px solid rgba(26,58,42,0.06)'
                    }}
                    whileHover={{ scale: 1.02, rotateY: -3 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(26,58,42,0.22), transparent 60%)',
                      zIndex: 2
                    }} />
                    <img 
                      src={ch.img} 
                      alt={ch.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: ch.img.includes('dc_arya') ? 'top' : 'center',
                        display: 'block'
                      }}
                    />
                  </motion.div>
                </motion.div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </div>
  );
}
