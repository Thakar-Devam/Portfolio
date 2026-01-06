import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="relative w-full bg-white px-6 md:px-20 max-sm:pt-12 overflow-hidden">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold text-center mb-16"
      >
        About <span className="text-[#ffb764]">Me</span>
      </motion.h2>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-base md:text-lg leading-relaxed text-[#444]"
        >
          <p>
            Hey, I’m{" "}
            <span className="font-semibold text-black">
              Thakar Devam
            </span>
            , a frontend developer currently pursuing{" "}
            <span className="font-semibold">B.Voc in IT</span> at{" "}
            <span className="font-semibold">RK University</span>.
          </p>

          <p>
            I have{" "}
            <span className="font-semibold text-black">
              1 year 4 month of professional experience
            </span>{" "}
            working as a React Developer at{" "}
            <a
              href="https://www.aestininternational.com/"
              target="_blank"
              className="font-semibold text-bold text-black hover:underline"
            >
              Aestin International Pvt. Ltd.
            </a>
          </p>

          <p>
            I specialize in crafting responsive, high-performance user
            interfaces using React, Tailwind CSS, and modern frontend tools.
            I enjoy collaborating with backend teams to ship complete,
            production-ready applications.
          </p>

        </motion.div>

      {/* Right Tech Snapshot Card */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  className="relative rounded-2xl border border-gray-200 bg-white p-8"
>
  {/* Accent line */}
  <span className="absolute left-0 top-0 h-[98%] mt-1 w-1 bg-gradient-to-b from-[#ffb764] to-[#383737] rounded-l-2xl" />

  <div className="pl-4 space-y-6">
    <div>
      <p className="text-sm text-gray-500">Experience</p>
      <p className="text-xl font-semibold text-black">
        1+ Years as Frontend Developer
      </p>
    </div>

    <div>
      <p className="text-sm text-gray-500">Primary Stack</p>
      <p className="text-base font-medium text-black">
        React · Next.js · TypeScript
      </p>
    </div>

    <div>
      <p className="text-sm text-gray-500">What I Do</p>
      <p className="text-base leading-relaxed text-gray-700">
        Build responsive, animated, and production-ready web interfaces
        with clean code 
      </p>
    </div>
  </div>
</motion.div>

      </div>
    </section>
  );
};

const Stat = ({ title, value }) => (
  <div className="space-y-1">
    <p className="text-sm text-gray-500">{title}</p>
    <p className="text-xl font-bold text-black">{value}</p>
  </div>
);

export default About;
