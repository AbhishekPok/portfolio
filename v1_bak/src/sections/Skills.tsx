import { motion } from 'framer-motion';
import {
    Cloud,
    Terminal,
    Layers,
    Workflow
} from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Containerization",
            icon: Layers,
            skills: ["Docker", "Kubernetes"],
            description: "Building and orchestrating scalable containerized applications"
        },
        {
            title: "Cloud & IaC",
            icon: Cloud,
            skills: ["AWS Basics", "Terraform"],
            description: "Provisioning and managing cloud infrastructure as code"
        },
        {
            title: "DevOps & CI/CD",
            icon: Workflow, // Fallback if Workflow not found? lucide usually has it. If not, use GitBranch
            skills: ["GitHub Actions", "Git", "CI/CD Pipelines"],
            description: "Automating deployment workflows and version control"
        },
        {
            title: "Backend & Scripting",
            icon: Terminal,
            skills: ["Python", "Linux / Bash", "Shell Scripting"],
            description: "Developing robust backend logic and system automation"
        }
    ];

    return (
        <section id="skills" className="py-24 bg-background/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                            Technical <span className="text-primary">Expertise</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            My technical toolkit for building resilient, scalable, and automated infrastructure.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-6 bg-secondary/10 border border-primary/30 rounded-2xl hover:scale-[0.98] hover:shadow-[0_0_20px_rgba(var(--primary),0.15)] transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 mb-6 bg-secondary/20 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                    <category.icon size={24} />
                                </div>

                                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary transition-colors">
                                    {category.title}
                                </h3>

                                <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">
                                    {category.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Skills;
