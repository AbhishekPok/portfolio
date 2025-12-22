import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Send, Github, Linkedin, MessageSquare, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com', color: 'from-[#0F172A] to-[#2563EB]' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com', color: 'from-[#2563EB] to-[#0F172A]' },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'abhishek@example.com',
      link: 'mailto:abhishek@example.com',
    },
  ];

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#2563EB] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#0F172A] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#EFF6FF] to-[#F8FAFC] border border-[#2563EB]/20 rounded-full mb-6"
            >
              <MessageSquare className="w-4 h-4 text-[#2563EB]" />
              <span className="text-sm text-[#2563EB]">Let's Connect</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl mb-6 text-[#0F172A]">
              Get In Touch
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-[#2563EB] to-[#0F172A] rounded-full mx-auto"></div>
            <p className="mt-6 text-lg text-[#64748B] max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative bg-white/50 backdrop-blur-sm border border-[#E2E8F0] rounded-3xl p-8 hover:border-[#2563EB]/30 hover:shadow-2xl hover:shadow-[#2563EB]/10 transition-all duration-500">
                {/* Decorative corner */}
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-br from-[#2563EB] to-[#0F172A] rounded-2xl -z-10 opacity-20"></div>
                
                <h2 className="text-3xl text-[#0F172A] mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#2563EB] to-[#0F172A] rounded-xl flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  Send a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center"
                  >
                    <div className="relative w-20 h-20 mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#0F172A] rounded-full blur-xl opacity-30"></div>
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#2563EB] to-[#0F172A] flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl text-[#0F172A] mb-3">Message Sent!</h3>
                    <p className="text-[#64748B]">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-sm text-[#0F172A]">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-2xl border-2 border-[#E2E8F0] bg-white focus:border-[#2563EB] focus:outline-none focus:shadow-lg focus:shadow-[#2563EB]/10 transition-all duration-300 text-[#0F172A]"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm text-[#0F172A]">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 rounded-2xl border-2 border-[#E2E8F0] bg-white focus:border-[#2563EB] focus:outline-none focus:shadow-lg focus:shadow-[#2563EB]/10 transition-all duration-300 text-[#0F172A]"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm text-[#0F172A]">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-5 py-4 rounded-2xl border-2 border-[#E2E8F0] bg-white focus:border-[#2563EB] focus:outline-none focus:shadow-lg focus:shadow-[#2563EB]/10 transition-all duration-300 resize-none text-[#0F172A]"
                        placeholder="Your message..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="group relative w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#0F172A] text-white hover:shadow-xl hover:shadow-[#2563EB]/30 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
                    >
                      <span className="relative z-10">Send Message</span>
                      <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-8"
            >
              {/* Contact Methods */}
              <div className="space-y-4">
                <h2 className="text-3xl text-[#0F172A] mb-6">Contact Information</h2>
                <p className="text-[#64748B] mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities and interesting projects. 
                  Feel free to reach out through any of these channels.
                </p>

                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="group block"
                  >
                    <div className="relative p-6 bg-white/50 backdrop-blur-sm border border-[#E2E8F0] rounded-2xl hover:border-[#2563EB] hover:shadow-xl hover:shadow-[#2563EB]/10 transition-all duration-500">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-14 h-14 bg-gradient-to-br from-[#EFF6FF] to-[#F8FAFC] border border-[#2563EB]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <method.icon className="w-6 h-6 text-[#2563EB]" />
                          </div>
                          <div className="absolute inset-0 bg-[#2563EB] rounded-xl blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        </div>
                        <div>
                          <p className="text-sm text-[#64748B] mb-1">{method.title}</p>
                          <p className="text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl text-[#0F172A] mb-6">Connect on Social</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="group relative p-6 bg-white/50 backdrop-blur-sm border border-[#E2E8F0] rounded-2xl hover:border-[#2563EB] hover:shadow-xl hover:shadow-[#2563EB]/10 transition-all duration-500"
                      aria-label={social.name}
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div className="relative">
                          <div className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                            <social.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="absolute inset-0 bg-[#2563EB] rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity"></div>
                        </div>
                        <span className="text-sm text-[#64748B] group-hover:text-[#2563EB] transition-colors">
                          {social.name}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Decorative Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="relative p-8 bg-gradient-to-br from-[#EFF6FF] to-[#F8FAFC] border border-[#2563EB]/20 rounded-3xl"
              >
                <div className="absolute top-4 left-4 text-6xl text-[#2563EB] opacity-10">"</div>
                <p className="text-[#64748B] italic leading-relaxed pl-6">
                  Let's build something amazing together. Every great project starts with a conversation.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
