import { motion } from 'motion/react';
import { skillsData } from '../data/portfolioData';

export function Skills() {
  const { categories, additionalSkills } = skillsData;

  return (
    <section className="py-24 px-6 bg-[#111827]/30" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl text-[#E5E7EB] mb-4 text-center">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#22D3EE] to-[#38BDF8] mx-auto mb-16 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-[#111827] border border-[#374151] rounded-xl p-6 hover:border-[#22D3EE]/50 transition-all duration-300 group"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundColor: `${category.color}15`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: category.color }} />
                </div>

                {/* Category Title */}
                <h3 className="text-xl text-[#E5E7EB] mb-4">{category.title}</h3>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-[#0B0F14] text-[#9CA3AF] rounded-md border border-[#374151] hover:border-[#22D3EE]/50 hover:text-[#22D3EE] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-8 bg-[#111827] border border-[#374151] rounded-xl"
        >
          <h3 className="text-xl text-[#E5E7EB] mb-6 text-center">Also Proficient In</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {additionalSkills.map((skill: string, index: number) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="px-4 py-2 bg-[#111827] border border-[#374151] rounded-lg text-[#9CA3AF] hover:text-[#22D3EE] hover:border-[#22D3EE]/50 transition-all duration-300 cursor-default flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]/50"></div>
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
