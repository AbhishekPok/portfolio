import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight, Sparkles, Code2, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { name: 'Email', icon: Mail, url: 'mailto:abhishek@example.com' },
  ];

  const highlights = [
    { label: 'Experience', value: '3+ Years', icon: Sparkles },
    { label: 'DevOps Tools', value: 'Docker, K8s, CI/CD', icon: Code2 },
    { label: 'Technologies', value: 'Python, Django, React', icon: Rocket },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#2563EB] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0F172A] opacity-5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#EFF6FF] to-[#F8FAFC] border border-[#2563EB]/20 rounded-full mb-6"
              >
                <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
                <span className="text-sm text-[#2563EB]">Available for work</span>
              </motion.div>

              <h1 className="text-5xl lg:text-7xl mb-6 text-[#0F172A] leading-tight">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">Abhishek</span>
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute bottom-2 left-0 h-3 bg-gradient-to-r from-[#2563EB] to-[#0F172A] opacity-20 -z-10"
                  ></motion.span>
                </span>{' '}
                Pokhrel.
              </h1>

              <p className="text-xl text-[#64748B] mb-8 leading-relaxed">
                Software Engineer • DevOps Enthusiast • Backend Developer
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  to="/projects"
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#2563EB] to-[#0F172A] text-white rounded-full overflow-hidden shadow-lg shadow-[#2563EB]/30 hover:shadow-xl hover:shadow-[#2563EB]/40 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </Link>
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-white border-2 border-[#E2E8F0] text-[#0F172A] rounded-full hover:border-[#2563EB] hover:bg-[#EFF6FF] transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Contact Me
                </Link>
              </div>

              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="group relative w-14 h-14 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB] flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-[#2563EB]/20"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-[#64748B] group-hover:text-[#2563EB] transition-colors relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 to-[#0F172A]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#0F172A] rounded-[3rem] blur-2xl opacity-20 animate-pulse"></div>
                
                {/* Profile Picture Container */}
                <div className="relative w-80 h-80 rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl shadow-[#2563EB]/20 bg-white">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
                    alt="Abhishek Pokhrel - Profile Picture"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent"></div>
                </div>

                {/* Floating Decorative Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-6 -right-6 w-28 h-28 bg-gradient-to-br from-[#2563EB] to-[#0F172A] rounded-3xl -z-10 shadow-xl shadow-[#2563EB]/30"
                ></motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-6 -left-6 w-20 h-20 bg-[#0F172A] rounded-3xl -z-10 shadow-xl shadow-[#0F172A]/30"
                ></motion.div>
                
                {/* Small accent dots */}
                <div className="absolute top-10 -right-4 w-4 h-4 bg-[#2563EB] rounded-full shadow-lg shadow-[#2563EB]/50"></div>
                <div className="absolute bottom-20 -left-4 w-3 h-3 bg-[#2563EB] rounded-full shadow-lg shadow-[#2563EB]/50"></div>
              </div>
            </motion.div>
          </div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="group relative p-6 bg-white/50 backdrop-blur-sm border border-[#E2E8F0] rounded-2xl hover:border-[#2563EB] hover:shadow-xl hover:shadow-[#2563EB]/10 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-[#EFF6FF] to-[#F8FAFC] border border-[#2563EB]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 h-5 text-[#2563EB]" />
                </div>
                
                {/* Content */}
                <p className="text-sm text-[#64748B] mb-2">{item.label}</p>
                <p className="text-lg text-[#0F172A]">{item.value}</p>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#2563EB] to-[#0F172A] rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
