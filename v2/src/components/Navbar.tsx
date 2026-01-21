import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Experience', to: 'experience' },
        { name: 'Projects', to: 'projects' },
        { name: 'Skills', to: 'skills' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.content}`}>
                <Link to="home" smooth={true} duration={500} className={styles.logo}>
                    <span className={styles.logoAccent}>~/</span>
                    abhishek
                    <span className={styles.logoCursor}>_</span>
                </Link>

                <div className={`${styles.links} ${isMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.navList}>
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className={styles.link}
                                    onClick={() => setIsMenuOpen(false)}
                                    activeClass={styles.active}
                                    spy={true}
                                    offset={-80}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="/assets/Abhishek_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.resumeBtn}
                    >
                        Resume
                    </a>
                </div>

                <button
                    className={styles.mobileMenuBtn}
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile menu overlay */}
            {isMenuOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </nav>
    );
};

export default Navbar;
