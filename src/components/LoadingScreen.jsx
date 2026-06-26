import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 z-[99999] flex items-center justify-center"
          style={{ background: '#080808' }}
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="text-white font-mono text-2xl font-bold mb-4"
            >
              {'<DT />'}
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="h-px w-24 mx-auto"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            >
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, ease: 'linear' }}
                className="h-full"
                style={{ background: 'rgba(79,142,247,0.8)' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
