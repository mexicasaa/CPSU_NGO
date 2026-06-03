import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PARTNERSHIP_MODELS = [
  {
    title: 'CSR Program Sponsorship',
    desc: 'Deploy corporate capital directly into structured, Section-135-compliant programs. Sponsor complete water filter clusters, school upgrades, or Delhi-NCR clean-air monitoring campaigns.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    )
  },
  {
    title: 'Employee Volunteering & Service',
    desc: 'Align your workforce with meaningful grassroots action. Engage employee cohorts in plantation festivals, plastic clean-up drives, or teaching guest-lectures at our digital literacy labs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
  {
    title: 'Technology & Material Support',
    desc: 'Contribute necessary industrial and technological assets. Sponsor computers, sewing machines, high-capacity water filters, air sensors, or mature sapling protective guards.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    )
  },
  {
    title: 'Long-Term Co-Developed Initiatives',
    desc: 'Co-design custom socio-ecological initiatives tailored to your organization’s mandate. We build custom, long-term roadmaps with continuous reporting and deep community ownership.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
        <line x1="16" y1="8" x2="2" y2="22"/>
        <line x1="17.5" y1="15" x2="9" y2="15"/>
      </svg>
    )
  }
];

const BENEFIT_ITEMS = [
  {
    title: '80G Tax Benefits',
    desc: 'All corporate donations are issued quick, formal tax certificates under Section 80G, maximizing tax deductions.'
  },
  {
    title: 'Comprehensive Audits',
    desc: 'Receive photographic field reports, receipt balance sheets, and impact scorecards ready for corporate audits.'
  },
  {
    title: 'Section 135 Compliance',
    desc: 'Our administrative transparency guarantees zero legal friction for statutory corporate social expenditures.'
  },
  {
    title: 'Public Credibility',
    desc: 'Prominent, tasteful co-branding placement on community water filtration setups, air sensors, and public materials.'
  }
];

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    budgetBracket: '5-20-lakhs',
    focusArea: 'environment',
    intentSummary: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
      
      {/* Premium Hero Header */}
      <section style={{ 
        background: '#1a3a2a', 
        padding: '160px 0 100px', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: 'radial-gradient(circle at 80% 20%, rgba(200, 168, 74, 0.15) 0%, transparent 60%)', 
          pointerEvents: 'none' 
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ color: 'var(--gold-accent)', margin: 0, display: 'inline-block', marginBottom: '16px' }}>CORPORATE SOCIAL RESPONSIBILITY</span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', 
              fontWeight: 400, 
              color: '#ffffff', 
              lineHeight: 1.15, 
              letterSpacing: '-0.02em', 
              marginBottom: '24px',
              maxWidth: '900px'
            }}
          >
            Strategic partnerships for <span className="serif-italic" style={{ color: 'var(--gold-accent)' }}>multi-generational</span> impact.
          </motion.h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '800px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
            CSR & Educational India Foundation welcomes collaboration with organizations, institutions, businesses, and socially responsible partners who share our vision for public welfare and community development. Through CSR partnerships and collaborative initiatives, we aim to support impactful programs in environmental awareness, education, youth empowerment, and social responsibility. We believe collective efforts and responsible partnerships are essential for creating sustainable social impact.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '100px 0 120px', background: 'var(--bg-main)' }}>
        <div className="container">

          {/* Partnership Models Grid */}
          <div style={{ marginBottom: '100px' }} className="cinematic-reveal">
          <h2 style={{ fontSize: '1.75rem', fontWeight: 500, color: 'var(--green-dark)', marginBottom: '36px' }}>CSR Collaboration Models</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '32px' }}>
            {PARTNERSHIP_MODELS.map((model, idx) => (
              <div key={idx} className="card hover-lift" style={{ 
                background: 'var(--bg-card)', 
                border: '1px solid rgba(26,58,42,0.06)', 
                borderRadius: '20px', 
                padding: '32px',
                boxShadow: 'var(--shadow-premium)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'rgba(200, 168, 74, 0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  {model.icon}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--green-dark)' }}>{model.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6 }}>{model.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits Bento Grid */}
        <div style={{ marginBottom: '100px' }} className="cinematic-reveal">
          <div style={{ 
            background: '#1a3a2a', 
            borderRadius: '28px', 
            padding: '60px 48px',
            color: '#11251a',
            boxShadow: 'var(--shadow-premium)'
          }}>
            <div style={{ maxWidth: '600px', marginBottom: '48px' }}>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--green-icon)', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>CREDIBILITY FIRST</span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 400, color: '#11251a', lineHeight: 1.2 }}>Why Corporate CSR Teams Trust Our Foundation</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px' }}>
              {BENEFIT_ITEMS.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--green-icon)', letterSpacing: '0.05em' }}>0{idx + 1} // BENEFITS</div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#11251a' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2-Column Split: Intake Form & Simulated Partners */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '64px', alignItems: 'center' }} className="cinematic-reveal">
          
          {/* Professional Intake Form Card */}
          <div style={{ 
            background: 'var(--bg-card)', 
            borderRadius: '24px', 
            border: '1px solid rgba(26,58,42,0.06)', 
            padding: '48px',
            boxShadow: 'var(--shadow-premium)'
          }}>
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="csr-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 500, color: 'var(--green-dark)', marginBottom: '8px' }}>Strategic Intake Assessment</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '32px' }}>Submit details regarding your organization’s social responsibility mandates, and our CSR director will respond within 24 hours.</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <input
                        required
                        placeholder="Company / Institution Name"
                        value={formData.companyName}
                        onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                        style={{ borderBottom: '1.5px solid rgba(26,58,42,0.15)', borderRadius: '0', padding: '10px 0', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
                      />
                      <input
                        required
                        placeholder="Contact Representative"
                        value={formData.contactName}
                        onChange={e => setFormData({ ...formData, contactName: e.target.value })}
                        style={{ borderBottom: '1.5px solid rgba(26,58,42,0.15)', borderRadius: '0', padding: '10px 0', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <input
                        required
                        type="email"
                        placeholder="Official Corporate Email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        style={{ borderBottom: '1.5px solid rgba(26,58,42,0.15)', borderRadius: '0', padding: '10px 0', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
                      />
                      <input
                        required
                        placeholder="Direct Phone Number"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        style={{ borderBottom: '1.5px solid rgba(26,58,42,0.15)', borderRadius: '0', padding: '10px 0', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--green-icon)', display: 'block', marginBottom: '8px' }}>ANNUAL CSR ALLOCATION</label>
                        <select
                          value={formData.budgetBracket}
                          onChange={e => setFormData({ ...formData, budgetBracket: e.target.value })}
                          style={{
                            borderBottom: '1.5px solid rgba(26,58,42,0.15)',
                            borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: '0',
                            padding: '10px 0', outline: 'none', background: 'transparent'
                          }}
                        >
                          <option value="under-5-lakhs">Under ₹5 Lakhs</option>
                          <option value="5-20-lakhs">₹5 Lakhs - ₹20 Lakhs</option>
                          <option value="20-50-lakhs">₹20 Lakhs - ₹50 Lakhs</option>
                          <option value="above-50-lakhs">Above ₹50 Lakhs</option>
                        </select>
                      </div>

                      <div>
                        <label style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--green-icon)', display: 'block', marginBottom: '8px' }}>PRIMARY ALIGNMENT INTERFERENCE</label>
                        <select
                          value={formData.focusArea}
                          onChange={e => setFormData({ ...formData, focusArea: e.target.value })}
                          style={{
                            borderBottom: '1.5px solid rgba(26,58,42,0.15)',
                            borderTop: 'none', borderLeft: 'none', borderRight: 'none', borderRadius: '0',
                            padding: '10px 0', outline: 'none', background: 'transparent'
                          }}
                        >
                          <option value="environment">Clean Living & Environment</option>
                          <option value="water-sanitation">Water Purity & Sanitation</option>
                          <option value="skill-empowerment">Skill Training & Economic Self-Reliance</option>
                          <option value="family-harmony">Family Cohesion & Social Service</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <textarea
                        required
                        rows="3"
                        placeholder="Brief summary of your strategic partnership intent..."
                        value={formData.intentSummary}
                        onChange={e => setFormData({ ...formData, intentSummary: e.target.value })}
                        style={{ borderBottom: '1.5px solid rgba(26,58,42,0.15)', borderRadius: '0', padding: '10px 0', borderTop: 'none', borderLeft: 'none', borderRight: 'none', resize: 'none' }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-green"
                      style={{
                        marginTop: '12px',
                        padding: '16px',
                        justifyContent: 'center',
                        borderRadius: '12px',
                        fontWeight: 600
                      }}
                    >
                      Submit CSR Assessment
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="csr-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ textAlign: 'center', padding: '24px 0' }}
                >
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '50%',
                    background: 'rgba(31,71,51,0.08)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--green-dark)', marginBottom: '12px' }}>Inquiry Registered Successfully</h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '28px' }}>
                    Thank you for reaching out, <strong style={{ color: 'var(--green-dark)' }}>{formData.contactName}</strong>. A formal receipt summary has been sent to <strong style={{ color: 'var(--green-dark)' }}>{formData.email}</strong>, and our partnership liaison will follow up shortly to coordinate parameters.
                  </p>
                  <button
                    type="button"
                    onClick={() => { setIsSubmitted(false); setFormData({ companyName: '', contactName: '', email: '', phone: '', budgetBracket: '5-20-lakhs', focusArea: 'environment', intentSummary: '' }); }}
                    className="btn-outline-dark"
                    style={{ borderRadius: '12px', padding: '12px 28px' }}
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE: Elegant Typography & Trust Grids */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--green-icon)' }}>STRATEGIC REACH</span>
              <h2 style={{ fontSize: '2rem', color: 'var(--green-dark)', fontWeight: 500, lineHeight: 1.2, marginBottom: '16px' }}>Impact Auditing & ISO Compliance</h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.6 }}>
                Our operations undergo rigorous monthly financial reviews and external third-party inspections. We align each rupee with tangible, photodetail-backed outcomes that represent clear socio-ecological growth.
              </p>
            </div>

            {/* Stylized simulated partner labels grid */}
            <div>
              <h4 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--green-icon)', textTransform: 'uppercase', marginBottom: '24px' }}>CURRENT STRATEGIC SUPPORTERS</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  'Tata Trust CSR Network',
                  'GMR Impact Foundation',
                  'ONGC Civic Green Fund',
                  'SBI Educational Alliance'
                ].map((name, idx) => (
                  <div key={idx} style={{ 
                    border: '1.5px solid rgba(26,58,42,0.08)',
                    borderRadius: '16px',
                    padding: '20px',
                    textAlign: 'center',
                    background: 'var(--bg-card)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    fontFamily: "'Inter', sans-serif",
                    boxShadow: '0 4px 15px rgba(0,0,0,0.01)'
                  }}>
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* Call to Action Section */}
      <section style={{ padding: '100px 0', background: 'var(--bg-section)', borderTop: '1px solid rgba(26,58,42,0.06)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="hover-lift" style={{ 
            background: '#1a3a2a', 
            borderRadius: '28px', 
            padding: '60px 48px', 
            maxWidth: '850px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(17,37,26,0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 10% 90%, rgba(17, 37, 26, 0.06) 0%, transparent 50%)', pointerEvents: 'none' }} />
            <span className="eyebrow" style={{ color: 'var(--green-icon)' }}>CORPORATE OUTREACH</span>
            
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', 
              fontWeight: 400, 
              color: '#11251a', 
              marginBottom: '20px',
              lineHeight: 1.25
            }}>
              Ready to deploy CSR capital?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(17, 37, 26, 0.75)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 36px', fontWeight: 300 }}>
              Speak directly with our Executive Director to structure a transparent, impactful, and ISO-compliant social program for your brand.
            </p>
            <button 
              className="btn-green hover-lift" 
              style={{ 
                background: 'var(--gold-accent)', 
                color: 'var(--green-dark)', 
                fontSize: '0.95rem',
                fontWeight: 600,
                padding: '16px 36px',
                border: 'none',
                boxShadow: '0 8px 25px rgba(200,168,74,0.2)'
              }}
              onMouseEnter={e => {
                e.target.style.background = 'var(--gold-hover)';
                e.target.style.boxShadow = '0 12px 30px rgba(200,168,74,0.3)';
              }}
              onMouseLeave={e => {
                e.target.style.background = 'var(--gold-accent)';
                e.target.style.boxShadow = '0 8px 25px rgba(200,168,74,0.2)';
              }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                document.querySelector('input[placeholder="Company / Institution Name"]')?.focus();
              }}
            >
              Start Strategic Intake
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
