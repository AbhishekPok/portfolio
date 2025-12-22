import React from 'react';

import { Layers, Command, Palette, Monitor, Terminal as TerminalIcon, X, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const ConfigOverlay = ({ onClose }: { onClose: () => void }) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex flex-col items-center justify-center p-8 backdrop-blur-sm"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
                <X size={32} />
            </button>

            <div
                className="flex flex-col md:flex-row gap-8 max-w-[90vw] max-h-[80vh] overflow-y-auto custom-scrollbar items-center justify-center"
                onClick={e => e.stopPropagation()}
            >
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    <img src="/img/rice1.png" alt="Hyprland Config 1" className="rounded-xl shadow-2xl border border-white/10 max-h-[70vh] object-contain" />
                </motion.div>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <img src="/img/rice2.png" alt="Hyprland Config 2" className="rounded-xl shadow-2xl border border-white/10 max-h-[70vh] object-contain" />
                </motion.div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-foreground/50 font-mono text-sm">
                <Minimize2 size={16} />
                <span>Press ESC to exit full screen</span>
            </div>
        </motion.div>,
        document.body
    );
};

const TerminalInterface = ({ onConfig }: { onConfig: () => void }) => {
    const [history, setHistory] = useState<Array<{ type: 'command' | 'output', content: React.ReactNode }>>([
        { type: 'output', content: "Welcome to my Hyprland configuration showcase. Type 'help' to see available commands." }
    ]);
    const [input, setInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [history]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        const cmd = input.trim().toLowerCase();

        if (!cmd) return;

        const newHistory = [...history, { type: 'command' as const, content: cmd }];

        switch (cmd) {
            case 'help':
                newHistory.push({
                    type: 'output',
                    content: (
                        <div className="grid grid-cols-[100px_1fr] gap-2">
                            <span className="text-yellow-400">help</span> <span className="text-gray-400">Show all available commands</span>
                            <span className="text-yellow-400">config</span> <span className="text-gray-400">Render config screenshots</span>
                            <span className="text-yellow-400">whoami</span> <span className="text-gray-400">Display user details</span>
                            <span className="text-yellow-400">clear</span> <span className="text-gray-400">Clear terminal</span>
                        </div>
                    )
                });
                break;
            case 'whoami':
                newHistory.push({
                    type: 'output',
                    content: (
                        <div className="space-y-1">
                            <p>User: <span className="text-green-400">Abhishek Pokhrel</span></p>
                            <p>Role: <span className="text-blue-400">Full Stack Developer</span></p>
                            <p>Shell: <span className="text-purple-400">zsh</span></p>
                            <p>Uptime: <span className="text-red-400">Forever</span></p>
                        </div>
                    )
                });
                break;
            case 'config':
                newHistory.push({
                    type: 'output',
                    content: (
                        <div className="space-y-4 mt-2">
                            <p className="text-gray-400">Opening full screen config viewer...</p>
                        </div>
                    )
                });
                // Small delay to allow the user to read the message before overlay opens (optional, but nice)
                setTimeout(() => {
                    onConfig();
                }, 500);
                break;
            case 'clear':
                setHistory([]);
                setInput('');
                return;
            default:
                newHistory.push({
                    type: 'output',
                    content: <span className="text-red-400">Command not found: {cmd}. Type 'help' for available commands.</span>
                });
        }

        setHistory(newHistory);
        setInput('');
    };

    return (
        <div
            className="bg-[#1e1e2e] rounded-xl overflow-hidden shadow-2xl border border-gray-800 font-mono text-sm relative group h-[400px] flex flex-col"
            onClick={() => inputRef.current?.focus()}
        >
            <div className="h-8 bg-[#181825] flex items-center px-4 gap-2 border-b border-gray-800">
                <div className="w-3 h-3 rounded-full bg-[#f38ba8]"></div>
                <div className="w-3 h-3 rounded-full bg-[#f9e2af]"></div>
                <div className="w-3 h-3 rounded-full bg-[#a6e3a1]"></div>
                <div className="ml-auto flex items-center gap-2 text-xs text-gray-500">
                    <TerminalIcon size={12} />
                    <span>sh</span>
                </div>
            </div>

            <div
                ref={containerRef}
                className="flex-1 p-4 overflow-y-auto custom-scrollbar"
            >
                {history.map((item, idx) => (
                    <div key={idx} className="mb-2 break-words">
                        {item.type === 'command' ? (
                            <div className="flex gap-2 items-center text-gray-400">
                                <span className="text-[#89b4fa]">➜</span>
                                <span className="text-[#f9e2af]">~</span>
                                <span className="text-white">{item.content}</span>
                            </div>
                        ) : (
                            <div className="pl-6 text-gray-300">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}

                <form onSubmit={handleCommand} className="flex gap-2 items-center">
                    <span className="text-[#89b4fa]">➜</span>
                    <span className="text-[#f9e2af]">~</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 bg-transparent outline-none text-white border-none p-0 focus:ring-0"
                    />
                </form>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-xl pointer-events-none"></div>
        </div >
    );
};

const Ricing = () => {
    const [showConfig, setShowConfig] = useState(false);
    const features = [
        {
            icon: <Layers className="text-blue-400" size={32} />,
            title: "Waybar Config",
            description: "Custom modules for CPU, RAM, and network traffic with a clean, pill-shaped aesthetic."
        },
        {
            icon: <Command className="text-purple-400" size={32} />,
            title: "Keybind Workflow",
            description: "Vim-like navigation for window management. Efficiency is key."
        },
        {
            icon: <Palette className="text-pink-400" size={32} />,
            title: "System Theming",
            description: "Consistent Catppuccin Mocha color scheme across GTK, QT, and terminal apps."
        },
        {
            icon: <Monitor className="text-green-400" size={32} />,
            title: "Animations",
            description: "Smooth bezier curves for window opening, closing, and workspace switching."
        }
    ];

    return (
        <section id="ricing" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 text-foreground">Hyprland <span className="text-primary">Ricing</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My Linux environment is more than just a tool—it's a personalized workspace optimized for speed and aesthetics.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <TerminalInterface onConfig={() => setShowConfig(true)} />
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="group relative h-full p-6 bg-secondary/10 backdrop-blur-sm border border-primary/30 rounded-3xl hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(var(--primary),0.15)] transition-all duration-500">
                                    <div className="relative mb-4 inline-block">
                                        <div className="p-3 bg-secondary/20 rounded-2xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                                            {feature.icon}
                                        </div>
                                        <div className="absolute inset-0 bg-primary rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-primary">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {feature.description}
                                    </p>

                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {showConfig && <ConfigOverlay onClose={() => setShowConfig(false)} />}
            </AnimatePresence>
        </section >
    );
};

export default Ricing;
