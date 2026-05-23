import React, { useState, useEffect } from 'react';

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    function calc() {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const diff = Math.max(0, target - now);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        mins: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        secs: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}

export default function FeaturedSeminar() {
  const countdown = useCountdown('2026-07-12T10:00:00+05:30');

  return (
    <section id="seminar" style={{ background: 'var(--bg-ivory)' }}>
      <div className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 480px', gap: 64, alignItems: 'center' }}>

          {/* Left: Info */}
          <div>
            <span className="eyebrow">FEATURED INITIATIVE · JULY 2026</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: 'var(--text-dark)', lineHeight: 1.15, letterSpacing: '-0.025em', marginBottom: 20 }}>
              National Seminar on Pollution Awareness & Community Action
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.78, marginBottom: 32, maxWidth: 560 }}>
              A two-day gathering of citizens, scientists, students, and local administrators, focused on translating awareness into community practice. Topics include water purification, indoor-air quality, household sustainability, and youth-led campaigns - with real workshops, not just talks.
            </p>

            {/* Metadata */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginBottom: 36 }}>
              {[
                { icon: '📅', label: '12-13 July 2026' },
                { icon: '📍', label: 'New Delhi, India' },
                { icon: '🕙', label: '10:00 AM IST · Both days' },
              ].map((m, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: '1.1rem' }}>{m.icon}</span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 500, color: 'var(--text-dark)' }}>{m.label}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              <a href="#contact" className="btn-primary" id="seminar-register-btn">Register Interest</a>
              <a href="#contact" style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--green-700)', textDecoration: 'underline', textUnderlineOffset: 4 }}>
                See full programme
              </a>
            </div>

            {/* Feature Highlights */}
            <div style={{ marginTop: 40, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {['Water Purification', 'Air Quality', 'Household Sustainability', 'Youth Campaigns'].map(tag => (
                <span key={tag} className="pill pill-green">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right: Countdown Panel */}
          <div style={{
            background: 'var(--green-800)',
            borderRadius: 'var(--radius-xl)',
            padding: '44px 36px',
            boxShadow: 'var(--shadow-xl)',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* BG decoration */}
            <div style={{ position: 'absolute', top: -40, right: -40, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
            <div style={{ position: 'absolute', bottom: -60, left: -30, width: 250, height: 250, borderRadius: '50%', background: 'rgba(255,255,255,0.03)' }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--green-300)', marginBottom: 10 }}>Counting Down to Seminar</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: 32, lineHeight: 1.3 }}>
                National Seminar<br />July 12-13, 2026
              </div>

              {/* Countdown Boxes */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginBottom: 28 }}>
                {[
                  { val: countdown.days, label: 'DAYS' },
                  { val: countdown.hours, label: 'HRS' },
                  { val: countdown.mins, label: 'MINS' },
                  { val: countdown.secs, label: 'SECS' },
                ].map((item, i) => (
                  <div key={i} style={{
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px 8px',
                    textAlign: 'center',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>
                      {String(item.val).padStart(2, '0')}
                    </div>
                    <div style={{ fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--green-300)', marginTop: 6 }}>{item.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ padding: '18px 20px', background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, margin: 0 }}>
                  Seats are limited. Community attendance passes are available free of charge for local residents, students, and NGO volunteers. Register early.
                </p>
              </div>

              <a href="#contact" className="btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: 24, background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)' }}>
                Reserve Your Seat
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #seminar .section-container > div { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
