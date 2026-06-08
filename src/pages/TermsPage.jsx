import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SECTIONS = [
  { id: "agreement", title: "1. Agreement & Binding Acceptance" },
  { id: "usage-rules", title: "2. Authorized Website Usage" },
  { id: "intellectual-property", title: "3. Intellectual Property Rights" },
  { id: "donation-compliance", title: "4. Donation Terms & Refunds" },
  { id: "volunteer-conduct", title: "5. Volunteer Code of Conduct" },
  { id: "liability-limits", title: "6. Limitation of Liability" },
  { id: "external-links", title: "7. External Platforms & Links" },
  { id: "governing-law", title: "8. Governing Law & Jurisdiction" },
  { id: "changes-terms", title: "9. Amendments & Modifications" },
  { id: "contact-details", title: "10. Contact & Board Information" }
];

export default function TermsPage() {
  const [activeId, setActiveId] = useState("agreement");

  useEffect(() => {
    // Scroll tracker for active section in Table of Contents
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: 0.1 }
    );

    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Offset for sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

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
          left: '8%', 
          width: '550px', 
          height: '550px', 
          background: 'radial-gradient(circle, rgba(245, 196, 67, 0.08) 0%, transparent 70%)', 
          filter: 'blur(60px)',
          pointerEvents: 'none' 
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ color: 'var(--gold-accent)', margin: 0, display: 'inline-block', marginBottom: '16px', letterSpacing: '0.2em' }}>
            REGULATORY POLICIES & TERMS OF SERVICE
          </span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)', 
              fontWeight: 400, 
              color: '#ffffff', 
              lineHeight: 1.1, 
              letterSpacing: '-0.02em', 
              marginBottom: '24px' 
            }}
          >
            Terms & <span className="serif-italic" style={{ color: 'var(--gold-accent)' }}>Conditions</span>
          </motion.h1>

          {/* Editorial Metadata Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              display: 'flex', 
              gap: '24px', 
              flexWrap: 'wrap', 
              alignItems: 'center',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)', 
              paddingTop: '24px', 
              marginTop: '24px' 
            }}
          >
            <div style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.7)', letterSpacing: '0.08em' }}>
              DOCUMENT REF: <span style={{ color: '#ffffff', fontWeight: 600 }}>CEIF-TC-2026</span>
            </div>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.3)' }} />
            <div style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.7)', letterSpacing: '0.08em' }}>
              LAST UPDATED: <span style={{ color: '#ffffff', fontWeight: 600 }}>JUNE 8, 2026</span>
            </div>
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.3)' }} />
            <div style={{ fontSize: '0.78rem', color: 'rgba(255, 255, 255, 0.7)', letterSpacing: '0.08em' }}>
              READING TIME: <span style={{ color: 'var(--gold-accent)', fontWeight: 600 }}>8 MINS</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Editorial Content Section */}
      <section style={{ padding: '80px 0', background: 'var(--bg-main)' }}>
        <div className="container article-layout">
          
          {/* Table of Contents - Desktop Sidebar */}
          <aside className="article-sidebar" style={{
            position: 'sticky',
            top: '110px',
            alignSelf: 'start',
            maxHeight: 'calc(100vh - 150px)',
            overflowY: 'auto',
            paddingRight: '28px',
            borderRight: '1px solid rgba(26, 58, 42, 0.08)'
          }}>
            <h4 style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--green-dark)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              fontFamily: "'Inter', sans-serif"
            }}>
              Table of Contents
            </h4>
            
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {SECTIONS.map((sec) => {
                const isActive = activeId === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      padding: '4px 0 4px 12px',
                      fontSize: '0.88rem',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? 'var(--green-icon)' : 'var(--text-muted)',
                      borderLeft: `2px solid ${isActive ? 'var(--gold-accent)' : 'transparent'}`,
                      cursor: 'pointer',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      fontFamily: "'Inter', sans-serif"
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.target.style.color = 'var(--green-dark)';
                        e.target.style.paddingLeft = '16px';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.target.style.color = 'var(--text-muted)';
                        e.target.style.paddingLeft = '12px';
                      }
                    }}
                  >
                    {sec.title}
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Long-form Article Body */}
          <article className="article-body" style={{ maxWidth: '720px', margin: '0 auto' }}>
            
            {/* Inline TOC for Mobile Screens */}
            <div className="mobile-toc-block" style={{
              background: 'rgba(26, 58, 42, 0.03)',
              border: '1px solid rgba(26, 58, 42, 0.06)',
              borderRadius: '20px',
              padding: '28px',
              marginBottom: '48px',
              display: 'none'
            }}>
              <h4 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.2rem',
                color: 'var(--green-dark)',
                marginBottom: '16px',
                fontWeight: 500
              }}>
                On this page
              </h4>
              <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {SECTIONS.map((sec) => (
                  <li key={sec.id}>
                    <button
                      onClick={() => scrollToSection(sec.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        padding: 0,
                        fontSize: '0.92rem',
                        color: 'var(--green-icon)',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        textUnderlineOffset: '4px',
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      {sec.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              
              <section id="agreement" style={{ padding: 0 }}>
                <h2 className="article-h2">Agreement & Binding Acceptance</h2>
                <p className="article-p">
                  Welcome to the online portal of the <strong>CSR & Educational India Foundation</strong>. These Terms & Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity, and the Board of Directors of the Foundation, concerning your access to and use of this website as well as any other media form, media channel, mobile website, or mobile application related or connected thereto.
                </p>
                <p className="article-p">
                  By accessing the website, you acknowledge that you have read, understood, and agreed to be bound by all of these Terms & Conditions. If you do not agree with all of these terms, you are expressly prohibited from using the site and must discontinue use immediately.
                </p>
              </section>

              <hr className="article-divider" />

              <section id="usage-rules" style={{ padding: 0 }}>
                <h2 className="article-h2">Authorized Website Usage</h2>
                <p className="article-p">
                  By interacting with this platform, you commit to utilizing all information, media, assets, resources, and outreach program coordinates solely for lawful, humanitarian, and direct community welfare purposes. 
                </p>
                <p className="article-p">
                  You are strictly prohibited from engaging in any activity that harms, disables, or overburdens our networks. Specifically, the following actions represent structural violations of this agreement:
                </p>
                <ul className="article-list">
                  <li>
                    <svg className="article-list-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>Automated Extraction:</strong> Using any automated scraping, data mining, robots, or similar data extraction methods on this platform.
                    </span>
                  </li>
                  <li>
                    <svg className="article-list-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>Disruption & Intrusion:</strong> Attempting to bypass security protocols, run denial of service (DoS) attacks, or inject unauthorized code/scripts.
                    </span>
                  </li>
                  <li>
                    <svg className="article-list-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>Commercial Exploitation:</strong> Re-publishing, licensing, or commercializing website text, media catalogs, or program schedules without written authorization.
                    </span>
                  </li>
                </ul>
              </section>

              <hr className="article-divider" />

              <section id="intellectual-property" style={{ padding: 0 }}>
                <h2 className="article-h2">Intellectual Property Rights</h2>
                <p className="article-p">
                  Unless otherwise indicated, the website represents our proprietary property. All photographic logs, custom graphic brand structures, layout systems, textual summaries, video files, codebases, and custom Devnagri typographic watermarks are the exclusive property of the CSR & Educational India Foundation. 
                </p>
                <p className="article-p">
                  These materials are protected under Indian intellectual property acts and international copyright and trademark laws. You are granted a limited license to access, view, and print physical copies of pages solely for personal, non-commercial educational use.
                </p>
                <div className="article-quote">
                  "No content or trademark from this portal may be copied, mirrored, republished, or distributed for commercial purposes without explicit, written attestation from our Board."
                </div>
              </section>

              <hr className="article-divider" />

              <section id="donation-compliance" style={{ padding: 0 }}>
                <h2 className="article-h2">Donation Terms & Refunds</h2>
                <p className="article-p">
                  All financial contributions made to our campaigns are processed in Indian Rupees (INR) and represent voluntary support for our educational libraries and ecological runs.
                </p>
                <p className="article-p">
                  In alignment with our Statement of Transparency, 100% of these resources are deployed on direct environmental preservation materials and youth digital libraries. Donations are non-refundable once processed, unless a gateway processing duplication error occurs and is verified within 7 business days of the transaction.
                </p>
                <div className="article-quote">
                  "Donations are eligible for statutory tax exemptions under Sections 80G and 12A of the Indian Income Tax Act when verified with our board."
                </div>
              </section>

              <hr className="article-divider" />

              <section id="volunteer-conduct" style={{ padding: 0 }}>
                <h2 className="article-h2">Volunteer Code of Conduct</h2>
                <p className="article-p">
                  The Foundation coordinates environmental cleanup runs, youth digital classes, and local skill workshops across various districts. Every volunteer, community coordinator, or educational student participating in our programs must maintain the highest standards of safety, respect, and integrity.
                </p>
                <p className="article-p">
                  Harassment, communal bias, physical negligence, or unethical conduct will result in the immediate rescission of your volunteer registration and termination of access to our physical and digital learning modules.
                </p>
              </section>

              <hr className="article-divider" />

              <section id="liability-limits" style={{ padding: 0 }}>
                <h2 className="article-h2">Limitation of Liability</h2>
                <p className="article-p">
                  The information provided on this platform is shared in good faith for public awareness. The Foundation disclaims all warranties, express or implied, regarding the website uptime, typographical errors, or direct accuracy of external coordinates.
                </p>
                <p className="article-p">
                  Under no circumstances shall the Foundation, its Trustees, or operational partners be liable to you or any third party for any direct, indirect, consequential, exemplary, or incidental damages arising from your use of this site or participation in volunteer field programs.
                </p>
              </section>

              <hr className="article-divider" />

              <section id="external-links" style={{ padding: 0 }}>
                <h2 className="article-h2">External Platforms & Links</h2>
                <p className="article-p">
                  For administrative reference, regulatory filing transparency, or CSR coordination, our portal may reference external links to government registries, bank portals, or third-party educational tools.
                </p>
                <p className="article-p">
                  The Foundation holds zero editorial jurisdiction over the content accuracy, cookies, privacy practices, or digital uptime of these external platforms. Visiting external links is entirely at your own risk.
                </p>
              </section>

              <hr className="article-divider" />

              <section id="governing-law" style={{ padding: 0 }}>
                <h2 className="article-h2">Governing Law & Jurisdiction</h2>
                <p className="article-p">
                  These Terms & Conditions and your use of the website are governed by and construed in accordance with the laws of the Republic of India.
                </p>
                <p className="article-p">
                  Any legal action, dispute, or conflict arising under these agreements shall be brought exclusively in the courts of competent jurisdiction located in <strong>New Delhi, India</strong>, and you hereby consent to personal jurisdiction in such courts.
                </p>
              </section>

              <hr className="article-divider" />

              <section id="changes-terms" style={{ padding: 0 }}>
                <h2 className="article-h2">Amendments & Modifications</h2>
                <p className="article-p">
                  We reserve the right, in our sole discretion, to make changes or modifications to these Terms & Conditions at any time and for any reason. 
                </p>
                <p className="article-p">
                  We will alert you about any changes by updating the "Last Updated" date of these Terms & Conditions, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these terms to stay informed of updates.
                </p>
              </section>

              <hr className="article-divider" />

              <section id="contact-details" style={{ padding: 0 }}>
                <h2 className="article-h2">Contact & Board Information</h2>
                <p className="article-p">
                  For regulatory inquiries, corporate CSR partnership proposals, or structural questions regarding this governance charter, contact the Board of Directors directly:
                </p>
                <div style={{
                  background: 'rgba(26, 58, 42, 0.03)',
                  borderLeft: '4px solid var(--green-icon)',
                  padding: '24px',
                  borderRadius: '0 16px 16px 0',
                  marginTop: '24px'
                }}>
                  <p style={{ margin: '0 0 8px 0', fontSize: '1rem', fontWeight: 600, color: 'var(--green-dark)' }}>
                    CSR & Educational India Foundation Board
                  </p>
                  <p style={{ margin: '0 0 6px 0', fontSize: '0.95rem', color: 'var(--text-body)' }}>
                    <strong>Email:</strong> <a href="mailto:aumdcarya@gmail.com" style={{ color: 'var(--green-icon)', textDecoration: 'underline' }}>aumdcarya@gmail.com</a>
                  </p>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-body)' }}>
                    <strong>HQ Address:</strong> Registered Dwarka Residency Headquarters, New Delhi, India
                  </p>
                </div>
              </section>

            </div>

          </article>

        </div>
      </section>

      {/* Styled JSX for Premium Article Layout */}
      <style dangerouslySetInnerHTML={{ __html: `
        .article-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 60px;
          align-items: start;
        }

        .article-h2 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          color: var(--green-dark);
          margin-bottom: 24px;
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
          color: var(--green-icon);
          margin-top: 4px;
          flex-shrink: 0;
        }

        .article-divider {
          border: 0;
          height: 1px;
          background: rgba(26, 58, 42, 0.08);
          margin: 32px 0;
        }

        @media (max-width: 1024px) {
          .article-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .article-sidebar {
            display: none !important;
          }
          .mobile-toc-block {
            display: block !important;
          }
        }
      `}} />
    </div>
  );
}
