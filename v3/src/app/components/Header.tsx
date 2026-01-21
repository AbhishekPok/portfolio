import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F14]/80 backdrop-blur-lg border-b border-[#374151]/30"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl text-[#E5E7EB] flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#22D3EE] to-[#38BDF8] flex items-center justify-center">
              <span className="text-[#0B0F14] text-sm">AP</span>
            </div>
            <span className="hidden sm:inline group-hover:text-[#22D3EE] transition-colors duration-300">
              Abhishek Pokhrel
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#9CA3AF] hover:text-[#22D3EE] transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#22D3EE] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:block px-6 py-2 bg-[#22D3EE] text-[#0B0F14] rounded-lg hover:bg-[#38BDF8] transition-all duration-300 shadow-lg shadow-[#22D3EE]/20"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#E5E7EB] hover:text-[#22D3EE] transition-colors duration-300"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-[#374151]/30"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[#9CA3AF] hover:text-[#22D3EE] transition-colors duration-300 py-2"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-2 bg-[#22D3EE] text-[#0B0F14] rounded-lg hover:bg-[#38BDF8] transition-all duration-300 text-center"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
