import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const FloatingContact = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1000); // auto show after 1.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end"
        >
          <div className="bg-black text-white px-4 py-2 rounded-full text-sm shadow-md flex items-center gap-2 border border-[#F9C47E]">
            <FaPhoneAlt className="text-[#F9C47E]" />
            <a href="tel:+971581485523" className="hover:underline">+91 8799201924</a>
          </div>

          <div className="bg-black text-white px-4 py-2 rounded-full text-sm shadow-md flex items-center gap-2 border border-[#F9C47E]">
            <FaEnvelope className="text-[#F9C47E]" />
            <a href="mailto:devamthakar.dev@example.com" className="hover:underline">devamthakar.dev@example.com</a>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default FloatingContact;
