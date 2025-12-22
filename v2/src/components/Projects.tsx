import React from 'react';
import styles from './Projects.module.css';
import { config } from '../data/config';
import { FaFolder, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="section container">
            <h2 className="mono"><span className="accent">02.</span> Projects</h2>

            <div className={styles.grid}>
                {config.projects.map((project, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconBox}>
                                <FaFolder />
                            </div>
                            <div className={styles.links}>
                                {project.links.github && (
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">
                                        <FaGithub />
                                    </a>
                                )}
                                {/* @ts-ignore - Demo link might not exist on all types yet */}
                                {(project.links as any).demo && (
                                    <a href={(project.links as any).demo} target="_blank" rel="noopener noreferrer" aria-label="Demo Link">
                                        <FaExternalLinkAlt />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className={styles.title}>{project.name}</h3>
                        <ul className={styles.description}>
                            {(project.description as string[]).map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>

                        <div className={styles.techStack}>
                            {project.tech.map(tech => (
                                <span key={tech} className={styles.tag}>{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
