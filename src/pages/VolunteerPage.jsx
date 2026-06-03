import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ROLES = [
  {
    id: 'environmental-campaigns',
    title: 'Environmental Awareness Campaigns',
    tag: 'Environment Focus',
    location: 'On-Field',
    desc: 'Support tree planting, pollution awareness drives, and seminars aimed at clean air and water conservation.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 22 22 22" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </svg>
    )
  },
  {
    id: 'educational-initiatives',
    title: 'Educational Initiatives',
    tag: 'Education Focus',
    location: 'Local Centers',
    desc: 'Empower communities through tutoring support, book donation drives, and organizing practical learning sessions.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    )
  },
  {
    id: 'social-outreach',
    title: 'Social Outreach Activities',
    tag: 'Outreach Focus',
    location: 'Community-wide',
    desc: 'Engage in welfare initiatives, health awareness, and promoting social harmony and responsible living.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  },
  {
    id: 'event-coordination',
    title: 'Event Coordination',
    tag: 'Operations Focus',
    location: 'Hybrid',
    desc: 'Help coordinate, organize, and execute local seminars, value-driven workshops, and social programs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    )
  },
  {
    id: 'media-communication',
    title: 'Media & Communication Support',
    tag: 'Creative Focus',
    location: 'Remote/Hybrid',
    desc: 'Create inspiring designs, write social messages, take event photos, and handle communication to spread awareness.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    )
  },
  {
    id: 'community-engagement',
    title: 'Community Engagement Programs',
    tag: 'Relations Focus',
    location: 'On-Field',
    desc: 'Develop deep grassroots connections with local families, promote moral cohesion, and support elderly welfare.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    )
  }
];

const JOURNEY_STEPS = [
  {
    step: '01',
    title: 'Choose a Pillar',
    desc: 'Select a program that matches your unique skills, availability, and community values.'
  },
  {
    step: '02',
    title: 'Apply in Minutes',
    desc: 'Fill out our transparent application form below to share your background and interest.'
  },
  {
    step: '03',
    title: 'Orientation & Align',
    desc: 'Have a brief onboarding call with a coordinator to discuss logistics and expectations.'
  },
  {
    step: '04',
    title: 'Begin Your Seva',
    desc: 'Join your active local cohort on the field to create lasting, verified community change.'
  }
];

const FAQS = [
  {
    question: 'Who can volunteer with the foundation?',
    answer: 'Anyone passionate about selfless community service (Seva), social harmony, and sustainable living! We welcome students, working professionals, homemakers, and retirees. We value consistency, empathy, and a humble willingness to learn.'
  },
  {
    question: 'What is the typical time commitment expected?',
    answer: 'It depends on the role. Regular programs like Sankalp Tutoring request 3 to 5 hours per week to maintain a stable learning environment for the children. Environmental tree planting or sanitation campaigns are organized as flexible weekend projects.'
  },
  {
    question: 'Will I receive training or orientation before going to the field?',
    answer: 'Absolutely. We pair every new volunteer with an experienced cohort leader. You will receive an orientation kit containing field protocols, lesson guides, or sapling care instructions, ensuring you feel completely confident and equipped.'
  },
  {
    question: 'Do volunteers receive a certificate or recognition?',
    answer: 'Yes. Upon completing your designated cohort program or volunteering hours, you will receive an official Certificate of Volunteer Excellence signed by D.C. Arya, Chairperson of the CSR & Educational India Foundation. It represents professional-grade experience in community-led social action.'
  }
];

export default function VolunteerPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: 'environmental-campaigns', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [highlightForm, setHighlightForm] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMsg(true);
      setFormData({ name: '', email: '', phone: '', role: 'tutor', message: '' });
      setTimeout(() => setSuccessMsg(false), 5000);
    }, 1500);
  };

  const handleSelectRole = (roleId) => {
    setFormData(prev => ({ ...prev, role: roleId }));
    setHighlightForm(true);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => {
      setHighlightForm(false);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } }
  };

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* 1. Cinematic Hero Section with Impact Stats */}
      <section style={{ 
        background: '#e6f1e2', 
        padding: '180px 0 110px', 
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Layered Golden and Green Radial Ambient Glows */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          background: 'radial-gradient(circle at 80% 20%, rgba(200, 168, 74, 0.18) 0%, transparent 60%)', 
          pointerEvents: 'none' 
        }} />
        <div style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: '10%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, rgba(38, 82, 60, 0.25) 0%, transparent 70%)', 
          filter: 'blur(50px)',
          pointerEvents: 'none' 
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px' }}>
            <span className="eyebrow" style={{ color: 'var(--green-icon)', margin: 0, display: 'inline-block', marginBottom: '18px', fontWeight: 600 }}>
              JOIN THE GROUND FORCE
            </span>
            <motion.h1 
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif", 
                fontSize: 'clamp(3rem, 6vw, 4.8rem)', 
                fontWeight: 400, 
                color: '#11251a', 
                lineHeight: 1.1, 
                letterSpacing: '-0.02em', 
                marginBottom: '28px' 
              }}
            >
              Become a <span className="serif-italic" style={{ color: 'var(--green-icon)' }}>Volunteer.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: '1.2rem', color: 'rgba(17, 37, 26, 0.8)', lineHeight: 1.8, fontWeight: 300, marginBottom: '0' }}
            >
              Join CSR & Educational India Foundation and contribute towards meaningful social and environmental change. Volunteers play an important role in supporting awareness campaigns, educational activities, seminars, social outreach programs, and community initiatives. Whether you are a student, working professional, educator, or social contributor, your participation can help create positive impact in society.
            </motion.p>
          </div>

          {/* Staggered Entry Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
              gap: '30px', 
              marginTop: '80px', 
              borderTop: '1px solid rgba(255,255,255,0.12)', 
              paddingTop: '50px' 
            }}
            className="hero-stats"
          >
            {[
              { val: '15,000+', lbl: 'Citizens Mobilized' },
              { val: '18,500+', lbl: 'Saplings Planted' },
              { val: '4 Pillars', lbl: 'Active Field Programs' },
              { val: '100%', lbl: 'Selfless Service Driven' }
            ].map((stat, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="serif-italic" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--green-icon)', fontWeight: 400, lineHeight: 1.1 }}>
                  {stat.val}
                </span>
                <span style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(245,243,238,0.65)', marginTop: '8px' }}>
                  {stat.lbl}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Opportunities Grid Section */}
      <section style={{ padding: '120px 0', background: 'var(--bg-main)', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="eyebrow" style={{ color: 'var(--green-icon)', justifyContent: 'center' }}>CHANNELS OF SERVICE</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--green-dark)', fontWeight: 400, marginTop: '8px' }}>
              Where can you <span className="serif-italic" style={{ color: 'var(--green-icon)' }}>create impact?</span>
            </h2>
            <p style={{ maxWidth: '600px', margin: '16px auto 0', color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.6 }}>
              Select a focus area below that resonates with you. Clicking "Apply for this Role" will prepopulate the registration form below.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '32px' 
            }}
            className="opp-grid"
          >
            {ROLES.map((role) => (
              <motion.div 
                key={role.id}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: 'var(--shadow-card-hover)', borderColor: 'rgba(200, 168, 74, 0.3)' }}
                style={{ 
                  background: 'var(--bg-card)', 
                  borderRadius: '24px', 
                  border: '1px solid rgba(26,58,42,0.06)', 
                  padding: '36px',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 10px 30px rgba(26,58,42,0.02)',
                  transition: 'border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Floating ambient corner light */}
                <div style={{ 
                  position: 'absolute', 
                  top: '-50px', 
                  right: '-50px', 
                  width: '120px', 
                  height: '120px', 
                  background: 'radial-gradient(circle, rgba(200,168,74,0.05) 0%, transparent 70%)',
                  pointerEvents: 'none'
                }} />

                {/* Header Icon Block */}
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '16px', 
                  background: 'rgba(31,71,51,0.06)', 
                  color: 'var(--green-dark)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '28px'
                }}>
                  {role.icon}
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--green-dark)', marginBottom: '12px' }}>
                  {role.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '28px', flexGrow: 1 }}>
                  {role.desc}
                </p>

                {/* Badge Capsules */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                  <span style={{ 
                    fontSize: '0.72rem', 
                    fontWeight: 600, 
                    color: 'var(--green-mid)', 
                    background: 'rgba(38,82,60,0.06)', 
                    padding: '6px 12px', 
                    borderRadius: '999px',
                    letterSpacing: '0.02em'
                  }}>
                    {role.tag}
                  </span>
                  <span style={{ 
                    fontSize: '0.72rem', 
                    fontWeight: 600, 
                    color: 'var(--green-icon)', 
                    background: 'rgba(200,168,74,0.08)', 
                    padding: '6px 12px', 
                    borderRadius: '999px',
                    letterSpacing: '0.02em'
                  }}>
                    {role.location}
                  </span>
                </div>

                {/* Direct Action Button */}
                <button 
                  onClick={() => handleSelectRole(role.id)}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '12px',
                    background: 'transparent',
                    border: '1.5px solid rgba(26,58,42,0.12)',
                    color: 'var(--green-dark)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--green-dark)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = 'var(--green-dark)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'var(--green-dark)';
                    e.currentTarget.style.borderColor = 'rgba(26,58,42,0.12)';
                  }}
                >
                  Apply for this Role <span>→</span>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. Step-by-Step Timeline Journey Section */}
      <section style={{ padding: '120px 0', background: 'var(--bg-section)', borderTop: '1px solid rgba(26,58,42,0.06)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="eyebrow" style={{ color: 'var(--green-icon)', justifyContent: 'center' }}>YOUR PATH TO SERVICE</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--green-dark)', fontWeight: 400, marginTop: '8px' }}>
              How onboarding <span className="serif-italic" style={{ color: 'var(--green-icon)' }}>unfolds.</span>
            </h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '40px',
            position: 'relative'
          }} className="timeline-grid">
            
            {/* Timeline connection bar for larger displays */}
            <div style={{ 
              position: 'absolute', 
              top: '40px', 
              left: '40px', 
              right: '40px', 
              height: '1.5px', 
              background: 'linear-gradient(to right, transparent, rgba(200,168,74,0.3) 10%, rgba(200,168,74,0.3) 90%, transparent)',
              zIndex: 1,
              pointerEvents: 'none'
            }} className="timeline-line" />

            {JOURNEY_STEPS.map((step, idx) => (
              <div key={idx} style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  background: 'var(--bg-card)', 
                  border: '2px solid rgba(200, 168, 74, 0.3)',
                  color: 'var(--green-icon)',
                  fontSize: '1.4rem',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 25px rgba(26,58,42,0.03)',
                  marginBottom: '24px'
                }}>
                  {step.step}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--green-dark)', marginBottom: '10px' }}>
                  {step.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.6, maxWidth: '200px', margin: 0 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Cinematic Testimonial Spotlight Section */}
      <section style={{ padding: '120px 0', background: '#e6f1e2', position: 'relative', overflow: 'hidden' }}>
        {/* Abstract glowing elements */}
        <div style={{ 
          position: 'absolute', 
          top: '-10%', 
          left: '50%', 
          transform: 'translateX(-50%)',
          width: '800px', 
          height: '400px', 
          background: 'radial-gradient(circle, rgba(200,168,74,0.08) 0%, transparent 60%)', 
          filter: 'blur(40px)',
          pointerEvents: 'none'
        }} />
        <div style={{ 
          position: 'absolute', 
          bottom: 0, 
          right: '5%', 
          width: '300px', 
          height: '300px', 
          background: 'radial-gradient(circle, rgba(31,71,51,0.3) 0%, transparent 70%)', 
          filter: 'blur(30px)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow" style={{ color: 'var(--green-icon)', justifyContent: 'center' }}>VOLUNTEER VOICES</span>
            
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="rgba(200, 168, 74, 0.4)" strokeWidth="1.5" style={{ marginTop: '24px', marginBottom: '24px' }}>
              <path d="M3 21c3 0 7-1 7-8V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c-.5 2.5-2 4.5-4 5.5v2.5zm11 0c3 0 7-1 7-8V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h3c-.5 2.5-2 4.5-4 5.5v2.5z"/>
            </svg>

            <p style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)', 
              fontWeight: 400, 
              color: '#11251a', 
              lineHeight: 1.5, 
              fontStyle: 'italic',
              marginBottom: '36px' 
            }}>
              "Volunteering with the CSR & Educational India Foundation grounded me. Working with the primary school children at the Sankalp Center reminded me of the profound joy in simple, focused service."
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ fontSize: '1rem', fontWeight: 600, color: '#11251a', letterSpacing: '0.02em' }}>
                Anjali Dev
              </span>
              <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--green-icon)', marginTop: '6px' }}>
                Sankalp Education Volunteer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Split Application Section with Glassmorphic Form */}
      <section ref={formRef} style={{ padding: '120px 0', background: 'var(--bg-main)', position: 'relative' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="cinematic-reveal form-split">
            
            {/* Left Column: Context & Guidelines */}
            <div style={{ paddingRight: '20px' }}>
              <span className="eyebrow" style={{ color: 'var(--green-icon)' }}>THE CORE COHORT</span>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', color: 'var(--green-dark)', fontWeight: 400, marginTop: '8px', marginBottom: '28px' }}>
                Become an active pillar of <span className="serif-italic" style={{ color: 'var(--green-icon)' }}>our grounding mission.</span>
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '40px' }}>
                We believe that systematic transformation is achieved through organic citizen involvement. We do not maintain heavy corporate administration; we trust our localized cohorts to lead change directly on the ground.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {[
                  {
                    t: 'Zero Artificial Dependencies',
                    d: 'We emphasize self-reliance. Our goals focus on leaving communities fully self-sufficient within designated timelines.'
                  },
                  {
                    t: 'Dignity in Partnership',
                    d: 'We support our volunteer networks. You are considered an equal partner in defining program strategy and local deployment.'
                  },
                  {
                    t: 'Official Excellence Recognition',
                    d: 'Every completed program cohort is officially recognized with a Certificate of Volunteer Excellence signed by D.C. Arya, Chairperson, honoring your grassroots leadership.'
                  }
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                    <div style={{ 
                      width: '32px', 
                      height: '32px', 
                      borderRadius: '50%', 
                      background: 'rgba(200, 168, 74, 0.1)', 
                      color: 'var(--green-icon)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: '0.85rem',
                      fontWeight: 600
                    }}>
                      {idx + 1}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--green-dark)', marginBottom: '6px' }}>{item.t}</h4>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.5, margin: 0 }}>{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Premium Glassmorphic Application Form */}
            <div style={{ position: 'relative' }}>
              
              {/* Backing ambient gold glow */}
              <div style={{ 
                position: 'absolute', 
                top: '-30px', 
                left: '-30px', 
                right: '-30px', 
                bottom: '-30px', 
                background: 'radial-gradient(circle, rgba(200,168,74,0.06) 0%, transparent 60%)', 
                filter: 'blur(30px)',
                pointerEvents: 'none'
              }} />

              <motion.div 
                animate={highlightForm ? { 
                  borderColor: 'var(--gold-accent)',
                  boxShadow: '0 0 25px rgba(200, 168, 74, 0.4)',
                  scale: 1.02
                } : { 
                  borderColor: 'rgba(26,58,42,0.06)',
                  boxShadow: 'var(--shadow-premium)',
                  scale: 1
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ 
                  background: 'var(--bg-card)', 
                  borderRadius: '28px', 
                  border: '1.5px solid rgba(26,58,42,0.06)', 
                  padding: '48px',
                  position: 'relative',
                  zIndex: 2
                }}
                className="glassmorphic-card"
              >
                <h3 style={{ fontSize: '1.4rem', fontWeight: 500, color: 'var(--green-dark)', marginBottom: '32px' }}>
                  Register to Join
                </h3>
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <input
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      style={{ 
                        border: 'none', 
                        borderBottom: '1.5px solid rgba(26,58,42,0.15)', 
                        borderRadius: '0', 
                        padding: '12px 0', 
                        background: 'transparent',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s'
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--gold-accent)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(26,58,42,0.15)'}
                    />
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="form-row">
                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      style={{ 
                        border: 'none', 
                        borderBottom: '1.5px solid rgba(26,58,42,0.15)', 
                        borderRadius: '0', 
                        padding: '12px 0', 
                        background: 'transparent',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s'
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--gold-accent)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(26,58,42,0.15)'}
                    />
                    <input
                      required
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      style={{ 
                        border: 'none', 
                        borderBottom: '1.5px solid rgba(26,58,42,0.15)', 
                        borderRadius: '0', 
                        padding: '12px 0', 
                        background: 'transparent',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s'
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--gold-accent)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(26,58,42,0.15)'}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      Area of Interest
                    </label>
                    <select 
                      value={formData.role}
                      onChange={e => setFormData({ ...formData, role: e.target.value })}
                      style={{ 
                        padding: '12px 0', 
                        border: 'none',
                        borderBottom: '1.5px solid rgba(26,58,42,0.15)', 
                        borderRadius: '0', 
                        background: 'transparent', 
                        fontSize: '1rem',
                        color: 'var(--green-dark)',
                        cursor: 'pointer',
                        transition: 'border-color 0.3s'
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--gold-accent)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(26,58,42,0.15)'}
                    >
                      <option value="environmental-campaigns">Environmental Awareness Campaigns</option>
                      <option value="educational-initiatives">Educational Initiatives</option>
                      <option value="social-outreach">Social Outreach Activities</option>
                      <option value="event-coordination">Event Coordination</option>
                      <option value="media-communication">Media & Communication Support</option>
                      <option value="community-engagement">Community Engagement Programs</option>
                      <option value="other">Other specialized role (specify in message)</option>
                    </select>
                  </div>

                  <textarea
                    placeholder="Tell us about your background and why you want to serve..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    style={{ 
                      border: 'none', 
                      borderBottom: '1.5px solid rgba(26,58,42,0.15)', 
                      borderRadius: '0', 
                      padding: '12px 0', 
                      background: 'transparent', 
                      resize: 'vertical',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s'
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--gold-accent)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(26,58,42,0.15)'}
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-green hover-lift"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '18px',
                      borderRadius: '14px',
                      fontSize: '1rem',
                      fontWeight: 600,
                      marginTop: '20px',
                      background: 'var(--green-btn)'
                    }}
                  >
                    {isSubmitting ? 'Submitting Registration...' : 'Submit Application'}
                  </button>

                  <AnimatePresence>
                    {successMsg && (
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        style={{ 
                          background: 'rgba(31,71,51,0.08)', 
                          color: 'var(--green-dark)', 
                          padding: '18px', 
                          borderRadius: '12px',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          textAlign: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          border: '1px solid rgba(31,71,51,0.1)'
                        }}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Registration received! Our cohort leaders will contact you shortly.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Interactive FAQ Accordion Section */}
      <section style={{ padding: '120px 0 140px', background: 'var(--bg-section)', borderTop: '1px solid rgba(26,58,42,0.06)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="eyebrow" style={{ color: 'var(--green-icon)', justifyContent: 'center' }}>HAVE QUESTIONS?</span>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--green-dark)', fontWeight: 400, marginTop: '8px' }}>
              Frequently Asked <span className="serif-italic" style={{ color: 'var(--green-icon)' }}>Queries.</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx} 
                  style={{
                    background: 'var(--bg-card)',
                    borderRadius: '16px',
                    border: '1.5px solid rgba(26,58,42,0.06)',
                    overflow: 'hidden',
                    transition: 'border-color 0.3s'
                  }}
                  onMouseEnter={e => {
                    if (!isOpen) e.currentTarget.style.borderColor = 'rgba(200,168,74,0.2)';
                  }}
                  onMouseLeave={e => {
                    if (!isOpen) e.currentTarget.style.borderColor = 'rgba(26,58,42,0.06)';
                  }}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '24px 30px',
                      background: 'transparent',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'between',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <span style={{ 
                      fontSize: '1.05rem', 
                      fontWeight: 600, 
                      color: 'var(--green-dark)', 
                      flexGrow: 1 
                    }}>
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ color: 'var(--green-icon)', marginLeft: '20px' }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div style={{ 
                          padding: '0 30px 30px', 
                          fontSize: '0.95rem', 
                          color: 'var(--text-body)', 
                          lineHeight: 1.7,
                          borderTop: '1px solid rgba(26,58,42,0.06)',
                          paddingTop: '20px'
                        }}>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Styled Responsive adjustments */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .timeline-line {
            display: none !important;
          }
          .timeline-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .form-split {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
        @media (max-width: 600px) {
          .opp-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .glassmorphic-card {
            padding: 30px 20px !important;
          }
        }
      `}} />
    </div>
  );
}

