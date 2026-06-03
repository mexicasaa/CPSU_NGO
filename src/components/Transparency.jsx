import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

const docs = [
  { title: "NGO Registration Certificate", size: "1.2 MB" },
  { title: "Annual Report 2024-2025", size: "4.5 MB" },
  { title: "Financial Audit Report 2025", size: "2.8 MB" },
  { title: "Impact Summary 2025", size: "3.1 MB" }
];

export default function Transparency() {
  return (
    <section id="transparency" style={{ background: 'var(--bg-warm)' }}>
      <div className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">TRANSPARENCY & TRUST</span>
            <h3 className="section-headline" style={{ marginBottom: 24 }}>Open Books, Clear Mission</h3>
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              We believe trust is the foundation of every successful community initiative. We maintain complete transparency in our operations, financial allocations, and impact reporting.
            </p>
            <div style={{ background: 'rgba(29, 71, 52, 0.05)', border: '1px solid rgba(29, 71, 52, 0.1)', padding: 24, borderRadius: 'var(--radius-lg)' }}>
              <h4 style={{ fontWeight: 700, color: 'var(--text-dark)', marginBottom: 8 }}>Registration Details</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: 4 }}>Registered under the Indian Trusts Act, 1882.</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>CSR Registration No: CSR00012345</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
          >
            {docs.map((doc, idx) => (
              <div key={idx} className="card-white" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 20, cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--green-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-600)' }}>
                    <FileText size={20} />
                  </div>
                  <div>
                    <h5 style={{ fontWeight: 700, color: 'var(--text-dark)', fontSize: '0.95rem' }}>{doc.title}</h5>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-label)' }}>PDF • {doc.size}</p>
                  </div>
                </div>
                <button style={{ background: 'none', border: 'none', color: 'var(--text-light)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Download size={20} />
                </button>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
           #transparency .section-container > div {
               grid-template-columns: 1fr !important;
           }
        }
      `}</style>
    </section>
  );
}
