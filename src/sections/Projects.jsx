import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiX, FiArrowRight } from 'react-icons/fi';

const BASE = import.meta.env.BASE_URL + 'assets/';

const PROJECTS = [
  {
    id: 1,
    title: 'AI Interview Assistant',
    category: 'AI Platform',
    description: 'AI-powered platform that analyzes resumes and job descriptions to generate job match scores, identify skill gaps, and provide personalized interview preparation.',
    image: null,
    links: [{ label: 'View Project', href: 'https://interviewai-client-ne9k.onrender.com' }],
    tags: ['React', 'AI', 'Node.js', 'MongoDB'],
  },
  {
    id: 2,
    title: 'Luxury Fashion E-Commerce',
    category: 'E-Commerce',
    description: 'Multilingual luxury fashion platform with secure payments, inventory management, live order tracking, and an advanced admin dashboard.',
    image: BASE + 'adminpanel.png',
    links: [],
    tags: ['React', 'Node.js', 'PayPal', 'DHL API'],
  },
  {
    id: 3,
    title: 'WingNote VS Code Extension',
    category: 'VS Code Extension',
    description: 'Productivity-focused VS Code extension that helps developers quickly create and organize notes without leaving the editor.',
    image: BASE + 'wingNote.png',
    links: [{ label: 'Marketplace', href: 'https://open-vsx.org/extension/wingnote/wingnote' }],
    tags: ['VS Code API', 'TypeScript', 'Extension'],
  },
  {
    id: 4,
    title: 'Maadhu Creatives',
    category: 'Business Website',
    description: 'Professional business website for Maadhu Creatives showcasing services, portfolio, and brand identity through a clean and responsive experience.',
    image: BASE + 'maadhuCreatives.png',
    links: [{ label: 'Visit Website', href: 'https://maadhucreatives.com/' }],
    tags: ['React', 'Tailwind', 'Responsive'],
  },
  {
    id: 5,
    title: 'Maadhu Miniature',
    category: 'Art Showcase',
    description: 'Handcrafted miniature artwork website designed to showcase collections with elegant layouts and smooth navigation.',
    image: BASE + 'maadhuminiature.png',
    links: [{ label: 'Visit Website', href: 'https://maadhuminiature.com/' }],
    tags: ['React', 'Animations', 'Gallery'],
  },
  {
    id: 6,
    title: 'CarryCab',
    category: 'Cab Booking',
    description: 'Modern cab booking website featuring responsive design, interactive animations, and an optimized user experience.',
    image: BASE + 'carrycabs.png',
    links: [{ label: 'Visit Website', href: 'https://carrycabs.com/' }],
    tags: ['React', 'Framer Motion', 'Responsive'],
  },
  {
    id: 7,
    title: 'AE Chartered',
    category: 'Finance Website',
    description: 'Professional website for a chartered accountancy firm with service listings, team profiles, and client inquiry forms.',
    image: BASE + 'aechartered.png',
    links: [{ label: 'Visit Website', href: 'https://www.aechartered.com/' }],
    tags: ['React', 'Tailwind', 'Responsive'],
  },
  {
    id: 8,
    title: 'SnapBeep',
    category: 'Utility App',
    description: 'A utility application designed for quick captures and alerts, built with a focus on speed and simplicity.',
    image: BASE + 'snapbeep.png',
    links: [{ label: 'Visit Website', href: 'https://snapbeep.com/' }],
    tags: ['React', 'Node.js', 'WebSockets'],
  },
  {
    id: 9,
    title: 'Eura India',
    category: 'Business Website',
    description: 'Corporate business website for Eura India with service showcases, contact management, and a clean professional layout.',
    image: BASE + 'euraindia.png',
    links: [{ label: 'Visit Website', href: 'https://euraindia.com/' }],
    tags: ['React', 'Tailwind', 'Responsive'],
  },
  {
    id: 10,
    title: 'Bariecano',
    category: 'E-Commerce',
    description: 'E-commerce storefront with product listings, cart functionality, and a polished shopping experience.',
    image: BASE + 'bariecano.png',
    links: [],
    tags: ['React', 'Node.js', 'E-Commerce'],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-sm text-white/40 tracking-widest uppercase mb-4 font-mono"
      >
        Projects
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 md:mb-16"
      >
        Selected work
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onClick={() => setSelected(p)} />
        ))}
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, index, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true }}
      onClick={onClick}
      className="group relative cursor-pointer rounded-2xl overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
      whileHover={{ scale: 1.01, borderColor: 'rgba(79,142,247,0.2)' }}
    >
      <div className="relative h-40 sm:h-36 overflow-hidden bg-white/3">
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white/10 font-mono text-5xl font-bold">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div
          className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full font-mono text-white/50"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
        >
          {project.category}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="text-white font-semibold text-sm">{project.title}</h3>
          <FiArrowRight
            size={14}
            className="text-white/30 group-hover:text-white/70 flex-shrink-0 mt-0.5 transition-colors"
          />
        </div>
        <p className="text-white/40 text-xs line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs text-white/30 font-mono">{tag}</span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(79,142,247,0.15), 0 0 40px rgba(79,142,247,0.05)' }}
      />
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 z-50"
        style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(12px)' }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 10 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] z-50 rounded-2xl overflow-y-auto"
        style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)', maxHeight: '85vh' }}
      >
        <div className="relative h-48 sm:h-64 bg-white/3 overflow-hidden flex-shrink-0">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-white/10 font-bold font-mono text-7xl">{project.title.charAt(0)}</span>
            </div>
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-white/70 hover:text-white transition-colors"
            style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
          >
            <FiX size={18} />
          </button>
          <div
            className="absolute bottom-3 left-4 text-xs px-2 py-1 rounded-full font-mono text-white/50"
            style={{ background: 'rgba(0,0,0,0.6)' }}
          >
            {project.category}
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">{project.title}</h2>
          <p className="text-white/50 leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-white/50 font-mono px-3 py-1 rounded-full"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {tag}
              </span>
            ))}
          </div>

          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-all"
                  style={{ background: 'rgba(79,142,247,0.15)', border: '1px solid rgba(79,142,247,0.25)' }}
                >
                  {link.label}
                  <FiExternalLink size={14} />
                </a>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
