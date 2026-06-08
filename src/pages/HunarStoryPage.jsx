import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HunarStoryPage() {
  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh', position: 'relative' }}>
      
      {/* Editorial Header (Hero) */}
      <section style={{ 
        background: '#231809', 
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
              SKILLS DEVELOPMENT • 18 DEC 2025
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
              Hunar Workshops: stories of dignity through skill
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
              True charity does not create dependencies; it fosters independent capability. The Hunar initiative equips women and local youths with practical trades, enabling dignified self-reliance.
            </p>

            <h2 className="article-h2">Empowering Through Action</h2>
            <p className="article-p">
              The Hunar program was built on the core belief that technical empowerment can lift entire families out of economic insecurity. By offering structured, hands-on training in local vocations, we ensure our participants do not need to migrate to overcrowded urban centers in search of basic livelihoods.
            </p>
            <p className="article-p">
              Rather than theoretical studies, our classrooms resemble functional workshops. Under the guidance of seasoned professionals, participants build, repair, weave, and balance ledgers from day one.
            </p>

            <div className="article-quote">
              "When you teach a hand to craft, repair, or compute, you restore a sense of dignity that charity alone can never provide."
            </div>

            <h2 className="article-h2">Three Women, Three Transformed Paths</h2>
            <p className="article-p">
              The true impact of our workshops is reflected in the journeys of our graduates. Meet three women who have redefined self-reliance in their villages:
            </p>
            <ul className="article-list">
              <li>
                <span className="article-list-icon">✦</span>
                <span>
                  <strong>Meera (Solar & Electrical Maintenance):</strong> Breaking conventional boundaries, Meera completed our home electrical and solar-grid installation module. Today, she maintains solar water pumps in her block, earning a steady income while providing vital community infrastructure.
                </span>
              </li>
              <li>
                <span className="article-list-icon">✦</span>
                <span>
                  <strong>Kiran (Sustainable Garment Design):</strong> Combining design trends with organic cotton, Kiran organized a self-help cooperative of 12 women. They now manufacture eco-friendly carry bags, school uniforms, and local cotton items.
                </span>
              </li>
              <li>
                <span className="article-list-icon">✦</span>
                <span>
                  <strong>Sunita (Local Bookkeeping & Retail Operations):</strong> Equipped with spreadsheet and digital registry skills, Sunita assists small rural shop owners and weavers in digitizing inventory, filing local taxation records, and registering with online marketplace platforms.
                </span>
              </li>
            </ul>

            <h2 className="article-h2">Sustainable Community Integration</h2>
            <p className="article-p">
              In addition to providing technical skills, the Hunar Workshops include a comprehensive values-based curriculum. Participants learn direct civic responsibility, ethical trading practices, and family bookkeeping. This integration ensures that personal financial growth contributes directly to positive neighborhood outcomes and community cohesion.
            </p>
            <p className="article-p">
              As we expand into 2026, we aim to establish dedicated Hunar centers in 10 additional districts, helping more citizens unlock their creative and technical potential.
            </p>

            <hr className="article-divider" />

            <div style={{ marginTop: '48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link to="/blog/sankalp-2025" style={{ color: 'var(--green-icon)', fontWeight: 600, textDecoration: 'none' }}>
                ← Prev Story: Sankalp 2025
              </Link>
              <Link to="/" className="btn-green">
                Back to Home
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
