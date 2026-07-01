import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MEDIA_ITEMS = [
  {
    id: 0,
    title: 'Pollution Control Measures in Delhi State',
    category: 'seminar',
    date: 'May 2026',
    image: '/images/ngo_policy_meeting.jpg',
    desc: 'Meeting with Sh. Ashok Goel MLA, Model Town, regarding advancing Pollution Control Measures in Delhi.'
  },
  {
    id: 7,
    title: 'Clean Solar Light Distribution Drive',
    category: 'field-work',
    date: 'February 2026',
    image: '/images/solar_light.png',
    desc: 'Distributed over 150 solar-powered home lighting kits in off-grid urban settlements to enhance safety and educational facilities.'
  },
  {
    id: 8,
    title: 'Delhi Youth Environmental Policy Forum',
    category: 'press',
    date: 'April 2026',
    image: '/images/youth_forum.png',
    desc: 'Organized an environmental policy roundtable with 200+ students from Delhi schools, presenting climate action models to municipal leaders.'
  },
];

const PRESS_ITEMS = [
  {
    id: 5,
    title: 'प्रदूषण मुक्त संसार ही स्वस्थ जीवन और विकास का आधार : डी.सी. आर्य',
    subtitle: 'स्मार्ट विजन समाचार • News Report',
    image: '/images/newspaper_clip_4.png',
    desc: 'D.C. Arya addresses the rising pollution challenges, emphasizing that environmental protection and pure air are essential for a healthy life and development.'
  },
  {
    id: 1,
    title: 'Pollution-Free World: Basis of Life & Development',
    subtitle: 'द वुमन न्यूज • News Report',
    image: '/images/newspaper_clip_1.png',
    desc: 'Covering D.C. Arya\'s address on environmental restoration, AQI measures in cities, and the national "Ek Ped Maa Ke Naam" campaign.'
  },
  {
    id: 2,
    title: 'Nature Protection Poster: हम हैं प्रकृति से, प्रकृति से हम',
    subtitle: 'Public Campaign Poster by Tarun Bidani',
    image: '/images/nature_poster.jpg',
    desc: 'A beautiful awareness poster conveying that humanity and nature are mutually dependent, featuring environmental preservation verses.'
  },
  {
    id: 3,
    title: 'Air Quality & Civic Responsibility Editorial',
    subtitle: 'द वुमन न्यूज • Editorial',
    image: '/images/newspaper_clip_2.png',
    desc: 'A focused column detailing the direct impact of air pollution on human health, and recommendations like daily Yajna and planting indigenous trees.'
  },
  {
    id: 4,
    title: 'Plantation & Irrigation Care Column',
    subtitle: 'द वुमन न्यूज • Press Column',
    image: '/images/newspaper_clip_3.png',
    desc: 'Focusing on the importance of not just planting, but regularly watering and caring for trees to ensure high survival rates.'
  }
];


export default function MediaPage() {
  const [filter, setFilter] = useState('all');
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredItems = filter === 'all' 
    ? MEDIA_ITEMS 
    : MEDIA_ITEMS.filter(item => item.category === filter);

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
          <span className="eyebrow" style={{ color: 'var(--gold-accent)', margin: 0, display: 'inline-block', marginBottom: '16px' }}>DOCUMENTARY JOURNALS</span>
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
            Media & Public <span className="serif-italic" style={{ color: 'var(--gold-accent)' }}>Awareness</span>
          </motion.h1>
          <p style={{ fontSize: '1.15rem', maxWidth: '800px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.75, fontWeight: 300, margin: 0 }}>
            Our media section highlights interviews, seminars, awareness campaigns, public discussions, and foundation activities related to environment, education, and social reform. This platform serves as a space to share ideas, inspire awareness, and encourage meaningful conversations for the betterment of society.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '100px 0 120px', background: 'var(--bg-main)' }}>
        <div className="container">

        {/* Chairperson's YouTube Interviews Grid */}
        <div style={{ marginBottom: '80px' }} className="cinematic-reveal">
          <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--green-icon)', textTransform: 'uppercase', display: 'block', marginBottom: '24px' }}>CHAIRPERSON’S INTERVIEWS & BROADCASTS</span>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '40px',
          }} id="youtube-interviews-grid">
            
            {/* Latest Interview: Plastic Ban & Environment Day Address */}
            <div style={{
              background: 'var(--bg-card)',
              borderRadius: '28px',
              border: '1px solid rgba(26,58,42,0.06)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-premium)',
              display: 'flex',
              flexDirection: 'column'
            }} className="hover-lift">
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: '#000' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/x7fPbVxuK3U"
                  title="Plastic Ban: Protection for a Pollution-Free India"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: 'none', display: 'block' }}
                ></iframe>
              </div>
              <div style={{ padding: '32px' }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--green-icon)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>ENVIRONMENT DAY ADDRESS</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 500, color: 'var(--green-dark)', lineHeight: 1.3, marginBottom: '12px' }}>
                  Plastic Ban: A Step Towards pollution-free India
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                  Founder Director D.C. Arya delivers an address on World Environment Day, discussing the critical need for a plastic ban and the regular maintenance and care of newly planted saplings to sustain eco-restoration.
                </p>
              </div>
            </div>

            {/* Interview 1 */}
            <div style={{
              background: 'var(--bg-card)',
              borderRadius: '28px',
              border: '1px solid rgba(26,58,42,0.06)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-premium)',
              display: 'flex',
              flexDirection: 'column'
            }} className="hover-lift">
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: '#000' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/5Eqo64tQ5B4"
                  title="Chairperson D.C. Arya Interview: Air Purity & Civic Action"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: 'none', display: 'block' }}
                ></iframe>
              </div>
              <div style={{ padding: '32px' }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--green-icon)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>MEDIA INTERVIEW</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 500, color: 'var(--green-dark)', lineHeight: 1.3, marginBottom: '12px' }}>
                  Environmental Awareness Discussion
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                  Founder Director DC Arya shares his views on increasing pollution levels, environmental responsibility, public health concerns, and the importance of awareness for protecting future generations.
                </p>
              </div>
            </div>

            {/* Interview 2 */}
            <div style={{
              background: 'var(--bg-card)',
              borderRadius: '28px',
              border: '1px solid rgba(26,58,42,0.06)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-premium)',
              display: 'flex',
              flexDirection: 'column'
            }} className="hover-lift">
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: '#000' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/tE2IGhGd52c"
                  title="Chairperson D.C. Arya Interview: Grassroots Communities"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: 'none', display: 'block' }}
                ></iframe>
              </div>
              <div style={{ padding: '32px' }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--green-icon)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>FIELD DIALOGUE</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 500, color: 'var(--green-dark)', lineHeight: 1.3, marginBottom: '12px' }}>
                  Social & Educational Awareness
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                  Discussions focused on education, social values, youth development, self-reliance, and the importance of building a responsible and value-driven society.
                </p>
              </div>
            </div>

            {/* Interview 3 */}
            <div style={{
              background: 'var(--bg-card)',
              borderRadius: '28px',
              border: '1px solid rgba(26,58,42,0.06)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-premium)',
              display: 'flex',
              flexDirection: 'column'
            }} className="hover-lift">
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: '#000' }}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/QVuNMpHtwvE"
                  title="Chairperson D.C. Arya Interview: CMA's Role in National Economy"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: 'none', display: 'block' }}
                ></iframe>
              </div>
              <div style={{ padding: '32px' }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--green-icon)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>EXECUTIVE ADDRESS</span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 500, color: 'var(--green-dark)', lineHeight: 1.3, marginBottom: '12px' }}>
                  CMA: Backbone of the Economy
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                  Founder Director DC Arya explains how Cost and Management Accountants (CMA) play a vital role in optimizing resource efficiency, ensuring transparency, and driving national development.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Leadership & Policy Initiatives Section */}
        <div style={{ marginTop: '100px' }} className="cinematic-reveal">
          <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--green-icon)', textTransform: 'uppercase', display: 'block', marginBottom: '24px' }}>
            LEADERSHIP & POLICY ALIGNMENT
          </span>
          
          <div style={{
            background: 'linear-gradient(145deg, #1a3a2a 0%, #26523c 100%)',
            borderRadius: '36px',
            border: '1px solid rgba(200, 168, 74, 0.2)',
            boxShadow: 'var(--shadow-premium)',
            overflow: 'hidden',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '56px',
            padding: '56px',
            alignItems: 'center',
            position: 'relative'
          }} className="hover-lift">
            
            {/* Atmospheric Background Ambient Glows */}
            <div style={{
              position: 'absolute',
              top: '-20%',
              left: '-20%',
              width: '60%',
              height: '60%',
              background: 'radial-gradient(circle, rgba(200, 168, 74, 0.05) 0%, transparent 70%)',
              pointerEvents: 'none',
              filter: 'blur(50px)'
            }} />
            
            {/* Left Column: Clearly Visible Image with executive crop that hides casual dining items at the bottom */}
            <div style={{
              width: '100%',
              height: '560px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              border: '1px solid rgba(200, 168, 74, 0.25)',
              backgroundColor: '#1a3a2a',
              position: 'relative'
            }}>
              <img 
                src="/images/ashok_goel_meeting.jpg" 
                alt="Meeting with Sh Ashok Goel MLA" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 8%', // Crops out the casual dining table at the bottom and focuses on the faces and the paper!
                  display: 'block',
                  transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="executive-photo"
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, transparent 70%, rgba(17,37,27,0.15) 100%)',
                pointerEvents: 'none'
              }} />
            </div>
            
            {/* Right Column: Premium Text Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', position: 'relative', zIndex: 2 }}>
              <div>
                <span style={{ 
                  fontSize: '0.8rem', 
                  color: '#ffffff', 
                  fontWeight: 600, 
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '12px'
                }}>
                  Official Policy Convening • Delhi State
                </span>
                <h2 style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(2rem, 3vw, 2.6rem)',
                  fontWeight: 400, 
                  color: '#ffffff', 
                  lineHeight: 1.2,
                  margin: 0,
                  letterSpacing: '-0.01em'
                }}>
                  Pollution Control <br />
                  <span className="serif-italic" style={{ color: 'var(--gold-accent)' }}>Measures</span> in Delhi State
                </h2>
              </div>
              
              <div style={{ 
                height: '1px', 
                width: '80px', 
                background: '#ffffff',
                opacity: 0.8 
              }} />
              
              <p style={{ 
                fontSize: '1.08rem', 
                color: 'rgba(255, 255, 255, 0.85)', 
                lineHeight: 1.75,
                fontWeight: 300,
                margin: 0
              }}>
                A high-level consultative meeting was held with <strong>Sh. Ashok Goel, Honorable MLA from Model Town, New Delhi</strong>, to address and advance key environmental policy frameworks and active pollution control measures across Delhi State.
              </p>

              <p style={{ 
                fontSize: '0.94rem', 
                color: 'rgba(255, 255, 255, 0.72)', 
                lineHeight: 1.7,
                fontWeight: 300,
                margin: 0
              }}>
                The discussion focused on regional grassroots mobilization, implementation of modern filtration mechanisms, and fostering public-private-civic synergies to combat environmental degradation in high-risk zones. The alignment ensures a consolidated front for policy implementation, civic engagement, and actionable reforms.
              </p>
              
              {/* Highlight Points */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '16px',
                marginTop: '8px'
              }}>
                {[
                  'Civic-State Coordination',
                  'Targeted Local Actions',
                  'Policy Recommendations',
                  'Citizen-Led Air Audits'
                ].map((point, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'var(--green-icon)'
                    }} />
                    <span style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 500 }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Quote from Meeting */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.04)',
                borderLeft: '4px solid var(--gold-accent)',
                padding: '20px 24px',
                borderRadius: '0 20px 24px 0',
                marginTop: '12px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderLeftWidth: '4px'
              }}>
                <p style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: 'italic', 
                  fontSize: '1.05rem', 
                  color: 'var(--gold-accent)', 
                  margin: 0,
                  lineHeight: 1.6,
                  fontWeight: 300
                }}>
                  Collaborative action between state representatives and community leadership is the cornerstone of sustainable environmental restoration.
                </p>
              </div>
            </div>
            
          </div>
        </div>

        {/* Greetings Section */}
        <div style={{ marginTop: '100px', textAlign: 'center' }} className="cinematic-reveal">
          <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--green-icon)', textTransform: 'uppercase', display: 'block', marginBottom: '24px' }}>
            GREETINGS & WISHES
          </span>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px 0'
          }}>
            <div 
              style={{
                maxWidth: '420px',
                width: '90%',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-premium)',
                border: '1px solid rgba(26, 58, 42, 0.1)',
                cursor: 'pointer',
                position: 'relative',
                transition: 'transform 0.4s ease'
              }}
              className="hover-lift press-card"
              onClick={() => setSelectedImg({
                id: 201,
                title: 'Heartiest Congratulations & Good Wishes',
                subtitle: 'Special Occasions',
                image: '/images/greetings.jpg',
                desc: 'Extending warm greetings on Chartered Accountants Day, GST Day, Doctors Day, National Postal Workers Day, International Joke Day, Van Mahotsav Week, and Happy SBI Day.'
              })}
            >
              <img 
                src="/images/greetings.jpg" 
                alt="Greetings & Wishes" 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
              <div className="expand-overlay" style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(26, 58, 42, 0.4)',
                opacity: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.3s ease',
                backdropFilter: 'blur(3px)'
              }}>
                <span style={{
                  background: 'var(--gold-accent)',
                  color: 'var(--green-dark)',
                  padding: '10px 20px',
                  borderRadius: '30px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  boxShadow: '0 4px 15px rgba(200,168,74,0.3)'
                }}>
                  VIEW FULL POSTER
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Press Coverage & Publications Section */}
        <div style={{ marginTop: '100px' }} className="cinematic-reveal">
          <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--green-icon)', textTransform: 'uppercase', display: 'block', marginBottom: '24px' }}>
            PRESS COVERAGE & PUBLICATIONS
          </span>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
          }} id="press-coverage-grid">
            {PRESS_ITEMS.map((item) => (
              <div 
                key={item.id}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: '24px',
                  border: '1px solid rgba(26,58,42,0.06)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-premium)',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer'
                }}
                className="hover-lift press-card"
                onClick={() => setSelectedImg(item)}
              >
                <div style={{ 
                  width: '100%', 
                  aspectRatio: '4/3', 
                  overflow: 'hidden', 
                  background: '#1a3a2a',
                  position: 'relative'
                }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      display: 'block',
                      transition: 'transform 0.5s ease'
                    }}
                    className="press-thumb-img"
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(17,37,26,0.3) 100%)',
                    pointerEvents: 'none'
                  }} />
                  {/* Click to expand overlay */}
                  <div className="expand-overlay" style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(26, 58, 42, 0.4)',
                    opacity: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'opacity 0.3s ease',
                    backdropFilter: 'blur(3px)'
                  }}>
                    <span style={{
                      color: '#ffffff',
                      background: 'var(--gold-accent)',
                      color: 'var(--green-dark)',
                      padding: '10px 20px',
                      borderRadius: '30px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      letterSpacing: '0.05em',
                      boxShadow: '0 4px 15px rgba(200,168,74,0.3)'
                    }}>
                      VIEW FULL IMAGE
                    </span>
                  </div>
                </div>
                
                <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--gold-accent)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      {item.subtitle}
                    </span>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 500, color: 'var(--green-dark)', lineHeight: 1.3, marginBottom: '12px' }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        </div>
      </section>

      {/* Stay Updated Call to Action Section */}
      <section style={{ padding: '100px 0', background: 'var(--bg-section)', borderTop: '1px solid rgba(26,58,42,0.06)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="hover-lift" style={{ 
            background: '#1a3a2a', 
            borderRadius: '28px', 
            padding: '60px 48px', 
            maxWidth: '850px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(17,37,26,0.05)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at 10% 90%, rgba(17, 37, 26, 0.06) 0%, transparent 50%)', pointerEvents: 'none' }} />
            <span className="eyebrow" style={{ color: 'var(--gold-accent)' }}>STAY INFORMED</span>
            
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', 
              fontWeight: 400, 
              color: '#ffffff', 
              marginBottom: '20px',
              lineHeight: 1.25
            }}>
              Want to follow our journey?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 36px', fontWeight: 300 }}>
              Subscribe to our monthly journal to receive field-reports, transparency audits, and inspiring stories directly from the communities we serve.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', maxWidth: '480px', margin: '0 auto' }} className="journal-subscribe-row">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                style={{ 
                  flexGrow: 1, 
                  background: '#ffffff', 
                  border: '1px solid rgba(17, 37, 26, 0.15)', 
                  color: '#11251a', 
                  borderRadius: '999px',
                  padding: '16px 24px'
                }} 
              />
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
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        #youtube-interviews-grid {
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
        }
        @media (max-width: 900px) {
          #youtube-interviews-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 600px) {
          .journal-subscribe-row {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .journal-subscribe-row input, .journal-subscribe-row button {
            width: 100% !important;
          }
        }
        .press-card:hover .press-thumb-img {
          transform: scale(1.05);
        }
        .press-card:hover .expand-overlay {
          opacity: 1;
        }
      `}</style>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
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
              background: 'rgba(13, 26, 18, 0.95)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px'
            }}
            onClick={() => setSelectedImg(null)}
          >
            {/* Close Button */}
            <button
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                color: '#ffffff',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                transition: 'background 0.3s'
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null);
              }}
            >
              ✕
            </button>

            {/* Lightbox Image Container */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              style={{
                position: 'relative',
                maxWidth: '90%',
                maxHeight: '85vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.image}
                alt={selectedImg.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '75vh',
                  borderRadius: '16px',
                  boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                  objectFit: 'contain'
                }}
              />
              <div style={{ marginTop: '20px', textAlign: 'center', color: '#ffffff' }}>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '1.25rem', fontWeight: 500, fontFamily: "'Playfair Display', Georgia, serif" }}>
                  {selectedImg.title}
                </h4>
                <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                  {selectedImg.subtitle}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
