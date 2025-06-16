import React from 'react';

const About = () => {
  return (
    <section className="w-full px-6 md:px-20 py-16 pt-8 bg-white text-[#333]">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>

      <div className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed space-y-4">
        <p>
          Hey, I'm <span className="font-semibold">Thakar Devam</span>, a passionate frontend developer currently pursuing B.Voc in IT at <span className="font-semibold">RK University</span>.
        </p>

        <p>
          I have <span className="font-semibold">1 year and 3 months</span> of professional experience working as a React Developer at <a href='https://www.aestininternational.com/' className="font-semibold">Aestin International Pvt. Ltd.</a>
        </p>

        <p>
          During my time there, I collaborated closely with backend developers to bring full-fledged web applications to life. My main focus was on building responsive, clean, and user-friendly UIs using React, Tailwind CSS, and other modern frontend tools.
        </p>

        <p>
          I take pride in writing quality code and delivering smooth user experiences. Whether it's developing a new feature or optimizing performance, I always aim to deliver value through frontend excellence.
        </p>
      </div>
    </section>
  );
};

export default About;
