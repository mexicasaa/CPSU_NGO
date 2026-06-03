import React from 'react';
import { motion } from 'framer-motion';

export default function TermsPage() {
  const terms = [
    {
      sec: "SEC 01",
      tag: "WEBSITE USAGE RULES",
      title: "Authorized Website Usage",
      content: "By accessing this platform, you commit to utilizing all information, assets, resources, and outreach program coordinates solely for lawful, direct community welfare purposes. Any attempt at automated scraping, denial of service attacks, or unsolicited data extraction is strictly prohibited."
    },
    {
      sec: "SEC 02",
      tag: "INTELLECTUAL PROPERTY",
      title: "Intellectual Property Ownership",
      content: "All photographic logs, custom graphic brand structures, layout systems, textual summaries, video scripts, and custom Devnagri typographic watermarks represent the exclusive property of the CSR & Educational India Foundation. These materials are protected under Indian intellectual property acts and cannot be reproduced, mirrored, or repurposed without explicit, written attestation from the board."
    },
    {
      sec: "SEC 03",
      tag: "DONATION COMPLIANCE",
      title: "Donation Terms & Integrity",
      content: "All financial contributions made to our campaigns are voluntary and support direct field execution. In strict alignment with our Statement of Transparency, 100% of these resources are deployed on environmental preservation materials and youth digital libraries. Donations are processed in Indian Rupees (INR) and are non-refundable unless verified under gateway processing duplication."
    },
    {
      sec: "SEC 04",
      tag: "LIMITATION OF LIABILITY",
      title: "Strict Liability Limits",
      content: "The Foundation orchestrates field cleanup runs and skill workshops using dedicated volunteers and local coordinating partners. While we verify all field activities for absolute safety and direct value, the Foundation disclaims all liability for incidental data inaccuracies or logistical field anomalies beyond direct administrative operations."
    },
    {
      sec: "SEC 05",
      tag: "EXTERNAL LINKS POLICY",
      title: "External Links Disclaimer",
      content: "For educational, CSR coordination, or regulatory filing purposes, this portal may reference external links or administrative resources. The Foundation holds zero editorial jurisdiction over the content, uptime, or privacy standards of these third-party platforms."
    },
    {
      sec: "SEC 06",
      tag: "VOLUNTEER CONDUCT",
      title: "Volunteer & User Conduct",
      content: "Every volunteer, community coordinator, or educational student participating in our programs must maintain the highest levels of mutual respect, physical safety, and communal harmony. The Foundation reserves the absolute right to rescind volunteer registrations or program access in instances of ethical misconduct."
    },
    {
      sec: "SEC 07",
      tag: "JURISDICTION & LAW",
      title: "Governing Law & Jurisdiction",
      content: "These terms, governance charters, and user policies represent a binding legal agreement. They are subject to the laws of the Republic of India. Any legal dispute arising under these regulations falls under the exclusive jurisdiction of the competent courts of New Delhi, India."
    },
    {
      sec: "SEC 08",
      tag: "CONTACT GOVERNANCE",
      title: "Corporate & Contact Details",
      content: "For regulatory inquiries, corporate CSR partnership proposals, or structural questions regarding this governance charter, please contact the Foundation Board directly at: aumdcarya@gmail.com, or visit the registered Dwarka residency headquarters."
    }
  ];

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '100vh', overflow: 'hidden' }}>
      
      {/* Immersive Hero Header */}
      <section style={{ 
        background: '#e6f1e2', 
        padding: '180px 0 120px', 
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(17, 37, 26, 0.08)'
      }}>
        {/* Procedural Grid */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: 'radial-gradient(rgba(17, 37, 26, 0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          opacity: 0.45,
          pointerEvents: 'none' 
        }} />
        
        {/* Ambient Glows */}
        <div style={{ 
          position: 'absolute', 
          top: '-10%', 
          left: '5%', 
          width: '500px', 
          height: '500px', 
          background: 'radial-gradient(circle, rgba(245, 196, 67, 0.1) 0%, transparent 70%)', 
          filter: 'blur(55px)',
          pointerEvents: 'none' 
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ color: 'var(--green-icon)', margin: 0, display: 'inline-block', marginBottom: '20px', letterSpacing: '0.2em' }}>
            BOARD OF DIRECTORS CHARTER
          </span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif", 
              fontSize: 'clamp(3rem, 6vw, 5.2rem)', 
              fontWeight: 400, 
              color: '#11251a', 
              lineHeight: 1.1, 
              letterSpacing: '-0.02em', 
              marginBottom: '28px' 
            }}
          >
            Terms & <span className="serif-italic" style={{ color: 'var(--green-icon)' }}>Conditions</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)', 
              maxWidth: '700px', 
              color: 'rgba(17, 37, 26, 0.8)', 
              lineHeight: 1.8, 
              fontWeight: 300, 
              margin: 0 
            }}
          >
            Please review the binding rules, operational regulations, intellectual property clauses, and governance details for our Indian portal.
          </motion.p>
        </div>
      </section>

      {/* Main Grid Content Section */}
      <section style={{ padding: '120px 0', background: 'var(--bg-main)', position: 'relative' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }} className="terms-grid">
            {terms.map((t, idx) => (
              <motion.div 
                key={idx}
                className="card hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                style={{
                  padding: '12px',
                  background: '#ffffff',
                  borderRadius: '32px',
                  border: '1px solid rgba(26, 58, 42, 0.08)',
                  boxShadow: 'var(--shadow-premium)',
                  position: 'relative'
                }}
              >
                <div style={{
                  border: '1px solid rgba(200, 168, 74, 0.25)',
                  borderRadius: '22px',
                  padding: '40px 36px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  height: '100%'
                }} className="charter-inner">
                  
                  {/* Badge header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--green-icon)', letterSpacing: '0.12em' }}>
                      {t.sec}
                    </span>
                    <div style={{ width: '16px', height: '1.5px', background: 'rgba(200, 168, 74, 0.4)' }} />
                    <span style={{ fontSize: '0.68rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
                      {t.tag}
                    </span>
                  </div>

                  <h3 style={{ 
                    fontFamily: "'Playfair Display', Georgia, serif", 
                    fontSize: '1.45rem', 
                    fontWeight: 500, 
                    color: 'var(--green-dark)', 
                    lineHeight: 1.25,
                    margin: 0
                  }}>
                    {t.title}
                  </h3>
                  
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-body)', lineHeight: 1.8, fontWeight: 300, margin: 0, opacity: 0.95 }}>
                    {t.content}
                  </p>

                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {styleStyle}
    </div>
  );
}

const styleStyle = (
  <style dangerouslySetInnerHTML={{ __html: `
    @media (max-width: 900px) {
      .terms-grid {
        grid-template-columns: 1fr !important;
        gap: 32px !important;
      }
    }
  `}} />
);
