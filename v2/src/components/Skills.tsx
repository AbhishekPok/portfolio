import React from 'react';
import styles from './Skills.module.css';
import { config } from '../data/config';
import { FaDocker, FaAws, FaLinux, FaCode, FaServer, FaGitAlt, FaInfinity, FaDesktop } from 'react-icons/fa';

// Helper to map categories to icons
const getIcon = (category: string) => {
    switch (category) {
        case 'containerization': return <FaDocker />;
        case 'cloud': return <FaAws />;
        case 'linux & scripting': return <FaLinux />;
        case 'iac': return <FaServer />;
        case 'versionControl': return <FaGitAlt />;
        case 'cicd': return <FaInfinity />;
        case 'monitoring': return <FaDesktop />;
        default: return <FaCode />;
    }
}

const formatCategory = (str: string) => {
    if (str === 'iac') return 'IaC';
    if (str === 'cicd') return 'CI/CD';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const Skills: React.FC = () => {
    return (
        <section id="skills" className="section container">
            <h2 className="mono"><span className="accent">04.</span> Skills</h2>
            <div className={styles.grid}>
                {Object.entries(config.skills).map(([category, details]) => (
                    <div key={category} className={styles.categoryCard}>
                        <div className={styles.iconBox}>
                            {getIcon(category)}
                        </div>

                        <h3 className={styles.categoryTitle}>
                            {formatCategory(category)}
                        </h3>

                        <p className={styles.description}>
                            {details.description}
                        </p>

                        <div className={styles.tags}>
                            {details.items.map(skill => (
                                <span key={skill} className={styles.tag}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
