import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import FloatingContact from './FloatingContact';

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/4.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      id="home"
      className="h-screen w-full bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] text-white px-4 sm:px-6 md:px-20 flex items-center justify-center md:justify-start"
    >
      <FloatingContact />

      {/* Text block with mobile-center, desktop-left */}
      <div className="w-full max-w-2xl text-center md:text-left">
        {/* Intro line */}
        <p className="text-sm sm:text-base text-gray-400 mb-2">
          Howdy! I’m a Web Developer building strong, clean code for modern, elegant interfaces.
        </p>

        {/* Big name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#F9C47E] mb-2 leading-tight">
          Thakar Devam
        </h1>

        {/* Animated roles */}
        <h2 className="text-lg sm:text-2xl md:text-3xl font-medium text-white mb-3">
          <Typewriter
            words={['Frontend Developer', 'React JS Developer', 'Web Developer']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
          I specialize in building responsive, accessible, and high-performance web apps using
          React, Tailwind CSS, and Vite. Focused on writing maintainable code and delivering great UI/UX.
        </p>
      </div>
    </section>
  );
};

export default Hero;
