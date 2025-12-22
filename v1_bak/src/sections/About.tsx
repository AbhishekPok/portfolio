import { motion } from 'motion/react';

import { Sparkles, Target, Zap } from 'lucide-react';

const About = () => {
    const focuses = [
        'DevOps',
        'Cloud Computing',
        'Python & Django',
        'Docker & Kubernetes',
        'Linux & Automation',
    ];

    const values = [
        {
            icon: Sparkles,
            title: 'Innovation',
            description: 'Embracing cutting-edge technologies and modern development practices',
        },
        {
            icon: Target,
            title: 'Precision',
            description: 'Writing clean, efficient code with attention to detail',
        },
        {
            icon: Zap,
            title: 'Performance',
            description: 'Building scalable systems optimized for speed and reliability',
        },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-40 right-20 w-96 h-96 bg-[#2563EB] opacity-5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 left-20 w-72 h-72 bg-[#0F172A] opacity-5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto px-6 lg:px-8">


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative lg:mt-16"
                    >
                        <div className="relative mx-auto w-full max-w-[20rem] aspect-[3/4] lg:max-w-[24rem]">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#0F172A] rounded-[2rem] blur-2xl opacity-20"></div>

                            {/* Image container */}
                            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl shadow-[#2563EB]/20 bg-white">
                                <img
                                    src={`${import.meta.env.BASE_URL}img/profile_new.webp`}
                                    alt="Abhishek Pokhrel"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/20 to-transparent"></div>
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#2563EB] to-[#0F172A] rounded-2xl -z-10 shadow-xl shadow-[#2563EB]/40"
                            ></motion.div>
                            <motion.div
                                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#0F172A] rounded-2xl -z-10 shadow-xl shadow-[#0F172A]/40"
                            ></motion.div>
                        </div>
                    </motion.div>

                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#EFF6FF] to-[#F8FAFC] border border-[#2563EB]/20 rounded-full mb-2"
                        >
                            <Sparkles className="w-4 h-4 text-[#2563EB]" />
                            <span className="text-sm text-[#2563EB]">Get to know me</span>
                        </motion.div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                            About Me
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I'm a passionate software engineer with expertise in DevOps, cloud infrastructure,
                            and backend development. My journey in technology started with a curiosity about
                            automation and efficiency, which led me to specialize in building scalable systems.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Throughout my career, I've focused on automating deployment processes, managing
                            cloud infrastructure, and developing robust backend applications. I believe in
                            writing clean code, implementing best practices, and continuously learning new
                            technologies.
                        </p>

                        <div className="pt-6">
                            <h3 className="text-2xl text-foreground mb-6">What I Focus On</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {focuses.map((focus, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group flex items-center gap-4 p-4 bg-secondary/10 border border-border rounded-xl hover:border-primary hover:bg-secondary/20 hover:shadow-[0_0_20px_rgba(var(--primary),0.15)] transition-all duration-300"
                                    >
                                        <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(64,224,208,0.6)] group-hover:scale-125 transition-transform"></div>
                                        <span className="text-muted-foreground group-hover:text-foreground transition-colors">{focus}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-24"
                >
                    <h2 className="text-3xl text-primary text-center mb-12">Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-secondary/5 border border-primary/30 hover:scale-[0.98] hover:shadow-[0_0_30px_rgba(var(--primary),0.15)] transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                                    <value.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-primary">{value.title}</h3>
                                <p className="text-muted-foreground">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
