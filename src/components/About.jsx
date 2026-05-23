import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-brand-green/5 rounded-3xl transform -rotate-3 scale-105 -z-10" />
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Founder's Message</h3>
              <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">
                "Our mission is simple but profound: to leave the world better than we found it. Through education, environmental stewardship, and restoring family values, we are building a foundation of resilience for the generations to come."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-brand-green/20 rounded-full flex items-center justify-center text-brand-green font-bold text-xl">
                  DA
                </div>
                <div>
                  <div className="font-bold text-gray-900">D.C. Arya</div>
                  <div className="text-sm text-gray-500">Founder, CSR & Educational India Foundation</div>
                </div>
              </div>
            </div>
            
            {/* Decorative 3D-like elements */}
            <motion.div 
              animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-24 h-24 bg-brand-orange/20 rounded-2xl backdrop-blur-md border border-white/40 shadow-lg transform rotate-12"
            />
            <motion.div 
              animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 w-20 h-20 bg-brand-blue/20 rounded-full backdrop-blur-md border border-white/40 shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-brand-orange tracking-widest uppercase mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              A serious, mission-driven NGO with a human-centered story.
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              We believe in practical, community-driven change. By addressing the root causes of poverty, pollution, and social fragmentation, we empower individuals to lead dignified, self-reliant lives while fostering cultural harmony.
            </p>
            
            <div className="space-y-4">
              {[
                "Transparent, mission-driven approach",
                "Focus on long-term empowerment, not just relief",
                "Deeply rooted in practical community work"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-brand-green mt-1 flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
