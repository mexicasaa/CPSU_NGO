import React from 'react';
import { motion } from 'framer-motion';

export default function DisclaimerPage() {

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
          <span className="eyebrow" style={{ color: 'var(--gold-accent)', margin: 0, display: 'inline-block', marginBottom: '16px', letterSpacing: '0.2em' }}>
            STATUTORY ANNOUNCEMENTS & LEGAL DISCLAIMERS
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
            Legal <span className="serif-italic" style={{ color: 'var(--gold-accent)' }}>Disclaimer</span>
          </motion.h1>
        </div>
      </section>

      {/* Main Editorial Content Section */}
      <section style={{ padding: '80px 0', background: 'var(--bg-main)' }}>
        <div className="container article-layout">
          


          {/* Long-form Article Body */}
          <article className="article-body" style={{ maxWidth: '720px', margin: '0 auto' }}>
            


            {/* Content Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              
              <section id="information-accuracy" style={{ padding: 0 }}>
                <h2 className="article-h2">Limits of Representation & Warranties</h2>
                <p className="article-p">
                  All information, field reports, data figures, project statistics, and coordination timelines provided on this website are shared in absolute good faith by the <strong>CSR & Educational India Foundation</strong> for public awareness. 
                </p>
                <p className="article-p">
                  While our administrative team maintains rigorous audit processes to ensure accuracy and periodic verification, we make no legal representations or absolute warranties regarding the immediate completeness, real-time sync, or exhaustive precision of all logistical content. Users are advised to verify operational locations and schedules with regional offices prior to travel.
                </p>
              </section>

              <hr className="article-divider" />

              <section id="professional-advice" style={{ padding: 0 }}>
                <h2 className="article-h2">No Professional Advisory</h2>
                <p className="article-p">
                  The textual content, calculations, and legal references displayed on this website do not represent, and must not be interpreted as, professional legal, tax, or investment advice. 
                </p>
                <p className="article-p">
                  Donations made to the Foundation are eligible for statutory tax exemptions under applicable Indian acts (e.g. 80G/12A when verified). However, individual taxation scenarios depend on multiple unique factors. Stakeholders are strongly encouraged to consult their certified public accountants or legal advisors to review their specific taxation positions before making contributions.
                </p>
              </section>

              <hr className="article-divider" />

              <section id="tax-exemptions" style={{ padding: 0 }}>
                <h2 className="article-h2">Tax Exemption & 80G Eligibility</h2>
                <p className="article-p">
                  While the Foundation holds valid registration under Section 12A and Section 80G of the Indian Income Tax Act, 1961, the availability of tax benefits is subject to the individual donor's tax filing parameters and compliance rules as defined by the Government of India. 
                </p>
                <p className="article-p">
                  We issue official 80G certificates via email upon successful transaction reconciliation and receipt of verified PAN details. We hold no responsibility for delayed tax-exemption processing due to incorrect or incomplete PAN inputs provided by users during registration.
                </p>
              </section>

              <hr className="article-divider" />

              <section id="field-execution" style={{ padding: 0 }}>
                <h2 className="article-h2">Field Program & Operation Limits</h2>
                <p className="article-p">
                  The Foundation delivers its digital schools, skill workshops, and ecological cleanup drives using local volunteer networks, community trade leaders, and partnered regional organizations. 
                </p>
                <p className="article-p">
                  Operational timelines, plantation growth outcomes, school enrollment capacities, and local trade placements may vary depending on local weather, municipal authorizations, regional government policy changes, and volunteer availability. All project timelines showcased represent targets, not guaranteed execution dates.
                </p>
                <div className="article-quote">
                  "Environmental and local infrastructure development projects depend heavily on regional ground factors; the Foundation does not warrant continuous or uninterrupted field operations."
                </div>
              </section>

              <hr className="article-divider" />

              <section id="external-resources" style={{ padding: 0 }}>
                <h2 className="article-h2">External Links & Resource Limits</h2>
                <p className="article-p">
                  For educational purposes, CSR tracking coordinates, or statutory transparency filings, this portal contains references and outbound links to external government websites, bank payment links, or partnering NGO logs.
                </p>
                <p className="article-p">
                  The Foundation holds zero editorial jurisdiction over the content accuracy, digital security, uptime, or privacy standards of these third-party platforms. The inclusion of outbound links does not represent a direct endorsement or warranty of services.
                </p>
              </section>

              <hr className="article-divider" />

              <section id="liability-disclaimer" style={{ padding: 0 }}>
                <h2 className="article-h2">Limitation of Liability</h2>
                <p className="article-p">
                  Under no circumstances shall the CSR & Educational India Foundation, its Trustees, Directors, officers, or employee panels be liable for any direct, indirect, special, punitive, or consequential damages resulting from your use of the website or participation in local volunteer drives. 
                </p>
                <p className="article-p">
                  This includes, but is not limited to, reliance on educational material, transmission of system errors, server outages, data loss, or physical injuries sustained during voluntary environmental runs or educational deployments.
                </p>
              </section>

              <hr className="article-divider" />

              <section id="compliance-seal" style={{ padding: 0 }}>
                <h2 className="article-h2">Audit, Attestation & Governance</h2>
                <p className="article-p">
                  Every clause, legal notice, and operational disclosure displayed is maintained securely in coordination with our legal advisors. Under our strict policy of compliance, these disclaimers are reviewed periodically to match contemporary Indian administrative guidelines.
                </p>
                
                {/* Clean, editorial inline sign-off with seal */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '40px',
                  background: 'rgba(26, 58, 42, 0.03)',
                  borderLeft: '4px solid var(--green-icon)',
                  padding: '36px 40px',
                  borderRadius: '0 24px 24px 0',
                  marginTop: '48px'
                }} className="disclaimer-signoff">
                  
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: '0 0 6px 0', fontSize: '1rem', fontWeight: 600, color: 'var(--green-dark)' }}>
                      Board of Trustees Attestation
                    </p>
                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                      This document is officially certified by the Governance Board of the CSR & Educational India Foundation. All audit summaries are archived annually with our registered residency headquarters in Dwarka, New Delhi.
                    </p>
                  </div>

                  {/* Custom Editorial Seal Stamp - integrated cleanly without layout boxes */}
                  <div style={{ display: 'flex', justifyContent: 'center', flexShrink: 0 }}>
                    <div style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      border: '2px dashed var(--gold-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      transform: 'rotate(-5deg)',
                      padding: '8px',
                      background: 'rgba(255, 255, 255, 0.8)'
                    }}>
                      <div style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        border: '1.5px solid var(--green-icon)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        padding: '6px'
                      }}>
                        <span style={{ fontSize: '0.5rem', fontWeight: 700, color: 'var(--green-dark)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                          CERTIFIED
                        </span>
                        <span style={{ fontSize: '0.62rem', fontFamily: "'Playfair Display', serif", fontWeight: 600, color: 'var(--green-icon)', margin: '1px 0' }}>
                          GOVERNANCE
                        </span>
                        <span style={{ fontSize: '0.45rem', fontWeight: 500, color: 'var(--green-icon)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                          COMPLIANCE SEAL
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

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

        @media (max-width: 768px) {
          .disclaimer-signoff {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            padding: 24px 20px !important;
            gap: 24px !important;
          }
        }
      `}} />
    </div>
  );
}
