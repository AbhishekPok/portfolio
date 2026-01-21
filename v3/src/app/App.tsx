import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Skills } from '@/app/components/Skills';
import { Projects } from '@/app/components/Projects';
import { Experience } from '@/app/components/Experience';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

export default function App() {
  return (
    <div className="bg-[#0B0F14] text-[#E5E7EB] min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
