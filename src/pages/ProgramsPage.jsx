import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROGRAMS_DATA = [
  {
    id: 'environmental-awareness',
    title: 'Environmental Awareness & Advocacy',
    category: 'Environment',
    image: '/environment_cleanup.png',
    shortDesc: 'Combatting air pollution in Delhi-NCR and mobilizing citizen networks for sustainable urban living.',
    longDesc: 'Our environmental advocacy focus addresses critical threats to public health in Delhi-NCR. We believe pollution is not just a policy issue, but a civic and moral responsibility. Through active workshops, air-quality monitoring campaigns in schools, and localized green action plans, we empower citizens to lead cleaner, healthier lives.',
    focus: 'Delhi Air Pollution, Water Conservation, Climate Responsibility, Civic Action.',
    metrics: [
      { label: 'Air Monitors Installed', value: '45+ Sites' },
      { label: 'Seminars Conducted', value: '120+' },
      { label: 'Citizen Mobilized', value: '15,000+' }
    ],
    volunteerRoles: ['Campaign Coordinator', 'School Outreach Lead', 'Technical Air Monitor Specialist'],
    fundingNeed: 'Funds support public-school workshops, low-cost outdoor air sensor distribution, and clean-air curriculum printouts.'
  },
  {
    id: 'tree-plantation',
    title: 'Tree Plantation & Clean Living',
    category: 'Environment & Climate',
    image: '/images/environment.png',
    shortDesc: 'Urban forestry, green belt restoration, and community-driven waste management systems.',
    longDesc: 'We restore Delhi\'s denuded green cover and manage community waste cycles through micro-forestry initiatives. Our programs plant native, hardy species that thrive in urban conditions, creating micro-oases of oxygen in congested areas. Alongside planting, we conduct intensive cleaning drives to eliminate plastic waste from public parks.',
    focus: 'Native Sapling Planting, Trash Cleanup Drives, Urban Forestry, Soil Nourishment.',
    metrics: [
      { label: 'Saplings Planted', value: '18,500+' },
      { label: 'Survival Rate', value: '88%' },
      { label: 'Trash Removed', value: '42 Tons' }
    ],
    volunteerRoles: ['Planting Volunteer', 'Cleanup Captain', 'Arborist Assistant'],
    fundingNeed: 'Covers the cost of high-quality organic soil, mature native saplings, and protective tree guards.'
  },
  {
    id: 'water-purity',
    title: 'Water Purity & Sanitation',
    category: 'Health & Hygiene',
    image: '/images/hero_globe.png',
    shortDesc: 'Installing water filtration systems and ensuring dignified sanitation for low-income settlements.',
    longDesc: 'Clean drinking water is a fundamental human right. The foundation partners with local communities to install community water filtration units and distribute bio-sand filters. We pair water infrastructure with sanitation training, ensuring long-term maintenance and reducing waterborne diseases among children.',
    focus: 'Drinking Water Quality, Safe Filtration Systems, Hygiene Education, WASH Audits.',
    metrics: [
      { label: 'Filter Units Installed', value: '72 Sites' },
      { label: 'Daily Water Output', value: '15,000L+' },
      { label: 'Diseases Reduced', value: '64%' }
    ],
    volunteerRoles: ['Sanitation Trainer', 'Filter Installation Tech', 'Water Quality Inspector'],
    fundingNeed: 'Directly funds water purification components, bio-sand filter supplies, and community wash facilities.'
  },
  {
    id: 'skill-training',
    title: 'Skill Training & Livelihood Support',
    category: 'Economic Empowerment',
    image: '/skill_workshop.png',
    shortDesc: 'Vocational training and digital literacy workshops that help youth and women become self-reliant.',
    longDesc: 'Poverty eradication is achieved through self-reliance, not charity. Our Hunar Skill Workshops deliver practical, high-demand technical training in fields like tailoring, basic electronics repair, digital bookkeeping, and coding basics. Upon graduation, trainees are connected to local employers or provided micro-grants to start small businesses.',
    focus: 'Vocational Skills, Women Empowerment, Digital Inclusion, Employment Pipelines.',
    metrics: [
      { label: 'Workshops Conducted', value: '28 Cohorts' },
      { label: 'Employment Rate', value: '76%' },
      { label: 'Average Wage Increase', value: '140%' }
    ],
    volunteerRoles: ['Skills Mentor', 'Guest Lecturer', 'Resume & Career Coach'],
    fundingNeed: 'Funds training equipment (sewing machines, basic computers), training stipends, and certificate courses.'
  },
  {
    id: 'youth-development',
    title: 'Youth & Leadership Development',
    category: 'Education & Youth',
    image: '/blog_skills.png',
    shortDesc: 'Channelling youthful energy into constructive community service and professional preparedness.',
    longDesc: 'Our youth development programs foster leadership, critical thinking, and civic engagement. We believe India\'s youth are the standard-bearers of social change. We organize volunteer clubs, public-speaking circles, and micro-grant challenges where young students can propose and execute local community-betterment projects.',
    focus: 'Civic Responsibility, Public Speaking, Leadership Bootcamps, Service Learning.',
    metrics: [
      { label: 'Youth Leaders Trained', value: '850+' },
      { label: 'Local Projects Funded', value: '34 Projects' },
      { label: 'Mentorship Hours', value: '4,800+' }
    ],
    volunteerRoles: ['Youth Mentor', 'Public Speaking Coach', 'Bootcamp Facilitator'],
    fundingNeed: 'Supports leadership camp facilities, training curriculum development, and youth micro-grants.'
  },
  {
    id: 'family-cultural',
    title: 'Family & Cultural Preservation',
    category: 'Values & Cohesion',
    image: '/family_community.png',
    shortDesc: 'Strengthening family structures, honoring elderly wisdom, and fostering intergenerational harmony.',
    longDesc: 'In a rapidly materializing world, joint family values and elderly wisdom offer essential grounding. The foundation facilitates intergenerational dialogue circles, heritage workshops, and community eldercare support groups. We believe respecting elder guidance and cultivating strong family units builds deep societal stability.',
    focus: 'Eldercare Support, Intergenerational Dialogues, Moral Cohesion, Heritage Preservation.',
    metrics: [
      { label: 'Family Seminars Held', value: '56 Sessions' },
      { label: 'Elders Enrolled', value: '320+' },
      { label: 'Youth Volunteers', value: '450+' }
    ],
    volunteerRoles: ['Eldercare Companion', 'Seminar Facilitator', 'Cultural Storyteller'],
    fundingNeed: 'Underwrites the costs of community assembly spaces, family counseling circles, and heritage storybooks.'
  },
  {
    id: 'community-education',
    title: 'Community Education & Literacy',
    category: 'Education',
    image: '/education_classroom.png',
    shortDesc: 'After-school tutoring, basic literacy initiatives, and moral science classes for children.',
    longDesc: 'Education is the gateway to opportunity. We run Sankalp After-School centers in marginalized neighborhoods to supplement formal schooling. We focus on reading mastery, mathematical fundamentals, and critical reasoning, while instilling timeless values of service, hard work, and mutual respect.',
    focus: 'Literacy and Numeracy, After-School Tutoring, Value Education, Creative Expression.',
    metrics: [
      { label: 'Students Enrolled', value: '1,200+' },
      { label: 'Sankalp Centers', value: '12 Locations' },
      { label: 'Grade Improvements', value: '82%' }
    ],
    volunteerRoles: ['After-School Teacher', 'Math Tutor', 'Reading Buddy'],
    fundingNeed: 'Buys school backpacks, textbooks, whiteboards, classroom supplies, and local teacher salaries.'
  },
  {
    id: 'social-harmony',
    title: 'Social Harmony & Selfless Service',
    category: 'Social Unity',
    image: '/images/community.png',
    shortDesc: 'Eradicating greed and materialism through communal service, collective dining, and dialogue.',
    longDesc: 'Materialism, greed, and ego fragment societies. The foundation conducts intensive social cohesion seminars and community service festivals where individuals from all walks of life work side-by-side. By sharing meals, cleaning neighborhoods together, and participating in selfless service (Seva), we bridge social divisions.',
    focus: 'Selfless Service (Seva), Communal Harmony, anti-materialism dialogue, Unified Action.',
    metrics: [
      { label: 'Harmony Festivals', value: '24 Events' },
      { label: 'Meals Shared Collectively', value: '30,000+' },
      { label: 'Community Dialogues', value: '80+' }
    ],
    volunteerRoles: ['Service Coordinator', 'Communal Dining Volunteer', 'Dialogue Facilitator'],
    fundingNeed: 'Funds neighborhood service materials, collective kitchen ingredients, and harmony campaign materials.'
  }
];

export default function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh' }}>
      
      {/* Premium Hero Header */}
      <section style={{ 
        background: 'var(--green-dark)', 
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
          <span className="eyebrow" style={{ color: 'var(--gold-accent)', margin: 0, display: 'inline-block', marginBottom: '16px' }}>OUR ACTIVE WORK</span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', 
              fontWeight: 400, 
              color: 'var(--bg-main)', 
              lineHeight: 1.15, 
              letterSpacing: '-0.02em', 
              marginBottom: '24px',
              maxWidth: '900px'
            }}
          >
            Initiatives designed for <span className="serif-italic" style={{ color: 'var(--gold-accent)' }}>citizen-led</span> transformation.
          </motion.h1>
          <p style={{ fontSize: '1.15rem', maxWidth: '650px', color: 'rgba(245, 243, 238, 0.8)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
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
                  background: 'rgba(245, 243, 238, 0.95)',
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
                  color: 'var(--gold-accent)',
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
            background: 'var(--green-dark)', 
            borderRadius: '28px', 
            padding: '60px 48px', 
            maxWidth: '850px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(17,37,26,0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 10% 90%, rgba(200,168,74,0.08) 0%, transparent 50%)', pointerEvents: 'none' }} />
            <span className="eyebrow" style={{ color: 'var(--gold-accent)' }}>SUPPORT OUR INITIATIVES</span>
            
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', 
              fontWeight: 400, 
              color: 'var(--bg-main)', 
              marginBottom: '20px',
              lineHeight: 1.25
            }}>
              Ready to drive meaningful impact?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(245,243,238,0.75)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 36px', fontWeight: 300 }}>
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
                  color: '#fff',
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
                  background: 'linear-gradient(to top, var(--bg-main) 15%, rgba(245,243,238,0) 100%)'
                }}></div>
              </div>

              {/* Modal Body */}
              <div style={{ padding: '0 48px 64px' }}>
                
                {/* Category & Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', marginTop: '-20px', position: 'relative', zIndex: 2 }}>
                  <span style={{
                    background: 'var(--green-dark)',
                    color: '#fff',
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
                      background: 'var(--green-dark)', 
                      color: '#fff', 
                      padding: '24px', 
                      borderRadius: '20px', 
                      boxShadow: 'var(--shadow-premium)' 
                    }}>
                      <h4 style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--gold-accent)', textTransform: 'uppercase', marginBottom: '14px' }}>VOLUNTEER POSITIONS</h4>
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
                          color: 'var(--gold-accent)',
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
