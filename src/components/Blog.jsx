import React from 'react';
import { Link } from 'react-router-dom';

const BLOGS = [
  {
    tag: 'ENVIRONMENT',
    date: '22 Jan 2026',
    title: 'Why awareness is the first step against pollution',
    desc: 'Behavioural change begins with informed communities. Here\'s our comprehensive grassroots educational blueprint.',
    bg: '/blog_pollution.png',
    path: '/blog/pollution-awareness'
  },
  {
    tag: 'EDUCATION',
    date: '09 Jan 2026',
    title: 'From classroom to livelihood: Sankalp 2025 in numbers',
    desc: 'How 3,000+ students moved from learning foundation skills to gaining meaningful livelihood opportunities.',
    bg: '/blog_education.png',
    path: '/blog/sankalp-2025'
  },
  {
    tag: 'SKILLS',
    date: '18 Dec 2025',
    title: 'Hunar Workshops: stories of dignity through skill',
    desc: 'Three women, three trades, and one community transformed - how direct skill-empowerment builds long-term self-reliance.',
    bg: '/blog_skills.png',
    path: '/blog/hunar-workshops'
  },
];

export default function Blog() {
  return (
    <section id="blog" style={{ background: 'var(--bg-main)', padding: '140px 0 120px' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-60px', left: '10%', width: '300px', height: '300px', zIndex: 0 }} className="ambient-glow-green" />
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', marginBottom: '60px' }}>
          <span className="eyebrow">FIELD NOTES & JOURNAL</span>
          <h2 style={{ 
            fontFamily: "'Playfair Display', Georgia, serif", 
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', 
            fontWeight: 400, 
            color: 'var(--green-dark)', 
            lineHeight: 1.15, 
            letterSpacing: '-0.02em', 
            marginBottom: '20px' 
          }}>
            Stories, reports and reflections from the ground.
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
            Short dispatches from our active program volunteers and team leads - detailing our milestones, key challenges, and lessons learned.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', position: 'relative', zIndex: 1 }}>
          {BLOGS.map((b, i) => (
            <Link to={b.path} key={i} className="card hover-lift blog-card" style={{ textDecoration: 'none', color: 'inherit', padding: 0, overflow: 'hidden', cursor: 'pointer', border: '1px solid rgba(26, 58, 42, 0.08)', display: 'flex', flexDirection: 'column', height: '100%' }}>
              {/* Image area */}
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src={b.bg} 
                  alt={b.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="blog-img"
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 40%)',
                  pointerEvents: 'none'
                }} />
                <span style={{
                  position: 'absolute', top: '16px', left: '16px',
                  background: b.tag === 'ENVIRONMENT' ? 'var(--green-dark)' : b.tag === 'EDUCATION' ? 'var(--blue-accent)' : 'var(--gold-accent)',
                  color: '#fff', fontSize: '0.65rem', fontWeight: 600,
                  letterSpacing: '0.12em', padding: '6px 14px', borderRadius: '999px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>{b.tag}</span>
              </div>
              {/* Content */}
              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>{b.date}</span>
                </div>
                <h3 style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif", 
                  fontSize: '1.25rem', 
                  fontWeight: 400, 
                  color: 'var(--green-dark)', 
                  lineHeight: 1.35, 
                  letterSpacing: '-0.01em', 
                  marginBottom: '12px' 
                }}>
                  {b.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '24px', flexGrow: 1 }}>
                  {b.desc}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', borderTop: '1px solid rgba(26,58,42,0.06)', paddingTop: '20px', width: '100%' }}>
                  <span className="blog-link" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--green-dark)', transition: 'color 0.2s ease, transform 0.2s ease' }}>
                    Read Full Story
                  </span>
                  <span className="blog-arrow" style={{ fontSize: '0.9rem', color: 'var(--gold-accent)', transition: 'transform 0.2s ease', display: 'inline-block' }}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .blog-card:hover .blog-img {
          transform: scale(1.06);
        }
        .blog-card:hover .blog-link {
          color: var(--gold-accent) !important;
        }
        .blog-card:hover .blog-arrow {
          transform: translateX(4px);
        }
        @media (max-width: 991px) {
          #blog { padding: 100px 0 80px !important; }
          #blog > div > div:last-of-type { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          #blog { padding: 80px 0 60px !important; }
          #blog > div > div:last-of-type { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
