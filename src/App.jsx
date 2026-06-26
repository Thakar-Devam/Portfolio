import React from 'react';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import ScrollProgress from './components/ScrollProgress';
import CommandPalette from './components/CommandPalette';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CommandPalette />

      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
