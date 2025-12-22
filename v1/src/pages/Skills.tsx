import { motion } from 'motion/react';
import {
  Code,
  Server,
  Cloud,
  Database,
  Container,
  GitBranch,
  Terminal,
  Settings,
  Boxes,
  Workflow,
  Layers,
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: Code,
      color: 'from-[#2563EB] to-[#0F172A]',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    },
    {
      category: 'Backend',
      icon: Server,
      color: 'from-[#0F172A] to-[#2563EB]',
      skills: ['Python', 'Django', 'Django REST Framework'],
    },
    {
      category: 'DevOps',
      icon: Container,
      color: 'from-[#2563EB] to-[#0F172A]',
      skills: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins'],
    },
    {
      category: 'Cloud',
      icon: Cloud,
      color: 'from-[#0F172A] to-[#2563EB]',
      skills: ['AWS (basic)', 'CI/CD concepts'],
    },
    {
      category: 'Tools',
      icon: Settings,
      color: 'from-[#2563EB] to-[#0F172A]',
      skills: ['Git', 'VSCode', 'Linux'],
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
              <Layers className="w-4 h-4 text-[#2563EB]" />
              <span className="text-sm text-[#2563EB]">Technical Expertise</span>
            </motion.div>

            <h1 className="text-5xl lg:text-6xl mb-6 text-[#0F172A]">
              Skills & Technologies
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-[#2563EB] to-[#0F172A] rounded-full mx-auto"></div>
            <p className="mt-6 text-lg text-[#64748B] max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-white/50 backdrop-blur-sm border border-[#E2E8F0] rounded-3xl p-8 hover:border-[#2563EB] hover:shadow-2xl hover:shadow-[#2563EB]/10 transition-all duration-500">
                  {/* Icon with gradient background */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg shadow-[#2563EB]/30`}
                    >
                      <category.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-[#2563EB] rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  </div>

                  {/* Category title */}
                  <h3 className="text-2xl text-[#0F172A] mb-6">{category.category}</h3>

                  {/* Skills badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 text-sm text-[#64748B] bg-[#F8FAFC] border border-[#E2E8F0] rounded-full hover:bg-white hover:text-[#2563EB] hover:border-[#2563EB] transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Progress bar at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-[#EFF6FF] to-[#F8FAFC] border border-[#2563EB]/20 rounded-3xl">
              <Workflow className="w-12 h-12 text-[#2563EB] mx-auto mb-4" />
              <h3 className="text-2xl text-[#0F172A] mb-4">Continuous Learning</h3>
              <p className="text-[#64748B] leading-relaxed">
                Technology evolves rapidly, and so do I. I'm constantly exploring new tools, 
                frameworks, and best practices to stay at the forefront of modern development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
