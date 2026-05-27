import React from 'react';

const PROGRAMMES = [
  { tag: 'ENVIRONMENT', status: 'ONGOING', title: 'Environmental Awareness Seminars', desc: 'The foundation organizes seminars and awareness campaigns focused on pollution control, environmental responsibility, public health, and sustainable living.' },
  { tag: 'EDUCATION', status: 'ONGOING', title: 'Educational Initiatives', desc: 'We support programs that encourage learning, awareness, practical education, and knowledge sharing for individuals and communities.' },
  { tag: 'SKILLS & LIVELIHOOD', status: 'ONGOING', title: 'Skill Development Programs', desc: 'The foundation promotes vocational and professional training initiatives aimed at improving employability and self-reliance.' },
  { tag: 'COMMUNITY OUTREACH', status: 'ONGOING', title: 'Community Outreach Activities', desc: 'We engage with communities through awareness drives, social initiatives, discussions, and collaborative programs that encourage positive social impact.' },
];

const STATUS_STYLE = {
  ONGOING: { bg: '#e8f4ee', color: '#1a4e2f', dotColor: '#2b8a4f' },
  UPCOMING: { bg: '#fef3e2', color: '#7a5218', dotColor: '#d48d24' },
  RECRUITING: { bg: '#fce8ef', color: '#7a1835', dotColor: '#d42459' },
};

export default function Programmes() {
  return (
    <section id="programs" style={{ background: '#fcfbfa', padding: '140px 0', borderTop: '1px solid rgba(26,58,42,0.05)' }}>
      <div className="container">
        
        <span className="eyebrow">ACTIVE PROGRAMMES</span>
        
        <div style={{ marginBottom: '64px', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '80px', alignItems: 'end' }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)', fontWeight: 400, color: '#11251a', lineHeight: 1.1, letterSpacing: '-0.025em', margin: 0 }}>
            Running where they live.
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#4a5568', lineHeight: 1.7, maxWidth: '480px', margin: 0, fontFamily: "'Inter', sans-serif" }}>
            Each programme runs in partnership with schools, local administrations or grassroots collectives. Status reflects the current quarter.
          </p>
        </div>

        <div className="programmes-grid">
          {PROGRAMMES.map((p, i) => (
            <div 
              key={i} 
              className="hover-lift" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between', 
                minHeight: '230px',
                background: '#ffffff',
                border: '1px solid rgba(26, 58, 42, 0.06)',
                borderRadius: '24px',
                padding: '36px 32px',
                boxShadow: '0 10px 30px rgba(26, 58, 42, 0.01)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(200, 168, 74, 0.3)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(26, 58, 42, 0.04)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(26, 58, 42, 0.06)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(26, 58, 42, 0.01)';
              }}
            >
              {/* Top row */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9ba8a1', fontFamily: "'Inter', sans-serif" }}>{p.tag}</span>
                  <span style={{
                    fontSize: '0.68rem', 
                    fontWeight: 600, 
                    letterSpacing: '0.06em', 
                    textTransform: 'uppercase',
                    background: STATUS_STYLE[p.status].bg, 
                    color: STATUS_STYLE[p.status].color,
                    padding: '6px 14px', 
                    borderRadius: '999px',
                    fontFamily: "'Inter', sans-serif",
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: STATUS_STYLE[p.status].dotColor }} />
                    {p.status}
                  </span>
                </div>

                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontFamily: "'Playfair Display', Georgia, serif", 
                  fontWeight: 500, 
                  color: '#11251a', 
                  lineHeight: 1.3, 
                  letterSpacing: '-0.015em', 
                  marginBottom: '12px' 
                }}>{p.title}</h3>
                
                <p style={{ 
                  fontSize: '0.9rem', 
                  color: '#4a5568', 
                  lineHeight: 1.6, 
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  marginBottom: '28px' 
                }}>{p.desc}</p>
              </div>

              <a href="#contact" style={{ 
                fontSize: '0.85rem', 
                color: '#11251a', 
                textDecoration: 'none', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px', 
                fontWeight: 600,
                fontFamily: "'Inter', sans-serif",
                transition: 'all 0.2s ease',
                width: 'fit-content'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#c8a84a';
                  e.currentTarget.querySelector('span').style.transform = 'translate(2px, -2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#11251a';
                  e.currentTarget.querySelector('span').style.transform = 'none';
                }}
              >
                Inquire Details <span style={{ transition: 'transform 0.2s ease', display: 'inline-block' }}>↗</span>
              </a>
            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .programmes-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        @media (max-width: 900px) {
          .programmes-grid {
            grid-template-columns: 1fr;
          }
          #programs > div > div:first-of-type {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}} />
    </section>
  );
}
