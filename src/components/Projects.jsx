import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: "Clean Rivers Campaign",
    category: "Environment",
    status: "Active",
    desc: "A community-driven initiative to clean local water bodies and raise awareness about water pollution.",
    color: "bg-brand-blue"
  },
  {
    title: "Tech For Tomorrow",
    category: "Skill Development",
    status: "Active",
    desc: "Providing basic computer literacy and vocational training to unemployed youth.",
    color: "bg-brand-orange"
  },
  {
    title: "Green Schools Program",
    category: "Education",
    status: "Upcoming",
    desc: "Integrating environmental education into the primary school curriculum.",
    color: "bg-brand-green"
  },
  {
    title: "Harmony Workshops",
    category: "Social Cohesion",
    status: "Active",
    desc: "Interactive sessions focusing on family values, respect, and cultural balance.",
    color: "bg-brand-brown"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#FAFAFA] relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-brand-orange tracking-widest uppercase mb-3"
            >
              Our Projects
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-gray-900"
            >
              Active & Upcoming Programs
            </motion.h3>
          </div>
          <button className="text-brand-green font-medium flex items-center gap-2 hover:text-brand-green-light transition-colors whitespace-nowrap">
            View All Projects <ArrowRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-2 h-full ${project.color}`} />
              
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm font-medium text-gray-500">{project.category}</span>
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${project.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                  {project.status}
                </span>
              </div>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors">{project.title}</h4>
              <p className="text-gray-600 mb-8">{project.desc}</p>
              
              <button className="text-brand-blue font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
