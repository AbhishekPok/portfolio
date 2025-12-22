import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Folder, Filter } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Django', 'DevOps', 'React', 'Linux'];

  const projects = [
    {
      id: '1',
      title: 'Student Management System',
      description: 'A full-stack web app to manage student records, authentication, and admin dashboards. Includes CRUD, login system, and responsive UI.',
      image: 'https://images.unsplash.com/photo-1668903678362-0fbcb9108d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkamFuZ28lMjB3ZWIlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NjQ2NDgzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Django', 'PostgreSQL', 'CRUD', 'Authentication'],
      category: 'Django',
    },
    {
      id: '2',
      title: 'DevOps WordPress Deployment',
      description: 'Multi-VM environment using Vagrant: Web server (WordPress + Nginx), Database server (MySQL). Automated provisioning using shell scripts and Linux tools.',
      image: 'https://images.unsplash.com/photo-1548544027-1a96c4c24c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZvcHMlMjBzZXJ2ZXJzJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzY0NjQ4MzUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Vagrant', 'MySQL', 'Shell Scripts', 'WordPress'],
      category: 'DevOps',
    },
    {
      id: '3',
      title: 'REST API for User Registration',
      description: 'JWT-based authentication API featuring registration, login, token handling, and permission-based access.',
      image: 'https://images.unsplash.com/photo-1564865878688-9a244444042a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0JTIwYXBpJTIwY29kZXxlbnwxfHx8fDE3NjQ2NDgzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Django REST Framework', 'JWT', 'Authentication'],
      category: 'Django',
    },
    {
      id: '4',
      title: 'React + Django Authentication System',
      description: 'Frontend (React) + Backend (Django) integrated login, protected routes, and session handling.',
      image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGFwcGxpY2F0aW9uJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NDY0ODM1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Django', 'Protected Routes', 'Session'],
      category: 'React',
    },
    {
      id: '5',
      title: 'Hyprland + Arch Linux Custom Setup',
      description: 'Custom rice for Arch Linux using Hyprland, Waybar, and custom modules.',
      image: 'https://images.unsplash.com/photo-1607743386830-f198fbd7f9c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaW51eCUyMHRlcm1pbmFsJTIwc2V0dXB8ZW58MXx8fHwxNzY0NjQ4MzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Arch Linux', 'Hyprland', 'Waybar', 'Custom'],
      category: 'Linux',
    },
  ];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#2563EB] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#0F172A] opacity-5 rounded-full blur-3xl"></div>
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
              <Folder className="w-4 h-4 text-[#2563EB]" />
              <span className="text-sm text-[#2563EB]">Portfolio Showcase</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl mb-6 text-[#0F172A]">
              Featured Projects
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-[#2563EB] to-[#0F172A] rounded-full mx-auto"></div>
            <p className="mt-6 text-lg text-[#64748B] max-w-2xl mx-auto">
              Explore my latest work in web development, DevOps, and system configuration
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center mb-12"
          >
            <div className="inline-flex items-center gap-2 p-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full">
              <Filter className="w-4 h-4 text-[#64748B] ml-2" />
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  onClick={() => setFilter(category)}
                  className={`relative px-6 py-2 text-sm rounded-full transition-all duration-300 ${
                    filter === category
                      ? 'text-white'
                      : 'text-[#64748B] hover:text-[#0F172A]'
                  }`}
                >
                  <span className="relative z-10">{category}</span>
                  {filter === category && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#0F172A] rounded-full shadow-lg shadow-[#2563EB]/30"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/projects/${project.id}`}>
                    <div className="relative h-full bg-white/50 backdrop-blur-sm border border-[#E2E8F0] rounded-3xl overflow-hidden hover:border-[#2563EB] hover:shadow-2xl hover:shadow-[#2563EB]/10 transition-all duration-500">
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-2xl text-[#0F172A] mb-3 group-hover:text-[#2563EB] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-[#64748B] text-sm mb-4 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1.5 text-xs text-[#2563EB] bg-[#EFF6FF] border border-[#2563EB]/20 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* View Details Link */}
                        <div className="flex items-center gap-2 text-[#2563EB]">
                          <span className="text-sm">View Details</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>

                      {/* Bottom accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2563EB] to-[#0F172A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Folder className="w-10 h-10 text-[#64748B]" />
              </div>
              <p className="text-[#64748B]">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
