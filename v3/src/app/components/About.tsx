import { motion } from 'motion/react';
import { Code2, Server, Cloud } from 'lucide-react';
import { aboutData } from '../data/portfolioData';

export function About() {
  const { summary, stats } = aboutData;

  return (
    <section className="py-24 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-[#E5E7EB] mb-4 text-center">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22D3EE] to-[#38BDF8] mx-auto mb-16 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Abstract Developer Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative group">
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#22D3EE]/20 to-[#38BDF8]/20 rounded-2xl blur-2xl group-hover:opacity-75 transition-opacity duration-500"></div>

              <div className="relative aspect-square rounded-2xl border border-[#374151] overflow-hidden bg-[#111827]">
                <img
                  src="/profile_new.webp"
                  alt="Abhishek Pokhrel"
                  className="w-full h-full object-cover transition-all duration-700 scale-110 group-hover:scale-100"
                />

                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent opacity-60"></div>

                {/* Decorative Terminal Dots (keeping the aesthetic) */}
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 p-4 bg-[#111827]/80 backdrop-blur-md border border-[#374151] rounded-xl shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#22D3EE]/10 flex items-center justify-center">
                    <Cloud className="w-5 h-5 text-[#22D3EE]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#9CA3AF] uppercase tracking-wider">Based in</div>
                    <div className="text-sm text-[#E5E7EB] font-medium">Nepal</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {summary.map((paragraph, index) => (
              <p key={index} className="text-lg text-[#9CA3AF] leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Key highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 bg-[#111827] border border-[#374151] rounded-lg">
                  <div className="text-3xl text-[#22D3EE] mb-2">{stat.value}</div>
                  <div className="text-sm text-[#9CA3AF]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
