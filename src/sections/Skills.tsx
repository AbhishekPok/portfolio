import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: "Docker", level: 40, color: "bg-blue-500" },
        { name: "Kubernetes", level: 40, color: "bg-blue-600" },
        { name: "CI/CD (GitHub Actions)", level: 20, color: "bg-green-500" },
        { name: "Linux / Bash", level: 70, color: "bg-yellow-500" },
        { name: "Terraform", level: 30, color: "bg-purple-500" },
        { name: "Python", level: 50, color: "bg-blue-400" },
        { name: "Git", level: 40, color: "bg-orange-500" },
        { name: "AWS Basics", level: 10, color: "bg-yellow-600" },
    ];

    return (
        <section id="skills" className="py-20 bg-background/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-white">Technical <span className="text-primary">Skills</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Tools and technologies I use to build resilient infrastructure.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                        >
                            <div className="flex justify-between mb-2">
                                <span className="font-medium text-gray-300">{skill.name}</span>
                                <span className="text-gray-400 text-sm">{skill.level}%</span>
                            </div>
                            <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    className={`h-full rounded-full ${skill.color}`}
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
