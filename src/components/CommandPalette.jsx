import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiArrowRight } from 'react-icons/fi';

const COMMANDS = [
  { label: 'Go to Home', action: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Go to Projects', action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Go to Experience', action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Go to About', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Go to Contact', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Download Resume', action: () => window.open('/assets/RESUME THAKAR DEVAM.pdf', '_blank') },
  { label: 'View GitHub', action: () => window.open('https://github.com/Thakar-Devam', '_blank') },
  { label: 'View LinkedIn', action: () => window.open('https://linkedin.com/in/devam-thakar', '_blank') },
  { label: 'Send Email', action: () => window.open('mailto:thakardevam@gmail.com') },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [hovered, setHovered] = useState(0);
  const inputRef = useRef(null);

  const filtered = COMMANDS.filter(c => c.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setOpen(v => !v);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
    else setQuery('');
  }, [open]);

  const run = (cmd) => {
    cmd.action();
    setOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[9998]"
              style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
              className="fixed top-24 left-1/2 -translate-x-1/2 z-[9999] w-full max-w-md rounded-2xl overflow-hidden"
              style={{ background: '#111', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-white/8">
                <FiSearch size={16} className="text-white/30" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setHovered(0); }}
                  placeholder="Type a command..."
                  className="flex-1 bg-transparent text-white text-sm outline-none placeholder-white/30"
                />
                <kbd className="text-white/30 text-xs font-mono px-2 py-0.5 rounded" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  ESC
                </kbd>
              </div>
              <div className="max-h-72 overflow-y-auto py-2">
                {filtered.length ? filtered.map((cmd, i) => (
                  <button
                    key={cmd.label}
                    onClick={() => run(cmd)}
                    onMouseEnter={() => setHovered(i)}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors"
                    style={{ background: hovered === i ? 'rgba(255,255,255,0.05)' : 'transparent' }}
                  >
                    <span className="text-sm text-white/70">{cmd.label}</span>
                    <FiArrowRight size={14} className="text-white/20" />
                  </button>
                )) : (
                  <p className="text-center text-white/30 text-sm py-4">No results</p>
                )}
              </div>
              <div className="px-4 py-2 border-t border-white/5">
                <p className="text-xs text-white/20">Press <kbd className="font-mono">Ctrl+K</kbd> to toggle</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hint pill */}
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        whileHover={{ scale: 1.05 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full text-sm text-white/40 hover:text-white/70 transition-colors"
        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
        aria-label="Open command palette"
      >
        <FiSearch size={14} />
        <kbd className="font-mono text-xs">Ctrl+K</kbd>
      </motion.button>
    </>
  );
}
