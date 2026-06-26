import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-white/8 px-6 md:px-12 py-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-white/30 text-sm font-mono">
        © 2025 Devam Thakar
      </p>

      <div className="flex items-center gap-6">
        <a href="https://github.com/Thakar-Devam" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/70 transition-colors">
          <FiGithub size={18} />
        </a>
        <a href="https://linkedin.com/in/devam-thakar" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/70 transition-colors">
          <FiLinkedin size={18} />
        </a>
        <a href="mailto:thakardevam@gmail.com" className="text-white/30 hover:text-white/70 transition-colors">
          <FiMail size={18} />
        </a>

        <motion.button
          onClick={scrollTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 rounded-full text-white/30 hover:text-white/70 transition-colors ml-2"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
          aria-label="Back to top"
        >
          <FiArrowUp size={16} />
        </motion.button>
      </div>
    </footer>
  );
}
