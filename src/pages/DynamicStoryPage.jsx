import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { db } from '../utils/db';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

export default function DynamicStoryPage() {
  const { id } = useParams();
  const location = useLocation();
  const [story, setStory] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if preview param is present
  const isPreview = new URLSearchParams(location.search).get('preview') === 'true';

  useEffect(() => {
    window.scrollTo(0, 0);
    const data = db.getStoryById(id, isPreview);
    setStory(data);
    setLoading(false);
  }, [id, isPreview]);

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <span>Loading Journal...</span>
      </div>
    );
  }

  if (!story || (!story.visible && !isPreview)) {
    return (
      <div style={styles.notFoundContainer}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', color: 'var(--green-dark)' }}>
          Journal Article Not Found
        </h2>
        <p style={{ color: 'var(--text-body)', marginTop: '8px', marginBottom: '24px' }}>
          The article you are looking for does not exist or has been removed.
        </p>
        <Link to="/media" style={styles.backLinkBtn}>
          <ArrowLeft size={16} /> Return to Media Page
        </Link>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh', position: 'relative' }}>
      
      {/* Editorial Header */}
      <section style={styles.heroSection}>
        {/* Decorative Grid Pattern */}
        <div style={styles.gridPattern} />
        
        {/* Ambient Warm Atmosphere */}
        <div style={styles.ambientGlow} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '850px' }}>
            <div style={styles.metaBadgeRow}>
              <span className="eyebrow" style={{ color: 'var(--gold-accent)', margin: 0, letterSpacing: '0.15em' }}>
                {story.category ? story.category.toUpperCase() : 'JOURNAL ARTICLE'}
              </span>
              {isPreview && (
                <span style={styles.previewTag}>CMS Draft Preview</span>
              )}
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={styles.heroTitle}
            >
              {story.title}
            </motion.h1>

            <p style={styles.heroSubtitle}>{story.subtitle}</p>

            <div style={styles.authorMeta}>
              <div style={styles.metaItem}>
                <User size={14} color="var(--gold-accent)" />
                <span>{story.author || 'Foundation Correspondent'}</span>
              </div>
              <div style={styles.metaItem}>
                <Calendar size={14} color="var(--gold-accent)" />
                <span>{story.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '80px 0', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            
            {/* Back Button */}
            <Link to={isPreview ? "/media?preview=true" : "/media"} style={styles.backLink}>
              <ArrowLeft size={14} /> Back to documentary journals
            </Link>

            {/* Featured Image */}
            {story.image && (
              <div style={styles.featuredImageContainer}>
                <img src={story.image} alt={story.title} style={styles.featuredImage} />
              </div>
            )}

            {/* Editorial Body */}
            <article className="article-body">
              {story.summary && (
                <p style={styles.summaryParagraph}>
                  {story.summary}
                </p>
              )}

              {/* Render Rich HTML Content */}
              <div 
                dangerouslySetInnerHTML={{ __html: story.content }} 
                className="dynamic-rich-content"
                style={styles.contentMarkup}
              />
            </article>

          </div>
        </div>
      </section>

      {/* Inject custom styling rules for dynamic rich text content */}
      <style dangerouslySetInnerHTML={{ __html: `
        .dynamic-rich-content h3 {
          font-family: 'Inter', sans-serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--green-dark);
          margin-top: 32px;
          margin-bottom: 12px;
          letter-spacing: -0.015em;
        }
        .dynamic-rich-content p {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: var(--text-body);
          line-height: 1.7;
          margin-bottom: 20px;
          font-weight: 300;
        }
        .dynamic-rich-content blockquote {
          border-left: 3px solid var(--gold-accent);
          padding-left: 20px;
          font-family: 'Playfair Display', Georgia, serif;
          font-style: italic;
          font-size: 1.15rem;
          color: var(--green-dark);
          margin: 24px 0;
          line-height: 1.6;
        }
        .dynamic-rich-content strong {
          font-weight: 600;
          color: #1a1a1a;
        }
        .dynamic-rich-content ul, .dynamic-rich-content ol {
          margin-bottom: 24px;
          padding-left: 20px;
        }
        .dynamic-rich-content li {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: var(--text-body);
          line-height: 1.6;
          margin-bottom: 8px;
          font-weight: 300;
        }
      `}} />
    </div>
  );
}

const styles = {
  loadingContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--bg-main)',
    gap: '12px',
    color: 'var(--text-muted)',
    fontSize: '0.9rem',
  },
  spinner: {
    width: '32px',
    height: '32px',
    border: '2px solid rgba(26, 58, 42, 0.1)',
    borderTopColor: 'var(--green-icon)',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  notFoundContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--bg-main)',
    padding: '20px',
    textAlign: 'center',
  },
  backLinkBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'var(--green-dark)',
    color: '#ffffff',
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    fontSize: '0.88rem',
    fontWeight: 600,
    boxShadow: '0 4px 10px rgba(26, 58, 42, 0.1)',
  },
  heroSection: {
    background: '#1a3a2a',
    padding: '160px 0 80px',
    position: 'relative',
    overflow: 'hidden',
    borderBottom: '1px solid rgba(17, 37, 26, 0.08)',
  },
  gridPattern: {
    position: 'absolute',
    inset: 0,
    backgroundImage: 'radial-gradient(rgba(245, 196, 67, 0.08) 1px, transparent 1px)',
    backgroundSize: '28px 28px',
    opacity: 0.7,
    pointerEvents: 'none',
  },
  ambientGlow: {
    position: 'absolute',
    top: '-15%',
    right: '8%',
    width: '550px',
    height: '550px',
    background: 'radial-gradient(circle, rgba(245, 196, 67, 0.08) 0%, transparent 70%)',
    filter: 'blur(60px)',
    pointerEvents: 'none',
  },
  metaBadgeRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  previewTag: {
    background: 'var(--gold-accent)',
    color: '#1a3a2a',
    fontSize: '0.62rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    padding: '2px 8px',
    borderRadius: '4px',
    letterSpacing: '0.04em',
  },
  heroTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(1.8rem, 4.5vw, 3.4rem)',
    fontWeight: 400,
    color: '#ffffff',
    lineHeight: 1.15,
    letterSpacing: '-0.015em',
    margin: 0,
  },
  heroSubtitle: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 'clamp(1rem, 1.3vw, 1.25rem)',
    color: '#cbd5e1',
    lineHeight: 1.4,
    fontWeight: 300,
    marginTop: '12px',
    marginBottom: '24px',
  },
  authorMeta: {
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
    paddingTop: '16px',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.82rem',
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: 400,
  },
  backLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.82rem',
    fontWeight: 600,
    color: 'var(--green-icon)',
    textDecoration: 'none',
    marginBottom: '24px',
    transition: 'color 0.2s',
  },
  featuredImageContainer: {
    width: '100%',
    maxHeight: '440px',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
    border: '1px solid rgba(0,0,0,0.04)',
    marginBottom: '36px',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  summaryParagraph: {
    fontSize: '1.18rem',
    lineHeight: '1.75',
    color: 'var(--green-dark)',
    fontWeight: 400,
    marginBottom: '28px',
    fontFamily: "'Playfair Display', Georgia, serif",
    fontStyle: 'italic',
  },
  contentMarkup: {
    textAlign: 'left',
  }
};
