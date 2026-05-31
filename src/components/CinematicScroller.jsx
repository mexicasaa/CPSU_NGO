import React, { useEffect, useRef, useState } from 'react';

// 1. Asset Loading (Vite Specific):
// Eagerly import all frames via Vite's glob import - sorted alphabetically
const frameModules = import.meta.glob(
  '../assets/sequence/frame-*.png',
  { eager: true, import: 'default' }
);

const FRAME_URLS = Object.keys(frameModules)
  .sort()
  .map((key) => frameModules[key]);

const TOTAL_FRAMES = 100;

export default function CinematicScroller() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  
  // Keep track of the preloaded HTMLImageElements
  const preloadedImagesRef = useRef([]);
  
  // Preloading & progress states
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Animation and Scroll Interpolation Refs
  const targetProgressRef = useRef(0); // Holds the actual scroll position (0.0 to 1.0)
  const lerpedProgressRef = useRef(0); // Holds the lerped scroll position (0.0 to 1.0)

  // Preload all frames on mount
  useEffect(() => {
    const images = [];
    let loadedCount = 0;

    const handleLoad = () => {
      loadedCount++;
      const percent = Math.round((loadedCount / TOTAL_FRAMES) * 100);
      setLoadProgress(percent);

      if (loadedCount === TOTAL_FRAMES) {
        preloadedImagesRef.current = images;
        setIsLoaded(true);
      }
    };

    const handleError = (e) => {
      console.warn("Failed to load frame, continuing anyway:", e);
      handleLoad();
    };

    // Instantiate and load all Image elements
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_URLS[i];
      img.onload = handleLoad;
      img.onerror = handleError;
      images[i] = img;
    }
  }, []);

  // Track the actual scroll progress based on the tall container
  useEffect(() => {
    if (!isLoaded) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const scrolled = -rect.top;
      const scrollableDistance = containerHeight - window.innerHeight;

      const progress = scrollableDistance > 0 
        ? Math.max(0, Math.min(1, scrolled / scrollableDistance))
        : 0;

      targetProgressRef.current = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [isLoaded]);

  // 2. The Canvas Render Loop & CSS Custom Variable injection:
  useEffect(() => {
    if (!isLoaded) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let lastWidth = 0;
    let lastHeight = 0;

    const render = () => {
      const target = targetProgressRef.current;
      const current = lerpedProgressRef.current;

      // Linear interpolation (lerp) factor of 0.08 for smooth, cinematic scrubbing
      const lerpFactor = 0.08;
      let lerped = current + (target - current) * lerpFactor;

      // Snapping to prevent tiny infinite floats
      if (Math.abs(lerped - target) < 0.0001) {
        lerped = target;
      }
      lerpedProgressRef.current = lerped;

      // Render the active frame onto the canvas based on the lerped scroll percentage
      const frameIndex = Math.min(
        Math.max(0, Math.round(lerped * (TOTAL_FRAMES - 1))),
        TOTAL_FRAMES - 1
      );
      
      const img = preloadedImagesRef.current[frameIndex];

      if (img && ctx) {
        const dpr = window.devicePixelRatio || 1;
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;

        // Resize the canvas only when dimensions change to preserve system performance
        if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
          canvas.width = Math.round(w * dpr);
          canvas.height = Math.round(h * dpr);
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        ctx.clearRect(0, 0, w, h);

        // object-fit: cover drawing logic
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

        ctx.drawImage(img, drawX, drawY, drawW, drawH);
      }

      // Calculate Phase Opacities and Scales based on the lerped progress
      // Phase 1 (0% to 30% scroll): Fades out between 20% and 30%
      let opacityPhase1 = 1.0;
      if (lerped < 0.03) {
        opacityPhase1 = lerped / 0.03; // Fade in slightly at absolute start
      } else if (lerped > 0.20 && lerped <= 0.30) {
        opacityPhase1 = Math.max(0, (0.30 - lerped) / 0.10);
      } else if (lerped > 0.30) {
        opacityPhase1 = 0;
      }

      // Phase 2 (30% to 60% scroll): Fades in (30%-37%), stays opaque, fades out (53%-60%)
      let opacityPhase2 = 0;
      if (lerped >= 0.30 && lerped < 0.37) {
        opacityPhase2 = (lerped - 0.30) / 0.07;
      } else if (lerped >= 0.37 && lerped <= 0.53) {
        opacityPhase2 = 1.0;
      } else if (lerped > 0.53 && lerped <= 0.60) {
        opacityPhase2 = Math.max(0, (0.60 - lerped) / 0.07);
      }

      // Phase 3 (60% to 100% scroll): Fades in (60%-70%), scales up from 0.9 to 1.0, stays till end
      let opacityPhase3 = 0;
      if (lerped >= 0.60 && lerped < 0.70) {
        opacityPhase3 = (lerped - 0.60) / 0.10;
      } else if (lerped >= 0.70) {
        opacityPhase3 = 1.0;
      }

      // Grow scale from 0.9 to 1.0 between 60% and 80% scroll
      const scalePhase3 = 0.9 + Math.min(1.0, Math.max(0, (lerped - 0.60) / 0.20)) * 0.1;

      // Seamless fade-to-cream transition at the final tail end (85% to 100%) to match local site background
      const creamOverlayOpacity = lerped > 0.85 
        ? Math.min(1.0, (lerped - 0.85) * 6.66) 
        : 0;

      // Dynamic text color interpolation for Phase 3 (White -> Forest Green) as scroll finishes
      const p3TextFactor = Math.min(1, Math.max(0, (lerped - 0.80) / 0.10));
      const textRed = Math.round(255 - (255 - 26) * p3TextFactor);
      const textGreen = Math.round(255 - (255 - 58) * p3TextFactor);
      const textBlue = Math.round(255 - (255 - 42) * p3TextFactor);
      const textRGB = `rgb(${textRed}, ${textGreen}, ${textBlue})`;

      const subRed = Math.round(255 - (255 - 74) * p3TextFactor);
      const subGreen = Math.round(255 - (255 - 85) * p3TextFactor);
      const subBlue = Math.round(255 - (255 - 104) * p3TextFactor);
      const subRGB = `rgb(${subRed}, ${subGreen}, ${subBlue})`;

      const borderRed = Math.round(255 - (255 - 26) * p3TextFactor);
      const borderGreen = Math.round(255 - (255 - 58) * p3TextFactor);
      const borderBlue = Math.round(255 - (255 - 42) * p3TextFactor);
      const borderAlpha = (0.22 + (0.25 - 0.22) * p3TextFactor).toFixed(2);
      const borderRGBA = `rgba(${borderRed}, ${borderGreen}, ${borderBlue}, ${borderAlpha})`;

      // 3. Inject dynamic values into CSS variables on the container
      const container = containerRef.current;
      if (container) {
        container.style.setProperty('--scroll-progress', lerped.toFixed(5));
        container.style.setProperty('--opacity-phase-1', opacityPhase1.toFixed(3));
        container.style.setProperty('--opacity-phase-2', opacityPhase2.toFixed(3));
        container.style.setProperty('--opacity-phase-3', opacityPhase3.toFixed(3));
        container.style.setProperty('--phase-3-scale', scalePhase3.toFixed(3));
        container.style.setProperty('--cream-overlay-opacity', creamOverlayOpacity.toFixed(3));
        container.style.setProperty('--phase3-text-color', textRGB);
        container.style.setProperty('--phase3-subtitle-color', subRGB);
        container.style.setProperty('--phase3-btn-border', borderRGBA);

        // Interactive pointer-events control to ensure inactive layers do not intercept clicks
        container.style.setProperty('--pe-phase-1', opacityPhase1 > 0.05 ? 'auto' : 'none');
        container.style.setProperty('--pe-phase-2', opacityPhase2 > 0.05 ? 'auto' : 'none');
        container.style.setProperty('--pe-phase-3', opacityPhase3 > 0.05 ? 'auto' : 'none');
      }

      rafRef.current = requestAnimationFrame(render);
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isLoaded]);

  return (
    <>
      {/* Self-contained premium styled CSS classes */}
      <style dangerouslySetInnerHTML={{ __html: `
        .cinematic-container {
          position: relative;
          background: #090f0c;
          overflow: clip;
          width: 100%;
        }
        
        .cinematic-viewport {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cinematic-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          pointer-events: none;
          /* Subtly scale background and slide up for deep parallex background effect */
          transform: translateY(calc(var(--scroll-progress) * -40px)) scale(1.02);
          will-change: transform;
        }

        /* Subtle mesh pattern to enhance contrast and add dynamic premium grid texture */
        .cinematic-mesh {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255, 255, 255, 0.06) 1.2px, transparent 1.2px);
          background-size: 28px 28px;
          opacity: 0.35;
          pointer-events: none;
          transform: translateY(calc(var(--scroll-progress) * -20px));
        }

        /* Rich dark vignettes for supreme content legibility */
        .cinematic-overlay-vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(5, 10, 8, 0.15) 0%, rgba(5, 10, 8, 0.75) 100%);
          pointer-events: none;
        }

        .cinematic-overlay-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 35vh;
          background: linear-gradient(to top, #090f0c 0%, transparent 100%);
          pointer-events: none;
        }

        /* Ambient glowing background elements */
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          opacity: 0.25;
          will-change: transform;
        }

        .glow-orb-green {
          top: -10%;
          left: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #2d6e47 0%, transparent 70%);
          transform: translateY(calc(var(--scroll-progress) * -30px));
        }

        .glow-orb-gold {
          bottom: 10%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #c8a84a 0%, transparent 70%);
          transform: translateY(calc(var(--scroll-progress) * -50px));
        }

        /* Phase Styling */
        .phase-layer {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0 40px;
          box-sizing: border-box;
          z-index: 10;
          will-change: opacity, transform;
        }

        /* Phase 1 Typography */
        .phase-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.4rem, 5.5vw, 5.2rem);
          font-weight: 400;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.02em;
          text-align: center;
          max-width: 900px;
          text-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        }

        .phase-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.95rem, 1.5vw, 1.15rem);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          max-width: 600px;
          text-align: center;
          margin-top: 24px;
          text-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);
        }

        .phase-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c8a84a;
          margin-bottom: 20px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        /* Glassmorphism Statistics Grid */
        .glass-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 1100px;
          width: 100%;
          padding: 0 20px;
          margin-top: 10px;
        }

        .glass-card {
          background: rgba(12, 22, 17, 0.45);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 44px 32px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          transition: border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                      box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                      background 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          text-align: center;
          will-change: transform;
        }

        .glass-card:hover {
          border-color: rgba(200, 168, 74, 0.4);
          background: rgba(12, 22, 17, 0.6);
          box-shadow: 0 25px 60px rgba(200, 168, 74, 0.15);
        }

        .card-number {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2.2rem, 3.8vw, 3.5rem);
          font-weight: 400;
          color: #ffffff;
          line-height: 1.05;
          letter-spacing: -0.01em;
          margin-bottom: 12px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .card-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #c8a84a;
          margin-bottom: 14px;
        }

        .card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.65);
          line-height: 1.5;
        }

        /* Buttons & Call to Actions */
        .cta-box {
          text-align: center;
          max-width: 750px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .cta-btn-group {
          display: flex;
          gap: 20px;
          margin-top: 36px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .btn-cinematic-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(135deg, #1f4733, #153324);
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          font-size: 0.94rem;
          font-weight: 500;
          padding: 16px 36px;
          border-radius: 999px;
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 10px 30px rgba(31, 71, 51, 0.35);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-cinematic-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(31, 71, 51, 0.5), 0 0 15px rgba(200, 168, 74, 0.2);
          border-color: rgba(200, 168, 74, 0.3);
        }

        .btn-cinematic-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: #ffffff;
          font-family: 'Inter', sans-serif;
          font-size: 0.94rem;
          font-weight: 400;
          padding: 16px 36px;
          border-radius: 999px;
          border: 1.5px solid rgba(255, 255, 255, 0.18);
          cursor: pointer;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-cinematic-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        /* Loader Panel */
        .loader-panel {
          position: fixed;
          inset: 0;
          background: #070c0a;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .loader-ring {
          width: 70px;
          height: 70px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .loader-ring-svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }

        .loader-circle-bg {
          fill: none;
          stroke: rgba(255, 255, 255, 0.05);
          stroke-width: 3;
        }

        .loader-circle-fg {
          fill: none;
          stroke: #c8a84a;
          stroke-width: 3;
          stroke-linecap: round;
          transition: stroke-dashoffset 0.1s linear;
        }

        .loader-percentage {
          position: absolute;
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: #ffffff;
        }

        .loader-heading {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.3rem;
          font-style: italic;
          color: #ffffff;
          letter-spacing: 0.02em;
          margin-bottom: 8px;
        }

        .loader-subheading {
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
        }

        /* Seamless Cream Transition Overlay at the end */
        .cream-transition-overlay {
          position: absolute;
          inset: 0;
          background: #f5f3ee; /* Pristine Ivory Cream */
          opacity: var(--cream-overlay-opacity);
          pointer-events: none;
          z-index: 19;
          will-change: opacity;
        }

        /* Bottom Scroll indicator bar */
        .cinematic-scroll-track {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: rgba(255, 255, 255, 0.05);
          z-index: 25;
        }

        .cinematic-scroll-fill {
          height: 100%;
          width: calc(var(--scroll-progress) * 100%);
          background: linear-gradient(to right, #1f4733, #c8a84a);
          transition: width 0.05s linear;
        }

        .scroll-hint {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          opacity: calc(1 - var(--scroll-progress) * 12);
          pointer-events: none;
          transition: opacity 0.2s ease;
          z-index: 12;
        }

        .scroll-hint-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.45);
          text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }

        .scroll-hint-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent);
          animation: cinematicPulse 2s ease-in-out infinite;
        }

        @keyframes cinematicPulse {
          0%, 100% { opacity: 0.2; transform: translateY(0); }
          50% { opacity: 0.8; transform: translateY(6px); }
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .glass-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            max-width: 450px;
            padding: 0;
          }
          
          .glass-card {
            padding: 24px 20px;
          }

          .cinematic-badge {
            left: 20px;
            top: 80px;
          }

          .phase-title {
            line-height: 1.15;
          }
        }
      ` }} />

      {/* Graceful preloading screen */}
      {!isLoaded && (
        <div className="loader-panel">
          <div className="loader-ring">
            <svg className="loader-ring-svg">
              <circle className="loader-circle-bg" cx="35" cy="35" r="30" />
              <circle 
                className="loader-circle-fg" 
                cx="35" 
                cy="35" 
                r="30" 
                strokeDasharray={`${2 * Math.PI * 30}`}
                strokeDashoffset={`${2 * Math.PI * 30 * (1 - loadProgress / 100)}`}
              />
            </svg>
            <span className="loader-percentage">{loadProgress}%</span>
          </div>
          <h3 className="loader-heading">A Sustainable Vision</h3>
          <p className="loader-subheading">Loading Cinematic Experience</p>
        </div>
      )}

      {/* 600vh Tall Scroll Container */}
      <section
        ref={containerRef}
        className="cinematic-container"
        style={{
          height: '600vh',
        }}
      >
        <div className="cinematic-viewport">
          
          {/* BACKGROUND LAYER 1: Fullscreen Canvas */}
          <canvas
            ref={canvasRef}
            className="cinematic-canvas"
          />

          {/* Deep Mesh Overlay Texture */}
          <div className="cinematic-mesh" />

          {/* Double Layer Glow Effects */}
          <div className="glow-orb glow-orb-green" />
          <div className="glow-orb glow-orb-gold" />

          {/* Vignette Overlay for rich Apple-style aesthetic and content readability */}
          <div className="cinematic-overlay-vignette" />
          <div className="cinematic-overlay-bottom" />

          {/* Seamless Transition Overlay (Fades to Ivory Cream at 85%-100% Scroll) */}
          <div className="cream-transition-overlay" />

          {/* =========================================================
              LAYER 2: THREE SCROLL PHASES (HTML Overlays)
              ========================================================= */}

          {/* ── PHASE 1 OVERLAY (0% to 30% scroll) ── */}
          <div
            className="phase-layer"
            style={{
              opacity: 'var(--opacity-phase-1, 1)',
              // Phase 1 translates upwards based on var(--scroll-progress) * -150px
              transform: 'translateY(calc(var(--scroll-progress, 0) * -150px))',
              pointerEvents: 'var(--pe-phase-1, auto)',
            }}
          >
            <span className="phase-eyebrow">CSR India Initiative</span>
            <h1 className="phase-title">
              Engineering a <br />
              <em className="serif-italic" style={{ color: '#c8a84a' }}>sustainable</em> tomorrow.
            </h1>
            <p className="phase-subtitle">
              Reshaping Indian community landscapes through ecological integration, 
              progressive family wellness, and digital empowerment.
            </p>
          </div>

          {/* ── PHASE 2 OVERLAY (30% to 60% scroll) ── */}
          <div
            className="phase-layer"
            style={{
              opacity: 'var(--opacity-phase-2, 0)',
              // The group shifts slowly as a container
              transform: 'translateY(calc((var(--scroll-progress, 0) - 0.3) * -150px))',
              pointerEvents: 'var(--pe-phase-2, none)',
            }}
          >
            <span className="phase-eyebrow">Measured Ecological Milestones</span>
            
            {/* Staggered glass cards */}
            <div className="glass-grid">
              
              {/* Card 1: Multiplier -110px */}
              <div 
                className="glass-card"
                style={{
                  transform: 'translateY(calc((var(--scroll-progress, 0) - 0.3) * -110px))',
                }}
              >
                <div className="card-number">24,800+</div>
                <div className="card-label">Lives Reached</div>
                <div className="card-desc">
                  Empowering rural communities through sustainable development.
                </div>
              </div>

              {/* Card 2: Multiplier -220px */}
              <div 
                className="glass-card"
                style={{
                  transform: 'translateY(calc((var(--scroll-progress, 0) - 0.3) * -220px))',
                  borderColor: 'rgba(200, 168, 74, 0.18)',
                }}
              >
                <div className="card-number">11,500+</div>
                <div className="card-label" style={{ color: '#fff' }}>Native Trees</div>
                <div className="card-desc">
                  Restoring forest covers and enhancing community water security.
                </div>
              </div>

              {/* Card 3: Multiplier -330px */}
              <div 
                className="glass-card"
                style={{
                  transform: 'translateY(calc((var(--scroll-progress, 0) - 0.3) * -330px))',
                }}
              >
                <div className="card-number">3,120</div>
                <div className="card-label">Scholars Trained</div>
                <div className="card-desc">
                  Providing full digital connectivity and academic growth tools.
                </div>
              </div>

            </div>
          </div>

          {/* ── PHASE 3 OVERLAY (60% to 100% scroll) ── */}
          <div
            className="phase-layer"
            style={{
              opacity: 'var(--opacity-phase-3, 0)',
              // Dynamic scale and translate combined
              transform: 'translateY(calc((var(--scroll-progress, 0) - 0.6) * -180px)) scale(var(--phase-3-scale, 0.9))',
              pointerEvents: 'var(--pe-phase-3, none)',
            }}
          >
            <div className="cta-box">
              <span className="phase-eyebrow" style={{ color: 'var(--phase3-subtitle-color, #c8a84a)' }}>Enter the Ecosystem</span>
              <h2 className="phase-title" style={{ 
                fontSize: 'clamp(2rem, 4vw, 3.8rem)', 
                maxWidth: '800px',
                color: 'var(--phase3-text-color, #ffffff)',
                textShadow: 'calc(1 - var(--scroll-progress)) * 4px 0 30px rgba(0,0,0,0.5)',
                transition: 'color 0.1s linear'
              }}>
                Be the catalyst for a <br />
                <em className="serif-italic" style={{ color: '#c8a84a' }}>restorative future.</em>
              </h2>
              <p className="phase-subtitle" style={{ 
                color: 'var(--phase3-subtitle-color, rgba(255,255,255,0.85))', 
                textShadow: 'none', 
                maxWidth: '650px',
                transition: 'color 0.1s linear'
              }}>
                Your participation funds green canopy expansion, progressive learning hubs, 
                and clean drinking water units in high-need rural regions.
              </p>
              
              <div className="cta-btn-group">
                <a href="#donate" className="btn-cinematic-primary">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))' }}>
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.518 4.009 2 6.585 2c2.35 0 4.13 1.344 5.415 3.559C13.285 3.344 15.065 2 17.415 2 19.991 2 23 3.518 23 7.191c0 4.105-5.371 8.863-11 14.402z"/>
                  </svg>
                  Support the Mission
                </a>
                <a href="#get-involved" className="btn-cinematic-secondary" style={{ 
                  color: 'var(--phase3-text-color, #ffffff)', 
                  borderColor: 'var(--phase3-btn-border, rgba(255,255,255,0.22))', 
                  background: 'transparent',
                  transition: 'color 0.1s linear, border-color 0.1s linear'
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  Become a Partner
                </a>
              </div>
            </div>
          </div>

          {/* Ambient Scroll Hint (Visible only at the start) */}
          <div className="scroll-hint">
            <span className="scroll-hint-text">Scroll to Experience</span>
            <div className="scroll-hint-line" />
          </div>

          {/* Bottom Persistent Scroll Tracker Fill */}
          <div className="cinematic-scroll-track">
            <div className="cinematic-scroll-fill" />
          </div>

        </div>
      </section>
    </>
  );
}
