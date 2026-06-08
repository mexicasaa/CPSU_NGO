import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function PollutionStoryPage() {
  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh', position: 'relative' }}>
      
      {/* Editorial Header (Hero) */}
      <section style={{ 
        background: '#1a3a2a', 
        padding: '160px 0 100px', 
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(17, 37, 26, 0.08)'
      }}>
        {/* Decorative Grid Pattern */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: 'radial-gradient(rgba(245, 196, 67, 0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.7,
          pointerEvents: 'none' 
        }} />

        {/* Ambient Warm Atmosphere */}
        <div style={{ 
          position: 'absolute', 
          top: '-15%', 
          right: '8%', 
          width: '550px', 
          height: '550px', 
          background: 'radial-gradient(circle, rgba(245, 196, 67, 0.08) 0%, transparent 70%)', 
          filter: 'blur(60px)',
          pointerEvents: 'none' 
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          <div style={{ maxWidth: '850px' }}>
            <span className="eyebrow" style={{ color: 'var(--gold-accent)', marginBottom: '16px', letterSpacing: '0.2em' }}>
              ENVIRONMENTAL JOURNAL • 22 JAN 2026
            </span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif", 
                fontSize: 'clamp(2rem, 4.5vw, 3.8rem)', 
                fontWeight: 400, 
                color: '#ffffff', 
                lineHeight: 1.15, 
                letterSpacing: '-0.02em',
                margin: 0
              }}
            >
              Why awareness is the first step against pollution
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Main Editorial Content Section */}
      <section style={{ padding: '80px 0', background: 'var(--bg-main)' }}>
        <div className="container article-layout">
          


          {/* Long-form Article Body */}
          <article className="article-body" style={{ maxWidth: '720px', margin: '0 auto' }}>
            
            <p className="article-p" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--green-dark)', fontWeight: 400 }}>
              Air pollution in Delhi-NCR and the surrounding rural areas isn't just a regulatory issue; it's a critical public health crisis. At the CSR & Educational India Foundation, we believe that change doesn't start in courtrooms or legislative assemblies—it begins in our local communities, neighborhoods, and households.
            </p>

            <h2 className="article-h2">Understanding the Core Challenge</h2>
            <p className="article-p">
              Every winter, northern India is enveloped in a thick blanket of smog. While crop residue burning and heavy industrial emissions receive the majority of media coverage, domestic waste combustion, minor municipal incinerations, and lack of localized environmental understanding account for a significant portion of ambient air toxicity. 
            </p>
            <p className="article-p">
              To counter this, our foundation has launched an integrated grassroots environmental blueprint. By replacing high-level scientific terminology with simple, actionable, and visual information sheets, we are empowering individuals to take ownership of the air they breathe.
            </p>

            <div className="article-quote">
              "We cannot clean the air of tomorrow if the citizens of today are not aware of the impact of their daily choices. Behavioral shift is the first and most critical defense."
            </div>

            <h2 className="article-h2">Strategic Pillars of the Blueprint</h2>
            <p className="article-p">
              Our outreach campaign relies on three core pillars designed to engage community members across all age brackets:
            </p>
            <ul className="article-list">
              <li>
                <span className="article-list-icon">✦</span>
                <span>
                  <strong>Clean Air Clubs in Schools:</strong> Structuring child-led advocacy. We teach primary students about respiratory health, particulate matter (PM2.5/PM10), and simple ways to monitor local AQI levels.
                </span>
              </li>
              <li>
                <span className="article-list-icon">✦</span>
                <span>
                  <strong>Interactive Street Plays (Nukkad Nataks):</strong> Activating cultural connection. Our youth volunteers perform short, energetic street plays in public markets and sub-localities to highlight the dangers of burning domestic plastic waste.
                </span>
              </li>
              <li>
                <span className="article-list-icon">✦</span>
                <span>
                  <strong>Dialogue Circles (Parivar Samvad):</strong> Family-centered conversations. We run neighborhood circles to assist families in transitioning away from open wood combustion for heating and domestic cooking.
                </span>
              </li>
            </ul>

            <h2 className="article-h2">Key Milestones & Ground Impact</h2>
            <p className="article-p">
              Over the last six months, our dedicated team has successfully reached over 10,000 households across Dwarka and surrounding rural segments. Through collaboration with local municipal corporations and educational councils, we have set up permanent air awareness kiosks and distributed eco-friendly waste disposal bins.
            </p>
            <p className="article-p">
              By monitoring domestic burning reports in our program zones, we have noticed a marked 35% reduction in open waste fires. This tangible change proves that when people are provided with the facts and alternative solutions, they naturally choose healthier practices.
            </p>

            <hr className="article-divider" />

            <div style={{ marginTop: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link to="/" className="btn-green">
                ← Back to Home
              </Link>
              <Link to="/blog/sankalp-2025" style={{ color: 'var(--green-icon)', fontWeight: 600, textDecoration: 'none' }}>
                Next Story: Sankalp 2025 →
              </Link>
            </div>

          </article>

        </div>
      </section>

      {/* Styled JSX for Premium Article Layout */}
      <style dangerouslySetInnerHTML={{ __html: `
        .article-layout {
          display: block;
        }

        .article-h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.5rem, 2.2vw, 2rem);
          color: var(--green-dark);
          margin: 40px 0 20px;
          font-weight: 500;
          line-height: 1.25;
        }

        .article-p {
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          color: #334155;
          line-height: 1.85;
          font-weight: 300;
          margin-bottom: 24px;
        }

        .article-quote {
          border-left: 3px solid var(--gold-accent);
          padding-left: 28px;
          margin: 36px 0;
          font-size: 1.15rem;
          font-style: italic;
          color: var(--green-dark);
          font-family: 'Playfair Display', Georgia, serif;
          line-height: 1.8;
        }

        .article-list {
          list-style: none;
          padding-left: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin: 28px 0;
        }

        .article-list li {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          font-size: 1.05rem;
          line-height: 1.7;
          color: #334155;
          font-weight: 300;
        }

        .article-list-icon {
          color: var(--gold-accent);
          font-weight: bold;
          flex-shrink: 0;
        }

        .article-divider {
          border: 0;
          height: 1px;
          background: rgba(26, 58, 42, 0.08);
          margin: 48px 0 32px;
        }

        @media (max-width: 991px) {
          .article-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .article-sidebar {
            display: none !important;
          }
        }
      `}} />
    </div>
  );
}
