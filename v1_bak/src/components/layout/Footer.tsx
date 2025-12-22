import { Github, Linkedin, Mail, Code2, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { name: 'Email', icon: Mail, url: 'mailto:abhishek@example.com' },
  ];

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0F172A] overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#2563EB] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#2563EB] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top accent line */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#2563EB] to-transparent rounded-full mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-white rounded-xl flex items-center justify-center">
                <Code2 className="w-5 h-5 text-[#0F172A]" />
              </div>
              <h3 className="text-white text-xl">Abhishek Pokhrel</h3>
            </div>
            <p className="text-[#94A3B8] text-sm mb-6 leading-relaxed">
              Software Engineer • DevOps Enthusiast • Backend Developer
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="group relative w-11 h-11 rounded-xl border border-[#1E293B] hover:border-[#2563EB] flex items-center justify-center transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-[#94A3B8] group-hover:text-[#2563EB] transition-colors relative z-10" />
                  <div className="absolute inset-0 bg-[#2563EB]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className="text-white text-sm mb-6 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-[#94A3B8] hover:text-white text-sm transition-colors"
                  >
                    <span className="w-0 h-px bg-[#2563EB] group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-white text-sm mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[#94A3B8] text-sm"
              >
                <a
                  href="mailto:abhishek@example.com"
                  className="hover:text-[#2563EB] transition-colors"
                >
                  abhishek@example.com
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1E293B] border border-[#2563EB]/20 rounded-full text-[#94A3B8] text-sm"
              >
                <div className="w-2 h-2 bg-[#2563EB] rounded-full animate-pulse"></div>
                Available for freelance work
              </motion.li>
            </ul>

            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 group relative w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#0F172A] border-2 border-[#2563EB] rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-[#2563EB]/50 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[#1E293B]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#94A3B8] text-sm"
            >
              © {new Date().getFullYear()} Abhishek Pokhrel. Built with passion and precision.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-xs text-[#64748B]"
            >
              <span>Designed with</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#2563EB] rounded-full"></div>
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <div className="w-2 h-2 bg-[#0F172A] rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
