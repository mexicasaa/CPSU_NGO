import React, { useEffect, useRef, useState } from 'react';

// Eagerly import all frames via Vite's glob import - sorted by filename
const frameModules = import.meta.glob(
  '../slowframe/ezgif-frame-*.png',
  { eager: true, import: 'default' }
);

const FRAME_URLS = Object.keys(frameModules)
  .sort()
  .map((key) => frameModules[key]);

const TOTAL_FRAMES = FRAME_URLS.length || 80;

// Hook to track the active scroll-frame based on the viewport scroll percentage
function useScrollFrameIndex(totalFrames, sectionRef) {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / (sectionHeight - window.innerHeight)));
      const idx = Math.min(Math.floor(progress * (totalFrames - 1)), totalFrames - 1);
      setFrameIndex(idx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalFrames, sectionRef]);

  return frameIndex;
}

// Leaf SVG component to represent the organic, premium natural assets
// Styled with smooth dark-green/forest gradients and drop shadows
const LeafSVG = ({ color = '#2d6e47', size = 120, opacity = 0.8, filter = 'none' }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter, opacity, display: 'block' }}>
    <path d="M60 10C60 10 20 50 20 80C20 96.5685 37.9117 110 60 110C82.0883 110 100 96.5685 100 80C100 50 60 10 60 10Z" fill={`url(#leaf-grad-${color.replace('#','')})`} />
    <path d="M60 10V110" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
    <path d="M60 40C45 55 40 70 40 85" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeLinecap="round" />
    <path d="M60 60C75 75 80 90 80 100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeLinecap="round" />
    <defs>
      <linearGradient id={`leaf-grad-${color.replace('#','')}`} x1="60" y1="10" x2="60" y2="110" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor={color} stopOpacity="0.95" />
        <stop offset="100%" stopColor="#0d1f15" stopOpacity="0.95" />
      </linearGradient>
    </defs>
  </svg>
);

export default function SlowFrameHero() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const loadedRef = useRef(0);
  const [ready, setReady] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const currentFrameRef = useRef(0);
  const lerpedProgressRef = useRef(0);
  const rafRef = useRef(null);

  const frameIndex = useScrollFrameIndex(TOTAL_FRAMES, sectionRef);

  // Store frameIndex in a ref so the render loop doesn't need to restart
  const frameIndexRef = useRef(0);
  useEffect(() => {
    frameIndexRef.current = frameIndex;
  }, [frameIndex]);

  // Preload all images using the Vite-bundled FRAME_URLS
  useEffect(() => {
    imagesRef.current = new Array(TOTAL_FRAMES).fill(null);
    loadedRef.current = 0;

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_URLS[i];
      img.onload = () => {
        imagesRef.current[i] = img;
        loadedRef.current++;
        setLoadProgress(Math.round((loadedRef.current / TOTAL_FRAMES) * 100));
        if (loadedRef.current === TOTAL_FRAMES) {
          setReady(true);
        }
      };
      img.onerror = () => {
        loadedRef.current++;
        setLoadProgress(Math.round((loadedRef.current / TOTAL_FRAMES) * 100));
        if (loadedRef.current === TOTAL_FRAMES) setReady(true);
      };
    }
  }, []);

  // Smooth canvas render loop + CSS Custom Variables Injection for Parallax
  // Starts once, runs forever at 60/120fps with requestAnimationFrame
  useEffect(() => {
    if (!ready) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let dprApplied = false;

    const render = () => {
      // Lerp current frame toward target for buttery smooth motion (slowframe interpolation)
      const target = frameIndexRef.current;
      const current = currentFrameRef.current;
      
      // Multi-layer smooth scrolling interpolation factor (0.08 makes it feel cinematic, heavy, and immersive)
      const lerpFactor = 0.08;
      const lerped = current + (target - current) * lerpFactor;
      currentFrameRef.current = Math.abs(lerped - target) < 0.005 ? target : lerped;

      const idx = Math.round(currentFrameRef.current);
      const img = imagesRef.current[Math.max(0, Math.min(idx, TOTAL_FRAMES - 1))];

      if (img) {
        const dpr = window.devicePixelRatio || 1;
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;

        // Only resize canvas when dimensions change
        if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
          canvas.width = Math.round(w * dpr);
          canvas.height = Math.round(h * dpr);
          dprApplied = false;
        }
        if (!dprApplied) {
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          dprApplied = true;
        }

        // Cover-fit the image (like CSS object-fit: cover)
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const canvasRatio = w / h;
        let drawW, drawH, drawX, drawY;
        if (imgRatio > canvasRatio) {
          drawH = h;
          drawW = h * imgRatio;
          drawX = (w - drawW) / 2;
          drawY = 0;
        } else {
          drawW = w;
          drawH = w / imgRatio;
          drawX = 0;
          drawY = (h - drawH) / 2;
        }

        ctx.clearRect(0, 0, w, h);
        ctx.drawImage(img, drawX, drawY, drawW, drawH);
      }

      // Calculate the slowframe lerped progress (0.0 to 1.0)
      const progress = currentFrameRef.current / (TOTAL_FRAMES - 1);
      lerpedProgressRef.current = progress;

      // Calculate all cinematic scroll transforms using the lerped progress
      const scale = 1 + (progress > 0.82 ? (progress - 0.82) * 0.45 : 0); // 1.0 -> 1.08 zoom
      const blur = progress > 0.82 ? (progress - 0.82) * 80 : 0; // 0px -> 14px blur
      const creamOverlayOpacity = progress > 0.82 ? Math.min(1, (progress - 0.82) * 5.8) : 0; // Fade to var(--bg-main)

      // Phase 1: Intro Text (Active from 0.0 to 0.25)
      // Starts fully visible (opacity 1.0) and fades out between 0.10 and 0.22
      const opacity1 = progress < 0.1
        ? 1
        : Math.max(0, 1 - (progress - 0.1) * 8.33);

      // Phase 2: Impact Metrics (Active from 0.25 to 0.55)
      // Fades in (0.25 -> 0.33), stays solid (0.33 -> 0.47), fades out (0.47 -> 0.55)
      let opacity2 = 0;
      if (progress >= 0.25 && progress < 0.33) {
        opacity2 = (progress - 0.25) * 12.5;
      } else if (progress >= 0.33 && progress < 0.47) {
        opacity2 = 1;
      } else if (progress >= 0.47 && progress < 0.55) {
        opacity2 = 1 - (progress - 0.47) * 12.5;
      }

      // Phase 3: Final CTA & Stats (Active from 0.55 to 0.85)
      // Fades in (0.55 -> 0.63), stays solid (0.63 -> 0.79), fades out (0.79 -> 0.85)
      let opacity3 = 0;
      if (progress >= 0.55 && progress < 0.63) {
        opacity3 = (progress - 0.55) * 12.5;
      } else if (progress >= 0.63 && progress < 0.79) {
        opacity3 = 1;
      } else if (progress >= 0.79 && progress < 0.85) {
        opacity3 = 1 - (progress - 0.79) * 16.66;
      }

      // Injecting computed custom properties on the section element for GPU accelerated parallax
      const sec = sectionRef.current;
      if (sec) {
        sec.style.setProperty('--slowframe-progress', progress);
        sec.style.setProperty('--bg-scale', scale);
        sec.style.setProperty('--bg-blur', `${blur}px`);
        sec.style.setProperty('--cream-overlay-opacity', creamOverlayOpacity);
        
        sec.style.setProperty('--opacity-phase-1', opacity1);
        sec.style.setProperty('--opacity-phase-2', opacity2);
        sec.style.setProperty('--opacity-phase-3', opacity3);
        
        // Pointer events to avoid blocking clicks on inactive phases
        sec.style.setProperty('--pe-1', opacity1 > 0.1 ? 'auto' : 'none');
        sec.style.setProperty('--pe-2', opacity2 > 0.1 ? 'auto' : 'none');
        sec.style.setProperty('--pe-3', opacity3 > 0.1 ? 'auto' : 'none');
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [ready]);

  return (
    <>
      {/* Tall container for scroll length */}
      <section
        ref={sectionRef}
        id="hero"
        style={{
          height: '520vh',
          position: 'relative',
          background: '#070f0b',
          overflow: 'clip',
          padding: 0,
          margin: 0,
        }}
      >
        {/* Sticky viewport viewport lock */}
        <div style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
        }}>
          
          {/* ========================================================
              LAYER 1: BACKGROUND LAYER (Deep Parallax, Moves Slowest)
              ======================================================== */}
          {/* @slowframe background-canvas */}
          <canvas
            ref={canvasRef}
            data-slowframe="bg-canvas"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              display: 'block',
              // Parallax factor: -60px (Very slow translation for far background depth)
              transform: 'translateY(calc(var(--slowframe-progress) * -60px)) scale(var(--bg-scale))',
              filter: 'blur(var(--bg-blur))',
              pointerEvents: 'none',
            }}
          />

          {/* Deep elegant background mesh overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            opacity: 0.22,
            transform: 'translateY(calc(var(--slowframe-progress) * -45px))',
            pointerEvents: 'none',
          }} />

          {/* Deep atmospheric glowing orbs */}
          {/* @slowframe bg-glow-left */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(45,110,71,0.2) 0%, transparent 70%)',
            transform: 'translateY(calc(var(--slowframe-progress) * -30px))',
            pointerEvents: 'none',
          }} />

          {/* @slowframe bg-glow-right */}
          <div style={{
            position: 'absolute',
            bottom: '10%',
            right: '-10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200,168,74,0.1) 0%, transparent 70%)',
            transform: 'translateY(calc(var(--slowframe-progress) * -50px))',
            pointerEvents: 'none',
          }} />

          {/* Dark overlay for rich legibility */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(5,12,9,0.76) 0%, rgba(5,12,9,0.48) 50%, rgba(5,12,9,0.72) 100%)',
            pointerEvents: 'none',
          }} />

          {/* Bottom vignetting */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '35%',
            background: 'linear-gradient(to top, rgba(7,15,11,0.92) 0%, transparent 100%)',
            pointerEvents: 'none',
          }} />

          {/* Seamless cream transition overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--bg-main)', 
            opacity: 'var(--cream-overlay-opacity)',
            pointerEvents: 'none',
          }} />

          {/* ========================================================
              LAYER 2: AMBIENT / DECORATIVE LAYER (Drifts Slowly)
              ======================================================== */}
          {/* @slowframe ambient-leaf-tiny-1 */}
          <div style={{
            position: 'absolute',
            top: '30%',
            left: '12%',
            transform: 'translateY(calc(var(--slowframe-progress) * -110px)) rotate(45deg)',
            pointerEvents: 'none',
          }}>
            <LeafSVG color="#26523c" size={36} opacity={0.35} />
          </div>

          {/* @slowframe ambient-leaf-tiny-2 */}
          <div style={{
            position: 'absolute',
            bottom: '25%',
            right: '18%',
            transform: 'translateY(calc(var(--slowframe-progress) * -130px)) rotate(-25deg)',
            pointerEvents: 'none',
          }}>
            <LeafSVG color="#1f4733" size={28} opacity={0.3} />
          </div>


          {/* ========================================================
              LAYER 3: MIDDLE STAGE LAYER (Story Cards & Typography)
              ======================================================== */}
          
          {/* ── PHASE 1 TEXT: INTRO SECTION ── */}
          {/* @slowframe phase1-story-panel */}
          <div
            data-slowframe="mid-phase1"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 24px',
              opacity: 'var(--opacity-phase-1)',
              // Parallax factor: -220px (Medium speed story reveal)
              transform: 'translateY(calc(var(--slowframe-progress) * -220px))',
              zIndex: 10,
              pointerEvents: 'var(--pe-1)',
              willChange: 'opacity, transform',
            }}
          >
            <span style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#a8d8b8',
              display: 'block',
              marginBottom: '28px',
              fontFamily: 'Inter, sans-serif',
              textShadow: '0 2px 8px rgba(0,0,0,0.4)',
            }}>
              INDIA · SINCE 2018 · A NON-PROFIT FOUNDATION
            </span>
            <h1 style={{
              fontSize: 'clamp(2.8rem, 6.2vw, 5.8rem)',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              textAlign: 'center',
              marginBottom: '32px',
              fontFamily: 'Playfair Display, Georgia, serif',
              textShadow: '0 4px 48px rgba(0,0,0,0.6)',
            }}>
              Building a cleaner,{' '}
              <em style={{ fontStyle: 'italic', color: '#a8d8b8' }}>wiser</em>,<br />
              and stronger India.
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.75,
              maxWidth: '620px',
              textAlign: 'center',
              fontFamily: 'Inter, sans-serif',
              textShadow: '0 2px 20px rgba(0,0,0,0.45)',
            }}>
              CSR & Educational India Foundation works at the intersection of environment,
              education, livelihood and family - building self-reliant communities through
              awareness, skill, and service.
            </p>

            {/* Scroll Indicator */}
            <div style={{
              position: 'absolute',
              bottom: '48px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
              // Fades out dynamically as the scroll proceeds
              opacity: 'calc(1 - var(--slowframe-progress) * 16)',
              pointerEvents: 'none',
            }}>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase' }}>Scroll to explore</span>
              <div style={{
                width: '1px',
                height: '52px',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)',
                animation: 'scrollPulse 2s ease-in-out infinite',
              }} />
            </div>
          </div>

          {/* ── PHASE 2 TEXT: STAGGERED PARALLAX IMPACT CARDS ── */}
          {/* @slowframe phase2-story-panel */}
          <div
            data-slowframe="mid-phase2"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 24px',
              opacity: 'var(--opacity-phase-2)',
              // The main container also translates at a base medium speed
              transform: 'translateY(calc(var(--slowframe-progress) * -180px))',
              zIndex: 10,
              pointerEvents: 'var(--pe-2)',
              willChange: 'opacity, transform',
            }}
          >
            <span style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.24em',
              textTransform: 'uppercase',
              color: '#a8d8b8',
              display: 'block',
              marginBottom: '40px',
              fontFamily: 'Inter, sans-serif',
              textShadow: '0 2px 8px rgba(0,0,0,0.3)',
            }}>
              OUR MEASURED IMPACT
            </span>

            {/* Staggered Parallax Grid: cards move at different speeds, overlapping organically */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
              maxWidth: '960px',
              width: '100%',
              marginTop: '100px',
            }} id="hero-phase2-grid">
              
              {/* @slowframe staggered-card-left (Moves at a slow-medium speed) */}
              <div 
                style={{
                  textAlign: 'center',
                  background: 'rgba(10, 24, 18, 0.45)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1.5px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '24px',
                  padding: '44px 28px',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
                  willChange: 'transform',
                  // Parallax factor: uniform to keep cards horizontally aligned
                  transform: 'translateY(calc(var(--slowframe-progress) * -130px))',
                }}
              >
                <div style={{
                  fontSize: 'clamp(2.4rem, 3.8vw, 3.6rem)',
                  fontWeight: 300,
                  color: '#ffffff',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  marginBottom: '12px',
                  fontFamily: 'Playfair Display, Georgia, serif',
                  textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                }}>24,800+</div>
                <div style={{
                  fontSize: '0.8rem',
                  color: '#a8d8b8',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '6px',
                }}>People Reached</div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.48)',
                  fontFamily: 'Inter, sans-serif',
                }}>across 4 Indian states</div>
              </div>

              {/* @slowframe staggered-card-center (Moves at a true medium speed) */}
              <div 
                style={{
                  textAlign: 'center',
                  background: 'rgba(10, 24, 18, 0.55)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1.5px solid rgba(255, 255, 255, 0.18)',
                  borderRadius: '24px',
                  padding: '44px 28px',
                  boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
                  willChange: 'transform',
                  // Parallax factor: uniform to keep cards horizontally aligned
                  transform: 'translateY(calc(var(--slowframe-progress) * -130px))',
                }}
              >
                <div style={{
                  fontSize: 'clamp(2.4rem, 3.8vw, 3.6rem)',
                  fontWeight: 300,
                  color: '#ffffff',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  marginBottom: '12px',
                  fontFamily: 'Playfair Display, Georgia, serif',
                  textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                }}>3,120</div>
                <div style={{
                  fontSize: '0.8rem',
                  color: '#a8d8b8',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '6px',
                }}>Students Supported</div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.48)',
                  fontFamily: 'Inter, sans-serif',
                }}>free tuitions & digital access</div>
              </div>

              {/* @slowframe staggered-card-right (Moves at a fast-medium speed, catching up to the foreground) */}
              <div 
                style={{
                  textAlign: 'center',
                  background: 'rgba(10, 24, 18, 0.45)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1.5px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '24px',
                  padding: '44px 28px',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
                  willChange: 'transform',
                  // Parallax factor: uniform to keep cards horizontally aligned
                  transform: 'translateY(calc(var(--slowframe-progress) * -130px))',
                }}
              >
                <div style={{
                  fontSize: 'clamp(2.4rem, 3.8vw, 3.6rem)',
                  fontWeight: 300,
                  color: '#ffffff',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.1,
                  marginBottom: '12px',
                  fontFamily: 'Playfair Display, Georgia, serif',
                  textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                }}>67</div>
                <div style={{
                  fontSize: '0.8rem',
                  color: '#a8d8b8',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  fontFamily: 'Inter, sans-serif',
                  marginBottom: '6px',
                }}>Communities Engaged</div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.48)',
                  fontFamily: 'Inter, sans-serif',
                }}>highly active self-reliant hubs</div>
              </div>

            </div>
          </div>

          {/* ── PHASE 3 TEXT: CTA & STORY WRAP-UP ── */}
          {/* @slowframe phase3-story-panel */}
          <div
            data-slowframe="mid-phase3"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 24px',
              opacity: 'var(--opacity-phase-3)',
              // Parallax factor: -260px (Fast-medium storytelling reveal)
              transform: 'translateY(calc(var(--slowframe-progress) * -260px))',
              zIndex: 10,
              pointerEvents: 'var(--pe-3)',
              willChange: 'opacity, transform',
            }}
          >
            <h2 style={{
              fontSize: 'clamp(2.2rem, 4vw, 4rem)',
              fontWeight: 400,
              color: '#ffffff',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              textAlign: 'center',
              marginBottom: '38px',
              fontFamily: 'Playfair Display, Georgia, serif',
              textShadow: '0 4px 40px rgba(0,0,0,0.5)',
              maxWidth: '780px',
            }}>
              Join us in shaping a<br />
              <em style={{ color: '#a8d8b8', fontStyle: 'italic' }}>sustainable tomorrow.</em>
            </h2>

            <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '48px',
            }}>
              <a href="#donation" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 38px',
                background: 'linear-gradient(135deg, #1f4733, #153324)',
                color: '#ffffff',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '0.94rem',
                fontWeight: 500,
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.02em',
                boxShadow: '0 12px 36px rgba(31,71,51,0.4)',
                border: '1.5px solid rgba(255,255,255,0.06)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 16px 42px rgba(31,71,51,0.6)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #26593f, #1a402d)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 12px 36px rgba(31,71,51,0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #1f4733, #153324)';
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.518 4.009 2 6.585 2c2.35 0 4.13 1.344 5.415 3.559C13.285 3.344 15.065 2 17.415 2 19.991 2 23 3.518 23 7.191c0 4.105-5.371 8.863-11 14.402z"/></svg>
                Donate Now
              </a>

              <a href="#volunteer" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 38px',
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                color: '#ffffff',
                border: '1.5px solid rgba(255,255,255,0.2)',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '0.94rem',
                fontWeight: 500,
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.02em',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.background = 'rgba(255,255,255,1)';
                e.currentTarget.style.color = '#0c100e';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                Join as Volunteer
              </a>
            </div>

            {/* Stats row with glass border */}
            <div style={{
              display: 'flex',
              gap: '54px',
              background: 'rgba(10,24,18,0.45)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderRadius: '60px',
              padding: '22px 52px',
              border: '1.5px solid rgba(255,255,255,0.12)',
              whiteSpace: 'nowrap',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
            }}>
              {[
                { num: '11,500+', label: 'Trees Planted' },
                { num: '8+ Years', label: 'Active Service' },
                { num: '100%', label: 'Transparency' },
              ].map((s, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 600, color: '#fff', fontFamily: 'Inter, sans-serif' }}>{s.num}</div>
                  <div style={{ fontSize: '0.66rem', color: '#a8d8b8', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', marginTop: '4px', fontWeight: 600 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================
              LAYER 4: FOREGROUND LAYER (Moves Fastest, Soft Depth-of-Field Blur)
              ======================================================== */}
          
          {/* @slowframe foreground-leaf-left-blurred (Camera pass-through simulation) */}
          <div style={{
            position: 'absolute',
            bottom: '-120px',
            left: '-100px',
            zIndex: 15,
            willChange: 'transform',
            // Parallax factor: -540px (Extremely fast movement for deep foreground realism)
            transform: 'translateY(calc(var(--slowframe-progress) * -540px)) rotate(-25deg)',
            pointerEvents: 'none',
          }}>
            <LeafSVG color="#2d6e47" size={300} opacity={0.88} filter="blur(7px)" />
          </div>

          {/* @slowframe foreground-leaf-right-blurred (Camera pass-through simulation) */}
          <div style={{
            position: 'absolute',
            top: '80px',
            right: '-80px',
            zIndex: 15,
            willChange: 'transform',
            // Parallax factor: -480px (Very fast movement)
            transform: 'translateY(calc(var(--slowframe-progress) * -480px)) rotate(35deg)',
            pointerEvents: 'none',
          }}>
            <LeafSVG color="#26523c" size={190} opacity={0.8} filter="blur(3px)" />
          </div>



          {/* Persistent scroll progress indicator bar */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '4px',
            width: 'calc(var(--slowframe-progress) * 100%)',
            background: 'linear-gradient(90deg, #1f4733, #a8d8b8, #c8a84a)',
            zIndex: 25,
            willChange: 'width',
          }} />
        </div>
      </section>

      {/* Global animations and responsiveness */}
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.5; transform: scaleY(1); }
          50% { opacity: 0.95; transform: scaleY(1.18); }
        }
        @media (max-width: 768px) {
          #hero-phase2-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            max-width: 320px !important;
          }
          #hero-phase2-grid > div {
            padding: 24px 16px !important;
          }
        }
      `}</style>
    </>
  );
}
