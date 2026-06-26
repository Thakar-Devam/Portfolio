import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LuCodeXml } from 'react-icons/lu';
import { FiMenu, FiX } from 'react-icons/fi';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_ITEMS.map(n => document.getElementById(n.id));
      const current = sections.findLast(s => s && s.getBoundingClientRect().top <= 120);
      if (current) setActive(current.id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 items-center gap-1 px-3 py-2 rounded-full"
        style={{
          background: scrolled ? 'rgba(10,10,10,0.85)' : 'rgba(10,10,10,0.6)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.5)' : 'none',
          transition: 'background 0.3s, box-shadow 0.3s',
        }}
      >
        <button
          onClick={() => scrollTo('home')}
          className="text-white/70 hover:text-white p-2 rounded-full transition-colors mr-2"
          aria-label="Home"
        >
          <LuCodeXml size={18} />
        </button>

        {NAV_ITEMS.map((item) => (
          <NavLink key={item.id} item={item} active={active} onClick={() => scrollTo(item.id)} />
        ))}

        <a
          href={import.meta.env.BASE_URL + 'assets/RESUME THAKAR DEVAM.pdf'}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 px-4 py-1.5 rounded-full text-sm font-medium text-white/90 hover:text-white transition-all"
          style={{
            background: 'rgba(79,142,247,0.15)',
            border: '1px solid rgba(79,142,247,0.3)',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(79,142,247,0.25)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(79,142,247,0.15)'}
        >
          Resume
        </a>
      </motion.nav>

      {/* Mobile */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="md:hidden fixed top-4 left-4 right-4 z-50 flex items-center justify-between px-4 h-12 rounded-full"
        style={{
          background: 'rgba(10,10,10,0.85)',
          border: '1px solid rgba(255,255,255,0.08)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <button onClick={() => scrollTo('home')} className="text-white/70">
          <LuCodeXml size={18} />
        </button>
        <button onClick={() => setMenuOpen(v => !v)} className="text-white/70 flex items-center gap-2 text-sm">
          <span>Menu</span>
          {menuOpen ? <FiX size={16} /> : <FiMenu size={16} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden fixed top-20 right-4 z-40 w-56 rounded-2xl p-2"
            style={{
              background: 'rgba(10,10,10,0.95)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)',
            }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => { scrollTo(item.id); setMenuOpen(false); }}
                className="w-full text-left px-4 py-2.5 rounded-xl text-sm transition-colors"
                style={{ color: active === item.id ? 'white' : 'rgba(255,255,255,0.5)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                {item.label}
              </button>
            ))}
            <div className="h-px bg-white/8 mx-2 my-1" />
            <a
              href={import.meta.env.BASE_URL + 'assets/RESUME THAKAR DEVAM.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center px-4 py-2.5 rounded-xl text-sm text-white/80 mt-1"
              style={{ background: 'rgba(79,142,247,0.15)', border: '1px solid rgba(79,142,247,0.2)' }}
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ item, active, onClick }) {
  const isActive = active === item.id;
  return (
    <button
      onClick={onClick}
      className="relative px-3 py-1.5 rounded-full text-sm font-medium transition-colors"
      style={{ color: isActive ? 'white' : 'rgba(255,255,255,0.5)' }}
      onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
      onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
    >
      {isActive && (
        <motion.span
          layoutId="nav-active"
          className="absolute inset-0 rounded-full"
          style={{ background: 'rgba(255,255,255,0.08)' }}
          transition={{ type: 'spring', stiffness: 350, damping: 35 }}
        />
      )}
      <span className="relative z-10">{item.label}</span>
    </button>
  );
}
