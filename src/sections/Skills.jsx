import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const TECH_STACK = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS',
  'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'MySQL', 'React Query',
];

const TOOLS = ['Git', 'Postman', 'GitHub', 'ClickUp', 'Docker', 'GitLab'];

const CERTIFICATES = [
  {
    title: 'Advanced MERN Development',
    issuer: 'Infosys Springboard',
    date: 'June 2024',
    description: 'Successfully completed the Advanced MERN Development program covering modern full-stack web development using MongoDB, Express.js, React, and Node.js.',
    file: 'Mern Stack Dev  certificate.pdf',
    label: 'View Credential',
  },
  {
    title: 'Web Development Internship',
    issuer: 'CodeClause Pvt. Ltd.',
    date: 'Jul 2024 – Aug 2024',
    description: 'Successfully completed a one-month Web Development Internship, contributing to real-world web applications while gaining hands-on experience in frontend and backend development.',
    file: 'Internship Certificate (1).pdf',
    label: 'View Certificate',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } }),
};

export default function Skills() {
  const base = import.meta.env.BASE_URL + 'assets/';

  return (
    <section id="skills" className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.p
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="text-sm text-white/40 tracking-widest uppercase mb-4 font-mono"
      >
        Skills
      </motion.p>

      <motion.h2
        variants={fadeUp} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-white mb-16"
      >
        Technologies I work with
      </motion.h2>

      {/* Tech Stack */}
      <div className="mb-20">
        <motion.h3
          variants={fadeUp} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-white/40 text-sm font-mono uppercase tracking-wider mb-6"
        >
          Tech Stack
        </motion.h3>
        <div className="flex flex-wrap gap-3">
          {TECH_STACK.map((skill, i) => (
            <motion.div
              key={skill}
              variants={fadeUp} custom={3 + i} initial="hidden" whileInView="visible" viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="px-4 py-2.5 rounded-xl text-white/70 font-medium cursor-default select-none"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', transition: 'border-color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(79,142,247,0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="mb-20">
        <motion.h3
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-white/40 text-sm font-mono uppercase tracking-wider mb-6"
        >
          Tools
        </motion.h3>
        <div className="flex flex-wrap gap-3">
          {TOOLS.map((tool, i) => (
            <motion.div
              key={tool}
              variants={fadeUp} custom={i + 1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="px-4 py-2.5 rounded-xl text-white/70 font-medium cursor-default select-none"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', transition: 'border-color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(79,142,247,0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
            >
              {tool}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div>
        <motion.h3
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-white/40 text-sm font-mono uppercase tracking-wider mb-6"
        >
          Certificates
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-5">
          {CERTIFICATES.map((cert, i) => (
            <motion.div
              key={i}
              variants={fadeUp} custom={i + 1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="p-6 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p className="text-xs text-white/30 font-mono mb-3">{cert.issuer} • {cert.date}</p>
              <h4 className="text-white font-semibold text-lg mb-3">{cert.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed mb-5">{cert.description}</p>
              <a
                href={base + cert.file}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all"
                style={{ background: 'rgba(79,142,247,0.12)', border: '1px solid rgba(79,142,247,0.25)', color: 'rgba(79,142,247,0.9)' }}
              >
                {cert.label} <FiExternalLink size={13} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
