import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROGRAMS_DATA = [
  {
    id: 'environmental-awareness',
    title: 'Environmental Awareness Seminars',
    category: 'Environment',
    image: '/environment_cleanup.png',
    shortDesc: 'The foundation organizes seminars and awareness campaigns focused on pollution control, environmental responsibility, public health, and sustainable living.',
    longDesc: 'Our Environmental Awareness Seminars are designed to address critical issues of air and water pollution, conservation, and health. We actively conduct awareness sessions, community discussions, and distribute practical guides to promote green living and sustainable habits across schools, resident associations, and public spaces.',
    focus: 'Pollution Control, Environmental Responsibility, Public Health, Sustainable Living.',
    metrics: [
      { label: 'Seminars Conducted', value: '—' },
      { label: 'Participants Reached', value: '—' }
    ],
    volunteerRoles: ['Seminar Coordinator', 'Community Outreach Lead', 'Environmental Educator'],
    fundingNeed: 'Funds support educational materials, seminar venue organization, and awareness brochures.'
  },
  {
    id: 'educational-initiatives',
    title: 'Educational Initiatives',
    category: 'Education',
    image: '/education_classroom.png',
    shortDesc: 'We support programs that encourage learning, awareness, practical education, and knowledge sharing for individuals and communities.',
    longDesc: 'Education is the cornerstone of societal development. We partner with local institutions to run supplementary educational support sessions, distribute books and study aids, and emphasize value-driven learning that empowers both the mind and the character of students.',
    focus: 'Practical Learning, Character Building, Student Empowerment, Knowledge Sharing.',
    metrics: [
      { label: 'Students Enrolled', value: '—' },
      { label: 'Support Centers', value: '—' }
    ],
    volunteerRoles: ['After-School Educator', 'Reading Mentor', 'Curriculum Assistant'],
    fundingNeed: 'Covers costs of school supplies, books, learning aids, and classroom organization.'
  },
  {
    id: 'skill-development',
    title: 'Skill Development Programs',
    category: 'Skills & Livelihood',
    image: '/skill_workshop.png',
    shortDesc: 'The foundation promotes vocational and professional training initiatives aimed at improving employability and self-reliance.',
    longDesc: 'We believe true empowerment is built upon self-reliance. Our vocational training focus is dedicated to delivering professional and technical skills—ranging from digital literacy to vocational crafts—which help youth and women secure local employment or launch self-sustained initiatives.',
    focus: 'Vocational Training, Digital Literacy, Professional Readiness, Economic Self-Reliance.',
    metrics: [
      { label: 'Vocational Cohorts', value: '—' },
      { label: 'Self-Reliant Graduates', value: '—' }
    ],
    volunteerRoles: ['Vocational Trainer', 'Resume Coach', 'Tech Skills Instructor'],
    fundingNeed: 'Covers training equipment, digital tools, certifications, and career counseling sessions.'
  },
  {
    id: 'community-outreach',
    title: 'Community Outreach Activities',
    category: 'Community Outreach',
    image: '/family_community.png',
    shortDesc: 'We engage with communities through awareness drives, social initiatives, discussions, and collaborative programs that encourage positive social impact.',
    longDesc: 'Our community outreach programs bring together individuals, resident welfare groups, and local leaders to collaborate on community-led challenges. From health and hygiene drives to eldercare assistance, we foster family harmony, ethical values, and mutual support across all neighborhoods.',
    focus: 'Social Harmony, Family Values, Eldercare Assistance, Collaborative Action.',
    metrics: [
      { label: 'Outreach Drives', value: '—' },
      { label: 'Communities Served', value: '—' }
    ],
    volunteerRoles: ['Community Coordinator', 'Eldercare Assistant', 'Event Organizer'],
    fundingNeed: 'Underwrites costs of local gatherings, outreach materials, health resources, and neighborhood campaign tools.'
  }
];

export default function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
      
      {/* Premium Hero Header */}
      <section style={{ 
        background: '#e6f1e2', 
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
          <span className="eyebrow" style={{ color: 'var(--green-icon)', margin: 0, display: 'inline-block', marginBottom: '16px' }}>OUR ACTIVE WORK</span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', 
              fontWeight: 400, 
              color: '#11251a', 
              lineHeight: 1.15, 
              letterSpacing: '-0.02em', 
              marginBottom: '24px',
              maxWidth: '900px'
            }}
          >
            Initiatives designed for <span className="serif-italic" style={{ color: 'var(--green-icon)' }}>citizen-led</span> transformation.
          </motion.h1>
          <p style={{ fontSize: '1.15rem', maxWidth: '650px', color: 'rgba(17, 37, 26, 0.8)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
            The CSR & Educational India Foundation addresses pressing societal, environmental, and cultural challenges through transparent, structured, and grassroots-driven actions.
          </p>
        </div>
      </section>

      {/* Programs Content */}
      <section style={{ padding: '100px 0 120px', background: 'var(--bg-main)' }}>
        <div className="container">
          {/* Programs Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '40px'
          }} className="cinematic-reveal">
          {PROGRAMS_DATA.map((prog, index) => (
            <motion.div
              key={prog.id}
              onClick={() => setSelectedProgram(prog)}
              className="card hover-lift"
              style={{
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                overflow: 'hidden',
                padding: 0,
                borderRadius: '24px',
                background: 'var(--bg-card)',
                boxShadow: 'var(--shadow-premium)',
                height: '100%',
                border: '1px solid rgba(26,58,42,0.06)'
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Card Image */}
              <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={prog.image}
                  alt={prog.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  className="prog-card-img"
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(230, 241, 226, 0.95)',
                  padding: '6px 14px',
                  borderRadius: '999px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--green-dark)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                  backdropFilter: 'blur(4px)'
                }}>
                  {prog.category}
                </div>
              </div>

              {/* Card Content */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: 'var(--green-dark)',
                  lineHeight: 1.3,
                  marginBottom: '12px'
                }}>
                  {prog.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-body)',
                  lineHeight: 1.6,
                  marginBottom: '24px',
                  flexGrow: 1
                }}>
                  {prog.shortDesc}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '0.88rem',
                  color: 'var(--green-icon)',
                  fontWeight: 500
                }}>
                  Explore Program Details <span>→</span>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section style={{ padding: '100px 0', background: 'var(--bg-section)', borderTop: '1px solid rgba(26,58,42,0.06)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="hover-lift" style={{ 
            background: '#e6f1e2', 
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
            <span className="eyebrow" style={{ color: 'var(--green-icon)' }}>SUPPORT OUR INITIATIVES</span>
            
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', 
              fontWeight: 400, 
              color: '#11251a', 
              marginBottom: '20px',
              lineHeight: 1.25
            }}>
              Ready to drive meaningful impact?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(17, 37, 26, 0.75)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 36px', fontWeight: 300 }}>
              Join us in executing these programs on the ground by volunteering your time, or support the deployment of critical resources through a donation.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
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
              >
                Volunteer With Us
              </button>
              <button 
                className="btn-outline-dark hover-lift" 
                style={{ 
                  borderColor: 'rgba(255,255,255,0.3)', 
                  color: '#11251a',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  padding: '16px 36px',
                }}
                onMouseEnter={e => {
                  e.target.style.background = 'rgba(255,255,255,0.1)';
                  e.target.style.borderColor = 'rgba(255,255,255,0.5)';
                }}
                onMouseLeave={e => {
                  e.target.style.background = 'transparent';
                  e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                }}
              >
                Make a Donation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Slide-Up In-Page Details Modal */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 2000,
              background: 'rgba(26, 58, 42, 0.4)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center'
            }}
            onClick={() => setSelectedProgram(null)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              style={{
                width: '100%',
                maxWidth: '900px',
                height: '90vh',
                background: 'var(--bg-main)',
                borderTopLeftRadius: '32px',
                borderTopRightRadius: '32px',
                overflowY: 'auto',
                boxShadow: '0 -20px 60px rgba(0,0,0,0.15)',
                position: 'relative'
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProgram(null)}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(26,58,42,0.06)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  transition: 'background 0.3s'
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(26,58,42,0.12)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(26,58,42,0.06)'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {/* Modal Cover Image */}
              <div style={{ width: '100%', height: '320px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '140px',
                  background: 'linear-gradient(to top, var(--bg-main) 15%, rgba(230, 241, 226, 0) 100%)'
                }}></div>
              </div>

              {/* Modal Body */}
              <div style={{ padding: '0 48px 64px' }}>
                
                {/* Category & Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', marginTop: '-20px', position: 'relative', zIndex: 2 }}>
                  <span style={{
                    background: '#e6f1e2',
                    color: '#11251a',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '6px 14px',
                    borderRadius: '999px'
                  }}>
                    {selectedProgram.category}
                  </span>
                </div>

                <h2 style={{
                  fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                  color: 'var(--green-dark)',
                  fontWeight: 500,
                  lineHeight: 1.2,
                  marginBottom: '28px',
                  maxWidth: '700px'
                }}>
                  {selectedProgram.title}
                </h2>

                {/* Grid Split Content */}
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px', alignItems: 'start' }}>
                  
                  {/* Left Column Description */}
                  <div>
                    <h4 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--green-icon)', textTransform: 'uppercase', marginBottom: '12px' }}>PROGRAM STATEMENT</h4>
                    <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '32px' }}>
                      {selectedProgram.longDesc}
                    </p>

                    <h4 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--green-icon)', textTransform: 'uppercase', marginBottom: '12px' }}>CORE FOCUS CHANNELS</h4>
                    <p style={{ fontSize: '0.98rem', color: 'var(--green-dark)', fontWeight: 500, marginBottom: '32px' }}>
                      {selectedProgram.focus}
                    </p>

                    <h4 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--green-icon)', textTransform: 'uppercase', marginBottom: '12px' }}>TRANSPARENT FUNDING USAGE</h4>
                    <div style={{ 
                      background: 'rgba(200, 168, 74, 0.06)', 
                      borderLeft: '4px solid var(--gold-accent)', 
                      padding: '20px', 
                      borderRadius: '8px',
                      fontSize: '0.92rem',
                      color: 'var(--text-body)',
                      lineHeight: 1.6
                    }}>
                      {selectedProgram.fundingNeed}
                    </div>
                  </div>

                  {/* Right Column Side Panel */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
                    
                    {/* Impact Numbers */}
                    <div>
                      <h4 style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--green-icon)', textTransform: 'uppercase', marginBottom: '20px' }}>KEY METRICS</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {selectedProgram.metrics.map((m, idx) => (
                          <div key={idx} style={{ 
                            background: 'var(--bg-card)', 
                            border: '1px solid rgba(26,58,42,0.06)', 
                            padding: '16px 20px', 
                            borderRadius: '16px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
                          }}>
                            <div style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--green-dark)', marginBottom: '4px' }}>{m.value}</div>
                            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Volunteer Roles */}
                    <div style={{ 
                      background: '#e6f1e2', 
                      color: '#11251a', 
                      padding: '24px', 
                      borderRadius: '20px', 
                      boxShadow: 'var(--shadow-premium)' 
                    }}>
                      <h4 style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--green-icon)', textTransform: 'uppercase', marginBottom: '14px' }}>VOLUNTEER POSITIONS</h4>
                      <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.85rem' }}>
                        {selectedProgram.volunteerRoles.map((role, idx) => (
                          <li key={idx} style={{ color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter', sans-serif" }}>{role}</li>
                        ))}
                      </ul>
                      <a 
                        href="/contact?interest=volunteer"
                        onClick={() => setSelectedProgram(null)}
                        style={{
                          display: 'inline-flex',
                          marginTop: '20px',
                          color: 'var(--green-icon)',
                          textDecoration: 'none',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        Apply to Volunteer <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .prog-card-img:hover {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          #selectedProgram-dialog {
            padding: 0 20px 48px !important;
          }
          #selectedProgram-dialog > div {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}
