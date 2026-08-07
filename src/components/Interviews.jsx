import React, { useState } from 'react';

const VIDEOS = [
  {
    id: 'x7fPbVxuK3U',
    title: 'Plastic Ban: A Crucial Step for Pollution-Free India',
    category: 'ENVIRONMENT DAY ADDRESS',
    topic: 'PLASTIC BAN & ECOLOGY',
    duration: '10 Mins',
    desc: 'Founder Director D.C. Arya addresses World Environment Day, emphasizing that the government plastic ban is a vital protective measure. He calls for active citizen participation in continuous tree planting, regular watering, and sapling care for sustainable eco-restoration.',
    thumbnail: 'https://img.youtube.com/vi/x7fPbVxuK3U/maxresdefault.jpg'
  },
  {
    id: 'wXD9THb7SbM',
    title: "From Farmer's Son to Director (Finance): The Inspiring Journey of D.C. Arya",
    category: 'BIOGRAPHICAL FEATURE',
    topic: 'LEADERSHIP & SERVICE',
    duration: '14 Mins',
    desc: 'An inspiring feature highlighting D.C. Arya’s life from a humble agricultural family in Haryana to becoming Director of Finance at IRFC and former Chairman of NIRC-ICMAI, giving new direction to cost accounting and national governance.',
    thumbnail: 'https://img.youtube.com/vi/wXD9THb7SbM/maxresdefault.jpg'
  },
  {
    id: 'zL1Nvl0UlZE',
    title: 'Environmental Seminar: Civic Responsibility & Air Purity Reforms',
    category: 'ENVIRONMENTAL SEMINAR',
    topic: 'SUSTAINABLE REFORM',
    duration: '20 Mins',
    desc: 'A dedicated environmental policy seminar detailing key measures for improving urban air quality, promoting indigenous plantation drives, and strengthening public-private cooperation for long-term climate action.',
    thumbnail: 'https://img.youtube.com/vi/zL1Nvl0UlZE/maxresdefault.jpg'
  },
  {
    id: 'Ao0dtIZOfFs',
    title: 'Public Dialogue: Grassroots Environmental Initiatives & Youth Action',
    category: 'PUBLIC DIALOGUE',
    topic: 'COMMUNITY REFORM',
    duration: '15 Mins',
    desc: 'An interactive public dialogue bringing together community leaders, students, and experts to discuss grassroots solutions for plastic reduction, clean water conservation, and value-driven civic engagement.',
    thumbnail: 'https://img.youtube.com/vi/Ao0dtIZOfFs/maxresdefault.jpg'
  }
];

export default function Interviews() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeVideo = VIDEOS[activeIdx];
  const [arrowDirection, setArrowDirection] = useState('down'); // 'down', 'up', or null
  const playlistRef = React.useRef(null);
  const lastScrollTop = React.useRef(0);

  const handleScroll = () => {
    if (!playlistRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = playlistRef.current;
    const hasScrollableContent = scrollHeight > clientHeight;
    
    if (!hasScrollableContent) {
      setArrowDirection(null);
      return;
    }

    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 15;
    const isAtTop = scrollTop <= 5;
    
    if (isAtBottom) {
      setArrowDirection('up');
    } else if (isAtTop) {
      setArrowDirection('down');
    } else {
      const delta = scrollTop - lastScrollTop.current;
      if (delta > 2) {
        setArrowDirection('down');
      } else if (delta < -2) {
        setArrowDirection('up');
      }
    }
    lastScrollTop.current = scrollTop;
  };

  const handleScrollClick = (e) => {
    e.stopPropagation();
    if (!playlistRef.current) return;
    
    if (arrowDirection === 'down') {
      playlistRef.current.scrollBy({
        top: 90, // scroll down by one item
        behavior: 'smooth'
      });
    } else if (arrowDirection === 'up') {
      playlistRef.current.scrollBy({
        top: -90, // scroll up by one item
        behavior: 'smooth'
      });
    }
  };

  React.useEffect(() => {
    // Check initially after layout renders
    const timer = setTimeout(handleScroll, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="interviews" style={{ background: '#fbfaf8', padding: '120px 0 100px', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(26,58,42,0.04)' }}>
      {/* Background Ambience */}
      <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,168,74,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-10%', left: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,110,71,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Left-Aligned Section Header (Matches other sections) */}
        <div style={{ maxWidth: '800px', marginBottom: '60px' }} className="cinematic-reveal">
          <span className="eyebrow" style={{ display: 'inline-block' }}>EXECUTIVE BROADCASTS</span>
          <h2 style={{ 
            fontFamily: "'Playfair Display', Georgia, serif", 
            fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', 
            fontWeight: 400, 
            color: 'var(--green-dark)', 
            lineHeight: 1.15, 
            letterSpacing: '-0.025em',
            marginTop: '16px',
            marginBottom: 0
          }}>
            Public dialogues and environmental <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic', color: 'var(--gold-accent)' }}>seminars</span>.
          </h2>
        </div>

        {/* 2-Column Cinema Hub Grid */}
        <div className="cinema-hub-grid">
          
          {/* LEFT: Massive Cinematic Theater Screen */}
          <div className="cinema-theater-col">
            <div className="theater-screen-wrapper">
              <div className="theater-ambient-glow" style={{
                background: `radial-gradient(circle, rgba(${activeIdx % 2 === 0 ? '45,110,71' : '200,168,74'}, 0.22) 0%, transparent 70%)`
              }} />
              <div className="theater-frame">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=0&rel=0`}
                  title={activeVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: 'none', display: 'block' }}
                  key={activeVideo.id} // Forces iframe to reload cleanly on video switch
                ></iframe>
              </div>
            </div>

            {/* Active Details Meta Block */}
            <div className="theater-details">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span className={`badge-pill ${activeIdx % 2 === 0 ? 'green' : 'gold'}`}>
                  {activeVideo.category}
                </span>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.08em', fontWeight: 600, color: 'var(--text-muted)' }}>
                  {activeVideo.topic}
                </span>
                <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(26,58,42,0.18)' }} />
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                  Duration: {activeVideo.duration}
                </span>
              </div>
              
              <h3 style={{ 
                fontFamily: "'Playfair Display', Georgia, serif", 
                fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', 
                fontWeight: 500, 
                color: 'var(--green-dark)', 
                lineHeight: 1.25, 
                marginBottom: '16px' 
              }}>
                {activeVideo.title}
              </h3>
              
              <p style={{ fontSize: '1.02rem', color: 'var(--text-body)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
                {activeVideo.desc}
              </p>
            </div>
          </div>

          {/* RIGHT: Intelligent Interactive Sidebar (Playlist + Founder Commentary) */}
          <div className="cinema-sidebar-col">
            
            {/* Playlist Container */}
            <div className="sidebar-widget-container">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid rgba(26,58,42,0.06)' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.14em', color: 'var(--green-icon)', textTransform: 'uppercase' }}>CHOOSE BROADCAST</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 600 }}>{VIDEOS.length} EPISODES</span>
              </div>

              <div style={{ position: 'relative' }}>
                <div 
                  ref={playlistRef}
                  onScroll={handleScroll}
                  className="playlist-list"
                >
                  {VIDEOS.map((v, idx) => {
                    const isActive = activeIdx === idx;
                    return (
                      <div 
                        key={v.id} 
                        className={`playlist-item ${isActive ? 'active' : ''}`}
                        onClick={() => setActiveIdx(idx)}
                      >
                        <div className="playlist-thumb-box">
                          <img src={v.thumbnail} alt={v.title} className="playlist-thumb" />
                          <div className="thumb-overlay">
                            {isActive ? (
                              <div className="audio-wave">
                                <span style={{ animationDelay: '0.1s' }} />
                                <span style={{ animationDelay: '0.3s' }} />
                                <span style={{ animationDelay: '0.5s' }} />
                              </div>
                            ) : (
                              <svg className="play-icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                            )}
                          </div>
                        </div>
                        <div className="playlist-meta-box">
                          <span className="playlist-item-tag">{v.category}</span>
                          <h4 className="playlist-item-title">{v.title}</h4>
                          <span className="playlist-item-duration">{v.duration}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Subtle indicating arrow */}
                {arrowDirection && (
                  <div 
                    onClick={handleScrollClick}
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      right: '0',
                      height: '50px',
                      background: 'linear-gradient(to top, #ffffff 40%, transparent 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      borderBottomLeftRadius: '24px',
                      borderBottomRightRadius: '24px',
                      opacity: 0.95,
                      transition: 'opacity 0.3s ease',
                      zIndex: 10
                    }}
                  >
                    <div
                      style={{
                        animation: 'bounceArrow 1.2s infinite alternate',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="var(--green-icon)" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        style={{
                          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                          transform: arrowDirection === 'up' ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Founder commentary card styled like a high-end editorial inset */}
            <div className="editorial-quote-inset">
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-accent)' }} />
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--green-icon)', textTransform: 'uppercase' }}>FOUNDER'S PERSPECTIVE</span>
              </div>
              <p style={{ 
                fontFamily: "'Playfair Display', Georgia, serif", 
                fontSize: '1.1rem', 
                fontStyle: 'italic', 
                color: 'var(--green-dark)', 
                lineHeight: 1.5, 
                margin: 0
              }}>
                "We must address not only environmental pollution, but also the growing challenges related to moral and social imbalance. True progress is built on pure air, clean minds, and ethical values."
              </p>
              <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>DC Arya</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--gold-accent)' }}>·</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 500 }}>Founder Director</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* CINEMA HUB LAYOUT */
        .cinema-hub-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 48px;
          align-items: start;
        }

        /* MASSIVE CINEMATIC THEATER SCREEN */
        .theater-screen-wrapper {
          position: relative;
          background: #0d1a12;
          border-radius: 28px;
          padding: 8px; /* Elegant border offset */
          box-shadow: 0 45px 95px rgba(17, 37, 26, 0.12);
          overflow: hidden;
          margin-bottom: 28px;
        }

        .theater-ambient-glow {
          position: absolute;
          inset: 0;
          opacity: 0.85;
          z-index: 0;
          pointer-events: none;
          filter: blur(40px);
          transition: background 0.8s ease;
        }

        .theater-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          z-index: 1;
          border-radius: 22px;
          overflow: hidden;
          background: #000;
          box-shadow: inset 0 0 40px rgba(0,0,0,0.8);
        }

        .theater-details {
          padding: 10px 8px;
        }

        /* STYLISH BADGE PILLS */
        .badge-pill {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 4px 12px;
          border-radius: 99px;
          font-family: 'Inter', sans-serif;
        }
        .badge-pill.green {
          color: var(--green-dark);
          background: rgba(45, 110, 71, 0.08);
          border: 1px solid rgba(45, 110, 71, 0.12);
        }
        .badge-pill.gold {
          color: #7d6118;
          background: rgba(200, 168, 74, 0.08);
          border: 1px solid rgba(200, 168, 74, 0.12);
        }

        /* RIGHT SIDEBAR COLUMN */
        .cinema-sidebar-col {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .sidebar-widget-container {
          background: #ffffff;
          border: 1px solid rgba(26, 58, 42, 0.06);
          border-radius: 28px;
          padding: 30px 24px;
          box-shadow: 0 15px 35px rgba(26,58,42,0.02);
        }

        /* PLAYLIST ITEMS */
        .playlist-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-height: 295px;
          overflow-y: auto;
          padding-right: 0px;
          /* Hide scrollbar for Firefox, IE and Edge */
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        .playlist-list::-webkit-scrollbar {
          display: none;
        }

        .playlist-item {
          display: flex;
          gap: 16px;
          padding: 12px;
          border-radius: 18px;
          cursor: pointer;
          background: transparent;
          border: 1.5px solid transparent;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .playlist-item:hover {
          background: #fbfaf7;
          border-color: rgba(26,58,42,0.05);
          transform: translateY(-2px);
        }

        .playlist-item.active {
          background: rgba(45, 110, 71, 0.03);
          border-color: rgba(45, 110, 71, 0.12);
        }

        .playlist-thumb-box {
          position: relative;
          width: 90px;
          height: 60px;
          border-radius: 12px;
          overflow: hidden;
          background: #000;
          flex-shrink: 0;
        }

        .playlist-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.85;
          transition: opacity 0.3s ease;
        }

        .playlist-item:hover .playlist-thumb {
          opacity: 1;
        }

        .playlist-item.active .playlist-thumb {
          opacity: 0.65;
        }

        /* THUMB OVERLAY - PLAY / ACTIVE STATE */
        .thumb-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }

        .playlist-item:hover .thumb-overlay {
          background: rgba(0,0,0,0.15);
        }

        .play-icon-svg {
          color: #ffffff;
          filter: drop-shadow(0 2px 6px rgba(0,0,0,0.3));
          transition: transform 0.3s ease;
        }

        .playlist-item:hover .play-icon-svg {
          transform: scale(1.18);
        }

        /* Pulsating wave for active item */
        .audio-wave {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          height: 16px;
        }
        .audio-wave span {
          display: block;
          width: 3px;
          height: 100%;
          background: var(--green-icon);
          border-radius: 1px;
          animation: wavePulse 1s ease-in-out infinite alternate;
        }

        @keyframes wavePulse {
          0% { height: 4px; }
          100% { height: 16px; }
        }

        @keyframes bounceArrow {
          0% { transform: translateY(-3px); }
          100% { transform: translateY(3px); }
        }

        .scroll-btn-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 14px rgba(45, 110, 71, 0.15) !important;
        }
        .scroll-btn-hover:active {
          transform: translateY(0);
        }

        /* PLAYLIST TEXT DETAILS */
        .playlist-meta-box {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex-grow: 1;
          min-width: 0;
        }

        .playlist-item-tag {
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--gold-accent);
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .playlist-item-title {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--green-dark);
          line-height: 1.25;
          margin: 0 0 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-family: 'Inter', sans-serif;
        }

        .playlist-item-duration {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        /* EDITORIAL QUOTE INSET */
        .editorial-quote-inset {
          background: #ffffff;
          border: 1px solid rgba(26, 58, 42, 0.06);
          border-radius: 28px;
          padding: 34px 28px;
          box-shadow: 0 15px 35px rgba(26,58,42,0.02);
          position: relative;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 991px) {
          .cinema-hub-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        @media (max-width: 640px) {
          #interviews {
            padding: 80px 0 60px !important;
          }
          .theater-screen-wrapper {
            border-radius: 18px;
            padding: 4px;
          }
          .theater-frame {
            border-radius: 14px;
          }
          .sidebar-widget-container, .editorial-quote-inset {
            padding: 24px 20px;
            border-radius: 20px;
          }
        }
      `}} />
    </section>
  );
}
