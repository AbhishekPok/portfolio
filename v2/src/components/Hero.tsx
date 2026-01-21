import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { config } from '../data/config';
import styles from './Hero.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Hero: React.FC = () => {
    return (
        <section id="home" className={`${styles.hero} container`}>
            {/* Main Content */}
            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <p className={styles.greeting}>
                    <span className="mono">$</span> whoami
                </p>
                <h1 className={styles.name}>
                    {config.about.name}
                </h1>
                <h2 className={styles.role}>{config.about.role}</h2>
                <p className={styles.bio}>{config.about.bio}</p>

                {/* CTA Buttons */}
                <div className={styles.ctaButtons}>
                    <Link to="projects" smooth={true} duration={500} className={styles.primaryBtn}>
                        View Projects
                    </Link>
                    <Link to="contact" smooth={true} duration={500} className={styles.secondaryBtn}>
                        Get In Touch
                    </Link>
                </div>
            </motion.div>

            {/* Bento Grid Cards */}
            <div className={styles.bentoGrid}>
                {/* Stats Card */}
                <motion.div
                    className={`${styles.statsCard} ${styles.gridItem}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>5+</span>
                        <span className={styles.statLabel}>Years Experience</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                        <span className={styles.statNumber}>50+</span>
                        <span className={styles.statLabel}>Projects</span>
                    </div>
                </motion.div>

                {/* Quick Links Card */}
                <motion.div
                    className={`${styles.linksCard} ${styles.gridItem}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h3 className={styles.cardTitle}>Quick Links</h3>
                    <div className={styles.socialLinks}>
                        <a
                            href={config.about.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="GitHub"
                        >
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                        <a
                            href={config.about.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href={`mailto:${config.about.email}`}
                            className={styles.socialLink}
                            aria-label="Email"
                        >
                            <FaEnvelope />
                            <span>Email</span>
                        </a>
                        <a
                            href="/assets/Abhishek_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialLink}
                            aria-label="Resume"
                        >
                            <FaFileDownload />
                            <span>Resume</span>
                        </a>
                    </div>
                </motion.div>

                {/* Terminal Card */}
                <motion.div
                    className={`${styles.terminalCard} ${styles.gridItem}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className={styles.terminalHeader}>
                        <div className={styles.terminalDot}></div>
                        <div className={styles.terminalDot}></div>
                        <div className={styles.terminalDot}></div>
                    </div>
                    <div className={styles.terminalBody}>
                        <p className="mono"><span className={styles.prompt}>~$</span> cat skills.txt</p>
                        <p className="mono">Docker • Kubernetes • AWS</p>
                        <p className="mono">Terraform • Jenkins • ArgoCD</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
