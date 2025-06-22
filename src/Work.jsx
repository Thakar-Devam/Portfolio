import React from 'react';

const projects = [
  {
    title: 'Aechartered',
    url: 'https://www.aechartered.com/',
    image: 'assets/aechartered.png',
    description: 'A luxury private jet rental website allowing users to search, compare, and book private jets globally. It features an intuitive booking form integrated with worldwide airport and fleet data, providing a seamless and elite user experience. The platform is designed for speed, clarity, and modern aesthetics, ideal for high-end clientele.',
  },
  {
    title: 'Snapbeep',
    url: 'https://snapbeep.com/',
    image: 'assets/snapbeep.png',
    description: 'Snapbeep is a full-service advertising and media agency with a digital-first approach. It offers a wide range of creative services—from brand building to website design—for clients around the globe. The website is built using React, with UI components styled using ShadCN for a modern and consistent design system. Framer Motion is used to enhance user interaction through smooth animations.',
  },
  {
    title: 'Bariecano - Luxury Clothing Brand',
    url: 'https://barisceano-client-tk0r.onrender.com/products/women',
    image: 'assets/bariecano.png',
    description: 'Bariceano is a US-based luxury clothing eCommerce website that specializes in premium hoodies, T-shirts, and sweatshirts. Designed with a clean,responsive layouts, and a strong focus on brand storytelling to engage fashion-forward audiences.',
  },
  {
    title: 'Admin Dashboard (Confidential)',
    url: '',
    image: 'assets/adminpanel.png',
    description: 'A feature-rich admin panel for Bariceano built with React, handling user management, product operations (CRUD), permissions, and real-time updates. Integrated with custom hooks, APIs, and enhanced UI using Tailwind and component libraries like ShadCN.',
  },
];

const Work = () => {
  return (
    <section id="work" className="w-full px-6 md:px-20 py-16 bg-[#fff8f0]">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
      Latest Work
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {projects.map((project, index) => (
        <div
          key={index}
          className="group bg-white border border-[#f0e6db] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
        >
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <div className="relative aspect-[16/9] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
              />
            </div>
          </a>
          <div className="p-5">
            <h3 className="text-lg font-bold text-black mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-[#5d5d5d]">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default Work;
