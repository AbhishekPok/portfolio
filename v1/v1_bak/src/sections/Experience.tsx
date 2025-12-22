import { motion } from 'motion/react';
import { Briefcase, Calendar } from 'lucide-react';
import { experienceData } from '../data/experience';

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#2563EB] opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-[#0F172A] opacity-5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#EFF6FF] to-[#F8FAFC] border border-[#2563EB]/20 rounded-full mb-6"
                    >
                        <Briefcase className="w-4 h-4 text-[#2563EB]" />
                        <span className="text-sm text-[#2563EB]">Career Journey</span>
                    </motion.div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Work <span className="text-primary">Experience</span>
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/30 shadow-[0_0_10px_rgba(64,224,208,0.3)]"></div>

                    <div className="space-y-12">
                        {experienceData.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-background border-4 border-primary rounded-full z-10 mt-1.5 shadow-[0_0_15px_rgba(64,224,208,0.8)]"></div>

                                {/* Content Card */}
                                <div className="ml-8 md:ml-0 md:w-1/2">
                                    <div className={`p-6 bg-secondary/10 backdrop-blur-sm border border-primary/30 rounded-2xl hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(var(--primary),0.15)] transition-transform duration-300 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                        }`}>
                                        <div className={`flex items-center gap-2 text-primary mb-2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                                            }`}>
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm font-medium text-foreground">{item.date}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-primary mb-1">{item.role}</h3>
                                        <p className="text-muted-foreground font-medium mb-4">{item.company}</p>

                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                            {item.description}
                                        </p>

                                        <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                                            }`}>
                                            {item.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 py-1 text-xs text-primary bg-primary/10 border border-primary/20 rounded-full"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
