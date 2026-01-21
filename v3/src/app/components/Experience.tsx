import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experiences, education } from '../data/portfolioData';

export function Experience() {

  return (
    <section className="py-24 px-6 bg-[#111827]/30" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-[#E5E7EB] mb-4 text-center">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22D3EE] to-[#38BDF8] mx-auto mb-16 rounded-full"></div>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[#22D3EE]/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-[#22D3EE]" />
            </div>
            <h3 className="text-2xl text-[#E5E7EB]">Work Experience</h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#22D3EE] via-[#38BDF8] to-transparent"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-[26px] w-0.5 h-0.5">
                    <div className="absolute -left-1.5 -top-1.5 w-3.5 h-3.5 rounded-full bg-[#22D3EE] shadow-lg shadow-[#22D3EE]/50"></div>
                  </div>

                  <div className="bg-[#111827] border border-[#374151] rounded-xl p-6 hover:border-[#22D3EE]/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h4 className="text-xl text-[#E5E7EB] mb-1">{exp.title}</h4>
                        <p className="text-[#22D3EE]">{exp.company}</p>
                      </div>
                      <span className="text-[#9CA3AF] text-sm mt-2 md:mt-0">{exp.period}</span>
                    </div>

                    <p className="text-[#9CA3AF] mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#9CA3AF] leading-relaxed">
                          <span className="text-[#22D3EE] h-[1.625em] flex items-center flex-shrink-0 text-xs">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[#38BDF8]/10 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-[#38BDF8]" />
            </div>
            <h3 className="text-2xl text-[#E5E7EB]">Education</h3>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#38BDF8] via-[#22D3EE] to-transparent"></div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative pl-8"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-[26px] w-0.5 h-0.5">
                    <div className="absolute -left-1.5 -top-1.5 w-3.5 h-3.5 rounded-full bg-[#38BDF8] shadow-lg shadow-[#38BDF8]/50"></div>
                  </div>

                  <div className="bg-[#111827] border border-[#374151] rounded-xl p-6 hover:border-[#38BDF8]/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h4 className="text-xl text-[#E5E7EB] mb-1">{edu.degree}</h4>
                        <p className="text-[#38BDF8]">{edu.institution}</p>
                      </div>
                      <span className="text-[#9CA3AF] text-sm mt-2 md:mt-0">{edu.period}</span>
                    </div>

                    <p className="text-[#9CA3AF] mb-4">{edu.description}</p>

                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-[#9CA3AF] leading-relaxed">
                          <span className="text-[#38BDF8] h-[1.625em] flex items-center flex-shrink-0 text-xs">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
