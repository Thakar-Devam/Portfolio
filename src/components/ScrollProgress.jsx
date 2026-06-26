import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const scaleX = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const value = window.scrollY / total;
      scaleX.set(value);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scaleX]);

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX, width: '100%' }}
    />
  );
}
