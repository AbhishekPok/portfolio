import React, { useEffect } from 'react';
import Lenis from 'lenis';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Ricing from './sections/Ricing';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import { Toaster } from 'sonner';

function App() {
  const [lenis, setLenis] = React.useState<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis();
    setLenis(lenis);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-primary/50">
      <Navbar lenis={lenis} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Ricing />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}

export default App;
