import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import styles from './Navbar.module.css';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'; // Using react-scroll for SPA navigation

const Navbar: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Projects', to: 'projects' },
        { name: 'Experience', to: 'experience' },
        { name: 'Skills', to: 'skills' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.content}`}>
                <div className={styles.logo}>
                    <span className="accent">~/</span>abhi<span className="accent">$</span>
                </div>

                <div className={`${styles.links} ${isMenuOpen ? styles.open : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className={styles.link}
                            onClick={() => setIsMenuOpen(false)}
                            style={{ cursor: 'pointer' }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <a href="/assets/Abhishek_CV.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeBtn}>
                        Resume
                    </a>

                    <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>
                </div>

                <button className={styles.mobileMenuBtn} onClick={toggleMenu} aria-label="Toggle Menu">
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
