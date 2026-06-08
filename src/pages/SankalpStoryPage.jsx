import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function SankalpStoryPage() {
  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh', position: 'relative' }}>
      
      {/* Editorial Header (Hero) */}
      <section style={{ 
        background: '#102a43', 
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
              EDUCATION INITIATIVE • 09 JAN 2026
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
              From classroom to livelihood: Sankalp 2025 in numbers
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
              Project Sankalp was initiated with a clear directive: bridge the gap between basic primary literacy and sustainable economic livelihood for rural and marginalized youth. Here is how we turned classroom learning into practical economic outcomes in 2025.
            </p>

            <h2 className="article-h2">A Data-Driven Educational Mission</h2>
            <p className="article-p">
              In most rural segments of India, traditional schooling formats provide generic certificates but fail to equip youths with employment readiness. In 2025, Project Sankalp addressed this disconnect directly by establishing 15 community learning libraries. 
            </p>
            <p className="article-p">
              Rather than building capital-heavy brick-and-mortar schools, we utilized existing local spaces and equipped them with modern digital systems, high-speed internet, and value-based curriculum kits. This minimized overhead and directed maximum funding into training materials and instructor honorariums.
            </p>

            <div className="article-quote">
              "True education is that which liberates. Libration on the ground translates to self-reliance, technical skill mastery, and clear ethical guidelines."
            </div>

            <h2 className="article-h2">Project Sankalp 2025 Key Statistics</h2>
            <p className="article-p">
              The impact of the initiative is best highlighted through the metrics achieved by our students:
            </p>
            <ul className="article-list">
              <li>
                <span className="article-list-icon">✓</span>
                <span>
                  <strong>3,000+ Graduated Students:</strong> Youth trained in digital tools, local bookkeeping, and civic duty frameworks.
                </span>
              </li>
              <li>
                <span className="article-list-icon">✓</span>
                <span>
                  <strong>65% Female Enrollment:</strong> Promoting gender parity by establishing secure, local learning facilities.
                </span>
              </li>
              <li>
                <span className="article-list-icon">✓</span>
                <span>
                  <strong>4 Core Disciplines:</strong> Computer Operations, Applied Mathematics, Professional Soft Skills, and Civic Ethics.
                </span>
              </li>
            </ul>

            <h2 className="article-h2">Aarti's Story: From Zero to Digital Lead</h2>
            <p className="article-p">
              Consider Aarti, a 20-year-old student from a block outside Gurugram. Before joining the Sankalp center, she had never operated a desktop computer. Over six months, she mastered basic digital spreadsheets, office management software, and electronic communications.
            </p>
            <p className="article-p">
              Today, Aarti serves as the digital billing supervisor for a local agricultural cooperative, managing account ledgers for over 450 farmers. Her journey shows that when provided access to structured resources and direct mentorship, rural youths can excel in local trade roles.
            </p>

            <hr className="article-divider" />

            <div style={{ marginTop: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link to="/blog/pollution-awareness" style={{ color: 'var(--green-icon)', fontWeight: 600, textDecoration: 'none' }}>
                ← Prev Story: Pollution
              </Link>
              <Link to="/blog/hunar-workshops" style={{ color: 'var(--green-icon)', fontWeight: 600, textDecoration: 'none' }}>
                Next Story: Hunar Workshops →
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
