import React from 'react'
import Navbar from './common/navbar'
import Footer from './common/Footer'
import Hero from './Hero'
import Work from './Work'
import About from './About'
import Skill from './Skill'

const App = () => {
  return (
    <div>
      <div className="font-inter">
        <Navbar />
        <Hero />
        {['Work', 'About', 'Skills'].map((section) => {
          let ComponentToRender;

          if (section === 'Work') {
            ComponentToRender = <Work />;
          } else if (section === 'About') {
            ComponentToRender = <About />;
          } else if (section === 'Skills') {
            ComponentToRender = <Skill />;
          }

          return (
            <section
              id={section.toLowerCase()}
              key={section}
              className="min-h-screen flex items-center justify-center bg-white"
            >
              {ComponentToRender}
            </section>
          );
        })}
        <Footer />

      </div>

    </div>
  )
}

export default App
