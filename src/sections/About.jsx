import React from 'react';
import { motion } from 'framer-motion';

const CHIPS = ['Next.js', 'React.js', 'TypeScript', 'Node.js', 'AI Integration', 'PostgreSQL'];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] } }),
};

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="max-w-2xl">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-sm text-white/40 tracking-widest uppercase mb-4 font-mono"
        >
          About
        </motion.p>

        <motion.h2
          variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8"
        >
          Turning ideas into{' '}
          <span className="text-gradient">real products.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-white/50 text-lg leading-relaxed mb-6"
        >
          I recently completed my Bachelor of Vocation in Information Technology and have 1.4+ years of hands-on experience building production-ready React applications, SaaS dashboards, AI-powered tools, business websites, and developer utilities.
        </motion.p>

        <motion.p
          variants={fadeUp} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-white/40 text-base leading-relaxed mb-10"
        >
          I enjoy transforming ideas into polished products with a focus on performance, clean architecture, intuitive user experiences, and scalable frontend development. I'm always exploring modern technologies and building tools that solve real-world problems.
        </motion.p>

        <motion.div
          variants={fadeUp} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {CHIPS.map((chip, i) => (
            <span
              key={i}
              className="text-sm text-white/50 px-3 py-1 rounded-full font-mono"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {chip}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
