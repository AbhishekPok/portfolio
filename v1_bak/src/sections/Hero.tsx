
import { ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 -z-20"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-primary text-sm font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Available for hire
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <span className="text-primary">Abhishek</span>
                        <br />
                        <span className="text-primary neon-text">DevOps Engineer</span>
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                        I build automation, infrastructure, and high-performance Linux setups.
                        Turning chaos into code, one pipeline at a time.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 flex items-center gap-2"
                        >
                            View DevOps Work <ArrowRight size={18} />
                        </a>
                        <a
                            href="#ricing"
                            className="relative overflow-hidden px-8 py-4 rounded-lg font-medium border border-primary/50 text-primary hover:text-primary-foreground transition-all duration-300 group"
                        >
                            <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary transition-colors duration-300"></span>
                            <span className="relative flex items-center gap-2">
                                View Ricing
                                <Terminal size={20} />
                            </span>
                            <span className="absolute inset-0 rounded-lg ring-1 ring-inset ring-primary/20 group-hover:ring-primary/0 transition-all"></span>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    {/* Abstract floating windows representation */}
                    <div className="relative w-full h-[500px]">
                        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 z-20 floating-window">
                            <div className="flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="space-y-2 font-mono text-sm text-gray-600">
                                <div className="flex gap-2">
                                    <span className="text-blue-500">➜</span>
                                    <span className="text-purple-500">~</span>
                                    <span>neofetch</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="text-primary">
                                        OS: Arch Linux x86_64<br />
                                        Host: ROG Strix G15<br />
                                        Kernel: 6.6.7-arch1-1<br />
                                        Uptime: 4 days, 2 hours<br />
                                        Packages: 1245 (pacman)<br />
                                        Shell: zsh 5.9
                                    </div>
                                    <div className="text-gray-500">
                                        WM: Hyprland<br />
                                        Theme: Catppuccin Mocha<br />
                                        Icons: Papirus-Dark<br />
                                        Terminal: Kitty<br />
                                        CPU: AMD Ryzen 7 5800H<br />
                                        GPU: NVIDIA RTX 3060
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-10 left-0 w-2/3 h-1/2 bg-secondary/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-700 p-4 z-10 floating-window" style={{ animationDelay: '-2s' }}>
                            <div className="flex items-center justify-between mb-4 border-b border-gray-700 pb-2">
                                <span className="text-gray-400 text-xs font-mono">pipeline.yml</span>
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                                    <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                                </div>
                            </div>
                            <div className="font-mono text-xs text-green-400">
                                <p><span className="text-purple-400">name:</span> CI/CD Pipeline</p>
                                <p><span className="text-purple-400">on:</span> [push]</p>
                                <p><span className="text-purple-400">jobs:</span></p>
                                <p className="pl-2"><span className="text-blue-400">build:</span></p>
                                <p className="pl-4"><span className="text-purple-400">runs-on:</span> ubuntu-latest</p>
                                <p className="pl-4"><span className="text-purple-400">steps:</span></p>
                                <p className="pl-6">- <span className="text-yellow-400">uses:</span> actions/checkout@v3</p>
                                <p className="pl-6">- <span className="text-yellow-400">name:</span> Build Docker Image</p>
                                <p className="pl-8"><span className="text-blue-400">run:</span> docker build . -t app</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default Hero;
