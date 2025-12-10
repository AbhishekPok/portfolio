import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#051010] border-t border-primary/20 text-white py-12 mt-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">Abhishek Pokhrel</h3>
                        <p className="text-gray-400">DevOps Engineer & Linux Enthusiast</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Twitter size={24} />
                        </a>
                        <a href="mailto:contact@example.com" className="text-gray-400 hover:text-primary transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Abhishek Pokhrel. Built with React & Tailwind.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
