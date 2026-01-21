import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export function Contact() {
  const { email, phone, location, socialLinks } = personalInfo;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 px-6" id="contact">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-[#E5E7EB] mb-4 text-center">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22D3EE] to-[#38BDF8] mx-auto mb-6 rounded-full"></div>
          <p className="text-center text-[#9CA3AF] mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-[#E5E7EB] mb-2 text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#111827] border border-[#374151] rounded-lg text-[#E5E7EB] placeholder-[#9CA3AF] focus:outline-none focus:border-[#22D3EE]/50 focus:ring-1 focus:ring-[#22D3EE]/50 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#E5E7EB] mb-2 text-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#111827] border border-[#374151] rounded-lg text-[#E5E7EB] placeholder-[#9CA3AF] focus:outline-none focus:border-[#22D3EE]/50 focus:ring-1 focus:ring-[#22D3EE]/50 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#E5E7EB] mb-2 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#111827] border border-[#374151] rounded-lg text-[#E5E7EB] placeholder-[#9CA3AF] focus:outline-none focus:border-[#22D3EE]/50 focus:ring-1 focus:ring-[#22D3EE]/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-[#22D3EE] text-[#0B0F14] rounded-lg hover:bg-[#38BDF8] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#22D3EE]/20 hover:shadow-[#22D3EE]/40 hover:scale-[1.02]"
              >
                <span className="font-medium">Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-[#111827] border border-[#374151] rounded-lg hover:border-[#22D3EE]/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#22D3EE]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#22D3EE]" />
                </div>
                <div>
                  <h4 className="text-[#E5E7EB] mb-1">Location</h4>
                  <p className="text-[#9CA3AF] text-sm">{location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#111827] border border-[#374151] rounded-lg hover:border-[#22D3EE]/50 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#38BDF8]" />
                </div>
                <div>
                  <h4 className="text-[#E5E7EB] mb-1">Phone</h4>
                  <p className="text-[#9CA3AF] text-sm">{phone}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-[#E5E7EB] mb-4">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-[#111827] border border-[#374151] rounded-lg hover:border-[#22D3EE]/50 transition-all duration-300 group"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${social.color}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: social.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[#E5E7EB] mb-0.5 text-sm">{social.name}</h4>
                        <p className="text-[#9CA3AF] text-xs truncate group-hover:text-[#22D3EE] transition-colors duration-300">
                          {social.text}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="p-6 bg-gradient-to-br from-[#22D3EE]/10 to-[#38BDF8]/10 border border-[#22D3EE]/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse"></div>
                <span className="text-[#22D3EE] text-sm">Available for opportunities</span>
              </div>
              <p className="text-[#9CA3AF] text-sm">
                Currently open to DevOps, Backend Engineering, and Cloud Infrastructure roles.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
