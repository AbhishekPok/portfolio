import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { config } from '../data/config';
import styles from './Sidebars.module.css';

const Sidebars: React.FC = () => {
    return (
        <>
            <motion.div
                className={`${styles.sideContext} ${styles.left}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
            >
                <ul className={styles.socialList}>
                    {config.about.social.github && (
                        <li>
                            <a href={config.about.social.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                                <FiGithub size={20} />
                            </a>
                        </li>
                    )}
                    {config.about.social.linkedin && (
                        <li>
                            <a href={config.about.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <FiLinkedin size={20} />
                            </a>
                        </li>
                    )}
                    {/* Add other socials if they exist in config or hardcode for now as placeholders if wanted, 
               but based on config only github/linkedin/mail are present. 
               I'll add a check if they were there. 
           */}
                </ul>
                <div className={styles.line}></div>
            </motion.div>

            <motion.div
                className={`${styles.sideContext} ${styles.right}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
            >
                <div className={styles.emailWrapper}>
                    <a href={config.about.social.mail} className={styles.emailLink}>
                        {config.about.email}
                    </a>
                </div>
                <div className={styles.line}></div>
            </motion.div>
        </>
    );
};

export default Sidebars;
