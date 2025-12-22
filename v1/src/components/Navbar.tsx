import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Code, Cpu, Mail, User, Download, Briefcase, Sun, Moon } from 'lucide-react';
import Lenis from 'lenis';
import { useTheme } from '../contexts/ThemeContext';

interface NavbarProps {
    lenis: Lenis | null;
}

const Navbar = ({ lenis }: NavbarProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        if (lenis) {
            lenis.scrollTo(href);
        } else {
            // Fallback if lenis isn't ready
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about', icon: <User size={18} /> },
        { name: 'Experience', href: '#experience', icon: <Briefcase size={18} /> },
        { name: 'Ricing', href: '#ricing', icon: <Terminal size={18} /> },
        { name: 'Projects', href: '#projects', icon: <Code size={18} /> },
        { name: 'Skills', href: '#skills', icon: <Cpu size={18} /> },
        { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-2 border-b border-white/10' : 'bg-transparent py-4'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold text-primary flex items-center gap-2">
                    <Terminal className="text-primary" />
                    <span className="font-mono">~/abhi</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
                        >
                            {link.icon}
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="Toggle theme"
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <a
                        href={`${import.meta.env.BASE_URL}resume/Abhishek_CV.pdf`}
                        download="Abhishek_CV.pdf"
                        className="flex items-center gap-2 px-4 py-2 bg-transparent border border-border text-muted-foreground rounded-lg hover:border-primary hover:text-primary transition-colors"
                    >
                        <Download size={18} />
                        Resume
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, '#contact')}
                        className="px-4 py-2 bg-primary text-white text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-white/10 p-4 shadow-lg">
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="flex items-center gap-3 text-muted-foreground hover:text-primary py-2"
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.icon}
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                setTheme(theme === "dark" ? "light" : "dark");
                                setIsMobileMenuOpen(false);
                            }}
                            className="flex items-center gap-3 text-muted-foreground hover:text-primary py-2"
                        >
                            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                            {theme === "dark" ? "Light Mode" : "Dark Mode"}
                        </button>
                        <a
                            href={`${import.meta.env.BASE_URL}resume/Abhishek_CV.pdf`}
                            download="Abhishek_CV.pdf"
                            className="flex items-center gap-3 text-muted-foreground hover:text-primary py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <Download size={18} />
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
