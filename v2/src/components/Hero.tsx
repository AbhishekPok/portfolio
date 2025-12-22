import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { config } from '../data/config';

import styles from './Hero.module.css';

import { FaCode, FaServer, FaRocket, FaCheck } from 'react-icons/fa';
import { SiArchlinux } from 'react-icons/si';

const Hero: React.FC = () => {
    return (
        <section id="home" className={`${styles.hero} container`}>
            {/* Left Column: Text */}
            <div className={styles.contentWrapper}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <p className={`${styles.intro} mono`}>Hi, my name is</p>
                    <h1 className={styles.name}>{config.about.name}.</h1>
                    <h2 className={styles.role}>{config.about.role}.</h2>
                    <p className={styles.tagline}>{config.about.bio}</p>

                    <div className={styles.ctaButtons}>
                        <Link to="projects" smooth={true} duration={500} className={styles.primaryBtn}>
                            Check out my work
                        </Link>
                        <Link to="contact" smooth={true} duration={500} className={styles.secondaryBtn}>
                            Get In Touch
                        </Link>
                    </div>
                </motion.div>

                {/* Minimized Terminal for style (optional, can be removed if user wants it gone, but user said "beside text... overlapping each other", implying the boxes are the main visual now. I'll keep terminal below or removing it? 
                   User prompt: "lower box must show... upper part must include...".
                   I will remove the old Terminal component from the main visual flow to strictly follow the "beside the sub text" request with the 2 boxes.
                   The "Interactive Terminal" was a separate requirement. I'll move it below the visuals or keep it as a separate section if needed. 
                   Actually, looking at the layout, having the terminal BELOW this 2-column hero might be too much. 
                   I will comment out the Terminal here to focus on the requested 2-box visual. 
                */}
            </div>

            {/* Right Column: Visuals */}
            <motion.div
                className={styles.visualsWrapper}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                {/* Upper Box: Fastfetch */}
                <div className={`${styles.box} ${styles.fastfetchBox} ${styles.animFloat}`}>
                    <div className={styles.boxHeader}>
                        <div className={styles.boxDot}></div>
                        <div className={styles.boxDot}></div>
                        <div className={styles.boxDot}></div>
                        <span>abhi@portfolio: ~</span>
                    </div>

                    <div className={styles.fetchGrid}>
                        <div className={styles.archLogo}><SiArchlinux /></div>
                        <div className={styles.info}>
                            <div className={styles.infoLine}>
                                <span className={styles.label}>OS</span>
                                <span>Arch Linux x86_64</span>
                            </div>
                            <div className={styles.infoLine}>
                                <span className={styles.label}>Host</span>
                                <span>Portfolio v2.0</span>
                            </div>
                            <div className={styles.infoLine}>
                                <span className={styles.label}>Kernel</span>
                                <span>6.6.6-arch1-1</span>
                            </div>
                            <div className={styles.infoLine}>
                                <span className={styles.label}>Uptime</span>
                                <span>1337 mins</span>
                            </div>
                            <div className={styles.infoLine}>
                                <span className={styles.label}>DE</span>
                                <span>Hyprland</span>
                            </div>
                            <div className={styles.infoLine}>
                                <span className={styles.label}>Shell</span>
                                <span>zsh 5.9</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lower Box: CI/CD Pipeline */}
                <div className={`${styles.box} ${styles.cicdBox} ${styles.animFloatDelay}`}>
                    <div className={styles.boxHeader}>
                        <FaServer /> <span>pipeline-status</span>
                    </div>
                    <div className={styles.pipeline}>
                        <div className={styles.stage}>
                            <div className={styles.stageIcon}><FaCode /></div>
                            <span className={styles.stageName}>Build</span>
                        </div>
                        <div className={styles.arrow}>➜</div>
                        <div className={styles.stage}>
                            <div className={styles.stageIcon}><FaCheck /></div>
                            <span className={styles.stageName}>Test</span>
                        </div>
                        <div className={styles.arrow}>➜</div>
                        <div className={styles.stage}>
                            <div className={styles.stageIcon}><FaRocket /></div>
                            <span className={styles.stageName}>Deploy</span>
                        </div>
                    </div>
                    <div style={{ marginTop: '1rem', height: '4px', background: '#333', borderRadius: '2px', overflow: 'hidden' }}>
                        <div style={{ width: '70%', height: '100%', background: 'var(--color-accent)' }}></div>
                    </div>
                    <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#9ca3af' }}>
                        <span>Running...</span>
                        <span>00:45</span>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
