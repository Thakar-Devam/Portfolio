import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const CODE_LINES = [
  { indent: 0, text: 'const developer = {', delay: 0 },
  { indent: 1, text: 'name: "Devam Thakar",', delay: 0.1 },
  { indent: 1, text: 'role: "Frontend Developer",', delay: 0.2 },
  { indent: 1, text: 'passion: "Building fast UIs",', delay: 0.3 },
  { indent: 1, text: 'experience: "1.4+ years",', delay: 0.4 },
  { indent: 0, text: '};', delay: 0.5 },
];

const STATS = [
  { label: 'Projects', value: '15+' },
  { label: 'VS Code Ext', value: '1' },
  { label: 'Experience', value: '1.4+ yrs' },
];

const FLOAT_ELEMENTS = [
  { content: '{ }', x: '10%', y: '20%', delay: 0 },
  { content: '</>', x: '85%', y: '15%', delay: 0.3 },
  { content: '<div>', x: '80%', y: '75%', delay: 0.6 },
  { content: '=>', x: '12%', y: '80%', delay: 0.9 },
];

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      const els = document.querySelectorAll('[data-float]');
      els.forEach((el) => {
        const speed = parseFloat(el.dataset.speed || 1);
        const x = (window.innerWidth - e.clientX * speed) / 100;
        const y = (window.innerHeight - e.clientY * speed) / 100;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      {/* Floating elements */}
      {FLOAT_ELEMENTS.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ delay: item.delay, duration: 1 }}
          data-float
          data-speed={0.5 + i * 0.2}
          className="absolute text-white/40 font-mono text-2xl pointer-events-none select-none"
          style={{ left: item.x, top: item.y }}
        >
          {item.content}
        </motion.div>
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
          >
            Devam Thakar
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/50 mb-6 space-y-1"
          >
            <p>Frontend Developer</p>
            <p>React.js Developer</p>
            <p className="text-white/40 text-base mt-4 max-w-md">
              Building fast, modern and user-focused web experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all"
            >
              View Projects
            </button>
            <a
              href={import.meta.env.BASE_URL + 'assets/RESUME THAKAR DEVAM.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex gap-8"
          >
            {STATS.map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/40">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Code Editor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="relative"
        >
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Window bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-white/30 font-mono">developer.js</span>
            </div>

            {/* Code */}
            <div className="p-6 font-mono text-sm space-y-2">
              {CODE_LINES.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + line.delay, duration: 0.4 }}
                  className="flex"
                  style={{ paddingLeft: `${line.indent * 20}px` }}
                >
                  <span className="text-white/30 select-none mr-4">{i + 1}</span>
                  <span className="text-white/60">{line.text}</span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 1.2, duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
                className="inline-block w-2 h-4 bg-blue-500 ml-2"
              />
            </div>
          </div>

          {/* Floating window accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -bottom-6 -right-6 w-40 h-32 rounded-xl"
            style={{
              background: 'rgba(79,142,247,0.08)',
              border: '1px solid rgba(79,142,247,0.2)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div className="p-4">
              <div className="text-xs text-white/40 mb-2 font-mono">npm run dev</div>
              <div className="text-xs text-green-400/60 font-mono">✓ Ready</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/30"
        >
          <FiArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
