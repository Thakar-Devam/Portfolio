import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const SOCIAL = [
  { label: 'Email', icon: FiMail, href: 'mailto:thakardevam@gmail.com' },
  { label: 'GitHub', icon: FiGithub, href: 'https://github.com/Thakar-Devam' },
  { label: 'LinkedIn', icon: FiLinkedin, href: 'https://linkedin.com/in/devam-thakar' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.p
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="text-sm text-white/40 tracking-widest uppercase mb-8 font-mono"
      >
        Contact
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
        className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-3xl leading-tight"
      >
        Let's Build Something Great Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}
        className="text-white/40 text-lg mb-12 max-w-xl"
      >
        Have a project in mind? Let's discuss how we can work together.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label className="block text-white/50 text-sm mb-2">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl text-white outline-none transition-all"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(79,142,247,0.3)'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
            />
          </div>

          <div>
            <label className="block text-white/50 text-sm mb-2">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl text-white outline-none transition-all"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(79,142,247,0.3)'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
            />
          </div>

          <div>
            <label className="block text-white/50 text-sm mb-2">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl text-white outline-none resize-none transition-all"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(79,142,247,0.3)'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-all"
            style={{ background: 'rgba(79,142,247,0.2)', border: '1px solid rgba(79,142,247,0.3)' }}
          >
            Send Message
            <FiSend size={16} />
          </motion.button>
        </motion.form>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }}
          className="flex flex-col justify-center space-y-4"
        >
          <p className="text-white/40 mb-4">Or reach out directly:</p>
          {SOCIAL.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 8 }}
              className="flex items-center gap-4 p-4 rounded-xl transition-all"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(79,142,247,0.25)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
            >
              <item.icon className="text-white/40" size={20} />
              <span className="text-white/70">{item.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
