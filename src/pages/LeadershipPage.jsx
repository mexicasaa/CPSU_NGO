import { motion } from 'framer-motion';

export default function LeadershipPage() {
  const leaders = [
    {
      name: "Sh Bajrang Bagra",
      role: "Chairman",
      bio: "He served as the former Chairman and Managing Director (CMD) of the public sector undertaking, National Aluminium Company Limited (NALCO), and is the General Secretary (Mahamantri) of the Vishva Hindu Parishad (VHP).",
      image: "/images/Bajrang Lal Bagra.jpg",
      linkedin: "https://linkedin.com",
      email: "contact@csreduindia.org"
    },
    {
      name: "Sh D C Arya",
      role: "Founder & Secretary",
      bio: "A visionary leader dedicated to environmental awareness, education, and social responsibility. He has actively served as an elected Council Member and Former Chairman of the NIRC of the Institute of Cost Accountants of India (ICMAI).",
      image: "/dc_arya_suit_v3.jpg",
      linkedin: "https://linkedin.com",
      email: "dcarya@csreduindia.org"
    },
    {
      name: "Sh H N Sharma",
      role: "Director",
      bio: "He served as the trusted political secretary and advisor to the former Prime Minister of India, Chandra Shekhar, bringing decades of high-level social, political, and administrative expertise to the foundation.",
      image: "/images/HN Sharma.png",
      linkedin: "https://linkedin.com",
      email: "hnsharma@csreduindia.org"
    },
    {
      name: "Sh Atul Gupta",
      role: "Director",
      bio: "He served as the President of the Institute of Chartered Accountants of India (ICAI) for the 2020–21 term and has served on multiple high-level government advisory bodies, including the Government Accounting Standards Advisory Board (GASAB) and the Audit Advisory Board.",
      image: "/images/Atul Gupta.jpg",
      linkedin: "https://linkedin.com",
      email: "contact@csreduindia.org"
    },
    {
      name: "Sh Balwinder Singh",
      role: "Director",
      bio: "He served as the President of the Institute of Cost Accountants of India (ICMAI). He regularly interfaces with senior union ministries and regulatory bodies in India to advocate for Cost Accountants in national audits and CSR spending social audits.",
      image: "/images/Dr. Bawindar Singh.jpg",
      linkedin: "https://linkedin.com",
      email: "contact@csreduindia.org"
    },
    {
      name: "Sh C S Nanda",
      role: "Director",
      bio: "He serves as the 73rd President of the Institute of Chartered Accountants of India (ICAI) for the 2025–26 term. He actively supports Indian regulatory bodies, serving as a Board Member of IRDAI and a member of SEBI's Primary Market Advisory Committee.",
      image: "/images/CS Nanda.jpg",
      linkedin: "https://linkedin.com",
      email: "contact@csreduindia.org"
    },
    {
      name: "Sh A K Tiwari",
      role: "Director",
      bio: "He served as the former Director (Finance) & Chief Financial Officer (CFO). Appointed to this board-level position on December 1, 2018, he oversaw corporate financial strategy, investor relations, and overall fiscal management.",
      image: "/images/A K Tiwari.png",
      linkedin: "https://linkedin.com",
      email: "contact@csreduindia.org"
    },
    {
      name: "Sh Y P Bhola",
      role: "Director",
      bio: "A distinguished corporate leader who served as the Director of Finance at National Fertilizers Limited (NFL), a prominent Navratna CPSE under the Government of India, culminating a distinguished corporate career spanning nearly four decades.",
      image: "/images/Y P Bhola.jpg",
      linkedin: "https://linkedin.com",
      email: "ypbhola@csreduindia.org"
    },
    {
      name: "Sh Subhash Agrawal",
      role: "Director",
      bio: "A renowned RTI activist who previously served as a Director of Finance for the Cement Corporation of India, combining corporate financial governance with strong advocacy for organizational transparency and accountability.",
      image: "/images/Subhash C Agrawal.jpg",
      linkedin: "https://linkedin.com",
      email: "subhashagrawal@csreduindia.org"
    },
    {
      name: "Sh Sunil Singh",
      role: "Director",
      bio: "He has held major leadership positions within the Northern India Regional Council of the Institute of Cost Accountants of India (ICMAI), notably serving consecutive terms as the Chairman of NIRC-ICMAI (2017–18 and 2018–19).",
      image: "/images/Sunil Singh.jpg",
      linkedin: "https://linkedin.com",
      email: "contact@csreduindia.org"
    },
    {
      name: "Vinod Chittora",
      role: "Director",
      bio: "A prominent member of the Institute of Cost Accountants of India (ICMAI) who has actively served the profession as the Past Chairman of the Jaipur Chapter of ICMAI.",
      image: "/images/Vinod Chittora.jpg",
      linkedin: "https://linkedin.com",
      email: "contact@csreduindia.org"
    }
  ];

  const advisors = [
    {
      name: "Neeraj Kumar Pandey",
      role: "Member",
      bio: "An esteemed advisory board member providing strategic guidance and expertise to further the foundation's impactful initiatives.",
      image: "https://ui-avatars.com/api/?name=Neeraj+Kumar+Pandey&background=1a3a2a&color=fff&size=256"
    },
    {
      name: "Cheatan Sharama",
      role: "Member",
      bio: "An esteemed advisory board member providing strategic guidance and expertise to further the foundation's impactful initiatives.",
      image: "https://ui-avatars.com/api/?name=Cheatan+Sharama&background=1a3a2a&color=fff&size=256"
    },
    {
      name: "Parveen Sethi",
      role: "Member",
      bio: "An esteemed advisory board member providing strategic guidance and expertise to further the foundation's impactful initiatives.",
      image: "https://ui-avatars.com/api/?name=Parveen+Sethi&background=1a3a2a&color=fff&size=256"
    }
  ];

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
          <span className="eyebrow" style={{ color: 'var(--gold-accent)', margin: 0, display: 'inline-block', marginBottom: '16px' }}>CSR & EDUCATIONAL INDIA FOUNDATION</span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', 
              fontWeight: 400, 
              color: '#ffffff', 
              lineHeight: 1.15, 
              letterSpacing: '-0.02em', 
              marginBottom: '24px' 
            }}
          >
            Our Leadership Team
          </motion.h1>
          <p style={{ fontSize: '1.15rem', maxWidth: '650px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.7, fontWeight: 300, margin: 0 }}>
            Meet the systematic, passionate minds organizing our ground efforts to build long-term dignified self-reliance.
          </p>
        </div>
      </section>

      {/* Leadership Bio Grid */}
      <section style={{ padding: '100px 0 120px', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="eyebrow" style={{ color: 'var(--green-icon)', display: 'inline-block', marginBottom: '12px' }}>CORE LEADERSHIP</span>
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
              fontWeight: 400, 
              color: 'var(--green-dark)', 
              lineHeight: 1.2,
              margin: 0
            }}>
              Core Team
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--gold-accent)', margin: '24px auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }} className="leaders-grid">
            {leaders.map((leader, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="card hover-lift"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'row', 
                  gap: '28px', 
                  background: '#ffffff', 
                  padding: '32px', 
                  borderRadius: '24px', 
                  border: '1px solid rgba(26, 58, 42, 0.06)', 
                  alignItems: 'flex-start',
                  boxShadow: '0 10px 30px rgba(26,58,42,0.01)'
                }}
              >
                <div style={{ 
                  width: 140, 
                  height: 160, 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  flexShrink: 0, 
                  background: 'var(--bg-section)',
                  boxShadow: '0 4px 15px rgba(26,58,42,0.05)'
                }}>
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      objectPosition: leader.image.includes('dc_arya') ? 'top' : 'center',
                      filter: 'grayscale(100%)',
                      transition: 'filter 0.5s ease, transform 0.5s ease'
                    }} 
                    className="leader-img"
                  />
                </div>
                <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '4px' }}>
                      <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.45rem', fontWeight: 400, color: 'var(--green-dark)', margin: 0 }}>
                        {leader.name}
                      </h3>
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--green-icon)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '14px' }}>
                      {leader.role}
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6, margin: '0 0 16px 0', fontWeight: 300 }}>
                      {leader.bio}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Youth Icon Spotlight Section */}
      <section style={{ 
        padding: '120px 0', 
        background: 'linear-gradient(135deg, #1a3a2a 0%, #26523c 100%)', 
        color: '#11251a',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(200, 168, 74, 0.2)',
        borderBottom: '1px solid rgba(200, 168, 74, 0.2)'
      }}>
        {/* Decorative Golden Radials */}
        <div style={{ 
          position: 'absolute', 
          top: '-20%', 
          right: '-10%', 
          width: '600px', 
          height: '600px', 
          background: 'radial-gradient(circle, rgba(200, 168, 74, 0.1) 0%, transparent 70%)', 
          pointerEvents: 'none' 
        }} />
        <div style={{ 
          position: 'absolute', 
          bottom: '-30%', 
          left: '-10%', 
          width: '600px', 
          height: '600px', 
          background: 'radial-gradient(circle, rgba(200, 168, 74, 0.08) 0%, transparent 70%)', 
          pointerEvents: 'none' 
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="eyebrow" style={{ color: '#a57c1d', display: 'inline-block', marginBottom: '12px' }}>DISTINGUISHED RECOGNITION</span>
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
              fontWeight: 400, 
              color: '#11251a', 
              lineHeight: 1.2,
              margin: 0
            }}>
              Youth Icon of the Foundation
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--gold-accent)', margin: '24px auto 0' }} />
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(12, 1fr)', 
            gap: '48px', 
            alignItems: 'start' 
          }} className="youth-icon-grid">
            
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ gridColumn: 'span 5', position: 'sticky', top: '100px' }}
              className="youth-img-col"
            >
              <div className="hover-lift" style={{ 
                position: 'relative', 
                borderRadius: '28px', 
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.35)',
                border: '1px solid rgba(200, 168, 74, 0.25)',
                background: 'rgba(255,255,255,0.05)',
                aspectRatio: '3/4'
              }}>
                <img 
                  src="/images/Tarun Bidani Goyal.jpeg" 
                  alt="Tarun Bidani Goyal" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.8s ease'
                  }}
                  className="spotlight-img"
                />
                {/* Decorative border overlay */}
                <div style={{ 
                  position: 'absolute', 
                  top: '16px', 
                  left: '16px', 
                  right: '16px', 
                  bottom: '16px', 
                  border: '1px solid rgba(200, 168, 74, 0.2)', 
                  borderRadius: '18px',
                  pointerEvents: 'none'
                }} />
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ gridColumn: 'span 7' }}
              className="youth-content-col"
            >


              <h3 style={{ 
                fontFamily: "'Playfair Display', Georgia, serif", 
                fontSize: '2.5rem', 
                fontWeight: 400, 
                color: '#11251a', 
                margin: '0 0 8px 0',
                lineHeight: 1.15
              }}>
                Tarun Bidani Goyal
              </h3>
              
              <h4 style={{ 
                color: '#a57c1d', 
                fontSize: '1rem', 
                fontWeight: 500, 
                letterSpacing: '0.05em', 
                textTransform: 'uppercase', 
                margin: '0 0 12px 0' 
              }}>
                Youth Icon
              </h4>

              {/* Motto Banner */}
              <div style={{ 
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(17, 37, 26, 0.05)',
                border: '1px solid rgba(17, 37, 26, 0.1)',
                padding: '8px 16px',
                borderRadius: '12px',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'rgba(17, 37, 26, 0.9)',
                letterSpacing: '0.05em',
                marginBottom: '32px'
              }}>
                <span style={{ color: '#a57c1d' }}>Motto:</span>
                Nation First • Environment First • Future First 🇮🇳🌱
              </div>


              {/* Story Details */}
              <div style={{ fontSize: '0.98rem', color: 'rgba(17, 37, 26, 0.85)', lineHeight: 1.8, marginBottom: '32px', fontWeight: 300 }}>
                <p style={{ margin: '0 0 20px 0' }}>
                  <strong>Tarun</strong> is a highly distinguished finance and governance professional, holding prestigious dual qualifications as a Chartered Accountant and a Cost & Management Accountant <strong>(CMA-AIR 44)</strong>. His notable professional career includes key experience as a consultant for the <strong>Ministry of Corporate Affairs (MCA)</strong> and the <strong>Serious Fraud Investigation Office (SFIO)</strong>, where he actively contributed to corporate governance, compliance management, and complex regulatory affairs.
                </p>
                
                <p style={{ margin: 0 }}>
                  Driven by an unwavering personal commitment to environmental protection since childhood, Tarun has consistently advocated for sustainable living, active ecological conservation, and public awareness. His primary vision is to rally the Indian youth toward environmental ownership — inspiring the next generation to lead initiatives that reduce the greenhouse effect, combat global warming, and eliminate environmental pollution. Tarun strongly believes that environmental responsibility is not merely a choice, but an urgent collective duty to preserve the Earth for future generations and secure a <strong>pollution-free India</strong>. Living by the philosophy of <strong>"Nation First"</strong>, Tarun is deeply dedicated to promoting ethical leadership, responsible citizenship, and robust youth participation in nation-building.
                </p>
              </div>

              {/* Vision Quote Section */}
              <div style={{ 
                position: 'relative', 
                marginBottom: '40px', 
                background: 'rgba(200, 168, 74, 0.05)', 
                borderLeft: '4px solid var(--gold-accent)', 
                padding: '24px 32px',
                borderRadius: '0 20px 20px 0'
              }}>
                <span style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif", 
                  fontSize: '5rem', 
                  color: 'rgba(200, 168, 74, 0.25)', 
                  position: 'absolute', 
                  top: '-5px', 
                  left: '10px', 
                  lineHeight: 0 
                }}>&ldquo;</span>
                <p style={{ 
                  fontSize: '1.25rem', 
                  lineHeight: 1.7, 
                  fontStyle: 'italic', 
                  color: '#11251a',
                  position: 'relative',
                  zIndex: 1,
                  fontWeight: 300,
                  margin: 0,
                  paddingLeft: '24px',
                  fontFamily: "'Playfair Display', Georgia, serif"
                }}>
                  "To empower the youth to lead with integrity, serve society with purpose, and contribute towards a greener, stronger, and more prosperous India."
                </p>
                <div style={{ textAlign: 'right', marginTop: '12px', fontSize: '0.85rem', color: 'var(--green-icon)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  — CORE VISION
                </div>
              </div>


            </motion.div>
          </div>
        </div>
      </section>

      {/* Advisory Members Section */}
      <section style={{ padding: '120px 0', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="eyebrow" style={{ color: 'var(--green-icon)', display: 'inline-block', marginBottom: '12px' }}>GUIDING OUR PATH</span>
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', 
              fontWeight: 400, 
              color: 'var(--green-dark)', 
              lineHeight: 1.2,
              margin: 0
            }}>
              Advisory Board
            </h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--gold-accent)', margin: '24px auto 0' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }} className="advisors-grid">
            {advisors.map((advisor, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="card hover-lift"
                style={{ 
                  background: '#ffffff', 
                  padding: '32px', 
                  borderRadius: '24px', 
                  border: '1px solid rgba(26, 58, 42, 0.06)', 
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(26,58,42,0.01)'
                }}
              >
                <div style={{ 
                  width: 120, 
                  height: 120, 
                  borderRadius: '50%', 
                  overflow: 'hidden', 
                  marginBottom: '24px',
                  background: 'var(--bg-section)',
                  boxShadow: '0 8px 20px rgba(26,58,42,0.08)',
                  border: '4px solid #ffffff'
                }}>
                  <img 
                    src={advisor.image} 
                    alt={advisor.name} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      filter: 'grayscale(100%)',
                      transition: 'filter 0.5s ease, transform 0.5s ease'
                    }} 
                    className="leader-img"
                  />
                </div>
                
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.35rem', fontWeight: 600, color: 'var(--green-dark)', margin: '0 0 4px 0' }}>
                  {advisor.name}
                </h3>
                <div style={{ fontSize: '0.75rem', color: 'var(--green-icon)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>
                  {advisor.role}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6, margin: '0 0 24px 0', fontWeight: 300, flexGrow: 1 }}>
                  {advisor.bio}
                </p>
                
                {/* Social Buttons */}
                <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
                  {advisor.linkedin && (
                    <a 
                      href={advisor.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--green-icon)', opacity: 0.5, transition: 'all 0.3s ease' }}
                      className="social-icon-btn"
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  )}
                  {advisor.email && (
                    <a 
                      href={`mailto:${advisor.email}`} 
                      style={{ color: 'var(--green-icon)', opacity: 0.5, transition: 'all 0.3s ease' }}
                      className="social-icon-btn"
                    >
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Call to Action Section */}
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
            <span className="eyebrow" style={{ color: 'var(--green-icon)' }}>JOIN OUR MISSION</span>
            
            <h2 style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', 
              fontWeight: 400, 
              color: '#11251a', 
              marginBottom: '20px',
              lineHeight: 1.25
            }}>
              Want to lead change with us?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(17, 37, 26, 0.75)', lineHeight: 1.7, maxWidth: '600px', margin: '0 auto 36px', fontWeight: 300 }}>
              We are constantly seeking dedicated individuals, field managers, ecology experts, and corporate CSR sponsors to expand our grassroots impact across India.
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
            >
              Connect with Our Team
            </button>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{ __html: `
        .card:hover .leader-img {
          filter: grayscale(0%) !important;
          transform: scale(1.04);
        }
        .social-icon-btn:hover {
          opacity: 1 !important;
          color: var(--gold-accent) !important;
          transform: scale(1.15) translateY(-2px);
        }
        .btn-gold:hover {
          background: var(--gold-hover) !important;
          box-shadow: 0 12px 30px rgba(200, 168, 74, 0.4) !important;
          transform: translateY(-2px);
        }
        .youth-img-col:hover .spotlight-img {
          transform: scale(1.03);
        }
        @media (max-width: 991px) {
          .leaders-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 900px) {
          .youth-icon-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .youth-img-col, .youth-content-col {
            grid-column: span 12 !important;
          }
          .youth-img-col {
            max-width: 380px;
            margin: 0 auto;
          }
        }
        @media (max-width: 640px) {
          .leaders-grid > div {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .leaders-grid img {
            margin-bottom: 8px !important;
          }
        }
      `}} />
    </div>
  );
}
