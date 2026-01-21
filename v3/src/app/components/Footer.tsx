import { motion } from 'motion/react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo, heroData } from '../data/portfolioData';

export function Footer() {
  const { name, socialLinks } = personalInfo;
  const { title } = heroData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827]/50 border-t border-[#374151]/30 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#22D3EE] to-[#38BDF8] flex items-center justify-center">
                <span className="text-[#0B0F14] text-sm">
                  {name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <span className="text-[#E5E7EB]">{name}</span>
            </div>
            <p className="text-[#9CA3AF] text-sm">
              {title} focused on building scalable, automated, and reliable systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#E5E7EB] mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-[#9CA3AF] hover:text-[#22D3EE] transition-colors duration-300 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-[#E5E7EB] mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#111827] border border-[#374151] rounded-lg flex items-center justify-center text-[#9CA3AF] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#374151]/30 gap-4">
          <p className="text-[#9CA3AF] text-sm flex items-center gap-1">
            © {currentYear} {name}. Made with <Heart className="w-4 h-4 text-red-500" /> and lots of ☕
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-[#111827] border border-[#374151] rounded-lg text-[#9CA3AF] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 transition-all duration-300"
          >
            <span className="text-sm">Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
