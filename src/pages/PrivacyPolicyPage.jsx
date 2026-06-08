import React from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {

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
            CSR & EDUCATIONAL INDIA FOUNDATION CHARTER
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
            Privacy <span className="serif-italic" style={{ color: 'var(--gold-accent)' }}>Policy</span>
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
              
              <section id="preamble" style={{ padding: 0 }}>
                <h2 className="article-h2">Preamble & Ethical Scope</h2>
                <p className="article-p">
                  At the <strong>CSR & Educational India Foundation</strong>, we believe that transparency is not merely a statutory checkmark, but the very foundation of community trust. Operating in digital schools, ecological preservation sectors, and rural skill workshops, we gather stakeholder data purely to orchestrate direct field execution. 
                </p>
                <p className="article-p">
                  This charter outlines our unwavering commitment to protecting individual data and explains the rigorous legal and digital frameworks we use. By visiting our platform, registering as a volunteer, or supporting our campaigns, you align with the collection and usage parameters set forth in this policy.
                </p>
                <div className="article-quote">
                  "Our foundational transparency mandate dictates that no stakeholder record is ever captured without active authorization, and absolutely no user profile will be commercialized."
                </div>
              </section>

              <hr className="article-divider" />

              <section id="data-collection" style={{ padding: 0 }}>
                <h2 className="article-h2">Information We Collect</h2>
                <p className="article-p">
                  We collect only vital records required to verify contributions, authenticate volunteering networks, and deliver governance reports. The information gathered falls into the following distinct categories:
                </p>
                <ul className="article-list">
                  <li>
                    <svg className="article-list-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>Identity Details:</strong> Full name, official email address, mobile number, and resident address provided voluntarily during registration.
                    </span>
                  </li>
                  <li>
                    <svg className="article-list-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>Financial Contribution Records:</strong> Transaction date, donor PAN card number (required for statutory Indian tax exemption reporting under section 80G), and contribution volume.
                    </span>
                  </li>
                  <li>
                    <svg className="article-list-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>Volunteer Profiles:</strong> Professional expertise, geographical availability, local language competencies, and historical deployment reports.
                    </span>
                  </li>
                </ul>
              </section>

              <hr className="article-divider" />

              <section id="consent-rights" style={{ padding: 0 }}>
                <h2 className="article-h2">Consent & Data Autonomy</h2>
                <p className="article-p">
                  Consent represents the core of our operations. No stakeholder records are captured automatically without explicit affirmative action (e.g., ticking consent boxes during submission or signing volunteer charters).
                </p>
                <p className="article-p">
                  Every user retains absolute autonomy over their data. You have the right to request a complete review of your stored details, modify incorrect entries, or request the absolute deletion of your records. Consent can be revoked at any time by contacting our governance board directly.
                </p>
              </section>

              <hr className="article-divider" />

              <section id="usage-policy" style={{ padding: 0 }}>
                <h2 className="article-h2">Purpose & Utilization of Data</h2>
                <p className="article-p">
                  The information we collect is strictly restricted to executing our core social programs and fulfilling legal requirements. We utilize collected metrics for:
                </p>
                <ul className="article-list">
                  <li>
                    <svg className="article-list-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>Field Operations Coordination:</strong> Informing regional volunteers about cleanup drives, distributing supplies, and scheduling digital tutoring hours.
                    </span>
                  </li>
                  <li>
                    <svg className="article-list-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>Statutory Audit Submissions:</strong> Issuing tax-exemption receipts and submitting required compliance reports to the Income Tax Department of India.
                    </span>
                  </li>
                  <li>
                    <svg className="article-list-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      <strong>Progress Transparency Reports:</strong> Delivering quarterly digital newsletters showcasing field metrics, planting numbers, and academic outcomes.
                    </span>
                  </li>
                </ul>
              </section>

              <hr className="article-divider" />

              <section id="non-disclosure" style={{ padding: 0 }}>
                <h2 className="article-h2">Absolute Non-Disclosure Policy</h2>
                <p className="article-p">
                  Your privacy is not negotiable. Under our foundational compliance charters, the CSR & Educational India Foundation operates under an absolute non-sharing mandate. We do not sell, rent, trade, lease, or distribute stakeholder contact details or profiles to any external corporate entities, commercial marketing agencies, or third-party syndicates.
                </p>
                <p className="article-p">
                  Information is shared only with verified payment processors and statutory regulatory bodies when required by federal Indian laws.
                </p>
              </section>

              <hr className="article-divider" />

              <section id="payment-security" style={{ padding: 0 }}>
                <h2 className="article-h2">Payment & Financial Protection</h2>
                <p className="article-p">
                  All financial contributions made to our educational libraries and ecological drives are processed exclusively via premium, bank-grade encrypted payment gateways. These gateways maintain full compliance with the Payment Card Industry Data Security Standard (PCI-DSS).
                </p>
                <p className="article-p">
                  The Foundation never views, records, or stores credit/debit card numbers, CVV keys, secure transaction passwords, or direct banking credentials on our local servers.
                </p>
              </section>

              <hr className="article-divider" />

              <section id="retention-storage" style={{ padding: 0 }}>
                <h2 className="article-h2">Storage Limits & Security</h2>
                <p className="article-p">
                  All data collected is stored on secure cloud databases that employ active encryption at rest and in transit. Access is strictly controlled through multi-factor authentication and limited to authorized regional program coordinators.
                </p>
                <p className="article-p">
                  We retain stakeholder records only as long as necessary to complete volunteering initiatives, manage educational partnerships, or fulfill statutory auditing requirements. Once the purpose is completed, records are purged securely from our networks.
                </p>
              </section>

              <hr className="article-divider" />

              <section id="cookies-tracking" style={{ padding: 0 }}>
                <h2 className="article-h2">Cookies & Web Analytics</h2>
                <p className="article-p">
                  We employ basic, non-intrusive cookies and web beacons to monitor general web traffic flow, track link click-through behavior, and optimize our interface performance. 
                </p>
                <p className="article-p">
                  These cookies do not link to any personally identifiable information. You have full liberty to configure your browser to decline cookies, though doing so may slightly alter the loading performance of some media features on the portal.
                </p>
              </section>

              <hr className="article-divider" />

              <section id="legal-compliance" style={{ padding: 0 }}>
                <h2 className="article-h2">Regulatory & IT Act Alignment</h2>
                <p className="article-p">
                  Our digital policies are designed in strict alignment with Section 43A of the Indian Information Technology Act, 2000, and the IT (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. 
                </p>
                <p className="article-p">
                  We maintain appropriate security safeguards to prevent unauthorized access, alteration, disclosure, or destruction of sensitive personal information.
                </p>
              </section>

              <hr className="article-divider" />

              <section id="governance-contact" style={{ padding: 0 }}>
                <h2 className="article-h2">Corporate Governance & Contact</h2>
                <p className="article-p">
                  In compliance with regulatory codes, the Foundation has appointed a dedicated Grievance Officer. If you have any inquiries regarding this charter, wish to verify the records we hold, or wish to request data deletion, contact us directly:
                </p>
                <div style={{
                  background: 'rgba(26, 58, 42, 0.03)',
                  borderLeft: '4px solid var(--green-icon)',
                  padding: '24px',
                  borderRadius: '0 16px 16px 0',
                  marginTop: '24px'
                }}>
                  <p style={{ margin: '0 0 8px 0', fontSize: '1rem', fontWeight: 600, color: 'var(--green-dark)' }}>
                    Board of Trustees - Privacy Grievance Cell
                  </p>
                  <p style={{ margin: '0 0 6px 0', fontSize: '0.95rem', color: 'var(--text-body)' }}>
                    <strong>Email:</strong> <a href="mailto:aumdcarya@gmail.com" style={{ color: 'var(--green-icon)', textDecoration: 'underline' }}>aumdcarya@gmail.com</a>
                  </p>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-body)' }}>
                    <strong>Address:</strong> Registered Residency Office, Dwarka, New Delhi, India
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
      `}} />
    </div>
  );
}
