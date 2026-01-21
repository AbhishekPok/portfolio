import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';

export function Projects() {

  return (
    <section className="py-24 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-[#E5E7EB] mb-4 text-center">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22D3EE] to-[#38BDF8] mx-auto mb-16 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-[#111827] border border-[#374151] rounded-xl overflow-hidden hover:border-[#22D3EE]/50 transition-all duration-300 group flex flex-col"
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-6 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="text-xl text-[#E5E7EB] mb-3 group-hover:text-[#22D3EE] transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#9CA3AF] mb-4 flex-1 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-[#0B0F14] text-[#9CA3AF] rounded-md border border-[#374151]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#0B0F14] border border-[#374151] rounded-lg text-[#9CA3AF] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#22D3EE] text-[#0B0F14] rounded-lg hover:bg-[#38BDF8] transition-all duration-300 shadow-lg shadow-[#22D3EE]/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#111827] border border-[#374151] rounded-lg text-[#E5E7EB] hover:border-[#22D3EE]/50 hover:text-[#22D3EE] transition-all duration-300"
          >
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
