import React from 'react';
import styles from './Footer.module.css';
import { config } from '../data/config';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <a
                    href={config.about.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                >
                    <FaGithub />
                </a>
                <a
                    href={config.about.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                >
                    <FaLinkedin />
                </a>
            </div>

            <p>Designed & Built by Abhishek Pokhrel</p>
            <p style={{ marginTop: '0.5rem' }}>
                Built with React & Vite <span className="accent">⚡</span>
            </p>
        </footer>
    );
};

export default Footer;
