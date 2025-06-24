import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiGit , SiSass, SiRender, SiVercel, SiHostinger,SiNextdotjs ,SiTypescript  } from 'react-icons/si';

const techStack = [
  { name: 'React.js', icon: <FaReact />, color: '#61DBFB' },
  { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#000' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#007BCC' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38BDF8' },
  { name: 'SCSS', icon: <SiSass />, color: '#CD6799' },
  { name: 'REST APIs', icon: <SiGit  />, color: '#DF4C37' },
];

const tools = [
  { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
  { name: 'GitHub', icon: <FaGithub />, color: '#000' },
  { name: 'Render', icon: <SiRender />, color: '#475569' },
  { name: 'Vercel', icon: <SiVercel />, color: '#000000' },
  { name: 'Hostinger', icon: <SiHostinger />, color: '#673DE6' },
];


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

const Skills = () => {
  return (
    <section className="w-full px-6 md:px-20 py-20 bg-white text-[#333]">
      <h2 className="text-4xl md:text-5xl font-bold mb-14 text-center">My Skills</h2>

      {/* Tech Stack */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Tech Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {techStack.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col items-center justify-center p-5 rounded-xl bg-white border hover:shadow-lg transition shadow-md hover:scale-105"
              style={{ borderColor: item.color }}
            >
              <div className="text-4xl mb-2" style={{ color: item.color }}>
                {item.icon}
              </div>
              <p className="text-sm font-semibold text-center">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-6">Tools I Use</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map((item, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col items-center justify-center p-5 rounded-xl bg-white border hover:shadow-lg transition shadow-md hover:scale-105"
              style={{ borderColor: item.color }}
            >
              <div className="text-3xl mb-2" style={{ color: item.color }}>
                {item.icon}
              </div>
              <p className="text-sm font-semibold text-center">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </div>

     
    </section>
  );
};

export default Skills;
