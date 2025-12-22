import React, { useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Terminal from './components/Terminal';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  useLayoutEffect(() => {
    // Force scroll to top on mount/refresh
    window.scrollTo(0, 0);
    // Optional: disable auto scroll restoration if browser tries to fight it
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Terminal />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
