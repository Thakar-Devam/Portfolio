import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCE = {
  company: 'Aestin International Pvt Ltd',
  role: 'React JS Developer',
  period: 'Jan 2024 – Apr 2025',
  description: 'Collaborated with cross-functional teams to build and maintain scalable React applications for e-commerce and internal business operations. Developed user-focused features, integrated third-party services, optimized application performance, and translated business requirements into reliable production solutions.',
  projects: [
    'Luxury Fashion E-commerce Platform',
    'Enterprise Admin Dashboard',
    'Internal Techpack Generator',
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.6, ease: [0.23, 1, 0.32, 1] } }),
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.p
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="text-sm text-white/40 tracking-widest uppercase mb-4 font-mono"
      >
        Experience
      </motion.p>

      <motion.h2
        variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-16"
      >
        Where I've worked
      </motion.h2>

      <div className="relative pl-8 md:pl-12">
        {/* Timeline line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="absolute left-0 top-0 bottom-0 w-px bg-white/10 origin-top"
        />

        {/* Timeline dot */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="absolute left-0 top-0 w-2 h-2 -translate-x-[3.5px] rounded-full bg-blue-500"
        />

        <div className="space-y-6">
          <motion.div
            variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-1">{EXPERIENCE.role}</h3>
            <p className="text-lg text-white/60 mb-1">{EXPERIENCE.company}</p>
            <p className="text-sm text-white/30 font-mono mb-6">{EXPERIENCE.period}</p>
            <p className="text-white/50 leading-relaxed mb-6">{EXPERIENCE.description}</p>
          </motion.div>

          <div className="space-y-3">
            {EXPERIENCE.projects.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp} custom={3 + i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <span className="text-blue-500/60 mt-1.5">▸</span>
                <p className="text-white/50">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
