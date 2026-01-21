import { motion } from 'motion/react';
import { Download, ExternalLink } from 'lucide-react';
import { heroData } from '../data/portfolioData';

export function Hero() {
  const { techStack, title, tagline } = heroData;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-[#22D3EE] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-64 w-96 h-96 bg-[#38BDF8] opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Small intro text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="text-[#22D3EE] text-sm tracking-wider uppercase font-medium">
              Portfolio 2026
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl text-[#E5E7EB] mb-4 tracking-tight"
          >
            Abhishek Pokhrel
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl text-[#9CA3AF] mb-6"
          >
            {title}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl text-[#9CA3AF] mb-12 max-w-3xl mx-auto"
          >
            {tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button className="group px-8 py-4 bg-[#22D3EE] text-[#0B0F14] rounded-lg hover:bg-[#38BDF8] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#22D3EE]/20 hover:shadow-[#22D3EE]/40 hover:scale-105">
              <span className="font-medium">View Projects</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <a
              href="/Abhishek_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#111827] text-[#E5E7EB] rounded-lg hover:bg-[#1F2937] transition-all duration-300 flex items-center gap-2 border border-[#374151] hover:border-[#22D3EE]/50"
            >
              <Download className="w-4 h-4" />
              <span className="font-medium">Download CV</span>
            </a>
          </motion.div>

          {/* Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                className="px-4 py-2 bg-[#111827] border border-[#374151] rounded-lg text-[#9CA3AF] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-[#22D3EE]/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-2 bg-[#22D3EE] rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
